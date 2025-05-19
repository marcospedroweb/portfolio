import React from 'react'
import MainHeading from '../Components/MainHeading'

const AboutMe = () => {
  return (
    <div className='bg-[#1E1E1E] py-16'>
      <div className="container text-white text-center px-6 scroll-mt-32" id="Sobre">
        <MainHeading text="Sobre mim" />
        <p className='text-[rgba(255, 255, 255, 0.5)] mb-6 max-w-lg mx-auto'> Sou desenvolvedor FullStack com mais de 2 anos de experiência criando interfaces modernas e sistemas robustos. Tenho paixão por transformar ideias em soluções digitais funcionais e bem estruturadas. Estou sempre em busca de aprender algo novo, melhorar meu código e entregar valor real através de cada projeto.
        </p>
        <div className='flex flex-wrap justify-center items-center gap-4 divide-y md:divide-y-0 md:divide-x-2 divide-[#222]'>
          <div className='flex flex-col md:px-8'>
            <span className='font-[Montserrat] text-5xl font-medium'>2+</span>
            <span>Anos de experiência</span>
          </div>
          <div className='flex flex-col md:px-8'>
            <span className='font-[Montserrat] text-5xl font-medium'>3+</span>
            <span>Projetos realizados</span>
          </div>
          <div className='flex flex-col md:px-8 mt-5 md:mt-0'>
            <span className='font-[Montserrat] text-5xl font-medium'>3</span>
            <span>Empresas trabalhadas</span>
          </div>
        </div>
      </div>
    </div >
  )
}

export default AboutMe