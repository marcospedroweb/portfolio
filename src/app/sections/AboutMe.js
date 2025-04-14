import React from 'react'

const AboutMe = () => {
  return (
    <div className='bg-[#1E1E1E] w-screen py-16'>
      <div className="container text-white text-center">
        <h3 className="font-bold text-5xl mb-8 position w-fit mx-auto
        underline-center      
        ">Sobre mim</h3>
        <p className='text-[rgba(255, 255, 255, 0.5)] mb-6 max-w-lg mx-auto'> Sou desenvolvedor FullStack com mais de 2 anos de experiência criando interfaces modernas e sistemas robustos. Tenho paixão por transformar ideias em soluções digitais funcionais e bem estruturadas. Estou sempre em busca de aprender algo novo, melhorar meu código e entregar valor real através de cada projeto.
        </p>
        <div className='flex justify-center items-center divide-x-2 divide-[#222]'>
          <div className='flex flex-col px-8'>
            <span className='font-[Montserrat] text-5xl font-medium'>2+</span>
            <span>Anos de experiência</span>
          </div>
          <div className='flex flex-col px-8'>
            <span className='font-[Montserrat] text-5xl font-medium'>3+</span>
            <span>Projetos realizados</span>
          </div>
          <div className='flex flex-col px-8'>
            <span className='font-[Montserrat] text-5xl font-medium'>3</span>
            <span>Empresas trabalhadas</span>
          </div>
        </div>
      </div>

    </div >
  )
}

export default AboutMe