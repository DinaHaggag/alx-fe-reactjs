import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user data from GitHub API');
  }
};

export const searchUsers = async ({ username, location, minRepos }) => {
  const query = `q=${username}${location ? `+location:${location}` : ''}${minRepos ? `+repos:>=${minRepos}` : ''}`;

  try {
    const response = await axios.get(`https://api.github.com/search/users?${query}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users from GitHub API');
  }
};
