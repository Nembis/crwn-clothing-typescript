export interface CategoryItems {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface CategoriesState {
  categories: {
    [key: string]: CategoryItems[];
  };
}

export interface CategoriesActions {
  type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP;
  payload: {};
}

export enum CATEGORIES_ACTION_TYPES {
  SET_CATEGORIES_MAP = "SET_CATEGORIES_MAP",
}
