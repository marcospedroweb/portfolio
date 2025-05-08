import React from 'react'

const IconFooter = ({ icon, title, text, link }) => {
  return (
    <div className='text-center cursor-pointer hover:scale-110 ease-in duration-150'>
      <a href={link} target='_blank'>
        <div className='p-4 bg-[#323232] border-b-2 border-b-[#3DA661] w-fit mx-auto mb-3'>
          {icon}
        </div>
        <h4 className='text-xl text-white font-bold'>{title}</h4>
        <p className='text-[rgba(255,255,255,0.5)]'>{text}</p>
      </a>

    </div>
  )
}

export default IconFooter