import React from 'react'
import { ItemNavbar } from '../../componets/ItemNavbar'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import "./About.css"
const About = () => {
  return (
    <div>
        <div>
          <h2>Habilidades Técnicas</h2>
            <ul>
            <ItemNavbar contentItem={<FaHtml5 style={{color:"#E34F26", height:"40px"}} />}/>
            <ItemNavbar contentItem={<FaCss3Alt style={{color:"#1572B6", height:"40px"}}/>}/>
            <ItemNavbar contentItem={<IoLogoJavascript style={{color:" #F7DF1E", height:"40px"}} />}/>
            <ItemNavbar contentItem={<FaReact style={{color:" #61DAFB", height:"40px"}} /> }/>

            </ul>

        </div>

        <h2>Habilidades Sociales</h2>

      <ul>
      <p> Empatía, Trabajo en equipo, Asertividad,Resolución de conflictos</p>
      </ul>

        <h2>Nivel de Inglés</h2>
        <ul><h3>A2</h3></ul>
    </div>
  )
}

export default About
