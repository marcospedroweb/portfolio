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
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 cursor-pointer"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#222] rounded-lg overflow-auto shadow-lg w-full max-w-[80vw] max-h-[90vh] flex flex-col md:flex-row items-center md:items-start relative p-8 gap-6 cursor-default max-sm:relative"
      >
        <div className="w-full md:w-[60rem] h-[25rem] relative border-2 border-[rgba(255,255,255,0.2)] rounded-sm shadow-md">
          <Image
            src={`/imgs/${image}`}
            alt="Imagem do projeto"
            fill
            className="object-cover rounded"
          />
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-500 hover:text-red-500 text-4xl font-bold px-2 md:hidden max-sm:absolute max-sm:top-0 max-sm:right-0"
        >
          &times;
        </button>

        <div className="w-full md:w-1/2 text-center md:text-start">
          <div className="flex justify-center md:justify-between items-center">
            <h2 className="text-2xl font-bold text-[#3DA661] mb-0">
              {title}
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-red-500 text-4xl font-bold px-2 hidden md:block"
            >
              &times;
            </button>
          </div>
          <span className="text-white font-medium text-sm mb-4 inline-block">
            {formatDateRange(date.start, date.end)}
          </span>
          <p className="text-[rgba(255,255,255,0.7)] text-sm">
            {description}
          </p>

          <div className="mt-5 max-sm:text-start">
            <h3 className="text-mobile-sm text-xl md:text-lg font-semibold text-white mb-1">
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
              className="px-4 py-2 bg-green-800 text-white font-semibold rounded hover:bg-green-700 transition"
            >
              Ver Projeto
            </a>}

            {linkGithub && <a
              href={linkGithub}
              target="_blank"
              className="px-4 py-2 bg-green-800 text-white font-semibold rounded hover:bg-green-700 transition"
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
