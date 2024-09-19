import axios from 'axios';

// Define the base URL for the GitHub API
const BASE_URL = 'https://api.github.com';

// Fetch GitHub user data by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching the GitHub user data:', error);
    throw error;
  }
};
