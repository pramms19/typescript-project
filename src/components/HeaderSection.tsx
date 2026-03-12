import { ArrowRight, Truck, Headset, ShoppingBag, Wallet } from "lucide-react";
import { Button } from "./ui/button";

export default function HeaderSection() {
  const serviceBlock = [
    {
      id: 1,
      icon: <Truck size={42} strokeWidth={1} className="text-primary" />,
      title: "Free Shipping",
      text: "Free shipping on all your order",
    },
    {
      id: 2,
      icon: <Headset size={42} strokeWidth={1} className="text-primary" />,
      title: "Customer Support 24/7",
      text: "Instant access to Support",
    },
    {
      id: 3,
      icon: <ShoppingBag size={42} strokeWidth={1} className="text-primary" />,
      title: "100% Secure Payment",
      text: "We ensure your money is save",
    },
    {
      id: 4,
      icon: <Wallet size={42} strokeWidth={1} className="text-primary" />,
      title: "Money-Back Guarantee",
      text: "30 Days Money-Back Guarantee",
    },
  ];
  return (
    <div className="bg-background relative rounded-md mt-4 px-4 sm:px-6 lg:px-8 ">
      <div className="lg:flex justify-between space-y-5 h-full w-full gap-5 py-18 mx-auto max-w-7xl pb-8 md:pb-2 lg:pb-0">
        <div className="text-wrap justify-items-center lg:justify-items-normal">
          <div className="text-primary text-xs md:text-sm font-medium pb-2 md:pb-0">
            Welcome to Shopery
          </div>
          <div className="text-4xl/10 md:text-5xl/15 lg:text-6xl/20 font-semibold text-foreground text-center lg:text-left">
            Flawless & Glowly Makeup Products
          </div>
          <div className="flex gap-2 text-3xl/15 text-secondary">
            Sale up to <div className="font-semibold text-sale">30% OFF</div>
          </div>
          <div className="text-sm text-neutral-500">
            Free shipping on all your order. we deliver, you enjoy
          </div>
          <Button size="lg" className="rounded-full flex gap-2 bg-primary mt-6 px-4 lg:px-5 py-2.5 text-sm lg:text-base font-medium text-white hover:bg-green-700">
            Shop now <ArrowRight />
          </Button>
        </div>
        <div className="place-items-center">
          <img
            src="/assets/ct.png"
            alt="Makeups"
            className="object-cover md:shrink-0 max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>

      <div className="grid justify-items-center">
        <div className="absolute -bottom-2/5 md:-bottom-1/6 lg:-bottom-1/8  h-fit lg:h-30 bg-white flex items-center px-8 py-4 lg:py-0 rounded-md shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            {serviceBlock.map((item) => {
              return (
                <div key={item.id} className="flex space-x-4 items-center">
                  {item.icon}
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-gray-700">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
