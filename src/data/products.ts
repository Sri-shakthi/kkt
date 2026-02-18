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
  category: "spices" | "pickles" | "nuts" | "thokku" | "vadagam" | "healthmix";
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
  // SPICES
  {
    id: "spice-001",
    name: "Uthukuli Cow Butter",
    category: "spices",
    description: "Rich and creamy Uthukuli cow butter churned in small batches for authentic taste and aroma. Perfect for chapati, dosai, toast, and everyday cooking.",
    shortDescription: "Traditional Uthukuli cow butter, creamy and fresh",
    sizes: ["100gms", "250gms", "500gms", "1kg"],
    tags: ["Bestseller", "Fresh"],
    images: [BUTTER_IMAGE_URL],
    ingredients: "Pasteurized Cream, Salt",
    storageInfo: "Refrigerate after opening. Best before 3 months from packing.",
    isBestseller: true,
    isSpicy: false,
  },
  {
    id: "spice-002",
    name: "Turmeric Powder",
    category: "spices",
    description: "Pure turmeric powder with high curcumin content. Sourced from local farms and ground fresh for vibrant color and earthy flavor.",
    shortDescription: "Pure turmeric with high curcumin content",
    sizes: ["100g", "250g", "500g"],
    tags: ["Organic"],
    images: ["/images/products/turmeric-powder.jpg"],
    ingredients: "100% Turmeric roots",
    storageInfo: "Store away from sunlight. Best before 12 months.",
    isBestseller: false,
  },
  {
    id: "spice-003",
    name: "Sambar Podi",
    category: "spices",
    description: "Traditional South Indian sambar podi with roasted lentils, chilies, and aromatic spices.",
    shortDescription: "Traditional South Indian sambar podi blend",
    sizes: ["100gms"],
    tags: ["Bestseller"],
    images: ["/images/products/sambar-powder.jpg"],
    ingredients: "Coriander, Red Chilies, Bengal Gram, Urad Dal, Cumin, Fenugreek, Mustard, Curry Leaves, Asafoetida",
    storageInfo: "Store in airtight container. Best before 6 months.",
    isBestseller: true,
  },
  {
    id: "spice-004",
    name: "Agraharam Sambar Podi",
    category: "spices",
    description: "Agraharam style sambar podi with balanced spice and rich aroma for everyday cooking.",
    shortDescription: "Agraharam style sambar podi",
    sizes: ["100gms", "200gms"],
    tags: ["Fresh"],
    images: ["/images/products/sambar-powder.jpg"],
    ingredients: "Coriander, Red Chilies, Bengal Gram, Urad Dal, Cumin, Fenugreek, Mustard, Curry Leaves, Asafoetida",
    storageInfo: "Store in airtight container. Best before 6 months.",
    isBestseller: false,
  },
  {
    id: "spice-005",
    name: "Arachivita Sambar Podi",
    category: "spices",
    description: "Freshly ground arachivita sambar podi with authentic home-style flavor.",
    shortDescription: "Fresh-ground arachivita sambar podi",
    sizes: ["100gms", "200gms"],
    tags: ["Fresh"],
    images: ["/images/products/sambar-powder.jpg"],
    ingredients: "Coriander, Red Chilies, Lentils, Cumin, Fenugreek, Curry Leaves, Asafoetida",
    storageInfo: "Store in airtight container. Best before 6 months.",
    isBestseller: false,
  },
  {
    id: "spice-006",
    name: "Rasam Podi",
    category: "spices",
    description: "Aromatic rasam powder for that perfect tangy, spicy South Indian soup. Made with pepper, cumin, and traditional spices.",
    shortDescription: "Aromatic rasam podi for tangy South Indian soup",
    sizes: ["100gms"],
    tags: ["Spicy"],
    images: ["/images/products/rasam-powder.jpg"],
    ingredients: "Black Pepper, Cumin, Coriander, Red Chilies, Curry Leaves, Turmeric",
    storageInfo: "Store in cool place. Best before 6 months.",
    isBestseller: false,
    isSpicy: true,
  },
  {
    id: "spice-007",
    name: "Kalyana Rasam Podi",
    category: "spices",
    description: "Traditional kalyana style rasam podi with robust pepper and cumin notes.",
    shortDescription: "Traditional kalyana rasam podi",
    sizes: ["100gms", "200gms"],
    tags: ["Spicy"],
    images: ["/images/products/rasam-powder.jpg"],
    ingredients: "Black Pepper, Cumin, Coriander, Red Chilies, Curry Leaves, Turmeric",
    storageInfo: "Store in cool place. Best before 6 months.",
    isBestseller: false,
    isSpicy: true,
  },
  {
    id: "spice-008",
    name: "Mysore Rasam Podi",
    category: "spices",
    description: "Mysore style rasam podi with a flavorful aromatic blend and mild heat.",
    shortDescription: "Mysore style rasam podi blend",
    sizes: ["100gms", "200gms"],
    tags: ["Spicy"],
    images: ["/images/products/rasam-powder.jpg"],
    ingredients: "Black Pepper, Cumin, Coriander, Red Chilies, Curry Leaves, Turmeric",
    storageInfo: "Store in cool place. Best before 6 months.",
    isBestseller: false,
    isSpicy: true,
  },
  {
    id: "spice-009",
    name: "Uthukuli Cow Ghee",
    category: "spices",
    description: "Pure Uthukuli cow ghee made with traditional method for rich aroma and taste. Bring your own clean vessel and get Rs.10 discount per litre.",
    shortDescription: "Pure Uthukuli cow ghee with rich aroma",
    sizes: ["100ml", "300ml", "500ml", "1li"],
    tags: ["Bestseller", "Fresh"],
    images: [BUTTER_IMAGE_URL],
    ingredients: "100% Cow Milk Fat (Ghee)",
    storageInfo: "Store in a cool, dry place. Use a dry spoon. Best before 9 months.",
    isBestseller: true,
  },
  {
    id: "spice-010",
    name: "Uthukuli Buffalo Ghee",
    category: "spices",
    description: "Premium Uthukuli buffalo ghee with deep flavor and creamy texture. Bring your own clean vessel and get Rs.10 discount per litre.",
    shortDescription: "Premium Uthukuli buffalo ghee",
    sizes: ["100ml", "300ml", "500ml", "1li"],
    tags: ["Fresh"],
    images: [BUTTER_IMAGE_URL],
    ingredients: "100% Buffalo Milk Fat (Ghee)",
    storageInfo: "Store in a cool, dry place. Use a dry spoon. Best before 9 months.",
    isBestseller: false,
  },

  // HEALTH MIX
  {
    id: "health-001",
    name: "Bamboo Rice, Mappilai Samba Idiyappam Mix",
    category: "healthmix",
    description: "Traditional idiyappam mix made with bamboo rice and mappilai samba rice.",
    shortDescription: "Bamboo rice and mappilai samba idiyappam mix",
    sizes: ["300g"],
    tags: ["New", "Health Mix"],
    images: ["https://ik.imagekit.io/qbnsahjpu/assets/KKT%20Traders/WhatsApp%20Image%202026-02-12%20at%2012.42.08.jpeg"],
    ingredients: "Bamboo Rice, Mappilai Samba Rice",
    storageInfo: "Store in a cool, dry place. Best before 6 months.",
    isBestseller: false,
    isNew: true,
  },
  {
    id: "health-002",
    name: "Mappilai Samba Puttu Maavu",
    category: "healthmix",
    description: "Nutritious puttu maavu made from mappilai samba rice flour.",
    shortDescription: "Mappilai samba rice flour puttu maavu",
    sizes: ["500g"],
    tags: ["New", "Health Mix"],
    images: ["https://ik.imagekit.io/qbnsahjpu/assets/KKT%20Traders/WhatsApp%20Image%202026-02-12%20at%2012.42.06.jpeg"],
    ingredients: "Mappilai Samba Rice Flour",
    storageInfo: "Store in a cool, dry place. Best before 6 months.",
    isBestseller: false,
    isNew: true,
  },
  {
    id: "health-003",
    name: "Reduce Body Weight Mix",
    category: "healthmix",
    description: "Multi-millet and bamboo rice blend formulated for a light, nutritious daily porridge.",
    shortDescription: "Slim blend with bamboo rice and millets",
    sizes: ["250g"],
    tags: ["New", "Health Mix"],
    images: ["https://ik.imagekit.io/qbnsahjpu/assets/KKT%20Traders/WhatsApp%20Image%202026-02-12%20at%2012.42.12.jpeg"],
    ingredients: "Bamboo Rice, Millets, Flax Seeds",
    storageInfo: "Store in a cool, dry place. Best before 6 months.",
    isBestseller: false,
    isNew: true,
  },
  {
    id: "health-004",
    name: "Bamboo Rice Pure Powder",
    category: "healthmix",
    description: "Pure cleaned bamboo rice powder for daily healthy recipes.",
    shortDescription: "Pure bamboo rice powder",
    sizes: ["250g"],
    tags: ["New", "Health Mix"],
    images: ["https://ik.imagekit.io/qbnsahjpu/assets/KKT%20Traders/WhatsApp%20Image%202026-02-12%20at%2012.42.11%20(2).jpeg"],
    ingredients: "Cleaned Pure Bamboo Rice",
    storageInfo: "Store in a cool, dry place. Best before 6 months.",
    isBestseller: false,
    isNew: true,
  },
  {
    id: "health-005",
    name: "Bamboo Rice Porridge Mix",
    category: "healthmix",
    description: "Wholesome porridge mix with bamboo rice and selected millets.",
    shortDescription: "Bamboo rice porridge mix",
    sizes: ["250g"],
    tags: ["New", "Health Mix"],
    images: ["https://ik.imagekit.io/qbnsahjpu/assets/KKT%20Traders/WhatsApp%20Image%202026-02-12%20at%2012.42.11%20(1).jpeg"],
    ingredients: "Bamboo Rice, Millets",
    storageInfo: "Store in a cool, dry place. Best before 6 months.",
    isBestseller: false,
    isNew: true,
  },
  {
    id: "health-006",
    name: "Karuppu Kavuni Siruthaniyangal Mix",
    category: "healthmix",
    description: "Traditional mix featuring karuppu kavuni rice and siruthaniyangal.",
    shortDescription: "Karuppu kavuni and siruthaniyangal mix",
    sizes: ["500g"],
    tags: ["New", "Health Mix"],
    images: ["https://ik.imagekit.io/qbnsahjpu/assets/KKT%20Traders/WhatsApp%20Image%202026-02-12%20at%2012.42.06%20(1).jpeg"],
    ingredients: "Karuppu Kavuni Rice, Siruthaniyangal",
    storageInfo: "Store in a cool, dry place. Best before 6 months.",
    isBestseller: false,
    isNew: true,
  },
  {
    id: "health-007",
    name: "Bamboo Rice Puttu Maavu",
    category: "healthmix",
    description: "Healthy puttu mix prepared with bamboo rice and millet blend.",
    shortDescription: "Bamboo rice puttu maavu",
    sizes: ["300g"],
    tags: ["New", "Health Mix"],
    images: ["https://ik.imagekit.io/qbnsahjpu/assets/KKT%20Traders/WhatsApp%20Image%202026-02-12%20at%2012.42.05.jpeg"],
    ingredients: "Bamboo Rice, Foxtail Millet, Little Millet",
    storageInfo: "Store in a cool, dry place. Best before 6 months.",
    isBestseller: false,
    isNew: true,
  },
  {
    id: "health-008",
    name: "Uyir-Mei Nenchural Noi Mix",
    category: "healthmix",
    description: "Noi mix with black gram, bamboo rice, and dry ginger for nourishing preparation.",
    shortDescription: "Traditional noi health mix",
    sizes: ["300g"],
    tags: ["New", "Health Mix"],
    images: ["https://ik.imagekit.io/qbnsahjpu/assets/KKT%20Traders/WhatsApp%20Image%202026-02-12%20at%2012.42.10.jpeg"],
    ingredients: "Black Gram, Black Brown Rice, Bamboo Rice, Sukku, Cardamom",
    storageInfo: "Store in a cool, dry place. Best before 6 months.",
    isBestseller: false,
    isNew: true,
  },
  {
    id: "health-009",
    name: "Bamboo Rice Health Mix",
    category: "healthmix",
    description: "Balanced daily health mix made with bamboo rice and millet grains.",
    shortDescription: "Balanced bamboo rice health mix",
    sizes: ["250g"],
    tags: ["New", "Health Mix"],
    images: ["https://ik.imagekit.io/qbnsahjpu/assets/KKT%20Traders/WhatsApp%20Image%202026-02-12%20at%2012.42.05%20(1).jpeg"],
    ingredients: "Bamboo Rice, Millets, Flax Seeds",
    storageInfo: "Store in a cool, dry place. Best before 6 months.",
    isBestseller: false,
    isNew: true,
  },
  {
    id: "health-010",
    name: "Karuppu Kavuni Puttu Maavu",
    category: "healthmix",
    description: "Traditional karuppu kavuni puttu maavu rich in whole grain goodness.",
    shortDescription: "Karuppu kavuni puttu maavu",
    sizes: ["500g"],
    tags: ["New", "Health Mix"],
    images: ["https://ik.imagekit.io/qbnsahjpu/assets/KKT%20Traders/WhatsApp%20Image%202026-02-12%20at%2012.42.03.jpeg"],
    ingredients: "Karuppu Kavuni Rice, Panivaragu, Siruthaniyangal",
    storageInfo: "Store in a cool, dry place. Best before 6 months.",
    isBestseller: false,
    isNew: true,
  },
  {
    id: "health-011",
    name: "Hriddayam Omega-3 Rich",
    category: "healthmix",
    description: "Omega-3 rich mix with bamboo rice and millets for heart-conscious nutrition.",
    shortDescription: "Omega-3 rich bamboo rice mix",
    sizes: ["500g"],
    tags: ["New", "Health Mix"],
    images: ["https://ik.imagekit.io/qbnsahjpu/assets/KKT%20Traders/WhatsApp%20Image%202026-02-12%20at%2012.42.08%20(1).jpeg"],
    ingredients: "Bamboo Rice, Millets, Flax Seeds",
    storageInfo: "Store in a cool, dry place. Best before 6 months.",
    isBestseller: false,
    isNew: true,
  },
  {
    id: "health-012",
    name: "Bone Tone Mix",
    category: "healthmix",
    description: "Nutrient-rich mix designed as a daily support blend for bones and joints.",
    shortDescription: "Daily support mix for bones and joints",
    sizes: ["300g"],
    tags: ["New", "Health Mix"],
    images: ["https://ik.imagekit.io/qbnsahjpu/assets/KKT%20Traders/WhatsApp%20Image%202026-02-12%20at%2012.42.04.jpeg"],
    ingredients: "Bamboo Rice, Millets, Natural Spices",
    storageInfo: "Store in a cool, dry place. Best before 6 months.",
    isBestseller: false,
    isNew: true,
  },
  {
    id: "health-013",
    name: "Dhanya Sakthi Mix (Be Sugar Free)",
    category: "healthmix",
    description: "Dhanya Sakthi mix crafted with millets and bamboo rice for a sugar-conscious routine.",
    shortDescription: "Sugar-conscious dhanya sakthi mix",
    sizes: ["250g"],
    tags: ["New", "Health Mix"],
    images: ["https://ik.imagekit.io/qbnsahjpu/assets/KKT%20Traders/WhatsApp%20Image%202026-02-12%20at%2012.42.11.jpeg"],
    ingredients: "Millets, Bamboo Rice, Banana Flower, Herbs",
    storageInfo: "Store in a cool, dry place. Best before 6 months.",
    isBestseller: false,
    isNew: true,
  },
  {
    id: "health-014",
    name: "Vrithimaan Blood Improve Mix",
    category: "healthmix",
    description: "Traditional cereal and millet blend positioned as blood-improve support mix.",
    shortDescription: "Vrithimaan blood improve mix",
    sizes: ["250g"],
    tags: ["New", "Health Mix"],
    images: ["https://ik.imagekit.io/qbnsahjpu/assets/KKT%20Traders/WhatsApp%20Image%202026-02-12%20at%2012.42.10%20(1).jpeg"],
    ingredients: "Black Rice, Red Rice, Millets, Green Leaf Powders",
    storageInfo: "Store in a cool, dry place. Best before 6 months.",
    isBestseller: false,
    isNew: true,
  },
  {
    id: "health-015",
    name: "Mappilai Samba Kozhukattai Maavu",
    category: "healthmix",
    description: "Traditional kozhukattai maavu based on mappilai samba rice flour.",
    shortDescription: "Mappilai samba kozhukattai maavu",
    sizes: ["500g"],
    tags: ["New", "Health Mix"],
    images: ["https://ik.imagekit.io/qbnsahjpu/assets/KKT%20Traders/WhatsApp%20Image%202026-02-12%20at%2012.42.04%20(1).jpeg"],
    ingredients: "Mappilai Samba Rice Flour",
    storageInfo: "Store in a cool, dry place. Best before 6 months.",
    isBestseller: false,
    isNew: true,
  },

  // PICKLES (5 items)
  {
    id: "pickle-001",
    name: "Mango Pickle (Avakaya)",
    category: "pickles",
    description: "Traditional Andhra-style mango pickle made with raw mangoes, mustard powder, and aromatic spices. A perfect balance of tanginess and heat.",
    shortDescription: "Traditional Andhra-style mango pickle with mustard",
    sizes: ["250gms", "Rs.20 sachet", "Rs.30 sachet"],
    tags: ["Bestseller", "Spicy"],
    images: ["/images/products/mango-pickle.jpg"],
    ingredients: "Raw Mango, Mustard Powder, Red Chili Flakes, Salt, Fenugreek, Garlic, Sesame Oil",
    storageInfo: "Refrigerate after opening. Use dry spoon. Best before 12 months.",
    isBestseller: true,
    isSpicy: true,
  },
  {
    id: "pickle-002",
    name: "Garlic Pickle",
    category: "pickles",
    description: "Flavorful garlic pickle with whole garlic cloves marinated in tangy, spicy masala. A perfect accompaniment to any meal.",
    shortDescription: "Whole garlic cloves in tangy, spicy masala",
    sizes: ["250gms", "Rs.20 sachet", "Rs.30 sachet"],
    tags: ["Spicy"],
    images: ["/images/products/garlic-pickle.jpg"],
    ingredients: "Garlic, Red Chili Flakes, Tamarind, Salt, Jaggery, Mustard, Sesame Oil",
    storageInfo: "Store in cool place. Refrigerate after opening. Best before 10 months.",
    isBestseller: false,
    isSpicy: true,
  },
  {
    id: "pickle-003",
    name: "Lemon Pickle",
    category: "pickles",
    description: "Tangy lemon pickle with the perfect balance of sour, salty, and spicy flavors. Made with fresh lemons and traditional spices.",
    shortDescription: "Tangy lemon pickle with perfect sour-spicy balance",
    sizes: ["250gms", "Rs.20 sachet", "Rs.30 sachet"],
    tags: ["New"],
    images: ["/images/products/lemon-pickle.jpg"],
    ingredients: "Lemon, Salt, Red Chili Flakes, Turmeric, Mustard, Fenugreek",
    storageInfo: "Refrigerate after opening. Best before 12 months.",
    isBestseller: false,
    isNew: true,
    isSpicy: true,
  },
  {
    id: "pickle-004",
    name: "Mixed Vegetable Pickle",
    category: "pickles",
    description: "A medley of fresh vegetables pickled in aromatic spices. Contains carrots, cauliflower, turnip, and green chilies.",
    shortDescription: "Medley of vegetables in aromatic spices",
    sizes: ["250gms", "Rs.20 sachet", "Rs.30 sachet"],
    tags: ["Fresh"],
    images: ["/images/products/mixed-veg-pickle.jpg"],
    ingredients: "Carrot, Cauliflower, Turnip, Green Chilies, Ginger, Mustard, Fenugreek, Salt, Oil",
    storageInfo: "Refrigerate after opening. Best before 8 months.",
    isBestseller: false,
  },
  {
    id: "pickle-005",
    name: "Gongura Pickle",
    category: "pickles",
    description: "Authentic Andhra gongura (sorrel leaves) pickle with its distinctive tangy flavor. A regional favorite.",
    shortDescription: "Authentic Andhra gongura with distinctive tang",
    sizes: ["250gms", "Rs.20 sachet", "Rs.30 sachet"],
    tags: ["Bestseller", "Spicy"],
    images: ["/images/products/gongura-pickle.jpg"],
    ingredients: "Gongura Leaves, Red Chilies, Garlic, Cumin, Mustard, Salt, Oil",
    storageInfo: "Refrigerate after opening. Best before 6 months.",
    isBestseller: true,
    isSpicy: true,
  },
  {
    id: "pickle-006",
    name: "Andhra Pickles",
    category: "pickles",
    description: "Authentic Andhra pickles with bold, spicy flavor. Available in family packs and easy sachet options.",
    shortDescription: "Authentic spicy Andhra pickle range",
    sizes: ["250gms", "500gms", "Rs.20 sachet", "Rs.30 sachet"],
    tags: ["Bestseller", "Spicy"],
    images: ["/images/products/mango-pickle.jpg"],
    ingredients: "Regional ingredients vary by batch",
    storageInfo: "Refrigerate after opening. Use dry spoon. Best before 10 months.",
    isBestseller: true,
    isSpicy: true,
  },

  // THOKKU (4 items)
  {
    id: "thokku-001",
    name: "Mango Thokku",
    category: "thokku",
    description: "Grated mango thokku - a thick, spicy, and tangy condiment perfect with rice, roti, or as a side. Made with raw mangoes and aromatic spices.",
    shortDescription: "Thick, spicy grated mango condiment",
    sizes: ["200g", "400g"],
    tags: ["Bestseller", "Spicy"],
    images: ["/images/products/mango-thokku.jpg"],
    ingredients: "Raw Mango, Red Chili Flakes, Mustard, Fenugreek, Salt, Jaggery, Oil",
    storageInfo: "Refrigerate after opening. Best before 6 months.",
    isBestseller: true,
    isSpicy: true,
  },
  {
    id: "thokku-002",
    name: "Tomato Thokku",
    category: "thokku",
    description: "Sweet and spicy tomato thokku slow-cooked to perfection. A versatile condiment that pairs well with everything.",
    shortDescription: "Sweet and spicy slow-cooked tomato condiment",
    sizes: ["200g", "400g"],
    tags: ["Fresh"],
    images: ["/images/products/tomato-thokku.jpg"],
    ingredients: "Tomatoes, Red Chilies, Garlic, Ginger, Salt, Jaggery, Oil",
    storageInfo: "Refrigerate after opening. Best before 4 months.",
    isBestseller: false,
    isSpicy: true,
  },
  {
    id: "thokku-003",
    name: "Ginger Thokku",
    category: "thokku",
    description: "Aromatic ginger thokku with the warmth of fresh ginger and spices. Great for digestion and flavor.",
    shortDescription: "Aromatic ginger condiment with warming spices",
    sizes: ["150g", "300g"],
    tags: ["New"],
    images: ["/images/products/ginger-thokku.jpg"],
    ingredients: "Ginger, Tamarind, Red Chilies, Jaggery, Salt, Mustard, Oil",
    storageInfo: "Refrigerate after opening. Best before 6 months.",
    isBestseller: false,
    isNew: true,
    isSpicy: true,
  },
  {
    id: "thokku-004",
    name: "Onion Thokku",
    category: "thokku",
    description: "Caramelized onion thokku with a perfect balance of sweet and savory flavors. A unique and delicious condiment.",
    shortDescription: "Caramelized onion with sweet-savory balance",
    sizes: ["200g", "400g"],
    tags: ["Fresh"],
    images: ["/images/products/onion-thokku.jpg"],
    ingredients: "Onions, Tamarind, Red Chilies, Jaggery, Salt, Oil",
    storageInfo: "Refrigerate after opening. Best before 4 months.",
    isBestseller: false,
  },

  // VADAGAM/VATHAL (3 items)
  {
    id: "vadagam-001",
    name: "Rice Appalam",
    category: "vadagam",
    description: "Light and crispy rice appalam that fries quickly and pairs perfectly with everyday meals.",
    shortDescription: "Crispy rice appalam",
    sizes: ["200gms", "300gms"],
    tags: ["Bestseller"],
    images: ["/images/products/rice-vadagam.jpg"],
    ingredients: "Rice Flour, Salt, Cumin",
    storageInfo: "Store in airtight container. Keep dry. Best before 6 months.",
    isBestseller: true,
  },
  {
    id: "vadagam-004",
    name: "Dhall Appalam",
    category: "vadagam",
    description: "Traditional dhall appalam with classic crunch and flavor, ideal with rice meals.",
    shortDescription: "Traditional crunchy dhall appalam",
    sizes: ["100gms", "200gms", "250gms", "500gms"],
    tags: ["Fresh"],
    images: ["/images/products/sago-vadam.jpg"],
    ingredients: "Urad Dal Flour, Salt, Pepper, Cumin",
    storageInfo: "Store in airtight container. Keep dry. Best before 6 months.",
    isBestseller: false,
  },
  {
    id: "vadagam-002",
    name: "Sago Vadam (Javvarisi)",
    category: "vadagam",
    description: "Crispy sago vadam made from pure sago pearls. A traditional South Indian accompaniment that's light and crunchy.",
    shortDescription: "Crispy sago vadam from pure sago pearls",
    sizes: ["100g", "250g"],
    tags: ["Fresh"],
    images: ["/images/products/sago-vadam.jpg"],
    ingredients: "Sago, Salt, Cumin",
    storageInfo: "Store in airtight container. Keep dry. Best before 8 months.",
    isBestseller: false,
  },
  {
    id: "vadagam-003",
    name: "Chili Vathal (Mor Milagai)",
    category: "vadagam",
    description: "Sun-dried chilies soaked in buttermilk and salt - the perfect accompaniment for curd rice. Mildly spicy and tangy.",
    shortDescription: "Buttermilk-soaked sun-dried chilies",
    sizes: ["50g", "100g"],
    tags: ["Spicy"],
    images: ["/images/products/chili-vathal.jpg"],
    ingredients: "Green Chilies, Buttermilk, Salt",
    storageInfo: "Store in airtight container. Keep dry. Best before 6 months.",
    isBestseller: false,
    isSpicy: true,
  },

  // NUTS & SNACKS (3 items)
  {
    id: "nuts-001",
    name: "Spicy Masala Peanuts",
    category: "nuts",
    description: "Crunchy peanuts coated in spicy rice flour batter and fried to perfection. A perfect tea-time snack.",
    shortDescription: "Crunchy spicy-coated fried peanuts",
    sizes: ["200g", "400g"],
    tags: ["Bestseller", "Spicy"],
    images: ["/images/products/masala-peanuts.jpg"],
    ingredients: "Peanuts, Rice Flour, Gram Flour, Red Chili Flakes, Salt, Asafoetida",
    storageInfo: "Store in airtight container. Best before 2 months.",
    isBestseller: true,
    isSpicy: true,
  },
  {
    id: "nuts-002",
    name: "Roasted Cashews",
    category: "nuts",
    description: "Premium cashews lightly roasted with a hint of salt. Crunchy, buttery, and irresistible.",
    shortDescription: "Premium lightly roasted salted cashews",
    sizes: ["100g", "250g", "500g"],
    tags: ["Fresh"],
    images: ["https://ik.imagekit.io/qbnsahjpu/assets/KKT%20Traders/WhatsApp%20Image%202026-02-12%20at%2012.41.57.jpeg"],
    ingredients: "Cashews, Salt, Ghee",
    storageInfo: "Store in cool place. Best before 3 months.",
    isBestseller: false,
  },
  {
    id: "nuts-003",
    name: "Masala Cashews",
    category: "nuts",
    description: "Cashews roasted with a blend of aromatic spices. A premium snack with a kick of flavor.",
    shortDescription: "Cashews roasted with aromatic spices",
    sizes: ["100g", "250g"],
    tags: ["New", "Spicy"],
    images: ["https://ik.imagekit.io/qbnsahjpu/assets/KKT%20Traders/WhatsApp%20Image%202026-02-12%20at%2012.41.57.jpeg"],
    ingredients: "Cashews, Red Chili Flakes, Black Pepper, Cumin, Salt, Ghee",
    storageInfo: "Store in airtight container. Best before 2 months.",
    isBestseller: false,
    isNew: true,
    isSpicy: true,
  },
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
  { id: "spices", name: "Spices", description: "Aromatic blends", image: "/images/categories/spices.jpg" },
  { id: "healthmix", name: "Health Mix", description: "Wellness blends", image: "/images/categories/spices.jpg" },
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
