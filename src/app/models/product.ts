import { StringLiteralLike } from 'typescript';

export interface Product {
  id: number;
  title: string;
  image: string;
  images: string[];
  imageType: string;
  breadcrumbs: string[];
  badges: string[];
  importantBadges: string[];
  price: number;
  brand: string;
  description: string;
  ingredientList: string;
  servings: any;
  aisle: any;
  likes: number;
  ingredients: any[];
  ingredientCount: number;
  nutrition: any;
  upc: string;
  spoonacularScore: number;
  generatedText: string;
  added: boolean;
}
