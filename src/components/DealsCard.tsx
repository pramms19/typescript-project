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

export default function DealsCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, isWishlisted } = useWishlist();
  const active = isWishlisted(product.id);

  return (
    <Card className="group relative border border-neutral-200 hover:border-primary hover:shadow-lg hover:shadow-hover rounded-sm flex items-center p-2">
      <div className="flex justify-between content-center gap-5">
        <div className="flex space-x-4 items-center">
          <img src={product.images} alt="image" className="h-20" />
          <div className="block hover:hidden">
            <p className="text-neutral-600 text-xs line-clamp-1">{product.title}</p>
            <p className="text-secondary text-lg font-medium">
              {product.price}
            </p>
            <div className="flex gap-1">
              <Star size={10} className="fill-chart-5" strokeWidth={0} />
              <Star size={10} className="fill-chart-5" strokeWidth={0} />
              <Star size={10} className="fill-chart-5" strokeWidth={0} />
              <Star size={10} className="fill-chart-5" strokeWidth={0} />
              <Star size={10} className="fill-neutral-500" strokeWidth={0} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-6 hidden group-hover:block bg-background pb-2">
        <div className="flex justify-between content-center gap-5">
          <div className="flex space-x-4 items-center">
            <img src={product.images} alt="image" className="h-20" />
            <div className="space-y-2">
              <p className="text-primary text-xs line-clamp-1">{product.title}</p>
              <div className="flex justify-between gap-2">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-white  hover:bg-primary hover:text-white rounded-full place-content-center h-8 md:h-10 w-8 md:w-10 p-1 md:p-2"
                >
                  <Handbag strokeWidth={1} />
                </button>

                <button
                  onClick={() => addToWishlist(product)}
                  className="bg-white  hover:bg-primary hover:text-white rounded-full h-8 md:h-10 w-8 md:w-10 p-1 md:p-2"
                >
                  {active ? (
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
          </div>
        </div>
      </div>
    </Card>
  );
}
