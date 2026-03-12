import { createContext, useState, useContext, type ReactNode } from "react";

interface Product {
  id: number;
  images: string;
  title: string;
  price: string;
}

interface WishlistContextType {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  isWishlisted: (id: number) => boolean;
}
const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined,
);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const addToWishlist = (product: Product) => {
    if (!wishlist.find((item) => item.id === product.id)) {
      setWishlist((prev) => [...prev, product]);
    }
  };
  const isWishlisted = (id: number): boolean => {
    // Defensive check: only call .some() if wishlist exists
    return wishlist?.some((item) => item.id === id) || false;
  };
  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, isWishlisted }}>
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
