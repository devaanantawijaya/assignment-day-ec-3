export interface Menu {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  ingredients: string[];
  price: number | null;
  priceDiscount: number | null;
  rating: number;
  totalLikes: number;
}

export interface MenuArr {
  data: Menu[];
}

export interface MenuDetail {
  detail: Menu;
}
