import React from 'react'
import CertificationCard from '../Components/CertificationCard'
import MainHeading from '../Components/MainHeading'

const Certifications = () => {
  return (
    <div className='bg-[#222] py-24'>
      <div className="container px-7">
        <MainHeading text="Certificações" />
        <div className='flex flex-wrap justify-between items-center gap-x-1 gap-y-6'>
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