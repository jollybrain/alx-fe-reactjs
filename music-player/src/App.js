import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TrackList from './components/TrackList';
import { useMusicStore } from './store/musicStore';

function App() {
  const { tracks } = useMusicStore();

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Header />
      <main className="p-6">
        <SearchBar />
        <TrackList tracks={tracks} />
      </main>
    </div>
  );
}

export default App;
