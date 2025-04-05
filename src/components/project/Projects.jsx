import React from 'react'
import ProjectItem from './ProjectItem'
import Section from '../Section'

const Projects = () => {

  const projectsDetails = [

    {
      image: "./images/reserve-ease.png",
      // image: "./icons/feature.png",
      name: "ReserveEase",
      detail: "Led a team of four in developing ReserveEase, a user-friendly and interactive restaurant table booking web application, leveraging React.js for the frontend and Python for the backend.",
      jsText: "React JS",
      tailwindText: "Tailwind CSS",
      cssText: "CSS",
      htmlText: "HTML",
      js: "./icons/icons8-react-48.png",
      tailwind: "./icons/icons8-tailwind-css-48.png",
      css: "./icons/icons8-css-48.png",
      html:"./icons/icons8-html-48.png",
      demoLink : "https://reserve-ease-snowy.vercel.app/",
    },
    {
      image: "./images/wenspire.png",
      // image: "./icons/feature.png",
      name: "WenSpire",
      detail: "Collaborated on the creation, deployment, and SEO optimization of WenSpire, a platform dedicated to mental health support and suicide prevention, providing a safe space for anonymous sharing and professional help",
      jsText: "JavaScript",
      tailwindText: "Tailwind CSS",
      cssText: "CSS",
      htmlText: "HTML",
      js: "./icons/icons8-javascript-48.png",
      tailwind: "./icons/icons8-tailwind-css-48.png",
      css: "./icons/icons8-css-48.png",
      html:"./icons/icons8-html-48.png",
      demoLink : "https://wenspire.app/",
    },
    {
      image: "./images/suncity.png",
      // image: "./icons/feature.png",
      name: "Suncity Ushering Agency",
      detail: "Developed a responsive website for Suncity Ushering Agency, featuring user-friendly navigation and service listings to enhance their online presence and client engagement.",
      jsText: "JavaScript",
      tailwindText: "Tailwind CSS",
      cssText: "CSS",
      htmlText: "HTML",
      js: "./icons/icons8-javascript-48.png",
      tailwind: "./icons/icons8-tailwind-css-48.png",
      css: "./icons/icons8-css-48.png",
      html:"./icons/icons8-html-48.png",
      demoLink : "https://suncity-phi.vercel.app/",
    },

    {
      image: "./images/eco-r.png",
      // image: "./icons/feature.png",
      name: "Eco-R",
      detail: "Collaborated on creating the website for Eco-R, which turns waste into sustainable products for a greener planet.",
      jsText: "JavaScript",
      tailwindText: "Tailwind CSS",
      cssText: "CSS",
      htmlText: "HTML",
      js: "./icons/icons8-javascript-48.png",
      tailwind: "./icons/icons8-tailwind-css-48.png",
      css: "./icons/icons8-css-48.png",
      html:"./icons/icons8-html-48.png",
      demoLink : "https://eco-r-psi.vercel.app/",
    },

    {
      image: "./images/darasa-reports-img.png",
      // image: "./icons/feature.png",
      name: "Darasa Reports",
      detail: "An intuitive student information system and gradebook for African schools, designed to simplify student data management and enhance educational efficiency.",
      jsText: "JavaScript",
      tailwindText: "Tailwind CSS",
      cssText: "CSS",
      htmlText: "HTML",
      js: "./icons/icons8-javascript-48.png",
      tailwind: "./icons/icons8-tailwind-css-48.png",
      css: "./icons/icons8-css-48.png",
      html:"./icons/icons8-html-48.png",
      demoLink : "https://darasa-Reports.vercel.app/",
    },

    {
      image: "./images/gradeone-img.png",
      // image: "./icons/feature.png",
      name: "GradeOne",
      detail: "An ongoing personal project designed to simplify and enhance learning. GradeOne offers a user-friendly platform with affordable access to a vast collection of educational resources.",
      jsText: "JavaScript",
      tailwindText: "Tailwind CSS",
      cssText: "CSS",
      htmlText: "HTML",
      js: "./icons/icons8-javascript-48.png",
      tailwind: "./icons/icons8-tailwind-css-48.png",
      css: "./icons/icons8-css-48.png",
      html:"./icons/icons8-html-48.png",
      demoLink : "https://gradeone.vercel.app/",
    },

  ]

  return (
    <>

      <span id="projects" className=""></span>
      <Section classList="">

        <div className="flex flex-row items-center gap-2" data-aos="zoom-in-out" data-aos-duration="1000">
          <span className="material-symbols-rounded text-primaryColor font-black text-3xl">
            new_releases
          </span>
          <h3 className="font-black text-3xl">Latest Projects</h3>
        </div>

        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10">

          {/* mapping projectsDetails array */}
          {

            projectsDetails.map((project, index) => (

              // project item component
              <ProjectItem key={index}

              // props name and values
              image={project.image}
              name={project.name}
              detail={project.detail}

              js={project.js}
              jsText={project.jsText}

              tailwind={project.tailwind}
              tailwindText={project.tailwindText}
              
              css={project.css}
              cssText={project.cssText}
              
              html={project.html}
              htmlText={project.htmlText}
              
              demoLink={project.demoLink}
              />
              
            ))
          }

        </div>

      </Section>
    </>
  )
}

export default Projects
