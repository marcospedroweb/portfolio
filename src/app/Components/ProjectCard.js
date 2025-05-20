'use client'
import { default as IconHtml5 } from '@/app/icons/html5.svg';
import ModalProject from './ModalProject';
import { useState } from 'react';
import { skills } from '../sections/Skills';
import SkillCard from './SkillCard';

const ProjectCard = ({ title, icons = [], infoProject }) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="relative w-full h-64 bg-[url('/imgs/project1.png')] bg-cover bg-center group cursor-pointer" onClick={() => setIsOpen(true)}>
      <div className="absolute inset-0 bg-black bg-opacity-60 transition-all duration-200 ease-in group-hover:bg-opacity-80"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="transition-opacity duration-300 group-hover:opacity-0 flex flex-col items-center gap-2">
          <h4 className="text-white text-xl font-semibold transition-all duration-300 group-hover:opacity-0">
            {title}
          </h4>
          <div className={'flex gap-1'}>
            {skills.map((skill) => {
              if (icons.includes(skill))
                return <SkillCard key={skill} name={skill} size='small' />
            }
            )}
          </div>
        </div>

      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-white text-xl font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100">
          Saber mais
        </p>
      </div>
      {isOpen && <ModalProject isOpen={isOpen} setIsOpen={setIsOpen} />}

    </div>
  )
}

export default ProjectCard