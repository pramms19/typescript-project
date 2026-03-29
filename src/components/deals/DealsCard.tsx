import { useCart } from "@/store/CartStore";
import { useWishlist } from "@/store/WishlistStore";
import { Handbag, Star, Heart, Eye } from "lucide-react";
import { Card } from "../ui/card";
import { NavLink } from "react-router-dom";

export default function DealsCard({ product }: ProductCardProps) {
  const { cartItems, addToCart, removeCart } = useCart();
  const { addToWishlist, removeWishlist, isWishlisted } = useWishlist();

  const inWishlist = isWishlisted(product.id);
  const inCart = cartItems.some((item) => item.id === product.id);

  const handleWishlist = () => {
    if (inWishlist) {
      removeWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleCart = () => {
    if (inCart) {
      removeCart(product.id);
    } else {
      addToCart(product);
    }
  };

  const rating = product.rating;

  return (
    <Card className="group relative border border-neutral-200 hover:border-primary hover:shadow-lg hover:shadow-hover rounded-sm flex items-center p-2">
      <div className="flex justify-between content-center gap-5">
        <div className="flex space-x-4 items-center">
          <NavLink to={`/products/${product.id}`}>
            <img src={product.images} alt={product.title} className="h-20" />
          </NavLink>
          <div className="block hover:hidden">
            <p className="text-neutral-600 text-xs line-clamp-1">
              {product.title}
            </p>
            <p className="text-secondary text-lg font-medium">
              {product.price}
            </p>
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
          </div>
        </div>
      </div>
      <div className="absolute hidden group-hover:block bg-background pb-2">
        <div className="flex justify-between content-center gap-5">
          <div className="flex space-x-4 items-center">
            <NavLink to={`/products/${product.id}`}>
              <img src={product.images} alt={product.title} className="h-20" />
            </NavLink>
            <div className="space-y-2 pr-4">
              <p className="text-primary text-xs line-clamp-1">
                {product.title}
              </p>
              <div className="flex justify-between gap-2">
                <button
                  onClick={handleCart}
                  className={`bg-background hover:bg-primary hover:text-white rounded-full place-content-center h-8 w-8 p-1 transition-colors ${
                    inCart
                      ? "bg-primary text-white"
                      : "bg-background hover:bg-primary hover:text-white"
                  }`}
                >
                  <Handbag strokeWidth={1} />
                </button>

                <button
                  onClick={handleWishlist}
                  className="bg-white  hover:bg-primary hover:text-white rounded-full h-8 w-8 p-1"
                >
                  {inWishlist ? (
                    <Heart strokeWidth={0} fill="#c71a5f" />
                  ) : (
                    <Heart strokeWidth={1} />
                  )}
                </button>

                <button className="bg-white  hover:bg-primary hover:text-white rounded-full h-8 w-8 p-1">
                  <Eye strokeWidth={1} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
