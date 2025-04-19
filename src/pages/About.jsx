import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';

function About() {
  const { t } = useTranslation("global");
  const ref = useRef(null);
  const isInView = useInView(ref); // Sin `{ once: true }` para que la animación se repita

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: custom },
    }),
  };

  return (
    <div id="about" className="hero min-h-screen" ref={ref}>
      <div className="hero-content text-center w-full">
        <motion.div
          className="w-full sm:w-[80%] lg:w-[90%]"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <motion.h1
            className="text-5xl font-bold gradient-text"
            custom={0}
            variants={fadeUp}
          >
            {t("about.title")}
          </motion.h1>

          {/* Primera sección de 3 cards */}
          <div className='grid grid-cols-1 justify-items-center gap-4 py-6 md:grid-cols-3'>
            {/* Backend */}
            <motion.div
              className="card w-full bg-white/5 backdrop-blur-md shadow-md card-sm"
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="card-body">
                <h2 className="card-title">{t("about.backend")}</h2>
                <div className="flex gap-2 flex-wrap max-w-4xl">
                  {/* Aquí tus badges originales */}
                  {["Node.js", "Express.js", "Typescript", "Python", "Django", "Flask", "MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase", "Prisma", "Docker", "Postman", "Redis", "Jest"].map((tech) => (
                    <div key={tech} className="badge badge-soft badge-info">{tech}</div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Frontend */}
            <motion.div
              className="card w-full max-w-2xl bg-white/5 backdrop-blur-md shadow-md card-sm"
              custom={0.4}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="card-body">
                <h2 className="card-title">{t("about.frontend")}</h2>
                <div className="flex gap-2 flex-wrap">
                  {["HTML", "CSS", "React", "Next.js", "Tailwind", "TypeScript", "JavaScript", "Tanstack", "Zustand", "Sass", "Material UI", "Daisy UI", "Shadcn"].map((tech) => (
                    <div key={tech} className="badge badge-soft badge-info">{tech}</div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              className="card w-full bg-white/5 backdrop-blur-md shadow-md card-sm"
              custom={0.6}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="card-body">
                <h2 className="card-title">{t("about.tools")}</h2>
                <div className="flex gap-2 flex-wrap">
                  {["VScode", "Git", "Github", "OpenAPI", "Docker", "Figma", "Postman", "Jira", "Slack"].map((tool) => (
                    <div key={tool} className="badge badge-soft badge-info">{tool}</div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Segunda sección de 3 cards */}
          <div className='grid grid-cols-1 py-4 gap-4 md:grid-cols-3'>
            {/* Educación */}
            <motion.div
              className="card w-full bg-white/5 backdrop-blur-md shadow-md card-sm"
              custom={0.8}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="card-body">
                <h2 className="card-title">{t("about.education")}</h2>
                <ul className="list-inside text-left space-y-4">
                  <li className='text-[#00bafe] bg-base-100 rounded-md p-2'>Ingeniería en Informática - Universidad Nacional de Asunción</li>
                  <li className='text-[#00bafe] bg-base-100 rounded-md p-2'>Certificación Fullstack - Plataforma Udemy</li>
                </ul>
              </div>
            </motion.div>

            {/* Soft skills */}
            <motion.div
              className="card w-full bg-white/5 backdrop-blur-md shadow-md card-sm"
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="card-body">
                <h2 className="card-title">{t("about.softSkills")}</h2>
                <div className="flex gap-2 flex-wrap">
                  <div className="badge badge-soft badge-info">{t("about.teamwork")}</div>
                  <div className="badge badge-soft badge-info">{t("about.communication")}</div>
                  <div className="badge badge-soft badge-info">{t("about.adaptability")}</div>
                  <div className="badge badge-soft badge-info">{t("about.timeManagement")}</div>
                </div>
              </div>
            </motion.div>

            {/* Idiomas */}
            <motion.div
              className="card w-full bg-white/5 backdrop-blur-md shadow-md card-sm"
              custom={1.2}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="card-body">
                <h2 className="card-title">{t("about.languages")}</h2>
                <div className="flex gap-2 flex-wrap">
                  <div className="badge badge-soft badge-info">{t("about.spanishNative")}</div>
                  <div className="badge badge-soft badge-info">{t("about.englishIntermediate")}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
