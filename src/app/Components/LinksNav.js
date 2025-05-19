import React from 'react'
import { useIsMobile } from '../hooks/useIsMobile';

const LinksNav = () => {
  const isMobile = useIsMobile();

  return (
    <ul
      className={`flex flex-col md:flex-row justify-center text-center gap-6 ${isMobile && 'p-4'
        } h-fit`}
    >
      {['Sobre', 'Habilidades', 'Certificados', 'Experiência', 'Projetos'].map((item) => (
        <li key={item}>
          <a
            href={`#${item}`}
            className={`relative inline-block px-2 py-1
             ${!isMobile ? `text-[#DCDCDC]
                before:content-[''] before:absolute before:bottom-0 before:left-0
                before:w-full before:h-0.5
                before:bg-[#3DA661] before:scale-x-0 hover:before:scale-x-100
                before:origin-center before:transition-transform before:duration-300
                before:pointer-events-none
              ` : 'text-black'}
            `}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default LinksNav;
