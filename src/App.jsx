import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import About from "./pages/About/About.jsx"
import logements from "./data/logements.json"
import Logement from "./pages/logement/Logement.jsx"


function App() {  
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Home />} />
    <Route path="about" element={<About />}/>
    <Route path="/logements/:id" element={<Logement />} /> 
    {/* {logements.map((logement) =>(
      <Route key={logement.id} path={logement.id} element={<Logement path={logement.id}/>} />
    ))} */}
    <Route path="*" element={<div> 404</div>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
