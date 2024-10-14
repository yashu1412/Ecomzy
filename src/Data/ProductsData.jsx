const productsData = [
  // Electronics
  {
    id: 1,
    name: "Laptop",
    price: 999,
    description: "15-inch laptop with 16GB RAM and 512GB SSD.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699,
    description: "Latest smartphone with dual camera and 128GB storage.",
    category: "Electronics",
    image:
      "https://media.istockphoto.com/id/1731402068/photo/smartphone-with-a-blank-screen-on-a-white-background.jpg?s=2048x2048&w=is&k=20&c=uQJ95E4rtixoUrmFHnMM71frPh3snBBpTaqDlyGb_Y4=",
  },
  {
    id: 3,
    name: "Smartwatch",
    price: 199,
    description: "Fitness smartwatch with heart rate monitor and GPS.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1461141346587-763ab02bced9?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Headphones",
    price: 149,
    description: "Noise-cancelling over-ear headphones.",
    category: "Electronics",
    image:
      "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 79,
    description: "Portable Bluetooth speaker with powerful sound.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1594501432907-91214bfdd928?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Camera",
    price: 499,
    description: "Mirrorless camera with 24MP sensor.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1516724562728-afc824a36e84?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Tablet",
    price: 399,
    description: "10-inch tablet with 64GB storage.",
    category: "Electronics",
    image:
      "https://plus.unsplash.com/premium_photo-1680371834674-8eccade9b271?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Gaming Console",
    price: 499,
    description: "Latest gaming console with 4K support.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1580234797602-22c37b2a6230?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Smart TV",
    price: 799,
    description: "55-inch 4K Smart TV with HDR.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Keyboard",
    price: 69,
    description: "Mechanical keyboard with customizable RGB lighting.",
    category: "Electronics",
    image:
      "https://media.istockphoto.com/id/1319228093/photo/black-computer-keyboard-with-rgb-color-isolated-on-black-with-clipping-path.jpg?s=2048x2048&w=is&k=20&c=isuh_Pz7_W4YsUUGvSAUZ8tsPsHLmWahwyDqmLB03Ss=",
  },
  {
    id: 11,
    name: "Gaming Mouse",
    price: 59,
    description: "High-precision gaming mouse with ergonomic design.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1628832307345-7404b47f1751?q=80&w=1783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    name: "Portable SSD",
    price: 129,
    description: "1TB portable SSD with USB 3.1 interface.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1720048169994-5fc417ce38a5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    name: "VR Headset",
    price: 399,
    description: "Virtual reality headset for immersive gaming.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1707228773518-7ca0492d0c4d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    name: "Smart Home Hub",
    price: 99,
    description: "Smart hub to control your connected devices.",
    category: "Electronics",
    image:
      "https://media.istockphoto.com/id/1214098172/photo/smart-home-hub-for-home-automation-on-wooden-desktop-with-copyspace.jpg?s=2048x2048&w=is&k=20&c=GXHapgaUhVErvIYH2q7luc9GfiZNSR1qKzTCy8w_Ye4=",
  },
  {
    id: 15,
    name: "Digital Camera",
    price: 899,
    description: "Digital camera with high zoom capability.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1614008247224-a9b185e63cfd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    name: "AirPods",
    price: 159,
    description:
      "Wireless earbuds with active noise cancellation and long battery life.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // Fashion
  {
    id: 17,
    name: "Leather Jacket",
    price: 299,
    description: "Stylish leather jacket for men.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1559038217-3fb2db6186f8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 18,
    name: "T-shirt",
    price: 29,
    description: "Cotton t-shirt with a round neck.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 19,
    name: "Jeans",
    price: 79,
    description: "Comfortable and stylish denim jeans.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1511770378289-4217b08a434e?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 20,
    name: "Sneakers",
    price: 89,
    description: "Trendy sneakers for everyday wear.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 21,
    name: "Sunglasses",
    price: 49,
    description: "Stylish sunglasses with UV protection.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 22,
    name: "Handbag",
    price: 199,
    description: "Elegant handbag for women.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1691480288782-142b953cf664?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 23,
    name: "Watches",
    price: 149,
    description: "Luxury watch with leather strap.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 24,
    name: "Scarf",
    price: 29,
    description: "Warm scarf for winter.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1457545195570-67f207084966?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 25,
    name: "Suit",
    price: 399,
    description: "Tailored suit for formal occasions.",
    category: "Fashion",
    image:
      "https://plus.unsplash.com/premium_photo-1661434624086-e02557c68815?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 26,
    name: "Pajamas",
    price: 49,
    description: "Comfortable pajamas for lounging.",
    category: "Fashion",
    image:
      "https://media.istockphoto.com/id/1094488412/photo/shirtless-thoughtful-man-talking-on-smartphone-in-bedroom.jpg?s=2048x2048&w=is&k=20&c=AFM2kq2hKQRqLTWw5YgS4pbxapffM-YdLeDYdS2u27o=",
  },
  {
    id: 27,
    name: "Winter Coat",
    price: 199,
    description: "Warm winter coat with hood.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1577287364980-8eadb74873d7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 28,
    name: "Flip Flops",
    price: 19,
    description: "Comfortable flip flops for summer.",
    category: "Fashion",
    image:
      "https://plus.unsplash.com/premium_photo-1681488430304-06478d0ffc43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 29,
    name: "Belt",
    price: 25,
    description: "Classic leather belt for men.",
    category: "Fashion",
    image:
      "https://plus.unsplash.com/premium_photo-1726769202190-ad2a3f2f360b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 30,
    name: "Dress",
    price: 89,
    description: "Elegant dress for special occasions.",
    category: "Fashion",
    image:
      "https://plus.unsplash.com/premium_photo-1676234842565-bc1df0bfd45a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 31,
    name: "Cap",
    price: 29,
    description: "Casual cap for outdoor activities.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1483103068651-8ce44652c331?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 32,
    name: "Saree",
    price: 599,
    description:
      "Elegant saree made of silk, featuring beautiful patterns and a rich pallu.",
    category: "Fashion",
    image:
      "https://plus.unsplash.com/premium_photo-1724762182780-000d248f9301?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // Home & Garden
  {
    id: 33,
    name: "Sofa",
    price: 499,
    description: "Comfortable 2-seater sofa for your living room.",
    category: "Home & Garden",
    image:
      "https://plus.unsplash.com/premium_photo-1661308302074-6f153ce03ff5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 34,
    name: "Dining Table",
    price: 299,
    description: "Elegant wooden dining table for family meals.",
    category: "Home & Garden",
    image:
      "https://plus.unsplash.com/premium_photo-1704686580626-d53ce68985d9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 35,
    name: "Office Chair",
    price: 199,
    description: "Ergonomic office chair for comfortable working.",
    category: "Home & Garden",
    image:
      "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 36,
    name: "Bed Frame",
    price: 349,
    description: "Sturdy bed frame with modern design.",
    category: "Home & Garden",
    image:
      "https://plus.unsplash.com/premium_photo-1661694497699-90eee9b1aa32?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 37,
    name: "Coffee Table",
    price: 129,
    description: "Stylish coffee table for your living room.",
    category: "Home & Garden",
    image:
      "https://plus.unsplash.com/premium_photo-1664193968861-5d23c7652008?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 38,
    name: "Bookshelf",
    price: 89,
    description: "Wooden bookshelf for storing your books.",
    category: "Home & Garden",
    image:
      "https://media.istockphoto.com/id/1207897525/photo/bookshelf-in-hall-room-with-lamp-and-books.jpg?s=2048x2048&w=is&k=20&c=D1XMAKPUgqQ_OEe0jv8yUkvoJFhhG5-R9ycoHfDJ6Co=",
  },
  {
    id: 39,
    name: "Kitchen Utensils Set",
    price: 39,
    description: "Essential kitchen utensils for cooking.",
    category: "Home & Garden",
    image:
      "https://images.unsplash.com/photo-1654064755996-80036b6e6984?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 40,
    name: "Wall Art",
    price: 49,
    description: "Beautiful wall art for home decoration.",
    category: "Home & Garden",
    image:
      "https://plus.unsplash.com/premium_photo-1706152482956-ab99f887763f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 41,
    name: "Curtains",
    price: 59,
    description: "Elegant curtains for your windows.",
    category: "Home & Garden",
    image:
      "https://plus.unsplash.com/premium_photo-1675754485949-9a139343f93b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 42,
    name: "Rug",
    price: 79,
    description: "Soft rug to enhance your living space.",
    category: "Home & Garden",
    image:
      "https://plus.unsplash.com/premium_photo-1678790910458-5a06900d7e8c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 43,
    name: "Plant Pot",
    price: 25,
    description: "Decorative pot for indoor plants.",
    category: "Home & Garden",
    image:
      "https://images.unsplash.com/photo-1505859131429-94ea9f3d7edd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 44,
    name: "Folding Chair",
    price: 49,
    description: "Portable folding chair for outdoor use.",
    category: "Home & Garden",
    image:
      "https://images.unsplash.com/photo-1642688528647-9dfafccdc8e8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 45,
    name: "Outdoor Patio Set",
    price: 599,
    description: "Stylish patio set with cushions for your outdoor space.",
    category: "Home & Garden",
    image:
      "https://plus.unsplash.com/premium_photo-1689609949921-6b2529511e38?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 46,
    name: "Desk Organizer",
    price: 29,
    description: "Wooden desk organizer to keep your workspace tidy.",
    category: "Home & Garden",
    image:
      "https://www.spreadhome.com/cdn/shop/products/DSC3728-copy_5aa1653d-5a76-470f-bedf-c84f036b2b5b_grande.jpg?v=1717892812",
  },
  {
    id: 47,
    name: "Storage Bins",
    price: 39,
    description: "Set of stylish storage bins for organizing your home.",
    category: "Home & Garden",
    image:
      "https://media.istockphoto.com/id/1203081756/photo/plastic-food-containers-in-green-yellow-and-blue.jpg?s=2048x2048&w=is&k=20&c=y_FRN30gUBKi_LtkIakBplCLeA9EcFLaPn4Y6z5kZew=",
  },
  {
    id: 48,
    name: "Wall Clock",
    price: 45,
    description: "Modern wall clock to enhance your home decor.",
    category: "Home & Garden",
    image:
      "https://images.unsplash.com/photo-1609980775647-1fb1ef376268?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // Sports
  {
    id: 49,
    name: "Basketball",
    price: 29,
    description: "Durable basketball for outdoor games.",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 50,
    name: "Tennis Racket",
    price: 99,
    description: "Professional tennis racket for competitive play.",
    category: "Sports",
    image:
      "https://plus.unsplash.com/premium_photo-1664304642821-31278f3ff186?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 51,
    name: "Soccer Ball",
    price: 25,
    description: "Official size soccer ball for training.",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 52,
    name: "Yoga Mat",
    price: 39,
    description: "Non-slip yoga mat for comfortable practice.",
    category: "Sports",
    image:
      "https://plus.unsplash.com/premium_photo-1667739346017-fbc9cd35d666?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 53,
    name: "Dumbbells Set",
    price: 99,
    description: "Adjustable dumbbells for home workouts.",
    category: "Sports",
    image:
      "https://plus.unsplash.com/premium_photo-1671028546491-f70b21a32cc2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 54,
    name: "Bicycle",
    price: 299,
    description: "Mountain bike with 21 speeds.",
    category: "Sports",
    image:
      "https://plus.unsplash.com/premium_photo-1678727283319-c9358ad98c73?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 55,
    name: "Swimming Goggles",
    price: 19,
    description: "Anti-fog swimming goggles.",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1467044705596-744699fa8931?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 56,
    name: "Skateboard",
    price: 79,
    description: "Durable skateboard for beginners.",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1422000670866-529d53611fe9?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 57,
    name: "Golf Club Set",
    price: 499,
    description: "Complete golf club set for beginners.",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1530028828-25e8270793c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 58,
    name: "Surfboard",
    price: 399,
    description: "Lightweight surfboard for beginners.",
    category: "Sports",
    image:
      "https://plus.unsplash.com/premium_photo-1676645882464-45ac0299197a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 59,
    name: "Jump Rope",
    price: 10,
    description: "Adjustable jump rope for fitness training.",
    category: "Sports",
    image:
      "https://as1.ftcdn.net/v2/jpg/05/79/17/52/1000_F_579175283_TgaaQ6e90MtPOpOcGj2Q2bouPFuQ4CtF.webp",
  },
  {
    id: 60,
    name: "Fitness Tracker",
    price: 49,
    description: "Wearable fitness tracker with heart rate monitor.",
    category: "Sports",
    image:
      "https://plus.unsplash.com/premium_photo-1681433386259-1ea114ca923d?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 61,
    name: "Boxing Gloves",
    price: 39,
    description: "Durable boxing gloves for training and sparring.",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1509255929945-586a420363cf?q=80&w=1897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 62,
    name: "Cricket Bat",
    price: 79,
    description: "Lightweight cricket bat for players of all levels.",
    category: "Sports",
    image:
      "https://cdnmedia.dsc-cricket.com/media/catalog/product/cache/f6804705d3c9b06dccd038949280b6b0/d/s/dsc-krunch-the-bull-31-english-willow-2.jpg",
  },
  {
    id: 63,
    name: "Batting Gloves",
    price: 49,
    description: "Professional batting gloves for better grip.",
    category: "Sports",
    image:
      "https://cdnmedia.dsc-cricket.com/media/catalog/product/cache/f6804705d3c9b06dccd038949280b6b0/k/r/krunch-5-0-batting-gloves_1.jpg",
  },
  {
    id: 64,
    name: "Cricket Ball",
    price: 15,
    description: "Official match cricket ball for professional games.",
    category: "Sports",
    image:
      "https://cdnmedia.dsc-cricket.com/media/catalog/product/cache/f6804705d3c9b06dccd038949280b6b0/m/a/marathon-incredi-ball-red-2_2.jpg",
  },
  // Toys
  {
    id: 65,
    name: "Lego Set",
    price: 59,
    description: "Classic Lego building set for kids.",
    category: "Toys",
    image:
      "https://images.unsplash.com/photo-1533234427049-9e9bb093186d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 66,
    name: "Action Figures",
    price: 29,
    description: "Set of action figures from your favorite movie.",
    category: "Toys",
    image:
      "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 67,
    name: "Doll House",
    price: 149,
    description: "Beautiful dollhouse with furniture.",
    category: "Toys",
    image: "https://m.media-amazon.com/images/I/91e70DRR1OL.jpg",
  },
  {
    id: 68,
    name: "Train Set",
    price: 99,
    description: "Electric train set with tracks and accessories.",
    category: "Toys",
    image:
      "https://m.media-amazon.com/images/I/71hoE70AZkL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 69,
    name: "Robot Kit",
    price: 89,
    description: "STEM learning robot kit for kids to build and program.",
    category: "Toys",
    image: "https://m.media-amazon.com/images/I/7185r4Q53RL.jpg",
  },
  {
    id: 70,
    name: "Musical Instrument Set",
    price: 49,
    description:
      "Kid-friendly musical instrument set with drum, tambourine, and more.",
    category: "Toys",
    image:
      "https://images-cdn.ubuy.co.in/6408acdbe77a6d56454c5c83-stoie-39-s-kids-musical-instruments-set.jpg",
  },
  {
    id: 71,
    name: "Puzzle",
    price: 19,
    description: "Challenging puzzle for kids and adults.",
    category: "Toys",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/kst9gnk0/role-play-toy/q/n/i/kids-number-puzzles-mini-size-play-puzzle-numbers-set-toy-kids-original-imag6bfkdjhyh9wx.jpeg?q=90&crop=false",
  },
  {
    id: 72,
    name: "Board Game",
    price: 29,
    description: "Fun board game for family nights.",
    category: "Toys",
    image:
      "https://m.media-amazon.com/images/I/81vYWLGFGHL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 73,
    name: "Remote Control Car",
    price: 79,
    description: "Fast remote control car for outdoor fun.",
    category: "Toys",
    image: "https://m.media-amazon.com/images/I/81ap+We87nL.jpg",
  },
  {
    id: 74,
    name: "Stuffed Animal",
    price: 25,
    description: "Soft stuffed animal for cuddling.",
    category: "Toys",
    image:
      "https://www.ultrasofttoys.com/images/product_images/large/8187UST.jpg",
  },
  {
    id: 75,
    name: "Kite",
    price: 15,
    description: "Colorful kite for outdoor flying.",
    category: "Toys",
    image:
      "https://images.unsplash.com/photo-1690946795891-0d39ddc19935?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 76,
    name: "Play-Doh Set",
    price: 19,
    description: "Colorful Play-Doh set for creative fun.",
    category: "Toys",
    image: "https://m.media-amazon.com/images/I/815WsrXlG4L.jpg",
  },
  {
    id: 77,
    name: "Water Gun",
    price: 15,
    description: "Fun water gun for summer play.",
    category: "Toys",
    image: "https://m.media-amazon.com/images/I/81ZVxTjOL1L.jpg",
  },
  {
    id: 78,
    name: "Coloring Book",
    price: 9,
    description: "Fun coloring book with crayons included.",
    category: "Toys",
    image:
      "https://m.media-amazon.com/images/I/81ZiMSpnmDL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 79,
    name: "Toy Dinosaur",
    price: 25,
    description: "Realistic toy dinosaur for imaginative play.",
    category: "Toys",
    image:
      "https://images-cdn.ubuy.co.in/64e76c92e3d92670ae6bf9a8-ciftoys-trex-dinosaur-toys-for-kids-3-5.jpg",
  },
  {
    id: 80,
    name: "Bouncing Ball",
    price: 10,
    description: "Colorful bouncing ball for outdoor games.",
    category: "Toys",
    image:
      "https://m.media-amazon.com/images/I/81kgIHsKBRL._AC_UF894,1000_QL80_.jpg",
  },
];

export default productsData;
