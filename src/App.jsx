import React from 'react'
import Header from './layauts/Header/Header'
import img from "/src/assets/images/photo.jpg"
import Footer from './layauts/Footer/Footer'
import "./App.css"
const App = () => {
  return (
    <>
    <Header/>

      <main>
          <section className='contain'>
            <div className='box1'>
              <h2>info</h2>
            <p>vendo mariguana a buen precio 
              por que lo intento si se q no puedo hacer nada bien en la vida siempre me equivoco una y otra y otra vez y sigo como si no hubiera pasado nada por eso me dejan por inservible por conformarme por pensar que todo esta bien por creer que puedo hacer algo y nunca hago nada la forma en creo que me ven es como hablador perezoso alguien que no tiene propocitos conformista mediocre 
            </p>
            </div>
            <div className='box2'>
            <img src={img} alt="photo" className='img'/>
            </div>
          </section>
          </main> 

          <Footer/>
    </>
  )
}

export default App
