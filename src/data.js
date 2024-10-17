// src/data.js
import buds from "./assets/buds.png";
import headphone from "./assets/headphone.png";
import fit from "./assets/fitness.png";
import charger from "./assets/charger.png";
import mouse from "./assets/mouse.png";
import laptop from "./assets/laptop.png";
import gmouse from "./assets/gmouse.png";
import keyboard from "./assets/keyboard.png";
import powerbank from "./assets/powerbank.png";
import speaker from "./assets/speaker.png";
import watch from "./assets/watch.png";
import tv from "./assets/tv.png";
import bambooTumbler from './assets/bambooTumbler.png'
import banner from './assets/banner.jpg';
import controller from './assets/controller.jpg';
import cover from './assets/cover.jpg';
import stand from './assets/stand.jpg';
import security from './assets/security.png';
import usb from './assets/usb.jpeg';
import tablet from './assets/tablet.jpeg';
import camera from './assets/camera.webp';
import cable from './assets/cable.webp';
import lamp from './assets/lamp.webp';
// import travelMug;
// import ceramicMug;
// import glassBottle;
// import steelLunchbox;  

//customer
// Example Usage of Component with Customer Data
export const customerS = [
  {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "123-456-7890",
  location: "New York, USA",
  id: "C12345",
  lifetimeValue: 1200,
  averageOrderValue: 150,
  isRepeatCustomer: true,
  orders: [
    {
      id: "O123",
      products: [
        { name: "Smart Watch", id: "P890" },
        { name: "Laptop stand", id: "P228" },
      ],
      totalAmount: 200,
      status: "Delivered",
      date: "2023-08-12",
    },
    {
      id: "O124",
      products: [{ name: "USB Hub", id: "P3" }],
      totalAmount: 150,
      status: "Shipped",
      date: "2023-09-01",
    },
  ],
  messages: [
    { date: "2023-08-15", content: "Thank you for the quick delivery!" },
    { date: "2023-09-05", content: "Can I get a refund for Order O124?" },
  ],
},
{
    id: "C001",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "987-654-3210",
    location: "San Francisco, USA",
    lifetimeValue: 2450,
    averageOrderValue: 205,
    isRepeatCustomer: true,
    orders: [
      { id: 'O001', products: [{ name: 'Laptop', id: 'P001' }], totalAmount: 1200, status: 'Delivered', date: '2023-07-10' },
      { id: 'O002', products: [{ name: 'Headphones', id: 'P002' }, { name: 'Mouse', id: 'P003' }], totalAmount: 250, status: 'Delivered', date: '2023-08-25' },
      { id: 'O003', products: [{ name: 'Smartphone', id: 'P004' }], totalAmount: 1000, status: 'Pending', date: '2023-09-15' }
    ],
    messages: [
      { date: '2023-07-12', content: 'Thank you for the fast delivery!' },
      { date: '2023-08-30', content: 'Can I get more information on the warranty?' }
    ]
  },
  {
    id: "C002",
    name: "Bob Martinez",
    email: "bob.martinez@example.com",
    phone: "123-456-7890",
    location: "New York, USA",
    lifetimeValue: 5300,
    averageOrderValue: 400,
    isRepeatCustomer: true,
    orders: [
      { id: 'O004', products: [{ name: '4K TV', id: 'P005' }], totalAmount: 1600, status: 'Delivered', date: '2023-06-01' },
      { id: 'O005', products: [{ name: 'Gaming Console', id: 'P006' }, { name: 'Gamepad', id: 'P007' }], totalAmount: 500, status: 'Shipped', date: '2023-09-05' },
      { id: 'O006', products: [{ name: 'Smart Watch', id: 'P008' }], totalAmount: 200, status: 'Delivered', date: '2023-08-20' }
    ],
    messages: [
      { date: '2023-09-08', content: 'What’s the expected delivery date for my gaming console?' },
      { date: '2023-06-05', content: 'Very satisfied with the TV quality!' }
    ]
  },
  {
    id: "C003",
    name: "Claire White",
    email: "claire.white@example.com",
    phone: "555-123-4567",
    location: "London, UK",
    lifetimeValue: 1100,
    averageOrderValue: 220,
    isRepeatCustomer: false,
    orders: [
      { id: 'O007', products: [{ name: 'Blender', id: 'P009' }], totalAmount: 150, status: 'Delivered', date: '2023-07-15' },
      { id: 'O008', products: [{ name: 'Microwave Oven', id: 'P010' }], totalAmount: 200, status: 'Cancelled', date: '2023-08-05' },
      { id: 'O009', products: [{ name: 'Vacuum Cleaner', id: 'P011' }], totalAmount: 350, status: 'Delivered', date: '2023-08-25' }
    ],
    messages: [
      { date: '2023-07-18', content: 'The blender works perfectly, thank you!' },
      { date: '2023-08-03', content: 'Can I cancel the microwave oven order?' }
    ]
  },
  {
    id: "C004",
    name: "David Lee",
    email: "david.lee@example.com",
    phone: "789-123-4560",
    location: "Sydney, Australia",
    lifetimeValue: 3750,
    averageOrderValue: 300,
    isRepeatCustomer: true,
    orders: [
      { id: 'O010', products: [{ name: 'Smartphone', id: 'P012' }, { name: 'Phone Case', id: 'P013' }], totalAmount: 800, status: 'Delivered', date: '2023-05-10' },
      { id: 'O011', products: [{ name: 'Laptop', id: 'P001' }], totalAmount: 1500, status: 'Delivered', date: '2023-07-22' },
      { id: 'O012', products: [{ name: 'Tablet', id: 'P014' }], totalAmount: 1450, status: 'Shipped', date: '2023-09-12' }
    ],
    messages: [
      { date: '2023-07-25', content: 'Can you confirm the laptop warranty?' },
      { date: '2023-09-15', content: 'When will the tablet arrive?' }
    ]
  },
  {
    id: "C005",
    name: "Emily Brown",
    email: "emily.brown@example.com",
    phone: "321-654-9870",
    location: "Berlin, Germany",
    lifetimeValue: 2100,
    averageOrderValue: 280,
    isRepeatCustomer: false,
    orders: [
      { id: 'O013', products: [{ name: 'Camera', id: 'P015' }], totalAmount: 700, status: 'Delivered', date: '2023-06-10' },
      { id: 'O014', products: [{ name: 'Tripod', id: 'P016' }], totalAmount: 100, status: 'Delivered', date: '2023-08-18' },
      { id: 'O015', products: [{ name: 'Camera Lens', id: 'P017' }], totalAmount: 800, status: 'Pending', date: '2023-09-10' }
    ],
    messages: [
      { date: '2023-08-20', content: 'Great service, thanks for the tripod!' },
      { date: '2023-09-12', content: 'Can I change my shipping address for the lens?' }
    ]
  },
];


