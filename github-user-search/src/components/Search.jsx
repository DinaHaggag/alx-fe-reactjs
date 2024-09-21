import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [usersData, setUsersData] = useState([]); // Updated to handle multiple users
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Reset the error message before a new search
    setUsersData([]); // Reset the previous user data before a new search
    
    try {
      const data = await fetchUserData(username);
      
      // Check if an array of users is returned and set it in state
      if (data && Array.isArray(data.items)) {
        setUsersData(data.items); // Assuming `data.items` holds an array of users
      } else if (data && data.login) {
        setUsersData([data]); // If a single user is returned, convert to array
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
        <button type="submit">Search</button>
      </form>

      {/* Loading indicator */}
      {loading && <p>Loading...</p>}
      
      {/* Error message */}
      {error && <p>{error}</p>}

      {/* User data display */}
      <div>
        {usersData.length > 0 && usersData.map((user) => (
          <div key={user.id}>
            <img src={user.avatar_url} alt="Avatar" width="100" />
            <p>Name: {user.name || 'No name provided'}</p>
            <p>Login: {user.login}</p> {/* Display GitHub username */}
            <p>GitHub Profile: <a href={user.html_url}>{user.html_url}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
