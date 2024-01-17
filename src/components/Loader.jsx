import React from 'react';

import { logo } from '../assets';

const Loader = ({ title }) => {
  <div className="w-full flex flex-col justify-center items-center">
    <img src={logo} alt="logo" className="w-32 h-32 object-contain" />
    <h2 className="font-seimibold text-2xl text-white mt-2">{title || 'loading...'}</h2>
  </div>;
};

export default Loader;
