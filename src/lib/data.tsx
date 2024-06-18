import { Category } from "./types/category";
import { Product } from "./types/product";
import { project } from "./types/project";

export const categories: Category[] = [
    {
        category_name: "electronics",
        imgUrl: "/jewelary.jpg"
    },
    {
        category_name: "jewelry",
        imgUrl: "/mens.jpg"
    },
    {
        category_name: "men's clothing",
        imgUrl: "/jewelary.jpg"
    },
    {
        category_name: "women's clothing",
        imgUrl: "/mens.jpg"
    }
]

export const products: Product[] = [
  {
      id: 1,
      title: "Smartphone",
      price: 299.99,
      description: "A high-quality smartphone with a stunning display and fast performance.",
      category: "electronics",
      image: "/jewelary.jpg",
      rating: {
          rate: 4.5,
          count: 120
      }
  },
  {
      id: 2,
      title: "Diamond Necklace",
      price: 999.99,
      description: "A beautiful diamond necklace that adds elegance to any outfit.",
      category: "jewelry",
      image: "/jewelary.jpg",
      rating: {
          rate: 4.8,
          count: 80
      }
  },
  {
      id: 3,
      title: "Men's T-Shirt",
      price: 19.99,
      description: "A comfortable and stylish men's t-shirt made from high-quality materials.",
      category: "men's clothing",
      image: "/jewelary.jpg",
      rating: {
          rate: 4.2,
          count: 200
      }
  },
  {
      id: 4,
      title: "Women's Dress",
      price: 49.99,
      description: "A fashionable women's dress perfect for any occasion.",
      category: "women's clothing",
      image: "/jewelary.jpg",
      rating: {
          rate: 4.6,
          count: 150
      }
  }
];

export const dvtSkills = [
  "NextJS",
  "ReactJS",
  "TypeScript",
  "JavaScript",
  "Tailwind",
]


export const projetcs: project[] = [
  {
    name: 'DVT senior role Challenge',
    webisite: '/dashboard',
    github: 'https://github.com/2280727/DVT-senior-role-challenge',
    stack: dvtSkills,
  },
]

export const footerData = {
    "Shop": [
      "Daily Deals",
      "App Only Deals",
      "Clearance Sale",
      "Gift Vouchers",
      "Takealot.group",
      "Superbalist.com",
      "Mr D"
    ],
    "Help": [
      "Help Centre",
      "Contact Us",
      "Submit an Idea",
      "Suggest a Product",
      "Shipping & Delivery",
      "Takealot Pickup Points",
      "Returns"
    ],
    "Company": [
      "About Us",
      "Careers",
      "Sell on Takealot",
      "Deliver for Takealot",
      "Press & News",
      "Competitions",
      "Terms & Conditions",
      "Privacy Policy",
      "Human Rights Statement",
      "Speak Up Process",
      "Code of Advertising Practice"
    ]

  }
