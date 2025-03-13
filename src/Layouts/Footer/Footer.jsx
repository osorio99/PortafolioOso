import React from 'react'
import "./Footer.css"
import { FaGithub } from "react-icons/fa";
import { ItemNavbar } from '../../componets/ItemNavbar';
import { FaLinkedinIn,FaDiscord } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <nav>
            <ul>
              <NavLink to='https://github.com/osorio99'><ItemNavbar contentItem={<FaGithub />}/></NavLink>
              <NavLink to=''><ItemNavbar contentItem={<FaLinkedinIn />}/></NavLink>
              <NavLink to=''><ItemNavbar contentItem={<FaDiscord  />}/></NavLink>
            </ul>
        </nav>
    </footer>
  )
}

export default Footer

// Layouts
// Pages
// UI