//profile-page
export const sellerProfileData = {
  profile: {
    profilePicture: "https://randomuser.me/api/portraits/men/35.jpg",
    fullName: "John Doe",
    email: "john.doe@techhaven.com",
    phone: "+1 (800) 987-6543",
    address: "5678 Elm Street, Los Angeles, CA 90001",
    dateOfBirth: "1985-06-15",
    gender: "Male",
    nationality: "American",
  },
  store: {
    storeName: "Tech Haven",
    storeDescription:
      "Your one-stop shop for the latest tech gadgets, devices, and accessories.",
    bannerImage: banner,
    contactEmail: "support@techhaven.com",
    contactPhone: "+1 (800) 123-4567",
    storeAddress: "1234 Market Street, San Francisco, CA 94103",
    storeRating: 4.8,
    memberSince: "March 2019",
    socialMedia: {
      facebook: "https://www.facebook.com/techhaven",
      twitter: "https://twitter.com/techhaven",
      instagram: "https://instagram.com/techhaven",
    },
  },
  banking: {
    bankName: "Chase Bank",
    accountNumber: "1234567890",
    routingNumber: "0987654321",
    accountType: "Checking",
    accountHolderName: "John Doe",
    taxID: "987-65-4321",
    paymentMethod: "Direct Deposit",
    paypalEmail: "john.doe@paypal.com",
  },
  preferences: {
    language: "English",
    currency: "USD",
    notificationPreferences: {
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true,
    },
    preferredTheme: "Light",
    timeZone: "Pacific Time (US & Canada)",
  },
  salesStats: {
    totalSales: 1290,
    monthlySales: 320,
    totalCustomers: 875,
    totalProducts: 58,
    averageRating: 4.5,
    refundRequests: 12,
    pendingOrders: 7,
  },
  recentActivities: [
    {
      activityType: "Order",
      description: "Order #1532 has been shipped to customer.",
      timestamp: "2024-09-19 14:35",
    },
    {
      activityType: "Review",
      description: "Customer left a 5-star review for Product XYZ.",
      timestamp: "2024-09-18 10:22",
    },
  ],
  notifications: [
    {
      type: "Order Update",
      message: "Order #1528 is now out for delivery.",
      date: "2024-09-20",
    },
    {
      type: "Low Stock Alert",
      message: "Product ABC is running low on stock (5 units remaining).",
      date: "2024-09-19",
    },
  ],
  sellerReviews: [
    {
      customerName: "Alice Johnson",
      rating: 5,
      feedback:
        "Great service! Fast delivery and the product was as described. Highly recommend this seller!",
      date: "2024-09-19",
    },
  ],
  sellerInsights: {
    bestSellingProduct: "Smartphone X",
    highestRevenueProduct: "4K UHD Monitor",
    totalRevenue: 13590.75,
    avgOrderValue: 45.25,
    avgProcessingTime: "1.2 days",
    mostActiveCustomers: "California, Texas",
  },
};


