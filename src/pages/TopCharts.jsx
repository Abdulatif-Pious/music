import React from 'react';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopCharts = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  const { isPlaying, activeSong } = useSelector((state) => state.player);

  if (isFetching) return <Loader title="Loading Top Charts..." />;

  if (error) return <Error />;

  return (
    <>
      <h2 className="font-semibold text-2xl text-white text-center  my-8">
        Top {" "}
        <span className='bold text-[#ff00e6] italic'>Charts</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-8 pb-40">
        {data?.map((song, i) => (
          <SongCard
            key={`${song}-${i}`}
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

export default TopCharts;
