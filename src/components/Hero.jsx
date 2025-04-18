import React from 'react'
import {Link} from 'react-scroll'

function Hero() {
  return (
<div className="hero min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold gradient-text">Hola! Soy Marcos Zarate</h1>
      <p className="py-6">
      Desarrollador Full-Stack apasionado por la creación de experiencias digitales fluidas, escalables y seguras.
      </p>
      <div className="space-x-4">
        <Link to="projects" smooth={true} duration={500} className="btn btn-info">View Projects</Link>
        <Link to="contact" smooth={true} duration={500} className="btn btn-outline btn-info">Contact Me</Link>
      </div>

    </div>
  </div>
</div>
  )
}

export default Hero
