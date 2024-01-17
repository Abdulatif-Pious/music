import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineHome, HiOutlineHashtag, HiOutlineUserGroup, HiOutlinePhotograph } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';

import { logo } from '../assets';

const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Around You', to: 'around-you', icon: HiOutlineHashtag },
];

const NavLinks = ({ handleClick }) => (
  <>
    {links.map((link) => (
      <NavLink
        key={link.name}
        to={link.to}
        className="flex justify-center gap-x-2 text-white sm:p-4 p-2 hover:text-[#ff00e6]"
        onClick={handleClick}
      >
        <link.icon className="w-6 h-6 cursor-pointer" />
        <h3 className="md:text-xl">{link.name}</h3>
      </NavLink>
    ))}
  </>
);

const Sidebar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className="hidden xl:flex flex-col h-screen py-2 w-[350px]   bg-gradient-to-tr from-[#0004fe] to-[#ff00e6] backdrop-blur-md">
        <Link to="/" className='flex justify-center w-full h-14 my-4'>
          <img src={logo} alt="logo" className="w-fit h-full object-contain" />
        </Link>
        <NavLinks />
      </div>

      {/* mobile sidebar */}
      <div className="block xl:hidden absolute right-4 z-10">
        {mobileMenu ? (
          <RiCloseLine size={30} className="w-6 h-6 mt-6 mr-4 text-[#0004fe] cursor-pointer" onClick={() => setMobileMenu(false)} />
        ) : (
          <HiOutlineMenu size={30} className="w-6 h-6 mt-6 mr-4 text-[#0004fe] cursor-pointer" onClick={() => setMobileMenu(true)} />
        )}
      </div>

      {mobileMenu && (
        <div className="block xl:hidden items-center absolute w-4/5 h-screen overflow-y-auto scrollbar  bg-gradient-to-br from-[#0f39aa] to-[#f700da] smooth-transition z-30 backdrop-blur-md">
          <Link to="/" className='flex justify-center w-full h-14 my-4'>
            <img src={logo} alt="logo" className="w-fit h-full object-contain" />
          </Link>
          
          <NavLinks handleClick={() => setMobileMenu(false)} />
        </div>
      )}
    </>
  );
};

export default Sidebar;

