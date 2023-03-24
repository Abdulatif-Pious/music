/*

/* eslint-disable no-nested-ternary */ /*
import React from 'react';
import { Link } from 'react-router-dom';

import PlayPause from './PlayPause';

const SongBar = ({ song, i, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>

    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-lg"
        src={artistId ? artistId?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125') : song?.images?.coverart}
        alt={song?.title}
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        {!artistId ? (
          <Link to={`/songs/${song.key}`}>
            <p className="text-xl font-bold text-white">
              {song?.title}
            </p>
          </Link>
        ) : (
          <p className="text-xl font-bold text-white">
            {artistId?.attributes?.name}
          </p>
        )}
        <p className="text-base text-gray-300 mt-1">
          {artistId ? artistId?.attributes?.genreNames[0] : song?.subtitle}
        </p>
      </div>
    </div>

    {!artistId && (
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={() => handlePlayClick(song, i)}
      />
    )}
  </div>
);

export default SongBar;

*/

import React from 'react';
import { Link } from 'react-router-dom';

import PlayPause from './PlayPause';

const SongBar = ({ artistId, song, isPlaying, activeSong, i, handlePauseClick, handlePlayClick }) => (
  <div className={`w-full flex flex-row items-center bg-[#999] hover:bg-[#666] cursor-pointer py-2 p-4 mb-2 ${activeSong?.title === song?.title ? 'bg-[#777]' : 'bg-transparent'}`}>
    <h3 className="text-xl font-bold text-white mr-4">
      {i + 1}.
    </h3>

    <div className="flex-1 flex flex-row">
      <img
        alt={song?.title}
        src={artistId ? song?.attributes?.artwork?.url : song?.images?.background}
        className="w-20 h-20 rounded-lg"
      />
      <div className="flex-1 flex flex-col mx-4 justify-between">
        {artistId ? (
          <p className="font-bold text-xl sm:text-2xl text-white">
            {song?.attributes?.artistName}
          </p>
        ) : (
          <Link to={`/songs/${song?.key}`}>
            <p className="font-bold text-xl sm:text-3xl text-white">
              {song?.title}
            </p>
          </Link>
        )}
        {artistId ? (
          <Link to={`/songs/${song?.key}`}>
            <p className="text-base text-white mb-2 cursor-pointer">
              {song?.attributes?.albumName}
            </p>
          </Link>
        )
          : (
            <p className="text-base text-white">{song?.subtitle}</p>
          )}
      </div>
    </div>

    {!artistId && (
      <PlayPause
        song={song}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePause={handlePauseClick}
        handlePlay={() => handlePlayClick(song, i)}
      />
    )}
  </div>
);

export default SongBar;
