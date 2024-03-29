import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { categories } from "./data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getImage(objectName: string, objectType: string): string {
  if(objectType === "cat"){
    const category = categories.find(cat => cat.category_name.toLowerCase() === objectName.toLowerCase());
    return category ? category.imgUrl : "/mens.jpg";
  }
  return "";
  
}