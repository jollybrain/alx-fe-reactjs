import React, { useState } from 'react';
import { useMusicStore } from '../store/musicStore';
import axios from 'axios';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { setTracks } = useMusicStore();

  const searchMusic = async () => {
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchQuery)}&type=track`,
        {
          headers: {
            Authorization: `Bearer YOUR_SPOTIFY_ACCESS_TOKEN`,
          },
        }
      );
      setTracks(response.data.tracks.items);
    } catch (error) {
      console.error('Error fetching music data:', error);
    }
  };

  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search for music..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 w-full max-w-lg text-black rounded-l-md"
      />
      <button
        onClick={searchMusic}
        className="p-2 bg-green-500 hover:bg-green-600 rounded-r-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
