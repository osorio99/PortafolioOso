import { Routes ,Route } from "react-router-dom"
import Header from './Layouts/Header/Header'
import Footer from './Layouts/Footer/Footer'
import "./App.css"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Main from "./Layouts/Main/Main"
const App = () => {
  return (
    <div  className="App">  
    <Header/>
    
        <Routes>
        
        <Route path="/PortafolioOso" element={ <Home/> } /> 
        <Route path="PortafolioOso/About" element={ <About/> } />
       
      </Routes>
     
          <Footer/>
    </div>
  )
}

export default App
