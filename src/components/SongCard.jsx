import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import PlayPause from './PlayPause';
import { setActiveSong, playPause } from '../redux/features/playerSlice';

const SongCard = ({ activeSong, isPlaying, song, data, i }) => {
  const { isActive } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  const handlePlayToggleClick = () => {
    if (!isActive || !isPlaying)  {
      dispatch(setActiveSong({ data, song, i }));
      dispatch(playPause(true));
    } else {
      dispatch(playPause(false))
    }
  };

  return (
    <div className="flex  flex-col w-[300px] bg-white/5 bg-opacity-80 bg-gradient-to-br from-[#0004fe] to-[#ff00e6] backdrop-blur-sm animate-slideup  rounded-lg p-4  cursor-pointer">

      <div className="relative w-full h-56 group">
        <div 
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}
          onClick={handlePlayToggleClick}
        >
          <PlayPause
            activeSong={activeSong}
            isPlaying={isPlaying}
            song={song}
          />
        </div>
        <img src={song?.images?.coverart} className="w-full h-full rounded-lg" />
      </div>

      <div>
        <h3 className="font-semibold  text-lg text-white  truncate my-2 hover:text-white/80">
          <Link to={`/songs/${song?.key}`}>
            {song?.title}
          </Link>
        </h3>
        <p className="text-gray-300 italic truncate hover:text-gray-300/80">
          <Link to={song?.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            {song?.subtitle}
          </Link>
        </p>
      </div>

    </div>
  );
};

export default SongCard;

