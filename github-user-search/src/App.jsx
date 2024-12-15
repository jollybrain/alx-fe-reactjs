// src/App.jsx
import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

const App = () => {
    const [userData, setUserData] = useState(null); // Holds GitHub user data
    const [loading, setLoading] = useState(false); // Indicates loading state
    const [error, setError] = useState(null); // Holds error messages

    const handleSearch = async (username) => {
        setLoading(true); // Start loading
        setError(null); // Clear previous errors
        setUserData(null); // Clear previous user data

        try {
            const data = await fetchUserData(username); // Call API service
            setUserData(data); // Set the user data
        } catch (err) {
            setError(err.message); // Set error message
        } finally {
            setLoading(false); // End loading
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>GitHub User Search</h1>
            <Search onSearch={handleSearch} /> {/* Pass the search handler */}

            {loading && <p>Loading...</p>} {/* Show loading state */}
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error message */}
            {userData && ( /* Display user details when available */
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

export default App;
