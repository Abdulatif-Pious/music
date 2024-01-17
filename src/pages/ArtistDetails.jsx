import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Error, Loader, DetailsHeader, RelatedSongs } from '../components';
import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
  const { artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);

  if (isFetchingArtistDetails) return <Loader title="Loading Artist Details..." />;

  if (error) return <Error />;

  console.log("[ARTIST_DETAIL]",artistData)
  return (
    <>
      <DetailsHeader
        artistData={artistData?.data[0]}
        artistId={artistId}
      />

      <RelatedSongs
        data={artistData?.data[0]?.views['top-songs']?.data}
        artistId={artistId}
        activeSong={activeSong}
        isPlaying={isPlaying}
      />
    </>
  );
};

export default ArtistDetails;
