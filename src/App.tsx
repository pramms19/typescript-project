import { Routes, Route, BrowserRouter } from "react-router";
import Homepage from "./pages/Hompage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path= "/login" element={<Login/>}/>
        <Route path= "/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;