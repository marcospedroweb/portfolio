import React from 'react';
import MainHeading from '../Components/MainHeading';

const AboutMe = () => {
  return (
    <div className="bg-[#1E1E1E] py-16">
      <div
        className="container px-6 text-center text-white scroll-mt-32"
        id="Sobre"
        data-aos="fade-right"
      >
        <MainHeading text="Sobre mim" />
        <p className="text-[rgba(255, 255, 255, 0.5)] mb-6 max-w-lg mx-auto">
          {' '}
          Sou desenvolvedor Full Stack com foco em React e Node.js, atuando há
          mais de 2 anos no desenvolvimento de aplicações web modernas,
          responsivas e escaláveis. Tenho experiência na construção de
          interfaces utilizando React, Next.js e TypeScript, além de integrações
          backend com Node.js (NestJS) e APIs REST.
        </p>
        <p className="text-[rgba(255, 255, 255, 0.5)] mb-6 max-w-lg mx-auto">
          {' '}
          Busco criar soluções funcionais, organizadas e performáticas, sempre
          priorizando qualidade de código, usabilidade e boas práticas de
          desenvolvimento. Fora da tecnologia, gosto de poesia, desenho,
          pintura, academia e artes marciais, atividades que fortalecem minha
          criatividade e disciplina.
        </p>
        <div
          className="flex flex-wrap justify-center items-center gap-4 divide-y md:divide-y-0 md:divide-x-2 divide-[#222]"
          data-aos="fade-left"
        >
          <div className="flex flex-col md:px-8">
            <span className="font-[Montserrat] text-5xl font-medium">2+</span>
            <span>Anos de experiência</span>
          </div>
          <div className="flex flex-col md:px-8">
            <span className="font-[Montserrat] text-5xl font-medium">3+</span>
            <span>Projetos realizados</span>
          </div>
          <div className="flex flex-col mt-5 md:px-8 md:mt-0">
            <span className="font-[Montserrat] text-5xl font-medium">3</span>
            <span>Empresas trabalhadas</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
