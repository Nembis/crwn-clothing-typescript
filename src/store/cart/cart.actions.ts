import {
  CartItem,
  CART_ACTION_TYPES,
  ProductData,
  SetCartItemsAction,
  SetIsCartOpoenAction,
} from "./cart.types";

const addCartItem = (cartItems: CartItem[], product: ProductData) => {
  const existInCart = cartItems.find((item) => item.id === product.id);

  if (existInCart) {
    return cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

const removeCartItem = (cartItems: CartItem[], product: ProductData) => {
  const existInCart = cartItems.find((item) => item.id === product.id);

  if (existInCart?.quantity === 1) {
    return cartItems.filter((item) => item.id !== existInCart.id);
  }

  return cartItems.map((item) =>
    item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};

const clearCarrtItem = (cartItems: CartItem[], product: ProductData) => {
  return cartItems.filter((item) => item.id !== product.id);
};

export const addItemToCart = (
  cartItems: CartItem[],
  product: ProductData
): SetCartItemsAction => {
  const newItems = addCartItem(cartItems, product);
  return {
    type: CART_ACTION_TYPES.SET_CART_ITEMS,
    payload: newItems,
  };
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  product: ProductData
): SetCartItemsAction => {
  const newItems = removeCartItem(cartItems, product);
  return {
    type: CART_ACTION_TYPES.SET_CART_ITEMS,
    payload: newItems,
  };
};

export const clearItemFromCart = (
  cartItems: CartItem[],
  product: ProductData
): SetCartItemsAction => {
  const newItems = clearCarrtItem(cartItems, product);
  return {
    type: CART_ACTION_TYPES.SET_CART_ITEMS,
    payload: newItems,
  };
};

export const setIsCartOpen = (isOpen: boolean): SetIsCartOpoenAction => ({
  type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
  payload: isOpen,
});
