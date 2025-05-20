import React from 'react'
import SkillCard from '../Components/SkillCard'
import MainHeading from '../Components/MainHeading';

export const skills = [
  'Html5', 'Css3', 'JavaScript', 'TypeScript',
  'ReactJS', 'NextJS', 'NodeJS', 'NestJS',
  'ViteJS', 'Redux', 'Bootstrap', 'PHP',
  'Laravel', 'SQL'
];


export function Skills() {
  return (
    <div className='bg-[#222] py-24'>
      <div className="container scroll-mt-32" id="Habilidades">
        <MainHeading text="Habilidades" />
        <div className="flex flex-wrap gap-3 justify-center items-center max-w-4xl mx-auto">
          {skills.map((skill) => (
            <SkillCard key={skill} name={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}

