import { State } from "../root-reducer";

export const selectCategories = (state: State) => state.categories.categories;
