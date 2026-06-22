const WHATSAPP_NUMBER = "201010414187";
const frameOptions = {
  None: { label: "Poster only", price: 0, hint: "Poster only, no frame" },
  Black: { label: "Black frame", price: 120 },
  White: { label: "White frame", price: 120 },
  Wood: { label: "Wood frame", price: 140 }
};

const translations = {
  en: {
    brandTitle: "Poster Lab Store",
    brandSubtitle: "Pick, frame, order",
    navShop: "Shop",
    navCart: "Cart",
    langToggle: "AR",
    themeToggle: "Light",
    themeToggleDark: "Dark",

    heroEyebrow: "Simple local poster ordering",
    heroTitle: "Poster Lab Store",
    heroText: "Choose a poster, select the size and frame, then send your order directly on WhatsApp.",
    heroActionShop: "Start order",
    heroActionCart: "Open cart",
    stepChoose: "Choose a poster",
    stepCustomize: "Pick size and frame",
    stepWhatsapp: "Send order on WhatsApp",
    badgeFramed: "Framed",
    badgePrints: "Local Prints",

    searchLabel: "Search",
    searchPlaceholder: "Search by poster name or style...",
    categoryLabel: "Category",
    catAll: "All posters",
    catCustom: "Custom upload",
    catCars: "Cars",
    catPaint: "Paint art",
    catAbstract: "Abstract",
    sizeLabel: "Size",
    sizeAll: "All sizes",
    frameLabel: "Frame",
    frameAll: "All frames",
    frameNone: "None",
    frameBlack: "Black",
    frameWhite: "White",
    frameWood: "Wood",
    sortLabel: "Sort",
    sortFeatured: "Featured",
    sortPriceLow: "Price low to high",
    sortPriceHigh: "Price high to low",
    sortName: "Name",

    freshDropsEyebrow: "Shop posters",
    freshDropsTitle: "Choose your favorite",
    resultCountProduct: "product",
    resultCountProducts: "products",
    noProductsFound: "No framed posters found.",
    tryDifferentSearch: "Try a different search or filter.",
    from: "From",
    sizesAvailable: "3 sizes available",
    customize: "View details",
    orderNow: "Add to cart",
    uploadDesignBtn: "Upload design",
    addPosterBtn: "Add poster",

    detailEyebrow: "ready to order",
    detailPosterSize: "1. Choose size",
    detailFrameColor: "2. Choose frame",
    detailUploadLabel: "Upload photo or design",
    detailUploadHint: "Upload JPG, PNG, or any image design before adding to cart.",
    detailSelectedFile: "Selected: ",
    detailAddBtn: "Add customized framed poster",
    detailAddPosterBtn: "Add this poster",
    pleaseUploadAlert: "Please upload your photo or design first.",

    cartEyebrow: "Your order",
    cartTitle: "Cart",
    cartEmpty: "Your cart is empty.",
    cartStartOrderHint: "Add a framed poster to start an order.",
    cartEach: "each",
    cartTotalLabel: "Total:",
    cartNameLabel: "Name",
    cartNamePlaceholder: "Your name",
    cartPhoneLabel: "Phone",
    cartPhonePlaceholder: "Your phone number",
    cartAddressLabel: "Address",
    cartAddressPlaceholder: "Delivery address",
    cartPaymentLabel: "Payment method",
    cartInstapayOption: "Instapay QR - qnbziad49015@instapay",
    cartVodafoneOption: "Vodafone Cash - 01090927525",
    cartWhatsappHint: "WhatsApp will include items, sizes, frames, totals, payment method, product links, and uploaded design filenames.",
    cartCheckoutBtn: "Review order",
    productLink: "Product page link",
    backToShop: "Back to shop",
    backToShop: "Back to shop",

    confEyebrow: "Final confirmation",
    confTitle: "Check details, then send order",
    confHint: "Your WhatsApp message will include every poster, selected frame, selected size, price total, customer details, product links, and uploaded design filenames.",
    confTotal: "Order total: ",
    confItemsCount: "customized framed poster item",
    confItemsCountPlural: "customized framed poster items",
    confEditBtn: "Edit details",
    confSendBtn: "Send final order to WhatsApp",
    confAddFirstAlert: "Please add at least one framed poster to your cart.",
    addedToCart: "Added to cart",
    confUploadSummaryTitle: "Uploaded designs:",
    uploadProgressLabel: "Uploading poster to server",
    reviewsTitle: "Customer reviews",
    reviewsSubtitle: "Real feedback from recent poster orders.",
    adminTitle: "Admin product manager",
    adminHint: "Add, edit, remove, or delete products stored in this browser.",
    adminUnlock: "Unlock admin",
    adminLock: "Lock admin",
    adminAdd: "Add product",
    adminSave: "Save product",
    adminDelete: "Delete",
    adminEdit: "Edit",
    adminReset: "Reset local changes",
  },
  ar: {
    brandTitle: "بوستر لاب ستور",
    brandSubtitle: "اختار، برواز، اطلب",
    navShop: "المتجر",
    navCart: "السلة",
    langToggle: "EN",
    themeToggle: "فاتح",
    themeToggleDark: "داكن",

    heroEyebrow: "طلب بوسترات بسهولة",
    heroTitle: "بوستر لاب ستور",
    heroText: "اختر البوستر، حدد المقاس والإطار، ثم أرسل طلبك مباشرة على واتساب.",
    heroActionShop: "ابدأ الطلب",
    heroActionCart: "فتح السلة",
    stepChoose: "اختر البوستر",
    stepCustomize: "حدد المقاس والإطار",
    stepWhatsapp: "أرسل الطلب على واتساب",
    badgeFramed: "مؤطر",
    badgePrints: "طباعة محلية",

    searchLabel: "بحث",
    searchPlaceholder: "ابحث باسم البوستر أو النوع...",
    categoryLabel: "الفئة",
    catAll: "كل البوسترات",
    catCustom: "تصميم خاص",
    catCars: "سيارات",
    catPaint: "لوحات فنية",
    catAbstract: "تجريدي",
    sizeLabel: "المقاس",
    sizeAll: "كل المقاسات",
    frameLabel: "الإطار",
    frameAll: "كل الإطارات",
    frameNone: "بدون إطار",
    frameBlack: "أسود",
    frameWhite: "أبيض",
    frameWood: "خشبي",
    sortLabel: "ترتيب",
    sortFeatured: "مميز",
    sortPriceLow: "السعر: من الأقل للأعلى",
    sortPriceHigh: "السعر: من الأعلى للأقل",
    sortName: "الاسم",

    freshDropsEyebrow: "تسوق البوسترات",
    freshDropsTitle: "اختار المفضل عندك",
    resultCountProduct: "منتج",
    resultCountProducts: "منتجات",
    noProductsFound: "لم يتم العثور على بوسترات.",
    tryDifferentSearch: "جرّب البحث بكلمات أخرى أو تغيير الفلاتر.",
    from: "تبدأ من",
    sizesAvailable: "٣ مقاسات متاحة",
    customize: "عرض التفاصيل",
    orderNow: "أضف للسلة",
    uploadDesignBtn: "رفع التصميم",
    addPosterBtn: "إضافة البوستر",

    detailEyebrow: "جاهز للطلب",
    detailPosterSize: "١. اختار المقاس",
    detailFrameColor: "٢. اختار الإطار",
    detailUploadLabel: "ارفع صورتك أو تصميمك",
    detailUploadHint: "ارفع ملف JPG أو PNG أو أي تصميم قبل الإضافة للسلة.",
    detailSelectedFile: "الملف المختار: ",
    detailAddBtn: "إضافة البوستر المخصص للسلة",
    detailAddPosterBtn: "أضف هذا البوستر",
    pleaseUploadAlert: "يرجى رفع صورتك أو تصميمك أولاً.",

    cartEyebrow: "طلبك",
    cartTitle: "السلة",
    cartEmpty: "سلتك فارغة.",
    cartStartOrderHint: "أضف بوستراً مؤطراً لبدء الطلب.",
    cartEach: "للقطعة",
    cartTotalLabel: "الإجمالي:",
    cartNameLabel: "الاسم",
    cartNamePlaceholder: "اسمك الكريم",
    cartPhoneLabel: "رقم الهاتف",
    cartPhonePlaceholder: "رقم هاتفك للتواصل",
    cartAddressLabel: "العنوان",
    cartAddressPlaceholder: "عنوان التوصيل بالتفصيل",
    cartPaymentLabel: "طريقة الدفع",
    cartInstapayOption: "إنستا باي QR - qnbziad49015@instapay",
    cartVodafoneOption: "فودافون كاش - 01090927525",
    cartWhatsappHint: "سوف تتضمن رسالة الواتساب المنتجات، المقاسات، الإطارات، الإجماليات، طريقة الدفع، تفاصيل العميل، روابط المنتجات، وأسماء ملفات التصاميم المرفوعة.",
    cartCheckoutBtn: "مراجعة الطلب",
    productLink: "رابط صفحة المنتج",
    backToShop: "العودة للتسوق",
    backToShop: "العودة للتسوق",

    confEyebrow: "التأكيد النهائي",
    confTitle: "راجع التفاصيل، ثم أرسل الطلب",
    confHint: "سوف تحتوي رسالتك على الواتساب على كل بوستر، الإطار المختار، المقاس المختار، إجمالي السعر، تفاصيل العميل، روابط المنتجات، وأسماء ملفات التصاميم المرفوعة.",
    confTotal: "إجمالي الطلب: ",
    confItemsCount: "بوستر مخصص مضاف",
    confItemsCountPlural: "بوسترات مخصصة مضافة",
    confEditBtn: "تعديل البيانات",
    confSendBtn: "إرسال الطلب النهائي عبر واتساب",
    confAddFirstAlert: "يرجى إضافة بوستر واحد على الأقل إلى السلة.",
    addedToCart: "تمت الإضافة إلى السلة",
    confUploadSummaryTitle: "التصاميم المرفوعة:",
    uploadProgressLabel: "جاري رفع البوستر إلى السيرفر",
    reviewsTitle: "آراء العملاء",
    reviewsSubtitle: "تقييمات حقيقية من طلبات بوسترات حديثة.",
    adminTitle: "إدارة المنتجات",
    adminHint: "إضافة أو تعديل أو إزالة أو حذف المنتجات المحفوظة في هذا المتصفح.",
    adminUnlock: "دخول الأدمن",
    adminLock: "قفل الأدمن",
    adminAdd: "إضافة منتج",
    adminSave: "حفظ المنتج",
    adminDelete: "حذف",
    adminEdit: "تعديل",
    adminReset: "إلغاء التعديلات المحلية",
  }
};

