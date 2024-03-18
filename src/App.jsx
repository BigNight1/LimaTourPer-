import { Route, Routes } from "react-router-dom"
import { Home } from "./components/Home/Home.jsx"
import { Navbar } from "./components/Navbar/Navbar.jsx"
import Nosotros from "./components/Nosotros/Nosotros.jsx"
import TourLima from "./components/Tours/TourLima.jsx"
import "./App.css"
function App() {
  return (
    <div className="App">
      <Navbar/>

      
      {/* Routes  */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Nosotros" element={<Nosotros/>}/>
          <Route path="/Tours-en-Lima" element={<TourLima/>}/>
        </Routes>
    </div>
  )
}

export default App
