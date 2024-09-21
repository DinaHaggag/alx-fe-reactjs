import { useState } from 'react';
import { searchUsers } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState(''); // State for location
  const [minRepos, setMinRepos] = useState(''); // State for minimum repositories
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsersData([]);

    try {
      // Call the searchUsers service with username, location, and minRepos
      const data = await searchUsers({ username, location, minRepos });

      if (data && data.items.length > 0) {
        setUsersData(data.items); // Store the user data in the state
      } else {
        setError('Looks like we can’t find the user');
      }
    } catch {
      setError('Looks like we can’t find the user');
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
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Enter minimum repositories"
        />
        <button type="submit">Search</button>
      </form>

      {/* Loading state */}
      {loading && <p>Loading...</p>}

      {/* Error message */}
      {error && <p>{error}</p>}

      {/* User results */}
      {usersData.length > 0 && usersData.map((user) => (
        <div key={user.id}>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <p>Name: {user.login}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
      ))}
    </div>
  );
};

export default Search;
