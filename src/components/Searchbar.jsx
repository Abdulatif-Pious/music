/*

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="py-4 px-8  relative ">
      <div className="flex items-center">
        <FiSearch aria-hidden="true" className="w-6 h-6" />
        <input
          name="search-field"
          autoComplete="off"
          className="flex-1  border-none bg-transparent  placeholder-black outline-none  text-base text-black  p-4"
          placeholder="Search..."
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Searchbar;

*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
    setSearchTerm('');
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="p-3">
      <div className="flex items-center">
        <FiSearch color="#ff00e6" className="w-6 h-6" />
        <input
          name="search-input"
          type="search"
          className="bg-transparent text-[#de04ef] border-0 placeholder:text-[#ff00e6]  focus:outline-none focus:border-[#ff00e6] rounded-lg px-4 py-1 w-full"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Searchbar;
