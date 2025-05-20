'use client'

import { useState } from "react"
import MainHeading from "../Components/MainHeading"
import ExperienceCard from "../Components/ExperienceCard"

const Experience = () => {
  const [section, setSection] = useState('Profissional')
  const underlineTextStyle = 'text-[#3DA661] border-b-[#3DA661] font-semibold';
  const underlineTextStyleHover = 'hover:text-[#3DA661] hover:border-b-[#3DA661]';

  return (
    <div className='bg-[#1E1E1E] py-16'>
      <div className="container text-center px-6 scroll-mt-32" id="Experiência">
        <MainHeading text="Experiência" />
        <div className="flex justify-center items-center gap-11 mb-14">
          <h4
            className={`text-xl cursor-pointer transition-all duration-200 ease-in border-b-4 ${section === 'Formação' ? underlineTextStyle : 'border-b-transparent text-white'
              } ${underlineTextStyleHover}`}
            onClick={() => setSection('Formação')}
          >
            Formação
          </h4>
          <h4
            className={`text-xl cursor-pointer transition-all duration-200 ease-in border-b-4 ${section === 'Profissional' ? underlineTextStyle : 'border-b-transparent text-white'
              } ${underlineTextStyleHover}`}
            onClick={() => setSection('Profissional')}
          >
            Profissional
          </h4>
        </div>
        {section === 'Profissional' ? <div className="flex flex-col gap-4">
          <ExperienceCard
            date={{ start: new Date(2023, 9, 1), end: new Date(2025, 3, 30) }}
            actual={false}
            title="Desenvolvedor FullStack"
            company="Scapets Brasil"
            jobType="Tempo integral"
            description={`
            - Desenvolvimento e manutenção de aplicativos móveis com React Native.
            - Criação e manutenção de sites responsivos utilizando ReactJS.
            - Desenvolvimento e manutenção de APIs com NestJS (NodeJS).
            - Uso de tecnologias como TypeScript.
              `}
          />
          <ExperienceCard
            date={{ start: new Date(2022, 9, 1), end: new Date(2023, 5, 1) }}
            actual={false}
            title="Desenvolvedor FrontEnd"
            company="Catency"
            jobType="Freelance"
            description={`
            - Desenvolvimento completo de sites utilizando NextJS.
            - Integração de APIs para conectar funcionalidades e garantir o funcionamento dinâmico das aplicações.
            - Criação de interfaces responsivas, alinhadas às melhores práticas de desenvolvimento.
            - Implementação de novos componentes e ajustes atendendo às necessidades contínuas do cliente.
            - Uso de tecnologias como HTML, CSS, JavaScript e Bootstrap.
          `}
          />
          <ExperienceCard
            date={{ start: new Date("2022-10-01"), end: new Date("2023-06-01") }}
            actual={false}
            title="Desenvolvedor FrontEnd"
            company="Fox Marketing Digital"
            jobType="Estágio"
            description={`
            - Desenvolvimento de sites utilizando HTML, CSS, JavaScript.
            - Integração de APIs para garantir conectividade e funcionalidade nas aplicações.
            - Configuração e integração de ferramentas de análise e marketing, como Google Tag Manager (GTM) e - Meta Pixel, para monitoramento de desempenho e otimização de campanhas.
            `}
          />
        </div> : <div className="flex flex-col gap-4">
          <ExperienceCard
            date={{ start: new Date("2021-02-01"), end: new Date("2023-6-30") }}
            actual={false}
            title="Tecnologia em Sistemas para Internet"
            company="Centro universitário Senac - Santo Amaro"
            jobType="Graduação"
            description={`
            Durante a graduação em Tecnologia em Sistemas para Internet, desenvolvi competências em programação web, design de interfaces, bancos de dados e integração de sistemas. Participei de projetos que envolveram tanto o desenvolvimento front-end quanto back-end, utilizando boas práticas de arquitetura de software.
            `}
          />
        </div>

        }
      </div>
    </div >
  )
}

export default Experience