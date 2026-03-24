import {
  Facebook,
  Globe,
  Heart,
  Instagram,
  Minus,
  Plus,
  Star,
  Twitter,
} from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useWishlist } from "@/store/WishlistStore";
import { useCart } from "@/store/CartStore";
import { useState } from "react";
import { Badge } from "../ui/badge";

export default function ProductDetailCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeWishlist, isWishlisted } = useWishlist();
  const [localQty, setLocalQty] = useState(1);

  const inWishlist = isWishlisted(product.id);

  const handleWishlist = () => {
    if (inWishlist) {
      removeWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const rating = product.rating;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center md:place-content-evenly">
        <img
          src={product.images}
          alt={product.title}
          className="w-2xs md:w-full h-2xs md:h-auto object-contain"
        />

        <div className="space-y-2 md:space-y-4 items-center">
          <div className="flex justify-between items-center gap-2">
            <div className="text-xl md:text-3xl font-semibold">
              {product.title}
            </div>
            <Badge className="bg-accent text-primary">
              {product.availabilityStatus}
            </Badge>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, index) => {
              if (index < Math.floor(rating)) {
                return (
                  <Star
                    key={index}
                    size={10}
                    className="fill-chart-5 text-chart-5"
                  />
                );
              } else if (index < rating) {
                return (
                  <Star
                    key={index}
                    size={10}
                    className="fill-chart-5/50 text-chart-5/50"
                  />
                );
              } else {
                return (
                  <Star
                    key={index}
                    size={10}
                    className="fill-neutral-300 text-neutral-300"
                  />
                );
              }
            })}
          </div>
          <div className="flex gap-2 items-center">
            <p className="font-medium text-base md:text-xl text-secondary-foreground">
              ${product.price}
            </p>
            <p className="text-secondary text-xs font-medium bg-muted rounded-full px-2">
              {product.discountPercentage}%
            </p>
          </div>

          <div className="flex justify-between text-sm md:text-base items-center border-t border-neutral-600 mt-2 md:mt-4 pt-2 md:pt-4">
            <div className="flex gap-2 font-semibold items-center">
              Brand:{" "}
              <p className="font-normal text-xs md:text-sm">{product.brand}</p>
            </div>
            <div className="flex justify-between font-semibold">
              Share:
              <div className="w-5 h-5 hover:bg-primary rounded-full flex items-center justify-center p-1">
                <Facebook
                  size={20}
                  className="text-neutral-500 hover:text-white"
                />
              </div>
              <div className="w-5 h-5 hover:bg-primary rounded-full flex items-center justify-center p-1">
                <Twitter
                  size={20}
                  className="text-neutral-500 hover:text-white"
                />
              </div>
              <div className="w-5 h-5 hover:bg-primary rounded-full flex items-center justify-center p-1">
                <Instagram
                  size={20}
                  className="text-neutral-500 hover:text-white"
                />
              </div>
              <div className="w-5 h-5 hover:bg-primary rounded-full flex items-center justify-center p-1">
                <Globe
                  size={20}
                  className="text-neutral-500 hover:text-white"
                />
              </div>
            </div>
          </div>
          <p className="text-xs/5 md:text-sm/6 text-neutral-400">
            {product.description}
          </p>

          <div className="grid grid-cols-5 place-content-center items-center gap-4 border-t border-neutral-600 mt-2 md:mt-4 pt-2 md:pt-4">
            {/* Button */}
            <div className="border border-muted rounded-full text-primary text-sm py-1 my-2 items-center">
              <div className="flex justify-between items-center px-1">
                <button
                  onClick={() => setLocalQty((prev) => Math.max(1, prev - 1))}
                  className="rounded-full bg-muted hover:bg-secondary-foreground text-secondary-foreground hover:text-white p-1"
                >
                  <Minus className="h-2 md:h-4 w-2 md:w-4" />
                </button>
                {/* <div>{product.quantity}</div> */}
                <div>{localQty}</div>
                <button
                  onClick={() => setLocalQty((prev) => prev + 1)}
                  className="rounded-full bg-muted hover:bg-secondary-foreground text-secondary-foreground hover:text-white p-1"
                >
                  <Plus className="h-2 md:h-4 w-2 md:w-4" />
                </button>
              </div>
            </div>

            <Button
              className="rounded-full px-2 md:px-4 text-xs md:text-sm col-span-3"
              onClick={() => {
                for (let i = 0; i < localQty; i++) addToCart(product);
                toast.success("Added to Cart", {
                  position: "top-center",
                });
              }}
            >
              <div>Add to Cart</div>
            </Button>

            <button
              onClick={handleWishlist}
              className="justify-self-end bg-muted hover:bg-primary text-primary hover:text-white rounded-full h-8 w-8 p-1"
            >
              {inWishlist ? (
                <Heart strokeWidth={0} fill="#c71a5f" />
              ) : (
                <Heart strokeWidth={1} />
              )}
            </button>
          </div>

          <div className="border-t border-neutral-600 mt-2 md:mt-4 pt-2 md:pt-4 text-xs md:text-sm">
            <div className="flex gap-2 font-medium">
              Category:{" "}
              <p className="text-neutral-400 font-normal">{product.category}</p>
            </div>
            <div className="flex gap-2 font-medium pt-2 md:pt-4">
              Tags:{" "}
              <p className="text-neutral-400 font-normal">
                {Array.isArray(product.tags)
                  ? product.tags.join(", ")
                  : product.tags}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
