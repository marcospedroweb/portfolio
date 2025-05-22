import React from 'react'
import { IconLinkedin } from '../../../public/icons/IconLinkedin'
import { IconGithub } from '../../../public/icons/IconGithub'
import { IconWhatsapp } from '../../../public/icons/IconWhatsapp'

const SociaisHeader = () => {
  return (
    <div className='flex flex-col justify-center items-center absolute right-8 md:right-[-64px] bottom-8 md:bottom-16 gap-3'>
      <span className='w-1 h-20 bg-[#1D753B] mb-2 hidden md:inline-block'></span>
      <a href="https://www.linkedin.com/in/marcospedroalves/" target='_blanck'>
        <IconLinkedin className='h-6 hover:text-gray-400' />
      </a>
      <a href="https://github.com/marcospedroweb" target='_blanck'>
        <IconGithub className='h-6 hover:text-gray-400' />
      </a>
      <a href="https://wa.me/+5511980950160" target='_blanck'>
        <IconWhatsapp className='h-6 hover:text-gray-400' />
      </a>
    </div>
  )
}

export default SociaisHeader