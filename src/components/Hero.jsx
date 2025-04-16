import React from 'react'

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
        <button className="btn btn-info">View Projects</button>
        <button className="btn btn-outline btn-info">Contact Me</button>
      </div>

    </div>
  </div>
</div>
  )
}

export default Hero
