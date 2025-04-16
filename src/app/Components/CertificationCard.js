import React from 'react'

const CertificationCard = ({ name, company, date, time }) => {
  return (
    <div
      className="flex items-center justify-between w-80 h-28 bg-[#323232] rounded-tr-2xl border-b-4 hover:border-b-8 border-b-[#3DA661] px-4 py-8 text-white hover:scale-105 transition-all duration-300 cursor-pointer"
    >
      <div>
        <h4 className='font-bold text-xl'>{name}</h4>
        <p className='text-sm text-[rgba(255,255,255,0.5)]'>{company} — {date.toLocaleDateString('pt-BR', {
          month: 'long',
          year: 'numeric'
        }) ?? 'Data inválida'}</p>
      </div>
      <div>
        <span className='text-2xl text-[rgba(255,255,255,0.5)]'>{time}</span>
      </div>
    </div>
  )
}

export default CertificationCard