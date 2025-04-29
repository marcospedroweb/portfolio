import React from 'react'
import MainHeading from '../Components/MainHeading'
import ProjectCard from '../Components/ProjectCard'

const Projects = () => {
  return (
    <div className='bg-[#252525] py-16'>
      <div className="container text-center px-6">
        <MainHeading text="Projetos" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  )
}

export default Projects