//product-page
export const productPage = [
  {
    name: "Eco-Friendly Bamboo Tumbler",
    id: "45678",
    description:
      "A reusable bamboo tumbler with insulated stainless steel interior for hot and cold beverages.",
    specifications:
      "Capacity: 16 oz, Material: Bamboo, Stainless Steel, Insulation: Double-wall",
    category: "Kitchenware",
    price: 24.99, 
    discount: 5.0, 
    finalPrice: 23.74, 
    stock: 120,
    stockAvailable: true, 
    salesThisMonth: 30,
    totalRevenue: 712.2,
    image: bambooTumbler,
    costPrice: 12.0, 
    shippingOptions: "Standard, Eco-Shipping",
    handlingTime: "2-4 business days",
    variants: [
      { size: "16 oz", color: "Natural Bamboo", sku: "BAMBOO-16OZ" },
      // { size: "12 oz", color: "Natural Bamboo", sku: "BAMBOO-12OZ" },
    ],
    reviews: [
      {
        user: "Samantha Wright",
        image: "https://img.icons8.com/papercut/100/user-female-circle.png",
        rating: 5,
        comment: "Stylish and eco-friendly! Keeps my coffee hot for hours.",
      },
      {
        user: "Brian Lee",
        image: "https://img.icons8.com/papercut/100/user-male-circle.png",
        rating: 4,
        comment: "Love the design, but it could use a better seal.",
      },
    ],
  },
  // {
  //   name: "Stainless Steel Travel Mug",
  //   id: "45679",
  //   description:
  //     "A durable stainless steel travel mug with a spill-proof lid, perfect for your daily commute.",
  //   specifications:
  //     "Capacity: 20 oz, Material: Stainless Steel, Insulation: Double-wall",
  //   category: "Kitchenware",
  //   price: 19.99, // Original price
  //   discount: 10.0, // Discount percentage
  //   finalPrice: 17.99, // Final price after discount (19.99 - 10% = 17.99)
  //   stock: 85, // Stock available
  //   stockAvailable: true, // True if stock > 0
  //   salesThisMonth: 45, // Random data for sales in the current month
  //   totalRevenue: 809.55, // Sales this month * Final price (45 * 17.99 = 809.55)
  //   image: travelMug,
  //   costPrice: 9.0, // Cost price per unit
  //   shippingOptions: "Standard, Expedited",
  //   handlingTime: "1-3 business days",
  //   variants: [{ size: "20 oz", color: "Silver", sku: "SS-MUG-20OZ" }],
  //   reviews: [
  //     {
  //       user: "Anna Smith",
  //       image: "https://img.icons8.com/papercut/100/user-female-circle.png",
  //       rating: 5,
  //       comment:
  //         "Keeps my drinks hot for hours, and it's easy to carry around!",
  //     },
  //     {
  //       user: "John Doe",
  //       image: "https://img.icons8.com/papercut/100/user-male-circle.png",
  //       rating: 4,
  //       comment: "Great product, but the lid can be a bit tricky.",
  //     },
  //   ],
  // },
  // {
  //   name: "Ceramic Coffee Mug",
  //   id: "45680",
  //   description:
  //     "A classic ceramic coffee mug with a smooth finish, perfect for morning coffee or tea.",
  //   specifications: "Capacity: 12 oz, Material: Ceramic, Finish: Glossy",
  //   category: "Kitchenware",
  //   price: 9.99, // Original price
  //   discount: 15.0, // Discount percentage
  //   finalPrice: 8.49, // Final price after discount (9.99 - 15% = 8.49)
  //   stock: 200, // Stock available
  //   stockAvailable: true, // True if stock > 0
  //   salesThisMonth: 60, // Random data for sales in the current month
  //   totalRevenue: 509.4, // Sales this month * Final price (60 * 8.49 = 509.40)
  //   image: "ceramicMug",
  //   costPrice: 4.0, // Cost price per unit
  //   shippingOptions: "Standard, Express",
  //   handlingTime: "2-4 business days",
  //   variants: [{ size: "12 oz", color: "White", sku: "CERAMIC-MUG-12OZ" }],
  //   reviews: [
  //     {
  //       user: "Emma Watson",
  //       image: "https://img.icons8.com/papercut/100/user-female-circle.png",
  //       rating: 5,
  //       comment: "Simple yet elegant. The perfect coffee mug for home or work.",
  //     },
  //     {
  //       user: "David Brooks",
  //       image: "https://img.icons8.com/papercut/100/user-male-circle.png",
  //       rating: 4,
  //       comment: "Solid mug, but it feels a bit light for my taste.",
  //     },
  //   ],
  // },
  // {
  //   name: "Glass Water Bottle with Silicone Sleeve",
  //   id: "45681",
  //   description:
  //     "A durable glass water bottle with a protective silicone sleeve, ideal for staying hydrated on the go.",
  //   specifications: "Capacity: 18 oz, Material: Glass, Silicone, BPA-Free",
  //   category: "Fitness Gear",
  //   price: 29.99, // Original price
  //   discount: 20.0, // Discount percentage
  //   finalPrice: 23.99, // Final price after discount (29.99 - 20% = 23.99)
  //   stock: 50, // Stock available
  //   stockAvailable: true, // True if stock > 0
  //   salesThisMonth: 25, // Random data for sales in the current month
  //   totalRevenue: 599.75, // Sales this month * Final price (25 * 23.99 = 599.75)
  //   image: "glassBottle",
  //   costPrice: 15.0, // Cost price per unit
  //   shippingOptions: "Eco-Shipping, Standard",
  //   handlingTime: "2-5 business days",
  //   variants: [
  //     {
  //       size: "18 oz",
  //       color: "Clear with Blue Sleeve",
  //       sku: "GLASS-BOTTLE-18OZ",
  //     },
  //   ],
  //   reviews: [
  //     {
  //       user: "Sophia Johnson",
  //       image: "https://img.icons8.com/papercut/100/user-female-circle.png",
  //       rating: 5,
  //       comment: "Eco-friendly and stylish. Love the silicone grip!",
  //     },
  //     {
  //       user: "Kevin Brown",
  //       image: "https://img.icons8.com/papercut/100/user-male-circle.png",
  //       rating: 3,
  //       comment: "Good bottle, but it’s a bit heavy for daily use.",
  //     },
  //   ],
  // },
  // {
  //   name: "Insulated Stainless Steel Lunchbox",
  //   id: "45682",
  //   description:
  //     "An insulated stainless steel lunchbox with leak-proof design, perfect for keeping your meals fresh.",
  //   specifications:
  //     "Capacity: 32 oz, Material: Stainless Steel, Insulation: Double-wall",
  //   category: "Kitchenware",
  //   price: 34.99, // Original price
  //   discount: 7.5, // Discount percentage
  //   finalPrice: 32.37, // Final price after discount (34.99 - 7.5% = 32.37)
  //   stock: 70, // Stock available
  //   stockAvailable: true, // True if stock > 0
  //   salesThisMonth: 40, // Random data for sales in the current month
  //   totalRevenue: 1294.8, // Sales this month * Final price (40 * 32.37 = 1294.80)
  //   image: "steelLunchbox",
  //   costPrice: 18.0, // Cost price per unit
  //   shippingOptions: "Standard, Eco-Shipping",
  //   handlingTime: "2-4 business days",
  //   variants: [
  //     { size: "32 oz", color: "Brushed Steel", sku: "STEEL-LUNCHBOX-32OZ" },
  //   ],
  //   reviews: [
  //     {
  //       user: "Olivia Martinez",
  //       image: "https://img.icons8.com/papercut/100/user-female-circle.png",
  //       rating: 5,
  //       comment: "Keeps my lunch fresh and warm! Highly recommended.",
  //     },
  //     {
  //       user: "James Lee",
  //       image: "https://img.icons8.com/papercut/100/user-male-circle.png",
  //       rating: 4,
  //       comment: "Great lunchbox, but wish it had a bit more space.",
  //     },
  //   ],
  // },
];


