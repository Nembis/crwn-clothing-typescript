import { State } from "../root-reducer";

export const selectCurrentUser = (state: State) => state.user.currentUser;
