import React from 'react';

function Footer() {
  return (
    <footer className="footer footer-center  bg-white/5 backdrop-blur-md shadow-md text-white mt-16 p-6 rounded-lg">
      <nav className="flex gap-4 justify-center">
        <a href='www.linkedin.com/in/marcos-zarate-0a77a5195' target='blank' className="btn btn-circle btn-info btn-soft text-xl">
          <i className="ri-linkedin-fill"></i>
        </a>
        <a href='https://github.com/mazax28' target='blank' className="btn btn-circle btn-info btn-soft text-xl">
          <i className="ri-github-fill"></i>
        </a>
        <a className="btn btn-circle btn-soft btn-info text-xl">
          <i className="ri-youtube-fill"></i>
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
