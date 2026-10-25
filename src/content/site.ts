export type Lang = 'en' | 'ar';
/** A legal section. An empty title marks the untitled introduction; `after` follows the bullets. */
export type Section = { title: string; paragraphs?: string[]; bullets?: string[]; after?: string[] };

export const site = {
  name: 'Creative Rewards App',
  domain: 'https://creativerewardapp.tech',
  packageId: 'com.creativehub.rewardsapp',
  supportEmail: 'mohamed.elsamman.dev@gmail.com',
  playUrl: 'https://play.google.com/store/apps/details?id=com.creativehub.rewardsapp',
  // Set this after the owner confirms the legal identity. Public copy falls back
  // to the app name and never renders a placeholder legal name.
  legalOperatorName: '',
} as const;

export const pageKeys = ['privacy', 'terms', 'delete-account', 'contact', 'about'] as const;
export type PageKey = typeof pageKeys[number];

export const copy: Record<Lang, {
  language: string; direction: 'ltr' | 'rtl'; switchLabel: string;
  nav: { home: string; privacy: string; terms: string; contact: string; about: string; language: string; menu: string };
  seo: Record<'home' | PageKey, { title: string; description: string }>;
  home: { eyebrow: string; titleA: string; titleB: string; lead: string; download: string; how: string; howLead: string; steps: { title: string; body: string }[]; adminTitle: string; adminLead: string; adminItems: { title: string; body: string }[]; ctaTitle: string; ctaBody: string; browse: string };
  privacy: Section[];
  terms: Section[];
  deletion: { intro: string; stepsTitle: string; steps: string[]; verifyTitle: string; verify: string; deleteTitle: string; deleteText: string; contact: string; noAutomation: string };
  contact: { intro: string; support: string; privacy: string; deletion: string; response: string };
  about: { intro: string; title: string; body: string };
  labels: { lastUpdated: string; toc: string; backHome: string; appName: string; operator: string; notLegalEntity: string; contactUs: string; external: string };
}> = {
  en: {
    language: 'en', direction: 'ltr', switchLabel: 'العربية',
    nav: { home: 'Home', privacy: 'Privacy', terms: 'Terms', contact: 'Contact', about: 'About', language: 'Language', menu: 'Open navigation' },
    seo: {
      home: { title: 'Creative Rewards App — Discover Giveaways', description: 'Browse giveaway campaigns, review each organizer’s rules, and keep track of your participation in one app.' },
      privacy: { title: 'Privacy Policy — Creative Rewards App', description: "How Creative Rewards handles account, Points, image, reward request, giveaway, device, notification and advertising information." },
      terms: { title: 'Terms & Conditions — Creative Rewards App', description: "Terms for using Creative Rewards: Points, image downloads, image rewards, giveaways, prize claims and advertising." },
      'delete-account': { title: 'Data Deletion — Creative Rewards App', description: "How to delete your Creative Rewards account in the app or request deletion by email." },
      contact: { title: 'Contact & Support — Creative Rewards App', description: 'Contact Creative Rewards App support about the app, privacy, or data deletion.' },
      about: { title: 'About — Creative Rewards App', description: 'Learn how participants and giveaway organizers use Creative Rewards App.' },
    },
    home: {
      eyebrow: 'Giveaways, clearly organized',
      titleA: 'Discover a giveaway.', titleB: 'Join on your terms.',
      lead: 'Explore campaigns, read the organizer’s details and rules, and receive a participation number when an eligible entry is accepted. Every campaign has its own terms; winning is never guaranteed.',
      download: 'Get it on Google Play', how: 'A clear way to take part', howLead: 'The app brings campaign information and participation details together, so you can see what a giveaway requires before you join.',
      steps: [
        { title: 'Browse campaigns', body: 'Explore available giveaways and review prizes, dates, organizer details, and campaign rules.' },
        { title: 'Check eligibility', body: 'Read the campaign conditions. Participation is available only when that giveaway is open and you meet its requirements.' },
        { title: 'Receive your number', body: 'After the server accepts your entry, the app shows the participation number returned by the service.' },
        { title: 'Follow the result', body: 'See your joined giveaways and check results or notifications when an organizer completes a campaign.' },
      ],
      adminTitle: 'A dedicated experience for organizers', adminLead: 'Giveaway administrators manage their own campaigns through a separate, authorized area of the app.',
      adminItems: [
        { title: 'Set campaign details', body: 'Add the prize information, images, description, rules, dates, and eligibility conditions.' },
        { title: 'Monitor participation', body: 'Review campaign activity and participant totals in the organizer dashboard.' },
        { title: 'Publish a result', body: 'Manage winner selection and result announcements according to the rules shown for that campaign.' },
      ],
      ctaTitle: 'Read the campaign before joining.', ctaBody: 'Each organizer is responsible for its giveaway terms, winner selection, and prize fulfillment.', browse: 'View the app on Google Play',
    },
    privacy: [
      {
        "title": "",
        "paragraphs": [
          "Creative Rewards (\"we\", \"our\" or \"us\") respects your privacy and protects the information you provide when you use our mobile application.",
          "This Privacy Policy explains what information we collect, how we use it, how it is stored, and the choices you have.",
          "By using Creative Rewards, you acknowledge the practices described in this policy."
        ]
      },
      {
        "title": "1. Information We Collect",
        "paragraphs": [
          "<strong class=\"legal-subheading\">Account information</strong>",
          "When you create an account, we collect your email address (confirmed with a one-time code sent to it), the password you choose, your selected avatar and your preferred language. You can also add a display name. Each sign-in session is linked to a device name so you can review and end your sessions.",
          "<strong class=\"legal-subheading\">Platform account identifiers</strong>",
          "You may choose to provide identifiers for supported game or social platforms, such as a PUBG Player ID, a Riot ID (Name#TAG), or an Instagram, TikTok or Facebook username. You can keep them in Saved Accounts, and you enter one when you request the reward linked to an image. The app shows saved identifiers masked, and we record your agreement when you save one.",
          "We never ask for your game or social-media passwords, login codes or cookies.",
          "<strong class=\"legal-subheading\">Points and app activity</strong>",
          "We keep your Points balance and Points transactions (for example Points earned from rewarded ads and Points spent on downloads), the images you unlock and download, and your reward requests with their status.",
          "<strong class=\"legal-subheading\">Giveaway participation</strong>",
          "When you join a giveaway, we store your entry, the participation number assigned by our server, the giveaway and its result.",
          "If you win, we ask for contact details, such as a phone number and city, so we can deliver your prize.",
          "<strong class=\"legal-subheading\">Device and technical information</strong>",
          "To send notifications, the app registers your device with a push-notification token, the platform, the app version and your language. Our servers may keep technical request logs, such as IP address and time, to operate and protect the service. The app does not include a separate analytics or crash-reporting service.",
          "<strong class=\"legal-subheading\">Advertising information</strong>",
          "The app shows Google AdMob ads: optional rewarded ads that earn Points in the Wallet, interstitial ads that may appear when you open a giveaway's details, and app-open ads. The app requests non-personalized ads. Google may still process device and advertising identifiers, IP address, approximate location derived from it, and ad interactions, under its own policies and the consent choices that apply to you."
        ]
      },
      {
        "title": "2. How We Use Information",
        "paragraphs": [
          "We use the information to:"
        ],
        "bullets": [
          "Create, authenticate and manage accounts.",
          "Show and maintain Points balances and transaction history.",
          "Provide images and downloads.",
          "Keep saved platform identifiers and process the reward requests you make.",
          "Manage giveaway participation and publish results.",
          "Contact winners and arrange prize delivery.",
          "Send notifications about your account and giveaways.",
          "Investigate technical problems and improve performance.",
          "Prevent duplicate transactions, fraud and misuse.",
          "Meet legal obligations."
        ]
      },
      {
        "title": "3. Images and Downloads",
        "paragraphs": [
          "Creative Rewards offers digital images to browse and download.",
          "Some images are free. Paid images cost Points for every download, including repeat downloads of the same image, and the cost is shown before you confirm.",
          "We record the image, the Points spent and your download history to run the service, provide support and keep accurate transaction records.",
          "Downloaded images are saved to your device's photo gallery and stay there until you delete them."
        ]
      },
      {
        "title": "4. Platform Account Information",
        "paragraphs": [
          "Providing a platform identifier is not the same as signing in to that platform.",
          "Identifiers are used to manage your saved accounts and to deliver the rewards you request, such as in-game currency linked to an image. Authorized administrators can see the identifier of a request when they process it, and when needed for security or support.",
          "You can edit or delete saved identifiers in Profile &gt; Saved Accounts. An identifier you already submitted with a reward request stays with that request."
        ]
      },
      {
        "title": "5. Giveaways and Winners",
        "paragraphs": [
          "Eligible users can join giveaways in Creative Rewards.",
          "We store giveaway participation, winner status, and the contact details winners submit.",
          "Winner contact details are used to verify the claim, communicate with the winner and deliver the prize. You can submit them from the winner announcement or later from the giveaway in My Giveaways, until the claim deadline.",
          "If you do not submit the requested details, we may be unable to deliver the prize."
        ]
      },
      {
        "title": "6. Points and Advertisements",
        "paragraphs": [
          "Creative Rewards uses an in-app Points system. Points are earned through supported activities, including optional rewarded ads, and are spent on eligible features such as image downloads.",
          "Points from a rewarded ad are credited only after our server verifies that the ad was completed. We keep transaction records to track Points credited and spent and to prevent duplicate or unauthorized activity.",
          "Joining a giveaway never requires watching an ad.",
          "Ads are provided by Google AdMob, whose processing of information is governed by Google's privacy policy and the applicable consent requirements."
        ]
      },
      {
        "title": "7. Notifications",
        "paragraphs": [
          "With your permission, we send notifications about giveaway updates, winner announcements, your orders and other account events.",
          "You can manage notification permission in your device settings."
        ]
      },
      {
        "title": "8. Sharing of Information",
        "paragraphs": [
          "We do not sell personal information.",
          "We share information only with:"
        ],
        "bullets": [
          "Service providers that host and operate our servers, and Google Firebase Cloud Messaging, which delivers notifications.",
          "Google AdMob, which processes advertising information as described above.",
          "Authorized administrators who need it to operate the service and handle your requests.",
          "Authorities or other parties when the law requires disclosure."
        ],
        "after": [
          "Any sharing is limited to these operational purposes and legal obligations."
        ]
      },
      {
        "title": "9. Data Security",
        "paragraphs": [
          "We use technical and organizational safeguards to protect information against unauthorized access, alteration, disclosure or loss. Administrative access is limited by role.",
          "On your device, sign-in tokens are kept in secure storage and are excluded from device backups.",
          "No method of storage or transmission over the internet is completely secure."
        ]
      },
      {
        "title": "10. Data Retention",
        "paragraphs": [
          "We keep personal information for as long as needed to operate the app, maintain your account, support transactions, run giveaways, resolve disputes, prevent misuse and meet legal obligations.",
          "When you delete your account, it is removed after a 14-day grace period, together with its Points, orders and giveaway entries. Limited records may be kept longer where the law requires or permits it, for example to prevent fraud or handle disputes."
        ]
      },
      {
        "title": "11. Your Privacy Choices",
        "paragraphs": [
          "Depending on the features available and applicable law, you can:"
        ],
        "bullets": [
          "Review and update your profile information.",
          "Edit or delete saved platform identifiers.",
          "Manage notification permission.",
          "Review advertising privacy choices in the app when the consent form offers them.",
          "Request access to or correction of your personal information.",
          "Delete your account in the app: Profile > Account Settings > Delete account. You confirm with your password, the account is deleted after 14 days, and signing in again during that time cancels the request."
        ],
        "after": [
          "You can also request deletion by email at the address below. We may need to verify that the request comes from the account owner."
        ]
      },
      {
        "title": "12. Children's Privacy",
        "paragraphs": [
          "Creative Rewards is not intended for children below the minimum age permitted by applicable law without any required parent or guardian authorization.",
          "Where a giveaway has additional age requirements, they are stated in its rules.",
          "If we learn that personal information was collected in violation of children's privacy requirements, we will take appropriate steps to address it."
        ]
      },
      {
        "title": "13. Third-Party Services",
        "paragraphs": [
          "We rely on Google Firebase (notifications) and Google AdMob (advertising), which process information under their own privacy policies.",
          "We are not responsible for the independent privacy practices of unrelated external apps or services, including the game and social platforms whose identifiers you provide."
        ]
      },
      {
        "title": "14. Changes to This Privacy Policy",
        "paragraphs": [
          "We may update this Privacy Policy when the app, our practices or legal requirements change. The updated version will show a new date and, where required, we will give additional notice."
        ]
      },
      {
        "title": "15. Contact Us",
        "paragraphs": [
          "For questions about privacy, your personal information or deletion requests, contact us:"
        ],
        "bullets": [
          "Application: Creative Rewards",
          "Email: mohamed.elsamman.dev@gmail.com"
        ]
      }
    ],
    terms: [
      {
        "title": "",
        "paragraphs": [
          "Welcome to Creative Rewards.",
          "These Terms &amp; Conditions govern your use of the Creative Rewards mobile application, including image browsing, Points, downloads, image rewards, giveaways, account features and related services.",
          "By accessing or using the application, you agree to these Terms &amp; Conditions."
        ]
      },
      {
        "title": "1. Use of the Application",
        "paragraphs": [
          "Creative Rewards provides digital images, an in-app Points system, rewards linked to some images, giveaway participation and related account features.",
          "You must provide accurate information when a feature requires it and use the application lawfully.",
          "We may update, change, suspend or discontinue features where reasonably necessary."
        ]
      },
      {
        "title": "2. User Accounts",
        "paragraphs": [
          "You are responsible for activity on your account and for keeping your login details secure.",
          "You agree not to impersonate another person, create accounts for fraudulent purposes or try to bypass the application's security.",
          "We may restrict accounts involved in misuse, fraud, unauthorized automation or violations of these Terms."
        ]
      },
      {
        "title": "3. Points System",
        "paragraphs": [
          "Creative Rewards uses virtual Points for supported in-app activities. Points can be earned through eligible activities, including optional rewarded advertisements. The number of Points for an activity may change with the application's configuration.",
          "Points:"
        ],
        "bullets": [
          "Are virtual units used only within Creative Rewards.",
          "Do not represent money or stored cash value.",
          "Cannot be withdrawn as cash.",
          "Cannot be transferred between users unless a feature expressly allows it.",
          "Are deducted when you confirm an eligible activity, such as a paid download.",
          "Are subject to fraud prevention and transaction verification."
        ],
        "after": [
          "Points are credited only after our server has verified the activity. Manipulating Points balances, advertising events or transaction records is prohibited."
        ]
      },
      {
        "title": "4. Digital Images",
        "paragraphs": [
          "Creative Rewards lets you browse and download digital images. Some images are free; others cost a stated number of Points.",
          "The cost is shown before you confirm a paid download. Each paid download requires a new Points deduction, including repeat downloads of the same image. Please review the cost before confirming.",
          "If saving a paid download fails, you can retry for a short time without a new charge. After that, downloading again costs Points again.",
          "Downloading an image does not transfer ownership of its intellectual-property rights. Unless expressly authorized, you may not redistribute, resell, sublicense or commercially exploit images obtained through Creative Rewards."
        ]
      },
      {
        "title": "5. Image Rewards",
        "paragraphs": [
          "Some images include a linked reward, such as in-game currency for a supported game.",
          "After downloading such an image, you can request the reward by entering the account identifier that should receive it. The request appears in My Orders with its status: Pending, Processing, Completed or Rejected.",
          "Requests are reviewed and fulfilled by our team. You are responsible for entering the correct identifier. A rejected request does not refund the Points spent on the download."
        ]
      },
      {
        "title": "6. Saved Platform Accounts",
        "paragraphs": [
          "You can save identifiers for supported platforms, such as game account IDs or social-media usernames.",
          "You are responsible for providing accurate identifiers and for having permission to use them.",
          "Do not submit passwords, private login codes or another person's information without authorization.",
          "Saved identifiers may be linked to your reward requests, as explained in the Privacy Policy."
        ]
      },
      {
        "title": "7. Giveaways",
        "paragraphs": [
          "Creative Rewards may offer promotional giveaways to eligible users. Eligibility, participation period, prize details and conditions may differ between giveaways.",
          "Participation does not guarantee winning. You must follow the rules shown for each giveaway, including any steps it asks you to complete before joining.",
          "Joining a giveaway does not require buying an image, spending Points or watching an advertisement.",
          "Only entries confirmed by our server, with the participation number it assigns, are accepted."
        ]
      },
      {
        "title": "8. Giveaway Selection and Results",
        "paragraphs": [
          "Winners are selected or confirmed according to each giveaway's rules, using the records kept by the application.",
          "An ended giveaway may remain visible for information. You can see your participation and results in the app.",
          "We may investigate suspected abuse, duplicate entries or rule violations."
        ]
      },
      {
        "title": "9. Winner Contact Information and Prize Claims",
        "paragraphs": [
          "If you win, the application may show a winner announcement and celebration.",
          "You do not have to submit your contact details immediately. You can return to the giveaway in My Giveaways and use Claim Your Prize until the claim deadline.",
          "You must provide accurate information when claiming a prize. Not submitting it before the deadline may affect your ability to receive the prize, according to the giveaway's rules.",
          "Prize delivery, verification and related conditions follow each giveaway's terms."
        ]
      },
      {
        "title": "10. Notifications",
        "paragraphs": [
          "The application may send notifications about giveaways, winner announcements, orders, Points, account events and service updates.",
          "Delivery depends on device permission, network connection and service availability. A missed or delayed notification does not change an officially recorded giveaway result."
        ]
      },
      {
        "title": "11. Advertisements",
        "paragraphs": [
          "The application shows advertisements: optional rewarded videos in the Wallet, interstitial ads that may appear when you open a giveaway's details, and app-open ads.",
          "A rewarded ad gives Points only when our server confirms that it was completed and that you are eligible. Closing or skipping it may result in no Points.",
          "Ad availability may vary by device, country and service conditions."
        ]
      },
      {
        "title": "12. Prohibited Activities",
        "paragraphs": [
          "You agree not to:"
        ],
        "bullets": [
          "Manipulate application requests or Points transactions.",
          "Exploit bugs to obtain unauthorized benefits.",
          "Use automated accounts or bots to abuse participation systems.",
          "Submit fraudulent account information.",
          "Circumvent participation limits or eligibility rules.",
          "Interfere with the application's security or infrastructure.",
          "Redistribute protected content without authorization."
        ],
        "after": [
          "We may investigate suspected violations and take proportionate action where the law allows."
        ]
      },
      {
        "title": "13. Availability and Technical Issues",
        "paragraphs": [
          "We aim to keep the service reliable but cannot guarantee uninterrupted availability. Network outages, maintenance, third-party failures, device limitations or software defects may temporarily affect the application.",
          "If a technical problem affects a recorded activity, you can contact support for a review."
        ]
      },
      {
        "title": "14. Intellectual Property",
        "paragraphs": [
          "The Creative Rewards application, branding, interface, software and original content are protected by intellectual-property laws.",
          "Third-party names, trademarks and content belong to their owners. Access to content through the application grants no rights beyond those expressly given."
        ]
      },
      {
        "title": "15. Account Restrictions and Termination",
        "paragraphs": [
          "We may restrict or suspend access where needed to address fraud, security incidents, legal requirements or material violations of these Terms.",
          "You can delete your account in the app (Profile &gt; Account Settings &gt; Delete account) or by contacting support. The account is deleted after a 14-day grace period; signing in during that period cancels the request. Legal retention obligations may continue after closure."
        ]
      },
      {
        "title": "16. Disclaimer and Liability",
        "paragraphs": [
          "Creative Rewards is provided subject to applicable laws and consumer-protection rights. While we aim for accuracy and reliability, features may occasionally be unavailable or affected by technical issues.",
          "Nothing in these Terms excludes rights or liabilities that cannot lawfully be excluded."
        ]
      },
      {
        "title": "17. Changes to These Terms",
        "paragraphs": [
          "We may update these Terms when features, operating requirements or legal obligations change. The updated version will show a new date and, where required, material changes will be communicated to users."
        ]
      },
      {
        "title": "18. Contact",
        "paragraphs": [
          "For questions, help or account requests:"
        ],
        "bullets": [
          "Application: Creative Rewards",
          "Email: mohamed.elsamman.dev@gmail.com"
        ]
      }
    ],
    deletion: {
      "intro": "You can delete your Creative Rewards account and its personal data in the app, or ask support to do it by email.",
      "stepsTitle": "Delete your account in the app",
      "steps": [
        "Open Creative Rewards and sign in.",
        "Go to Profile &gt; Account Settings &gt; Delete account.",
        "Confirm with your password.",
        "Your account is deleted after a 14-day grace period. Signing in again during that time cancels the request."
      ],
      "verifyTitle": "Verification",
      "verify": "Only the account owner can delete an account: in the app you confirm with your password, and by email we may ask you to prove that you own the account. We never ask for your password by email.",
      "deleteTitle": "What is deleted",
      "deleteText": "After the grace period, the account is deleted together with its Points, orders and giveaway entries. Limited records may be kept longer where the law requires or permits it, for example to prevent fraud or handle disputes.",
      "contact": "If you cannot use the app, request deletion by email at",
      "noAutomation": "Email requests are handled manually by support. This website does not delete data by itself."
    },
    contact: { intro: 'Contact the Creative Rewards App support team for help with the app, privacy questions, or data deletion requests.', support: 'General support', privacy: 'Privacy questions', deletion: 'Data deletion', response: 'Please include the app name and a short description. Do not include passwords, session tokens, or unnecessary sensitive information. Support may request additional details to verify a deletion request.' },
    about: { intro: 'Creative Rewards App brings participant browsing and giveaway organizer tools into one mobile app.', title: 'For participants and organizers', body: 'Participants can browse campaigns, review each organizer’s rules, join eligible giveaways, view their participation numbers, and follow published results. Authorized administrators can create campaigns and manage their giveaway activity. Each organizer is responsible for its own campaign terms and prize fulfillment.' },
    labels: { lastUpdated: "Last updated: October 25, 2026", toc: 'On this page', backHome: 'Back to home', appName: 'Application', operator: 'Operator', notLegalEntity: 'Creative Rewards App is the application name. This notice does not identify a separate registered company or legal entity.', contactUs: 'Contact support', external: 'Google Play listing' },
  },
  ar: {
    language: 'ar', direction: 'rtl', switchLabel: 'English',
    nav: { home: 'الرئيسية', privacy: 'الخصوصية', terms: 'الشروط', contact: 'تواصل معنا', about: 'عن التطبيق', language: 'اللغة', menu: 'فتح القائمة' },
    seo: {
      home: { title: 'Creative Rewards App — اكتشف المسابقات', description: 'تصفّح حملات المسابقات، واقرأ شروط كل منظم، وتابع مشاركاتك من تطبيق واحد.' },
      privacy: { title: 'سياسة الخصوصية — Creative Rewards App', description: "كيف يتعامل Creative Rewards مع معلومات الحساب والنقاط والصور وطلبات المكافآت والسحوبات والجهاز والإشعارات والإعلانات." },
      terms: { title: 'الشروط والأحكام — Creative Rewards App', description: "شروط استخدام Creative Rewards: النقاط وتنزيل الصور ومكافآت الصور والسحوبات والمطالبة بالجوائز والإعلانات." },
      'delete-account': { title: 'حذف البيانات — Creative Rewards App', description: "كيفية حذف حسابك في Creative Rewards من التطبيق أو طلب الحذف عبر البريد الإلكتروني." },
      contact: { title: 'الدعم والتواصل — Creative Rewards App', description: 'تواصل مع دعم Creative Rewards App بشأن التطبيق أو الخصوصية أو حذف البيانات.' },
      about: { title: 'عن التطبيق — Creative Rewards App', description: 'تعرف على تجربة المشاركين ومنظمي المسابقات في التطبيق.' },
    },
    home: {
      eyebrow: 'مسابقات واضحة ومنظمة', titleA: 'اكتشف مسابقة.', titleB: 'وشارك وفق شروطها.',
      lead: 'تصفّح الحملات، واقرأ التفاصيل والقواعد التي يحددها المنظم، واحصل على رقم مشاركة عند قبول مشاركة مؤهلة. لكل حملة شروطها، ولا يضمن التطبيق الفوز.',
      download: 'حمّل التطبيق من Google Play', how: 'طريقة واضحة للمشاركة', howLead: 'يجمع التطبيق معلومات الحملة وتفاصيل المشاركة لتعرف المتطلبات قبل الانضمام.',
      steps: [
        { title: 'تصفّح الحملات', body: 'استعرض المسابقات المتاحة واقرأ الجوائز والتواريخ وبيانات المنظم والقواعد.' },
        { title: 'تحقق من الأهلية', body: 'اقرأ شروط الحملة. المشاركة متاحة عند فتحها واستيفاء متطلباتها.' },
        { title: 'استلم رقمك', body: 'بعد تأكيد الخادم للمشاركة، يعرض التطبيق رقم المشاركة الذي أعادته الخدمة.' },
        { title: 'تابع النتيجة', body: 'شاهد المسابقات التي شاركت بها وتابع النتائج أو الإشعارات بعد انتهاء الحملة.' },
      ],
      adminTitle: 'تجربة مخصصة لمنظمي المسابقات', adminLead: 'يدير مسؤولو المسابقات حملاتهم من مساحة منفصلة ومصرح بها داخل التطبيق.',
      adminItems: [
        { title: 'أضف تفاصيل الحملة', body: 'أدخل بيانات الجائزة والصور والوصف والقواعد والتواريخ وشروط الأهلية.' },
        { title: 'تابع المشاركات', body: 'راجع نشاط الحملة وأعداد المشاركين في لوحة الإدارة.' },
        { title: 'أعلن النتيجة', body: 'أدر اختيار الفائز وإعلان النتيجة وفق القواعد المنشورة للحملة.' },
      ],
      ctaTitle: 'اقرأ الشروط قبل المشاركة.', ctaBody: 'كل منظم مسؤول عن شروط مسابقته وآلية اختيار الفائز وتسليم الجائزة.', browse: 'عرض التطبيق على Google Play',
    },
    privacy: [
      {
        "title": "",
        "paragraphs": [
          "تحترم Creative Rewards (\"نحن\") خصوصيتك وتحمي المعلومات التي تقدّمها عند استخدامك لتطبيقنا.",
          "توضّح سياسة الخصوصية هذه المعلومات التي نجمعها، وكيف نستخدمها ونخزّنها، والخيارات المتاحة لك.",
          "باستخدامك Creative Rewards، فإنك تقرّ بالممارسات الموضّحة في هذه السياسة."
        ]
      },
      {
        "title": "1. المعلومات التي نجمعها",
        "paragraphs": [
          "<strong class=\"legal-subheading\">معلومات الحساب</strong>",
          "عند إنشاء حساب، نجمع بريدك الإلكتروني (يُؤكَّد برمز لمرة واحدة يُرسل إليه)، وكلمة المرور التي تختارها، والصورة الرمزية التي تحددها، ولغتك المفضّلة. ويمكنك أيضاً إضافة اسم للعرض. ترتبط كل جلسة تسجيل دخول باسم الجهاز حتى تتمكن من مراجعة جلساتك وإنهائها.",
          "<strong class=\"legal-subheading\">معرّفات حسابات المنصّات</strong>",
          "يمكنك اختيارياً تقديم معرّفات لمنصّات الألعاب أو التواصل الاجتماعي المدعومة، مثل معرّف لاعب PUBG أو Riot ID ‏(Name#TAG) أو اسم مستخدم في Instagram أو TikTok أو Facebook. يمكنك حفظها في الحسابات المحفوظة، وتُدخل أحدها عند طلب المكافأة المرتبطة بصورة. يعرض التطبيق المعرّفات المحفوظة بشكل مخفي جزئياً، ونسجّل موافقتك عند حفظ أي معرّف.",
          "لا نطلب أبداً كلمات مرور حساباتك في الألعاب أو مواقع التواصل، ولا رموز الدخول أو ملفات تعريف الارتباط.",
          "<strong class=\"legal-subheading\">النقاط ونشاط التطبيق</strong>",
          "نحتفظ برصيد نقاطك ومعاملات النقاط (مثل النقاط المكتسبة من الإعلانات بمكافأة والنقاط المصروفة على التنزيلات)، والصور التي تفتحها وتنزّلها، وطلبات المكافآت الخاصة بك مع حالتها.",
          "<strong class=\"legal-subheading\">المشاركة في السحوبات</strong>",
          "عند انضمامك إلى سحب، نخزّن مشاركتك ورقم المشاركة الذي يخصّصه خادمنا والسحب ونتيجته.",
          "إذا فزت، نطلب منك بيانات تواصل، مثل رقم الهاتف والمدينة، لنتمكّن من تسليم جائزتك.",
          "<strong class=\"legal-subheading\">معلومات الجهاز والمعلومات التقنية</strong>",
          "لإرسال الإشعارات، يسجّل التطبيق جهازك برمز الإشعارات ونوع النظام وإصدار التطبيق ولغتك. وقد تحتفظ خوادمنا بسجلات تقنية للطلبات، مثل عنوان IP والوقت، لتشغيل الخدمة وحمايتها. لا يتضمّن التطبيق خدمة تحليلات أو خدمة منفصلة لتقارير الأعطال.",
          "<strong class=\"legal-subheading\">معلومات الإعلانات</strong>",
          "يعرض التطبيق إعلانات Google AdMob: إعلانات اختيارية بمكافأة تمنح نقاطاً في المحفظة، وإعلانات بينية قد تظهر عند فتح تفاصيل سحب، وإعلانات عند فتح التطبيق. يطلب التطبيق إعلانات غير مخصّصة، ومع ذلك قد تعالج Google معرّفات الجهاز والإعلانات وعنوان IP والموقع التقريبي المستنتج منه والتفاعل مع الإعلانات، وفقاً لسياساتها وخيارات الموافقة المطبّقة عليك."
        ]
      },
      {
        "title": "2. كيف نستخدم المعلومات",
        "paragraphs": [
          "نستخدم المعلومات من أجل:"
        ],
        "bullets": [
          "إنشاء الحسابات والتحقق منها وإدارتها.",
          "عرض أرصدة النقاط وسجل المعاملات والحفاظ عليها.",
          "توفير الصور والتنزيلات.",
          "حفظ معرّفات المنصّات ومعالجة طلبات المكافآت التي تقدّمها.",
          "إدارة المشاركة في السحوبات ونشر النتائج.",
          "التواصل مع الفائزين وترتيب تسليم الجوائز.",
          "إرسال إشعارات تخص حسابك والسحوبات.",
          "فحص المشكلات التقنية وتحسين الأداء.",
          "منع المعاملات المكرّرة والاحتيال وإساءة الاستخدام.",
          "الوفاء بالالتزامات القانونية."
        ]
      },
      {
        "title": "3. الصور والتنزيلات",
        "paragraphs": [
          "يوفّر Creative Rewards صوراً رقمية لتصفّحها وتنزيلها.",
          "بعض الصور مجانية. أما الصور المدفوعة فتكلّف نقاطاً عند كل تنزيل، بما في ذلك تكرار تنزيل الصورة نفسها، ويُعرض السعر قبل أن تؤكّد.",
          "نسجّل الصورة والنقاط المصروفة وسجل تنزيلاتك لتشغيل الخدمة وتقديم الدعم والحفاظ على دقة سجلات المعاملات.",
          "تُحفظ الصور التي تنزّلها في معرض الصور على جهازك، وتبقى هناك حتى تحذفها."
        ]
      },
      {
        "title": "4. معلومات حسابات المنصّات",
        "paragraphs": [
          "تقديم معرّف لمنصّة ما لا يعني تسجيل الدخول إلى تلك المنصّة.",
          "نستخدم المعرّفات لإدارة حساباتك المحفوظة ولتسليم المكافآت التي تطلبها، مثل العملات داخل الألعاب المرتبطة بصورة. يمكن للمسؤولين المخوّلين رؤية معرّف الطلب عند معالجته، وعند الحاجة لأغراض الأمان أو الدعم.",
          "يمكنك تعديل المعرّفات المحفوظة أو حذفها من الملف الشخصي &gt; الحسابات المحفوظة. ويبقى المعرّف الذي أرسلته مع طلب مكافأة مرتبطاً بذلك الطلب."
        ]
      },
      {
        "title": "5. السحوبات والفائزون",
        "paragraphs": [
          "يمكن للمستخدمين المؤهّلين الانضمام إلى السحوبات في Creative Rewards.",
          "نخزّن بيانات المشاركة في السحوبات وحالة الفوز وبيانات التواصل التي يرسلها الفائزون.",
          "تُستخدم بيانات تواصل الفائز للتحقق من المطالبة والتواصل معه وتسليم الجائزة. يمكنك إرسالها من إعلان الفوز أو لاحقاً من السحب في قسم سحوباتي، حتى الموعد النهائي للمطالبة.",
          "إذا لم ترسل البيانات المطلوبة، فقد لا نتمكّن من تسليم الجائزة."
        ]
      },
      {
        "title": "6. النقاط والإعلانات",
        "paragraphs": [
          "يستخدم Creative Rewards نظام نقاط داخل التطبيق. تُكتسب النقاط من خلال الأنشطة المدعومة، ومنها الإعلانات الاختيارية بمكافأة، وتُصرف على الميزات المؤهّلة مثل تنزيل الصور.",
          "لا تُضاف نقاط الإعلان بمكافأة إلا بعد أن يتحقق خادمنا من اكتمال مشاهدة الإعلان. ونحتفظ بسجلات المعاملات لتتبّع النقاط المضافة والمصروفة ومنع النشاط المكرّر أو غير المصرّح به.",
          "الانضمام إلى سحب لا يتطلب أبداً مشاهدة إعلان.",
          "تُقدَّم الإعلانات عبر Google AdMob، وتخضع معالجتها للمعلومات لسياسة خصوصية Google ومتطلبات الموافقة المعمول بها."
        ]
      },
      {
        "title": "7. الإشعارات",
        "paragraphs": [
          "بإذنك، نرسل إشعارات عن تحديثات السحوبات وإعلانات الفائزين وطلباتك وأحداث الحساب الأخرى.",
          "يمكنك إدارة إذن الإشعارات من إعدادات جهازك."
        ]
      },
      {
        "title": "8. مشاركة المعلومات",
        "paragraphs": [
          "لا نبيع المعلومات الشخصية.",
          "نشارك المعلومات فقط مع:"
        ],
        "bullets": [
          "مزوّدي الخدمات الذين يستضيفون خوادمنا ويشغّلونها، وخدمة Google Firebase Cloud Messaging التي تسلّم الإشعارات.",
          "Google AdMob التي تعالج معلومات الإعلانات كما هو موضّح أعلاه.",
          "المسؤولين المخوّلين الذين يحتاجونها لتشغيل الخدمة ومعالجة طلباتك.",
          "الجهات الرسمية أو أطراف أخرى عندما يفرض القانون الإفصاح."
        ],
        "after": [
          "تقتصر أي مشاركة على هذه الأغراض التشغيلية والالتزامات القانونية."
        ]
      },
      {
        "title": "9. أمان البيانات",
        "paragraphs": [
          "نستخدم إجراءات تقنية وتنظيمية لحماية المعلومات من الوصول أو التعديل أو الإفصاح غير المصرّح به أو الفقدان. ويقتصر الوصول الإداري حسب الدور.",
          "على جهازك، تُحفظ رموز تسجيل الدخول في تخزين آمن وتُستثنى من النسخ الاحتياطي للجهاز.",
          "لا توجد وسيلة تخزين أو نقل عبر الإنترنت آمنة تماماً."
        ]
      },
      {
        "title": "10. الاحتفاظ بالبيانات",
        "paragraphs": [
          "نحتفظ بالمعلومات الشخصية طالما كان ذلك ضرورياً لتشغيل التطبيق والحفاظ على حسابك ودعم المعاملات وإدارة السحوبات وحل النزاعات ومنع إساءة الاستخدام والوفاء بالالتزامات القانونية.",
          "عند حذف حسابك، يُزال بعد فترة سماح مدتها 14 يوماً مع نقاطه وطلباته ومشاركاته في السحوبات. وقد نحتفظ بسجلات محدودة لمدة أطول حيث يفرض القانون ذلك أو يسمح به، مثل منع الاحتيال أو معالجة النزاعات."
        ]
      },
      {
        "title": "11. خياراتك المتعلقة بالخصوصية",
        "paragraphs": [
          "بحسب الميزات المتاحة والقانون المعمول به، يمكنك:"
        ],
        "bullets": [
          "مراجعة معلومات ملفك الشخصي وتحديثها.",
          "تعديل معرّفات المنصّات المحفوظة أو حذفها.",
          "إدارة إذن الإشعارات.",
          "مراجعة خيارات خصوصية الإعلانات في التطبيق عندما يعرضها نموذج الموافقة.",
          "طلب الاطلاع على معلوماتك الشخصية أو تصحيحها.",
          "حذف حسابك من التطبيق: الملف الشخصي > إعدادات الحساب > حذف الحساب. تؤكّد بكلمة المرور، ويُحذف الحساب بعد 14 يوماً، ويؤدي تسجيل الدخول مجدداً خلال هذه المدة إلى إلغاء الطلب."
        ],
        "after": [
          "يمكنك أيضاً طلب الحذف عبر البريد الإلكتروني المذكور أدناه. وقد نحتاج إلى التحقق من أن الطلب صادر عن صاحب الحساب."
        ]
      },
      {
        "title": "12. خصوصية الأطفال",
        "paragraphs": [
          "Creative Rewards غير موجّه للأطفال دون الحد الأدنى للسن الذي يسمح به القانون المعمول به، ما لم تتوفر موافقة الوالدين أو الوصي المطلوبة.",
          "إذا كانت لسحب ما متطلبات عمرية إضافية، فإنها تُذكر في قواعده.",
          "إذا علمنا أن معلومات شخصية جُمعت بما يخالف متطلبات خصوصية الأطفال، فسنتخذ الإجراءات المناسبة لمعالجة ذلك."
        ]
      },
      {
        "title": "13. خدمات الأطراف الثالثة",
        "paragraphs": [
          "نعتمد على Google Firebase (للإشعارات) وGoogle AdMob (للإعلانات)، وتعالجان المعلومات وفق سياسات الخصوصية الخاصة بهما.",
          "لسنا مسؤولين عن ممارسات الخصوصية المستقلة لتطبيقات أو خدمات خارجية غير مرتبطة بنا، بما فيها منصّات الألعاب والتواصل التي تقدّم معرّفاتها."
        ]
      },
      {
        "title": "14. التغييرات على سياسة الخصوصية",
        "paragraphs": [
          "قد نحدّث سياسة الخصوصية هذه عند تغيّر التطبيق أو ممارساتنا أو المتطلبات القانونية. ستحمل النسخة المحدّثة تاريخاً جديداً، وسنقدّم إشعاراً إضافياً عند الحاجة."
        ]
      },
      {
        "title": "15. تواصل معنا",
        "paragraphs": [
          "لأي أسئلة تتعلق بالخصوصية أو معلوماتك الشخصية أو طلبات الحذف، تواصل معنا:"
        ],
        "bullets": [
          "التطبيق: Creative Rewards",
          "البريد الإلكتروني: mohamed.elsamman.dev@gmail.com"
        ]
      }
    ],
    terms: [
      {
        "title": "",
        "paragraphs": [
          "مرحباً بك في Creative Rewards.",
          "تحكم هذه الشروط والأحكام استخدامك لتطبيق Creative Rewards، بما في ذلك تصفّح الصور والنقاط والتنزيلات ومكافآت الصور والسحوبات وميزات الحساب والخدمات المرتبطة بها.",
          "بدخولك إلى التطبيق أو استخدامه، فإنك توافق على هذه الشروط والأحكام."
        ]
      },
      {
        "title": "1. استخدام التطبيق",
        "paragraphs": [
          "يوفّر Creative Rewards صوراً رقمية ونظام نقاط داخل التطبيق ومكافآت مرتبطة ببعض الصور والمشاركة في السحوبات وميزات الحساب المرتبطة بها.",
          "يجب أن تقدّم معلومات صحيحة عندما تتطلبها ميزة ما، وأن تستخدم التطبيق بشكل قانوني.",
          "قد نحدّث الميزات أو نغيّرها أو نعلّقها أو نوقفها عند الضرورة المعقولة."
        ]
      },
      {
        "title": "2. حسابات المستخدمين",
        "paragraphs": [
          "أنت مسؤول عن النشاط في حسابك وعن الحفاظ على أمان بيانات تسجيل الدخول.",
          "توافق على عدم انتحال شخصية الآخرين أو إنشاء حسابات لأغراض احتيالية أو محاولة تجاوز إجراءات أمان التطبيق.",
          "قد نقيّد الحسابات المتورطة في إساءة الاستخدام أو الاحتيال أو الأتمتة غير المصرّح بها أو مخالفة هذه الشروط."
        ]
      },
      {
        "title": "3. نظام النقاط",
        "paragraphs": [
          "يستخدم Creative Rewards نقاطاً افتراضية للأنشطة المدعومة داخل التطبيق. ويمكن كسب النقاط من خلال الأنشطة المؤهّلة، ومنها الإعلانات الاختيارية بمكافأة. وقد يتغيّر عدد النقاط لأي نشاط حسب إعدادات التطبيق.",
          "النقاط:"
        ],
        "bullets": [
          "وحدات افتراضية تُستخدم داخل Creative Rewards فقط.",
          "لا تمثّل مالاً ولا قيمة نقدية مخزّنة.",
          "لا يمكن سحبها نقداً.",
          "لا يمكن تحويلها بين المستخدمين إلا إذا سمحت ميزة بذلك صراحة.",
          "تُخصم عند تأكيد نشاط مؤهّل، مثل التنزيل المدفوع.",
          "تخضع لإجراءات منع الاحتيال والتحقق من المعاملات."
        ],
        "after": [
          "لا تُضاف النقاط إلا بعد أن يتحقق خادمنا من النشاط. ويُحظر التلاعب بأرصدة النقاط أو أحداث الإعلانات أو سجلات المعاملات."
        ]
      },
      {
        "title": "4. الصور الرقمية",
        "paragraphs": [
          "يتيح لك Creative Rewards تصفّح الصور الرقمية وتنزيلها. بعض الصور مجانية، وبعضها يكلّف عدداً محدداً من النقاط.",
          "يُعرض السعر قبل أن تؤكّد التنزيل المدفوع. ويتطلب كل تنزيل مدفوع خصماً جديداً للنقاط، بما في ذلك تكرار تنزيل الصورة نفسها. يرجى مراجعة السعر قبل التأكيد.",
          "إذا فشل حفظ تنزيل مدفوع، يمكنك إعادة المحاولة لفترة قصيرة دون خصم جديد. وبعد ذلك، يكلّف التنزيل مجدداً نقاطاً من جديد.",
          "لا يؤدي تنزيل الصورة إلى نقل ملكية حقوق الملكية الفكرية الخاصة بها. وما لم يُصرّح بذلك صراحة، لا يجوز لك إعادة توزيع الصور التي تحصل عليها عبر Creative Rewards أو بيعها أو ترخيصها للغير أو استغلالها تجارياً."
        ]
      },
      {
        "title": "5. مكافآت الصور",
        "paragraphs": [
          "تتضمّن بعض الصور مكافأة مرتبطة بها، مثل عملات داخل لعبة مدعومة.",
          "بعد تنزيل هذه الصورة، يمكنك طلب المكافأة بإدخال معرّف الحساب الذي سيستلمها. يظهر الطلب في طلباتي مع حالته: قيد الانتظار أو قيد التنفيذ أو مكتمل أو مرفوض.",
          "يراجع فريقنا الطلبات وينفّذها. وأنت مسؤول عن إدخال المعرّف الصحيح. ولا يؤدي رفض الطلب إلى استرداد النقاط المصروفة على التنزيل."
        ]
      },
      {
        "title": "6. حسابات المنصّات المحفوظة",
        "paragraphs": [
          "يمكنك حفظ معرّفات للمنصّات المدعومة، مثل معرّفات حسابات الألعاب أو أسماء المستخدمين في مواقع التواصل.",
          "أنت مسؤول عن تقديم معرّفات صحيحة وعن امتلاك الإذن باستخدامها.",
          "لا ترسل كلمات مرور أو رموز دخول خاصة أو معلومات شخص آخر دون إذن.",
          "قد ترتبط المعرّفات المحفوظة بطلبات المكافآت الخاصة بك، كما هو موضّح في سياسة الخصوصية."
        ]
      },
      {
        "title": "7. السحوبات",
        "paragraphs": [
          "قد يقدّم Creative Rewards سحوبات ترويجية للمستخدمين المؤهّلين. وقد تختلف شروط الأهلية وفترة المشاركة وتفاصيل الجوائز والشروط من سحب لآخر.",
          "المشاركة لا تضمن الفوز. ويجب عليك اتباع القواعد المعروضة لكل سحب، بما في ذلك أي خطوات يطلب إكمالها قبل الانضمام.",
          "لا يتطلب الانضمام إلى سحب شراء صورة أو صرف نقاط أو مشاهدة إعلان.",
          "لا تُقبل إلا المشاركات التي يؤكّدها خادمنا مع رقم المشاركة الذي يخصّصه."
        ]
      },
      {
        "title": "8. اختيار الفائزين والنتائج",
        "paragraphs": [
          "يُختار الفائزون أو يُؤكَّدون وفقاً لقواعد كل سحب، اعتماداً على السجلات التي يحتفظ بها التطبيق.",
          "قد يبقى السحب المنتهي ظاهراً للاطلاع. ويمكنك رؤية مشاركاتك ونتائجك داخل التطبيق.",
          "قد نحقق في حالات الاشتباه بإساءة الاستخدام أو المشاركات المكرّرة أو مخالفة القواعد."
        ]
      },
      {
        "title": "9. بيانات تواصل الفائز والمطالبة بالجائزة",
        "paragraphs": [
          "إذا فزت، قد يعرض التطبيق إعلاناً واحتفالاً بالفوز.",
          "لست مضطراً لإرسال بيانات التواصل فوراً. يمكنك العودة إلى السحب في سحوباتي واستخدام زر استلام جائزتي حتى الموعد النهائي للمطالبة.",
          "يجب أن تقدّم معلومات صحيحة عند المطالبة بالجائزة. وقد يؤثر عدم إرسالها قبل الموعد النهائي على إمكانية حصولك على الجائزة، وفقاً لقواعد السحب.",
          "يخضع تسليم الجائزة والتحقق منها والشروط المرتبطة بها لشروط كل سحب."
        ]
      },
      {
        "title": "10. الإشعارات",
        "paragraphs": [
          "قد يرسل التطبيق إشعارات عن السحوبات وإعلانات الفائزين والطلبات والنقاط وأحداث الحساب وتحديثات الخدمة.",
          "يعتمد وصول الإشعارات على إذن الجهاز والاتصال بالشبكة وتوفّر الخدمة. ولا يغيّر الإشعار الفائت أو المتأخر نتيجة السحب المسجّلة رسمياً."
        ]
      },
      {
        "title": "11. الإعلانات",
        "paragraphs": [
          "يعرض التطبيق إعلانات: فيديوهات اختيارية بمكافأة في المحفظة، وإعلانات بينية قد تظهر عند فتح تفاصيل سحب، وإعلانات عند فتح التطبيق.",
          "لا يمنح الإعلان بمكافأة نقاطاً إلا عندما يؤكّد خادمنا اكتماله وأهليتك. وقد يؤدي إغلاقه أو تخطّيه إلى عدم إضافة أي نقاط.",
          "قد يختلف توفّر الإعلانات حسب الجهاز والدولة وظروف الخدمة."
        ]
      },
      {
        "title": "12. الأنشطة المحظورة",
        "paragraphs": [
          "توافق على عدم القيام بما يلي:"
        ],
        "bullets": [
          "التلاعب بطلبات التطبيق أو معاملات النقاط.",
          "استغلال الأخطاء البرمجية للحصول على مزايا غير مصرّح بها.",
          "استخدام حسابات آلية أو برامج روبوت لإساءة استخدام أنظمة المشاركة.",
          "تقديم معلومات حساب احتيالية.",
          "التحايل على حدود المشاركة أو قواعد الأهلية.",
          "التدخّل في أمان التطبيق أو بنيته التحتية.",
          "إعادة توزيع المحتوى المحمي دون إذن."
        ],
        "after": [
          "قد نحقق في المخالفات المشتبه بها ونتخذ إجراءً متناسباً حيث يسمح القانون."
        ]
      },
      {
        "title": "13. التوفّر والمشكلات التقنية",
        "paragraphs": [
          "نسعى للحفاظ على موثوقية الخدمة، لكن لا يمكننا ضمان توفّرها دون انقطاع. فقد تؤثر انقطاعات الشبكة أو الصيانة أو أعطال الأطراف الثالثة أو قيود الأجهزة أو العيوب البرمجية على التطبيق مؤقتاً.",
          "إذا أثّرت مشكلة تقنية على نشاط مسجّل، يمكنك التواصل مع الدعم لمراجعته."
        ]
      },
      {
        "title": "14. الملكية الفكرية",
        "paragraphs": [
          "يتمتع تطبيق Creative Rewards وعلامته التجارية وواجهته وبرمجياته ومحتواه الأصلي بحماية قوانين الملكية الفكرية.",
          "تعود أسماء الأطراف الثالثة وعلاماتها التجارية ومحتواها إلى أصحابها. ولا يمنحك الوصول إلى المحتوى عبر التطبيق أي حقوق تتجاوز ما هو ممنوح صراحة."
        ]
      },
      {
        "title": "15. تقييد الحساب وإنهاؤه",
        "paragraphs": [
          "قد نقيّد الوصول أو نعلّقه عند الحاجة لمعالجة الاحتيال أو الحوادث الأمنية أو المتطلبات القانونية أو المخالفات الجوهرية لهذه الشروط.",
          "يمكنك حذف حسابك من التطبيق (الملف الشخصي &gt; إعدادات الحساب &gt; حذف الحساب) أو بالتواصل مع الدعم. يُحذف الحساب بعد فترة سماح مدتها 14 يوماً، ويؤدي تسجيل الدخول خلالها إلى إلغاء الطلب. وقد تستمر التزامات الاحتفاظ القانونية بعد إغلاق الحساب."
        ]
      },
      {
        "title": "16. إخلاء المسؤولية",
        "paragraphs": [
          "يُقدَّم Creative Rewards وفقاً للقوانين المعمول بها وحقوق حماية المستهلك. ورغم سعينا للدقة والموثوقية، قد تكون بعض الميزات غير متاحة أحياناً أو تتأثر بمشكلات تقنية.",
          "لا يوجد في هذه الشروط ما يستبعد حقوقاً أو مسؤوليات لا يجوز استبعادها قانوناً."
        ]
      },
      {
        "title": "17. التغييرات على هذه الشروط",
        "paragraphs": [
          "قد نحدّث هذه الشروط عند تغيّر الميزات أو متطلبات التشغيل أو الالتزامات القانونية. ستحمل النسخة المحدّثة تاريخاً جديداً، وسنبلغ المستخدمين بالتغييرات الجوهرية عند الحاجة."
        ]
      },
      {
        "title": "18. التواصل",
        "paragraphs": [
          "للأسئلة أو المساعدة أو طلبات الحساب:"
        ],
        "bullets": [
          "التطبيق: Creative Rewards",
          "البريد الإلكتروني: mohamed.elsamman.dev@gmail.com"
        ]
      }
    ],
    deletion: {
      "intro": "يمكنك حذف حسابك في Creative Rewards وبياناته الشخصية من داخل التطبيق، أو طلب ذلك من الدعم عبر البريد الإلكتروني.",
      "stepsTitle": "احذف حسابك من التطبيق",
      "steps": [
        "افتح Creative Rewards وسجّل الدخول.",
        "انتقل إلى الملف الشخصي &gt; إعدادات الحساب &gt; حذف الحساب.",
        "أكّد بكلمة المرور.",
        "يُحذف حسابك بعد فترة سماح مدتها 14 يوماً، ويؤدي تسجيل الدخول مجدداً خلال هذه المدة إلى إلغاء الطلب."
      ],
      "verifyTitle": "التحقق",
      "verify": "لا يمكن حذف الحساب إلا من قِبل صاحبه: في التطبيق تؤكّد بكلمة المرور، وعبر البريد الإلكتروني قد نطلب منك إثبات ملكيتك للحساب. لا نطلب منك كلمة المرور عبر البريد الإلكتروني أبداً.",
      "deleteTitle": "البيانات التي تُحذف",
      "deleteText": "بعد انتهاء فترة السماح، يُحذف الحساب مع نقاطه وطلباته ومشاركاته في السحوبات. وقد نحتفظ بسجلات محدودة لمدة أطول حيث يفرض القانون ذلك أو يسمح به، مثل منع الاحتيال أو معالجة النزاعات.",
      "contact": "إذا تعذّر عليك استخدام التطبيق، اطلب الحذف عبر البريد الإلكتروني",
      "noAutomation": "يعالج فريق الدعم طلبات البريد الإلكتروني يدوياً. لا يحذف هذا الموقع أي بيانات بنفسه."
    },
    contact: { intro: 'تواصل مع دعم Creative Rewards App للمساعدة في التطبيق أو استفسارات الخصوصية أو طلبات حذف البيانات.', support: 'الدعم العام', privacy: 'استفسارات الخصوصية', deletion: 'حذف البيانات', response: 'اذكر اسم التطبيق ووصفاً مختصراً للمشكلة. لا ترسل كلمات مرور أو رموز جلسات أو معلومات حساسة غير ضرورية. قد يطلب الدعم تفاصيل إضافية للتحقق من طلب الحذف.' },
    about: { intro: 'يجمع Creative Rewards App بين تصفح المسابقات وأدوات منظميها في تطبيق واحد.', title: 'للمشاركين والمنظمين', body: 'يمكن للمشاركين تصفح الحملات وقراءة شروط المنظم والانضمام للمسابقات المؤهلة ومشاهدة أرقام المشاركة والنتائج المنشورة. ويمكن للمسؤولين المصرح لهم إنشاء الحملات ومتابعة نشاطها. يظل كل منظم مسؤولاً عن شروط حملته وتسليم جوائزها.' },
    labels: { lastUpdated: "آخر تحديث: 25 أكتوبر 2026", toc: 'في هذه الصفحة', backHome: 'العودة للرئيسية', appName: 'التطبيق', operator: 'الجهة المشغلة', notLegalEntity: 'Creative Rewards App هو اسم التطبيق. لا يحدد هذا الإشعار شركة أو كياناً قانونياً مسجلاً منفصلاً.', contactUs: 'تواصل مع الدعم', external: 'صفحة التطبيق على Google Play' },
  },
};

export const paths: Record<PageKey, string> = {
  privacy: 'privacy', terms: 'terms', 'delete-account': 'delete-account', contact: 'contact', about: 'about',
};

export function pageUrl(lang: Lang, page?: PageKey): string {
  if (lang === 'en') return page ? `/${paths[page]}/` : '/';
  return page ? `/ar/${paths[page]}/` : '/ar/';
}

export function legalSections(lang: Lang, page: 'privacy' | 'terms'): Section[] {
  return copy[lang][page];
}
