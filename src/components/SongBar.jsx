import React from 'react';
import { Link } from 'react-router-dom';

import PlayPause from './PlayPause';

const SongBar = ({ artistId, song, isPlaying, activeSong, i, handlePauseClick, handlePlayClick }) => (
  <div className={`w-full flex flex-row items-center   rounded-lg py-2 p-4 mb-2 hover:bg-transparent/10 ${activeSong?.title === song?.title ? 'bg-transparent/20' : 'bg-transparent'}`}>
    <h3 className="font-semibold text-white mr-4">
      {i + 1}.
    </h3>

    <div className="flex-1 flex flex-row">
      <img
        alt={song?.title}
        src={artistId ? song?.attributes?.artwork?.url : song?.images?.background}
        className="w-20 h-20 rounded-lg"
      />
      <div className="flex-1 flex flex-col justify-center ml-4 gap-3">
        {artistId ? (
          <p className="font-semibold text-lg text-white">
            {song?.attributes?.artistName}
          </p>
        ) : (
          <Link to={`/songs/${song?.key}`} className="font-semibold text-lg text-white w-fit hover:text-white/80">
            <p>{song?.title}</p>
          </Link>
        )}
        {artistId ? (
          <p className="text-gray-300  italic">{song?.attributes?.name}</p>
        ) : (
            <Link to={`/artists/${song?.artists?.[0]?.adamid}`} className="text-gray-300  italic w-fit hover:text-gray-300/80">
              <p className="text-gray-300  italic hover:text-gray-300/80">{song?.subtitle}</p>
            </Link>
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