const currency = new Intl.NumberFormat("en-EG", {
  style: "currency",
  currency: "EGP",
  maximumFractionDigits: 0
});

const products = [
  {
    id: "custom-upload",
    name: "Upload Your Customized Design",
    nameAr: "رفع تصميمك الخاص",
    category: "custom",
    tag: "Custom upload",
    tagAr: "تصميم خاص",
    image: "assets/custom-upload.jpg",
    gallery: ["assets/custom-upload.jpg"],
    basePrice: 60,
    sizes: { "20x30": 60, "30x40": 80, "40x50": 90 },
    frames: ["None", "Black", "White", "Wood"],
    isCustom: true,
    description: "Upload your own photo, artwork, logo, or poster design. Choose poster size and optional frame before sending the final order.",
    descriptionAr: "ارفع صورتك الخاصة، عملك الفني، شعارك أو تصميم البوستر الخاص بك. اختر مقاس البوستر والإطار الاختياري قبل إرسال الطلب النهائي."
  },
  {
    id: "porsche-gt3-rs",
    name: "Porsche GT3 RS",
    nameAr: "Porsche GT3 RS",
    category: "cars",
    tag: "Car poster",
    tagAr: "بوستر سيارة",
    image: "assets/Porsche GT3 RS.png",
    gallery: ["assets/Porsche GT3 RS.png"],
    basePrice: 50,
    sizes: { "20x30": 50, "30x40": 60, "40x50": 70 },
    frames: ["None", "Black", "White", "Wood"],
    description: "A premium Porsche poster with bold racing style and crisp detail for modern interiors.",
    descriptionAr: "بوستر بورشه فاخر بتصميم سباق جريء وتفاصيل واضحة للمساحات العصرية."
  },
  {
    id: "red-ferrari",
    name: "Red Ferrari",
    nameAr: "Red Ferrari",
    category: "cars",
    tag: "Car poster",
    tagAr: "بوستر سيارة",
    image: "assets/Red Ferrari.png",
    gallery: ["assets/Red Ferrari.png"],
    basePrice: 50,
    sizes: { "20x30": 50, "30x40": 60, "40x50": 70 },
    frames: ["None", "Black", "White", "Wood"],
    description: "A dynamic Ferrari poster with striking contrast and a performance-inspired look.",
    descriptionAr: "بوستر فيراري ديناميكي بتباين قوي ومظهر مستوحى من الأداء."
  },
  {
    id: "red-bull-racing",
    name: "RedBull Racing",
    nameAr: "RedBull Racing",
    category: "cars",
    tag: "Car poster",
    tagAr: "بوستر سيارة",
    image: "assets/Dark Blue RedBull.png",
    gallery: ["assets/Dark Blue RedBull.png"],
    basePrice: 50,
    sizes: { "20x30": 50, "30x40": 60, "40x50": 70 },
    frames: ["None", "Black", "White", "Wood"],
    description: "A striking Red Bull racing poster with vivid colors and sharp energy.",
    descriptionAr: "بوستر ريد بول السباقي بألوان زاهية وطاقة حادة."
  },
  {
    id: "space-astronauts",
    name: "Space Astronauts",
    nameAr: "Space Astronauts",
    category: "abstract",
    tag: "Space art",
    tagAr: "فن الفضاء",
    image: "assets/Space Astronauts.png",
    gallery: ["assets/Space Astronauts.png"],
    basePrice: 50,
    sizes: { "20x30": 50, "30x40": 60, "40x50": 70 },
    frames: ["None", "Black", "White", "Wood"],
    description: "A futuristic astronaut poster with vibrant planets and cosmic energy.",
    descriptionAr: "بوستر رواد فضاء مستقبلي بألوان كوكبية زاهية وطاقة كونية."
  },
  {
    id: "minecraft-avengers",
    name: "Minecraft Avengers",
    nameAr: "Minecraft Avengers",
    category: "abstract",
    tag: "Gaming art",
    tagAr: "فن ألعاب",
    image: "assets/Minecraft Avengers.png",
    gallery: ["assets/Minecraft Avengers.png"],
    basePrice: 50,
    sizes: { "20x30": 50, "30x40": 60, "40x50": 70 },
    frames: ["None", "Black", "White", "Wood"],
    description: "A bold Minecraft Avengers poster that mixes gaming and pop culture for colorful spaces.",
    descriptionAr: "بوستر Minecraft Avengers جريء يمزج بين الألعاب والثقافة الشعبية لمساحات ملونة."
  },
  {
    id: "monaliza",
    name: "Monaliza",
    nameAr: "Monaliza",
    category: "abstract",
    tag: "Art poster",
    tagAr: "بوستر فني",
    image: "assets/Monaliza.png",
    gallery: ["assets/Monaliza.png"],
    basePrice: 50,
    sizes: { "20x30": 50, "30x40": 60, "40x50": 70 },
    frames: ["None", "Black", "White", "Wood"],
    description: "A stylish Monaliza poster with classic art inspiration and modern edge.",
    descriptionAr: "بوستر Monaliza أنيق مستوحى من الفن الكلاسيكي مع لمسة عصرية."
  },
  {
    id: "spiderman",
    name: "Spiderman",
    nameAr: "Spiderman",
    category: "abstract",
    tag: "Superhero art",
    tagAr: "فن خارق",
    image: "assets/Spiderman.png",
    gallery: ["assets/Spiderman.png"],
    basePrice: 50,
    sizes: { "20x30": 50, "30x40": 60, "40x50": 70 },
    frames: ["None", "Black", "White", "Wood"],
    description: "A dynamic Spiderman poster with crisp comic-style visuals for fan spaces.",
    descriptionAr: "بوستر سبايدرمان ديناميكي بصور أسلوب الكوميك الواضحة لمساحات المعجبين."
  },
  {
    id: "blue-porsche-3",
    name: "Blue Porsche Series",
    nameAr: "سلسلة بورشه الزرقاء",
    category: "cars",
    tag: "Car poster set",
    tagAr: "مجموعة بوسترات سيارات",
    image: "assets/Blue Porsche 3/upscalemedia-transformed blue porsche 3_01.png",
    gallery: [
      "assets/Blue Porsche 3/upscalemedia-transformed blue porsche 3_01.png",
      "assets/Blue Porsche 3/upscalemedia-transformed blue porsche 3_02.png",
      "assets/Blue Porsche 3/upscalemedia-transformed blue porsche 3_03.png"
    ],
    basePrice: 50,
    sizes: { "20x30": 50, "30x40": 60, "40x50": 70 },
    frames: ["None", "Black", "White", "Wood"],
    description: "A three-image Blue Porsche poster set that shows the car in three bold compositions.",
    descriptionAr: "مجموعة بثلاث صور لبورشه زرقاء تعرض السيارة في ثلاث تركيبات جريئة."
  },
  {
    id: "red-ferrari-3",
    name: "Red Ferrari Series",
    nameAr: "سلسلة فيراري الحمراء",
    category: "cars",
    tag: "Car poster set",
    tagAr: "مجموعة بوسترات سيارات",
    image: "assets/Red Ferrari 3/upscalemedia-transformed ferrari 3 (1).png",
    gallery: [
      "assets/Red Ferrari 3/upscalemedia-transformed ferrari 3 (1).png",
      "assets/Red Ferrari 3/upscalemedia-transformed ferrari 3 (2).png",
      "assets/Red Ferrari 3/upscalemedia-transformed ferrari 3 (3).png"
    ],
    basePrice: 50,
    sizes: { "20x30": 50, "30x40": 60, "40x50": 70 },
    frames: ["None", "Black", "White", "Wood"],
    description: "A three-image Ferrari poster set with dramatic red speed styling.",
    descriptionAr: "مجموعة بثلاث صور لبوستر فيراري بتصميم أحمر درامي وسرعة مميزة."
  },
  {
    id: "yellow-porsche-3",
    name: "Yellow Porsche Series",
    nameAr: "سلسلة بورشه الصفراء",
    category: "cars",
    tag: "Car poster set",
    tagAr: "مجموعة بوسترات سيارات",
    image: "assets/Yellow Porsche 3/upscalemedia-transformed yellow 3_01.png",
    gallery: [
      "assets/Yellow Porsche 3/upscalemedia-transformed yellow 3_01.png",
      "assets/Yellow Porsche 3/upscalemedia-transformed yellow 3_02.png",
      "assets/Yellow Porsche 3/upscalemedia-transformed yellow 3_03.png"
    ],
    basePrice: 50,
    sizes: { "20x30": 50, "30x40": 60, "40x50": 70 },
    frames: ["None", "Black", "White", "Wood"],
    description: "A three-image Yellow Porsche poster set with bright racing energy.",
    descriptionAr: "مجموعة بثلاث صور لبوستر بورشه صفراء بطاقة سباقية مشرقة."
  }
];

