// src/services/githubService.js

const BASE_URL = "https://api.github.com";

/**
 * Searches GitHub users with advanced query parameters.
 * @param {string} username - The username to search for.
 * @param {string} [location] - The location filter (optional).
 * @param {number} [minRepos] - The minimum repository count filter (optional).
 * @param {number} [page=1] - The page number for paginated results (default is 1).
 * @param {number} [perPage=30] - The number of results per page (default is 30).
 * @returns {Promise<Array>} - A promise that resolves to an array of user objects.
 */
export const searchGitHubUsers = async (username, location = "", minRepos = 0, page = 1, perPage = 30) => {
  // Construct the query string
  let query = `q=${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  // Add pagination parameters
  const url = `${BASE_URL}/search/users?${query}&page=${page}&per_page=${perPage}`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    throw error; // Rethrow the error for higher-level handling
  }
};
