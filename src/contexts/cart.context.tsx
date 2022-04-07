import {
  FC,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

interface ProductData {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface CartItem extends ProductData {
  quantity: number;
}

interface CartContextType {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  cartItems: CartItem[];
  removeItemFromCart: (product: ProductData) => void;
  clearItemFromCart: (product: ProductData) => void;
  addItemToCart: (product: ProductData) => void;
  cartCount: number;
  cartTotal: number;
}

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

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  removeItemFromCart: (product: ProductData) => null,
  addItemToCart: (product: ProductData) => null,
  clearItemFromCart: () => null,
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider: FC<{}> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (product: ProductData) => {
    setCartItems((cartItem) => addCartItem(cartItem, product));
  };

  const removeItemFromCart = (product: ProductData) => {
    setCartItems((cartItem) => removeCartItem(cartItem, product));
  };

  const clearItemFromCart = (product: ProductData) => {
    setCartItems((cartItem) => clearCarrtItem(cartItem, product));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    removeItemFromCart,
    clearItemFromCart,
    addItemToCart,
    cartCount,
    cartTotal,
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
