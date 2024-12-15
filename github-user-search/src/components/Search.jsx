// src/components/Search.jsx
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from refreshing the page
        if (input.trim()) {
            onSearch(input); // Call the parent function with the input value
        }
        setInput(''); // Clear the input field after search
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter GitHub username"
                style={{
                    padding: '10px',
                    width: '250px',
                    marginRight: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                }}
            />
            <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px', background: '#007BFF', color: 'white', border: 'none' }}>
                Search
            </button>
        </form>
    );
};

export default Search;
