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
    <form onSubmit={handleSubmit} autoComplete="off" className="p-2 shadow">
      <div className="flex items-center bg-transparent/10 w-60 rounded-lg  p-2">
        <FiSearch color="#ff00e6" className="w-6 h-6" />
        <input
          name="search-input"
          type="search"
          className="bg-transparent text-[#ff00e6] border-0 placeholder:text-[#ff00e6]  focus:outline-none focus:border-[#ff00e6] px-4 py-1 w-full"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Searchbar;
