import { PhoneCall, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

interface NavItem {
  id: number;
  name: string;
  to: string;
}

export default function MenuItems() {
  const [open, setOpen] = useState<boolean>(false);
  const navItems: NavItem[] = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "Shop", to: "/" },
    { id: 3, name: "Pages", to: "/" },
    { id: 4, name: "Blog", to: "/" },
  ];

  return (
    <div className="bg-card-foreground px-4 sm:px-6 lg:px-8 ">
      <div className="h-14 max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Desktop Menu */}

        <div className="hidden md:flex space-x-4 items-center text-sm font-medium">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuTrigger>
                    <div className="flex gap-1 items-center">
                      <NavLink
                        to={item.to}
                        className="text-neutral-500 hover:text-neutral-200"
                      >
                        {item.name}
                      </NavLink>
                    </div>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <NavLink
            to="/aboutus"
            className="text-neutral-500 hover:text-neutral-200"
          >
            About Us
          </NavLink>

          <NavLink
            to="/contactus"
            className="text-neutral-500 hover:text-neutral-200"
          >
            Contact Us
          </NavLink>
        </div>

        <div className="hidden md:flex gap-1 items-center text-neutral-200">
          <PhoneCall size={20} />
          (219) 555-0114
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-neutral-200"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block text-neutral-300 hover:text-white"
            >
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/aboutus"
            onClick={() => setOpen(false)}
            className="block text-neutral-300 hover:text-white"
          >
            About Us
          </NavLink>

          <NavLink
            to="/contactus"
            onClick={() => setOpen(false)}
            className="block text-neutral-300 hover:text-white"
          >
            Contact Us
          </NavLink>

          <div className="flex gap-2 items-center text-neutral-300 pt-3 border-t border-neutral-700">
            <PhoneCall size={18} />
            (219) 555-0114
          </div>
        </div>
      )}
    </div>
  );
}
