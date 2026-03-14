import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function SaleSection() {
  
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid grid-col-1 lg:grid-cols-3 gap-5">
        
        {/* Card */}
        <div className="bg-[url(/assets/mas.png)] bg-cover bg-center h-85 lg:h-105 w-auto overflow-hidden rounded-md">
          <div className="grid justify-items-center">
            <div className="pt-8 text-center space-y-5">
              <div className="text-sm text-white font-medium">BEST DEALS</div>
              <div className="text-white text-4xl font-semibold">
                Sale Of The Month
              </div>

              <div className="grid grid-cols-4">
      
                <div>
                  <div className="text-white text-2xl flex gap-2 justify-center">
                    00{" "}
                  </div>
                  <div className="text-white text-xs flex gap-2 justify-center">
                    DAYS
                  </div>
                </div>
                <div>
                  <div className="text-white text-2xl flex gap-2 justify-center">
                    06{" "}
                  </div>
                  <div className="text-white text-xs flex gap-2 justify-center">
                    HOURS
                  </div>
                </div>
                <div>
                  <div className="text-white text-2xl flex gap-2 justify-center">
                    06{" "}
                  </div>
                  <div className="text-white text-xs flex gap-2 justify-center">
                    MINS
                  </div>
                </div>
                <div>
                  <div className="text-white text-2xl flex gap-2 justify-center">
                    35
                  </div>
                  <div className="text-white text-xs flex gap-2 justify-center">
                    SECS
                  </div>
                </div>

              </div>

              <Button size="xl" className="rounded-full flex gap-2 justify-self-center bg-neutral-50 mt-4 px-4 lg:px-5 py-2.5 text-sm lg:text-base font-medium text-primary hover:bg-rose-50">
                Shop now <ArrowRight />
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-[url(/assets/lip.jpg)] bg-cover bg-center h-85 lg:h-105 w-auto overflow-hidden rounded-md">
          <div className="grid justify-items-center">
            <div className="pt-8 text-center space-y-5">
              <div className="text-sm text-white font-medium">New Collection</div>
              <div className="text-white text-4xl font-semibold">
                Long-Lasting
              </div>
              <div className="text-white text-lg flex gap-2 justify-center">
                Started at <div className="text-sale font-semibold">$19.99</div>
              </div>
              <Button size="xl" className="rounded-full flex gap-2 justify-self-center bg-neutral-50 mt-4 px-4 lg:px-5 py-2.5 text-sm lg:text-base font-medium text-primary hover:bg-rose-50">
                Shop now <ArrowRight />
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-[url(/assets/bg-mu.jpg)] bg-cover bg-center h-85 lg:h-105 w-auto overflow-hidden rounded-md">
          <div className="grid justify-items-center">
            <div className="pt-8 text-center space-y-5">
              <div className="text-sm text-primary font-medium">
                SUMMER SALE
              </div>
              <div className="text-primary text-4xl font-semibold">
                100% Flawless
              </div>
              <div className="text-primary text-lg flex gap-2 justify-center">
                Up to
                <div className="bg-primary text-white rounded-md text-yellow font-semibold px-2">
                  60% OFF
                </div>
              </div>
              <Button size="xl" className="rounded-full flex gap-2 justify-self-center bg-neutral-50 mt-4 px-4 lg:px-5 py-2.5 text-sm lg:text-base font-medium text-primary hover:bg-rose-50">
                Shop now <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
