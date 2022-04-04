import {
  FC,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import Data from "../shop-data.json";

type ProductData = typeof Data[0];

interface CartItem extends ProductData {
  quantity: number;
}

interface CartContextType {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  cartItems: CartItem[];
  addItemToCart: (product: ProductData) => void;
  cartCount: number;
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

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: (product: ProductData) => null,
  cartCount: 0,
});

export const CartProvider: FC<{}> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = (product: ProductData) => {
    setCartItems((cartItem) => addCartItem(cartItem, product));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
