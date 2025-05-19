import React from 'react'
import MainHeading from '../Components/MainHeading'
import IconFooter from '../Components/IconFooter'
import { IconLinkedin } from '../../../public/icons/IconLinkedin'
import { IconEmail } from '../../../public/icons/IconEmail'
import { IconGithub } from '../../../public/icons/IconGithub'
import { IconWhatsapp } from '../../../public/icons/IconWhatsapp'

const Footer = () => {
  return (
    <div className='bg-[#252525] py-56'>
      <div className="container text-center px-6 scroll-mt-32" id="Contato">
        <MainHeading text="Entre em contato" />
        <div className='flex flex-col md:flex-row flex-wrap justify-center items-center gap-8'>
          <IconFooter icon={<IconLinkedin className='h-10 fill-[#3DA661]' />} title={'Linkedin'} text={'@marcospedroalves'} link={'https://www.linkedin.com/in/marcospedroalves/'} />
          <IconFooter icon={<IconEmail className='h-10 fill-[#3DA661]' />} title={'Email'} text={'marcospedro.alves@outlook.com'} link={'mailto:marcospedro.alves@outlook.com'} />
          <IconFooter icon={<IconWhatsapp className='h-10 fill-[#3DA661]' />} title={'Whatsapp'} text={'(11) 98095-0160'} link={'https://wa.me/+5511980950160'} />
          <IconFooter icon={<IconGithub className='h-10 fill-[#3DA661]' />} title={'Github'} text={'@marcospedroalves'} link={'https://github.com/marcospedroweb'} />
        </div>
      </div>
    </div>
  )
}

export default Footer