//order-page
 export  const ordersData = [
  {
    orderNumber: "#12352",
    date: "2024-09-07",
    status: "Delivered",
    customer: "David Wilson",
    email: "david.wilson@email.com",
    totalAmount: "$299.00",
    products: [
      { name: "Laptop Stand", quantity: 1, price: "$50.00", image: stand },
      { name: "Noise-Canceling Earbuds", quantity: 1, price: "$99.00", image: buds },
      { name: "Portable Speaker", quantity: 1, price: "$150.00", image: speaker },
    ],
    shippingAddress: "432 Aspen Lane, City, State, 65432, Country",
    trackingInfo: "Carrier: USPS, Tracking Number: 6789012345",
  },
  {
    orderNumber: "#12353",
    date: "2024-09-06",
    status: "Shipped",
    customer: "Olivia Martinez",
    email: "olivia.martinez@email.com",
    totalAmount: "$49.99",
    products: [
      { name: "Wireless Earbuds", quantity: 1, price: "$49.99", image: buds },
    ],
    shippingAddress: "123 Maple Avenue, City, State, 98765, Country",
    trackingInfo: "Carrier: DHL, Tracking Number: 7890123456",
  },
  {
    orderNumber: "#12354",
    date: "2024-09-05",
    status: "Cancelled",
    customer: "Henry Miller",
    email: "henry.miller@email.com",
    totalAmount: "$90.00",
    products: [
      { name: "Smart Lamp", quantity: 1, price: "$90.00", image: lamp },
    ],
    shippingAddress: "789 Cherry Street, City, State, 34567, Country",
    trackingInfo: "No tracking info (Cancelled)",
  },
  {
    orderNumber: "#12355",
    date: "2024-09-04",
    status: "Processing",
    customer: "Sophia Hernandez",
    email: "sophia.hernandez@email.com",
    totalAmount: "$210.00",
    products: [
      { name: "Tablet", quantity: 1, price: "$180.00", image: tablet },
      { name: "Tablet Cover", quantity: 1, price: "$30.00", image: cover },
    ],
    shippingAddress: "345 Walnut Road, City, State, 98765, Country",
    trackingInfo: "Carrier: FedEx, Tracking Number: 8901234567",
  },
  {
    orderNumber: "#12356",
    date: "2024-09-03",
    status: "Delivered",
    customer: "William Scott",
    email: "william.scott@email.com",
    totalAmount: "$120.00",
    products: [
      { name: "Gaming Controller", quantity: 2, price: "$60.00", image: controller },
    ],
    shippingAddress: "567 Chestnut Avenue, City, State, 67890, Country",
    trackingInfo: "Carrier: UPS, Tracking Number: 9012345678",
  },
  {
    orderNumber: "#12357",
    date: "2024-09-02",
    status: "Shipped",
    customer: "Ava Thompson",
    email: "ava.thompson@email.com",
    totalAmount: "$99.00",
    products: [
      // { name: "Streaming Stick", quantity: 1, price: "$49.00", image: streaming },
      { name: "HDMI Cable", quantity: 1, price: "$50.00", image: cable },
    ],
    shippingAddress: "890 Oak Street, City, State, 45678, Country",
    trackingInfo: "Carrier: DHL, Tracking Number: 1234567891",
  },
  {
    orderNumber: "#12358",
    date: "2024-09-01",
    status: "Processing",
    customer: "Lily Evans",
    email: "lily.evans@email.com",
    totalAmount: "$65.00",
    products: [
      { name: "Bluetooth Speaker", quantity: 1, price: "$65.00", image: speaker },
    ],
    shippingAddress: "321 Sycamore Drive, City, State, 65432, Country",
    trackingInfo: "Carrier: USPS, Tracking Number: 2345678902",
  },
  {
    orderNumber: "#12359",
    date: "2024-08-31",
    status: "Delivered",
    customer: "James Clark",
    email: "james.clark@email.com",
    totalAmount: "$350.00",
    products: [
      { name: "4K Action Camera", quantity: 1, price: "$350.00", image: camera },
    ],
    shippingAddress: "654 Pine Street, City, State, 12321, Country",
    trackingInfo: "Carrier: FedEx, Tracking Number: 3456789013",
  },
  {
    orderNumber: "#12360",
    date: "2024-08-30",
    status: "Cancelled",
    customer: "Ethan Walker",
    email: "ethan.walker@email.com",
    totalAmount: "$15.00",
    products: [
      { name: "USB Flash Drive", quantity: 1, price: "$15.00", image: usb },
    ],
    shippingAddress: "890 Birch Lane, City, State, 67854, Country",
    trackingInfo: "No tracking info (Cancelled)",
  },
  {
    orderNumber: "#12361",
    date: "2024-08-29",
    status: "Shipped",
    customer: "Chloe Lewis",
    email: "chloe.lewis@email.com",
    totalAmount: "$480.00",
    products: [
      { name: "Home Security Camera", quantity: 2, price: "$240.00", image: security },
    ],
    shippingAddress: "321 Cedar Lane, City, State, 78901, Country",
    trackingInfo: "Carrier: UPS, Tracking Number: 4567890124",
  },
  {
     orderNumber: "#12345",
     date: "2024-09-14",
     status: "Shipped",
     customer: "John Doe",
     email: "john.doe@gmail.com",
     totalAmount: "$120.00",
     products: [
       { name: "UltraHD TV", quantity: 1, price: "$60.00", image: tv },
       {
         name: "Bluetooth Headphones",
         quantity: 2,
         price: "$30.00",
         image: headphone,
       },
     ],
     shippingAddress: "1234 Elm Street, City, State, 12345, Country",
     trackingInfo: "Carrier: FedEx, Tracking Number: 1234567890",
   },
   {
     orderNumber: "#12346",
     date: "2024-09-13",
     status: "Processing",
     customer: "Jane Smith",
     email: "jane.smith@email.com",
     totalAmount: "$89.00",
     products: [
       {
         name: "Smartphone Charger",
         quantity: 1,
         price: "$25.00",
         image: charger,
       },
       { name: "Wireless Mouse", quantity: 1, price: "$64.00", image: mouse },
     ],
     shippingAddress: "5678 Oak Street, City, State, 67890, Country",
     trackingInfo: "Carrier: UPS, Tracking Number: 0987654321",
   },
   {
     orderNumber: "#12347",
     date: "2024-09-12",
     status: "Delivered",
     customer: "Alice Johnson",
     email: "alice.johnson@email.com",
     totalAmount: "$230.00",
     products: [
       { name: "Gaming Laptop", quantity: 1, price: "$150.00", image: laptop },
       {
         name: "Mechanical Keyboard",
         quantity: 1,
         price: "$70.00",
         image: keyboard,
       },
       { name: "Gaming Mouse", quantity: 1, price: "$10.00", image: gmouse },
     ],
     shippingAddress: "789 Pine Avenue, City, State, 12346, Country",
     trackingInfo: "Carrier: DHL, Tracking Number: 2345678901",
   },
   {
     orderNumber: "#12348",
     date: "2024-09-11",
     status: "Cancelled",
     customer: "Bob Lee",
     email: "bob.lee@email.com",
     totalAmount: "$45.00",
     products: [
       {
         name: "Portable Power Bank",
         quantity: 1,
         price: "$45.00",
         image: powerbank,
       },
     ],
     shippingAddress: "432 Willow Road, City, State, 98765, Country",
     trackingInfo: "No tracking info (Cancelled)",
   },
   {
     orderNumber: "#12349",
     date: "2024-09-10",
     status: "Shipped",
     customer: "Michael Brown",
     email: "michael.brown@email.com",
     totalAmount: "$340.00",
     products: [
       { name: "4K Monitor", quantity: 1, price: "$250.00", image: tv },
       {
         name: "Wireless Keyboard",
         quantity: 1,
         price: "$60.00",
         image: keyboard,
       },
       { name: "USB Hub", quantity: 1, price: "$30.00" },
     ],
     shippingAddress: "567 Maple Lane, City, State, 54321, Country",
     trackingInfo: "Carrier: USPS, Tracking Number: 3456789012",
   },
   {
     orderNumber: "#12350",
     date: "2024-09-09",
     status: "Processing",
     customer: "Sara Davis",
     email: "sara.davis@email.com",
     totalAmount: "$160.00",
     products: [
       { name: "Smartwatch", quantity: 2, price: "$60.00", image: watch },
       { name: "Fitness Tracker", quantity: 1, price: "$40.00", image: fit },
     ],
     shippingAddress: "654 Cedar Street, City, State, 54322, Country",
     trackingInfo: "Carrier: UPS, Tracking Number: 4567890123",
   },
   {
     orderNumber: "#12351",
     date: "2024-09-08",
     status: "Delivered",
     customer: "Emily Clark",
     email: "emily.clark@email.com",
     totalAmount: "$78.00",
     products: [
       {
         name: "Noise-Canceling Headphones",
         quantity: 1,
         price: "$78.00",
         image: headphone,
       },
     ],
     shippingAddress: "321 Birch Drive, City, State, 43210, Country",
     trackingInfo: "Carrier: FedEx, Tracking Number: 5678901234",
   },
 ];

 
