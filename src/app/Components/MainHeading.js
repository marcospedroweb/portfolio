import React from 'react'

const MainHeading = ({ text, fade = '' }) => {
  return (
    <h3 className="mx-auto mb-12 text-5xl font-bold text-white position w-fit underline-center" data-aos={fade}>{text}</h3>
  )
}

export default MainHeading