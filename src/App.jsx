import react from "react"
import Home from "./Components/Home.jsx"
import Menu from "./Components/Menu.jsx"
import About from "./Components/About.jsx"
import Cantact from "./Components/Cantact.jsx"
import { Route, Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import Contact from "./Components/Cantact.jsx"
import Hotels from "./Components/Hotels.jsx"

function App() {


  return (
   
 
  
   <Routes>
    <Route path="/" element = {<Home/>} />
    <Route path="/Menu" element = {<Menu/>} />
    <Route path="/About" element = {<About/>}/>
    <Route path="/Cantact" element = {<Cantact/>}/>
    <Route path="/Hotels" element = {<Hotels/>}/>
   </Routes>
  

 
    


  
  )
};

export default App
