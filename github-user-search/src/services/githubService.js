import axios from 'axios';

// Base URL for GitHub API
const BASE_URL = 'https://api.github.com';

// Function to search for users based on a query, location, and min repository count
export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    // Construct the search query
    let query = username ? `${username} in:login` : ''; // Search by username (GitHub login)

    if (location) {
      query += ` location:${location}`; // Add location to the query if provided
    }

    if (minRepos) {
      query += ` repos:>${minRepos}`; // Add minimum repos to the query if provided
    }

    // Make the GET request to the GitHub Search API
    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);

    // Return the response data
    return response.data;
  } catch (error) {
    console.error('Error searching for GitHub users:', error);
    throw error;
  }
};
