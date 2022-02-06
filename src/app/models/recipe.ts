export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  usedIngredientCount: number;
  missedIngredientCount: number;
  missedIngredients: any[];
  usedIngredients: any[];
  unusedIngredients: any[];
  likes: number;
}
