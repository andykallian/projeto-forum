import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { UserContext } from '../context/UseContext';
import Topico from '../components/Topico';

const Forum = () => {

  const [termoPesquisa, setTermoPesquisa] = useState('');
  const { currentUser, topicos } = useContext(UserContext);

  const navigate = useNavigate();
  
  const handleCriarTopico = () => {
    navigate('/novo-topico');
  };

  const handlePesquisarTopicos = (termoPesquisa) => {
    setTermoPesquisa(termoPesquisa);
  };

  return (
    <div>
      <h2>Fórum</h2>
      <p>Olá, {currentUser.username}!</p>
      <button onClick={handleCriarTopico}>Criar Novo Tópico</button>
      <input
        type="text"
        placeholder="Pesquisar por título"
        value={termoPesquisa}
        onChange={(e) => handlePesquisarTopicos(e.target.value)}
      />
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary">
          Sair
        </Button>
      </Link>
      <ul>
        {topicos.map((topico) => (
          <li key={topico.id}>
            <Topico topico={topico} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forum;