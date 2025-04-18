import React from 'react'
import {Link} from 'react-scroll'
import {useTranslation} from 'react-i18next'
function Hero() {
  const { t } = useTranslation("global");
  return (
<div className="hero min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold gradient-text">{t("hero.title")}</h1>
      <p className="py-6">
      {t("hero.description")}
      </p>
      <div className="space-x-4">
        <Link to="projects" smooth={true} duration={500} className="btn btn-info">{t("hero.v_project")}</Link>
        <Link to="contact" smooth={true} duration={500} className="btn btn-outline btn-info">{t("hero.v_contact")}</Link>
      </div>

    </div>
  </div>
</div>
  )
}

export default Hero
