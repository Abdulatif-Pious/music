/*

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';

import { logo } from '../assets';

const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        onClick={handleClick}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex flex-col w-[240px] py-10 px-4 bg-black">
        <img src={logo} alt="logo" className="w-full h-14 object-contain mt-8" />
        <NavLinks />
      </div>

      /* {/* Mobile sidebar */ /*
      <div className="absolute block md:hidden top-6 right-4 z-10">
        {!mobileMenuOpen ? (
          <HiOutlineMenu className="w-6 h-6 mr-2 mt-2 text-white cursor-pointer" onClick={() => setMobileMenuOpen(true)} />
        ) : (
          <RiCloseLine className="w-6 h-6 mr-2 mt-2 text-white cursor-pointer" onClick={() => setMobileMenuOpen(false)} />
        )}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain mt-2" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;

*/

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
  <div className="mt-4">
    {links.map((link) => (
      <NavLink
        key={link.name}
        to={link.to}
        className="flex  justify-center flex-row sm:p-4 p-2 text-[#ff00e6] hover:text-cyan-400"
        onClick={handleClick}
      >
        <link.icon className="w-6 h-6 mr-2 cursor-pointer" />
        <h3 className="md:text-xl">{link.name}</h3>
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className="hidden md:flex flex-col py-2 w-[350px]  bg-gradient-to-tr from-[#0004fe] to-[#ff00e6] backdrop-blur-md">
        <img src={logo} alt="logo" className="w-full h-14 object-contain my-8" />
        <NavLinks />
      </div>

      {/* mobile sidebar */}
      <div className="block md:hidden absolute top-4 right-4 z-10">
        {mobileMenu ? (
          <RiCloseLine size={30} className="w-6 h-6 mt-6 mr-4 text-[#0004fe] cursor-pointer" onClick={() => setMobileMenu(false)} />
        ) : (
          <HiOutlineMenu size={30} className="w-6 h-6 mt-6 mr-4 text-[#0004fe] cursor-pointer" onClick={() => setMobileMenu(true)} />
        )}
      </div>

      {mobileMenu && (
        <div className="block md:hidden items-center  h-screen w-full  bg-gradient-to-br from-[#0f39aa] to-[#f700da] smooth-transition z-10 backdrop-blur-md">
          <img src={logo} alt="logo" className="w-full h-16  mt-8 object-contain" />
          <NavLinks handleClick={() => setMobileMenu(false)} />
        </div>
      )}
    </>
  );
};

export default Sidebar;

