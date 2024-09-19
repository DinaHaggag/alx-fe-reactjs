import axios from 'axios';

// Access the environment variable
const API_URL = import.meta.env.VITE_GITHUB_API_URL;

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
  const response = await axios.get(`${API_URL}/users/${username}`);
  return response.data;
};
