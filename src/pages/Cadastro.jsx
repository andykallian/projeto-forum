import React, { useReducer, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UseContext';



const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const initialState = {
  user: { username: '', password: '' },
};

const Cadastro = () => {
  const { addUser } = useContext(UserContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleCadastro = () => {
    // Lógica para processar o cadastro com o backend

    // Exemplo de lógica fictícia para o cadastro
    if (state.user.username && state.user.password) {
      addUser(state.user);

      // Cadastro realizado com sucesso, redirecionar para a tela de login
      navigate('/');
    } else {
      // Exibir mensagem de erro, caso necessário
      alert('Preencha todos os campos');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_USER', payload: { ...state.user, [name]: value } });
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form>
        <label>
          Username:
          <input type="text" name="username" value={state.user.username} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={state.user.password} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={handleCadastro}>
          Cadastrar
        </button>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          Cancelar
        </Link>
      </form>
    </div>
  );
};

export default Cadastro;