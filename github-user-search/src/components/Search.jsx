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
    setError(''); // Reset the error message before a new search
    setUserData(null); // Reset the previous user data before a new search
    
    try {
      const data = await fetchUserData(username);
      
      // Check if the user exists by verifying the presence of the 'login' field
      if (data && data.login) {
        setUserData(data); // Set the user data if found
      } else {
        setError('Looks like we can’t find the user'); // Set the error message if user not found
      }
    } catch {
      setError('Looks like we can’t find the user'); // Handle any error during the fetch
    } finally {
      setLoading(false); // Stop loading indicator after fetch is complete
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
