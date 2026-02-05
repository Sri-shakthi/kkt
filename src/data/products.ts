// ============================================
// CONFIGURATION - CHANGE THESE VALUES
// ============================================

// Your WhatsApp Business number (with country code, no + or spaces)
// Example: "919876543210" for India +91 98765 43210
export const WHATSAPP_NUMBER = "917708755348";

// Your Instagram handle (without @)
export const INSTAGRAM_HANDLE = "kkt_kktraders";

// Primary brand color (green accent) - Change this to match your logo
export const BRAND_COLOR = "#2E5A3D";

// ============================================
// PRODUCT TYPES
// ============================================

export interface Product {
  id: string;
  name: string;
  category: "spices" | "pickles" | "nuts" | "thokku" | "vadagam";
  description: string;
  shortDescription: string;
  sizes: string[];
  priceRange: string;
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
  // SPICES (5 items)
  {
    id: "spice-001",
    name: "Guntur Chili Powder",
    category: "spices",
    description: "Authentic Guntur chili powder made from sun-dried red chilies. Roasted and ground in small batches for maximum flavor and heat. Perfect for all your Indian cooking needs.",
    shortDescription: "Authentic Guntur chili powder, roasted and ground fresh",
    sizes: ["200g", "500g", "1kg"],
    priceRange: "₹80 - ₹350",
    tags: ["Bestseller", "Spicy"],
    images: ["/images/products/chili-powder.jpg"],
    ingredients: "100% Guntur red chilies",
    storageInfo: "Store in airtight container. Best before 6 months from packing.",
    isBestseller: true,
    isSpicy: true,
  },
  {
    id: "spice-002",
    name: "Coriander Powder",
    category: "spices",
    description: "Freshly ground coriander powder with a sweet, citrusy aroma. Made from whole coriander seeds roasted to perfection.",
    shortDescription: "Freshly ground coriander with sweet, citrusy aroma",
    sizes: ["200g", "500g"],
    priceRange: "₹60 - ₹140",
    tags: ["Fresh"],
    images: ["/images/products/coriander-powder.jpg"],
    ingredients: "100% Coriander seeds",
    storageInfo: "Store in cool, dry place. Best before 8 months.",
    isBestseller: false,
  },
  {
    id: "spice-003",
    name: "Turmeric Powder",
    category: "spices",
    description: "Pure turmeric powder with high curcumin content. Sourced from local farms and ground fresh for vibrant color and earthy flavor.",
    shortDescription: "Pure turmeric with high curcumin content",
    sizes: ["100g", "250g", "500g"],
    priceRange: "₹50 - ₹180",
    tags: ["Organic"],
    images: ["/images/products/turmeric-powder.jpg"],
    ingredients: "100% Turmeric roots",
    storageInfo: "Store away from sunlight. Best before 12 months.",
    isBestseller: false,
  },
  {
    id: "spice-004",
    name: "Sambar Powder",
    category: "spices",
    description: "Traditional South Indian sambar powder with the perfect blend of roasted lentils, chilies, and aromatic spices. Makes authentic tasting sambar every time.",
    shortDescription: "Traditional South Indian sambar masala blend",
    sizes: ["200g", "500g"],
    priceRange: "₹90 - ₹200",
    tags: ["Bestseller"],
    images: ["/images/products/sambar-powder.jpg"],
    ingredients: "Coriander, Red Chilies, Bengal Gram, Urad Dal, Cumin, Fenugreek, Mustard, Curry Leaves, Asafoetida",
    storageInfo: "Store in airtight container. Best before 6 months.",
    isBestseller: true,
  },
  {
    id: "spice-005",
    name: "Rasam Powder",
    category: "spices",
    description: "Aromatic rasam powder for that perfect tangy, spicy South Indian soup. Made with pepper, cumin, and traditional spices.",
    shortDescription: "Aromatic rasam powder for tangy South Indian soup",
    sizes: ["100g", "200g"],
    priceRange: "₹70 - ₹130",
    tags: ["Spicy"],
    images: ["/images/products/rasam-powder.jpg"],
    ingredients: "Black Pepper, Cumin, Coriander, Red Chilies, Curry Leaves, Turmeric",
    storageInfo: "Store in cool place. Best before 6 months.",
    isBestseller: false,
    isSpicy: true,
  },

