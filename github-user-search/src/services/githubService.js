import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

export const searchUsers = async ({ username, location, minRepos }) => {
  const query = `q=${username} ${location ? `location:${location}` : ''} ${
    minRepos ? `repos:>${minRepos}` : ''
  }`;

  const response = await axios.get(`${GITHUB_API_BASE_URL}/search/users?${query}`);
  return response.data;
};
