import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';

const Search = () => {
  const { searchTerm } = useParams();
  const { isPlaying, activeSong } = useSelector((state) => state.player);
  const { data, error, isFetching } = useGetSongsBySearchQuery(searchTerm);

  const songs = data?.tracks?.hits?.map((song) => song.track);

  if (isFetching) return <Loader title={`Searching ${searchTerm}...`} />;

  if (error) return <Error />;

  return (
    <>
      <h2 className="font-semibold text-2xl text-center text-white  my-8">
        Showing results from {" "}
        <span className="bold text-[#ff00e6] italic">{searchTerm}</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-8 pb-40">
        {songs?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            activeSong={activeSong}
            isPlaying={isPlaying}
            data={data}
            i={i}
          />
        ))}
      </div>
    </>
  );
};

export default Search;

