import axios from 'axios';

// Define the base URL for the GitHub API
const BASE_URL = 'https://api.github.com';

// Fetch GitHub user data by username
export const fetchAdvancedUserData = async (username, location, minRepos) => {
  const query = `q=${username}+location:${location}+repos:>${minRepos}`;
  const response = await axios.get(`${BASE_URL}/search/users?${query}`);
  return response.data;
};

