'use client';
import React, { useRef } from 'react';
import Image from 'next/image';

const ModalProject = ({ isOpen, setIsOpen }) => {
  const modalRef = useRef(null);

  if (!isOpen) return null;

  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 cursor-pointer"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#222] rounded-lg overflow-auto shadow-lg w-full max-w-[80vw] max-h-[90vh] flex flex-col md:flex-row items-center md:items-start relative p-8 gap-6 cursor-default"
      >
        <div className="w-full md:w-[60rem] h-[25rem] relative">
          <Image
            src="/imgs/project1.png"
            alt="Imagem do projeto"
            fill
            className="object-cover rounded"
          />
        </div>

        <div className="w-full md:w-1/2 text-start">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-[#3DA661] mb-0">
              Nome do Projeto
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-red-500 text-4xl font-bold p-2"
            >
              &times;
            </button>
          </div>
          <span className="text-white font-medium text-sm mb-4 inline-block">
            20 de fevereiro de 2017
          </span>
          <p className="text-[rgba(255,255,255,0.7)] text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            rem maxime earum, aliquam dolorum possimus ad laborum aspernatur
            consectetur sint commodi quaerat fuga perspiciatis consequatur optio
            placeat voluptate magnam eligendi, dignissimos ipsam sunt. Iure
            doloremque eum nulla aut placeat, atque, eaque nobis, praesentium
            et maiores culpa officiis cum reiciendis assumenda.
          </p>

          <div className="mt-5">
            <h3 className="text-lg font-semibold text-white mb-1">
              Ferramentas usadas:
            </h3>
            <ul className="list-disc list-inside text-[rgba(255,255,255,0.7)] text-sm">
              <li>React</li>
              <li>TailwindCSS</li>
              <li>Next.js</li>
            </ul>
          </div>

          <div className="flex gap-4 mt-3">
            <a
              href="#"
              target="_blank"
              className="px-4 py-2 bg-green-800 text-white font-semibold rounded hover:bg-green-700 transition"
            >
              Ver Projeto
            </a>
            <a
              href="#"
              target="_blank"
              className="px-4 py-2 bg-green-800 text-white font-semibold rounded hover:bg-green-700 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProject;
