import EndingSection from "@/components/EndingSection";
import Footer from "@/components/Footer";
import LocationBar from "@/components/LocationBar";
import MenuItems from "@/components/MenuItems";
import Navbar from "@/components/Navbar";
import RouteBar from "@/components/RouteBar";
import SignInCard from "@/components/SignInCard";

export default function Login(){
    return(
        <div>
            <LocationBar/>
            <Navbar/>
            <MenuItems/>
            <RouteBar/>
            <SignInCard/>
            <EndingSection/>
            <Footer/>
        </div>
    )
}