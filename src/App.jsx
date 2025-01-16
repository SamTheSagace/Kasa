import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import About from "./pages/About/About.jsx"
import Error404 from "./pages/Error404/Error404.jsx"
import Logement from "./pages/logement/Logement.jsx"


function App() {  
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Home />} />
    <Route path="about" element={<About />}/>
    <Route path="/logements/:id" element={<Logement />} /> 
    <Route path="*" element={<Error404 />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
