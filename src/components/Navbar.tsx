import { Heart, Handbag, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Field } from "./ui/field";
import { ButtonGroup } from "./ui/button-group";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

import { useCart } from "../store/CartStore";
import { useWishlist } from "@/store/WishlistStore";


export default function Navbar() {
      const { totalCount } = useCart();
    const {wishlist} = useWishlist();

  return (
    <div className="border-t border-neutral-200 bg-white">
      <div className="px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between ">
        <div className="flex gap-2 items-center">
          {/* <img src="/assets/logo.png" alt="Logo" /> */}
          <p className="font-semibold text-secondary-foreground text-2xl lg:text-3xl">Glow</p>
        </div>

        <div className="hidden md:flex">
          <Field className="max-w-md">
            <ButtonGroup>
              <div className="flex gap-1">
                <InputGroup>
                  <InputGroupInput
                    id="inline-start-input"
                    placeholder="Search..."
                  />
                  <InputGroupAddon align="inline-start">
                    <Search strokeWidth={1} size={20} />
                  </InputGroupAddon>
                </InputGroup>
              </div>
              <Button>Search</Button>
            </ButtonGroup>
          </Field>
        </div>

        <div className="flex gap-1 items-center">
          <div className="relative flex items-center">
            <Heart size={28} strokeWidth={1} />
            <div className="absolute bottom-1/2 left-1/2 h-4 w-4 rounded-full bg-red-700 text-white text-xs text-center">
              {wishlist.length}
            </div>
          </div>
          <div className="text-neutral-400 text-2xl font-light">|</div>
          <div className="flex gap-2">
            <div className="relative flex items-center">
              <Handbag size={28} strokeWidth={1} />
              <div className="absolute bottom-1/2 left-1/2 h-4 w-4 rounded-full bg-red-700 text-white text-xs text-center">
                {totalCount}
              </div>
            </div>
            <div className="hidden md:block flex-2">
              <div className="font-normal text-xs text-neutral-400">
                Shopping Cart:
              </div>
              <div className="text-base text-neutral-800 font-medium">
                $60.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
