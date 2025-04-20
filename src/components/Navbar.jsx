import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

function Navbar() {
  const { t, i18n } = useTranslation("global");
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem('language');
    return storedLanguage ? JSON.parse(storedLanguage) : 'es';
  });

  // Cambia el idioma cuando se cambia el estado
  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', JSON.stringify(language));
  }, [language, i18n]);

  const changeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="navbar fixed top-0 left-0 w-full border-2  border-white/10 backdrop-blur-md shadow-md z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-52  bg-[#161616]  shadow-md">
            <Link to='home' smooth={true} duration={500} offset={-64}><li><a>{t("navbar.home")}</a></li></Link>
            <Link to="about" smooth={true} duration={500} offset={-64} ><li><a>{t("navbar.about")}</a></li></Link>
            <Link to="projects" smooth={true} duration={500} offset={-64} ><li><a>{t("navbar.projects")}</a></li></Link>
            <Link to="contact" smooth={true} duration={500} offset={-64} ><li><a>{t("navbar.contact")}</a></li></Link>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl hidden md:block">Building The Web</a>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 ">
          <Link to='home' smooth={true} duration={500} offset={-64} ><li><a>{t("navbar.home")}</a></li></Link>
          <Link to="about" smooth={true} duration={500} offset={-64} ><li><a>{t("navbar.about")}</a></li></Link>
          <Link to="projects" smooth={true} duration={500} offset={-64} ><li><a>{t("navbar.projects")}</a></li></Link>
          <Link to="contact" smooth={true} duration={500} offset={-64} ><li><a>{t("navbar.contact")}</a></li></Link>
        </ul>
      </div>
      <div className="navbar-end flex gap-2 ">
      <select
  value={i18n.language}
  onChange={changeLanguage}
  className="select select-sm w-[80px] bg-[#0a0a0a] text-gray-300 border border-gray-700 rounded focus:outline-none"
>
  <option value="es">ES</option>
  <option value="en">EN</option>
</select>
        <a href="/downloads/MARCOS ZÁRATE DESARROLLADOR WEB.pdf"
          target="_blank" 

          rel="noopener noreferrer"
          className="btn btn-info">{t("navbar.download")}</a>
      </div>
    </div>
  )
}

export default Navbar;