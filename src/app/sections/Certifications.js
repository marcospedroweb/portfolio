import React from 'react'
import CertificationCard from '../Components/CertificationCard'

const Certifications = () => {
  return (
    <div className='bg-[#222] py-24'>
      <div className="container">
        <h3 className="font-bold text-5xl mb-8 position w-fit mx-auto text-white
        underline-center      
        ">Certificações</h3>
        <div className='flex flex-wrap justify-between items-center gap-y-6'>
          <CertificationCard name={'React Completo'} company={'ORIGAMID'} date={new Date('2023-06-01')} time={"50h"} />
          <CertificationCard name={'React Completo'} company={'ORIGAMID'} date={new Date('2023-06-01')} time={"50h"} />
          <CertificationCard name={'React Completo'} company={'ORIGAMID'} date={new Date('2023-06-01')} time={"50h"} />
          <CertificationCard name={'React Completo'} company={'ORIGAMID'} date={new Date('2023-06-01')} time={"50h"} />
          <CertificationCard name={'React Completo'} company={'ORIGAMID'} date={new Date('2023-06-01')} time={"50h"} />
          <CertificationCard name={'React Completo'} company={'ORIGAMID'} date={new Date('2023-06-01')} time={"50h"} />
        </div>
      </div>
    </div>
  )
}

export default Certifications