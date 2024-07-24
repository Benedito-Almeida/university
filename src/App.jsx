import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'

import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'


const App = () => {

  const [playState,setPlayState] = useState(false)


  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subtitle='Curso' title='o que nos oferecemos' />
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subtitle='Galeria' title='Fotos do Campus' />
        <Campus />
        <Title subtitle='Alunos' title='O que os alunos diz:' />
        <Testimonials/>
        <Title subtitle='Contado' title= 'Entrar em contado' />
        <Contact/>
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}   />


    </div>
  )
}

export default App
