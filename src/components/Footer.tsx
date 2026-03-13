import { Twitter, Globe, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-secondary py-14 px-4 sm:px-6 lg:px-8 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-5">
        <div className="space-y-4 text-center lg:text-left">
          <div className="text-white text-xl font-medium">About Shoppery</div>
          <p className="text-neutral-500 text-sm">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </p>
          <div className="flex gap-3  justify-center lg:justify-start">
            <p className="text-white">(219) 555-0114</p>
            <p className="text-neutral-500">or</p>
            <p className="text-white">proxy@gmail.com</p>
          </div>
        </div>

        <div className="grid grid-cols-3 place-items-center">
          <div className="space-y-4 text-center lg:text-left">
            <div className="text-white text-xl font-medium">Helps</div>
            <ul className="text-neutral-500 text-sm">
              <li className=" hover:text-white ">Contact</li>
              <li className=" hover:text-white ">FAQs</li>
              <li className=" hover:text-white ">Terms and Condition</li>
              <li className=" hover:text-white ">Privacy Policy</li>
            </ul>
          </div>

          <div className="space-y-4 text-center lg:text-left">
            <div className="text-white text-xl font-medium">Proxy</div>
            <ul className="text-neutral-500 text-sm">
              <li className=" hover:text-white">About</li>
              <li className=" hover:text-white ">Shop</li>
              <li className=" hover:text-white ">Product</li>
              <li className=" hover:text-white ">Product Details</li>
              <li className=" hover:text-white ">Track Order</li>
            </ul>
          </div>

          <div className="space-y-4 text-center lg:text-left">
            <div className="text-white text-xl font-medium">My Account</div>
            <ul className="text-neutral-500 text-sm">
              <li className=" hover:text-white ">My Account</li>
              <li className=" hover:text-white ">Order History</li>
              <li className=" hover:text-white ">Shopping Cart</li>
              <li className=" hover:text-white ">Wishlist</li>
              <li className=" hover:text-white ">Settings</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4 place-items-center lg:place-items-start">
          <div className="text-white text-xl font-medium">
            Download our Mobile App
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="flex gap-3 bg-neutral-700 hover:bg-neutral-600 rounded-md items-center p-3">
              <img src="/assets/app.png" />
              <div>
                <p className="text-xs text-neutral-500">Download on the</p>
                <p className="text-white font-medium text-base">App Store</p>
              </div>
            </div>

            <div className="flex gap-3 bg-neutral-700  hover:bg-neutral-600 rounded-md items-center p-3">
              <img src="/assets/play.png" />
              <div>
                <p className="text-xs text-neutral-500">Download on the</p>
                <p className="text-white font-medium text-base">Google Play</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-600 mt-10 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex gap-3 justify-center md:justify-start">
            <div className="w-6 h-6 hover:bg-primary rounded-full flex items-center justify-center p-1">
              <Facebook
                size={20}
                className="text-neutral-500 hover:text-white"
              />
            </div>
            <div className="w-6 h-6 hover:bg-primary rounded-full flex items-center justify-center p-1">
              <Twitter
                size={20}
                className="text-neutral-500 hover:text-white"
              />
            </div>
            <div className="w-6 h-6 hover:bg-primary rounded-full flex items-center justify-center p-1">
              <Instagram
                size={20}
                className="text-neutral-500 hover:text-white"
              />
            </div>
            <div className="w-6 h-6 hover:bg-primary rounded-full flex items-center justify-center p-1">
              <Globe size={20} className="text-neutral-500 hover:text-white" />
            </div>
          </div>

          <p className="text-sm text-center text-neutral-500">
            Ecobazar eCommerce © 2021. All Rights Reserved
          </p>

          <div className="flex flex-row-reverse gap-2 justify-center md:justify-start">
            <div className="w-10 h-7 border border-neutral-700 hover:bg-neutral-600 rounded-md items-center p-2 place-items-center">
              <img src="/assets/ApplePay.png" />
            </div>
            <div className="w-10 h-7 border border-neutral-700 hover:bg-neutral-600 rounded-md items-center p-2 place-items-center">
              <img src="/assets/DISC-VER.png" />
            </div>
            <div className="w-10 h-7 border border-neutral-700 hover:bg-neutral-600 rounded-md items-center p-2 place-items-center">
              <img src="/assets/Mastercard.png" />
            </div>
            <div className="w-10 h-7 border border-neutral-700 hover:bg-neutral-600 rounded-md items-center p-2 place-items-center">
              <img src="/assets/visa-logo.png" />
            </div>
            <div className="w-10 h-7 border border-neutral-700 hover:bg-neutral-600 rounded-md items-center p-2 place-items-center">
              <img src="/assets/ApplePay.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
