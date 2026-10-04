const img = (name) => `${import.meta.env.BASE_URL}images/${name}.jpg`;

/* هر دسته یک صفحهٔ جدا دارد. برای افزودن اثر، فقط یک ردیف به works اضافه کنید. */
export const CATEGORIES = [
  {
    slug: "painting",
    path: "/painting",
    navLabel: "نقاشی",
    title: "نقاشی",
    kicker: "اتاق‌های ۱ تا ۶",
    intro:
      "از نگارگری ایرانی و نقاشی آکادمیک تا کلاژ و انتزاعی معاصر. نقاشی قلب موزهٔ نگار است و بیشتر اتاق‌ها را می‌گیرد.",
    cover: { type: "image", src: img("indigo-drift"), alt: "نقاشی انتزاعی با ضربه‌های ضخیم آبی نیلی و خردلی" },
    facts: [
      { value: "۱۳", label: "اثر در معرض دید" },
      { value: "۶", label: "اتاق نمایش" },
      { value: "۴", label: "رسانه و روش" },
    ],
    filters: ["همه", "رنگ و روغن", "کلاسیک و نگارگری", "مرکب و آب‌رنگ", "کلاژ", "عکس"],
    works: [
      { id: "noblewoman", title: "بانوی اشراف", filter: "کلاسیک و نگارگری", material: "روغن روی بوم", room: "اتاق ۲", note: "پرتره‌ای با مخمل تیره و توری، در منظره‌ای غروب‌گرفته.", media: { type: "image", src: img("noblewoman"), alt: "پرترهٔ بانویی با لباس مخمل تیره در منظره‌ای غروب‌گرفته", w: 1024, h: 576 } },
      { id: "ink-tree", title: "درخت در مه", filter: "مرکب و آب‌رنگ", material: "مرکب و آب‌رنگ روی کاغذ", room: "اتاق ۱", note: "درختی خمیده بر صخره، با شکوفه‌هایی که در مه گم می‌شوند.", media: { type: "image", src: img("ink-tree"), alt: "نقاشی مرکب سیاه‌وسفید از درخت شکوفه‌دار خمیده کنار ساحل", w: 512, h: 512 } },
      { id: "indigo", title: "نیل در حرکت", filter: "رنگ و روغن", material: "روغن روی کتان", room: "اتاق ۳", note: "ضربه‌های گستردهٔ قلم‌مو در آبی نیلی، خردلی و کرم.", media: { type: "image", src: img("indigo-drift"), alt: "نقاشی انتزاعی آبی و خردلی", w: 588, h: 500 } },
      { id: "figure", title: "پیکری در نور", filter: "رنگ و روغن", material: "روغن روی بوم", room: "اتاق ۳", note: "پیکری که در مه رنگ‌های سرد و خاکی محو می‌شود.", media: { type: "image", src: img("figure-in-light"), alt: "سایهٔ مردی ایستاده در مه رنگ", w: 440, h: 458 } },
      { id: "green", title: "هندسهٔ سبز و نارنجی", filter: "رنگ و روغن", material: "آکریلیک روی کتان", room: "اتاق ۳", note: "سطح‌های ساده و رنگ‌های مات روی بستر کتان طبیعی.", media: { type: "image", src: img("green-geometry"), alt: "ترکیب هندسی سبز مریم‌گلی و نارنجی", w: 460, h: 470 } },
      { id: "strokes", title: "ضربه‌های سیاه", filter: "رنگ و روغن", material: "مرکب و آکریلیک", room: "اتاق ۳", note: "ضربه‌های قاطع سیاه‌وسفید، بدون رنگ.", media: { type: "image", src: img("black-strokes"), alt: "ضربه‌های سیاه روی زمینهٔ سفید", w: 816, h: 1456 } },
      { id: "paris", title: "داربست در پاریس", filter: "رنگ و روغن", material: "روغن روی بوم", room: "اتاق ۴", note: "ساختمانی داربست‌بسته در نور صبح با لکه‌های بنفش و طلایی.", media: { type: "image", src: img("paris-scaffold"), alt: "ساختمانی با داربست در نور صبح", w: 512, h: 512 } },
      { id: "academic", title: "مطالعهٔ آکادمیک", filter: "کلاسیک و نگارگری", material: "روغن روی بوم، قاب طلایی", room: "اتاق ۲", note: "نور پنجره روی پارچه‌های ابریشمی.", media: { type: "image", src: img("academic-study"), alt: "زنی کنار پنجره، پشت به بیننده", w: 480, h: 358 } },
      { id: "court", title: "مجلس نگارگری", filter: "کلاسیک و نگارگری", material: "آب‌رنگ، مرکب و زر روی کاغذ", room: "اتاق ۱", note: "نگارگری ایرانی با تذهیب و کتیبه‌های حاشیه.", media: { type: "image", src: img("persian-court"), alt: "مجلسی از مردانی که تابلویی را تماشا می‌کنند", w: 384, h: 688 } },
      { id: "mona", title: "بازمیکس مونالیزا", filter: "کلاژ", material: "کلاژ دیجیتال", room: "اتاق ۶", note: "بازتفسیری با گل، پروانه و تکه‌های کاغذ قدیمی.", media: { type: "image", src: img("mona-remix"), alt: "کلاژ رنگارنگ با چهرهٔ مونالیزا", w: 1456, h: 816 } },
      { id: "pottery", title: "کارگاه سفال", filter: "کلاژ", material: "آکریلیک و گونی روی بوم", room: "اتاق ۴", note: "کوزه‌ها و قلم‌موها در لایه‌های رنگ و پارچه.", media: { type: "image", src: img("pottery-studio"), alt: "میز کارگاه با کوزه و کاسه‌های رنگارنگ", w: 1408, h: 768 } },
      { id: "stairs", title: "ساختار و سایه", filter: "عکس", material: "چاپ ژلاتین نقره", room: "اتاق ۵", note: "بتن و سایه با حاشیهٔ سفید و قاب مشکی.", media: { type: "image", src: img("structure-shadow"), alt: "پلهٔ بتنی و سایهٔ قطری", w: 702, h: 602 } },
      { id: "urban", title: "بازسازی شهری", filter: "عکس", material: "چاپ آنالوگ سیاه‌وسفید", room: "اتاق ۵", note: "سالن متروک صنعتی با تیرهای بتنی.", media: { type: "image", src: img("urban-deconstruction"), alt: "سالن متروک صنعتی با پنجره‌های شکسته", w: 632, h: 500 } },
    ],
    extra: {
      kind: "cards",
      title: "رسانه‌ها و روش‌ها",
      items: [
        { title: "روغن", text: "رنگ‌های کند‌خشک با لایه‌های غنی. بیشتر آثار کلاسیک و پیکره‌نگاری ما روغن‌اند.", swatch: "#5a3a1c" },
        { title: "آب‌رنگ و زر", text: "ظرافت نگارگری ایرانی: آب‌رنگ، مرکب و ورق زر روی کاغذ.", swatch: "#2f6fa8" },
        { title: "آکریلیک", text: "خشک‌شدن سریع و رنگ‌های مات، مناسب سطح‌های هندسی و بافت‌های ضخیم.", swatch: "#c7371f" },
        { title: "کلاژ و چاپ", text: "برش، چسباندن و چاپ. از کاغذ قدیمی تا عکس‌های آنالوگ.", swatch: "#a77a24" },
      ],
    },
  },
  {
    slug: "ceramics",
    path: "/ceramics",
    navLabel: "سفال و سرامیک",
    title: "سفال و سرامیک",
    kicker: "هنر تجسمی، اتاق ۷",
    intro:
      "ظرف‌هایی که هم به کار می‌آیند و هم تماشایی‌اند. در اتاق ۷ کوزه، کاسه و قوری از کارگاه‌های امروز را می‌بینید و می‌توانید خودتان هم کار کنید.",
    cover: { type: "image", src: img("pottery-still-life"), alt: "سه کوزهٔ خاک‌سرخی روی میز چوبی، کنار پارچهٔ آبی در نور گرم" },
    facts: [
      { value: "۵", label: "اثر در معرض دید" },
      { value: "۴", label: "کارگاه در ماه" },
      { value: "۳", label: "روش تزئین" },
    ],
    filters: ["همه", "نقاشی روی سفال", "مجموعه‌ها", "طبیعت بی‌جان"],
    works: [
      { id: "c-hands", title: "قلم روی گِل", filter: "نقاشی روی سفال", material: "سفال، نقش‌های دست‌کشیده با رنگ‌دانه", room: "اتاق ۷", note: "نقاش گل‌های سفید را با قلم نازک روی کوزه‌های هنوز خام می‌کشد.", media: { type: "image", src: img("pottery-hands"), alt: "دستی که با قلم‌موی نازک روی کوزه‌ای گل‌دار نقش می‌کشد", w: 512, h: 512 } },
      { id: "c-painted", title: "کوزهٔ گل‌دار", filter: "نقاشی روی سفال", material: "سفال لعاب‌دار، نقش گل و برگ", room: "اتاق ۷", note: "کوزه‌ای با نوارهای رنگی و گل‌های نارنجی، قدم‌به‌قدم تکمیل می‌شود.", media: { type: "image", src: img("pottery-painted-pot"), alt: "کوزه‌ای رنگارنگ با نقش گل‌های نارنجی و آبی در حال نقاشی", w: 408, h: 728 } },
      { id: "c-shelves", title: "قفسهٔ کوزه‌ها", filter: "مجموعه‌ها", material: "سفال و سرامیک، لعاب‌های مات", room: "اتاق ۷", note: "ردیف‌هایی از کوزه و کاسه در رنگ‌های خاکی، سفید و سبز.", media: { type: "image", src: img("pottery-shelves"), alt: "سه قفسهٔ سفید پر از کوزه و کاسه‌های سفالی خاکی و سفید", w: 512, h: 512 } },
      { id: "c-grid", title: "چهل کاسه", filter: "مجموعه‌ها", material: "سفال، نقش‌های هندسی و حلزونی", room: "اتاق ۷", note: "کاسه‌ها و کوزه‌های کوچک از بالا، هر کدام با نقشی متفاوت.", media: { type: "image", src: img("pottery-grid"), alt: "کاسه‌ها و کوزه‌های سفالی با نقش‌های هندسی، چیده‌شده از بالا", w: 408, h: 728 } },
      { id: "c-still", title: "سه کوزه و پارچهٔ آبی", filter: "طبیعت بی‌جان", material: "سفال خاک‌سرخ، رنگ‌دانهٔ طبیعی", room: "اتاق ۷", note: "کوزه‌های خاک‌سرخی در نور گرم، کنار پارچه‌ای آبی.", media: { type: "image", src: img("pottery-still-life"), alt: "سه کوزهٔ خاک‌سرخی کنار پارچهٔ آبی", w: 512, h: 512 } },
    ],
    extra: {
      kind: "sessions",
      title: "کارگاه‌های این ماه",
      note: "همهٔ مواد و پیش‌بند همراه ماست. ظرفیت هر کارگاه ۸ نفر است.",
      items: [
        { title: "چرخ سفال برای مبتدی‌ها", when: "شنبه‌ها، ۱۰ تا ۱۲", level: "بدون نیاز به تجربه" },
        { title: "لعاب و رنگ‌دانه", when: "یکشنبه‌ها، ۱۴ تا ۱۶", level: "برای کسانی که قبلاً کار کرده‌اند" },
        { title: "سفالگری با کودکان", when: "جمعه‌ها، ۱۱ تا ۱۲:۳۰", level: "از ۷ سال به بالا، با همراه" },
        { title: "کوره و پخت", when: "یک جمعه در ماه، ۱۰ تا ۱۳", level: "بازدید از کوره‌ها" },
      ],
    },
  },
  {
    slug: "sculpture",
    path: "/sculpture",
    navLabel: "مجسمه‌سازی",
    title: "مجسمه‌سازی",
    kicker: "تالار وسط و حیاط",
    intro:
      "از سردیس مرمر تا حجم‌های انتزاعی مفرغی. مجسمه‌ها را از همهٔ طرف‌ها ببینید: دور هر کدام بچرخید و نور را دنبال کنید.",
    cover: { type: "art", kind: "sculpture", shape: "bust", material: "marble", alt: "سردیس مرمرین روی پایه" },
    facts: [
      { value: "۶", label: "اثر در معرض دید" },
      { value: "۴", label: "ماده و جنس" },
      { value: "۲", label: "تالار و حیاط" },
    ],
    filters: ["همه", "پیکره", "انتزاعی"],
    works: [
      { id: "s-bust", title: "سردیس کتابدار", filter: "پیکره", material: "مرمر", room: "تالار وسط", note: "چهره‌ای آرام با گردن بلند، تراش‌خوردهٔ یک تکه مرمر.", media: { type: "art", kind: "sculpture", shape: "bust", material: "marble", alt: "سردیس مرمرین" } },
      { id: "s-torso", title: "نیم‌تنه", filter: "پیکره", material: "گچ", room: "تالار وسط", note: "مطالعه‌ای از حجم بدن، بدون سر و دست.", media: { type: "art", kind: "sculpture", shape: "torso", material: "plaster", alt: "نیم‌تنهٔ گچی" } },
      { id: "s-figure", title: "پیکر خمیده", filter: "انتزاعی", material: "مفرغ", room: "حیاط", note: "حجمی منحنی با سوراخی در میان که نور از آن می‌گذرد.", media: { type: "art", kind: "sculpture", shape: "figure", material: "bronze", alt: "پیکر انتزاعی مفرغی" } },
      { id: "s-ring", title: "حلقه", filter: "انتزاعی", material: "سنگ", room: "حیاط", note: "دایره‌ای سنگی با حفره‌ای بیضی که قاب منظره است.", media: { type: "art", kind: "sculpture", shape: "ring", material: "stone", alt: "حلقهٔ سنگی با حفره" } },
      { id: "s-stele", title: "سنگ‌نوشته", filter: "انتزاعی", material: "سنگ", room: "تالار وسط", note: "ستون ایستاده با خط‌هایی شبیه کتیبه.", media: { type: "art", kind: "sculpture", shape: "stele", material: "stone", alt: "سنگ‌نوشتهٔ ایستاده" } },
      { id: "s-bird", title: "پرنده", filter: "پیکره", material: "چوب", room: "حیاط", note: "پرنده‌ای کوچک و تیز، تراش‌خوردهٔ چوب گردو.", media: { type: "art", kind: "sculpture", shape: "bird", material: "wood", alt: "پرندهٔ چوبی" } },
    ],
    extra: {
      kind: "cards",
      title: "مواد و جنس‌ها",
      items: [
        { title: "مرمر", text: "سنگی سفید و ظریف که نور را کمی به درون خود می‌کشد.", swatch: "#d9d4c7" },
        { title: "مفرغ", text: "ریخته‌گری با قالب. براق می‌شود و با گذر زمان سبز.", swatch: "#a8742f" },
        { title: "چوب", text: "تراش دستی. رگه‌های چوب بخشی از اثر می‌شوند.", swatch: "#8a5a35" },
        { title: "گچ و خاک", text: "برای طرح اولیه و قالب. سبک ولی شکننده است.", swatch: "#efe9db" },
      ],
    },
  },
];

export const bySlug = (slug) => CATEGORIES.find((c) => c.slug === slug);
