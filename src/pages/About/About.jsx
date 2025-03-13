import React from 'react'
import { ItemNavbar } from '../../componets/ItemNavbar'
const About = () => {
  return (
    <div>
        <div>
          <h2>Habilidades Técnicas</h2>
            <ul>
            <ItemNavbar contentItem={" HTML"}/>
            <ItemNavbar contentItem={"CSS"}/>
            <ItemNavbar contentItem={"JavaScript"}/>
            <ItemNavbar contentItem={" React "}/>

            </ul>

        </div>

        <h2>Habilidades Sociales</h2>



        <h2>Nivel de Inglés</h2>
    </div>
  )
}

export default About
