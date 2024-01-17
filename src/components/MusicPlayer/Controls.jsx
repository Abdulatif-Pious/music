import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <BsArrowRepeat 
      size={20} 
      onClick={() => setRepeat((prev) => !prev)} 
      className={`hidden sm:block cursor-pointer ${repeat ? "text-[#ff00e6]" : "text-white"}`} 
    />
    {currentSongs?.length && 
      <MdSkipPrevious 
        size={30} 
        color="#FFF" 
        className="cursor-pointer" 
        onClick={handlePrevSong} />
    }
    {isPlaying ? (
      <BsFillPauseFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
    ) : (
      <BsFillPlayFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
    )}
    {currentSongs?.length && 
      <MdSkipNext 
        size={30} 
        color="#FFF" 
        className="cursor-pointer" 
        onClick={handleNextSong} 
      />
    }
    <BsShuffle 
      size={20} 
      onClick={() => setShuffle((prev) => !prev)} 
      className={`hidden sm:block cursor-pointer ${shuffle ? "text-[#ff00e6]" : "text-white"}`}  
    />
  </div>
);

export default Controls;
