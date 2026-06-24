const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"
  },
  {
    id: 2,
    name: "Headphones",
    price: 2000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 5000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
  },
  {
    id: 4,
    name: "Mobile Phone",
    price: 25000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 3000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400"
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 800,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400"
  },
  {
    id: 7,
    name: "Keyboard",
    price: 1500,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400"
  },
  {
    id: 8,
    name: "T-Shirt",
    price: 1000,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"
  },
  {
    id: 9,
    name: "Jeans",
    price: 2000,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400"
  },
  {
    id: 10,
    name: "Shoes",
    price: 3000,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
  },
  {
    id: 11,
    name: "Jacket",
    price: 2500,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400"
  },
  {
    id: 12,
    name: "Hoodie",
    price: 1800,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400"
  },
  {
    id: 13,
    name: "Cap",
    price: 500,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400"
  },
  {
    id: 14,
    name: "Sunglasses",
    price: 1200,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400"
  },
  {
    id: 15,
    name: "Formal Shirt",
    price: 1500,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400"
  },

  {
    id: 16,
    name: "Backpack",
    price: 1500,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400"
  },
  {
    id: 17,
    name: "Water Bottle",
    price: 500,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400"
  },
  {
    id: 18,
    name: "Wallet",
    price: 700,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400"
  },
  {
    id: 20,
    name: "Watch Strap",
    price: 400,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400"
  },
  {
    id: 22,
    name: "Office Chair",
    price: 4500,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400"
  },
  {
    id: 23,
    name: "Bookshelf",
    price: 3500,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400"
  },
  {
    id: 24,
    name: "Tablet",
    price: 18000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400"
  },
{
  id: 27,
  name: "Monitor",
  price: 12000,
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400"
},
{
  id: 28,
  name: "Webcam",
  price: 2200,
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400"
},
{
  id: 30,
  name: "External Hard Drive",
  price: 4500,
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400"
},
{
  id: 31,
  name: "SSD",
  price: 3500,
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400"
},
{
  id: 32,
  name: "Printer",
  price: 8500,
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400"
},
{
  id: 33,
  name: "Router",
  price: 2000,
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400"
},

// Fashion
{
  id: 34,
  name: "Sweatshirt",
  price: 1500,
  category: "Fashion",
  image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400"
},
{
  id: 39,
  name: "Blazer",
  price: 4000,
  category: "Fashion",
  image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400"
},
{
  id: 42,
  name: "Beanie",
  price: 400,
  category: "Fashion",
  image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400"
},
{
  id: 43,
  name: "Belt",
  price: 600,
  category: "Fashion",
  image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400"
},
{
  id: 45,
  name: "Phone Case",
  price: 500,
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=400"
},
{
  id: 64,
  name: "Mixer Grinder",
  price: 3200,
  category: "Home & Kitchen",
  image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400"
},
{
  id: 67,
  name: "Rice Cooker",
  price: 2500,
  category: "Home & Kitchen",
  image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400"
},
{
  id: 69,
  name: "Dinner Set",
  price: 2200,
  category: "Home & Kitchen",
  image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=400"
},
{
  id: 70,
  name: "Vacuum Cleaner",
  price: 6500,
  category: "Home & Kitchen",
  image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400"
},
{
  id: 71,
  name: "Wall Clock",
  price: 900,
  category: "Home & Kitchen",
  image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400"
},
{
  id: 72,
  name: "Water Purifier",
  price: 9000,
  category: "Home & Kitchen",
  image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400"
},
{
  id: 73,
  name: "Microwave Oven",
  price: 8500,
  category: "Home & Kitchen",
  image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400"
},
{
  id: 57,
  name: "Sofa",
  price: 25000,
  category: "Furniture",
  image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400"
},
{
  id: 74,
  name: "Lipstick",
  price: 499,
  category: "Cosmetics",
  image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400"
},
{
  id: 75,
  name: "Foundation",
  price: 899,
  category: "Cosmetics",
  image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400"
},
{
  id: 76,
  name: "Face Powder",
  price: 399,
  category: "Cosmetics",
  image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400"
},
{
  id: 77,
  name: "Perfume",
  price: 1499,
  category: "Cosmetics",
  image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400"
},
{
  id: 78,
  name: "Nail Polish",
  price: 249,
  category: "Cosmetics",
  image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400"
},
{
  id: 82,
  name: "Serum",
  price: 1199,
  category: "Cosmetics",
  image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400"
},
{
  id: 83,
  name: "Moisturizer",
  price: 799,
  category: "Cosmetics",
  image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400"
},
{
  id: 111,
  name: "Gold Ring",
  price: 1999,
  category: "Jewellery",
  image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400"
},
{
  id: 112,
  name: "Silver Necklace",
  price: 2499,
  category: "Jewellery",
  image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400"
},
{
  id: 113,
  name: "Diamond Earrings",
  price: 3999,
  category: "Jewellery",
  image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400"
},
{
  id: 114,
  name: "Bracelet",
  price: 1299,
  category: "Jewellery",
  image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400"
},
{
  id: 118,
  name: "Nose Ring",
  price: 599,
  category: "Jewellery",
  image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400"
},
{
  id: 135,
  name: "Scented Candle",
  price: 499,
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400"
},
{
  id: 134,
  name: "Acrylic Paint Set",
  price: 899,
  category: "Fashion",
  image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400"
}
];

export default products;