/*

import React from 'react';

import { loader } from '../assets';

const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <img src={loader} alt="loader" className="w-32 h-32 object-contain" />
    <h1 className="font-bold text-3xl text-white mt-2">{title || 'Loading'}</h1>
  </div>
);

export default Loader;

*/

import React from 'react';

import { logo } from '../assets';

const Loader = ({ title }) => {
  <div className="w-full flex flex-col justify-center items-center">
    <img src={logo} alt="logo" className="w-32 h-32 object-contain" />
    <h2 className="font-bold text-3xl text-white mt-2">{title || 'loading...'}</h2>
  </div>;
};

export default Loader;
