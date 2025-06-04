import React from 'react';
import { motion } from 'framer-motion';

function ProjectCard({ title, description, technologies, custom, fadeUp, liveLink, repoLink }) {
  return (
    <motion.div
      className="card w-full bg-white/5 backdrop-blur-md shadow-md card-sm"
      custom={custom}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
    >
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-left">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="badge border border-[#00bafe] bg-[#0a0a0a]/60 text-[#00bafe]"
            >
              {tech}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end py-2">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-circle btn-outline btn-info">
                <i className="ri-arrow-right-s-line text-xl"></i>
              </button>
            </a>
          )}
          {repoLink && (
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-circle btn-outline btn-info">
                <i className="ri-github-fill text-xl"></i>
              </button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;