import LocationBar from "@/components/LocationBar";
import Navbar from "../components/Navbar";
import MenuItems from "@/components/MenuItems";

export default function Homepage(){
    return(
        <div>
            <LocationBar/>
            <Navbar/>
            <MenuItems/>
        </div>
    )
}