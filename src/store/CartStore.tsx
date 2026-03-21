import {
  createContext,
  useState,
  useEffect,
  useContext,
  type ReactNode,
  useMemo,
} from "react";

interface Product {
  id: number;
  images: string;
  title: string;
  price: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  totalCount: number;
  addToCart: (product: Product) => void;
  removeCart: (id: number) => void;
  updateQuantity: (id: number, delta: number) => void;
}
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cartItems");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // Sync to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      //   const updatedCart = prev.map((item) =>
      //     item.id === product.id
      //       ? { ...item, quantity: item.quantity + 1 }
      //       : item,
      //   );
      //   setCartItems(updatedCart);
      // } else {
      //   setCartItems([...cartItems, { ...product, quantity: 1 }]);
      // }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta),
            }
          : item,
      ),
    );
  };

  const totalCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const value = useMemo(
    () => ({
      cartItems,
      totalCount,
      addToCart,
      removeCart,
      updateQuantity,
    }),
    [cartItems, totalCount],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
