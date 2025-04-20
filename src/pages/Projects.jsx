import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';

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

          {/* First row of 3 project cards */}
          <div className='grid grid-cols-1 gap-4 py-6 md:grid-cols-3'>
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                className="card w-full bg-white/5 backdrop-blur-md shadow-md card-sm"
                custom={0.2 + index * 0.2}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <div className="card-body">
                  <h2 className="card-title">E-commerce Backend</h2>
                  <p className='text-left'>
                    API para productos, carritos y pagos, integrando Stripe para compras seguras.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <div className="badge border border-[#00bafe] bg-[#0a0a0a]/60 text-[#00bafe]">Node.js</div>
                    <div className="badge border border-[#00bafe] bg-[#0a0a0a]/60 text-[#00bafe]">Express</div>
                    <div className="badge border border-[#00bafe] bg-[#0a0a0a]/60 text-[#00bafe]">MongoDB</div>
                  </div>
                  <div className="card-actions justify-end py-2">
                    <button className="btn btn-circle btn-outline btn-info">
                      <i className="ri-arrow-right-s-line text-xl"></i>
                    </button>
                    <button className="btn btn-circle btn-outline btn-info">
                      <i className="ri-github-fill text-xl"></i>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second row of 3 project cards */}
          <div className='grid grid-cols-1 py-4 gap-4 md:grid-cols-3'>
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index + 3}
                className="card w-full bg-white/5 backdrop-blur-md shadow-md card-sm"
                custom={0.8 + index * 0.2}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <div className="card-body">
                  <h2 className="card-title">E-commerce Backend</h2>
                  <p className='text-left'>
                    API para productos, carritos y pagos, integrando Stripe para compras seguras.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <div className="badge border border-[#00bafe] bg-[#0a0a0a]/60 text-[#00bafe]">Node.js</div>
                    <div className="badge border border-[#00bafe] bg-[#0a0a0a]/60 text-[#00bafe]">Express</div>
                    <div className="badge border border-[#00bafe] bg-[#0a0a0a]/60 text-[#00bafe]">MongoDB</div>
                  </div>
                  <div className="card-actions justify-end py-2">
                    <button className="btn btn-circle btn-outline btn-info">
                      <i className="ri-arrow-right-s-line text-xl"></i>
                    </button>
                    <button className="btn btn-circle btn-outline btn-info">
                      <i className="ri-github-fill text-xl"></i>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
