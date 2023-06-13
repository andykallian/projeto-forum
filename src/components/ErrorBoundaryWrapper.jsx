import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import RotaNaoEncontrada from '../pages/RotaNaoEncontrada';

const ErrorFallback = () => {
  const [redirectToHome, setRedirectToHome] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleVoltar = () => {
    if (location.pathname === '/') {
      window.location.reload();
    } else {
      setRedirectToHome(true);
    }
  };

  if (redirectToHome) {
    return <RotaNaoEncontrada />;
  }

  return (
    <div>
      <h3>Desculpe, ocorreu um erro na aplicação.</h3>
      <p>Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.</p>
      <button onClick={handleVoltar}>Voltar</button>
    </div>
  );
};

const ErrorBoundaryWrapper = ({ children }) => {
  const [error, setError] = useState(null);

  const handleError = (error) => {
    console.error(error);
    setError(error);
  };

  if (error) {
    return <ErrorFallback />;
  }

  return (
    <React.Fragment>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { onError: handleError })
      )}
    </React.Fragment>
  );
};

export default ErrorBoundaryWrapper;
