/*

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">

      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img alt="song_img" src={song.images?.coverart} className="w-full h-full rounded-lg" />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            {song.subtitle}
          </Link>
        </p>
      </div>

    </div>
  );
};

export default SongCard;

*/

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { setActiveSong, playPause } from '../redux/features/playerSlice';

const SongCard = ({ activeSong, isPlaying, song, data, i }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ data, song, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex  flex-col w-[250px] bg-white/5 bg-opacity-80 bg-gradient-to-br from-[#0004fe] to-[#ff00e6] backdrop-blur-sm animate-slideup  rounded-lg p-4  cursor-pointer">

      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause
            activeSong={activeSong}
            isPlaying={isPlaying}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img src={song?.images?.coverart} className="w-full h-full rounded-lg" />
      </div>

      <div className="flex flex-col">
        <h3 className="font-semibold  text-lg sm:text-xl 2xl:text-2xl text-white truncate my-2">
          <Link to={`/songs/${song?.key}`}>
            {song?.title}
          </Link>
        </h3>
        <p className="text-base text-gray-300 truncate">
          <Link to={song?.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            {song?.subtitle}
          </Link>
        </p>
      </div>

    </div>
  );
};

export default SongCard;