const defaultProducts = products.map((product) => structuredClone(product));
const productReviews = {
  "custom-upload": [
    { name: "Mariam", rating: 5, text: "The custom print came out sharp and the team checked the design before printing." },
    { name: "Omar", rating: 5, text: "Easy upload, fast reply on WhatsApp, and the final poster looked clean." }
  ],
  "porsche-gt3-rs": [
    { name: "Youssef", rating: 5, text: "The colors are strong and the frame makes it look premium on my wall." },
    { name: "Nour", rating: 4, text: "Good quality print and the size options were clear before ordering." }
  ],
  "red-ferrari": [
    { name: "Karim", rating: 5, text: "Perfect gift for a car fan. The details looked better than expected." },
    { name: "Salma", rating: 5, text: "Arrived ready to hang and the WhatsApp ordering was simple." }
  ],
  "red-bull-racing": [
    { name: "Hassan", rating: 5, text: "Very clean racing poster, especially with the black frame." },
    { name: "Laila", rating: 4, text: "Nice finish and quick confirmation after payment." }
  ],
  "space-astronauts": [
    { name: "Farida", rating: 5, text: "The colors made the room feel brighter. Loved the print texture." },
    { name: "Ali", rating: 5, text: "Great poster for a gaming setup, and the frame was solid." }
  ],
  "minecraft-avengers": [
    { name: "Adam", rating: 5, text: "Fun design and the print was clear, not pixelated." },
    { name: "Jana", rating: 4, text: "My brother loved it. Ordering from the product page was easy." }
  ],
  "monaliza": [
    { name: "Dina", rating: 5, text: "Classic look with a modern feel. It looks great in a simple frame." },
    { name: "Mazen", rating: 5, text: "Clean colors and good paper quality for the price." }
  ],
  "spiderman": [
    { name: "Seif", rating: 5, text: "Big, bold, and very sharp. Exactly what I wanted for my room." },
    { name: "Mona", rating: 4, text: "Good print and the customer support was quick." }
  ],
  "blue-porsche-3": [
    { name: "Tamer", rating: 5, text: "The three-piece set looks coordinated and expensive." },
    { name: "Nada", rating: 5, text: "Great for a gallery wall. The photos all matched nicely." }
  ],
  "red-ferrari-3": [
    { name: "Mostafa", rating: 5, text: "The set has strong energy and the red color printed beautifully." },
    { name: "Rana", rating: 4, text: "Nice series, especially when ordered with the same frame color." }
  ],
  "yellow-porsche-3": [
    { name: "Bassem", rating: 5, text: "Bright and stylish. The three posters work really well together." },
    { name: "Yara", rating: 5, text: "Fast service and the final wall setup looks amazing." }
  ]
};

const LOCAL_STORAGE_LANG_KEY = "poster-lab-lang";
const LOCAL_STORAGE_THEME_KEY = "poster-lab-theme";
const LOCAL_STORAGE_UPLOAD_KEY = "poster-lab-custom-upload";
const LOCAL_STORAGE_CART_KEY = "poster-lab-cart";
const LOCAL_STORAGE_PRODUCTS_KEY = "poster-lab-admin-products";
const LOCAL_STORAGE_ADMIN_KEY = "poster-lab-admin-unlocked";
const ADMIN_PASSCODE = "posterlab-admin";

const DB_NAME = "PosterLabStoreDB";
const DB_VERSION = 1;
const STORE_NAME = "custom_uploads";

function getDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error);
  });
}

function storeImageInDB(key, blob) {
  return getDB().then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(blob, key);
      request.onsuccess = () => resolve(true);
      request.onerror = () => reject(request.error);
    });
  }).catch((err) => {
    console.error("IndexedDB store error:", err);
    return false;
  });
}

function getImageFromDB(key) {
  return getDB().then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(key);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }).catch((err) => {
    console.error("IndexedDB get error:", err);
    return null;
  });
}

function deleteImageFromDB(key) {
  return getDB().then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(key);
      request.onsuccess = () => resolve(true);
      request.onerror = () => reject(request.error);
    });
  }).catch((err) => {
    console.error("IndexedDB delete error:", err);
    return false;
  });
}

async function initializeCartImages() {
  for (const item of state.cart) {
    if (item.upload && !item.upload.url) {
      const blob = await getImageFromDB(item.key);
      if (blob) {
        item.upload.url = URL.createObjectURL(blob);
      }
    }
  }
  renderCart();
  if (state.confirmedForm) {
    renderConfirmation();
  }
}

function loadCustomUpload() {
  return null;
}

function saveCustomUpload(upload) {
  // Do not persist upload metadata to prevent reloading broken object URLs
}

function loadCart() {
  const saved = localStorage.getItem(LOCAL_STORAGE_CART_KEY);
  if (!saved) return [];
  try {
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) return [];
    return parsed.map((item) => ({
      ...item,
      upload: item.upload ? { ...item.upload, url: "" } : null
    }));
  } catch {
    return [];
  }
}

function saveCart() {
  const cleanCart = state.cart.map((item) => {
    if (item.upload) {
      return {
        ...item,
        upload: {
          name: item.upload.name,
          size: item.upload.size,
          type: item.upload.type,
          url: "" // Keep the localStorage clean of huge base64/blob strings
        }
      };
    }
    return item;
  });
  localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cleanCart));
}

function loadAdminProducts() {
  const saved = localStorage.getItem(LOCAL_STORAGE_PRODUCTS_KEY);
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) return;
    products.splice(0, products.length, ...parsed);
  } catch (err) {
    console.error("Product admin data could not be loaded:", err);
  }
}

function saveAdminProducts() {
  localStorage.setItem(LOCAL_STORAGE_PRODUCTS_KEY, JSON.stringify(products));
}

loadAdminProducts();

const state = {
  lang: localStorage.getItem(LOCAL_STORAGE_LANG_KEY) || "en",
  theme: localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || "dark",
  search: "",
  category: "all",
  size: "all",
  frame: "all",
  sort: "featured",
  cart: loadCart(),
  selectedProduct: null,
  detailSize: "30x40",
  detailFrame: "Black",
  customUpload: loadCustomUpload(),
  confirmedForm: null,
  isAdmin: localStorage.getItem(LOCAL_STORAGE_ADMIN_KEY) === "true",
  editingProductId: ""
};

const productGrid = document.querySelector("#productGrid");
const resultCount = document.querySelector("#resultCount");
const productDetail = document.querySelector("#productDetail");
const cartDrawer = document.querySelector("[data-cart-drawer]");
const cartItems = document.querySelector("#cartItems");
const cartTotal = document.querySelector("#cartTotal");
const cartCount = document.querySelector("[data-cart-count]");
const cartButton = document.querySelector(".cart-button");
const checkoutForm = document.querySelector("#checkoutForm");
const paymentConfirmation = document.querySelector("#paymentConfirmation");
const confirmationSummary = document.querySelector("#confirmationSummary");
const toastContainer = document.querySelector(".toast-notification");

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function getProductName(product) {
  const currentLang = state.lang || "en";
  return currentLang === "ar" && product.nameAr ? product.nameAr : product.name;
}

function flashCartBubble() {
  if (!cartCount) return;
  cartCount.classList.add("bump");
  window.setTimeout(() => cartCount.classList.remove("bump"), 320);
}

