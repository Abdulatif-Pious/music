/*

import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle
      size={35}
      className="text-gray-300"
      onClick={handlePause}
    />
  ) : (
    <FaPlayCircle
      size={35}
      className="text-gray-300"
      onClick={handlePlay}
    />
  )
);

export default PlayPause;

*/

import React from 'react';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';

const PlayPause = ({ song, isPlaying, activeSong, handlePlay, handlePause }) => (
  isPlaying && activeSong?.title === song?.title ? (
    <FaPauseCircle
      size={35}
      className="text-gray-300"
      onClick={handlePause}
    />
  ) : (
    <FaPlayCircle
      size={35}
      className="text-gray-300"
      onClick={handlePlay}
    />
  )
);

export default PlayPause;