//recent-orders
export const recentOrder = [
  {
    id: 1,
    name: "Wireless Earbuds",
    unitsSold: 140,
    revenue: "$3,500",
    image: buds,
  },
  {
    id: 2,
    name: "Smartwatch X200",
    unitsSold: 120,
    revenue: "$4,800",
    image: watch,
  },
  {
    id: 3,
    name: "Bluetooth Speaker S10",
    unitsSold: 100,
    revenue: "$2,500",
    image: speaker,
  },
  {
    id: 4,
    name: "Fitness Tracker Pro",
    unitsSold: 95,
    revenue: "$2,850",
    image: fit,
  },
  {
    id: 5,
    name: "Noise Cancelling Headphones",
    unitsSold: 90,
    revenue: "$2,700",
    image: headphone,
  },
];


// Chart Data
export const chartData = {
  daily: [
    { date: "01-09-24", sales: 100 },
    { date: "02-09-24", sales: 150 },
    { date: "03-09-24", sales: 130 },
    { date: "04-09-24", sales: 170 },
    { date: "05-09-24", sales: 120 },
    { date: "06-09-24", sales: 160 },
    { date: "07-09-24", sales: 180 },
  ],
  weekly: [
    { date: "Week 1", sales: 700 },
    { date: "Week 2", sales: 850 },
    { date: "Week 3", sales: 780 },
    { date: "Week 4", sales: 900 },
    { date: "Week 5", sales: 760 },
    { date: "Week 6", sales: 820 },
    { date: "Week 7", sales: 840 },
  ],
  monthly: [
    { date: "Jan", sales: 2800 },
    { date: "Feb", sales: 3100 },
    { date: "Mar", sales: 3000 },
    { date: "Apr", sales: 3200 },
    { date: "May", sales: 2900 },
    { date: "Jun", sales: 3100 },
    { date: "Jul", sales: 3050 },
  ],
};

