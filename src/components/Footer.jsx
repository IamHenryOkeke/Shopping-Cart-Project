import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#1c1d1f] text-white py-10 px-4 lg:px-28 flex justify-between mt-5'>
      <h1 className='md:text-lg font-medium'>The MarketPlace</h1>
      <p>© { new Date().getFullYear()} NmesomaHenry, Inc</p>
    </footer>
  )
}

export default Footer
