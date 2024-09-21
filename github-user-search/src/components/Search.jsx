import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await fetchUserData(username);
      // Check if the 'login' field exists in the response to verify user data
      if (data && data.login) {
        setUserData(data);
      } else {
        setError('Looks like we can’t find the user');
        setUserData(null); // Clear previous user data if no user found
      }
    } catch {
      setError('Looks like we cant find the user'); // No 'err' variable used here
      setUserData(null); // Clear user data on error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt="Avatar" width="100" />
          <p>Name: {userData.name}</p>
          <p>Login: {userData.login}</p> {/* Display GitHub username */}
          <p>GitHub Profile: <a href={userData.html_url}>{userData.html_url}</a></p>
        </div>
      )}
    </div>
  );
};

export default Search;
