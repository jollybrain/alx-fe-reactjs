// src/components/Search.jsx
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [input, setInput] = useState(''); // State for the input field

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (input.trim()) {
            onSearch(input); // Pass the input to the parent component's search handler
        }
        setInput(''); // Clear the input field after search
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)} // Update state with the input value
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
    );
};

export default Search;
