import LocationBar from "@/components/LocationBar";
import Navbar from "../components/Navbar";
import MenuItems from "@/components/MenuItems";
import HeaderSection from "@/components/HeaderSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import TopCategory from "@/components/TopCategory";
import SaleSection from "@/components/SaleSection";
import NewestProducts from "@/components/NewestProducts";
import ClientTestimonial from "@/components/ClientTestimonial";
import SocialMedia from "@/components/SocialMedia";
import EndingSection from "@/components/EndingSection";
import Footer from "@/components/Footer";

export default function Homepage(){
    return(
        <div>
            <LocationBar/>
            <Navbar/>
            <MenuItems/>
            <HeaderSection/>
            <FeaturedProducts/>
            <TopCategory/>
            <SaleSection/>
            <NewestProducts/>
            <ClientTestimonial/>
            <SocialMedia/>
            <EndingSection/>
            <Footer/>
        </div>
    )
}