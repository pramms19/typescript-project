import { Routes, Route, BrowserRouter } from "react-router";
import Homepage from "./pages/Hompage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;