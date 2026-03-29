import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { Handbag, X } from "lucide-react";
import { useWishlist } from "@/store/WishlistStore";
import { useCart } from "@/store/CartStore";
import { toast } from "sonner";

export default function WishlistSection() {
  const { wishlist, removeWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary-foreground py-8">
        My Wishlist
      </div>
      {wishlist.length === 0 ? (
        <div className="text-center text-muted-foreground py-10">
          Your Wishlist is Empty
        </div>
      ) : (
        <Table className="border border-muted">
          <TableHeader>
            <TableRow className="text-sm md:text-base">
              <TableHead>Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-center">Stock Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-xs md:text-sm">
            {wishlist.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div className="flex items-center gap-2 text-wrap">
                    <img
                      src={product.images}
                      alt={product.title}
                      className="h-12 md:h-20"
                    />
                    {product.title}
                  </div>
                </TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell className="text-center">
                  <div className="bg-accent rounded-full text-primary text-xs p-1 m-4">
                    In Stock
                  </div>
                </TableCell>
                <TableCell className="text-right space-x-1 md:space-x-4">
                  <Button
                    className="rounded-full px-2 md:px-4 text-xs md:text-sm"
                    onClick={() => {
                      addToCart(product);
                      toast.success("Added to Cart", {
                        position: "top-center",
                      });
                    }}
                  >
                    <div className="hidden md:block">Add to Cart</div>
                    <Handbag
                      size={8}
                      strokeWidth={1}
                      className="block md:hidden"
                    />
                  </Button>
                  <button
                    className="rounded-full bg-muted hover:bg-secondary-foreground text-secondary-foreground hover:text-white p-1"
                    onClick={() => {
                      removeWishlist(product.id);
                      toast.success("Removed from Wishlist", {
                        position: "top-center",
                      });
                    }}
                  >
                    <X className="h-2 md:h-3 w-2 md:w-3" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
