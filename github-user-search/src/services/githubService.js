import axios from 'axios';

// Base URL for GitHub API
const BASE_URL = 'https://api.github.com';

// Function to search for users based on a query (already present)
export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = username ? `${username} in:login` : '';

    if (location) {
      query += ` location:${location}`;
    }

    if (minRepos) {
      query += ` repos:>${minRepos}`;
    }

    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error searching for GitHub users:', error);
    throw error;
  }
};

// Function to fetch detailed information about a single GitHub user
export const fetchUserData = async (username) => {
  try {
    // Make the GET request to GitHub API to fetch user data
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data; // Return the user data
  } catch (error) {
    console.error(`Error fetching data for user: ${username}`, error);
    throw error;
  }
};
