import React from 'react';

import SongBar from './SongBar';

const RelatedSongs = ({ artistId, data, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <>
    <h1 className="font-semibold text-lg text-center text-white my-6">Related Songs:</h1>
    <div className="mt-6 w-full pb-40">
      {data?.map((song, i) => (
        <SongBar
          key={`${song.key}-${song}-${i}`}
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  </>
);

export default RelatedSongs;
