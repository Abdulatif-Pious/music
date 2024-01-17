import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { Searchbar, Sidebar, TopPlay, MusicPlayer } from './components';
import { Discover, AroundYou, TopArtists, TopCharts, ArtistDetails, SongDetails, Search } from './pages';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex">
      <Sidebar />

      <div className="flex-1 bg-gradient-to-tr from-[#0004fe]  to-[#ff00e6] ">
        <Searchbar />

        <div className="px-2 h-[calc(100vh-72px)] overflow-y-auto scrollbar  flex flex-col-reverse xl:flex-row ">
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:artistId" element={<ArtistDetails />} />
              <Route path="/songs/:songId" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="relative xl:sticky  top-0">
            <TopPlay />
          </div>
        </div>
      </div>
      {activeSong?.title && (
        <div className="h-28 absolute  bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
