/*

import React from 'react';
import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => (
  <div className="relative w-full flex flex-col">
    <div className="w-full bg-gradient-to-l from-transparent to-black h-28 sm:48" />

    <div className="absolute inset-0 flex items-center">
      <img
        alt="profile"
        src={
          artistId ? artistData?.attributes?.artwork?.url
            .replace('{w}', '500')
            .replace('{h}', '500')
            : songData?.images?.coverart
        }
        className="w-28 sm:w-48 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
      />

      <div className="ml-5">
        <p className="font-bold sm:text-3xl text-xl text-white">
          {artistId ? artistData?.attributes?.name : songData?.title}
        </p>
        {!artistId && (
          <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
            <p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p>
          </Link>
        )}

        <p className="text-base text-gray-400 mt-2">
          {artistId
            ? artistData?.attributes?.genreNames[0]
            : songData?.genres?.primary}
        </p>
      </div>
    </div>

    <div className="w-full sm:h-44 h-24" />
  </div>
);

export default DetailsHeader;

*/

import React from 'react';
import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => (
  <div className="flex flex-col ">
    <div className="w-full flex-1  bg-gradient-to-tl rounded-2xl from-[#0004fe] to-[#ff00e6] p-6">

      <div className="inset-0 flex flex-col xl:flex-row items-center justify-between">
        <p className="font-bold text-lg sm:text-xl xl:text-3xl text-white">
          {artistId ? artistData?.attributes?.name : songData?.title}
        </p>
        <img
          alt="profile"
          src={artistId ? artistData?.attributes?.artwork?.url : songData?.images?.coverart}
          className="w-32 h-32 lg:w-32 lg-h-32 rounded-full object-cover border-2 shadow-lg shadow-bl"
        />
        <div className="flex flex-col">
          {!artistId && (
          <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
            <p className="text-lg text-white mt-4">{songData?.subtitle}</p>
          </Link>
          )}
          <p className="text-base text-center text-[#ff00e6] mt-8">Genres:</p>
          <p className="text-base text-white ">
            {artistId ? artistData?.attributes?.genreNames[0] : songData?.genres?.primary }
          </p>
        </div>
      </div>

    </div>
    <div className="w-full h-28 sm:48" />
  </div>
);

export default DetailsHeader;
