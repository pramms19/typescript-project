import { Routes, Route, BrowserRouter } from "react-router";
import Homepage from "./pages/Hompage";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path= "/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;