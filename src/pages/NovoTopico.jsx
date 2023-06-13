import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../context/UseContext';

const NovoTopico = () => {
  const navigate = useNavigate();
  const { titulo } = useParams();
  const { currentUser, addTopico, topicos, editarTopico } = useContext(UserContext);

  const [editar, setEditar] = useState(false);
  const [novoTitulo, setNovoTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');

  useEffect(() => {
    if (titulo) {
      const topicoExistente = topicos.find((topico) => topico.titulo === titulo);
      if (topicoExistente) {
        setEditar(true);
        setNovoTitulo(topicoExistente.titulo);
        setConteudo(topicoExistente.conteudo);
      }
    }
  }, [titulo, topicos]);

  const handleChangeTitulo = (event) => {
    setNovoTitulo(event.target.value);
  };

  const handleChangeConteudo = (event) => {
    setConteudo(event.target.value);
  };

  const handleEnviar = () => {
    if (editar) {
      // Lógica para editar um tópico existente
      const topicoEditado = {
        ...topicos.find((topico) => topico.titulo === titulo),
        conteudo: conteudo,
        titulo: novoTitulo,
      };
      editarTopico(currentUser.username, topicoEditado.criador, topicoEditado);
    } else {
      // Lógica para criar um novo tópico
      const novoTopico = {
        id: topicos.length + 1,
        criador: currentUser ? currentUser.username : '',
        titulo: novoTitulo,
        conteudo: conteudo,
      };
      addTopico(novoTopico);
    }

    navigate('/forum');
  };

  const handleCancelar = () => {
    navigate('/forum');
  };

  return (
    <div>
      <h2>{editar ? 'Editar Tópico' : 'Novo Tópico'}</h2>
      <label>
        Título:
        <input type="text" value={novoTitulo} onChange={handleChangeTitulo} />
      </label>
      <br />
      <label>
        Mensagem:
        <textarea value={conteudo} onChange={handleChangeConteudo} />
      </label>
      <br />
      <button onClick={handleEnviar}>{editar ? 'Atualizar' : 'Enviar'}</button>
      <button onClick={handleCancelar}>Cancelar</button>
    </div>
  );
};

export default NovoTopico;