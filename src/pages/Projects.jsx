import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const { t } = useTranslation("global");
  const ref = useRef(null);
  const isInView = useInView(ref);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: custom },
    }),
  };

  const projects = [
    {
      title: "Pern Shop ",
      description: "Plataforma para publicar y gestionar blogs con autenticación.",
      technologies: ["React","Tailwind" ,"DaisyUI", "Node.js", "Express","Supabase","Axios" ,"PostgreSQL"],
      liveLink: "https://pern-shop-crud.vercel.app/",
      repoLink: "https://github.com/mazax28/pern-shop-crud",
    },
    {
      title: "NFT Market",
      description: "Aplicación de chat en tiempo real con soporte para múltiples salas.",
      technologies: ["React","Tailwind","DaisyUI", "Zustand", "Tanstack","Solidity", "Ethers.js", "Hardhat","IPFS"],
      liveLink: "https://nft-marketplace-three-gilt.vercel.app/",
      repoLink: "https://github.com/mazax28/nft-marketplace",
    },
    {
      title: "Portfolio Website",
      description: "Sitio web personal para mostrar proyectos y habilidades.",
      technologies: ["React", "TailwindCSS", "Framer Motion","DaisyUI", "Bun","EmailJS","Axios","i18next"],
      liveLink: "https://portfolio-seven-pearl-57.vercel.app/",
      repoLink: "https://github.com/mazax28/PORTFOLIO",
    },
    {
      title: "Broodl",
      description: "Aplicación para gestionar tareas con soporte para múltiples usuarios.",
      technologies: ["Next.js", "Tailwind", "Firebase"],
      liveLink: "https://broold.vercel.app/",
      repoLink: "https://github.com/mazax28/broold",
    },
    {
      title: "Crypto Place",
      description: "Aplicación para consultar el clima en tiempo real usando APIs.",
      technologies: ["React", "CSS", "Coingecko API"],
      liveLink: "https://crypto-tracking-chi.vercel.app/",
      repoLink: "https://github.com/mazax28/crypto-tracking",
    },
    {
      title: "Shopper",
      description: "API para productos, carritos y pagos, integrando Stripe para compras seguras.",
      technologies: ["React","CSS"],
      liveLink: "https://shopper-ten-delta.vercel.app/",
      repoLink: "https://github.com/mazax28/shopper",
    },
    {
      title: "Tomato",
      description: "Aplicación de chat en tiempo real con soporte para múltiples salas.",
      technologies: ["React","CSS"],
      liveLink: "https://tomato-wine-iota.vercel.app/",
      repoLink: "https://github.com/mazax28/tomato",
    },
    {
      title: "RoyalX",
      description: "Aplicación de chat en tiempo real con soporte para múltiples salas.",
      technologies: ["React","CSS"],
      liveLink: "https://royal-x-phi.vercel.app/",
      repoLink: "https://github.com/mazax28/RoyalX",
    },
    {
      title: "Edusity",
      description: "Aplicación de chat en tiempo real con soporte para múltiples salas.",
      technologies: ["React","CSS"],
      liveLink: "https://edusity-beige.vercel.app/",
      repoLink: "https://github.com/mazax28/edusity",
    },
  ];

  return (
    <div id="projects" className="hero min-h-screen" ref={ref}>
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
            {t("projects.title")}
          </motion.h1>

          {/* Grid of project cards */}
          <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                custom={0.2 + index * 0.2}
                fadeUp={fadeUp}
                liveLink={project.liveLink}
                repoLink={project.repoLink}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
