import {
  Facebook,
  Globe,
  Heart,
  Instagram,
  Minus,
  Plus,
  Twitter,
} from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useWishlist } from "@/store/WishlistStore";
import { useCart } from "@/store/CartStore";

export default function ProductDetailCard({ product }: ProductCardProps) {
  const { addToCart, updateQuantity } = useCart();
  const { addToWishlist, removeWishlist, isWishlisted } = useWishlist();

  const inWishlist = isWishlisted(product.id);

  const handleWishlist = () => {
    if (inWishlist) {
      removeWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="min-w-6xl">
      <div className="grid grid-cols-2">
        <img src={product.images} alt="image" className="" />

        <div className="space-y-2 items-center">
          <div className="flex justify-between items-center gap-2">
            <div className="text-2xl font-semibold">{product.title}</div>
            <div className="bg-accent rounded-full text-primary text-xs text-center px-2">
              In Stock
            </div>
          </div>
          <div>Review</div>
          <div className="flex gap-2 items-center">
            <p className="font-medium text-secondary-foreground">${product.price}</p>
            <p className="text-secondary text-sm bg-muted rounded-full px-2">{product.discountPercentage}%</p>
          </div>

          <div className="grid grid-cols-3 items-center border-t border-neutral-600 mt-4 pt-4">
            <div className="col-span-2">Brand: {product.brand}</div>
            <div className="flex justify-between">
                Share:
              <div className="w-6 h-6 hover:bg-primary rounded-full flex items-center justify-center p-1">
                <Facebook
                  size={20}
                  className="text-neutral-500 hover:text-white"
                />
              </div>
              <div className="w-6 h-6 hover:bg-primary rounded-full flex items-center justify-center p-1">
                <Twitter
                  size={20}
                  className="text-neutral-500 hover:text-white"
                />
              </div>
              <div className="w-6 h-6 hover:bg-primary rounded-full flex items-center justify-center p-1">
                <Instagram
                  size={20}
                  className="text-neutral-500 hover:text-white"
                />
              </div>
              <div className="w-6 h-6 hover:bg-primary rounded-full flex items-center justify-center p-1">
                <Globe
                  size={20}
                  className="text-neutral-500 hover:text-white"
                />
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral-600">{product.description}</p>

          <div className="grid grid-cols-5 items-center gap-4 border-t border-neutral-600 mt-4 pt-4">
            {/* Button */}
            <div className="border border-muted rounded-full text-primary text-sm py-1 my-4 items-center">
              <div className="flex justify-between px-1">
                <button
                  onClick={() => updateQuantity(product.id, -1)}
                  className="rounded-full bg-muted hover:bg-secondary-foreground text-secondary-foreground hover:text-white p-1"
                >
                  <Minus className="h-2 md:h-4 w-2 md:w-4" />
                </button>
                {/* <div>{product.quantity}</div> */}
                 <div>1</div>
                <button
                  onClick={() => updateQuantity(product.id, 1)}
                  className="rounded-full bg-muted hover:bg-secondary-foreground text-secondary-foreground hover:text-white p-1"
                >
                  <Plus className="h-2 md:h-4 w-2 md:w-4" />
                </button>
              </div>
            </div>

            <Button
              className="rounded-full px-2 md:px-4 text-xs md:text-sm col-span-3"
              onClick={() => {
                addToCart(product);
                toast.success("Added to Cart", {
                  position: "top-center",
                });
              }}
            >
              <div>Add to Cart</div>
            </Button>

            <button
              onClick={handleWishlist}
              className="bg-muted hover:bg-primary text-primary hover:text-white rounded-full h-8 md:h-10 w-8 md:w-10 p-1 md:p-2"
            >
              {inWishlist ? (
                <Heart strokeWidth={0} fill="#c71a5f" />
              ) : (
                <Heart strokeWidth={1} />
              )}
            </button>
          </div>

          <div className="border-t border-neutral-600 mt-4 pt-4">
            <div className="flex gap-2 font-medium">Category: <p className="text-neutral-400 font-normal">{product.category}</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
