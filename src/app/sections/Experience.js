'use client';

import { useState } from 'react';
import MainHeading from '../Components/MainHeading';
import ExperienceCard from '../Components/ExperienceCard';

const Experience = () => {
  const [section, setSection] = useState('Profissional');
  const underlineTextStyle = 'text-[#3DA661] border-b-[#3DA661] font-semibold';
  const underlineTextStyleHover =
    'hover:text-[#3DA661] hover:border-b-[#3DA661]';

  return (
    <div className="bg-[#1E1E1E] py-16">
      <div className="container px-6 text-center scroll-mt-32" id="Experiência">
        <MainHeading text="Experiência" />
        <div className="flex items-center justify-center gap-11 mb-14">
          <h4
            className={`text-xl cursor-pointer transition-all duration-200 ease-in border-b-4 ${
              section === 'Formação'
                ? underlineTextStyle
                : 'border-b-transparent text-white'
            } ${underlineTextStyleHover}`}
            onClick={() => setSection('Formação')}
          >
            Formação
          </h4>
          <h4
            className={`text-xl cursor-pointer transition-all duration-200 ease-in border-b-4 ${
              section === 'Profissional'
                ? underlineTextStyle
                : 'border-b-transparent text-white'
            } ${underlineTextStyleHover}`}
            onClick={() => setSection('Profissional')}
          >
            Profissional
          </h4>
        </div>
        {section === 'Profissional' ? (
          <div className="flex flex-col gap-4">
            <ExperienceCard
              date={{ start: new Date(2023, 9, 1), end: new Date(2025, 3, 30) }}
              actual={false}
              title="Desenvolvedor FullStack"
              company="Scapets Brasil"
              jobType="Tempo integral"
              description={`
            - Desenvolvimento e manutenção de interfaces web responsivas utilizando ReactJS, com foco em performance e experiência do usuário.
            - Desenvolvimento de aplicativos móveis com React Native, garantindo usabilidade e consistência entre plataformas.
            - Integração com APIs e colaboração na construção de serviços backend utilizando NestJS (Node.js).
            - Utilização de TypeScript para maior segurança, organização e escalabilidade do código.
              `}
            />
            <ExperienceCard
              date={{ start: new Date(2022, 9, 1), end: new Date(2023, 5, 1) }}
              actual={false}
              title="Desenvolvedor FrontEnd"
              company="Catency"
              jobType="Freelance"
              description={`
            - Desenvolvimento de aplicações web com Next.js, estruturando projetos completos com foco em performance e organização.
            - Integração com APIs para construção de funcionalidades dinâmicas e escaláveis.
            - Criação de interfaces responsivas com atenção à experiência do usuário e boas práticas de desenvolvimento.
            - Utilização de HTML, CSS, JavaScript e Bootstrap no desenvolvimento das interfaces.
          `}
            />
            <ExperienceCard
              date={{
                start: new Date('2022-10-01'),
                end: new Date('2023-06-01'),
              }}
              actual={false}
              title="Desenvolvedor FrontEnd"
              company="Fox Marketing Digital"
              jobType="Estágio"
              description={`
            - Desenvolvimento de páginas web utilizando HTML, CSS e JavaScript, com foco em estruturação e responsividade.
            - Integração com APIs para viabilizar funcionalidades dinâmicas nas aplicações.
            - Configuração e integração de ferramentas de análise e marketing, como Google Tag Manager (GTM) e Meta Pixel, contribuindo para o monitoramento de desempenho e otimização de campanhas.
            `}
            />
          </div>
        ) : (
          <div className="flex flex-col max-w-5xl gap-12 mx-auto">
            <ExperienceCard
              date={{
                start: new Date('2026-03-01'),
                end: new Date('2028-03-01'),
              }}
              actual={false}
              title="Tecnologia em Design Gráfico"
              company="UNASP"
              jobType="Graduação"
              description={`
            Durante a graduação em Design Gráfico, venho desenvolvendo conhecimentos em fundamentos do design, como composição visual, tipografia e teoria das cores. Buscando aplicar esses conceitos na construção de soluções digitais mais intuitivas e visualmente consistentes.
            `}
            />
            <ExperienceCard
              date={{
                start: new Date('2021-02-01'),
                end: new Date('2023-6-30'),
              }}
              actual={false}
              title="Tecnologia em Sistemas para Internet"
              company="Centro universitário Senac - Santo Amaro"
              jobType="Graduação"
              description={`
            Durante a graduação em Tecnologia em Sistemas para Internet, desenvolvi competências em programação web, design de interfaces, bancos de dados e integração de sistemas. Participei de projetos que envolveram tanto o desenvolvimento front-end quanto back-end, utilizando boas práticas de arquitetura de software.
            `}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
