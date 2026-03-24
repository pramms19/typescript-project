import NewestProducts from "@/components/products/NewestProducts";
import ClientTestimonial from "@/components/sections/ClientTestimonial";
import SocialMedia from "@/components/sections/SocialMedia";
import { FeaturedProducts } from "@/components/products/FeaturedProducts";
import HeaderSection from "@/components/sections/HeaderSection";
import TopCategory from "@/components/sections/TopCategory";
import SaleSection from "@/components/sections/SaleSection";

export default function Homepage() {
  return (
    <div>
      <HeaderSection />
      <FeaturedProducts />
      <TopCategory />
      <SaleSection />
      <NewestProducts />
      <ClientTestimonial />
      <SocialMedia />
    </div>
  );
}
