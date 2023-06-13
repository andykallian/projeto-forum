import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RotaNaoEncontrada = () => {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate('/');
  };

  return (
    <div>
      <h3>Essa rota não existe</h3>
      <button onClick={handleVoltar}>Voltar</button>
    </div>
  );
};

export default RotaNaoEncontrada;