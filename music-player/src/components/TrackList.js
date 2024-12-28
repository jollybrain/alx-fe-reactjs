import React from 'react';

const TrackList = ({ tracks }) => (
  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {tracks.map((track) => (
      <div key={track.id} className="bg-gray-700 p-4 rounded-md">
        <img
          src={track.album.images[0]?.url}
          alt={track.name}
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="mt-4">
          <h2 className="text-xl font-bold">{track.name}</h2>
          <p className="text-gray-300">{track.artists.map((artist) => artist.name).join(', ')}</p>
        </div>
        <audio controls className="w-full mt-4">
          <source src={track.preview_url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    ))}
  </div>
);

export default TrackList;
