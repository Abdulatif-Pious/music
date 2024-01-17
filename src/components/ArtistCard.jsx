import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex w-[300px] flex-col bg-white/5 bg-opacity/80 animate-slideup bg-gradient-to-br from-[#0004fe] to-[#ff00e6] p-4 backdrop-blur-sm rounded-lg cursor-pointer"
      onClick={() => navigate(`/artists/${track?.artists[0]?.adamid}`)}
    >
      <img src={track?.images?.coverart} alt="song img" className="w-full h-56 rounded-lg" />
      <h2 className="font-semibold  text-lg text-white truncate my-2 hover:text-white/80">{track?.subtitle}</h2>
    </div>
  );
};

export default ArtistCard;
