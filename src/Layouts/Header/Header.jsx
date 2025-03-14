import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import { ItemNavbar } from '../../componets/ItemNavbar'
import Home from '../../pages/Home/Home'
const Header = () => {
  return (
        <header className='header'>
          <div className=''>
            <h1>Esteban osorio</h1>
            </div>
            <div className='box22'>
            <ItemNavbar  route="PortafolioOso/"
             myStyles="text-white fond-bold m-2 hover:text-sky-400 hover:underline"
             contentItem="HOME"
           />
            <ItemNavbar route="PortafolioOso/About"
              myStyles="text-white fond-bold m-2 hover:text"
              contentItem="ABOUT"
           />
            {/* <ItemNavbar route="./clase2"
              myStyles="text-white fond-bold m-2 hover:text"
              contentItem="SKILLS"
           /> */}
           </div>
        </header>
  )
}

export default Header

//https://reactrouter.com/start/framework/installation
// https://react-icons.github.io/react-icons/
//https://github.com/topics/responsive-portfolio-website