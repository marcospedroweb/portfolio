import React from 'react';
import CertificationCard from '../Components/CertificationCard';
import MainHeading from '../Components/MainHeading';

const Certifications = () => {
  return (
    <div className="bg-[#222] py-24 pb-40">
      <div
        className="container px-7 scroll-mt-32"
        id="Certificados"
        data-aos="fade-down"
      >
        <MainHeading text="Certificações" />
        <div className="flex flex-wrap justify-center gap-2 md:gap-6">
          <CertificationCard
            name={'Front End & UX/UI Design'}
            company={'ORIGAMID'}
            date={new Date('2024-09-24')}
            time={'304h'}
            link={'https://www.origamid.com/certificate/3a2a91c5'}
          />
          <CertificationCard
            name={'Tailwind CSS'}
            company={'ORIGAMID'}
            date={new Date('2025-03-27')}
            time={'16h'}
            link={'https://www.origamid.com/certificate/81038a1c'}
          />
          <CertificationCard
            name={'Next.js'}
            company={'ORIGAMID'}
            date={new Date('2024-09-12')}
            time={'22h'}
            link={'https://www.origamid.com/certificate/b8413535'}
          />
          <CertificationCard
            name={'Redux com React'}
            company={'ORIGAMID'}
            date={new Date('2024-11-12')}
            time={'16h'}
            link={'https://www.origamid.com/certificate/76535e6b'}
          />
          <CertificationCard
            name={'React Completo'}
            company={'ORIGAMID'}
            date={new Date('2023-06-15')}
            time={'36h'}
            link={'https://www.origamid.com/certificate/32a201ba'}
          />
          <CertificationCard
            name={'JavaScript Completo ES6'}
            company={'ORIGAMID'}
            date={new Date('2022-07-26')}
            time={'74h'}
            link={'https://origamid.com/certificate/81cd4566'}
          />
          <CertificationCard
            name={'HTML e CSS para Iniciantes'}
            company={'ORIGAMID'}
            date={new Date('2021-12-13')}
            time={'46h'}
            link={'https://www.origamid.com/certificate/b83932cf/'}
          />
          <CertificationCard
            name={'Web Design Completo'}
            company={'ORIGAMID'}
            date={new Date('2021-10-12')}
            time={'44h'}
            link={'https://www.origamid.com/certificate/ec511a64/'}
          />
          <CertificationCard
            name={'Curso Web Design Completo'}
            company={'Serliv'}
            date={new Date('2021-07-01')}
            time={'54h'}
            link={
              'https://www.udemy.com/certificate/UC-00741f29-caab-43fd-93f7-515865cbb131/'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Certifications;
