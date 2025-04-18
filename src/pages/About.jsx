import React from 'react'
import { useTranslation } from 'react-i18next'
function About() {
  const { t } = useTranslation("global");
  return (
<div id="about" className="hero  min-h-screen">
  <div className="hero-content text-center w-full">
    <div className="w-full sm:w-[80%] lg:w-[90%]">
      <h1 className="text-5xl font-bold gradient-text">{t("about.title")}</h1>
      
      <div className='grid grid-cols-1 justify-items-center gap-4 py-6 md:grid-cols-3'>
      <div className="card w-full bg-base-300 card-sm shadow-sm">
            <div className="card-body">
            <h2 className="card-title">{t("about.backend")}</h2>
                <div className="flex gap-2 flex-wrap max-w-4xl">
                    <div className="badge badge-soft badge-info">Node.js</div>
                    <div className="badge badge-soft badge-info">Express.js</div>
                    <div className="badge badge-soft badge-info">Typescript</div>
                    <div className="badge badge-soft badge-info">Python</div>
                    <div className="badge badge-soft badge-info">Django</div>
                    <div className="badge badge-soft badge-info">Flask</div>
                    <div className="badge badge-soft badge-info">MongoDB</div>
                    <div className="badge badge-soft badge-info">PostgreSQL</div>
                    <div className="badge badge-soft badge-info">MySQL</div>
                    <div className="badge badge-soft badge-info">Firebase</div>
                    <div className="badge badge-soft badge-info">Supabase</div>
                    <div className="badge badge-soft badge-info">Prisma</div>
                    <div className="badge badge-soft badge-info">Docker</div>
                    <div className="badge badge-soft badge-info">Postman</div>
                    <div className="badge badge-soft badge-info">Redis</div>
                    <div className="badge badge-soft badge-info">Jest</div>
    

                </div>
            </div>
        </div>
        <div className="card w-full max-w-2xl bg-base-300 card-sm shadow-sm">
            <div className="card-body">
            <h2 className="card-title">{t("about.frontend")}</h2>
                <div className="flex gap-2 flex-wrap">
                    <div className="badge badge-soft badge-info">HTML</div>
                    <div className="badge badge-soft badge-info">CSS</div>
                    <div className="badge badge-soft badge-info">React</div>
                    <div className="badge badge-soft badge-info">Next.js</div>
                    <div className="badge badge-soft badge-info">Tailwind</div>
                    <div className="badge badge-soft badge-info">TypeScript</div>
                    <div className="badge badge-soft badge-info">JavaScript</div>
                    <div className="badge badge-soft badge-info">Tanstack</div>
                    <div className="badge badge-soft badge-info">Zustand</div>
                    <div className="badge badge-soft badge-info">Sass</div>
                    <div className="badge badge-soft badge-info">Material UI</div>
                    <div className="badge badge-soft badge-info">Daisy UI</div>
                    <div className="badge badge-soft badge-info">Shadcn</div>

                 </div> 
                
            </div>
        </div>
        <div className="card w-full bg-base-300 card-sm shadow-sm">
            <div className="card-body">
            <h2 className="card-title">{t("about.tools")}</h2>
                <div className="flex gap-2 flex-wrap">
                    <div className="badge badge-soft badge-info">VScode</div>
                    <div className="badge badge-soft badge-info">Git</div>
                    <div className="badge badge-soft badge-info">Github</div>
                    <div className="badge badge-soft badge-info">OpenAPI</div>
                    <div className="badge badge-soft badge-info">Docker</div>
                    <div className="badge badge-soft badge-info">Figma</div>
                    <div className="badge badge-soft badge-info">Postman</div>
                    <div className="badge badge-soft badge-info">Jira</div>
                    <div className="badge badge-soft badge-info">Slack</div>


                 </div> 
                
            </div>
        </div>
        
      </div>
      <div className='grid grid-cols-1 py-4 gap-4 md:grid-cols-3'>
      <div className="card w-full bg-base-300 card-sm shadow-sm">
            <div className="card-body">
            <h2 className="card-title">{t("about.education")}</h2>
            <ul className=" list-inside text-left space-y-4">
            <li className=' text-[#00bafe] bg-base-100 rounded-md p-2 text-no'>Ingeniería en Informatica - Universidad Nacional de Asuncion</li>
            <li className=' text-[#00bafe] bg-base-100 rounded-md p-2'>Certificación Fullstack - Plataforma Udemy</li>
            </ul>
 
                
            </div>
        </div>
        <div className="card w-full bg-base-300 card-sm shadow-sm">
            <div className="card-body">
            <h2 className="card-title">{t("about.softSkills")}</h2>
            <div className="flex gap-2 flex-wrap">
                <div className="badge badge-soft badge-info">{t("about.teamwork")}</div>
                <div className="badge badge-soft badge-info">{t("about.communication")}</div>
                <div className="badge badge-soft badge-info">{t("about.adaptability")}</div>
                <div className="badge badge-soft badge-info">{t("about.timeManagement")}</div>
            </div>

            </div>
        </div>

        <div className="card w-full bg-base-300 card-sm shadow-sm">
            <div className="card-body">
            <h2 className="card-title">{t("about.languages")}</h2>
            <div className="flex gap-2 flex-wrap">
            <div className="badge badge-soft badge-info">{t("about.spanishNative")}</div>
            <div className="badge badge-soft badge-info">{t("about.englishIntermediate")}</div>
            </div>

            </div>
        </div>

        

      </div>
    </div>
    
  </div>
</div>
  )
}

export default About
