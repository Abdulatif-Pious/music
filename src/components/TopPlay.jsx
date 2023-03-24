/* eslint-disable import/no-unresolved */

/*

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

import 'swiper/css';
import 'swiper/css/free-mode';

const TopChartCard = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>

    <div className="flex-1 flex flex-row justify-between items-center">
      <img className="w-20 h-20 rounded-lg" src={song?.images?.coverart} alt={song?.title} />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link to={`/songs/${song.key}`}>
          <p className="text-xl font-bold text-white">
            {song?.title}
          </p>
        </Link>
        <Link to={`/artists/${song?.artists[0].adamid}`}>
          <p className="text-base text-gray-300 mt-1">
            {song?.subtitle}
          </p>
        </Link>
      </div>
    </div>

    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </div>
);

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  const topPlays = data?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Charts</h2>
          <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((song, i) => (
            <TopChartCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, i)}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Artists</h2>
          <Link to="/top-artists">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>

        <Swiper
          slidesPerView="auto"
          spaceBetween="15"
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {topPlays?.map((artist) => (
            <SwiperSlide
              key={artist?.key}
              style={{ width: '25%', height: 'auto' }}
              className="shadow-lg rounded-full animate-slideright"
            >
              <Link to={`/artists/${artist?.artists[0].adamid}`}>
                <img src={artist?.images?.background} alt="Name" className="rounded-full w-full object-cover" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};

export default TopPlay;

*/

import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import PlayPause from './PlayPause';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

import 'swiper/css';
import 'swiper/css/free-mode';

const TopChart = ({ song, isPlaying, activeSong, i, handlePauseClick, handlePlayClick }) => (
  <div className={`flex flex-row items-center rounded-lg py-2 p-4 mb-4 cursor-pointer hover:bg-[#4c426e] ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'}`}>
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>

    <div className="w-full flex flex-row items-center  cursor-pointer">
      <img
        alt={song?.title}
        src={song?.images?.coverart}
        className="w-20 h-20 rounded-lg object-cover shadow-md shadow-[#0004fe]"
      />
      <div className="flex flex-col justify-center ml-5">
        <Link to={`/songs/${song?.key}`}>
          <p className="font-bold text-2xl text-white">{song?.title}</p>
        </Link>
        <Link to={`/artists/${song?.artists[0]?.adamid}`}>
          <p className="text-base text-gray-300 mt-2">{song?.subtitle}</p>
        </Link>
      </div>
    </div>

    <PlayPause
      song={song}
      isPlaying={isPlaying}
      activeSong={activeSong}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </div>
);

const TopPlay = () => {
  const dispatch = useDispatch();
  const { isPlaying, activeSong } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();

  const divRef = useRef(null);

  const songs = data?.slice(0, 5);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div ref={divRef} className="xl:ml-6 ml-0 flex-1 xl:mb-6 mb-6  flex flex-col xl:max-w-[500px] max-w-full">
      <div className="w-full flex flex-col">
        <div className="flex flex-row  items-center justify-between">
          <h2 className="font-bold text-2xl text-white">Top Charts</h2>
          <Link to="/top-charts">
            <p className="text-gray-700 text-base cursor-pointer">See more</p>
          </Link>
        </div>
        <div className="flex flex-col w-full mt-4">
          {songs?.map((song, i) => (
            <TopChart
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, i)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full mt-8">
        <div className="flex flex-row justify-between items-center w-full ">
          <h2 className="text-bold text-2xl text-white">Top Artists</h2>
          <Link to="/top-artists">
            <p className="text-base text-gray-700 cursor-pointer">see more</p>
          </Link>
        </div>
        <Swiper
          slidesPerView="auto"
          spaceBetween="15"
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {songs?.map((artist) => (
            <SwiperSlide
              key={artist?.key}
              style={{ width: '25%', height: 'auto' }}
              className="shadow-lg  rounded-full animate-slideright"
            >
              <Link to={`/artists/${artist?.artists[0]?.adamid}`}>
                <img
                  src={artist?.images?.background}
                  alt="Name"
                  className="rounded-full  w-full object-cover"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
