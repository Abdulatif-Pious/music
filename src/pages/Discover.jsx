import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';
import { genres } from '../assets/constants';

const Discover = () => {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP');

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  if (isFetching) return <Loader title="Loading Genre Songs..." />;

  if (error) return <Error />;

  return (
    <>
      <div className="text-center items-center flex flex-col 2xl:flex-row">
        <h2 className="flex-1  font-semibold text-white text-2xl my-8">
          Discover {" "}
          <span className='font-bold text-[#ff00e6] italic'>{genreTitle || 'Pop'}</span>
        </h2>
        <select
          value={genreListId || 'Pop'}
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          className="w-32  bg-black text-white  rounded-lg mb-6 p-4 outline-none 2xl:ml-auto"
        >
          {genres.map((genre) => (
            <option 
              key={genre.value} 
              value={genre.value}
              className="text-white"
            >
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap justify-center gap-8 pb-40">
        {data?.map((song, i) => (
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

export default Discover;
