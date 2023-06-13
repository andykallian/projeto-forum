import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UseContext';

const Login = () => {
  const { users, addUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLogin = () => {
    const user = users.find((user) => user.username === loginUsername && user.password === loginPassword);

    if (user) {
      addUser(user);
      setCurrentUser(user); // Define o usuário atual no contexto de usuário
      navigate('/forum');
      setLoginUsername('');
      setLoginPassword('');
    } else {
      alert('Usuário ou senha inválidos');
    }
  };

  const handleCadastroClick = () => {
    navigate('/cadastro');
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <p>
        Não tem uma conta? <button onClick={handleCadastroClick}>Cadastrar-se</button>
      </p>
    </div>
  );
};

export default Login;