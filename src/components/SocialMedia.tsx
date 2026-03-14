import { Instagram } from "lucide-react";

export default function SocialMedia() {
  const card = [
    { id: 1, image: "/assets/sm-1.jpg" },
    { id: 2, image: "/assets/sm-2.jpg" },
    { id: 3, image: "/assets/sm-3.jpg" },
    { id: 4, image: "/assets/sm-4.jpeg" },
    { id: 5, image: "/assets/sm-5.jpg" },
    { id: 6, image: "/assets/sm-6.jpg" },
  ];
  return (
    <div className="px-4 sm:px-6 lg:px-8 ">
      <div className="text-secondary-foreground text-2xl md:text-3xl font-semibold text-center">
        Follow us on Instagram
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 pt-8 place-items-center">
        {card.map((item) => {
          return (
            <div key={item.id} className="group relative rounded-md">
              <img
                src={item.image}
                className="h-20 md:h-40 w-20 md:w-40 object-cover rounded-md"
              />
              <div className="absolute top-5/12 left-5/12 hidden group-hover:block">
              <Instagram
                size={20}
                className="text-white"
              />
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
