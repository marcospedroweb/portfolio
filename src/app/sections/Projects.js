import React from 'react'
import MainHeading from '../Components/MainHeading'
import ProjectCard from '../Components/ProjectCard'

const Projects = () => {
  return (
    <div className='bg-[#252525] py-16'>
      <div className="container text-center px-6 scroll-mt-32" id="Projetos">
        <MainHeading text="Projetos" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ProjectCard icons={['Html5', 'Css3', 'JavaScript', 'ReactJS', 'Bootstrap']} infoProject={{
            image: 'adventures_journal.png',
            title: "Adventurer's Journal",
            date: { start: new Date(2022, 9, 1), end: new Date(2023, 5, 1) },
            description: `Projeto desenvolvido no 5º semestre da faculdade por uma equipe de cinco membros. A proposta foi criar um site que conecta usuários a guias turísticos especializados em esportes radicais como paraquedismo e surf. A plataforma oferece login, criação de conta, carrinho de aventuras, compras, edição e visualização de perfis. Fui responsável por toda a prototipação e grande parte do front-end com React, HTML, CSS, JS e Bootstrap. O back-end, feito em Laravel, foi desenvolvido por outros colegas. Trabalhamos com reuniões, revisões e cooperação ativa entre todos.`,
            linkProject: "",
            linkGithub: "https://github.com/marcospedroweb/tsi-adventurers-journal"
          }} />
        </div>
      </div>
    </div>
  )
}

export default Projects