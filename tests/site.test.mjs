import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

const output = new URL('../dist/', import.meta.url);
const read = (path) => readFile(new URL(path, output), 'utf8');

test('app-ads.txt contains required publishers and valid unique entries', async () => {
  const text = await read('app-ads.txt');
  const entries = text.split(/\r?\n/).filter((line) => line.trim() && !line.trimStart().startsWith('#'));
  const required = [
    'google.com, pub-6633902647647422, DIRECT, f08c47fec0942fa0',
    'google.com, pub-1922252697897939, DIRECT, f08c47fec0942fa0',
  ];
  for (const publisher of required) assert.ok(entries.includes(publisher), `missing ${publisher}`);
  const seen = new Set();
  for (const entry of entries) {
    const fields = entry.split(',').map((field) => field.trim());
    assert.ok(fields.length === 3 || fields.length === 4, `invalid field count: ${entry}`);
    const [domain, publisherId, relationship, certificationId] = fields;
    assert.match(domain, /^(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i);
    assert.match(publisherId, /^[a-z0-9_-]+$/i);
    assert.match(relationship, /^(?:DIRECT|RESELLER)$/);
    if (certificationId !== undefined) assert.match(certificationId, /^[0-9a-f]+$/i);
    const key = `${domain.toLowerCase()},${publisherId}`;
    assert.ok(!seen.has(key), `duplicate publisher: ${entry}`);
    seen.add(key);
  }
  assert.equal(text.includes('<html'), false);
});

test('all required direct routes are emitted in English and Arabic', async () => {
  for (const path of ['', 'privacy', 'terms', 'delete-account', 'contact', 'about', 'ar', 'ar/privacy', 'ar/terms', 'ar/delete-account', 'ar/contact', 'ar/about']) {
    const html = await read(path ? `${path}/index.html` : 'index.html');
    assert.match(html, /<!doctype html>/i, path);
    assert.match(html, /Creative Rewards App/, path);
  }
});

test('public routes declare language, direction, a skip link, and a main landmark', async () => {
  for (const [path, lang, dir] of [['index.html', 'en', 'ltr'], ['privacy/index.html', 'en', 'ltr'], ['ar/index.html', 'ar', 'rtl'], ['ar/privacy/index.html', 'ar', 'rtl']]) {
    const html = await read(path);
    assert.match(html, new RegExp(`<html lang="${lang}" dir="${dir}"`), path);
    assert.match(html, /href="#main"/, path);
    assert.match(html, /<main id="main">/, path);
    assert.match(html, /aria-label="Main navigation|aria-label="التنقل الرئيسي/, path);
  }
});

test('local links on public pages resolve to generated files', async () => {
  const pages = ['index.html', 'privacy/index.html', 'terms/index.html', 'delete-account/index.html', 'contact/index.html', 'about/index.html', 'ar/index.html', 'ar/privacy/index.html', 'ar/terms/index.html', 'ar/delete-account/index.html', 'ar/contact/index.html', 'ar/about/index.html'];
  for (const sourcePath of pages) {
    const html = await read(sourcePath);
    const links = [...html.matchAll(/\shref="(\/[^"#?]*)"/g)].map((match) => match[1]);
    for (const link of links) {
      if (link === '/') continue;
      const target = link.endsWith('/') ? `${link.slice(1)}index.html` : link.slice(1);
      await read(target).catch(() => assert.fail(`${sourcePath} points to missing ${link}`));
    }
  }
});

test('privacy page discloses the current app data and providers', async () => {
  const html = await read('privacy/index.html');
  for (const text of [
    'email address (confirmed with a one-time code',
    'PUBG Player ID',
    'Points balance and Points transactions',
    'participation number assigned by our server',
    'contact details, such as a phone number and city, so we can deliver your prize',
    'push-notification token',
    'Firebase Cloud Messaging',
    'AdMob',
    'app-open ads',
    'rewarded ads',
    'non-personalized ads',
    'Joining a giveaway never requires watching an ad.',
    'Profile &gt; Account Settings &gt; Delete account',
    '14-day grace period',
    'We do not sell personal information.',
  ]) {
    assert.ok(html.includes(text), `privacy page should include: ${text}`);
  }
  assert.doesNotMatch(html, /No data collected|we collect no data/i);
});

test('terms page states points, downloads, rewards, giveaways and claims', async () => {
  const html = await read('terms/index.html');
  for (const text of [
    'Do not represent money or stored cash value.',
    'Each paid download requires a new Points deduction, including repeat downloads of the same image.',
    'A rejected request does not refund the Points spent on the download.',
    'Joining a giveaway does not require buying an image, spending Points or watching an advertisement.',
    'Claim Your Prize until the claim deadline',
    'interstitial ads that may appear when you open a giveaway',
  ]) {
    assert.ok(html.includes(text), `terms page should include: ${text}`);
  }
});

test('legal pages carry the new date, both languages, and no outdated or placeholder text', async () => {
  const pages = {
    'privacy/index.html': ['Last updated: October 25, 2026', '15. Contact Us'],
    'terms/index.html': ['Last updated: October 25, 2026', '18. Contact'],
    'ar/privacy/index.html': ['آخر تحديث: 25 أكتوبر 2026', 'سياسة الخصوصية', '15. تواصل معنا'],
    'ar/terms/index.html': ['آخر تحديث: 25 أكتوبر 2026', 'الشروط والأحكام', '18. التواصل'],
    'delete-account/index.html': ['Profile &gt; Account Settings &gt; Delete account', '14-day grace period'],
    'ar/delete-account/index.html': ['إعدادات الحساب', '14 يوماً'],
  };
  for (const [page, texts] of Object.entries(pages)) {
    const html = await read(page);
    for (const text of texts) assert.ok(html.includes(text), `${page} should include: ${text}`);
    assert.ok(html.includes('zeromansms123@gmail.com'), `${page} should show the support email`);
    // The previous app model (phone-number identities on Supabase) is gone.
    assert.doesNotMatch(
      html,
      /Supabase|anonymous[- ]auth|device-scoped|phone number is normalized|12 October 2026|12 أكتوبر 2026/i,
      page,
    );
    assert.doesNotMatch(html, /TODO|TBD|lorem ipsum|\[placeholder\]/i, page);
  }
});

test('deletion page explains in-app deletion and never claims instant success', async () => {
  const html = await read('delete-account/index.html');
  assert.match(html, /Delete your account in the app/);
  assert.match(html, /Confirm with your password/);
  assert.match(html, /request deletion by email/i);
  assert.doesNotMatch(html, /your data has been deleted|deleted instantly/i);
  assert.doesNotMatch(html, /no in-app deletion control/i);
});

test('sitemap and crawler rules expose the public site and do not block crawlers', async () => {
  const sitemap = await read('sitemap.xml');
  const robots = await read('robots.txt');
  assert.match(sitemap, /https:\/\/creativerewardapp\.tech\/privacy\//);
  assert.match(sitemap, /https:\/\/creativerewardapp\.tech\/ar\/privacy\//);
  assert.match(robots, /User-agent: \*/);
  assert.match(robots, /Allow: \//);
  assert.doesNotMatch(robots, /Disallow: \/app-ads\.txt/);
  assert.equal(await read('CNAME'), 'creativerewardapp.tech\n');
});

test('built pages contain no known credentials or service-role secrets', async () => {
  const files = ['index.html', 'privacy/index.html', 'terms/index.html', 'delete-account/index.html', 'ar/privacy/index.html'];
  const pages = await Promise.all(files.map((file) => read(file)));
  const joined = pages.join('\n');
  assert.doesNotMatch(joined, /service[_-]?role|SUPABASE_SERVICE_ROLE|sb_secret_[A-Za-z0-9]+/i);
  assert.ok(joined.includes('zeromansms123@gmail.com'));
});
