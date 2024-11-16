import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGitHubUser } from '../redux/githubSlice';

const SearchBar = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (username) {
      dispatch(fetchGitHubUser(username));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Busca un usuario de GitHub"
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;