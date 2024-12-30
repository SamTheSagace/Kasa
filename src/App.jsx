import Button from "./components/Button/Button"
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home";

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Home />} />
    {/* <Route path="about" element={<About />} /> */}
    </Routes>
  </BrowserRouter>
  )
}

export default App
