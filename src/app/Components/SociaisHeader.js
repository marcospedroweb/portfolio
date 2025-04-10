import React from 'react'
import { IconLinkedin } from '../../../public/icons/IconLinkedin'
import { IconGithub } from '../../../public/icons/IconGithub'
import { IconWhatsapp } from '../../../public/icons/IconWhatsapp'

const SociaisHeader = () => {
  return (
    <div className='flex flex-col justify-center items-center absolute right-[-64px] bottom-16 gap-3'>
      <span className='inline-block w-1 h-20 bg-[#1D753B] mb-2'></span>
      <a href="">
        <IconLinkedin className='h-6 hover:text-gray-400' />
      </a>
      <a href="">
        <IconGithub className='h-6 hover:text-gray-400' />
      </a>
      <a href="">
        <IconWhatsapp className='h-6 hover:text-gray-400' />
      </a>
    </div>
  )
}

export default SociaisHeader