import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

const UseContext = ({ children }) => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([
    { username: 'a', password: 'a' }
  ]);

  const [topicos, setTopicos] = useState([]);
  
  const [currentUser, setCurrentUser] = useState(null);

  const [comentarios, setComentarios] = useState([]);


  const addComentario = (newComent) => {
    setComentarios([...comentarios, newComent]);
    console.log(comentarios);
  };

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const addTopico = (newTopico) => {
    setTopicos([...topicos, newTopico]);
  };

  const login = (username, password) => {
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      setCurrentUser(user);
    }
  };

  const excluirTopico = (id) => {
    const novosTopicos = topicos.filter((topico) => topico.id !== id);
    setTopicos(novosTopicos);
  };

  const editarTopico = (username, criador, topicoAtualizado) => {
    if (username === criador) {
      console.log(topicoAtualizado);
      setTopicos((topicos) =>
        topicos.map((topico) =>
          topico.id === topicoAtualizado.id ? topicoAtualizado : topico
        )
      );
      navigate(`/editar-topico/${topicoAtualizado.titulo.replaceAll(' ', '-')}`);
      
    } else {
      alert('Você não tem permissão para editar este tópico.');
    }
  };

  function formatarTitulo(titulo) {
    if (!titulo || typeof titulo !== 'string') {
      return '';
    }
  
    const tituloSemAcento = titulo.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const tituloFormatado = tituloSemAcento.toLowerCase().replace(/\s+/g, '-');
  
    return tituloFormatado;
  }

  const abrirTopico = (titulo) => {
    const topico = topicos.find((topico) => formatarTitulo(topico.titulo) === titulo);
    console.log(topico.titulo);
    if (topico) {
      navigate(`/${titulo}`);
    } else {
      alert('Tópico não encontrado.');
    }
  };

  return (
    <UserContext.Provider
      value={{
        login,
        users,
        addUser,
        addComentario,
        comentarios,
        currentUser,
        setCurrentUser,
        topicos,
        setTopicos,
        excluirTopico,
        editarTopico,
        addTopico,
        abrirTopico,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UseContext;