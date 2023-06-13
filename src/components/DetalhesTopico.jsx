import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UseContext';
import Comentario from './Comentario';

const DetalhesTopico = () => {
  const { titulo } = useParams();
  const navigate = useNavigate();
  const { currentUser, topicos, comentarios, addComentario } = useContext(UserContext);
  const [novoComentario, setNovoComentario] = useState('');
  const [atualizarComentarios, setAtualizarComentarios] = useState(false); // Nova variável de estado

  const handleVoltar = () => {
    navigate('/forum');
  };

  const topico = topicos.find((topico) => topico.titulo === titulo);

  const handleChangeConteudo = (event) => {
    setNovoComentario(event.target.value);
  };

  const handleEnviar = () => {
    const novoComentarioTexto = {
      id: comentarios.length + 1,
      idTopico: topico.id,
      criador: currentUser.username,
      conteudo: novoComentario,
    };
  
    addComentario(novoComentarioTexto);
    setNovoComentario(''); // Limpa o campo de entrada de texto
    setAtualizarComentarios(!atualizarComentarios); // Define a nova variável de estado para forçar a re-renderização
    console.log(comentarios.length);
  };

  useEffect(() => {
    console.log(comentarios);
  }, [atualizarComentarios]); // Adiciona a nova variável de estado como dependência do useEffect

  return (
    <div>
      <h2>Detalhes do Tópico</h2>
      <div>
        <p>Título: {topico.titulo}</p>
        <p>Criador: {topico.criador}</p>
        <p>Conteúdo: {topico.conteudo}</p>
      </div>
      <div>
        <h3>Comentários</h3>
        <ul>
          {comentarios
            .filter((comentario) => comentario.idTopico === topico.id)
            .map((comentario) => (
              <li key={comentario.id}>
                <Comentario comentario={comentario} />
              </li>
            ))
          }
        </ul>
        <div>
          <p>Adicionar novo comentário</p>
          <input type="text" onChange={handleChangeConteudo} />
          <button onClick={handleEnviar}>Enviar</button>
        </div>
      </div>
      <button onClick={handleVoltar}>Voltar ao Fórum</button>
    </div>
  );
};

export default DetalhesTopico;