import { formatCurrency } from "../scripts/utils/money.js";

export function getProducts(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id == productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}


class Product {
  id;
  image;
  name;
  rating;
  priceCents;
  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }
  getStarUrl() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`
  }
  getPrice() {
    return ` $${formatCurrency(this.priceCents)}`;
  }
  getFeatureInfo() {
    return '';
  }
  getWarranty() {
    return ``;
  }
}

class Clothing extends Product {
  sizeChartLink;
  constructor(productDetails) {
    super(productDetails)
    this.sizeChartLink = productDetails.sizeChartLink;
  }
  getFeatureInfo() {
    return `<a href="${this.sizeChartLink}">Size Chart</a>
            <select class= "size-fashion">
                <option selected value="1">S</option>
                <option value="2">M</option>
                <option value="3">L</option>
                <option value="4">XL</option>
                <option value="5">XXL</option>
            </select>`
  }
  getWarranty() {
    return '';
  }
}

class Appliance extends Product {
  applianceInstruction;
  applianceWarranty;
  constructor(productDetails) {
    super(productDetails)
    this.applianceInstruction = "images/appliance-instructions.png";
    this.applianceWarranty = "images/appliance-warranty.png";
  }

  getFeatureInfo() {
    return `<a href=${this.applianceInstruction}>Instructions</a>`
  }
  getWarranty() {
    return `<a href=${this.applianceWarranty}>Warranty</a>`
  }
}

class Shoes extends Product {
  sizeChartLink;
  constructor(productDetails) {
    super(productDetails)
    this.sizeChartLink = '';
  }
  getFeatureInfo() {
    return `<p>Size: </p>
            <select class= "size-fashion">
                <option selected value="1">5</option>
                <option value="2">6</option>
                <option value="3">7</option>
                <option value="4">8</option>
                <option value="5">9</option>
                <option value="6">10</option>
                <option value="7">11</option>
                <option value="8">12</option>
                <option value="9">13</option>
                <option value="10">14</option>
            </select>`
  }
  getWarranty() {
    return '';
  }
}


export const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1090,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars: 4,
      count: 127
    },
    priceCents: 2095,
    keywords: [
      "sports",
      "basketballs"
    ]
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 799,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "7a3f9c21-8d54-4e17-b6a2-91c7f04e538b",
    image: "images/products/realme.png",
    name: "Realme 10 Pro 5G (Nebula Blue, 128 GB)",
    rating: {
      stars: 4.5,
      count: 184
    },
    priceCents: 21005,
    keywords: [
      "smartphone",
      "mobile",
      "realme",
      "5g",
      "electronics"
    ]
  },
  {
    id: "c82e4f19-35a7-46d2-9b81-e6037ac542f9",
    image: "images/products/onepiece.png",
    name: "The Souled Store One Piece T-Shirts",
    rating: {
      stars: 5,
      count: 326
    },
    priceCents: 1995,
    keywords: [
      "tshirts",
      "one piece",
      "anime",
      "apparel",
      "fashion"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "f51b7e63-2c94-4a08-a7d5-39e8126bc450",
    image: "images/products/laptop.png",
    name: "MICROSOFT Surface Laptop SQ X2 Elite",
    rating: {
      stars: 4.5,
      count: 241
    },
    priceCents: 36750,
    keywords: [
      "laptop",
      "microsoft",
      "computer",
      "electronics",
      "surface"
    ]
  },
  {
    id: "2d96a541-7b83-4ec0-9f25-c6148a73de09",
    image: "images/products/tv1.png",
    name: "Infinix 109 Cm 43 Inch QLED Ultra HD 4K",
    rating: {
      stars: 4.5,
      count: 178
    },
    priceCents: 20480,
    keywords: [
      "television",
      "tv",
      "qled",
      "4k",
      "electronics"
    ]
  },
  {
    id: "b47c2e96-15d8-4a73-86f1-c0295e814ab6",
    image: "images/products/shoe.png",
    name: "Nike Mens Precision Mid Basketball Shoes",
    rating: {
      stars: 4.5,
      count: 425
    },
    priceCents: 6301,
    keywords: [
      "shoes",
      "basketball",
      "nike",
      "sports",
      "footwear"
    ]
  },
  {
    id: "e63a91f7-4c25-48d0-b852-17e6c309af42",
    image: "images/products/rog.png",
    name: "ASUS ROG Strix G16, AMD Ryzen 9, Gaming Laptop",
    rating: {
      stars: 4.5,
      count: 193
    },
    priceCents: 147042,
    keywords: [
      "laptop",
      "gaming",
      "asus",
      "rog",
      "electronics"
    ]
  },
  {
    id: "91d6b3e8-52f4-47a0-c819-63e7254bf1da",
    image: "images/products/home T.png",
    name: "Sony Bravia Theatre Quad (HT-A9M2) Premium",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 199558,
    keywords: [
      "home theater",
      "sony",
      "speakers",
      "audio",
      "electronics"
    ]
  },
  {
    id: "4e72c9a5-83f1-46bd-a027-59c314e68f20",
    image: "images/products/watch.png",
    name: "Noise Fit Halo Plus Smart Watch",
    rating: {
      stars: 5,
      count: 512
    },
    priceCents: 3881,
    keywords: [
      "smartwatch",
      "watch",
      "noise",
      "wearable",
      "electronics"
    ]
  },
  {
    id: "a35f8d27-6c41-49e0-b572-14a936ce80fb",
    image: "images/products/hphone.png",
    name: "Sony WH-CH720N, Wireless Headphones with Mic",
    rating: {
      stars: 4.5,
      count: 734
    },
    priceCents: 6459,
    keywords: [
      "headphones",
      "sony",
      "wireless",
      "noise cancelling",
      "audio"
    ]
  },
  {
    id: "d84b1e63-97f5-42ca-a806-31e59c724bf8",
    image: "images/products/iqoo.webp",
    name: "IQOO 15 5G (Legend, 256 GB) (12 GB RAM)",
    rating: {
      stars: 4.5,
      count: 386
    },
    priceCents: 58228,
    keywords: [
      "smartphone",
      "iqoo",
      "5g",
      "mobile",
      "electronics"
    ]
  },
  {
    id: "58c7e214-3f96-4ab0-b825-71d63e9fa402",
    image: "images/products/boat-rockerz.png",
    name: "boAt Rockerz 450 Pro Wireless Headphones",
    rating: {
      stars: 4.5,
      count: 642
    },
    priceCents: 2100,
    keywords: [
      "headphones",
      "boat",
      "wireless",
      "bluetooth",
      "audio"
    ]
  },
  {
    id: "f29a63d7-84b1-45ce-9702-36e518ac7420",
    image: "images/products/realme-narzo-power.png",
    name: "realme Narzo Power 5G (Nebula Blue, 128 GB)",
    rating: {
      stars: 4.5,
      count: 294
    },
    priceCents: 31508,
    keywords: [
      "smartphone",
      "realme",
      "narzo",
      "5g",
      "mobile"
    ]
  },
  {
    id: "b72d4f81-96c3-45a7-e208-13f65c924abd",
    image: "images/products/puma-sneakers.png",
    name: "Puma Men's Smashic Sneakers",
    rating: {
      stars: 4.5,
      count: 351
    },
    priceCents: 2677,
    keywords: [
      "shoes",
      "sneakers",
      "puma",
      "mens",
      "footwear"
    ]
  },
  {
    id: "3f81c5e7-62a9-47d4-b036-95e218ac741f",
    image: "images/products/bellavita.png",
    name: "Bellavita Luxury Perfume for Men (100ml)",
    rating: {
      stars: 4,
      count: 267
    },
    priceCents: 892,
    keywords: [
      "perfume",
      "fragrance",
      "bellavita",
      "mens",
      "beauty"
    ]
  },
  {
    id: "a67e2d94-38f5-41cb-8096-52b713ce4fa8",
    image: "images/products/safari-bag.png",
    name: "Safari Pentagon Laptop Backpack",
    rating: {
      stars: 4.5,
      count: 438
    },
    priceCents: 1574,
    keywords: [
      "backpack",
      "laptop bag",
      "safari",
      "bags",
      "travel"
    ]
  },
  {
    id: "d53b9f26-74c1-48e0-a862-19f635ca7084",
    image: "images/products/boat-airpods.png",
    name: "boAt Airdopes 141 True Wireless Earbuds",
    rating: {
      stars: 4.5,
      count: 923
    },
    priceCents: 1364,
    keywords: [
      "earbuds",
      "boat",
      "wireless",
      "bluetooth",
      "audio"
    ]
  },
  {
    id: "8c24e7a1-53f9-46bd-b680-27d914ce35f2",
    image: "images/products/adidas-shoes.png",
    name: "Adidas Men's Running Shoes",
    rating: {
      stars: 4.5,
      count: 587
    },
    priceCents: 3780,
    keywords: [
      "shoes",
      "running shoes",
      "adidas",
      "sports",
      "footwear"
    ]
  },
  {
    id: "f61a3d85-29c7-4e90-b742-53e816cb047d",
    image: "images/products/phillips-mixer.png",
    name: "Philips HL7756/00 Mixer Grinder (750W)",
    rating: {
      stars: 4.5,
      count: 314
    },
    priceCents: 4725,
    keywords: [
      "mixer grinder",
      "philips",
      "kitchen",
      "appliances",
      "mixer"
    ]
  },
  {
    id: "2a75e9c4-61f3-48bd-9037-c52614e8f0a9",
    image: "images/products/atomic-habits.png",
    name: "Atomic Habits by James Clear",
    rating: {
      stars: 4.5,
      count: 1842
    },
    priceCents: 349,
    keywords: [
      "book",
      "atomic habits",
      "james clear",
      "self help",
      "personal development"
    ]
  },
  {
    id: "c96e1a57-42d8-4fb0-b735-68c2149ae301",
    image: "images/products/samsung-buds.png",
    name: "Samsung Galaxy Buds Wireless Earbuds",
    rating: {
      stars: 4.5,
      count: 821
    },
    priceCents: 5776,
    keywords: [
      "earbuds",
      "samsung",
      "galaxy buds",
      "wireless",
      "audio"
    ]
  },
  {
    id: "7d31f8a5-69c2-45be-a704-18e936cf52d0",
    image: "images/products/iphone-15.png",
    name: "Apple iPhone 15 128GB",
    rating: {
      stars: 5,
      count: 1256
    },
    priceCents: 65118,
    keywords: [
      "iphone",
      "apple",
      "smartphone",
      "mobile",
      "electronics"
    ]
  },
  {
    id: "e48b2c73-15f6-49d0-a821-63ce9574ab06",
    image: "images/products/sony-headphone.png",
    name: "Sony Bluetooth Noise Cancelling Headphones",
    rating: {
      stars: 4.5,
      count: 967
    },
    priceCents: 9452,
    keywords: [
      "headphones",
      "sony",
      "bluetooth",
      "noise cancelling",
      "audio"
    ]
  },
  {
    id: "51a9d6f4-83c7-42eb-b015-29e648ca730d",
    image: "images/products/samsung-tv.png",
    name: "Samsung 55 inch Smart LED TV",
    rating: {
      stars: 4.5,
      count: 634
    },
    priceCents: 45162,
    keywords: [
      "tv",
      "television",
      "samsung",
      "smart tv",
      "electronics"
    ]
  },
  {
    id: "b83e4c19-57a2-46fd-9015-d6247ac538e0",
    image: "images/products/nike-shoes.png",
    name: "Nike Men's Sports Shoes",
    rating: {
      stars: 4.5,
      count: 729
    },
    priceCents: 4200,
    keywords: [
      "shoes",
      "nike",
      "sports",
      "mens",
      "footwear"
    ]
  },
  {
    id: "d27f6a91-45c8-4eb0-a613-82e954cb370f",
    image: "images/products/american-bag.png",
    name: "American Tourister Travel Backpack",
    rating: {
      stars: 4.5,
      count: 514
    },
    priceCents: 1890,
    keywords: [
      "backpack",
      "travel",
      "american tourister",
      "bags",
      "luggage"
    ]
  },
  {
    id: "94c1e8f5-72a6-4bd0-b539-16e327ca480d",
    image: "images/products/logitech-keyboard.png",
    name: "Logitech Wireless Keyboard",
    rating: {
      stars: 4.5,
      count: 681
    },
    priceCents: 1574,
    keywords: [
      "keyboard",
      "logitech",
      "wireless",
      "computer accessories",
      "electronics"
    ]
  },
  {
    id: "f38a5c72-19e4-46bd-8073-25d961ce4ab0",
    image: "images/products/zebronics-mouse.png",
    name: "ZEBRONICS Wireless Mouse",
    rating: {
      stars: 4,
      count: 472
    },
    priceCents: 839,
    keywords: [
      "mouse",
      "zebronics",
      "wireless",
      "computer accessories",
      "electronics"
    ]
  },
  {
    id: "6b24e9d3-58f1-40ac-a762-91ce5374b805",
    image: "images/products/oneplus-phones.png",
    name: "OnePlus Nord CE Smartphone",
    rating: {
      stars: 4.5,
      count: 853
    },
    priceCents: 23106,
    keywords: [
      "smartphone",
      "oneplus",
      "nord",
      "mobile",
      "5g"
    ]
  },
  {
    id: "a51d7f83-26c4-49e0-b935-74ce2186ab02",
    image: "images/products/casio-watch.png",
    name: "Casio Men's Analog Watch",
    rating: {
      stars: 4.5,
      count: 319
    },
    priceCents: 3150,
    keywords: [
      "watch",
      "casio",
      "mens",
      "analog",
      "accessories"
    ]
  },
  {
    id: "e72c4a19-85f6-43bd-9017-36ce52ab740d",
    image: "images/products/men-jacket.png",
    name: "Wildcraft Men's Jacket",
    rating: {
      stars: 4.5,
      count: 276
    },
    priceCents: 2835,
    keywords: [
      "jacket",
      "wildcraft",
      "mens",
      "clothing",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "39b6e1f5-72a4-48cd-b083-61e927ca540d",
    image: "images/products/prestige-cooker.png",
    name: "Prestige Electric Rice Cooker",
    rating: {
      stars: 4.5,
      count: 547
    },
    priceCents: 2310,
    keywords: [
      "rice cooker",
      "prestige",
      "kitchen",
      "cooker",
      "appliances"
    ]
  },
  {
    id: "c74e2a91-56f8-43bd-a016-82d935ce470b",
    image: "images/products/airpods-pro.webp",
    name: "Apple AirPods Pro",
    rating: {
      stars: 5,
      count: 1532
    },
    priceCents: 19955,
    keywords: [
      "airpods",
      "apple",
      "earbuds",
      "wireless",
      "audio"
    ]
  },
  {
    id: "8f31d6a4-25c7-49eb-b802-63ce9174a50d",
    image: "images/products/dell-inspiron.jpg",
    name: "Dell Inspiron Laptop",
    rating: {
      stars: 4.5,
      count: 421
    },
    priceCents: 58816,
    keywords: [
      "laptop",
      "dell",
      "inspiron",
      "computer",
      "electronics"
    ]
  },
  {
    id: "d62a4f97-81c5-43be-9057-26e318ca740b",
    image: "images/products/mi-aircooler.png",
    name: "Mi Smart Air Purifier",
    rating: {
      stars: 4.5,
      count: 389
    },
    priceCents: 9452,
    keywords: [
      "air purifier",
      "mi",
      "home",
      "air cleaner",
      "appliances"
    ]
  },
  {
    id: "47e9c2a5-63f1-48bd-a807-15ce936ab420",
    image: "images/products/puma-hoodie.jpg",
    name: "Puma Men's Hoodie",
    rating: {
      stars: 4.5,
      count: 612
    },
    priceCents: 1995,
    keywords: [
      "hoodie",
      "puma",
      "mens",
      "sweatshirt",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "a83d5f21-74c6-49e0-b927-36ce1584fb02",
    image: "images/products/levis-jeans.jpg",
    name: "Levi's Men's Regular Jeans",
    rating: {
      stars: 4.5,
      count: 734
    },
    priceCents: 2625,
    keywords: [
      "jeans",
      "levis",
      "mens",
      "pants",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "e15b7c93-42f6-48ad-b029-61ce8357a40d",
    image: "images/products/philips-trimmer.png",
    name: "Philips Beard Trimmer",
    rating: {
      stars: 4.5,
      count: 892
    },
    priceCents: 1259,
    keywords: [
      "trimmer",
      "philips",
      "beard",
      "grooming",
      "beauty"
    ]
  },
  {
    id: "52c9e4a7-81d3-46bf-9035-27ce615ab840",
    image: "images/products/havells-heater.jpg",
    name: "Havells Room Heater",
    rating: {
      stars: 4,
      count: 237
    },
    priceCents: 2940,
    keywords: [
      "room heater",
      "havells",
      "heater",
      "home",
      "appliances"
    ]
  },
  {
    id: "b61f8d35-29c4-47ea-a702-93ce5164f820",
    image: "images/products/bajaj-mixer.jpg",
    name: "Bajaj Mixer Grinder",
    rating: {
      stars: 4.5,
      count: 428
    },
    priceCents: 3675,
    keywords: [
      "mixer grinder",
      "bajaj",
      "kitchen",
      "appliances",
      "mixer"
    ]
  },
  {
    id: "f27a5c81-63e9-40bd-b014-58ce936a742d",
    image: "images/products/nike-tshirt.jpg",
    name: "Nike Sports T-Shirt",
    rating: {
      stars: 4.5,
      count: 356
    },
    priceCents: 1364,
    keywords: [
      "tshirt",
      "nike",
      "sports",
      "apparel",
      "clothing"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "84c3e7a1-52f6-49bd-a016-37ce925ab480",
    image: "images/products/samsung-charger.webp",
    name: "Samsung Fast Charger",
    rating: {
      stars: 4.5,
      count: 647
    },
    priceCents: 1049,
    keywords: [
      "charger",
      "samsung",
      "fast charger",
      "mobile accessories",
      "electronics"
    ]
  },
  {
    id: "d59a2f73-41c8-46be-b027-63ce8154a902",
    image: "images/products/fastrack-watch.png",
    name: "Fastrack Men's Watch",
    rating: {
      stars: 4.5,
      count: 418
    },
    priceCents: 1890,
    keywords: [
      "watch",
      "fastrack",
      "mens",
      "analog",
      "accessories"
    ]
  },
  {
    id: "31e7c5a9-82f4-49bd-a063-57ce2148b690",
    image: "images/products/psychology-money.jpg",
    name: "The Psychology of Money",
    rating: {
      stars: 5,
      count: 2196
    },
    priceCents: 367,
    keywords: [
      "book",
      "psychology of money",
      "finance",
      "money",
      "self help"
    ]
  },
  {
    id: "a62f9e41-35c7-48bd-b018-74ce5263d905",
    image: "images/products/headphone.png",
    name: "boAt Rockerz 450 Pro Wireless Headphones",
    rating: {
      stars: 5,
      count: 756
    },
    priceCents: 2205,
    keywords: [
      "headphones",
      "boat",
      "wireless",
      "bluetooth",
      "audio"
    ]
  },
  {
    id: "e38b5c72-91f4-46ad-a027-63ce8159b402",
    image: "images/products/realme-16.jpg",
    name: "realme 16 5G (Air White, 128 GB) (8 GB RAM)",
    rating: {
      stars: 4.5,
      count: 328
    },
    priceCents: 32201,
    keywords: [
      "smartphone",
      "realme",
      "5g",
      "mobile",
      "electronics"
    ]
  },
  {
    id: "c94a7e21-35f8-46bd-a062-81ce5274b903",
    image: "images/products/1pwhite-tshirt.png",
    name: "One Piece Skull Oversized T Shirt for Men",
    rating: {
      stars: 4.5,
      count: 384
    },
    priceCents: 1364,
    keywords: [
      "tshirt",
      "one piece",
      "skull",
      "oversized",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "72e5c9a3-41f6-48bd-b027-63ce8154a902",
    image: "images/products/wild-perfume.png",
    name: "Wild Stone Eau De Parfum (100ml)",
    rating: {
      stars: 4.5,
      count: 583
    },
    priceCents: 629,
    keywords: [
      "perfume",
      "wild stone",
      "fragrance",
      "mens",
      "beauty"
    ]
  },
  {
    id: "e45a8c73-19f6-42bd-b025-83ce9274d601",
    image: "images/products/wildcraft-bag.png",
    name: "Wildcraft Polyester Rucksack for Men & Women – Expedition RSK 45 Backpack",
    rating: {
      stars: 4.5,
      count: 327
    },
    priceCents: 1469,
    keywords: [
      "backpack",
      "rucksack",
      "wildcraft",
      "travel",
      "bags"
    ]
  },
  {
    id: "51e7c9a3-64f8-42bd-a027-15ce8364b902",
    image: "images/products/car-mirror.png",
    name: "Blind Spot Rear View Mirror, 360° Rotatable Round HD Convex Mirror",
    rating: {
      stars: 4.5,
      count: 186
    },
    priceCents: 414,
    keywords: [
      "car accessories",
      "rear view mirror",
      "blind spot",
      "automotive",
      "car mirror"
    ]
  },
  {
    id: "a74e2c63-51f9-48bd-a027-83ce9274b601",
    image: "images/products/toy-100in1.png",
    name: "Durable 100-in-1 Programmable IoT Electronics Learning Toy | Heavy Duty Material",
    rating: {
      stars: 4.5,
      count: 143
    },
    priceCents: 3150,
    keywords: [
      "toy",
      "learning toy",
      "electronics",
      "iot",
      "educational"
    ]
  },
  {
    id: "b34f8a21-65c7-49ed-a027-15ce8364b902",
    image: "images/products/new-tshirt.png",
    name: "The Souled Store Graphic Printed T-Shirt",
    rating: {
      stars: 4.5,
      count: 294
    },
    priceCents: 892,
    keywords: [
      "tshirt",
      "graphic",
      "printed",
      "souled store",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "d81e5c73-29f4-46bd-b025-61ce9354a702",
    image: "images/products/new-airpods.png",
    name: "Apple AirPods Pro (2nd Generation)",
    rating: {
      stars: 4.5,
      count: 1086
    },
    priceCents: 26153,
    keywords: [
      "airpods",
      "apple",
      "wireless",
      "earbuds",
      "audio"
    ]
  },
  {
    id: "49a7c2e5-83f1-48bd-a026-15ce9364b702",
    image: "images/products/new-puma-shoes.png",
    name: "Puma Court Classic Vulc Sneakers",
    rating: {
      stars: 4.5,
      count: 413
    },
    priceCents: 2940,
    keywords: [
      "sneakers",
      "puma",
      "shoes",
      "sports",
      "footwear"
    ]
  },
  {
    id: "f63e9a21-57c4-42bd-b025-83ce9274a601",
    image: "images/products/new-noisefit5.png",
    name: "Noise ColorFit Pro 5 Smart Watch",
    rating: {
      stars: 4.5,
      count: 528
    },
    priceCents: 3675,
    keywords: [
      "smartwatch",
      "noise",
      "colorfit",
      "fitness",
      "wearable"
    ]
  },
  {
    id: "a25c7e94-61f8-43bd-a027-15ce8364b902",
    image: "images/products/new-trolley.png",
    name: "VIP Streak 55cm Hard Trolley",
    rating: {
      stars: 4.5,
      count: 241
    },
    priceCents: 4200,
    keywords: [
      "trolley",
      "luggage",
      "vip",
      "travel",
      "suitcase"
    ]
  },
  {
    id: "c87e1a53-42f9-46bd-b025-61ce9354a702",
    image: "images/products/samsung-s25.png",
    name: "Samsung Galaxy S25 Smartphone",
    rating: {
      stars: 5,
      count: 673
    },
    priceCents: 78772,
    keywords: [
      "smartphone",
      "samsung",
      "galaxy",
      "s25",
      "mobile"
    ]
  },
  {
    id: "e41c9a75-63f8-48bd-a027-15ce8364b902",
    image: "images/products/sony-headphone2.png",
    name: "Sony Wireless Noise Cancelling Headphones",
    rating: {
      stars: 4.5,
      count: 841
    },
    priceCents: 9452,
    keywords: [
      "headphones",
      "sony",
      "wireless",
      "noise cancelling",
      "audio"
    ]
  },
  {
    id: "52f7c3a9-81e4-46bd-b025-61ce9354a702",
    image: "images/products/new-boat-air.png",
    name: "boAt Airdopes True Wireless Earbuds",
    rating: {
      stars: 4.5,
      count: 729
    },
    priceCents: 1364,
    keywords: [
      "earbuds",
      "boat",
      "airdropes",
      "wireless",
      "bluetooth"
    ]
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    rating: {
      stars: 5,
      count: 2197
    },
    priceCents: 1899,
    keywords: [
      "toaster",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/products/6-piece-white-dinner-plate-set.jpg",
    name: "6 Piece White Dinner Plate Set",
    rating: {
      stars: 4,
      count: 37
    },
    priceCents: 2067,
    keywords: [
      "plates",
      "kitchen",
      "dining"
    ]
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/6-piece-non-stick-baking-set.webp",
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      "kitchen",
      "cookware"
    ]
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: "Plain Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 317
    },
    priceCents: 2400,
    keywords: [
      "hoodies",
      "sweaters",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/luxury-tower-set-6-piece.jpg",
    name: "Luxury Towel Set - Graphite Gray",
    rating: {
      stars: 4.5,
      count: 144
    },
    priceCents: 3599,
    keywords: [
      "bathroom",
      "washroom",
      "restroom",
      "towels",
      "bath towels"
    ]
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/products/liquid-laundry-detergent-plain.jpg",
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    rating: {
      stars: 4.5,
      count: 305
    },
    priceCents: 2899,
    keywords: [
      "bathroom",
      "cleaning"
    ]
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/products/knit-athletic-sneakers-gray.jpg",
    name: "Waterproof Knit Athletic Sneakers - Gray",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear"
    ]
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/products/women-chiffon-beachwear-coverup-black.jpg",
    name: "Women's Chiffon Beachwear Cover Up - Black",
    rating: {
      stars: 4.5,
      count: 235
    },
    priceCents: 2070,
    keywords: [
      "robe",
      "swimsuit",
      "swimming",
      "bathing",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/products/round-sunglasses-black.jpg",
    name: "Round Sunglasses",
    rating: {
      stars: 4.5,
      count: 30
    },
    priceCents: 1560,
    keywords: [
      "accessories",
      "shades"
    ]
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/products/women-beach-sandals.jpg",
    name: "Women's Two Strap Buckle Sandals - Tan",
    rating: {
      stars: 4.5,
      count: 562
    },
    priceCents: 2499,
    keywords: [
      "footwear",
      "sandals",
      "womens",
      "beach",
      "summer"
    ]
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/products/blackout-curtain-set-beige.webp",
    name: "Blackout Curtains Set 4-Pack - Beige",
    rating: {
      stars: 4.5,
      count: 232
    },
    priceCents: 4599,
    keywords: [
      "bedroom",
      "curtains",
      "home"
    ]
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "images/products/men-slim-fit-summer-shorts-gray.jpg",
    name: "Men's Slim-Fit Summer Shorts",
    rating: {
      stars: 4,
      count: 160
    },
    priceCents: 1699,
    keywords: [
      "shorts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "images/products/electric-glass-and-steel-hot-water-kettle.webp",
    name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
    rating: {
      stars: 5,
      count: 846
    },
    priceCents: 3074,
    keywords: [
      "water boiler",
      "appliances",
      "kitchen"
    ]
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "images/products/facial-tissue-2-ply-18-boxes.jpg",
    name: "Ultra Soft Tissue 2-Ply - 18 Box",
    rating: {
      stars: 4,
      count: 99
    },
    priceCents: 2374,
    keywords: [
      "kleenex",
      "tissues",
      "kitchen",
      "tissues box",
      "napkins"
    ]
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "images/products/straw-sunhat.webp",
    name: "Straw Lifeguard Sun Hat",
    rating: {
      stars: 4,
      count: 215
    },
    priceCents: 2200,
    keywords: [
      "hats",
      "straw hats",
      "summer",
      "apparel"
    ]
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "images/products/sky-flower-stud-earrings.webp",
    name: "Sterling Silver Sky Flower Stud Earrings",
    rating: {
      stars: 4.5,
      count: 52
    },
    priceCents: 1799,
    keywords: [
      "jewelry",
      "accessories",
      "womens"
    ]
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "images/products/women-stretch-popover-hoodie-black.jpg",
    name: "Women's Stretch Popover Hoodie",
    rating: {
      stars: 4.5,
      count: 2465
    },
    priceCents: 1374,
    keywords: [
      "hooded",
      "hoodies",
      "sweaters",
      "womens",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "images/products/bathroom-rug.jpg",
    name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
    rating: {
      stars: 4.5,
      count: 119
    },
    priceCents: 1250,
    keywords: [
      "bathmat",
      "bathroom",
      "home"
    ]
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "images/products/women-knit-ballet-flat-black.jpg",
    name: "Women's Knit Ballet Flat",
    rating: {
      stars: 4,
      count: 326
    },
    priceCents: 2640,
    keywords: [
      "shoes",
      "flats",
      "womens",
      "footwear"
    ]
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "images/products/men-golf-polo-t-shirt-blue.jpg",
    name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    rating: {
      stars: 4.5,
      count: 2556
    },
    priceCents: 1599,
    keywords: [
      "tshirts",
      "shirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "images/products/trash-can-with-foot-pedal-50-liter.jpg",
    name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
    rating: {
      stars: 4.5,
      count: 2286
    },
    priceCents: 8300,
    keywords: [
      "garbage",
      "bins",
      "cans",
      "kitchen"
    ]
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "images/products/duvet-cover-set-blue-twin.jpg",
    name: "Duvet Cover Set with Zipper Closure",
    rating: {
      stars: 4,
      count: 456
    },
    priceCents: 2399,
    keywords: [
      "bedroom",
      "bed sheets",
      "sheets",
      "covers",
      "home"
    ]
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "images/products/men-chino-pants-beige.jpg",
    name: "Men's Classic-fit Pleated Chino Pants",
    rating: {
      stars: 4.5,
      count: 9017
    },
    priceCents: 2290,
    keywords: [
      "pants",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "images/products/men-athletic-shoes-green.jpg",
    name: "Men's Athletic Sneaker",
    rating: {
      stars: 4,
      count: 229
    },
    priceCents: 3890,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "mens"
    ]
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: "images/products/men-navigator-sunglasses-brown.jpg",
    name: "Men's Navigator Sunglasses Pilot",
    rating: {
      stars: 3.5,
      count: 42
    },
    priceCents: 1690,
    keywords: [
      "sunglasses",
      "glasses",
      "accessories",
      "shades"
    ]
  },
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    image: "images/products/non-stick-cooking-set-15-pieces.webp",
    name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
    rating: {
      stars: 4.5,
      count: 511
    },
    priceCents: 6797,
    keywords: [
      "cooking set",
      "kitchen"
    ]
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image: "images/products/vanity-mirror-silver.jpg",
    name: "Vanity Mirror with Heavy Base - Chrome",
    rating: {
      stars: 4.5,
      count: 130
    },
    priceCents: 1649,
    keywords: [
      "bathroom",
      "washroom",
      "mirrors",
      "home"
    ]
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    image: "images/products/women-french-terry-fleece-jogger-camo.jpg",
    name: "Women's Fleece Jogger Sweatpant",
    rating: {
      stars: 4.5,
      count: 248
    },
    priceCents: 2400,
    keywords: [
      "pants",
      "sweatpants",
      "jogging",
      "apparel",
      "womens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: "images/products/double-elongated-twist-french-wire-earrings.webp",
    name: "Double Oval Twist French Wire Earrings - Gold",
    rating: {
      stars: 4.5,
      count: 117
    },
    priceCents: 2400,
    keywords: [
      "accessories",
      "womens"
    ]
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: "images/products/round-airtight-food-storage-containers.jpg",
    name: "Round Airtight Food Storage Containers - 5 Piece",
    rating: {
      stars: 4,
      count: 126
    },
    priceCents: 2899,
    keywords: [
      "boxes",
      "food containers",
      "kitchen"
    ]
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    image: "images/products/coffeemaker-with-glass-carafe-black.jpg",
    name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
    rating: {
      stars: 4.5,
      count: 1211
    },
    priceCents: 2250,
    keywords: [
      "coffeemakers",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: "images/products/blackout-curtains-black.jpg",
    name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
    rating: {
      stars: 4.5,
      count: 363
    },
    priceCents: 3099,
    keywords: [
      "bedroom",
      "home"
    ]
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    image: "images/products/cotton-bath-towels-teal.webp",
    name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
    rating: {
      stars: 4.5,
      count: 93
    },
    priceCents: 2110,
    keywords: [
      "bathroom",
      "home",
      "towels"
    ]
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    image: "images/products/knit-athletic-sneakers-pink.webp",
    name: "Waterproof Knit Athletic Sneakers - Pink",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "womens"
    ]
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: "images/products/countertop-blender-64-oz.jpg",
    name: "Countertop Blender - 64oz, 1400 Watts",
    rating: {
      stars: 4,
      count: 3
    },
    priceCents: 10747,
    keywords: [
      "food blenders",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image: "images/products/floral-mixing-bowl-set.jpg",
    name: "10-Piece Mixing Bowl Set with Lids - Floral",
    rating: {
      stars: 5,
      count: 679
    },
    priceCents: 3899,
    keywords: [
      "mixing bowls",
      "baking",
      "cookware",
      "kitchen"
    ]
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image: "images/products/kitchen-paper-towels-30-pack.jpg",
    name: "2-Ply Kitchen Paper Towels - 30 Pack",
    rating: {
      stars: 4.5,
      count: 1045
    },
    priceCents: 5799,
    keywords: [
      "kitchen",
      "kitchen towels",
      "tissues"
    ]
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
    name: "Men's Full-Zip Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 3157
    },
    priceCents: 2400,
    keywords: [
      "sweaters",
      "hoodies",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  }
].map((productDetails) => {
  if (productDetails.type === 'clothing') {
    return new Clothing(productDetails);
  }
  console.log((productDetails.keywords.includes("appliances")));

  if (productDetails.keywords.includes("appliances")) {
    return new Appliance(productDetails);
  }
  if (productDetails.keywords.includes("shoes")) {
    return new Shoes(productDetails);
  }
  return new Product(productDetails);
});



