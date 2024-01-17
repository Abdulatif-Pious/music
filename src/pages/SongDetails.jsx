import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from '../redux/services/shazamCore';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songId, artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching: isFetchinRelatedSongs, error } = useGetSongRelatedQuery({ songId });
  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songId });

  if (isFetchingSongDetails && isFetchinRelatedSongs) return <Loader title="Searching song details..." />;

  if (error) return <Error />;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <>
      <DetailsHeader
        artistId={artistId}
        songData={songData}
      />

      <div className="my-10 flex flex-col items-center">
        <h2 className="font-semibold text-white text-lg">Lyrics:</h2>

        <div className="mt-5">
          {songData?.sections[1].type === 'LYRICS' ? 
            songData?.sections[1]?.text.map((line, i) => (
              <p key={`lyrics-${line}-${i}`} className="text-white my-1">{line}</p>
            ))
            : (
              <p className="text-white  my-1">No lyrics found!</p>
            )}
        </div>
      </div>

      <RelatedSongs
        data={data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />

    </>
  );
};

export default SongDetails;