// Top Selling Products Data
export const topSellingProductsData = {
  daily: [
    { product: "Wireless Earbuds", unitsSold: 140 },
    { product: "Smartwatch X200", unitsSold: 120 },
    { product: "Bluetooth Speaker S10", unitsSold: 100 },
    { product: "Fitness Tracker Pro", unitsSold: 95 },
    { product: "Noise Cancelling Headphones", unitsSold: 90 },
  ],
  weekly: [
    { product: "Wireless Earbuds", unitsSold: 1000 },
    { product: "Smartwatch X200", unitsSold: 900 },
    { product: "Bluetooth Speaker S10", unitsSold: 800 },
    { product: "Fitness Tracker Pro", unitsSold: 750 },
    { product: "Noise Cancelling Headphones", unitsSold: 700 },
  ],
  monthly: [
    { product: "Wireless Earbuds", unitsSold: 4000 },
    { product: "Smartwatch X200", unitsSold: 3600 },
    { product: "Bluetooth Speaker S10", unitsSold: 3200 },
    { product: "Fitness Tracker Pro", unitsSold: 3000 },
    { product: "Headphones(NC)", unitsSold: 2700 },
  ],
};

// Sales By Category Data
export const salesByCategoryData = {
  daily: [
    { category: "Electronics", sales: 280 },
    { category: "Wearable Tech", sales: 150 },
    { category: "Home Accessories", sales: 110 },
    { category: "Sports Equipment", sales: 90 },
    { category: "Beauty & Health", sales: 50 },
  ],
  weekly: [
    { category: "Electronics", sales: 2000 },
    { category: "Wearable Tech", sales: 2300 },
    { category: "Home Accessories", sales: 1000 },
    { category: "Sports Equipment", sales: 800 },
    { category: "Beauty & Health", sales: 500 },
  ],
  monthly: [
    { category: "Electronics", sales: 8000 },
    { category: "Wearable Tech", sales: 5200 },
    { category: "Home Accessories", sales: 12000 },
    { category: "Sports Equipment", sales: 3500 },
    { category: "Beauty & Health", sales: 2000 },
  ],
};

