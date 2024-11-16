import { useSelector } from 'react-redux';

const GithubUser = () => {
  const { user, status, error } = useSelector((state) => state.github);

  if (status === 'loading') return <p>Cargando...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;
  if (!user) return null;

  return (
    <div>
      <img src={user.avatar_url} alt={user.name} style={{ width: 100, borderRadius: '50%', marginTop:'30px'}} />
      <h2>{user.name}</h2>
      <p>Nombre de usuario: {user.login}</p>
      <p>Repos públicos: {user.public_repos}</p>
      <p>Seguidores: {user.followers}</p>
    </div>
  );
};

export default GithubUser;