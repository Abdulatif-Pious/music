import React from 'react';
import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => (
  <div className="w-full flex-1 text-center bg-gradient-to-tl rounded-2xl from-[#0004fe] to-[#ff00e6] p-6">
    <img
        alt="profile"
        src={artistId ? artistData?.attributes?.artwork?.url : songData?.images?.coverart}
        className="block mx-auto w-32 h-32 lg:w-32 lg-h-32 rounded-full object-cover border-2 shadow-lg shadow-bl"
    />
    <p className="font-semibold text-lg sm:text-xl xl:text-xl text-white my-4">
      {artistId ? artistData?.attributes?.name : songData?.title}
    </p>
    <div className="flex flex-col">
      {!artistId && (
      <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
        <p className="text-gray-300 hover:text-gray-300/80">{songData?.subtitle}</p>
      </Link>
      )}
      <p className="text-xs text-[#ff00e6] mt-8">Genres:
        <span className="text-white ">
          {" "}
          {artistId ? artistData?.attributes?.genreNames[0] : songData?.genres?.primary }
        </span>
      </p>
    </div>
  </div>
);

export default DetailsHeader;
