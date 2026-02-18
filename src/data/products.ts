// ============================================
// CONFIGURATION - CHANGE THESE VALUES
// ============================================

// Your WhatsApp Business number (with country code, no + or spaces)
// Example: "919876543210" for India +91 98765 43210
export const WHATSAPP_NUMBER = "917708755348";

// Your Instagram handle (without @)
export const INSTAGRAM_HANDLE = "kkt_kktraders";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61556282679743";
export const TWITTER_URL = "https://twitter.com/KKTChennai";
export const PINTEREST_URL = "https://in.pinterest.com/kabalikarpagambaltraders/kabali-karpagambal-traders/";
export const GOOGLE_BUSINESS_URL = "https://www.google.com/search?q=Kabali+Karpagambal+Traders-East+Tambaram&stick=H4sIAAAAAAAA_-NgU1I1qDBONDUyTTMxNTc0MwCyja0MKlINDZJTjJPNkpNTUxJNDS0XsWp4JyYl5mQqeCcWFSSmJ-YCOQohRYkpqUXFuq6JxSUKISCxosRcABddfr1UAAAA&hl=en&mat=CSONC3cAZNVcElcB7PxHsckO-2q0JFVUj95tdhrQjTTkFwOBbkGuj2-F2607u14pM_7kfArKPeXTluH97qavBOVYm6K-6JP42hU9rN4mEgQ915w1bx-XlFboYD8vR0rCnwI&authuser=0";
export const YOUTUBE_SHORT_1_URL = "https://www.youtube.com/shorts/nyWyQsIWaPU";
export const YOUTUBE_SHORT_2_URL = "https://www.youtube.com/shorts/Rs7RDsS4L2Y";

// Primary brand color (green accent) - Change this to match your logo
export const BRAND_COLOR = "#2E5A3D";
export const BUTTER_IMAGE_URL = "https://ik.imagekit.io/qbnsahjpu/assets/KKT%20Traders/butter.png?updatedAt=1770871557753";
export const SUSTAINABILITY_DISCOUNT_IMAGE_URL = "https://ik.imagekit.io/qbnsahjpu/assets/KKT%20Traders/WhatsApp%20Image%202026-02-12%20at%2012.42.15%20(1).jpeg";

// ============================================
// PRODUCT TYPES
// ============================================

export interface Product {
  id: string;
  name: string;
  category: "spices" | "pickles" | "nuts" | "thokku" | "vadagam" | "healthmix" | "butterghee" | "honey" | "oils" | "rice" | "sweeteners" | "pooja";
  description: string;
  shortDescription: string;
  sizes: string[];
  tags: string[];
  images: string[];
  ingredients?: string;
  storageInfo?: string;
  isBestseller: boolean;
  isNew?: boolean;
  isSpicy?: boolean;
}

// ============================================
// MOCK PRODUCT DATA (20+ ITEMS)
// ============================================

