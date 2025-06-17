import React from 'react'
import MainHeading from '../Components/MainHeading'
import ProjectCard from '../Components/ProjectCard'

const Projects = () => {
  return (
    <div className='bg-[#252525] py-16'>
      <div className="container px-6 text-center scroll-mt-32" id="Projetos">
        <MainHeading text="Projetos" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <ProjectCard icons={['Html5', 'Css3', 'JavaScript', 'ReactJS', 'Bootstrap', 'Figma']} infoProject={{
            image: 'projeto-portfolio.png',
            title: "Portfólio",
            date: { start: new Date(2022, 9, 1), end: new Date(2023, 5, 1) },
            description: `Projeto desenvolvido no 5º semestre da faculdade por uma equipe de cinco membros. A proposta foi criar um site que conecta usuários a guias turísticos especializados em esportes radicais como paraquedismo e surf. A plataforma oferece login, criação de conta, carrinho de aventuras, compras, edição e visualização de perfis. Fui responsável por toda a prototipação e grande parte do front-end com React, HTML, CSS, JS e Bootstrap. O back-end, feito em Laravel, foi desenvolvido por outros colegas. Trabalhamos com reuniões, revisões e cooperação ativa entre todos.`,
            linkProject: "https://marcospedroweb.vercel.app/",
            linkGithub: "https://github.com/marcospedroweb/portfolio",
            linkFigma: "https://www.figma.com/design/w6l1sSWAryWJXRMsdOe0Of/Portfolio?node-id=0-1&t=H7jtltNAsJRsg3Kx-1"
          }} />
          <ProjectCard icons={['Html5', 'Css3', 'JavaScript', 'ReactJS', 'Bootstrap', 'Figma']} infoProject={{
            image: 'adventures_journal.png',
            title: "Adventurer's Journal",
            date: { start: new Date(2022, 9, 1), end: new Date(2023, 5, 1) },
            description: `Projeto desenvolvido no 5º semestre da faculdade por uma equipe de cinco membros. A proposta foi criar um site que conecta usuários a guias turísticos especializados em esportes radicais como paraquedismo e surf. A plataforma oferece login, criação de conta, carrinho de aventuras, compras, edição e visualização de perfis. Fui responsável por toda a prototipação e grande parte do front-end com React, HTML, CSS, JS e Bootstrap. O back-end, feito em Laravel, foi desenvolvido por outros colegas. Trabalhamos com reuniões, revisões e cooperação ativa entre todos.`,
            linkProject: "",
            linkGithub: "https://github.com/marcospedroweb/tsi-adventurers-journal",
            linkFigma: "https://www.figma.com/design/MVuXYLLJpqMX4cb3YXaRaz/PI---5?node-id=0-1&t=0557JlxlSNCFmXEG-1"
          }} />
          <ProjectCard icons={['Html5', 'Css3', 'TailwindCSS']} infoProject={{
            image: 'project-ap.png',
            title: "Projeto AP Senac",
            date: { start: new Date(2025, 5, 1), end: 'unique' },
            description: `Projeto desenvolvido originalmente em junho de 2021 para aplicar conhecimentos em HTML e CSS na faculdade, criando um site fictício para divulgar uma notícia sobre apartamentos destinados a alunos do Senac. Reformulado em 2025 com melhorias no design, responsividade e integração do Tailwind CSS.`,
            linkProject: "https://marcospedroweb.github.io/Projeto-AP-Senac/",
            linkGithub: "https://github.com/marcospedroweb/Projeto-AP-Senac"
          }} />
          <ProjectCard icons={['Html5', 'Css3', 'JavaScript', 'Bootstrap']} infoProject={{
            image: 'tadeu-sociais.png',
            title: "Tadeu Sociais",
            date: { start: new Date(2022, 4, 7), end: new Date(2022, 5, 11) },
            description: `Rede social fictícia desenvolvida como projeto acadêmico para praticar desenvolvimento web. O sistema permite login, cadastro, publicação de posts e visualização de posts de outros usuários. O projeto utiliza HTML, CSS, JavaScript e Bootstrap e foi criado como parte de um trabalho acadêmico na faculdade.`,
            linkProject: "https://marcospedroweb.github.io/tsi-API-tadeu-sociais/",
            linkGithub: "https://github.com/marcospedroweb/tsi-API-tadeu-sociais"
          }} />
          <ProjectCard icons={['Html5', 'Css3', 'JavaScript', 'Bootstrap', 'Figma']} infoProject={{
            image: 'projeto-raposa.png',
            title: "Raposa Marketing Digital",
            date: { start: new Date(2022, 8, 1), end: 'unique' },
            description: `Landing page desenvolvida para divulgar uma empresa fictícia de marketing digital. Criei para praticar e aprimorar conhecimentos em HTML, CSS, JavaScript e Bootstrap. O site possui layout responsivo, com seções para apresentação da empresa, serviços, contato e animações para maior interatividade.`,
            linkProject: "https://marcospedroweb.github.io/raposa-marketing-digital/",
            linkGithub: "https://github.com/marcospedroweb/raposa-marketing-digital",
            linkFigma: "https://www.figma.com/design/aPB9L3O2Mn3Ssk3tzFTKB6/Raposa-Marketing-Digital?node-id=0-1&t=ys7zYSYzdG8lT3wb-1"
          }} />
        </div>
      </div>
    </div>
  )
}

export default Projects