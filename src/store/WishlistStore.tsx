import {
  createContext,
  useState,
  useContext,
  type ReactNode,
  useEffect,
  useMemo,
} from "react";

interface Product {
  id: number;
  images: string;
  title: string;
  price: string;
}

interface WishlistItem extends Product {
  quantity: number;
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  totalCount: number;
  addToWishlist: (product: Product) => void;
  removeWishlist: (id: number) => void;
  isWishlisted: (id: number) => boolean;
}
const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined,
);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("wishlist");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // Sync to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product: Product) => {
    // if (!wishlist.find((item) => item.id === product.id)) {
    //   setWishlist((prev) => [...prev, product]);
    // }
    setWishlist((prev) => {
      const existingItem = wishlist.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const isWishlisted = (id: number): boolean => {
    // Defensive check: only call .some() if wishlist exists
    return wishlist?.some((item) => item.id === id) || false;
  };
  const totalCount = wishlist.reduce((total, item) => total + item.quantity, 0);

  const removeWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };
  const value = useMemo(
    () => ({
      wishlist,
      totalCount,
      addToWishlist,
      removeWishlist,
      isWishlisted,
    }),
    [wishlist, totalCount],
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error(
      "useWishlist must be used within a WishlistContextProvider",
    );
  }
  return context;
};
