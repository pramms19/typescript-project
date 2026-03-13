import { Handbag, Star, Heart, Eye } from "lucide-react";
import { useCart } from "../store/CartStore";
import { useWishlist } from "../store/WishlistStore";
import { Card } from "./ui/card";

interface Product{
    id: number;
    images:string;
    title:string;
    price:string;
}
 interface ProductCardProps{
    product:Product
 }

export default function ProductCard({ product }:ProductCardProps) {

  const { addToCart } = useCart();
  const { addToWishlist, isWishlisted } = useWishlist();
  const active = isWishlisted(product.id);

  return (
    <Card className="group relative border border-neutral-200 hover:border-primary hover:shadow-lg hover:shadow-hover rounded-sm flex flex-col items-center p-4">
      <img src={product.images} alt="apple" className="pb-2" />
      <div className="flex gap-5 md:gap-12 justify-between items-center">
        <div>
          <div className="text-neutral-600 text-xs text-wrap">{product.title}</div>
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
          onClick={() => addToCart(product)}
          className="bg-background hover:bg-primary hover:text-white rounded-full place-content-center h-8 md:h-10 w-8 md:w-10 p-1 md:p-2"
        >
          <Handbag strokeWidth={1} />
        </button>
        <div className="absolute top-1/14 right-4 hidden group-hover:flex flex-col space-y-2">
          <button
            onClick={() => addToWishlist(product)}
            className="bg-white  hover:bg-primary hover:text-white rounded-full h-8 md:h-10 w-8 md:w-10 p-1 md:p-2"
          >
            {active ? <Heart strokeWidth={0} fill="#c71a5f" /> : <Heart strokeWidth={1} />}
          </button>

          <button className="bg-white  hover:bg-primary hover:text-white rounded-full h-8 md:h-10 w-8 md:w-10 p-1 md:p-2">
            <Eye strokeWidth={1} />
          </button>
        </div>
      </div>
    </Card>
  );
}
