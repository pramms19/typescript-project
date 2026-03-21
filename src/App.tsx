import { Routes, Route, BrowserRouter } from "react-router";
import Homepage from "./pages/Hompage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import PrivateRoute from "./components/layout/PrivateRoute";
import Layout from "./components/layout/Layout";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route path="/userDashboard" element={<UserDashboard />} />
          </Route>
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