  // PICKLES (5 items)
  {
    id: "pickle-001",
    name: "Mango Pickle (Avakaya)",
    category: "pickles",
    description: "Traditional Andhra-style mango pickle made with raw mangoes, mustard powder, and aromatic spices. A perfect balance of tanginess and heat.",
    shortDescription: "Traditional Andhra-style mango pickle with mustard",
    sizes: ["250g", "500g", "1kg"],
    priceRange: "₹120 - ₹400",
    tags: ["Bestseller", "Spicy"],
    images: ["/images/products/mango-pickle.jpg"],
    ingredients: "Raw Mango, Mustard Powder, Red Chili Powder, Salt, Fenugreek, Garlic, Sesame Oil",
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
    sizes: ["200g", "400g"],
    priceRange: "₹100 - ₹180",
    tags: ["Spicy"],
    images: ["/images/products/garlic-pickle.jpg"],
    ingredients: "Garlic, Red Chili Powder, Tamarind, Salt, Jaggery, Mustard, Sesame Oil",
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
    sizes: ["250g", "500g"],
    priceRange: "₹90 - ₹160",
    tags: ["New"],
    images: ["/images/products/lemon-pickle.jpg"],
    ingredients: "Lemon, Salt, Red Chili Powder, Turmeric, Mustard, Fenugreek",
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
    sizes: ["300g", "600g"],
    priceRange: "₹110 - ₹200",
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
    sizes: ["250g", "500g"],
    priceRange: "₹100 - ₹180",
    tags: ["Bestseller", "Spicy"],
    images: ["/images/products/gongura-pickle.jpg"],
    ingredients: "Gongura Leaves, Red Chilies, Garlic, Cumin, Mustard, Salt, Oil",
    storageInfo: "Refrigerate after opening. Best before 6 months.",
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
    priceRange: "₹100 - ₹180",
    tags: ["Bestseller", "Spicy"],
    images: ["/images/products/mango-thokku.jpg"],
    ingredients: "Raw Mango, Red Chili Powder, Mustard, Fenugreek, Salt, Jaggery, Oil",
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
    priceRange: "₹90 - ₹160",
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
    priceRange: "₹80 - ₹150",
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
    priceRange: "₹100 - ₹180",
    tags: ["Fresh"],
    images: ["/images/products/onion-thokku.jpg"],
    ingredients: "Onions, Tamarind, Red Chilies, Jaggery, Salt, Oil",
    storageInfo: "Refrigerate after opening. Best before 4 months.",
    isBestseller: false,
  },

  // VADAGAM/VATHAL (3 items)
  {
    id: "vadagam-001",
    name: "Rice Vadagam (Vadam)",
    category: "vadagam",
    description: "Traditional sun-dried rice vadagam that puffs up beautifully when fried. Crispy, light, and perfect with meals.",
    shortDescription: "Traditional sun-dried rice vadagam",
    sizes: ["100g", "250g", "500g"],
    priceRange: "₹60 - ₹250",
    tags: ["Bestseller"],
    images: ["/images/products/rice-vadagam.jpg"],
    ingredients: "Rice Flour, Salt, Cumin, Sesame",
    storageInfo: "Store in airtight container. Keep dry. Best before 6 months.",
    isBestseller: true,
  },
  {
    id: "vadagam-002",
    name: "Sago Vadam (Javvarisi)",
    category: "vadagam",
    description: "Crispy sago vadam made from pure sago pearls. A traditional South Indian accompaniment that's light and crunchy.",
    shortDescription: "Crispy sago vadam from pure sago pearls",
    sizes: ["100g", "250g"],
    priceRange: "₹70 - ₹160",
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
    priceRange: "₹50 - ₹90",
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
    priceRange: "₹80 - ₹150",
    tags: ["Bestseller", "Spicy"],
    images: ["/images/products/masala-peanuts.jpg"],
    ingredients: "Peanuts, Rice Flour, Gram Flour, Red Chili Powder, Salt, Asafoetida",
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
    priceRange: "₹150 - ₹650",
    tags: ["Fresh"],
    images: ["/images/products/roasted-cashews.jpg"],
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
    priceRange: "₹180 - ₹420",
    tags: ["New", "Spicy"],
    images: ["/images/products/masala-cashews.jpg"],
    ingredients: "Cashews, Red Chili Powder, Black Pepper, Cumin, Salt, Ghee",
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
  { id: "pickles", name: "Pickles", description: "Tangy & spicy", image: "/images/categories/pickles.jpg" },
  { id: "thokku", name: "Thokku", description: "Flavorful condiments", image: "/images/categories/thokku.jpg" },
  { id: "vadagam", name: "Vadagam", description: "Crispy accompaniments", image: "/images/categories/vadagam.jpg" },
  { id: "nuts", name: "Nuts & Snacks", description: "Crunchy bites", image: "/images/categories/nuts.jpg" },
] as const;

export const generateWhatsAppLink = (productName: string, size?: string) => {
  const message = size 
    ? `Hi! I want to order: ${productName} - ${size}. Please share price and availability.`
    : `Hi! I want to order: ${productName}. Please share price and availability.`;
  
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const generateGeneralWhatsAppLink = () => {
  const message = "Hi! I'm interested in your homemade products. Please share your catalog.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
