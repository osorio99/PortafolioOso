import React from 'react'
import img from "../../assets/images/photo.png"
import "./Main.css"

const Main = () => {
  return (
    <div>
       <main>
          <section className='contain'>
            <div className='box1'>
              <h2>Hola soy Esteban</h2>
            <p>
              Amante de la tecnología, la innovación y el desarrollo de apps que impactan positivamente en la comunidad. Siempre explorando nuevas ideas y aprendiendo algo nuevo cada día. 
            </p>
            </div>
            <div className='box2'>
            <img src={img} alt="photo" className='img'/>
            </div>
          </section>
          </main> 
    </div>
  )
}

export default Main
