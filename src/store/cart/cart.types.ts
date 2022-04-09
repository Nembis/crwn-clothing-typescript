export interface ProductData {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface CartItem extends ProductData {
  quantity: number;
}

export interface CartState {
  isCartOpen: boolean;
  cartItems: CartItem[];
}

export interface SetCartItemsAction {
  type: CART_ACTION_TYPES.SET_CART_ITEMS;
  payload: CartItem[];
}

export interface SetIsCartOpoenAction {
  type: CART_ACTION_TYPES.SET_IS_CART_OPEN;
  payload: boolean;
}

export type CartActions = SetCartItemsAction | SetIsCartOpoenAction;

export enum CART_ACTION_TYPES {
  SET_CART_ITEMS = "SET_CART_ITEMS",
  SET_IS_CART_OPEN = "SET_IS_CART_OPEN",
}
