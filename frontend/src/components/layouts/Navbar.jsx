import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';
import SideMenu from './SideMenu'

const Navbar = ({activeMenu}) => {
  const [ openSideMenu, setOpenSideMenu ] = useState(false)
  return (
    <div className='flex gap-5 bg-white border border-b border-gray-200/50 backdrop-blur-[20px] py-4 px-7 sticky top-0 z-30'>
      <button
      className='block lg:hidden text-black'
      onClick={() => {
        setOpenSideMenu(!openSideMenu)
      }}
      > { openSideMenu ? (
        <X className='text-2xl' />
      ) : (
        <Menu className='text-2xl' />
      )} </button>

      <h2 className='text-2xl font-medium text-black'> T R A S H W I S E </h2>
      { openSideMenu && (
        <div className='fixed top-[61px] -ml-4 bg-white'>
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  )
}

export default Navbar