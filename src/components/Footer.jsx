import React from 'react'

function Footer() {
  return (
<footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
    
    <p className=' text-[#00bafe]'> Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
  <a className="btn btn-outline btn-info"><i class="ri-linkedin-fill"></i></a>

  <a className="btn btn-outline btn-info"><i class="ri-github-fill"></i></a>

  <a className="btn btn-outline btn-info"><i class="ri-youtube-fill"></i></a>

  </nav>
</footer>
  )
}

export default Footer