function showToast(message) {
  if (!toastContainer) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  toastContainer.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  window.setTimeout(() => {
    toast.classList.remove("show");
    toast.addEventListener("transitionend", () => toast.remove(), { once: true });
  }, 2400);
}

function money(amount) {
  return currency.format(amount).replace("EGP", "EGP ");
}

function getProduct(id) {
  return products.find((product) => product.id === id);
}

function getDefaultProduct(id) {
  return defaultProducts.find((product) => product.id === id);
}

function productImageUrl(path) {
  return new URL(path, window.location.href).href;
}

function displayImageForItem(product, item = null) {
  return item?.upload?.url || product.image;
}

function itemUnitPrice(product, size, frame) {
  return product.sizes[size] + frameOptions[frame].price;
}

function getPageProductId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function t(key) {
  const currentLang = state.lang || "en";
  return translations[currentLang]?.[key] || translations["en"]?.[key] || key;
}

function galleryBadge(product) {
  if (!product.gallery || product.gallery.length <= 1) return "";
  const currentLang = state.lang || "en";
  const count = product.gallery.length;
  if (currentLang === "ar") {
    return `${count} ${count === 1 ? "صورة" : "صور"}`;
  }
  return `${count} images`;
}

function getFrameOptionLabel(frameKey) {
  const currentLang = state.lang || "en";
  if (currentLang === "ar") {
    if (frameKey === "None") return "بوستر فقط";
    if (frameKey === "Black") return "إطار أسود";
    if (frameKey === "White") return "إطار أبيض";
    if (frameKey === "Wood") return "إطار خشبي";
  }
  return frameOptions[frameKey]?.label || frameKey;
}

function getFrameOptionHint(frameKey) {
  const currentLang = state.lang || "en";
  if (currentLang === "ar") {
    if (frameKey === "None") return "بوستر فقط بدون إطار";
  }
  return frameOptions[frameKey]?.hint || "";
}

function updateLanguageUI() {
  const currentLang = state.lang || "en";
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  // Update static elements with data-t
  document.querySelectorAll("[data-t]").forEach((elem) => {
    const key = elem.dataset.t;
    elem.textContent = t(key);
  });

  // Update static elements with data-t-placeholder
  document.querySelectorAll("[data-t-placeholder]").forEach((elem) => {
    const key = elem.dataset.tPlaceholder;
    elem.placeholder = t(key);
  });

  // Specifically handle search input placeholder
  const searchInput = document.querySelector("#searchInput");
  if (searchInput) {
    searchInput.placeholder = t("searchPlaceholder");
  }
}

function updateThemeUI() {
  const theme = state.theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = theme;
  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    const label = theme === "dark" ? t("themeToggle") : t("themeToggleDark");
    const icon = button.querySelector("[data-theme-icon]");
    const text = button.querySelector("[data-t]");
    button.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    if (icon) icon.textContent = theme === "dark" ? "☀" : "☾";
    if (text) text.textContent = label;
  });
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, state.theme);
  updateThemeUI();
}

function toggleLanguage() {
  state.lang = state.lang === "en" ? "ar" : "en";
  localStorage.setItem(LOCAL_STORAGE_LANG_KEY, state.lang);
  updateLanguageUI();
  updateThemeUI();
  if (productGrid) renderProducts();
  renderAdminPanel();
  renderCart();
  if (state.selectedProduct) {
    renderDetail(state.selectedProduct);
  }
}

function preloadProductImages(list = products) {
  const preload = () => {
    list.flatMap((product) => product.gallery?.length ? product.gallery : [product.image])
      .filter(Boolean)
      .slice(0, 18)
      .forEach((src) => {
        const img = new Image();
        img.decoding = "async";
        img.src = src;
      });
  };

  if ("requestIdleCallback" in window) {
    requestIdleCallback(preload);
  } else {
    window.setTimeout(preload, 300);
  }
}

function filteredProducts() {
  const search = state.search.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const haystack = [
      product.name, product.nameAr,
      product.category,
      product.tag, product.tagAr,
      product.description, product.descriptionAr
    ].filter(Boolean).join(" ").toLowerCase();
    const matchesSearch = !search || haystack.includes(search);
    const matchesCategory = state.category === "all" || product.category === state.category;
    const matchesSize = state.size === "all" || Object.keys(product.sizes).includes(state.size);
    const matchesFrame = state.frame === "all" || product.frames.includes(state.frame);
    return matchesSearch && matchesCategory && matchesSize && matchesFrame;
  });

  return filtered.sort((a, b) => {
    if (state.sort === "price-low") return a.basePrice - b.basePrice;
    if (state.sort === "price-high") return b.basePrice - a.basePrice;
    if (state.sort === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });
}

