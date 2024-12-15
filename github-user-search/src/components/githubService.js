// src/services/githubService.js
import axios from 'axios';

// Base URL for the GitHub API
const BASE_URL = 'https://api.github.com';

/**
 * Fetches user data from the GitHub API.
 * @param {string} username - The username to search for.
 * @returns {Promise<Object>} - A promise resolving to the user data.
 * @throws Will throw an error if the user is not found.
 */
export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${username}`);
        return response.data; // Returns the user data if successful
    } catch (error) {
        throw new Error('User not found'); // Throws an error if the user does not exist
    }
};
