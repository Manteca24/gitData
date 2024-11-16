import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGitHubUser } from './redux/githubSlice';
import GithubUser from './components/GithubUser';

const App = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const { user, status, error } = useSelector((state) => state.github);

  const handleSearch = () => {
    if (username.trim()) {
      dispatch(fetchGitHubUser(username));
    }
  };

  return (
    <>
     <h1>Buscador de Usuarios de GitHub</h1>
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Ingresa un nombre de usuario"/>
        <button onClick={handleSearch}>Buscar</button>
      </div>
    <GithubUser />
    </>
  );
};

export default App;