import {
  Heart,
  LayoutDashboard,
  LogOut,
  RefreshCw,
  Settings,
  ShoppingBag,
} from "lucide-react";
import { Card, CardTitle } from "../ui/card";
import { useAuthStore } from "@/store/AuthStore";
import { useNavigate } from "react-router-dom";
import { Suspense, use, useState } from "react";
import { fetchUser } from "@/actions/fetchUser";
import { Dialog, DialogClose, DialogContent, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";

export default function ProfileSection() {
  //   const userPromise = useMemo(() => fetchUser(), []);
  const userPromise = fetchUser();

  return (
    <Suspense fallback={<div className="p-8">Loading Profile...</div>}>
      <ProfileClient userPromise={userPromise} />
    </Suspense>
  );
}

interface UserDataProps {
  userPromise: Promise<User>;
}

function ProfileClient({ userPromise }: UserDataProps) {
  const userData = use(userPromise);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const [open, setOpen] = useState(false);

  const navItems = [
    { id: 1, icon: <LayoutDashboard size={20} />, title: "Dashboard" },
    { id: 2, icon: <RefreshCw size={20} />, title: "Order History" },
    { id: 3, icon: <Heart size={20} />, title: "Wishlist" },
    { id: 4, icon: <ShoppingBag size={20} />, title: "Shopping Cart" },
    { id: 5, icon: <Settings size={20} />, title: "Settings" },
    {
      id: 6,
      icon: <LogOut size={20} />,
      title: "Log-out",
      action: () => setOpen(true),
    },
  ];

  return (
    <div className="px-8 pt-10 grid grid-cols-1 md:grid-cols-3 justify-items-stretch gap-4">
      {/* max-w-2xs min-w-xs */}
      <Card className="p-4">
        <CardTitle>Navigation</CardTitle>
        <div className="border-b"></div>
        <div>
          {navItems.map((item) => {
            return (
              <div
                key={item.id}
                className="flex gap-2 hover:bg-muted p-2"
                onClick={item.action ? item.action : undefined}
              >
                <div className="text-muted-foreground">{item.icon}</div>
                <div>{item.title}</div>
              </div>
            );
          })}
        </div>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-xs">
          <DialogTitle className="text-center text-sm md:text-base">
            Are you sure you want to Logout?
          </DialogTitle>
          <DialogClose asChild>
            <Button variant="outline" className="text-xs md:text-sm">
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={handleLogout} className="text-xs md:text-sm">
            Logout
          </Button>
        </DialogContent>
      </Dialog>

      {/* max-w-md min-w-sm */}
      <Card>
        <div className="place-items-center space-y-2 p-2">
          <img
            src={userData?.avatar?.url || "placeholder.jpg"}
            alt="user"
            className="rounded-full h-20"
          />
          <div className="text-center">
            <CardTitle>{userData?.username}</CardTitle>
            <p className="text-sm text-muted-foreground">
              {userData?.role || "Customer"}
            </p>
          </div>
          <p className="text-primary">Edit Profile</p>
        </div>
      </Card>
      {/* max-w-sm min-w-xs  col-span-2 md:col-span-1*/}
      <Card className="p-4">
        <div className="p-2 spacey-y-2">
          <p className="text-muted-foreground">BILLING ADDRESS</p>
          <div className="space-y-2">
            <CardTitle>{userData?.username}</CardTitle>
            <p className="text-sm text-muted-foreground">Address</p>
            <div>
              <p>{userData?.email}</p>
              <p>{userData?.phoneNumber || "No Contact Info"}</p>
            </div>
            <p className="text-primary">Edit Address</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
