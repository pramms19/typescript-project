import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CartProvider } from "./store/CartStore.jsx";
import { WishlistProvider } from "./store/WishlistStore.jsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <WishlistProvider>
        <App />
        <Toaster/>
      </WishlistProvider>
    </CartProvider>
  </StrictMode>,
);
