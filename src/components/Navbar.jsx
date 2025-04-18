import { Link } from 'react-scroll';



function Navbar() {
  


  return (
    <div className="navbar shadow-sm ">
        <div className="navbar-start">
            <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <Link to='home' smooth={true} duration={500} ><li><a>Home</a></li></Link>
        <Link to="about" smooth={true} duration={500}><li><a>About</a></li></Link>
        <Link to="projects" smooth={true} duration={500}><li><a>Projects</a></li></Link>
        <Link to="contact" smooth={true} duration={500}><li><a>Contact</a></li></Link>
        
      </ul>
            </div>
            <a className="btn btn-ghost text-xl">Building The Web</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <Link to='home' smooth={true} duration={500} ><li><a>Home</a></li></Link>
                <Link to="about" smooth={true} duration={500}><li><a>About</a></li></Link>
                <Link to="projects" smooth={true} duration={500}><li><a>Projects</a></li></Link>
                <Link to="contact" smooth={true} duration={500}><li><a>Contact</a></li></Link>
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn btn-info">Download CV</a>
        </div>
    </div>
  )
}

export default Navbar
