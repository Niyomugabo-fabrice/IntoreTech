export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  badge?: "featured" | "bestseller" | "new";
  rating: number;
}

export const CATEGORIES = [
  "All",
  "Smartphones",
  "Laptops",
  "Smartwatches",
  "Earbuds",
  "Headphones",
  "Chargers",
  "Keyboards",
  "Mice",
  "Accessories",
];

export const PRODUCTS: Product[] = [
  // Smartphones
  { id: 1, name: "iPhone 15 Pro Max", category: "Smartphones", price: 1599, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop&auto=format", badge: "featured", rating: 5 },
  { id: 2, name: "Samsung Galaxy S24 Ultra", category: "Smartphones", price: 1399, image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop&auto=format", badge: "bestseller", rating: 5 },
  { id: 3, name: "Google Pixel 8 Pro", category: "Smartphones", price: 999, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop&auto=format", badge: "new", rating: 4 },
  { id: 4, name: "OnePlus 12 Pro", category: "Smartphones", price: 799, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&auto=format", rating: 4 },
  { id: 5, name: "Xiaomi 14 Ultra", category: "Smartphones", price: 899, image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop&auto=format", badge: "new", rating: 4 },
  { id: 6, name: "Samsung Galaxy A54", category: "Smartphones", price: 449, image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=400&fit=crop&auto=format", rating: 4 },
  { id: 7, name: "iPhone 14", category: "Smartphones", price: 799, image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&h=400&fit=crop&auto=format", badge: "bestseller", rating: 4 },
  { id: 8, name: "Huawei P60 Pro", category: "Smartphones", price: 699, image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=400&h=400&fit=crop&auto=format", rating: 4 },

  // Laptops
  { id: 9, name: "MacBook Pro 16\" M3 Max", category: "Laptops", price: 3499, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop&auto=format", badge: "featured", rating: 5 },
  { id: 10, name: "Dell XPS 15 OLED", category: "Laptops", price: 1999, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&auto=format", badge: "bestseller", rating: 5 },
  { id: 11, name: "Lenovo ThinkPad X1 Carbon", category: "Laptops", price: 1749, image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop&auto=format", rating: 4 },
  { id: 12, name: "ASUS ROG Zephyrus G16", category: "Laptops", price: 2299, image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=400&fit=crop&auto=format", badge: "new", rating: 5 },
  { id: 13, name: "HP Spectre x360 14", category: "Laptops", price: 1549, image: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=400&h=400&fit=crop&auto=format", rating: 4 },
  { id: 14, name: "Surface Laptop Studio 2", category: "Laptops", price: 1999, image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=400&fit=crop&auto=format", rating: 4 },
  { id: 15, name: "MacBook Air M2", category: "Laptops", price: 1299, image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop&auto=format", badge: "bestseller", rating: 5 },
  { id: 16, name: "Razer Blade 16", category: "Laptops", price: 2799, image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop&auto=format", badge: "new", rating: 4 },

  // Smartwatches
  { id: 17, name: "Apple Watch Ultra 2", category: "Smartwatches", price: 799, image: "https://images.unsplash.com/photo-1523475496153-3b94cfa3e253?w=400&h=400&fit=crop&auto=format", badge: "featured", rating: 5 },
  { id: 18, name: "Samsung Galaxy Watch 6 Classic", category: "Smartwatches", price: 449, image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=400&fit=crop&auto=format", badge: "bestseller", rating: 4 },
  { id: 19, name: "Garmin Fenix 7X Solar", category: "Smartwatches", price: 899, image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop&auto=format", rating: 5 },
  { id: 20, name: "Fitbit Sense 2", category: "Smartwatches", price: 299, image: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=400&h=400&fit=crop&auto=format", rating: 4 },
  { id: 21, name: "Amazfit GTR 4", category: "Smartwatches", price: 179, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop&auto=format", badge: "new", rating: 4 },
  { id: 22, name: "Google Pixel Watch 2", category: "Smartwatches", price: 349, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop&auto=format", rating: 4 },

  // Earbuds
  { id: 23, name: "AirPods Pro (2nd Gen)", category: "Earbuds", price: 249, image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop&auto=format", badge: "bestseller", rating: 5 },
  { id: 24, name: "Sony WF-1000XM5", category: "Earbuds", price: 279, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&auto=format", badge: "featured", rating: 5 },
  { id: 25, name: "Samsung Galaxy Buds2 Pro", category: "Earbuds", price: 229, image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=400&fit=crop&auto=format", rating: 4 },
  { id: 26, name: "Nothing Ear (2)", category: "Earbuds", price: 149, image: "https://images.unsplash.com/photo-1558089687-f282ffcbc0d4?w=400&h=400&fit=crop&auto=format", badge: "new", rating: 4 },
  { id: 27, name: "Jabra Elite 10", category: "Earbuds", price: 249, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&auto=format", rating: 4 },
  { id: 28, name: "Bose QuietComfort Earbuds II", category: "Earbuds", price: 299, image: "https://images.unsplash.com/photo-1631176093617-c6cfb4b1a10f?w=400&h=400&fit=crop&auto=format", rating: 5 },

  // Headphones
  { id: 29, name: "Sony WH-1000XM5", category: "Headphones", price: 379, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&auto=format", badge: "featured", rating: 5 },
  { id: 30, name: "Bose QuietComfort 45", category: "Headphones", price: 329, image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop&auto=format", badge: "bestseller", rating: 5 },
  { id: 31, name: "Apple AirPods Max", category: "Headphones", price: 549, image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=400&h=400&fit=crop&auto=format", rating: 4 },
  { id: 32, name: "Sennheiser Momentum 4", category: "Headphones", price: 349, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop&auto=format", badge: "new", rating: 4 },
  { id: 33, name: "Audio-Technica ATH-M50xBT2", category: "Headphones", price: 199, image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop&auto=format", rating: 4 },

  // Chargers
  { id: 34, name: "Anker 747 GaNPrime 150W", category: "Chargers", price: 89, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop&auto=format", badge: "bestseller", rating: 5 },
  { id: 35, name: "Apple MagSafe Charger 15W", category: "Chargers", price: 39, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&auto=format", rating: 4 },
  { id: 36, name: "Samsung 65W Super Fast Charger", category: "Chargers", price: 49, image: "https://images.unsplash.com/photo-1601972599748-31eb4e2e4e3f?w=400&h=400&fit=crop&auto=format", badge: "new", rating: 4 },
  { id: 37, name: "Baseus 100W GaN Charger", category: "Chargers", price: 55, image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=400&fit=crop&auto=format", rating: 4 },
  { id: 38, name: "Belkin BoostCharge Pro 3-in-1", category: "Chargers", price: 149, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop&auto=format", rating: 5 },
  { id: 39, name: "Ugreen Nexode 300W Desktop", category: "Chargers", price: 129, image: "https://images.unsplash.com/photo-1625772452859-1c03d884dcd7?w=400&h=400&fit=crop&auto=format", badge: "featured", rating: 4 },

  // Keyboards
  { id: 40, name: "Keychron Q1 Pro", category: "Keyboards", price: 199, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop&auto=format", badge: "featured", rating: 5 },
  { id: 41, name: "Logitech MX Keys S", category: "Keyboards", price: 119, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop&auto=format", badge: "bestseller", rating: 4 },
  { id: 42, name: "Apple Magic Keyboard", category: "Keyboards", price: 99, image: "https://images.unsplash.com/photo-1561753757-d8880c5a3551?w=400&h=400&fit=crop&auto=format", rating: 4 },
  { id: 43, name: "HHKB Professional Hybrid", category: "Keyboards", price: 299, image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop&auto=format", badge: "new", rating: 5 },
  { id: 44, name: "Razer BlackWidow V4 Pro", category: "Keyboards", price: 229, image: "https://images.unsplash.com/photo-1595044426077-d36d9236d44a?w=400&h=400&fit=crop&auto=format", rating: 4 },
  { id: 45, name: "SteelSeries Apex Pro TKL", category: "Keyboards", price: 179, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=400&fit=crop&auto=format", rating: 4 },

  // Mice
  { id: 46, name: "Logitech MX Master 3S", category: "Mice", price: 99, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&auto=format", badge: "bestseller", rating: 5 },
  { id: 47, name: "Razer DeathAdder V3 Pro", category: "Mice", price: 149, image: "https://images.unsplash.com/photo-1563297007-0686b7003af7?w=400&h=400&fit=crop&auto=format", badge: "featured", rating: 5 },
  { id: 48, name: "Apple Magic Mouse", category: "Mice", price: 79, image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=400&h=400&fit=crop&auto=format", rating: 4 },
  { id: 49, name: "SteelSeries Aerox 9 Wireless", category: "Mice", price: 159, image: "https://images.unsplash.com/photo-1615750173730-5e1e2e4f2aee?w=400&h=400&fit=crop&auto=format", badge: "new", rating: 4 },
  { id: 50, name: "Logitech G Pro X Superlight 2", category: "Mice", price: 159, image: "https://images.unsplash.com/photo-1586321679769-4a9a72afc9bf?w=400&h=400&fit=crop&auto=format", rating: 5 },

  // Accessories
  { id: 51, name: "iPad Pro 12.9\" M2 + Apple Pencil", category: "Accessories", price: 1399, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&auto=format", badge: "featured", rating: 5 },
  { id: 52, name: "LG UltraGear 27\" 4K Monitor", category: "Accessories", price: 899, image: "https://images.unsplash.com/photo-1527443224154-c4a573d5f5ef?w=400&h=400&fit=crop&auto=format", badge: "bestseller", rating: 5 },
  { id: 53, name: "Samsung T7 Shield 2TB SSD", category: "Accessories", price: 189, image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400&h=400&fit=crop&auto=format", rating: 4 },
  { id: 54, name: "Elgato Stream Deck MK.2", category: "Accessories", price: 149, image: "https://images.unsplash.com/photo-1535223289429-462edb9ed5f6?w=400&h=400&fit=crop&auto=format", badge: "new", rating: 4 },
  { id: 55, name: "DJI Osmo Pocket 3", category: "Accessories", price: 519, image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop&auto=format", rating: 5 },
  { id: 56, name: "Anker USB-C Hub 10-in-1", category: "Accessories", price: 69, image: "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=400&h=400&fit=crop&auto=format", rating: 4 },
  { id: 57, name: "Logitech C922 Pro Webcam", category: "Accessories", price: 99, image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=400&h=400&fit=crop&auto=format", badge: "bestseller", rating: 4 },
  { id: 58, name: "Blue Yeti X USB Microphone", category: "Accessories", price: 169, image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=400&fit=crop&auto=format", rating: 5 },
  { id: 59, name: "Belkin MagSafe 3-in-1 Stand", category: "Accessories", price: 149, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop&auto=format", badge: "new", rating: 4 },
  { id: 60, name: "WD My Cloud Home 4TB NAS", category: "Accessories", price: 229, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=400&fit=crop&auto=format", rating: 4 },
  { id: 61, name: "Corsair K100 RGB Keyboard", category: "Keyboards", price: 239, image: "https://images.unsplash.com/photo-1595044426077-d36d9236d44a?w=400&h=400&fit=crop&auto=format", rating: 5 },
  { id: 62, name: "Sony Xperia 5 V", category: "Smartphones", price: 999, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&auto=format", badge: "new", rating: 4 },
];
