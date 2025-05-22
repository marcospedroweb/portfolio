'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { formatDateRange } from '../helpers/formatDateRange';
import { skills } from '../sections/Skills';

const ModalProject = ({ isOpen, setIsOpen, info, icons }) => {
  const modalRef = useRef(null);
  const { image, title, date, description, linkProject, linkGithub } = info;

  if (!isOpen) return null;

  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-black bg-opacity-50 cursor-pointer md:p-4"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#222] rounded-lg overflow-auto shadow-lg w-full max-w-[80vw] max-h-[90vh] flex flex-col md:flex-row items-center md:items-start relative p-5 md:p-8 gap-6 cursor-default max-sm:relative"
      >
        <div className="w-full md:w-[60rem] aspect-[4/3] md:aspect-auto md:h-[25rem] relative border-2 border-[rgba(255,255,255,0.2)] rounded-sm shadow-md z-0">

          <Image
            src={`/imgs/${image}`}
            alt="Imagem do projeto"
            fill
            className="object-cover rounded sm:h-full"
          />
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="z-50 px-2 text-5xl font-bold text-white md:text-gray-500 md:text-4xl hover:text-red-500 md:hidden max-sm:absolute max-sm:top-0 max-sm:right-0"
        >
          &times;
        </button>

        <div className="w-full text-center md:w-1/2 md:text-start">
          <div className="flex items-center justify-center md:justify-between">
            <h2 className="text-2xl font-bold text-[#3DA661] mb-0">
              {title}
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="hidden px-2 text-4xl font-bold text-gray-500 hover:text-red-500 md:block"
            >
              &times;
            </button>
          </div>
          <span className="inline-block mb-4 text-sm font-medium text-white">
            {formatDateRange(date.start, date.end)}
          </span>
          <p className="text-[rgba(255,255,255,0.7)] text-sm">
            {description}
          </p>

          <div className="mt-5 max-sm:text-start">
            <h3 className="mb-1 text-xl font-semibold text-white text-mobile-sm md:text-lg">
              Ferramentas usadas:
            </h3>
            <ul className="list-disc list-inside text-[rgba(255,255,255,0.7)] text-sm">
              {skills.map(skill => {
                if (icons.includes(skill))
                  return <li key={skill}>{skill}</li>
              })}

            </ul>
          </div>

          <div className="flex gap-4 mt-3">
            {linkProject && <a
              href={linkProject}
              target="_blank"
              className="px-4 py-2 font-semibold text-white transition bg-green-800 rounded hover:bg-green-700"
            >
              Ver Projeto
            </a>}

            {linkGithub && <a
              href={linkGithub}
              target="_blank"
              className="px-4 py-2 font-semibold text-white transition bg-green-800 rounded hover:bg-green-700"
            >
              GitHub
            </a>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProject;
