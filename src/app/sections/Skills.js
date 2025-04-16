import React from 'react'
import SkillCard from '../Components/SkillCard'

const skills = [
  'Html5', 'Css3', 'JavaScript', 'TypeScript',
  'ReactJS', 'NextJS', 'NodeJS', 'NestJS',
  'ViteJS', 'Redux', 'Bootstrap', 'PHP',
  'Laravel', 'SQL'
];


export function Skills() {
  return (
    <div className='bg-[#222] py-24'>
      <div className="container">
        <h3 className="font-bold text-5xl mb-8 position text-white w-fit mx-auto
        underline-center      
        ">Habilidades</h3>
        <div className="flex flex-wrap gap-3 justify-center items-center max-w-4xl mx-auto">
          {skills.map((skill) => (
            <SkillCard key={skill} name={skill} />
          ))}
        </div></div>
    </div>
  )
}

