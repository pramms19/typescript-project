import TopCategory from "@/components/TopCategory";
import SaleSection from "@/components/SaleSection";
import NewestProducts from "@/components/products/NewestProducts";
import ClientTestimonial from "@/components/ClientTestimonial";
import SocialMedia from "@/components/SocialMedia";
import HeaderSection from "@/components/HeaderSection";
import { FeaturedProducts } from "@/components/products/FeaturedProducts";

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
