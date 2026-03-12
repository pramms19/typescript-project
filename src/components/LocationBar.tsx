import { MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"
import { Button } from "./ui/button";

export default function LocationBar() {
  return (
    <div className="hidden md:flex px-4 sm:px-6 lg:px-8  h-10 items-center justify-between text-xs font-normal text-neutral-600 ">
      <div className="flex gap-1 items-center ">
        <MapPin size={20} strokeWidth={1} /> Store Location: Lincoln- 344,
        Illinois, Chicago, USA
      </div>

      <div className="flex gap-2 items-center">
        <div className="flex gap-1 items-center">
          {/* Eng <ChevronDown strokeWidth={1} /> */}
          <NativeSelect size="sm">
            <NativeSelectOption value="eng">Eng</NativeSelectOption>
            <NativeSelectOption value="nep">Nep</NativeSelectOption>
          </NativeSelect>
        </div>
        <div className="flex gap-1 items-center">
          {/* USD <ChevronDown strokeWidth={1} /> */}
          <NativeSelect size="sm">
            <NativeSelectOption value="usd">USD</NativeSelectOption>
            <NativeSelectOption value="npr">NPR</NativeSelectOption>
          </NativeSelect>
        </div>
        <div className="text-neutral-400 text-lg font-light">|</div>
        <div className="flex gap-1 items-center ">
          <NavLink to="/signin">
            <Button variant="link" size="xs" className="text-neutral-600 hover:text-primary">Sign In</Button>
          </NavLink>
          <span>/</span>
          <NavLink to="/signup">
           <Button variant="link" size="xs" className="text-neutral-600 hover:text-primary">Sign Up</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}