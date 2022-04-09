import {
  CategoriesActions,
  CategoriesState,
  CATEGORIES_ACTION_TYPES,
} from "./category.types";

export const setCategories = (
  categoriesMap: CategoriesState["categories"]
): CategoriesActions => ({
  type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP,
  payload: categoriesMap,
});
