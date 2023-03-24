/*

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img alt="song_img" src={track?.images?.coverart} className="w-full h-56 rounded-lg" />
      <p className="mt-4 font-semibold text-lg text-white truncate">
        {track?.subtitle}
      </p>
    </div>
  );
};

export default ArtistCard;

*/

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex w-[250px] flex-col bg-white/5 bg-opacity/80 animate-slideup bg-gradient-to-br from-[#0004fe] to-[#ff00e6] p-4 backdrop-blur-sm rounded-lg cursor-pointer"
      onClick={() => navigate(`/artists/${track?.artists[0]?.adamid}`)}
    >
      <img src={track?.images?.coverart} alt="song img" className="w-full h-56 rounded-lg" />
      <h2 className="xl:text-2xl text-lg my-2 text-white truncate">{track?.subtitle}</h2>
    </div>
  );
};

export default ArtistCard;
