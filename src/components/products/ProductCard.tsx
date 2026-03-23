import { Handbag, Star, Heart, Eye } from "lucide-react";
import { Card } from "../ui/card";
import { useCart } from "@/store/CartStore";
import { useWishlist } from "@/store/WishlistStore";

export default function ProductCard({ product }: ProductCardProps) {
  const { cartItems, addToCart, removeCart } = useCart();
  const { addToWishlist, removeWishlist, isWishlisted } =
    useWishlist();

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

  return (
    <Card className="group relative border border-neutral-200 hover:border-primary hover:shadow-lg hover:shadow-hover flex flex-col items-center p-4">
      <img src={product.images} alt="apple" className="pb-2" />
      <div className="flex gap-5 md:gap-12 justify-between items-center">
        <div>
          <div className="text-neutral-600 text-xs line-clamp-1">
            {product.title}
          </div>
          <div className="text-secondary text-lg font-medium">
            {product.price}
          </div>
          <div className="flex gap-1">
            <Star size={10} className="fill-chart-5  text-chart-5" />
            <Star size={10} className="fill-chart-5  text-chart-5" />
            <Star size={10} className="fill-chart-5  text-chart-5" />
            <Star size={10} className="fill-chart-5  text-chart-5" />
            <Star size={10} className="fill-neutral-500 text-neutral-500" />
          </div>
        </div>
        <button
          onClick={handleCart}
          className={`bg-background hover:bg-primary hover:text-white rounded-full place-content-center h-8 md:h-10 w-8 md:w-10 p-1 md:p-2 transition-colors ${
            inCart
              ? "bg-primary text-white"
              : "bg-background hover:bg-primary hover:text-white"
          }`}
        >
          <Handbag strokeWidth={1} />
        </button>
        <div className="absolute top-1/14 right-4 hidden group-hover:flex flex-col space-y-2">
          <button
            onClick={handleWishlist}
            className="bg-white  hover:bg-primary hover:text-white rounded-full h-8 md:h-10 w-8 md:w-10 p-1 md:p-2"
          >
            {inWishlist ? (
              <Heart strokeWidth={0} fill="#c71a5f" />
            ) : (
              <Heart strokeWidth={1} />
            )}
          </button>

          <button className="bg-white  hover:bg-primary hover:text-white rounded-full h-8 md:h-10 w-8 md:w-10 p-1 md:p-2">
            <Eye strokeWidth={1} />
          </button>
        </div>
      </div>
    </Card>
  );
}