function renderProducts() {
  if (!productGrid) return;
  const list = filteredProducts();
  const currentLang = state.lang || "en";
  const productCountText = currentLang === "ar"
    ? `${list.length} ${list.length === 1 ? t("resultCountProduct") : t("resultCountProducts")}`
    : `${list.length} ${list.length === 1 ? "product" : "products"}`;
  if (resultCount) resultCount.textContent = productCountText;

  if (!list.length) {
    productGrid.innerHTML = `<div class="empty-state"><strong>${t("noProductsFound")}</strong><p>${t("tryDifferentSearch")}</p></div>`;
    return;
  }

  productGrid.innerHTML = list.map((product, index) => {
    const name = getProductName(product);
    const tag = currentLang === "ar" && product.tagAr ? product.tagAr : product.tag;
    const desc = currentLang === "ar" && product.descriptionAr ? product.descriptionAr : product.description;

    return `
      <article class="product-card" style="--delay: ${index * 65}ms">
        <a class="product-media" href="product.html?id=${product.id}" aria-label="View ${name}">
          <span class="frame-preview frame-preview-black"></span>
          <img src="${product.image}" loading="lazy" decoding="async" alt="${name} ${currentLang === "ar" ? "بوستر مؤطر" : "framed poster"}">
          <span class="product-tag">${tag}</span>
          ${galleryBadge(product) ? `<span class="product-gallery-badge">${galleryBadge(product)}</span>` : ""}
        </a>
        <div class="product-info">
          <h3>${name}</h3>
          <p class="product-summary">${desc}</p>
          <div class="product-meta">
            <span>${t("from")} ${money(product.basePrice)}</span>
            <span>${t("sizesAvailable")}</span>
          </div>
          <div class="swatch-row" aria-label="Available frames">
            ${product.frames.map((frame) => `<span class="frame-swatch ${frame.toLowerCase()}">${getFrameOptionLabel(frame)}</span>`).join("")}
          </div>
          <div class="card-actions">
            ${product.isCustom ? "" : `<button class="quick-order-btn" type="button" data-quick-add="${product.id}">${t("orderNow")}</button>`}
            <a class="view-customize-btn" href="product.html?id=${product.id}">${product.isCustom ? t("uploadDesignBtn") : t("customize")}</a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function reviewStars(rating) {
  return "★★★★★".slice(0, rating).padEnd(5, "☆");
}

function productReviewsFor(product) {
  return product.reviews?.length ? product.reviews : (productReviews[product.id] || [
    { name: "Poster Lab customer", rating: 5, text: "Good print quality, clear order details, and fast WhatsApp support." },
    { name: "Verified buyer", rating: 5, text: "The poster arrived as expected and looked polished in the selected frame." }
  ]);
}

function renderReviews(product) {
  const currentLang = state.lang || "en";
  const reviews = productReviewsFor(product);
  return `
    <section class="review-section" aria-label="${t("reviewsTitle")}">
      <div class="review-heading">
        <p class="eyebrow">${t("reviewsTitle")}</p>
        <h3>${currentLang === "ar" ? "تقييمات تساعدك تختار بثقة" : "Reviews that help new customers choose"}</h3>
        <p>${t("reviewsSubtitle")}</p>
      </div>
      <div class="review-grid">
        ${reviews.map((review) => `
          <article class="review-card">
            <div class="review-stars" aria-label="${review.rating} out of 5">${reviewStars(review.rating)}</div>
            <p>${escapeHtml(review.text)}</p>
            <strong>${escapeHtml(review.name)}</strong>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderDetail(productId) {
  const product = getProduct(productId);
  if (!product) {
    productDetail.hidden = true;
    return;
  }

  const currentLang = state.lang || "en";
  const name = getProductName(product);
  const tag = currentLang === "ar" && product.tagAr ? product.tagAr : product.tag;
  const desc = currentLang === "ar" && product.descriptionAr ? product.descriptionAr : product.description;

  state.selectedProduct = product.id;
  if (!product.sizes[state.detailSize]) state.detailSize = Object.keys(product.sizes)[0];
  if (!product.frames.includes(state.detailFrame)) state.detailFrame = product.frames[0];

  if (productDetail) {
    document.title = `${name} — ${t("brandTitle")}`;
    productDetail.hidden = false;
    const previewImage = product.isCustom && state.customUpload ? state.customUpload.url : product.image;
    productDetail.innerHTML = `
      <article class="detail">
      <div class="detail-gallery">
        <div class="detail-main-image frame-${state.detailFrame.toLowerCase()}">
          <img id="detailMainImage" src="${previewImage}" loading="eager" decoding="async" fetchpriority="high" alt="${name} ${currentLang === "ar" ? "معرض البوستر" : "framed poster gallery image"}">
        </div>
        <div class="thumb-row">
          ${product.gallery.map((image) => `
            <button type="button" class="${image === previewImage ? "is-active" : ""}" data-gallery-image="${image}" aria-label="Show gallery image">
              <img src="${image}" loading="lazy" decoding="async" alt="${name} thumbnail">
            </button>
          `).join("")}
        </div>
      </div>
      <div class="detail-copy">
        <a class="back-link" href="index.html">${t("backToShop")}</a>
        <p class="eyebrow">${tag} / ${t("detailEyebrow")}</p>
        <h2>${name}</h2>
        <p>${desc}</p>
        <div class="price-line">
          <span>${money(itemUnitPrice(product, state.detailSize, state.detailFrame))}</span>
          <small>${state.detailSize} ${currentLang === "ar" ? "سم مع" : "cm with"} ${getFrameOptionLabel(state.detailFrame)}</small>
        </div>
        <div class="variant-row">
          <span class="eyebrow">${t("detailPosterSize")}</span>
          <div class="variant-options">
            ${Object.entries(product.sizes).map(([size, price]) => `
              <button type="button" class="${size === state.detailSize ? "is-selected" : ""}" data-size="${size}">
                ${size} ${currentLang === "ar" ? "سم" : "cm"} - ${money(price)}
              </button>
            `).join("")}
          </div>
        </div>
        <div class="variant-row">
          <span class="eyebrow">${t("detailFrameColor")}</span>
          <div class="variant-options frame-options">
            ${product.frames.map((frame) => `
              <button type="button" class="${frame === state.detailFrame ? "is-selected" : ""}" data-frame="${frame}">
                <span class="dot ${frame.toLowerCase()}"></span>
                <span>${getFrameOptionLabel(frame)} + ${money(frameOptions[frame].price)}${frameOptions[frame].hint ? `<small class="choice-hint">${getFrameOptionHint(frame)}</small>` : ""}</span>
              </button>
            `).join("")}
          </div>
        </div>
        ${product.isCustom ? `
          <div class="upload-section">
            <label class="upload-box ${state.customUpload ? "has-file" : ""}">
              ${state.customUpload && state.customUpload.url ? `
                <img class="upload-preview-thumb" src="${state.customUpload.url}" alt="Preview">
              ` : ""}
              <div class="upload-box-content">
                <span>${state.customUpload ? t("detailSelectedFile") : t("detailUploadLabel")}</span>
                <small>${state.customUpload ? state.customUpload.name : t("detailUploadHint")}</small>
              </div>
              <input type="file" accept="image/*" data-upload-design>
            </label>
            ${state.customUpload ? `
              <button class="remove-upload-btn" type="button" data-remove-upload>${state.lang === "ar" ? "إزالة التصميم" : "Remove design"}</button>
            ` : ""}
          </div>
          
          <form class="direct-checkout-form" id="directCheckoutForm" style="margin-top: 24px; padding: 20px; background: rgba(30, 41, 59, 0.4); border-radius: 16px; border: 1px solid var(--line);">
            <h3 style="margin-top: 0; color: var(--accent); font-size: 1.3rem;">${currentLang === "ar" ? "أرسل التصميم على واتساب" : "Send your design on WhatsApp"}</h3>
            
            <label style="display: grid; gap: 8px; margin-bottom: 12px;">
              <span style="font-weight: 800; font-size: 0.95rem;">${t("cartNameLabel")}</span>
              <input id="directName" name="customerName" placeholder="${t("cartNamePlaceholder")}" required style="width:100%; min-height:48px; padding:12px; border-radius:8px; background: rgba(15,23,42,0.8); color:#fff; border:1px solid rgba(255,255,255,0.15);">
            </label>
            
            <label style="display: grid; gap: 8px; margin-bottom: 16px;">
              <span style="font-weight: 800; font-size: 0.95rem;">${t("cartPhoneLabel")}</span>
              <input id="directPhone" name="customerPhone" placeholder="${t("cartPhonePlaceholder")}" required style="width:100%; min-height:48px; padding:12px; border-radius:8px; background: rgba(15,23,42,0.8); color:#fff; border:1px solid rgba(255,255,255,0.15);">
            </label>

            <div style="margin-bottom: 16px; font-weight: 800; font-size: 1.1rem; color: #fff;">
              ${t("cartTotalLabel")} ${money(itemUnitPrice(product, state.detailSize, state.detailFrame))}
            </div>

            <button class="checkout-button" type="submit" id="directSendBtn" style="width: 100%; min-height: 56px; font-weight: 800; font-size: 1.2rem; cursor: pointer;">
              ${currentLang === "ar" ? "إرسال على واتساب" : "Send on WhatsApp"}
            </button>
          </form>
        ` : `
          <button class="detail-add" type="button" data-detail-add>${t("detailAddPosterBtn")}</button>
        `}
      </div>
    </article>
    ${renderReviews(product)}
  `;

    if (productGrid) {
      productDetail.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

function renderAdminPanel() {
  let panel = document.querySelector("#adminProductManager");
  const shouldShow = productGrid && (state.isAdmin || window.location.search.includes("admin=1") || window.location.hash === "#admin");
  if (!shouldShow) {
    panel?.remove();
    return;
  }

  if (!panel) {
    panel = document.createElement("section");
    panel.id = "adminProductManager";
    panel.className = "admin-panel";
    productGrid.closest(".store-section")?.after(panel);
  }

  if (!state.isAdmin) {
    panel.innerHTML = `
      <div class="admin-header">
        <div>
          <p class="eyebrow">${t("adminTitle")}</p>
          <h2>${t("adminUnlock")}</h2>
          <p>${t("adminHint")}</p>
        </div>
        <button class="checkout-button" type="button" data-admin-unlock>${t("adminUnlock")}</button>
      </div>
    `;
    return;
  }

  const editing = getProduct(state.editingProductId) || {
    id: "",
    name: "",
    nameAr: "",
    category: "cars",
    tag: "Poster",
    tagAr: "بوستر",
    image: "",
    gallery: [],
    basePrice: 50,
    sizes: { "20x30": 50, "30x40": 60, "40x50": 70 },
    frames: ["None", "Black", "White", "Wood"],
    description: "",
    descriptionAr: ""
  };

  panel.innerHTML = `
    <div class="admin-header">
      <div>
        <p class="eyebrow">${t("adminTitle")}</p>
        <h2>${t("adminTitle")}</h2>
        <p>${t("adminHint")}</p>
      </div>
      <div class="admin-actions">
        <button class="secondary-button" type="button" data-admin-reset>${t("adminReset")}</button>
        <button class="secondary-button" type="button" data-admin-lock>${t("adminLock")}</button>
      </div>
    </div>
    <form class="admin-form" id="adminProductForm">
      <input type="hidden" name="originalId" value="${escapeHtml(editing.id)}">
      <label><span>ID</span><input name="id" value="${escapeHtml(editing.id)}" placeholder="new-poster-id" required></label>
      <label><span>Name</span><input name="name" value="${escapeHtml(editing.name)}" required></label>
      <label><span>Arabic name</span><input name="nameAr" value="${escapeHtml(editing.nameAr || "")}"></label>
      <label><span>Category</span><select name="category">
        ${["custom", "cars", "paint", "abstract"].map((category) => `<option value="${category}" ${editing.category === category ? "selected" : ""}>${category}</option>`).join("")}
      </select></label>
      <label><span>Tag</span><input name="tag" value="${escapeHtml(editing.tag || "")}"></label>
      <label><span>Image path</span><input name="image" value="${escapeHtml(editing.image || "")}" placeholder="assets/example.png" required></label>
      <label class="admin-wide"><span>Gallery paths, comma separated</span><input name="gallery" value="${escapeHtml((editing.gallery || []).join(", "))}"></label>
      <label><span>Base price</span><input name="basePrice" type="number" min="1" value="${editing.basePrice || 50}" required></label>
      <label><span>20x30 price</span><input name="price20x30" type="number" min="1" value="${editing.sizes?.["20x30"] || 50}" required></label>
      <label><span>30x40 price</span><input name="price30x40" type="number" min="1" value="${editing.sizes?.["30x40"] || 60}" required></label>
      <label><span>40x50 price</span><input name="price40x50" type="number" min="1" value="${editing.sizes?.["40x50"] || 70}" required></label>
      <label class="admin-wide"><span>Description</span><textarea name="description" required>${escapeHtml(editing.description || "")}</textarea></label>
      <label class="admin-wide"><span>Arabic description</span><textarea name="descriptionAr">${escapeHtml(editing.descriptionAr || "")}</textarea></label>
      <button class="checkout-button" type="submit">${editing.id ? t("adminSave") : t("adminAdd")}</button>
      <button class="secondary-button" type="button" data-admin-new>${t("adminAdd")}</button>
    </form>
    <div class="admin-product-list">
      ${products.map((product) => `
        <article>
          <img src="${product.image}" loading="lazy" decoding="async" alt="">
          <strong>${escapeHtml(product.name)}</strong>
          <span>${money(product.basePrice)}</span>
          <button type="button" data-admin-edit="${product.id}">${t("adminEdit")}</button>
          <button type="button" data-admin-delete="${product.id}">${t("adminDelete")}</button>
        </article>
      `).join("")}
    </div>
  `;
}

async function addToCart(productId, size = "30x40", frame = "Black") {
  const product = getProduct(productId);
  if (!product) return;
  if (product.isCustom && !state.customUpload) {
    renderDetail(product.id);
    showToast(t("pleaseUploadAlert"));
    return;
  }
  const resolvedSize = product.sizes[size] ? size : Object.keys(product.sizes)[0];
  const resolvedFrame = product.frames.includes(frame) ? frame : product.frames[0];
  const upload = product.isCustom && state.customUpload ? {
    name: state.customUpload.name,
    size: state.customUpload.size,
    type: state.customUpload.type,
    url: state.customUpload.url,
    dataUrl: state.customUpload.dataUrl
  } : null;
  const key = product.isCustom
    ? `${product.id}-${resolvedSize}-${resolvedFrame}-${Date.now()}`
    : `${product.id}-${resolvedSize}-${resolvedFrame}`;

  if (product.isCustom && state.customUploadFile) {
    await storeImageInDB(key, state.customUploadFile);
  }

  const existing = state.cart.find((item) => item.key === key);

  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      key,
      productId: product.id,
      size: resolvedSize,
      frame: resolvedFrame,
      upload,
      quantity: 1
    });
  }

  hideConfirmation();
  saveCart();
  renderCart();
  openCart();
  flashCartBubble();
  showToast(`${t("addedToCart")} — ${getProductName(product)}`);
}

function cartLineTotal(item) {
  const product = getProduct(item.productId);
  if (!product) return 0;
  return itemUnitPrice(product, item.size, item.frame) * item.quantity;
}

function cartGrandTotal() {
  return state.cart.reduce((sum, item) => sum + cartLineTotal(item), 0);
}

function renderCart() {
  const totalQuantity = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCount) cartCount.textContent = totalQuantity;
  if (cartTotal) cartTotal.textContent = money(cartGrandTotal());
  if (!cartItems) return;
  const currentLang = state.lang || "en";

  if (!state.cart.length) {
    cartItems.innerHTML = `<div class="empty-state"><strong>${t("cartEmpty")}</strong><p>${t("cartStartOrderHint")}</p></div>`;
    return;
  }

  cartItems.innerHTML = state.cart.map((item) => {
    const product = getProduct(item.productId);
    if (!product) return "";
    const name = getProductName(product);
    return `
      <article class="cart-item">
        <img src="${displayImageForItem(product, item)}" alt="${name}">
        <div>
          <h3>${name}</h3>
          <p>${item.size} ${currentLang === "ar" ? "سم" : "cm"} / ${getFrameOptionLabel(item.frame)}</p>
          ${item.upload ? `<p>${currentLang === "ar" ? "الملف المرفوع:" : "Uploaded:"} ${item.upload.name}</p>` : ""}
          <p>${money(itemUnitPrice(product, item.size, item.frame))} ${t("cartEach")}</p>
        </div>
        <div class="quantity-controls" aria-label="Quantity controls">
          <button type="button" data-qty-minus="${item.key}">-</button>
          <strong>${item.quantity}</strong>
          <button type="button" data-qty-plus="${item.key}">+</button>
        </div>
      </article>
    `;
  }).join("");
}

function openCart() {
  if (!cartDrawer) return;
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  if (!cartDrawer) return;
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

async function updateQuantity(key, delta) {
  const item = state.cart.find((cartItem) => cartItem.key === key);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter((cartItem) => cartItem.key !== key);
    await deleteImageFromDB(key);
  }
  hideConfirmation();
  saveCart();
  renderCart();
}

function readCheckoutForm() {
  const fields = checkoutForm.elements;
  return {
    customerName: fields.customerName.value.trim(),
    customerPhone: fields.customerPhone.value.trim(),
    customerAddress: fields.customerAddress.value.trim(),
    paymentMethod: fields.paymentMethod.value
  };
}

function renderConfirmation() {
  const details = readCheckoutForm();
  state.confirmedForm = details;
  const uploadedItems = state.cart.filter((item) => item.upload);
  const currentLang = state.lang || "en";
  const orderTotalLabel = t("confTotal");
  const itemsCountText = currentLang === "ar"
    ? `${state.cart.length} ${state.cart.length === 1 ? t("confItemsCount") : t("confItemsCountPlural")}`
    : `${state.cart.length} customized framed poster ${state.cart.length === 1 ? "item" : "items"}`;

  const uploadHintMsg = currentLang === "ar"
    ? "💡 اضغط مطولاً على الصورة لحفظها ومشاركتها في واتساب!"
    : "💡 Long-press the image to save or share it directly to WhatsApp!";

  confirmationSummary.innerHTML = `
    <strong>${orderTotalLabel} ${money(cartGrandTotal())}</strong>
    <span>${details.customerName} / ${details.customerPhone}</span>
    <span>${details.paymentMethod}</span>
    <span>${itemsCountText}</span>
    ${uploadedItems.length ? `
      <div class="uploaded-summary">
        <p class="uploaded-summary-title" style="font-weight: 800; font-size: 0.85rem; margin: 4px 0;">${t("confUploadSummaryTitle")}</p>
        <p class="long-press-tip" style="color: var(--lime); font-size: 0.85rem; font-weight: 800; margin-bottom: 8px;">${uploadHintMsg}</p>
        ${uploadedItems.map((item) => {
    const product = getProduct(item.productId);
    const name = product.name;
    return `
            <article style="display: flex; flex-direction: column; align-items: center; background: rgba(0, 0, 0, 0.3); padding: 10px; border-radius: 12px; border: 1px solid var(--lime); margin-bottom: 8px;">
              <img src="${item.upload.url}" alt="${name} ${currentLang === "ar" ? "معاينة التصميم" : "uploaded design preview"}" style="max-width: 100%; height: auto; max-height: 200px; border-radius: 8px; object-fit: contain; margin-bottom: 6px;">
              <span style="font-weight: 800; font-size: 0.85rem; color: #fff;">${item.upload.name}</span>
            </article>
          `;
  }).join("")}
      </div>
    ` : ""}
  `;

  // Toggle visibility of payment methods dynamically
  const cashCard = paymentConfirmation.querySelector("[data-payment-cash]");
  const qrCard = paymentConfirmation.querySelector("[data-payment-qr]");
  if (cashCard && qrCard) {
    if (details.paymentMethod.includes("Vodafone Cash")) {
      cashCard.removeAttribute("hidden");
      qrCard.setAttribute("hidden", "true");
    } else if (details.paymentMethod.includes("Instapay")) {
      qrCard.removeAttribute("hidden");
      cashCard.setAttribute("hidden", "true");
    } else {
      cashCard.setAttribute("hidden", "true");
      qrCard.setAttribute("hidden", "true");
    }
  }

  checkoutForm.hidden = true;
  paymentConfirmation.hidden = false;
}

function hideConfirmation() {
  state.confirmedForm = null;
  checkoutForm.hidden = false;
  paymentConfirmation.hidden = true;

  const cashCard = paymentConfirmation.querySelector("[data-payment-cash]");
  const qrCard = paymentConfirmation.querySelector("[data-payment-qr]");
  if (cashCard) cashCard.setAttribute("hidden", "true");
  if (qrCard) qrCard.setAttribute("hidden", "true");
}

function setUploadProgress(percent = 0, active = false) {
  document.querySelectorAll("[data-upload-progress]").forEach((progress) => {
    const bar = progress.querySelector("[data-upload-progress-bar]");
    const value = Math.max(0, Math.min(100, percent));
    progress.hidden = !active;
    progress.setAttribute("aria-valuenow", String(Math.round(value)));
    if (bar) bar.style.width = `${value}%`;
  });
}

function resetCartAfterOrder() {
  state.cart.forEach((item) => {
    if (item.upload?.url && item.upload.url.startsWith("blob:")) {
      URL.revokeObjectURL(item.upload.url);
    }
    if (item.upload) deleteImageFromDB(item.key);
  });
  state.cart = [];
  state.confirmedForm = null;
  localStorage.removeItem(LOCAL_STORAGE_CART_KEY);
  hideConfirmation();
  renderCart();
  closeCart();
}

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
         (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
}

async function uploadImageToTemporaryServer(blob, fileName) {
  try {
    const formData = new FormData();
    formData.append("file", blob, fileName || "design.png");

    const response = await fetch("https://tmpfiles.org/api/v1/upload", {
      method: "POST",
      body: formData
    });

    if (!response.ok) throw new Error("Upload failed");
    const json = await response.json();
    if (json.data && json.data.url) {
      return json.data.url.replace("tmpfiles.org/", "tmpfiles.org/dl/");
    }
  } catch (err) {
    console.error("Temporary upload failed:", err);
  }
  return null;
}

async function fetchAndUploadImage(imgUrl, fileName) {
  try {
    const response = await fetch(imgUrl);
    const blob = await response.blob();
    return await uploadImageToTemporaryServer(blob, fileName);
  } catch (err) {
    console.error("Failed to fetch/upload image:", imgUrl, err);
    return null;
  }
}

function buildWhatsAppMessage() {
  const details = state.confirmedForm || readCheckoutForm();
  const currentLang = state.lang || "en";
  const isAr = currentLang === "ar";

  const tMsg = {
    title: isAr ? "طلب جديد من متجر بوستر لاب" : "New Order - Poster Lab Store",
    customer: isAr ? "اسم العميل" : "Customer Name",
    phone: isAr ? "رقم الهاتف" : "Phone",
    address: isAr ? "العنوان" : "Address",
    payment: isAr ? "طريقة الدفع" : "Payment Method",
    product: isAr ? "المنتج" : "Product",
    customization: isAr ? "التخصيص" : "Customization",
    link: isAr ? "رابط المنتج" : "Product Link",
    totalPrice: isAr ? "السعر الإجمالي" : "Total Price"
  };

  const lines = [
    `*${tMsg.title}*`,
    `----------------------------------`,
    `*${tMsg.customer}:* ${details.customerName}`,
    `*${tMsg.phone}:* ${details.customerPhone}`,
    `*${tMsg.address}:* ${details.customerAddress}`,
    `*${tMsg.payment}:* ${details.paymentMethod}`,
    `----------------------------------`
  ];

  state.cart.forEach((item, index) => {
    const product = getProduct(item.productId);
    if (!product) return;
    const name = getProductName(product);
    const resolvedSize = `${item.size} cm`;
    const resolvedFrame = getFrameOptionLabel(item.frame);

    lines.push(
      `*${tMsg.product} ${index + 1}:* ${name}`,
      `*${tMsg.customization}:* ${resolvedSize} | ${resolvedFrame}`,
      `*${tMsg.link}:* ${productImageUrl(`product.html?id=${product.id}`)}`
    );
  });

  lines.push(
    `----------------------------------`,
    `*${tMsg.totalPrice}:* ${money(cartGrandTotal())}`
  );

  return lines.filter(line => line !== "").join("\n");
}

function handleCheckout(event) {
  event.preventDefault();
  if (!state.cart.length) {
    showToast(t("confAddFirstAlert"));
    return;
  }
  renderConfirmation();
}

async function sendWhatsAppOrder() {
  if (!state.cart.length) {
    showToast(t("confAddFirstAlert"));
    return;
  }

  const isAr = state.lang === "ar";
  showToast(isAr ? "جاري رفع صور المنتجات إلى الخادم الآمن..." : "Uploading product images to secure server...");
  setUploadProgress(8, true);

  let message = buildWhatsAppMessage();
  const uploadPromises = [];
  const uploadTotal = state.cart.reduce((total, item) => {
    const product = getProduct(item.productId);
    if (!product) return total;
    if (item.upload && item.upload.url) return total + 1;
    return total + ((product.gallery && product.gallery.length) ? product.gallery.length : 1);
  }, 0);
  let uploadDone = 0;

  const uploadWithProgress = async (imgUrl, fileName) => {
    const url = await fetchAndUploadImage(imgUrl, fileName);
    uploadDone += 1;
    setUploadProgress(8 + (uploadDone / Math.max(uploadTotal, 1)) * 82, true);
    return url;
  };

  // Gather all items and their images (including full galleries for series)
  state.cart.forEach((item, index) => {
    const product = getProduct(item.productId);
    if (!product) return;
    if (item.upload && item.upload.url) {
      // Custom upload
      uploadPromises.push((async () => {
        const url = await uploadWithProgress(item.upload.url, item.upload.name);
        return { index, label: isAr ? "التصميم المرفوع" : "Uploaded Design", urls: url ? [url] : [] };
      })());
    } else {
      // Standard product or Series
      const imagesToUpload = (product.gallery && product.gallery.length) ? product.gallery : [product.image];
      uploadPromises.push((async () => {
        const urls = [];
        for (let i = 0; i < imagesToUpload.length; i++) {
          const imgUrl = productImageUrl(imagesToUpload[i]);
          const fileName = `${product.name.replace(/\s+/g, "_")}_${i + 1}.png`;
          const url = await uploadWithProgress(imgUrl, fileName);
          if (url) urls.push(url);
        }
        return { index, label: getProductName(product), urls };
      })());
    }
  });

  try {
    const results = await Promise.all(uploadPromises);
    let linkSection = isAr ? "\n\n*روابط تنزيل صور المنتجات:*" : "\n\n*Product Image Download Links:*";
    results.forEach((res) => {
      linkSection += `\n- *${res.label}:*`;
      res.urls.forEach((url, i) => {
        linkSection += `\n  [${i + 1}] ${url}`;
      });
    });
    message += linkSection;
    setUploadProgress(100, true);
    showToast(isAr ? "تم الرفع بنجاح!" : "Upload successful!");
  } catch (err) {
    console.error("Failed to upload some product images:", err);
    showToast(isAr ? "حدث خطأ أثناء رفع بعض الصور" : "Error uploading some images");
  }

  setTimeout(() => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setUploadProgress(0, false);
    resetCartAfterOrder();
  }, 1500);
}

const searchInput = document.querySelector("#searchInput");
if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderProducts();
  });
}

const categoryFilter = document.querySelector("#categoryFilter");
if (categoryFilter) {
  categoryFilter.addEventListener("change", (event) => {
    state.category = event.target.value;
    renderProducts();
  });
}

const sizeFilter = document.querySelector("#sizeFilter");
if (sizeFilter) {
  sizeFilter.addEventListener("change", (event) => {
    state.size = event.target.value;
    renderProducts();
  });
}

const frameFilter = document.querySelector("#frameFilter");
if (frameFilter) {
  frameFilter.addEventListener("change", (event) => {
    state.frame = event.target.value;
    renderProducts();
  });
}

const sortFilter = document.querySelector("#sortFilter");
if (sortFilter) {
  sortFilter.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderProducts();
  });
}

document.addEventListener("click", (event) => {
  const themeToggle = event.target.closest("[data-theme-toggle]");
  if (themeToggle) {
    toggleTheme();
    return;
  }

  const langToggle = event.target.closest("[data-lang-toggle]");
  if (langToggle) {
    toggleLanguage();
    return;
  }

  const adminUnlock = event.target.closest("[data-admin-unlock]");
  if (adminUnlock) {
    const passcode = window.prompt("Admin passcode");
    if (passcode === ADMIN_PASSCODE) {
      state.isAdmin = true;
      localStorage.setItem(LOCAL_STORAGE_ADMIN_KEY, "true");
      renderAdminPanel();
      showToast("Admin unlocked");
    } else if (passcode) {
      showToast("Wrong admin passcode");
    }
    return;
  }

  const adminLock = event.target.closest("[data-admin-lock]");
  if (adminLock) {
    state.isAdmin = false;
    localStorage.removeItem(LOCAL_STORAGE_ADMIN_KEY);
    renderAdminPanel();
    showToast("Admin locked");
    return;
  }

  const adminNew = event.target.closest("[data-admin-new]");
  if (adminNew) {
    state.editingProductId = "";
    renderAdminPanel();
    return;
  }

  const adminEdit = event.target.closest("[data-admin-edit]");
  if (adminEdit) {
    state.editingProductId = adminEdit.dataset.adminEdit;
    renderAdminPanel();
    document.querySelector("#adminProductForm")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const adminDelete = event.target.closest("[data-admin-delete]");
  if (adminDelete) {
    const product = getProduct(adminDelete.dataset.adminDelete);
    if (product && window.confirm(`Delete ${product.name}?`)) {
      products.splice(products.findIndex((item) => item.id === product.id), 1);
      state.cart = state.cart.filter((item) => item.productId !== product.id);
      saveAdminProducts();
      saveCart();
      renderProducts();
      renderCart();
      renderAdminPanel();
      showToast("Product deleted");
    }
    return;
  }

  const adminReset = event.target.closest("[data-admin-reset]");
  if (adminReset && window.confirm("Reset local product edits?")) {
    products.splice(0, products.length, ...defaultProducts.map((product) => structuredClone(product)));
    state.editingProductId = "";
    localStorage.removeItem(LOCAL_STORAGE_PRODUCTS_KEY);
    renderProducts();
    renderAdminPanel();
    showToast("Local product edits reset");
    return;
  }

  const removeUpload = event.target.closest("[data-remove-upload]");
  if (removeUpload) {
    if (state.customUpload?.url && state.customUpload.isObjectUrl) {
      URL.revokeObjectURL(state.customUpload.url);
    }
    state.customUpload = null;
    saveCustomUpload(null);
    renderDetail(state.selectedProduct);
    return;
  }

  const quickAdd = event.target.closest("[data-quick-add]");
  if (quickAdd) {
    const product = getProduct(quickAdd.dataset.quickAdd);
    if (product?.isCustom) {
      window.location.href = `product.html?id=${product.id}`;
    } else {
      addToCart(quickAdd.dataset.quickAdd);
    }
  }

  const openButton = event.target.closest("[data-open-cart]");
  if (openButton) openCart();

  const closeButton = event.target.closest("[data-close-cart]");
  if (closeButton) closeCart();

  if (event.target === cartDrawer) closeCart();

  const galleryButton = event.target.closest("[data-gallery-image]");
  if (galleryButton) {
    const selectedImage = galleryButton.dataset.galleryImage;
    const detailImage = document.querySelector("#detailMainImage");
    if (detailImage) detailImage.src = selectedImage;

    document.querySelectorAll("[data-gallery-image]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.galleryImage === selectedImage);
    });
  }

  const sizeButton = event.target.closest("[data-size]");
  if (sizeButton) {
    state.detailSize = sizeButton.dataset.size;
    renderDetail(state.selectedProduct);
  }

  const frameButton = event.target.closest("[data-frame]");
  if (frameButton) {
    state.detailFrame = frameButton.dataset.frame;
    renderDetail(state.selectedProduct);
  }

  const detailAdd = event.target.closest("[data-detail-add]");
  if (detailAdd) addToCart(state.selectedProduct, state.detailSize, state.detailFrame);

  const minusButton = event.target.closest("[data-qty-minus]");
  if (minusButton) updateQuantity(minusButton.dataset.qtyMinus, -1);

  const plusButton = event.target.closest("[data-qty-plus]");
  if (plusButton) updateQuantity(plusButton.dataset.qtyPlus, 1);

  const editCheckout = event.target.closest("[data-edit-checkout]");
  if (editCheckout) hideConfirmation();

  const sendWhatsApp = event.target.closest("[data-send-whatsapp]");
  if (sendWhatsApp) sendWhatsAppOrder();
});

document.addEventListener("change", (event) => {
  const uploadInput = event.target.closest("[data-upload-design]");
  if (!uploadInput) return;
  const file = uploadInput.files?.[0];
  if (!file) return;

  if (state.customUpload?.url && state.customUpload.isObjectUrl) {
    URL.revokeObjectURL(state.customUpload.url);
  }

  const objectUrl = URL.createObjectURL(file);
  state.customUpload = {
    name: file.name,
    size: file.size,
    type: file.type || "image",
    url: objectUrl,
    isObjectUrl: true
  };
  state.customUploadFile = file; // Store raw file object
  saveCustomUpload(state.customUpload);
  renderDetail(state.selectedProduct);
});

if (checkoutForm) checkoutForm.addEventListener("submit", handleCheckout);

document.addEventListener("submit", async (event) => {
  const adminForm = event.target.closest("#adminProductForm");
  if (adminForm) {
    event.preventDefault();
    const data = new FormData(adminForm);
    const id = String(data.get("id") || "").trim().toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-|-$/g, "");
    if (!id) {
      showToast("Product ID is required");
      return;
    }
    const gallery = String(data.get("gallery") || "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    const product = {
      id,
      name: String(data.get("name") || "").trim(),
      nameAr: String(data.get("nameAr") || "").trim(),
      category: String(data.get("category") || "cars"),
      tag: String(data.get("tag") || "Poster").trim(),
      tagAr: String(data.get("tag") || "بوستر").trim(),
      image: String(data.get("image") || "").trim(),
      gallery: gallery.length ? gallery : [String(data.get("image") || "").trim()],
      basePrice: Number(data.get("basePrice")) || 50,
      sizes: {
        "20x30": Number(data.get("price20x30")) || 50,
        "30x40": Number(data.get("price30x40")) || 60,
        "40x50": Number(data.get("price40x50")) || 70
      },
      frames: ["None", "Black", "White", "Wood"],
      description: String(data.get("description") || "").trim(),
      descriptionAr: String(data.get("descriptionAr") || "").trim()
    };
    const originalId = String(data.get("originalId") || "");
    const existingIndex = products.findIndex((item) => item.id === originalId || item.id === id);
    if (existingIndex >= 0) {
      products[existingIndex] = product;
    } else {
      products.push(product);
    }
    state.editingProductId = product.id;
    saveAdminProducts();
    renderProducts();
    renderAdminPanel();
    showToast("Product saved");
    return;
  }

  const directForm = event.target.closest("#directCheckoutForm");
  if (!directForm) return;
  event.preventDefault();

  if (!state.customUpload || !state.customUploadFile) {
    showToast(t("pleaseUploadAlert"));
    return;
  }

  const product = getProduct(state.selectedProduct);
  const name = getProductName(product);
  const size = state.detailSize;
  const frame = state.detailFrame;
  const price = itemUnitPrice(product, size, frame);

  const customerName = directForm.elements.customerName.value.trim();
  const customerPhone = directForm.elements.customerPhone.value.trim();

  const currentLang = state.lang || "en";
  const isAr = currentLang === "ar";

  const tMsg = {
    title: isAr ? "استفسار وطلب تصميم خاص - بوستر لاب" : "Custom Design Inquiry - Poster Lab Store",
    customer: isAr ? "اسم العميل" : "Customer Name",
    phone: isAr ? "رقم الهاتف" : "Phone",
    product: isAr ? "المنتج" : "Product",
    customization: isAr ? "التخصيص" : "Customization",
    imageAttached: isAr ? "اسم ملف التصميم" : "Design file",
    note: isAr ? "سنراجع التصميم ونؤكد التفاصيل على واتساب." : "We will review the design and confirm details on WhatsApp.",
    totalPrice: isAr ? "السعر المقدر" : "Estimated Price"
  };

  const lines = [
    `*${tMsg.title}*`,
    `----------------------------------`,
    `*${tMsg.customer}:* ${customerName}`,
    `*${tMsg.phone}:* ${customerPhone}`,
    `----------------------------------`,
    `*${tMsg.product}:* ${name}`,
    `*${tMsg.customization}:* ${size} cm | ${getFrameOptionLabel(frame)}`,
    `*${tMsg.imageAttached}:* ${state.customUpload.name}`,
    `----------------------------------`,
    `*${tMsg.note}*`,
    `----------------------------------`,
    `*${tMsg.totalPrice}:* ${money(price)}`
  ];

  let message = lines.filter(line => line !== "").join("\n");

  const imgUrl = state.customUpload.url;
  const fileName = state.customUpload.name;

  showToast(isAr ? "جاري رفع الصورة إلى الخادم الآمن..." : "Uploading image to secure server...");
  try {
    const response = await fetch(imgUrl);
    const blob = await response.blob();
    const uploadedUrl = await uploadImageToTemporaryServer(blob, fileName);
    if (uploadedUrl) {
      const linkLine = isAr 
        ? `\n*رابط تنزيل الصورة المرفوعة:* ${uploadedUrl}` 
        : `\n*Direct Image Download Link:* ${uploadedUrl}`;
      message += linkLine;
      showToast(isAr ? "تم الرفع بنجاح!" : "Upload successful!");
    } else {
      throw new Error("Upload returned null");
    }
  } catch (err) {
    console.error("Temporary upload failed, falling back to download:", err);
    // Trigger download
    try {
      const response = await fetch(imgUrl);
      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(downloadUrl), 5000);
    } catch (downloadErr) {
      console.error("Fallback download failed:", downloadErr);
    }
    await copyImageToClipboard(imgUrl);
  }

  setTimeout(() => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }, 1500);
});

// Run initial configurations
updateLanguageUI();
updateThemeUI();
if (productGrid) renderProducts();
renderAdminPanel();
renderCart();
initializeCartImages();
preloadProductImages();

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then((reg) => console.log('Service Worker registered:', reg))
      .catch((err) => console.error('Service Worker registration failed:', err));
  });
}

const pageProductId = getPageProductId();
if (pageProductId) {
  renderDetail(pageProductId);
} else if (!productGrid && productDetail) {
  productDetail.hidden = false;
  productDetail.innerHTML = `<div class="empty-state"><strong>${t("noProductsFound")}</strong><p><a href="index.html">${t("heroActionShop")}</a></p></div>`;
}
