import LocationBar from "@/components/LocationBar";
import Navbar from "../components/Navbar";
import MenuItems from "@/components/MenuItems";
import HeaderSection from "@/components/HeaderSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";

export default function Homepage(){
    return(
        <div>
            <LocationBar/>
            <Navbar/>
            <MenuItems/>
            <HeaderSection/>
            <FeaturedProducts/>
        </div>
    )
}