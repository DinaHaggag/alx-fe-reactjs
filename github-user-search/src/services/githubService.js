import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

// Function to search users with advanced options: username, location, and minimum repository count
export const searchUsers = async ({ username, location, minRepos }) => {
  // Build the query dynamically based on inputs
  const query = `q=${username}${location ? `+location:${location}` : ''}${
    minRepos ? `+repos:>=${minRepos}` : ''
  }`;

  try {
    // Make a GET request to GitHub API to fetch user data
    const response = await axios.get(`${GITHUB_API_BASE_URL}/search/users?${query}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from GitHub API');
  }
};
