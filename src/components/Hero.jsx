import React from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function Hero() {
  const { t } = useTranslation("global");

  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <motion.div
          className="max-w-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold gradient-text">{t("hero.title")}</h1>
          <p className="py-6 text-gray-400">
            {t("hero.description")}
          </p>
          <motion.div
            className="space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Link to="projects" smooth={true} duration={500} className="btn btn-info">
              {t("hero.v_project")}
            </Link>
            <Link to="contact" smooth={true} duration={500} className="btn btn-outline btn-info">
              {t("hero.v_contact")}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
