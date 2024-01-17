import React, {  useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import PlayPause from './PlayPause';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

import 'swiper/css';
import 'swiper/css/free-mode';

const TopChart = ({ song, isPlaying, activeSong, i, handlePauseClick, handlePlayClick }) => {
  return (
    <div 
      className={`flex flex-row items-center rounded-lg py-2 p-4 mb-4 hover:bg-transparent/10 ${activeSong?.title === song?.title ? 'bg-transparent/20' : 'bg-transparent'}`}
    >
      <h3 className="font-semibold  text-white mr-3">{i + 1}.</h3>

      <div className="w-full flex flex-row items-center">
        <img
          alt={song?.title}
          src={song?.images?.coverart}
          className="w-20 h-20 rounded-lg object-cover shadow-md shadow-[#0004fe]"
        />
        <div className="flex flex-col justify-center ml-5">
          <h3 className="font-semibold text-lg truncate text-white hover:text-white/80">
            <Link to={`/songs/${song?.key}`} >
              {song?.title}
            </Link>
          </h3>
          <p className="text-gray-300 mt-2 italic truncate hover:text-gray-300/80">
            <Link to={`/artists/${song?.artists[0]?.adamid}`}>
              {song?.subtitle}
            </Link>
          </p>
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
};
  

const TopPlay = () => {
  const dispatch = useDispatch();
  const { isPlaying, activeSong } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();

  const divRef = useRef(null);

  const songs = data?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div ref={divRef} className="xl:ml-6 ml-0 flex-1 xl:mb-6 mb-6 flex flex-col xl:max-w-[500px] max-w-full">
      <div className="w-full flex flex-col">
        <div className="flex flex-row  items-center justify-between">
          <h2 className="font-semibold text-2xl text-white">Top Charts</h2>
          <Link to="/top-charts">
            <p className="text-[#0004fe] italic cursor-pointer hover:text-[#0004feaa]">See more</p>
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
          <h2 className="font-semibold text-2xl text-white">Top Artists</h2>
          <Link to="/top-artists">
            <p className="text-[#0004fe] italic cursor-pointer hover:text-[#0004feaa]">see more</p>
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
