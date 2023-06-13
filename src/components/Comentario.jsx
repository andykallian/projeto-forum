import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UseContext';


const Comentario = ({comentario}) => {


  const editarComentario = () => {
    // chama a função para editar o comentário
    console.log('editou');
  };
  
  const excluirComentario = () => {
    // chama a função para excluir o comentário
    console.log('excluiu');
  };
  
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <p>{comentario.criador}</p>
      <p>{comentario.conteudo}</p>

      {comentario.criador === currentUser.username && (
        <div>
          <button onClick={editarComentario}>Editar</button>
          <button onClick={excluirComentario}>Excluir</button>
        </div>
      )}
    </div>
  )
}

export default Comentario