// Recent Orders Data
export const orders = [
  {
    id: 1,
    name: "Wireless Earbuds",
    unitsSold: 140,
    revenue: "$3,500",
    image: "buds.png", // Update image paths if needed
  },
  {
    id: 2,
    name: "Smartwatch X200",
    unitsSold: 120,
    revenue: "$4,800",
    image: "watch.png",
  },
  {
    id: 3,
    name: "Bluetooth Speaker S10",
    unitsSold: 100,
    revenue: "$2,500",
    image: "speaker.png",
  },
  {
    id: 4,
    name: "Fitness Tracker Pro",
    unitsSold: 95,
    revenue: "$2,850",
    image: "fit.png",
  },
  {
    id: 5,
    name: "Noise Cancelling Headphones",
    unitsSold: 90,
    revenue: "$2,700",
    image: "headphone.png",
  },
];

// Revenue by Product Data
export const revenueByProductData = {
  daily: [
    { product: "Wireless Earbuds", revenue: 3500, unitsSold: 140 },
    { product: "Smartwatch X200", revenue: 4800, unitsSold: 120 },
    { product: "Bluetooth Speaker S10", revenue: 2500, unitsSold: 100 },
    { product: "Fitness Tracker Pro", revenue: 2850, unitsSold: 95 },
    { product: "Noise Cancelling Headphones", revenue: 2700, unitsSold: 90 },
  ],
  weekly: [
    { product: "Wireless Earbuds", revenue: 24500, unitsSold: 140 },
    { product: "Smartwatch X200", revenue: 33500, unitsSold: 120 },
    { product: "Bluetooth Speaker S10", revenue: 17500, unitsSold: 100 },
    { product: "Fitness Tracker Pro", revenue: 19900, unitsSold: 95 },
    { product: "Noise Cancelling Headphones", revenue: 18900, unitsSold: 90 },
  ],
  monthly: [
    { product: "Wireless Earbuds", revenue: 98000, unitsSold: 140 },
    { product: "Smartwatch X200", revenue: 134000, unitsSold: 120 },
    { product: "Bluetooth Speaker S10", revenue: 70000, unitsSold: 100 },
    { product: "Fitness Tracker Pro", revenue: 79600, unitsSold: 95 },
    { product: "Noise Cancelling Headphones", revenue: 75600, unitsSold: 90 },
  ],
};

