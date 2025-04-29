import React from 'react'
import MenuMobile from './MenuMobile'
import LinksNav from './LinksNav'

const Navigation = () => {
  return (
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
  )
}

export default Navigation