// src/services/githubService.js
import axios from 'axios';

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
        return response.data; // Return the user data if successful
    } catch (error) {
        // Handle errors, including if the user is not found
        if (error.response && error.response.status === 404) {
            throw new Error('Looks like we can’t find the user');
        }
        throw new Error('Something went wrong. Please try again.');
    }
};
