// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the API service

const Search = () => {
    const [input, setInput] = useState(''); // State for username
    const [location, setLocation] = useState(''); // State for location
    const [minRepos, setMinRepos] = useState(''); // State for minimum repositories
    const [loading, setLoading] = useState(false); // Loading state
    const [userData, setUserData] = useState([]); // User data state (array for multiple results)
    const [error, setError] = useState(null); // Error state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setUserData([]);

        try {
            const data = await fetchUserData(input, location, minRepos);
            setUserData(data.items); // Set array of user data
        } catch (err) {
            setError(err.message); // Set error message
        } finally {
            setLoading(false); // End loading
        }

        setInput('');
        setLocation('');
        setMinRepos('');
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">GitHub User Search</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-4">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter GitHub username"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <button
                        type="submit"
                        className="p-2 bg-blue-500 text-white rounded-md"
                    >
                        Search
                    </button>
                </div>

                <div className="flex gap-4">
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Location (optional)"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <input
                        type="number"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                        placeholder="Min repos"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
            </form>

            {/* Conditional rendering for loading and error */}
            {loading && <p className="text-center mt-4">Loading...</p>}
            {error && <p className="text-center mt-4 text-red-500">{error}</p>}

            {/* Display user data */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {userData.length > 0 && userData.map((user) => (
                    <div
                        key={user.id}
                        className="p-4 border border-gray-200 rounded-lg shadow-sm text-center"
                    >
                        <img
                            src={user.avatar_url}
                            alt={user.login}
                            className="w-32 h-32 mx-auto rounded-full"
                        />
                        <h3 className="mt-4 text-xl font-semibold">{user.login}</h3>
                        {user.name && <p className="text-gray-600">{user.name}</p>}
                        {user.location && <p className="text-gray-500">Location: {user.location}</p>}
                        <p className="text-gray-500">Repos: {user.public_repos}</p>
                        <a
                            href={user.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 text-blue-500 underline"
                        >
                            View GitHub Profile
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
