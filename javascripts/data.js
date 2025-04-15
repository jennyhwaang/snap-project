let coffeearray = [
  {
    name: "Vanilla latte",
    price: 6.99,
    type: ["Iced", "Hot"],
    size: ["small", "medium", "large"],
    milk: ["Oat milk", "Almond", "Dairy", "Soy"],
    caffeine: "145",
    rating: "4.7",
    description:
      "Creamy coffee made with espresso, steamed milk, and sweet vanilla syrup latte",
    ingredients: "espresso, steamed milk and vanilla syrup",
    image: "assets/vanillalatte.webp",
  },
  {
    name: "Hazelnut latte",
    price: 6.49,
    type: ["Iced", "Hot"],
    size: ["small", "medium", "large"],
    milk: ["Oat milk", "Almond", "Dairy", "Soy"],
    caffeine: "150",
    rating: "4.6",
    description: "Espresso with steamed milk and rich hazelnut flavor latte",
    ingredients: "espresso, steamed milk and hazelnut syrup",
    image: "assets/hazelnutlatte.jpg",
  },
  {
    name: "Mocha Latte",
    price: 6.5,
    type: ["Iced", "Hot"],
    size: ["small", "medium", "large"],
    milk: ["Oat milk", "Almond", "Dairy", "Soy"],
    caffeine: "140",
    rating: "4.5",
    description: "A chocolatey twist on a classic espresso latte",
    ingredients: "espresso, steamed milk and chocolate syrup",
    image: "assets/mochalatte.jpg",
  },
  {
    name: "Matcha Latte",
    price: 7.0,
    type: ["Iced", "Hot"],
    size: ["small", "medium", "large"],
    milk: ["Oat milk", "Almond", "Dairy", "Soy"],
    caffeine: "90",
    rating: "4.0",
    description: "Smooth and earthy matcha",
    ingredients: "matcha, steamed milk and sweetener",
    image: "assets/matchalatte.jpg",
  },
  {
    name: "Strawberry Matcha",
    price: 7.5,
    type: ["Iced", "Hot"],
    size: ["small", "medium", "large"],
    milk: ["Oat milk", "Almond", "Dairy", "Soy"],
    caffeine: "85",
    rating: "4.3",
    description: "A layered drink with sweet strawberry matcha, and milk",
    ingredients: "matcha, strawberry puree and milk",
    image: "assets/berrymatcha.jpg",
  },
  {
    name: "House Cold Brew",
    price: 4.0,
    type: ["Iced"],
    size: ["small", "medium", "large"],
    milk: ["none"],
    caffeine: "200",
    rating: "4.1",
    description: "Smooth, cold brew with deep flavor",
    ingredients: "cold brew coffee",
    image: "assets/coldbrew.jpg",
  },
  {
    name: "Nitro Cold Brew",
    price: 4.25,
    type: ["Iced"],
    size: ["small", "medium", "large"],
    milk: ["none"],
    caffeine: "250",
    rating: "4.2",
    description: "cold brew infused with nitrogen for a creamy texture",
    ingredients: "nitro cold brew coffee",
    image: "assets/nitrocoldbrew.webp",
  },
  {
    name: "Espresso",
    price: 3.0,
    type: ["Hot"],
    size: ["small"],
    milk: ["none"],
    caffeine: "64",
    rating: "5.0",
    description: "Strong and bold espresso coffee served as a single shot",
    ingredients: "espresso",
    image: "assets/espresso.jpg",
  },
  {
    name: "Americano",
    price: 3.5,
    type: ["Iced", "Hot"],
    size: ["small", "medium", "large"],
    milk: ["none"],
    caffeine: "150",
    rating: "4.8",
    description: "Espresso diluated with hot water for a smoother taste",
    ingredients: "espresso and hot water",
    image: "assets/americano.jpg",
  },
  {
    name: "Macchiato",
    price: 3.75,
    type: ["Hot"],
    size: ["small", "medium", "large"],
    milk: ["Oat milk", "Almond", "Dairy", "Soy"],
    caffeine: "85",
    rating: "3.9",
    description: "Espresso with a dollop of milk foam",
    ingredients: "espresso and milk foam",
    image: "assets/mach.webp",
  },
  {
    name: "Cappuccino",
    price: 3.8,
    type: ["Hot"],
    size: ["small", "medium", "large"],
    milk: ["Oat milk", "Almond", "Dairy", "Soy"],
    caffeine: "80",
    rating: "3.8",
    description: "Espresso with steamed milk and a thick layer of foam",
    ingredients: "espresso, milk foam and steamed milk",
    image: "assets/capp.webp",
  },
  {
    name: "Caramel Macchiato",
    price: 6.55,
    type: ["Iced or Hot"],
    size: ["small", "medium", "large"],
    milk: ["Oat milk", "Almond", "Dairy", "Soy"],
    caffeine: "150",
    rating: "3.7",
    description: "Vanilla latte topped with caramel drizzle",
    ingredients: "espresso, steamed milk, vanilla syrup and caramel drizzle",
    image: "assets/caramel.jpg",
  },
  {
    name: "Flat White",
    price: 3.2,
    type: ["Hot"],
    size: ["small", "medium", "large"],
    milk: ["Oat milk", "Almond", "Dairy", "Soy"],
    caffeine: "125",
    rating: "3.6",
    description:
      "Rich espresso topped with velvety microfoam for a smooth finish",
    ingredients: "espresso and steamed milk",
    image: "assets/flatwhite.webp",
  },
  {
    name: "Cortado",
    price: 3.1,
    type: ["Hot"],
    size: ["small", "medium", "large"],
    milk: ["Oat milk", "Almond", "Dairy", "Soy"],
    caffeine: "230",
    rating: "3.5",
    description: "Equal parts espresso and warm milk, bold yet balanced",
    ingredients: "espresso and warm milk",
    image: "assets/cortado.jpg",
  },
  {
    name: "Chai Latte",
    price: 3.1,
    type: ["Hot and Iced"],
    size: ["small", "medium", "large"],
    milk: ["Oat milk", "Almond", "Dairy", "Soy"],
    caffeine: "95",
    rating: "3.4",
    description: "Spiced with steamed milk, cozy and aromatic latte",
    ingredients: "Chai tea and steamed milk",
    image: "assets/chai.webp",
  },
  {
    name: "Pumpkin Spice Latte",
    price: 3.3,
    type: ["Hot and Iced"],
    size: ["small", "medium", "large"],
    milk: ["Oat milk", "Almond", "Dairy", "Soy"],
    caffeine: "75",
    rating: "3.5",
    description:
      "A fall favorite with pumpkin, cinnamon, nutmeg, and clove flavors latte",
    ingredients:
      "Espresso, steamed milk, pumpkin spice syrup, whipped cream, and pumpkin spice syrup",
    image: "assets/pumpkin.webp",
  },
  {
    name: "Black Iced Tea",
    price: 4.3,
    type: ["Hot and Iced"],
    size: ["small", "medium", "large"],
    milk: ["none"],
    caffeine: "45",
    rating: "4.3",
    description:
      "Bold and refreshing brewed black tea , served chilled over ice",
    ingredients: "Black tea",
    image: "assets/blacktea.webp",
  },
  {
    name: "Peach Iced Tea",
    price: 4.3,
    type: ["Hot and Iced"],
    size: ["small", "medium", "large"],
    milk: ["none"],
    caffeine: "55",
    rating: "4.2",
    description:
      "Crisp black tea infused with juicy peach flavor, lightly sweetened",
    ingredients: "Black tea and peach syrup",
    image: "assets/peach.jpg",
  },
  {
    name: "Passion Fruit Iced Tea",
    price: 5.0,
    type: ["Iced"],
    size: ["small", "medium", "large"],
    milk: ["none"],
    caffeine: "75",
    rating: "5.0",
    description:
      "Tropical and tangy blend of herbal tea with passion fruit flavor",
    ingredients: "Passion fruit syrup and black tea",
    image: "assets/passion.jpeg",
  },
  {
    name: "Yakult Green Tea",
    price: 5.0,
    type: ["Iced"],
    size: ["small", "medium", "large"],
    milk: ["none"],
    caffeine: "85",
    rating: "5.0",
    description:
      "Tangy, creamy Yakult mixed with refreshing green iced tea over ice",
    ingredients: "Green Tea and Yakult",
    image: "assets/greentea.jpg",
  },
  {
    name: "Lavender Latte",
    price: 7.5,
    type: ["Iced and Hot"],
    size: ["small", "medium", "large"],
    milk: ["Oat milk", "Almond", "Dairy", "Soy"],
    caffeine: "100",
    rating: "3.5",
    description:
      "Floral and calming Latte, made with lavender syrup, espresso, and steamed milk",
    ingredients: "Espresso, steamed milk, and lavender syrup",
    image: "assets/lav.jpg",
  },
  {
    name: "Hot Chocolate",
    price: 3.0,
    type: ["Hot"],
    size: ["small", "medium", "large"],
    milk: ["Oat milk", "Almond", "Dairy", "Soy"],
    caffeine: "0",
    rating: "5.0",
    description:
      "A rich and creamy chocolate drink made with steamed milk and cocoa",
    ingredients: "Steamed milk, cocoa powder, and sugar",
    image: "assets/hotchoco.jpg",
  },
];
