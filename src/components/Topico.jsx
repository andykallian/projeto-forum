import React, { useContext } from 'react';
import { UserContext } from '../context/UseContext';

const Topico = ({ topico }) => {
  const { currentUser, excluirTopico, editarTopico, abrirTopico } = useContext(UserContext);

  const isCriador = topico && topico.criador === currentUser.username;

  return (
    <>
      <h3 onClick={() => abrirTopico(topico.titulo)}>
        {topico ? topico.titulo : 'Tópico não encontrado'}
      </h3>
      <p>Criador: {topico && topico.criador ? topico.criador : 'Usuário desconhecido'}</p>
      {isCriador && topico && (
        <>
          <button onClick={() => excluirTopico(topico.id)}>Excluir</button>
          <button onClick={() => editarTopico(currentUser.username, topico.criador, topico)}>Editar</button>
        </>
      )}
    </>
  );
};

export default Topico;