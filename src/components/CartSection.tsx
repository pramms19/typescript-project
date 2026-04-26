import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { Minus, Plus, X } from "lucide-react";
import { Field } from "./ui/field";
import { ButtonGroup } from "./ui/button-group";
import { InputGroupInput } from "./ui/input-group";
import { useCart } from "@/store/CartStore";
import { NavLink } from "react-router-dom";
import { toast } from "sonner";

export default function CartSection() {
  const { cartItems, removeCart, updateQuantity } = useCart();

  // Calculate Total Price
  const total = (price: string | number, qty: number) => {
    const numPrice =
      typeof price === "string"
        ? parseFloat(price.replace(/[^0-9.-]+/g, ""))
        : price;
    return (numPrice * qty).toFixed(2);
  };

  const totalAmount = cartItems
    .reduce((acc, item) => {
      return acc + parseFloat(total(item.price, item.quantity));
    }, 0)
    .toFixed(2);

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary-foreground py-8">
        My Shopping Cart
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center text-muted-foreground py-10">
          Your Cart is Empty
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 place-items-stretch">
          <div className="col-span-2">
            <Table className="border border-muted">
              <TableHeader>
                <TableRow className="text-sm md:text-base">
                  <TableHead>Product</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="text-center">Quantity</TableHead>
                  <TableHead className="text-right">Subtotal</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-xs md:text-sm">
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <div className="flex items-center gap-2 text-wrap">
                        <img
                          src={item.images}
                          alt={item.title}
                          className="h-12 md:h-20"
                        />
                        {item.title}
                      </div>
                    </TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell className="text-center">
                      <div className="border border-muted rounded-full text-primary text-xs py-1 my-4">
                        <div className="flex justify-between px-1">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="rounded-full bg-muted hover:bg-secondary-foreground text-secondary-foreground hover:text-white p-1"
                          >
                            <Minus className="h-2 md:h-3 w-2 md:w-3" />
                          </button>
                          <div>{item.quantity}</div>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="rounded-full bg-muted hover:bg-secondary-foreground text-secondary-foreground hover:text-white p-1"
                          >
                            <Plus className="h-2 md:h-3 w-2 md:w-3" />
                          </button>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      ${total(item.price, item.quantity)}
                    </TableCell>
                    <TableCell className="space-x-2 text-right">
                      <button
                        className="rounded-full bg-muted hover:bg-secondary-foreground text-secondary-foreground hover:text-white p-1"
                        onClick={() => {
                          removeCart(item.id);
                          toast.success("Removed from Cart", {
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
              <TableFooter className="bg-background">
                <TableRow>
                  <TableCell colSpan={5}>
                    <div className="flex justify-between">
                      <Button className="bg-muted hover:bg-white text-secondary-foreground text-xs md:text-sm rounded-full px-6">
                        <NavLink to="/">Return to Shop</NavLink>
                      </Button>
                      <Button className="bg-muted hover:bg-white text-secondary-foreground text-xs md:text-sm rounded-full px-6">
                        Update Cart
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>

            <div className="border rounded-md p-4 grid grid-cols-3 items-center mt-8">
              <div className="font-medium text-secondary-foreground">
                Coupon Code
              </div>
              <Field className="bg-white rounded-full col-span-2 px-2">
                <ButtonGroup className="flex justify-between [--radius:9999rem]">
                  <div className="flex gap-1">
                    <InputGroupInput
                      className="text-xs md:text-sm"
                      id="inline-start-input"
                      placeholder="Enter Code"
                    />
                  </div>
                  <Button className="text-xs md:text-sm">Apply Coupon</Button>
                </ButtonGroup>
              </Field>
            </div>
          </div>
          <div className="pt-8 md:pt-0">
            <Table className="border border-muted">
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <div className="text-base md:text-lg font-medium text-secondary-foreground">
                      Cart Total
                    </div>
                  </TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-xs md:text-sm">
                <TableRow>
                  <TableCell>Subtotal:</TableCell>
                  <TableCell>${totalAmount}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Shipping:</TableCell>
                  <TableCell>Free</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Total:</TableCell>
                  <TableCell className="font-semibold">
                    ${totalAmount}
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableFooter className="bg-background">
                <TableRow>
                  <TableCell colSpan={2} className="text-center col-span-2">
                    <Button className="bg-primary hover:bg-muted text-white hover:text-primary rounded-full px-6 w-full">
                      Proceed to Checkout
                    </Button>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
}
