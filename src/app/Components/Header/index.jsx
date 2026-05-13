'use client';
import { useIsMobile } from '@/app/hooks/useIsMobile';
import Image from 'next/image';
import MenuMobile from '../MenuMobile';
import LinksNav from '../LinksNav';
import { IconArrowDown } from '../../../../public/icons/IconArrowDown';
import { TypingText } from '../TypingText';
import SociaisHeader from '../SociaisHeader';
import { NameReveal } from '../NameReveal';

export function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="w-full h-screen bg-hero-custom">
      <div className="fixed top-0 left-0 right-0 bg-[#212121] z-10 w-full">
        <nav className="flex flex-col items-center justify-center w-full py-3 md:flex-row md:justify-between md:container md:gap-0 max-md:px-5">
          <h1 className="sr-only">Marcos Pedro</h1>
          <div className="md:hidden">
            <NameReveal name={'Marcos'} />
          </div>
          <div className="flex flex-row items-center justify-between max-md:w-full">
            <div className="hidden md:block">
              <NameReveal name={'Marcos'} />
            </div>
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
            href="#Contato"
            className="bg-gradient-to-r from-[#53F188] via-[#179541] to-[#179541] rounded-xl px-4 py-2 font-bold text-xl font-[Montserrat] text-center hidden md:block"
          >
            Contato
          </a>
        </nav>

        <div className="border-t border-[rgba(111,110,110,0.5)]"></div>
      </div>
      <div className="container relative flex items-center justify-center h-screen max-md:text-center">
        <div className="flex flex-col-reverse items-center justify-center w-full md:flex-row md:justify-between">
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
              href="https://wa.me/+5511980950160"
              target="_blank"
              className="
              px-5 py-3 border-[3px] border-[#3DA661] rounded-lg text-primary-light font-bold box-border block w-fit
              hover:bg-[#3DA661] hover:text-white transition-all ease-in duration-500
              max-md:mx-auto
            "
              data-aos="fade-right"
            >
              Entrar em contato
            </a>
          </div>
          <div
            className="relative w-[80%] px-5 md:px-0 sm:w-[400px] h-auto z-0 max-md:mb-6"
            data-aos="fade-left"
          >
            <Image
              src={
                isMobile
                  ? '/imgs/foto_rosto_mobile.png'
                  : '/imgs/foto_rosto.png'
              }
              alt="Descrição da imagem"
              layout="intrinsic"
              className="z-0 object-cover"
              width={500}
              height={550}
            />
          </div>
          <a
            href="#Sobre"
            className="absolute bottom-0 -translate-x-1/2 left-1/2 md:bottom-4"
          >
            <IconArrowDown className="transition-all duration-300 cursor-pointer w-13 h-14 hover:scale-125" />
          </a>
          <SociaisHeader />
        </div>
      </div>
    </header>
  );
}
