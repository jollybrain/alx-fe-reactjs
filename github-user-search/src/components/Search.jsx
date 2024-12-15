// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the API service

const Search = () => {
    const [input, setInput] = useState(''); // State for input value
    const [loading, setLoading] = useState(false); // Loading state
    const [userData, setUserData] = useState(null); // User data state
    const [error, setError] = useState(null); // Error state

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form refresh
        setLoading(true); // Start loading
        setError(null); // Reset error state
        setUserData(null); // Clear previous data

        try {
            const data = await fetchUserData(input); // Fetch user data from API
            setUserData(data); // Set user data
        } catch (err) {
            setError(err.message); // Set error message
        } finally {
            setLoading(false); // End loading
        }

        setInput(''); // Clear input field
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} // Update input state
                    placeholder="Enter GitHub username"
                    style={{
                        padding: '10px',
                        width: '250px',
                        marginRight: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        borderRadius: '5px',
                        background: '#007BFF',
                        color: 'white',
                        border: 'none',
                    }}
                >
                    Search
                </button>
            </form>

            {/* Conditional rendering for various states */}
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>Looks like we can’t find the user</p>}
            {userData && (
                <div
                    style={{
                        marginTop: '20px',
                        border: '1px solid #ddd',
                        padding: '20px',
                        borderRadius: '10px',
                        display: 'inline-block',
                        textAlign: 'left',
                    }}
                >
                    <img
                        src={userData.avatar_url}
                        alt={userData.login}
                        style={{ width: '100px', borderRadius: '50%' }}
                    />
                    <h2>{userData.name || userData.login}</h2>
                    <p><strong>Username:</strong> {userData.login}</p>
                    <p><strong>Public Repos:</strong> {userData.public_repos}</p>
                    <p><strong>Followers:</strong> {userData.followers}</p>
                    <p>
                        <a
                            href={userData.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View GitHub Profile
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Search;
