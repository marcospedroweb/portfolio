'use client'
import { useIsMobile } from '../hooks/useIsMobile'

const CertificationCard = ({ name, company, date, time, link }) => {
  const isMobile = useIsMobile()
  return (
    <a
      className="flex flex-col md:flex-row items-center justify-center md:justify-between w-[48%] md:w-80 h-28 bg-[#323232] rounded-tr-2xl border-l-4 hover:border-l-8 border-l-[#3DA661] px-1 py-16 md:px-4 md:py-8 text-white hover:scale-105 transition-all duration-300 cursor-pointer text-center md:text-start gap-4 md:gap-2"
      href={link}
      target='_blank'
    >
      <div>
        <h4 className='font-bold md:text-base'>{name}</h4>
        <p className='text-xs text-[rgba(255,255,255,0.5)] flex flex-col md:flex-row'>
          {company} {!isMobile ? ' — ' : ''} {date.toLocaleDateString('pt-BR', {
            month: 'long',
            year: 'numeric'
          }) ?? 'Data inválida'}</p>
      </div>
      <div>
        <span className='text-2xl text-[rgba(255,255,255,0.5)]'>{time}</span>
      </div>
    </a>
  )
}

export default CertificationCard