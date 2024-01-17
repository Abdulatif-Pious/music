import React from 'react';

import { Error, Loader, ArtistCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading Top Artists..." />;

  if (error) return <Error />;

  return (
    <>
      <h2 className="font-semibold text-2xl text-white text-center my-8">
        Top {" "}
        <span className='bold text-[#ff00e6] italic'>Artists</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-8 pb-40">
        {data?.map((track) => <ArtistCard key={track.key} track={track} />)}
      </div>
    </>
  );
};

export default TopArtists;
