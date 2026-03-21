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

export default function CartSection() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-8">
      <div className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary-foreground pb-4">
        My Shopping Cart
      </div>

      <div className="flex justify-between">
        <div>
          <Table className="border border-muted">
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-center">Quantity</TableHead>
                <TableHead className="text-right">Subtotal</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Wireless Mouse</TableCell>
                <TableCell>$29.99</TableCell>
                <TableCell className="text-center">
                  <div className="border border-muted rounded-full text-primary text-xs py-1 my-4">
                    <div className="flex justify-between px-1">
                      <button className="rounded-full bg-muted hover:bg-secondary-foreground text-secondary-foreground hover:text-white p-1">
                        <Minus size={12} />
                      </button>
                      <div>2</div>
                      <button className="rounded-full bg-muted hover:bg-secondary-foreground text-secondary-foreground hover:text-white p-1">
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">$29.99</TableCell>
                <TableCell className="space-x-2 text-right">
                  <button className="rounded-full bg-muted hover:bg-secondary-foreground text-secondary-foreground hover:text-white p-1">
                    <X size={12} />
                  </button>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableFooter className="bg-background">
              <TableRow>
                <TableCell colSpan={5}>
                  <div className="flex justify-between">
                    <Button className="bg-muted hover:bg-white text-secondary-foreground rounded-full px-6">
                      Return to Shop
                    </Button>
                    <Button className="bg-muted hover:bg-white text-secondary-foreground rounded-full px-6">
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
        <div>
          <Table className="border border-muted">
            <TableHeader>
              <TableRow>
               <div className="text-lg font-medium text-secondary-foreground px-2">Cart Total</div>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Subtotal:</TableCell>
                <TableCell>$80</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Shipping:</TableCell>
                <TableCell>Free</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total:</TableCell>
                <TableCell className="font-semibold">$80</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter className="bg-background">
              <TableRow>
                <TableCell colSpan={2}>
                  <Button className="bg-primary hover:bg-muted text-white hover:text-primary rounded-full px-6">
                    Proceed to Checkout
                  </Button>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  );
}
