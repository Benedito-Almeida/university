import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'


const Navbar = () => {

  const [stick, setStick] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setStick(true) : setStick(false)
    })
  }, [])

  const [mobileMenu, setMobileMenu] = useState(false)

  const toogleMenu = () => {
    mobileMenu? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${stick ? 'dark-nav' : ''}`}>
      <img src={logo} className='logo' alt='' />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Cursos</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>Sobre</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}></Link></li>
        <li><Link to ='contact' smooth={true} offset={-260} duration={500} className='btn'>Contado</Link></li>

      </ul>
      <img src={menu_icon} alt='' className='menu-icon' onClick={toogleMenu} />

    </nav>
  )
}

export default Navbar