//product




//customer 

const customers = [
  {
    id: "CUST001",
    name: "John Doe",
    email: "john.doe@email.com",
    phoneNumber: "+1 (555) 1234",
    totalPurchases: 15,
    lastPurchaseDate: "2024-09-01",
    rating: 4.5,
    review:
      "The products were fantastic and the customer service was very responsive. Delivery could be faster, but overall, great experience!",
  },
  {
    id: "CUST002",
    name: "Jane Smith",
    email: "jane.smith@email.com",
    phoneNumber: "+1 (555) 5678",
    totalPurchases: 8,
    lastPurchaseDate: "2024-08-28",
    rating: 3.0,
    review:
      "The items arrived slightly damaged. Customer support was helpful, but the overall experience wasn’t as smooth as I expected.",
  },
  {
    id: "CUST003",
    name: "Michael Johnson",
    email: "michael.j@email.com",
    phoneNumber: "+1 (555) 9876",
    totalPurchases: 22,
    lastPurchaseDate: "2024-09-10",
    rating: 5.0,
    review:
      "This is my go-to store for all my shopping needs. Excellent quality and consistent service.",
  },
  {
    id: "CUST004",
    name: "Emily Davis",
    email: "emily.davis@email.com",
    phoneNumber: "+1 (555) 5432",
    totalPurchases: 12,
    lastPurchaseDate: "2024-08-30",
    rating: 4.0,
    review:
      "Great selection of products and fair prices. Delivery was a bit slow, but I'll definitely purchase again.",
  },
  {
    id: "CUST005",
    name: "Chris Brown",
    email: "chris.brown@email.com",
    phoneNumber: "+1 (555) 2468",
    totalPurchases: 5,
    lastPurchaseDate: "2024-09-03",
    rating: 2.5,
    review:
      "I was disappointed with the product quality. It didn't meet the expectations based on the description.",
  },
];

const customerSegments = [
  {
    segment: "Frequent Buyers",
    criteria: "10+ Purchases",
    numberOfCustomers: 25,
  },
  {
    segment: "New Customers",
    criteria: "First Purchase in the last 30 days",
    numberOfCustomers: 15,
  },
  {
    segment: "High-Spenders",
    criteria: "Total Spend > $1000",
    numberOfCustomers: 10,
  },
  {
    segment: "Low-Engagement",
    criteria: "No Purchases in last 90 days",
    numberOfCustomers: 50,
  },
  {
    segment: "Subscribed to Newsletter",
    criteria: "Opted for Marketing Emails",
    numberOfCustomers: 120,
  },
];

const customerFeedback = [
  {
    id: "CUST001",
    name: "John Doe",
    rating: 4.5,
    review:
      "The products were fantastic and the customer service was very responsive. Delivery could be faster, but overall, great experience!",
    date: "2024-09-01",
  },
  {
    id: "CUST002",
    name: "Jane Smith",
    rating: 3.0,
    review:
      "The items arrived slightly damaged. Customer support was helpful, but the overall experience wasn’t as smooth as I expected.",
    date: "2024-08-29",
  },
  {
    id: "CUST003",
    name: "Michael Johnson",
    rating: 5.0,
    review:
      "This is my go-to store for all my shopping needs. Excellent quality and consistent service.",
    date: "2024-09-10",
  },
  {
    id: "CUST004",
    name: "Emily Davis",
    rating: 4.0,
    review:
      "Great selection of products and fair prices. Delivery was a bit slow, but I'll definitely purchase again.",
    date: "2024-09-02",
  },
  {
    id: "CUST005",
    name: "Chris Brown",
    rating: 2.5,
    review:
      "I was disappointed with the product quality. It didn't meet the expectations based on the description.",
    date: "2024-09-04",
  },
];

export { customers, customerSegments, customerFeedback };

// import saleschart from './components/SalesTrendChart';


