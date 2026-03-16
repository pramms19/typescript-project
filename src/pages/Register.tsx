import EndingSection from "@/components/EndingSection";
import Footer from "@/components/Footer";
import LocationBar from "@/components/LocationBar";
import MenuItems from "@/components/MenuItems";
import Navbar from "@/components/Navbar";
import RouteBar from "@/components/RouteBar";
import SignUpCard from "@/components/SignUpCard";

export default function Register() {
  return (
    <div>
      <LocationBar />
      <Navbar />
      <MenuItems />
      <RouteBar />
      <SignUpCard />
      <EndingSection />
      <Footer />
    </div>
  );
}