export const products: Product[] = [
  // KEPT CORE ITEMS
  {
    id: "spice-001",
    name: "Uthukuli Cow Butter",
    category: "butterghee",
    description: "Traditional Uthukuli cow butter.",
    shortDescription: "Traditional Uthukuli cow butter",
    sizes: ["100g", "250g", "500g", "1kg"],
    tags: ["Bestseller"],
    images: ["https://mylaporeganapathys.com/wp-content/uploads/2025/05/cooking-butter.jpg"],
    isBestseller: true,
  },
  {
    id: "spice-009",
    name: "Uthukuli Cow Ghee",
    category: "butterghee",
    description: "Pure Uthukuli cow ghee. Bring your own container and get Rs.10 discount per litre.",
    shortDescription: "Pure Uthukuli cow ghee",
    sizes: ["100ml", "300ml", "500ml", "1li"],
    tags: ["Bestseller"],
    images: ["https://cdn.dotpe.in/longtail/store-items/6655963/TFVROXSR.jpeg"],
    isBestseller: true,
  },
  {
    id: "spice-010",
    name: "Uthukuli Buffalo Ghee",
    category: "butterghee",
    description: "Premium Uthukuli buffalo ghee. Bring your own container and get Rs.10 discount per litre.",
    shortDescription: "Premium Uthukuli buffalo ghee",
    sizes: ["100ml", "300ml", "500ml", "1li"],
    tags: ["Fresh"],
    images: ["https://cdn.dotpe.in/longtail/store-items/6655963/TFVROXSR.jpeg"],
    isBestseller: false,
  },
  {
    id: "nuts-002",
    name: "Roasted Cashews",
    category: "nuts",
    description: "Premium roasted cashews.",
    shortDescription: "Premium roasted cashews",
    sizes: ["100g", "250g", "500g"],
    tags: ["Fresh"],
    images: ["https://ik.imagekit.io/qbnsahjpu/assets/KKT%20Traders/WhatsApp%20Image%202026-02-12%20at%2012.41.57.jpeg"],
    isBestseller: false,
  },
  {
    id: "nuts-003",
    name: "Masala Cashews",
    category: "nuts",
    description: "Cashews roasted with aromatic spices.",
    shortDescription: "Spiced roasted cashews",
    sizes: ["100g", "250g", "500g"],
    tags: ["Spicy"],
    images: ["https://ik.imagekit.io/qbnsahjpu/assets/KKT%20Traders/WhatsApp%20Image%202026-02-12%20at%2012.41.57.jpeg"],
    isBestseller: false,
    isSpicy: true,
  },

  // NEW CATEGORIES - MISSING PRODUCTS
  {
    id: "honey-001",
    name: "Forest Honey",
    category: "honey",
    description: "Pure forest honey with natural aroma and rich taste.",
    shortDescription: "Pure forest honey",
    sizes: ["250g", "500g", "1kg"],
    tags: ["Bestseller"],
    images: ["https://spiisry.in/wp-content/uploads/2021/06/Honey-PNG-Transparent-Image.png"],
    isBestseller: true,
  },
  {
    id: "honey-002",
    name: "Wild Honey",
    category: "honey",
    description: "Wild honey sourced from natural forest regions.",
    shortDescription: "Natural wild honey",
    sizes: ["250g", "500g"],
    tags: ["Fresh"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6HHRdKjPSE3ZDgnSSnivwRbdw7Tk48txofg&s"],
    isBestseller: false,
  },
  {
    id: "oil-001",
    name: "Maracheku Groundnut Oil",
    category: "oils",
    description: "Cold-pressed maracheku groundnut oil.",
    shortDescription: "Cold-pressed groundnut oil",
    sizes: ["500ml", "1li"],
    tags: ["Bestseller"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8tzcw-cgWG4Depi5h1bTB4LTnnFL_GIzEw&s"],
    isBestseller: true,
  },
  {
    id: "oil-002",
    name: "Maracheku Sesame Oil",
    category: "oils",
    description: "Traditional maracheku sesame oil for cooking and seasoning.",
    shortDescription: "Traditional sesame oil",
    sizes: ["500ml", "1li"],
    tags: ["Fresh"],
    images: ["https://ecosureoils.com/wp-content/uploads/2023/05/Black-Sesame-Oil-1.jpg"],
    isBestseller: false,
  },
  {
    id: "oil-003",
    name: "Maracheku Coconut Oil",
    category: "oils",
    description: "Natural maracheku coconut oil.",
    shortDescription: "Natural coconut oil",
    sizes: ["500ml", "1li"],
    tags: ["Fresh"],
    images: ["https://content.jdmagicbox.com/comp/pollachi/q1/9999p4259.4259.190904141046.w8q1/catalogue/maracheku-oil-jayabal-pollachi-0xavrqvth0.jpg"],
    isBestseller: false,
  },
  {
    id: "rice-001",
    name: "Mappilai Samba Rice",
    category: "rice",
    description: "Traditional mappilai samba rice.",
    shortDescription: "Traditional mappilai samba rice",
    sizes: ["1kg", "5kg"],
    tags: ["Bestseller"],
    images: ["https://static.wixstatic.com/media/c7c732_c2d602fcac7a4954b520915c11006024~mv2.jpg/v1/fill/w_519,h_362,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c7c732_c2d602fcac7a4954b520915c11006024~mv2.jpg"],
    isBestseller: true,
  },
  {
    id: "rice-002",
    name: "Karuppu Kavuni Rice",
    category: "rice",
    description: "Premium traditional karuppu kavuni rice.",
    shortDescription: "Premium karuppu kavuni rice",
    sizes: ["1kg", "5kg"],
    tags: ["Fresh"],
    images: ["https://www.zipeit.com/admin/docs/products/images_full/karuppu-kavuni-rice-%E0%AE%95%E0%AE%B0%E0%AF%81%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AF%81-%E0%AE%95%E0%AE%B5%E0%AF%81%E0%AE%A9%E0%AE%BF-%E0%AE%85%E0%AE%B0%E0%AE%BF%E0%AE%9A%E0%AE%BF-black-rice-raw-1kg_FrontImage_966.jpg"],
    isBestseller: false,
  },
  {
    id: "rice-003",
    name: "Kichili Samba Rice",
    category: "rice",
    description: "Native kichili samba rice variety.",
    shortDescription: "Native kichili samba rice",
    sizes: ["1kg", "5kg"],
    tags: ["Fresh"],
    images: ["https://theyaadhum.com/wp-content/uploads/2025/08/Kichilli-samba.webp"],
    isBestseller: false,
  },
  {
    id: "sweet-002",
    name: "Vellam (Jaggery)",
    category: "sweeteners",
    description: "Traditional vellam (jaggery).",
    shortDescription: "Traditional vellam",
    sizes: ["500g", "1kg"],
    tags: ["Fresh"],
    images: ["https://www.miyofresh.com/wp-content/uploads/2025/03/GUNDU-VELLAM.jpg"],
    isBestseller: false,
  },
  {
    id: "sweet-003",
    name: "Nattu Sakkarai",
    category: "sweeteners",
    description: "Traditional nattu sakkarai.",
    shortDescription: "Traditional nattu sakkarai",
    sizes: ["500g", "1kg"],
    tags: ["Fresh"],
    images: ["https://kelapanatural.com/wp-content/uploads/2024/03/45_Country-Sugar-Nattu-sakkarai.jpg"],
    isBestseller: false,
  },
  {
    id: "pooja-001",
    name: "Pooja Camphor",
    category: "pooja",
    description: "Premium camphor for pooja use.",
    shortDescription: "Premium pooja camphor",
    sizes: ["50g", "100g"],
    tags: ["Fresh"],
    images: ["https://5.imimg.com/data5/ANDROID/Default/2025/6/520372996/GR/UU/SW/218868975/product-jpeg-500x500.jpg"],
    isBestseller: false,
  },
  {
    id: "pooja-002",
    name: "Cotton Wicks",
    category: "pooja",
    description: "Ready cotton wicks for diya and lamps.",
    shortDescription: "Ready cotton wicks",
    sizes: ["1 pack", "2 pack"],
    tags: ["Bestseller"],
    images: ["https://giri.in/cdn/shop/files/426510_Cotton_Wicks_THRHW_50P_2_d3eb4522-9869-43f2-bed7-262d5b6217cf_600x600.jpg?v=1709813415"],
    isBestseller: true,
  },
  {
    id: "pooja-004",
    name: "Deepam Oil",
    category: "pooja",
    description: "Traditional deepam oil for lamps and pooja use.",
    shortDescription: "Traditional deepam oil",
    sizes: ["500ml", "1li"],
    tags: ["Fresh"],
    images: ["https://m.media-amazon.com/images/I/61UyVYdRBFL._AC_UF894,1000_QL80_.jpg"],
    isBestseller: false,
  },
  {
    id: "pooja-003",
    name: "Sambrani Cups",
    category: "pooja",
    description: "Traditional sambrani cups for home pooja.",
    shortDescription: "Traditional sambrani cups",
    sizes: ["10 pcs", "20 pcs"],
    tags: ["Fresh"],
    images: ["https://sugandhlok.com/cdn/shop/files/havan-cup-2-min.png?v=1709293278&width=1445"],
    isBestseller: false,
  },

  // EXTRA SPICES TO KEEP
  {
    id: "spice-003",
    name: "Sambar Podi",
    category: "spices",
    description: "Traditional South Indian sambar podi.",
    shortDescription: "Traditional sambar podi",
    sizes: ["100g"],
    tags: ["Bestseller"],
    images: ["https://www.cubesnjuliennes.com/wp-content/uploads/2019/09/Best-Sambar-Powder-Recipe.jpg"],
    isBestseller: true,
  },
  {
    id: "spice-004",
    name: "Agraharam Sambar Podi",
    category: "spices",
    description: "Agraharam style sambar podi.",
    shortDescription: "Agraharam sambar podi",
    sizes: ["100g", "200g"],
    tags: ["Fresh"],
    images: ["https://m.media-amazon.com/images/I/61CujK7edRL._SX679_.jpg"],
    isBestseller: false,
  },
  {
    id: "spice-005",
    name: "Arachivita Sambar Podi",
    category: "spices",
    description: "Fresh-ground arachivita sambar podi.",
    shortDescription: "Arachivita sambar podi",
    sizes: ["100g", "200g"],
    tags: ["Fresh"],
    images: ["https://m.media-amazon.com/images/I/41+ojVgjcqL.jpg"],
    isBestseller: false,
  },

  // PDF PRODUCTS - PICKLES
  { id: "pickle-001", name: "Mango Avakai Pickle", category: "pickles", description: "Traditional mango avakai pickle.", shortDescription: "Traditional mango avakai", sizes: ["250g"], tags: ["Spicy"], images: ["https://vellankifoods.com/cdn/shop/products/andhra_avakaya_pickle_mango.jpg?v=1679897008"], isBestseller: true, isSpicy: true },
  { id: "pickle-101", name: "Cut Mango Pickle", category: "pickles", description: "Cut mango pickle.", shortDescription: "Cut mango pickle", sizes: ["250g"], tags: ["Spicy"], images: ["https://meenammaskitchen.com/cdn/shop/files/IMG_1074.jpg?v=1733812790"], isBestseller: false, isSpicy: true },
  { id: "pickle-002", name: "Garlic Pickle", category: "pickles", description: "Garlic pickle.", shortDescription: "Garlic pickle", sizes: ["250g"], tags: ["Spicy"], images: ["https://aahaaramonline.com/wp-content/uploads/2022/07/Andhra_Garlic_Pickle_Vellulli_Avakaya.jpg"], isBestseller: false, isSpicy: true },
  { id: "pickle-102", name: "Mango Pickle", category: "pickles", description: "Mango pickle.", shortDescription: "Mango pickle", sizes: ["250g"], tags: ["Spicy"], images: ["https://www.whiskaffair.com/wp-content/uploads/2020/07/Kerala-Style-Mango-Pickle-2-3.jpg"], isBestseller: false, isSpicy: true },
  { id: "pickle-103", name: "Mango Ginger Pickle", category: "pickles", description: "Mango ginger pickle.", shortDescription: "Mango ginger pickle", sizes: ["250g"], tags: ["Spicy"], images: ["https://mylaporeganapathys.com/wp-content/uploads/2025/05/mg-gi-pick.jpg"], isBestseller: false, isSpicy: true },
  { id: "pickle-104", name: "Lime Pickle", category: "pickles", description: "Lime pickle.", shortDescription: "Lime pickle", sizes: ["250g"], tags: ["Spicy"], images: ["https://mylaporeganapathys.com/wp-content/uploads/2025/05/lime-pickle.jpg"], isBestseller: false, isSpicy: true },
  { id: "pickle-105", name: "Amla Pickle", category: "pickles", description: "Amla pickle.", shortDescription: "Amla pickle", sizes: ["250g"], tags: ["Fresh"], images: ["https://masalachilli.com/wp-content/uploads/2021/03/Instant-Amla-Pickle-4.jpg"], isBestseller: false },
  { id: "pickle-106", name: "Mahali Pickle", category: "pickles", description: "Mahali pickle.", shortDescription: "Mahali pickle", sizes: ["250g"], tags: ["Fresh"], images: ["https://cdn.dotpe.in/longtail/store-items/6368303/UicTjDM6.webp"], isBestseller: false },
  { id: "pickle-107", name: "Vadu Mango", category: "pickles", description: "Vadu mango pickle.", shortDescription: "Vadu mango", sizes: ["250g"], tags: ["Bestseller"], images: ["https://www.jeyashriskitchen.com/wp-content/uploads/2014/04/maavadu-recipe.jpg"], isBestseller: true },

  // PDF PRODUCTS - THOKKU & MIX
  { id: "thokku-001", name: "Mango Thokku", category: "thokku", description: "Mango thokku.", shortDescription: "Mango thokku", sizes: ["250g"], tags: ["Bestseller"], images: ["https://images.aasaan.shop/stores/sasyafoods/products/product_images/product_1750920353020.jpeg"], isBestseller: true },
  { id: "thokku-101", name: "Pirandai Thokku", category: "thokku", description: "Pirandai thokku.", shortDescription: "Pirandai thokku", sizes: ["250g"], tags: ["Fresh"], images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKx7FivxVdbWdfq0vGtVlSQe_dHcRKxcKuRA&s"], isBestseller: false },
  { id: "thokku-102", name: "Puliyodharai Mix", category: "thokku", description: "Puliyodharai mix.", shortDescription: "Puliyodharai mix", sizes: ["250g"], tags: ["Fresh"], images: ["https://www.kaipunnyam.com/cdn/shop/products/puliyodarai.jpg?v=1676106848"], isBestseller: false },
  { id: "thokku-103", name: "Chettinadu Vathakuzhambu Mix", category: "thokku", description: "Chettinadu vathakuzhambu mix.", shortDescription: "Chettinadu vathakuzhambu mix", sizes: ["250g"], tags: ["Spicy"], images: ["https://m.media-amazon.com/images/I/71Vy7ysTFGL.jpg"], isBestseller: false, isSpicy: true },
  { id: "thokku-104", name: "Vathakuzhambu Mix", category: "thokku", description: "Vathakuzhambu mix.", shortDescription: "Vathakuzhambu mix", sizes: ["250g"], tags: ["Spicy"], images: ["https://www.kaipunnyam.com/cdn/shop/products/vathakuzhambu.jpg?v=1676106847"], isBestseller: false, isSpicy: true },
  { id: "thokku-105", name: "Curry Leaves Thokku", category: "thokku", description: "Curry leaves thokku.", shortDescription: "Curry leaves thokku", sizes: ["250g"], tags: ["Fresh"], images: ["https://vismaifood.com/storage/app/uploads/public/70e/340/bcf/thumb__700_0_0_0_auto.jpg"], isBestseller: false },
  { id: "thokku-106", name: "Kothamalli Thokku", category: "thokku", description: "Kothamalli thokku.", shortDescription: "Kothamalli thokku", sizes: ["250g"], tags: ["Fresh"], images: ["https://vijisfoods.com/wp-content/uploads/2025/05/Kothamalli-Thokku.jpg"], isBestseller: false },
  { id: "thokku-107", name: "Pudheena Thokku", category: "thokku", description: "Pudheena thokku.", shortDescription: "Pudheena thokku", sizes: ["250g"], tags: ["Fresh"], images: ["https://aswinssweets.com/cdn/shop/files/pudhinathokku-617.jpg?v=1742992613"], isBestseller: false },
  { id: "thokku-108", name: "Gongura Thokku", category: "thokku", description: "Gongura thokku.", shortDescription: "Gongura thokku", sizes: ["250g"], tags: ["Spicy"], images: ["https://mylaporeganapathys.com/wp-content/uploads/2025/05/gon-th.jpg"], isBestseller: false, isSpicy: true },
  { id: "thokku-003", name: "Ginger Thokku", category: "thokku", description: "Ginger thokku.", shortDescription: "Ginger thokku", sizes: ["250g"], tags: ["Fresh"], images: ["https://i0.wp.com/ahahomefoods.com/wp-content/uploads/2023/02/Ginger-Pickle-in-Jaggery-Sauce.jpg?fit=600%2C600&ssl=1"], isBestseller: false },
  { id: "thokku-002", name: "Tomato Thokku", category: "thokku", description: "Tomato thokku.", shortDescription: "Tomato thokku", sizes: ["250g"], tags: ["Fresh"], images: ["https://cookingfromheart.com/wp-content/uploads/2021/06/Vengayam-Thakkali-Thokku-4.jpg"], isBestseller: false },
  { id: "thokku-109", name: "Tomato Onion Thokku", category: "thokku", description: "Tomato onion thokku.", shortDescription: "Tomato onion thokku", sizes: ["250g"], tags: ["Fresh"], images: ["https://www.sharmispassions.com/wp-content/uploads/2021/01/OnionTomatoThokku3.jpg"], isBestseller: false },
  { id: "thokku-004", name: "Onion Thokku", category: "thokku", description: "Onion thokku.", shortDescription: "Onion thokku", sizes: ["250g"], tags: ["Fresh"], images: ["https://mylaporekitchens.in/cdn/shop/products/CCA348B7-E20E-49C7-9EE4-9B95A714F8B2.jpg?v=1678196669&width=1946"], isBestseller: false },
  { id: "thokku-110", name: "Red Chilli Thokku", category: "thokku", description: "Red chilli thokku.", shortDescription: "Red chilli thokku", sizes: ["250g"], tags: ["Spicy"], images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDRQntQSl_k5LjDsO7gQFBDs9iA8wRSqThQ&s"], isBestseller: false, isSpicy: true },
  { id: "thokku-111", name: "Green Chilli Thokku", category: "thokku", description: "Green chilli thokku.", shortDescription: "Green chilli thokku", sizes: ["250g"], tags: ["Spicy"], images: ["https://vismaifood.com/storage/app/uploads/public/798/32b/e13/thumb__1200_0_0_0_auto.jpg"], isBestseller: false, isSpicy: true },
  { id: "thokku-112", name: "Moor Kozhambu Mix", category: "thokku", description: "Moor kozhambu mix.", shortDescription: "Moor kozhambu mix", sizes: ["100g"], tags: ["Fresh"], images: ["https://m.media-amazon.com/images/I/71bL6-ptERL.jpg"], isBestseller: false },
  { id: "thokku-113", name: "Potato Mix", category: "thokku", description: "Potato mix.", shortDescription: "Potato mix", sizes: ["100g"], tags: ["Fresh"], images: ["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBkhCIB_lha2YjYbMOJ4TBqsmwpbcxEKe5J9w9kyJ6QliCJMTMciflUcjRjeQwqYo-x9xVCfs2-RSHBzNIUxQ_-AmU7XtQwHxIA2fBuXTnuAWm_PEYVryGGKRVM8LUfvEWXU6L4ZHQofZSN5cq7XUWM4wiuyBDnUw28YTbvMYcTQg1UqePN8hT_ePpw_k/s1600/lipton%20potatoes%204%20pn.png"], isBestseller: false },
  { id: "thokku-114", name: "Mavadu", category: "thokku", description: "Traditional mavadu from catalog.", shortDescription: "Traditional mavadu", sizes: ["100g"], tags: ["Fresh"], images: ["https://i.pinimg.com/736x/b2/7a/3a/b27a3a92d26bb37fe9ed96d849f7bdf0.jpg"], isBestseller: false },

  // PDF PRODUCTS - VATHAL & VADAM
  { id: "vadagam-101", name: "Omappodi Vathal", category: "vadagam", description: "Omappodi vathal.", shortDescription: "Omappodi vathal", sizes: ["250g"], tags: ["Fresh"], images: ["https://srivarahafoods.com/cdn/shop/files/Omapodi-Vadam-Rice-Arisi-Vadagam-1.webp?v=1750332060"], isBestseller: false },
  { id: "vadagam-102", name: "Elai Vadam", category: "vadagam", description: "Elai vadam.", shortDescription: "Elai vadam", sizes: ["250g"], tags: ["Fresh"], images: ["https://cdn.shopify.com/s/files/1/0051/4159/4210/files/13377677014_23277f59e0_z_2048x2048.jpg?v=1549607982"], isBestseller: false },
  { id: "vadagam-103", name: "Stick Vathal", category: "vadagam", description: "Stick vathal.", shortDescription: "Stick vathal", sizes: ["250g"], tags: ["Fresh"], images: ["https://allfoodsmart.com/wp-content/uploads/2020/12/rice-stick-vadam-appalam_1024x1024-430x397.jpg"], isBestseller: false },
  { id: "vadagam-104", name: "Red Chilli Javvarisi Vathal", category: "vadagam", description: "Red chilli javvarisi vathal.", shortDescription: "Red chilli javvarisi vathal", sizes: ["250g"], tags: ["Spicy"], images: ["https://i0.wp.com/www.chitrasfoodbook.com/wp-content/uploads/2015/04/javvarisi-vadam.jpg?w=1200&ssl=1"], isBestseller: false, isSpicy: true },
  { id: "vadagam-105", name: "Green Chilli Javvarisi Vathal", category: "vadagam", description: "Green chilli javvarisi vathal.", shortDescription: "Green chilli javvarisi vathal", sizes: ["250g"], tags: ["Spicy"], images: ["https://mylaporeganapathys.com/wp-content/uploads/2025/05/Sago-Vadam-Green-Chilly.jpg"], isBestseller: false, isSpicy: true },
  { id: "vadagam-106", name: "Plain Javvarisi Vathal", category: "vadagam", description: "Plain javvarisi vathal.", shortDescription: "Plain javvarisi vathal", sizes: ["250g"], tags: ["Fresh"], images: ["https://www.cookclickndevour.com/wp-content/uploads/2017/04/sago-vadam-recipe-b.jpg"], isBestseller: false },
  { id: "vadagam-107", name: "Muthu Javvarisi Vathal", category: "vadagam", description: "Muthu javvarisi vathal.", shortDescription: "Muthu javvarisi vathal", sizes: ["250g"], tags: ["Fresh"], images: ["https://img3.exportersindia.com/product_images/bc-full/2020/9/7762708/javvarisi-vathal-1600154659-5584317.jpeg"], isBestseller: false },
  { id: "vadagam-108", name: "Idli Vadam Round", category: "vadagam", description: "Idli vadam round.", shortDescription: "Idli vadam round", sizes: ["250g"], tags: ["Fresh"], images: ["https://i0.wp.com/superduper-kitchen.com/wp-content/uploads/2019/10/IMG_20200223_144811-e1708148483775.jpg?fit=364%2C302&ssl=1"], isBestseller: false },
  { id: "vadagam-109", name: "Kozhambu / Sambar Vadagam", category: "vadagam", description: "Kozhambu and sambar vadagam.", shortDescription: "Kozhambu / sambar vadagam", sizes: ["250g"], tags: ["Bestseller"], images: ["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlsTevr79BWm_qKhKgRkuz4Z7y-n56f4m8Hl0UxTECJeHD5PakDif8awXHXPACcfOi4OgoJNg8NqNhVg3i_W2-yOWSQjs6paG1IAzDaLapfdjL7t2uhhyphenhyphenox8yOSGXj23PsHAiWTaOqEA/w1200-h630-p-k-no-nu/Vadagam.JPG"], isBestseller: true },
  { id: "vadagam-110", name: "Jeeragam Vathal", category: "vadagam", description: "Jeeragam vathal.", shortDescription: "Jeeragam vathal", sizes: ["250g"], tags: ["Fresh"], images: ["https://mylaporeganapathys.com/wp-content/uploads/2025/05/Rice-Vadam-%E2%80%93-Jeera.jpg"], isBestseller: false },
  { id: "vadagam-111", name: "Ribbon Vathal", category: "vadagam", description: "Ribbon vathal.", shortDescription: "Ribbon vathal", sizes: ["250g"], tags: ["Fresh"], images: ["https://srivarahafoods.com/cdn/shop/files/Ribbon-Vadam-VadagamArisi-Vadam-1.webp?v=1750332069"], isBestseller: false },
  { id: "vadagam-112", name: "Onion Vathal", category: "vadagam", description: "Onion vathal.", shortDescription: "Onion vathal", sizes: ["250g"], tags: ["Fresh"], images: ["https://grandmaslilsecret.com/cdn/shop/files/SrideviLMGLSShoot20240337.webp?v=1715674142"], isBestseller: false },
  { id: "vadagam-113", name: "Kothavarakkai Vathal", category: "vadagam", description: "Kothavarakkai vathal.", shortDescription: "Kothavarakkai vathal", sizes: ["100g"], tags: ["Fresh"], images: ["https://srivarahafoods.com/cdn/shop/files/Kothavarai-Seeni-Avarakkai-Vathal.webp?v=1750332205"], isBestseller: false },
  { id: "vadagam-114", name: "Moor Milagai", category: "vadagam", description: "Moor milagai.", shortDescription: "Moor milagai", sizes: ["100g"], tags: ["Spicy"], images: ["https://srivarahafoods.com/cdn/shop/files/SriVaraha-Foods-Mor-Milagai-Vathal-Sun-dried-Curd-Chillies-100g.webp?v=1750332055"], isBestseller: false, isSpicy: true },
  { id: "vadagam-115", name: "Chundakkai Vathal (Without Salt)", category: "vadagam", description: "Chundakkai vathal without salt.", shortDescription: "Chundakkai vathal without salt", sizes: ["100g"], tags: ["Fresh"], images: ["https://srivarahafoods.com/cdn/shop/files/SriVaraha-Foods-Sundakkai-Sundaikkai-Vathal-Chundakkai-Sun-dried-turkey-berry.webp?v=1750332051"], isBestseller: false },
  { id: "vadagam-116", name: "Chundakkai Vathal (With Salt)", category: "vadagam", description: "Chundakkai vathal with salt.", shortDescription: "Chundakkai vathal with salt", sizes: ["100g"], tags: ["Fresh"], images: ["https://m.media-amazon.com/images/I/71txUhdMVuL._AC_UF894,1000_QL80_.jpg"], isBestseller: false },
  { id: "vadagam-117", name: "Manathakkali Vathal (Without Salt)", category: "vadagam", description: "Manathakkali vathal without salt.", shortDescription: "Manathakkali vathal without salt", sizes: ["100g"], tags: ["Fresh"], images: ["https://www.trulytraditionals.com/cdn/shop/files/Marthangali_2.jpg?v=1721393300"], isBestseller: false },
  { id: "vadagam-118", name: "Salt Narthangai", category: "vadagam", description: "Salt narthangai.", shortDescription: "Salt narthangai", sizes: ["100g"], tags: ["Fresh"], images: ["https://m.media-amazon.com/images/I/51UR9ghZrBL._AC_UF894,1000_QL80_.jpg"], isBestseller: false },
  { id: "vadagam-119", name: "Veppilai Katti", category: "vadagam", description: "Veppilai katti.", shortDescription: "Veppilai katti", sizes: ["100g"], tags: ["Fresh"], images: ["https://mylaporeganapathys.com/wp-content/uploads/2025/05/vk-specials.jpg"], isBestseller: false },
  { id: "vadagam-120", name: "Kozhambu Thalipu Vadagam (With Garlic)", category: "vadagam", description: "Kozhambu thalipu vadagam with garlic.", shortDescription: "Thalipu vadagam with garlic", sizes: ["100g"], tags: ["Bestseller"], images: ["https://i.ytimg.com/vi/2lUsQMOlh2k/maxresdefault.jpg"], isBestseller: true },
  { id: "vadagam-121", name: "Kozhambu Vadagam (Without Garlic)", category: "vadagam", description: "Kozhambu vadagam without garlic.", shortDescription: "Kozhambu vadagam without garlic", sizes: ["100g"], tags: ["Fresh"], images: ["https://daivikorganic.com/cdn/shop/products/3_13fa06be-f9e2-487d-92ff-ddeeb625051b.png?v=1670571046"], isBestseller: false },

  // PDF PRODUCTS - PODI & SPICES
  {
    id: "spice-101",
    name: "Idly Chilli Podi",
    category: "spices",
    description: "Idly chilli podi.",
    shortDescription: "Idly chilli podi",
    sizes: ["100g"],
    tags: ["Spicy"],
    images: ["https://thegrandsweets.com/wp-content/uploads/2022/10/IDLY-CHILLY-POWDER.jpg"],
    isBestseller: false,
    isSpicy: true,
  },
  {
    id: "spice-102",
    name: "Idly Garlic Podi",
    category: "spices",
    description: "Idly garlic podi.",
    shortDescription: "Idly garlic podi",
    sizes: ["100g"],
    tags: ["Spicy"],
    images: ["https://m.media-amazon.com/images/I/41TGV+G-uVL._AC_UF894,1000_QL80_.jpg"],
    isBestseller: false,
    isSpicy: true,
  },
  {
    id: "spice-103",
    name: "Andhra Dhall Podi",
    category: "spices",
    description: "Andhra dhall podi.",
    shortDescription: "Andhra dhall podi",
    sizes: ["100g"],
    tags: ["Fresh"],
    images: ["https://tiimg.tistatic.com/fp/1/003/265/andhra-dhall-podi-819.jpg"],
    isBestseller: false,
  },
  {
    id: "spice-104",
    name: "Dhall Podi",
    category: "spices",
    description: "Dhall podi.",
    shortDescription: "Dhall podi",
    sizes: ["100g"],
    tags: ["Fresh"],
    images: ["https://m.media-amazon.com/images/I/61oIL-9gmKS._AC_UF350,350_QL80_.jpg"],
    isBestseller: false,
  },
  {
    id: "spice-105",
    name: "Curry Leaves Podi",
    category: "spices",
    description: "Curry leaves podi.",
    shortDescription: "Curry leaves podi",
    sizes: ["100g"],
    tags: ["Fresh"],
    images: ["https://www.sharmispassions.com/wp-content/uploads/2022/01/curry-leaves-powder5.jpg"],
    isBestseller: false,
  },
  {
    id: "spice-006",
    name: "Rasam Podi",
    category: "spices",
    description: "Rasam podi.",
    shortDescription: "Rasam podi",
    sizes: ["100g"],
    tags: ["Spicy"],
    images: ["https://sumadhurafoods.com/cdn/shop/files/rasam-podi.png?v=1732191829"],
    isBestseller: false,
    isSpicy: true,
  },
  {
    id: "spice-106",
    name: "Pirandai Podi",
    category: "spices",
    description: "Pirandai podi.",
    shortDescription: "Pirandai podi",
    sizes: ["100g"],
    tags: ["Fresh"],
    images: ["https://cdn.commmerce.com/uploads/annams/productImages/full/17612145455555Pirandai-Podi-Wepsite.jpg"],
    isBestseller: false,
  },
  {
    id: "spice-107",
    name: "Karuppu Ulundu Idly Podi",
    category: "spices",
    description: "Karuppu ulundu idly podi.",
    shortDescription: "Karuppu ulundu idly podi",
    sizes: ["100g"],
    tags: ["Fresh"],
    images: ["https://cdn.commmerce.com/uploads/annams/productImages/full/17613093982242Karuppu-Ellu-Idly-Podi-Web3.jpg"],
    isBestseller: false,
  },
  {
    id: "spice-108",
    name: "Kollu Podi",
    category: "spices",
    description: "Kollu podi.",
    shortDescription: "Kollu podi",
    sizes: ["100g"],
    tags: ["Fresh"],
    images: ["https://www.sharmispassions.com/wp-content/uploads/2025/02/kollu-podi6.jpg"],
    isBestseller: false,
  },
  {
    id: "spice-109",
    name: "Moringa Podi",
    category: "spices",
    description: "Moringa podi.",
    shortDescription: "Moringa podi",
    sizes: ["100g"],
    tags: ["Fresh"],
    images: ["https://www.iyarkai.shop/cdn/shop/files/moringa-powder.jpg?v=1703941169"],
    isBestseller: false,
  },
  {
    id: "spice-002",
    name: "Turmeric Powder",
    category: "spices",
    description: "Turmeric powder.",
    shortDescription: "Turmeric powder",
    sizes: ["100g"],
    tags: ["Fresh"],
    images: ["https://commons.wikimedia.org/wiki/Special:FilePath/Turmeric_Powder.jpg"],
    isBestseller: false,
  },

  // PDF PRODUCTS - MALT / INSTANT MIX
  { id: "health-101", name: "ABC Malt", category: "healthmix", description: "ABC malt.", shortDescription: "ABC malt", sizes: ["100g"], tags: ["Health Mix"], images: ["https://www.nutshouse.in/wp-content/uploads/2024/10/1002329599.jpg"], isBestseller: false },
  { id: "health-102", name: "Chevazhai Malt", category: "healthmix", description: "Chevazhai malt.", shortDescription: "Chevazhai malt", sizes: ["100g"], tags: ["Health Mix"], images: ["https://kuuraii.com/cdn/shop/files/DSC01755_18ff2640-4fa0-4ee6-900f-a11c07ef5ee1.jpg?v=1728457436&width=1946"], isBestseller: false },
  { id: "health-103", name: "Beetroot Malt", category: "healthmix", description: "Beetroot malt.", shortDescription: "Beetroot malt", sizes: ["100g"], tags: ["Health Mix"], images: ["https://orgoshops.com/cdn/shop/files/1000105046.jpg?v=1765985428"], isBestseller: false },
  { id: "health-104", name: "Carrot Malt", category: "healthmix", description: "Carrot malt.", shortDescription: "Carrot malt", sizes: ["100g"], tags: ["Health Mix"], images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF8b0kE9QP_IhZRndsAo79m2wLt6DPMshXqw&s"], isBestseller: false },
  { id: "health-105", name: "Instant Adai Mix", category: "healthmix", description: "Instant adai mix.", shortDescription: "Instant adai mix", sizes: ["100g"], tags: ["Health Mix"], images: ["https://kuuraii.com/cdn/shop/files/DSC03889.jpg?v=1728460615&width=1946"], isBestseller: false },
  { id: "health-106", name: "Instant Millet Pongal Mix", category: "healthmix", description: "Instant millet pongal mix.", shortDescription: "Millet pongal mix", sizes: ["100g"], tags: ["Health Mix"], images: ["https://www.goodness-farm.com/cdn/shop/files/WhatsApp-Image-2025-01-23-at-5.00.13-PM-e1737631878741.jpg?v=1763135026&width=1646"], isBestseller: false },
  { id: "health-107", name: "Instant Rice Upma Mix", category: "healthmix", description: "Instant rice upma mix.", shortDescription: "Rice upma mix", sizes: ["100g"], tags: ["Health Mix"], images: ["https://mylaporeganapathys.com/wp-content/uploads/2025/05/rice-upma.jpg"], isBestseller: false },
  { id: "health-108", name: "Nuts Malt", category: "healthmix", description: "Nuts malt.", shortDescription: "Nuts malt", sizes: ["100g"], tags: ["Health Mix"], images: ["https://cdn.dotpe.in/longtail/store-items/6368303/Y0v9wS3M.webp"], isBestseller: false },
  { id: "health-109", name: "Instant Millet Choco Mix", category: "healthmix", description: "Instant millet choco mix.", shortDescription: "Millet choco mix", sizes: ["100g"], tags: ["Health Mix"], images: ["https://milletamma.com/cdn/shop/files/3_1def92e7-6b7d-423a-ae99-c36e6e2cada8_1200x1200.png?v=1725039914"], isBestseller: false },
  { id: "health-110", name: "Instant Badam Mix", category: "healthmix", description: "Instant badam mix.", shortDescription: "Badam mix", sizes: ["100g"], tags: ["Health Mix"], images: ["https://priyafoods.com/cdn/shop/files/BADAMMILK_2.jpg?v=1701928945&width=1780"], isBestseller: false },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export const getBestsellers = () => products.filter(p => p.isBestseller);

export const getProductsByCategory = (category: Product["category"]) => 
  products.filter(p => p.category === category);

export const getProductById = (id: string) => 
  products.find(p => p.id === id);

export const getRelatedProducts = (product: Product, limit: number = 4) => {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
};

export const categories = [
  { id: "butterghee", name: "Uthukuli Butter & Ghee", description: "Farm fresh dairy", image: "https://mylaporeganapathys.com/wp-content/uploads/2025/05/cooking-butter.jpg" },
  { id: "honey", name: "Forest Honey", description: "Natural sweetness", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6HHRdKjPSE3ZDgnSSnivwRbdw7Tk48txofg&s" },
  { id: "oils", name: "Maracheku Oils", description: "Cold-pressed oils", image: "https://5.imimg.com/data5/SELLER/Default/2021/11/SD/DB/XV/107877514/peanut-oil-500x500.jpg" },
  { id: "rice", name: "Traditional Rice", description: "Native rice varieties", image: "https://www.rootsveyr.com/wp-content/uploads/2022/03/Traditional-Rice-1.jpg" },
  { id: "sweeteners", name: "Brown Sugar & Vellam", description: "Natural sweeteners", image: "https://www.todaysdietitian.com/wp-content/uploads/2023/01/1022_SugarFeature.webp" },
  { id: "pooja", name: "Pooja Items", description: "Daily pooja essentials", image: "https://images.unsplash.com/photo-1605302977545-3a09913be1dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "spices", name: "Spices", description: "Aromatic blends", image: "/images/categories/spices.jpg" },
  { id: "healthmix", name: "Health Mix", description: "Wellness blends", image: "https://ik.imagekit.io/qbnsahjpu/assets/KKT%20Traders/image.png" },
  { id: "pickles", name: "Pickles", description: "Tangy & spicy", image: "/images/categories/pickles.jpg" },
  { id: "thokku", name: "Thokku", description: "Flavorful condiments", image: "/images/categories/thokku.jpg" },
  { id: "vadagam", name: "Vadagam", description: "Crispy accompaniments", image: "/images/categories/vadagam.jpg" },
  { id: "nuts", name: "Nuts & Snacks", description: "Crunchy bites", image: "/images/categories/nuts.jpg" },
] as const;

export const generateWhatsAppLink = (productName: string, size?: string) => {
  const message = size 
    ? `Hi! I want to order: ${productName} - ${size}. Please share availability.`
    : `Hi! I want to order: ${productName}. Please share availability.`;
  
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const generateGeneralWhatsAppLink = () => {
  const message = "Hi! I'm interested in your homemade products. Please share your catalog. Also, I saw the Rs.10 discount per litre for oil and ghee when bringing my own container.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
