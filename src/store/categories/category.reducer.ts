import { CategoriesState, CATEGORIES_ACTION_TYPES } from "./category.types";

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: {},
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action: any
): CategoriesState => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return { ...state, categories: payload };
    default:
      return state;
  }
};
