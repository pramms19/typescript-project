import EndingSection from "@/components/EndingSection";
import Footer from "@/components/Footer";
import LocationBar from "@/components/LocationBar";
import MenuItems from "@/components/MenuItems";
import Navbar from "@/components/Navbar";
import ProfileSection from "@/components/ProfileSection";
import RouteBar from "@/components/RouteBar";

export default function UserDashboard() {
  return (
    <div>
      <LocationBar />
      <Navbar />
      <MenuItems />
      <RouteBar />
      <ProfileSection/>
      <EndingSection />
      <Footer />
    </div>
  );
}
