import { Outlet } from "react-router-dom";
import LocationBar from "../nav/LocationBar";
import MenuItems from "../nav/MenuItems";
import Navbar from "../nav/Navbar";
import Footer from "../Footer";
import EndingSection from "../EndingSection";

export default function Layout() {
  return (
    <div>
      <LocationBar />
      <Navbar />
      <MenuItems />
      <Outlet />
      <EndingSection />
      <Footer />
    </div>
  );
}
