// src/services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com';

/**
 * Fetches user data from the GitHub API based on advanced search criteria.
 * @param {string} username - The GitHub username to search for.
 * @param {string} location - The location to filter by (optional).
 * @param {number} minRepos - The minimum number of repositories to filter by (optional).
 * @returns {Promise<Object>} - A promise resolving to the user data.
 * @throws Will throw an error if the search fails.
 */
export const fetchUserData = async (username, location, minRepos) => {
    try {
        // Construct the query parameters
        let query = `user:${username}`;
        if (location) query += `+location:${location}`;
        if (minRepos) query += `+repos:>${minRepos}`;

        // Make the API request with the constructed query
        const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
        return response.data; // Return the search results
    } catch (error) {
        throw new Error('Failed to fetch user data');
    }
};
