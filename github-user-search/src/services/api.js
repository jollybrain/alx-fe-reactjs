// src/services/api.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY || ''}`,
    },
});

export const fetchUser = async (username) => {
    try {
        const response = await api.get(`/users/${username}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};
