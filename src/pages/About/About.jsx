import React from 'react'
import { ItemNavbar } from '../../componets/ItemNavbar'
import { FaHtml5,FaCss3Alt, FaReact,FaGithub} from "react-icons/fa6";

import { IoLogoJavascript } from "react-icons/io5";


import "./About.css"
const About = () => {
  return (
    <section className="about">
        <div className="about__container">
          <h2>Habilidades Técnicas</h2>
            <ul>
            <ItemNavbar contentItem={<FaHtml5 style={{color:"#E34F26", height:"40px"}} />}/>
            <ItemNavbar contentItem={<FaCss3Alt style={{color:"#1572B6", height:"40px"}}/>}/>
            <ItemNavbar contentItem={<IoLogoJavascript style={{color:" #F7DF1E", height:"40px"}} />}/>
            <ItemNavbar contentItem={<FaReact style={{color:" #61DAFB", height:"40px"}} /> }/>
        
            </ul>
            <h2>Control de Versiones</h2>
            <ul>
            <ItemNavbar contentItem={<FaGithub  style={{color:"black"}} /> }/>

            </ul>

            <h2>Educación y Liderazgo</h2>
            <ul className='list'>
            <ItemNavbar  className='list' contentItem={"Lógica de programación "}   />
           
    
            </ul>
        </div>
      <div className='about__container2 '>
        <h2>Habilidades Sociales</h2>

      <ul>
      <p className='text_H'> Empatía <br />
        Trabajo en equipo <br />
        Asertividad<br />
        Resolución de conflictos</p>
      </ul>
      </div>
      <div>
        <h2>Nivel de Inglés</h2>
        <ul><h3>A2</h3></ul>

      <div>
        <h2 > Estudios</h2>
        <div className='box11 '>
          <h3> Bachiller tecnico</h3>
          <p>Instituto educativo Cristobal colon </p>
          <p> 2022-2023</p>
        </div>
        <div className='box11'>   
          <h3>tecnico programacion de software</h3>
          <p>Sena</p>
        <p>2022-2023</p></div>
  
        </div>
        <div className='box11'>
          <h3>tecnologo en programación de  software </h3>
          <p>Sena</p>
          <p>2024-2025</p>
        </div>
        </div>
        </section>
  )
}

export default About
