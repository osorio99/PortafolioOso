import "./Navbar.css"
import { ItemNavbar } from "../../componets/ItemNavbar"
const Navbar = ({children}) => {
  return (
    <nav className="Navbar">
        <ul>
            {/* <li><a href="">HOME </a></li>
            <li><a href="">ABOUT </a></li>  
            <li><a href="">SKILLS</a></li>
            <li><a href="">CONTACT</a></li> */}

            {children}
        </ul>
    </nav>
  )
}

export default Navbar
