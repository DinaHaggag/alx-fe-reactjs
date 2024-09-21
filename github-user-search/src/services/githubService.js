import axios from 'axios';

// Base URL for GitHub API
const BASE_URL = 'https://api.github.com';

// Function to search for users based on a query
export const searchUsers = async (query) => {
  try {
    // Making a GET request to the GitHub Search API
    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    return response.data; // Return the response data (which contains users)
  } catch (error) {
    console.error('Error searching for GitHub users:', error);
    throw error;
  }
};
