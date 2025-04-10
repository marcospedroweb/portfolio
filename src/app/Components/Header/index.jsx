'use client';
import { useIsMobile } from '@/app/hooks/useIsMobile';
import Image from 'next/image';
import MenuMobile from '../MenuMobile';
import LinksNav from '../LinksNav';
import { IconArrowDown } from '../../../../public/icons/IconArrowDown';
import { TypingText } from '../TypingText';
import SociaisHeader from '../SociaisHeader';

export function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="md:w-screen h-screen bg-hero-custom">
      <div className="sticky top-0 bg-[#212121] z-10 ">
        <nav className="flex flex-row justify-center md:justify-between items-center md:container py-3 md:gap-0 w-full max-md:px-5">
          <div className="flex flex-row items-center justify-between max-md:w-full">
            <h1 className="text-white text-[2.5rem] font-bold">
              &lt;<span className="sr-only">Marcos Pedro</span>/&gt;
            </h1>
            <a
              href="#"
              className="bg-gradient-to-r from-[#53F188] via-[#179541] to-[#179541] rounded-xl px-4 py-2 font-bold text-xl font-[Montserrat] text-center md:hidden"
            >
              Contato
            </a>
            <div className="md:hidden">
              {isMobile ? <MenuMobile /> : <LinksNav />}
            </div>
          </div>

          <div className="hidden md:block">{!isMobile && <LinksNav />}</div>

          <a
            href="#"
            className="bg-gradient-to-r from-[#53F188] via-[#179541] to-[#179541] rounded-xl px-4 py-2 font-bold text-xl font-[Montserrat] text-center hidden md:block"
          >
            Contato
          </a>
        </nav>

        <div className="border-t border-[rgba(111,110,110,0.5)]"></div>
      </div>
      <div
        className="container relative flex justify-center items-center h-[calc(100vh-85px)] md:h-[calc(100%-85.1px)] max-md:text-center"
        // style={{ height: 'calc(100% - 85.1px)' }}
      >
        <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center w-full">
          <div className="text-white">
            <span className="text-[1.5rem] md:text-[2.4rem] font-medium font-[Montserrat]">
              Olá, me chamo
            </span>

            <TypingText
              text="Marcos Pedro"
              typeSpeed={100}
              className={`
              max-md:ms-6 text-[2.5rem] md:text-[5rem] font-medium md:min-w-[750px]
              tracking-wider leading-none
              text-transparent bg-clip-text bg-gradient-to-r from-[#44D073] to-[#53F188]
            `}
            />

            <p className="font-[Montserrat] text-xl text-[#828282] mb-10">
              Desenvolvedor FullStack
            </p>
            <a
              href="#"
              className="
              px-5 py-3 border-[3px] border-[#3DA661] rounded-lg text-primary-light font-bold box-border block w-fit
              hover:bg-[#3DA661] hover:text-white transition-all ease-in duration-
              max-md:mx-auto
            "
            >
              Entrar em contato
            </a>
          </div>
          <div className="relative w-[80%] px-5 md:px-0 sm:w-[400px] h-auto z-0 max-md:mb-6">
            <Image
              src={
                isMobile
                  ? '/imgs/foto_rosto_mobile.png'
                  : '/imgs/foto_rosto.png'
              }
              alt="Descrição da imagem"
              layout="intrinsic"
              className="object-cover z-0"
              width={500}
              height={550}
            />
          </div>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 md:bottom-4">
            <IconArrowDown className="w-13 h-14 hover:scale-125 transition-all duration-300 cursor-pointer" />
          </span>
          <SociaisHeader />
        </div>
      </div>
    </header>
  );
}
