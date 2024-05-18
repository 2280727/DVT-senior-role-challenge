import { Category } from "./types/category";
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
