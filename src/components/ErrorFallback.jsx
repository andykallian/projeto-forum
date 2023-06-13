import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import RotaNaoEncontrada from '../pages/RotaNaoEncontrada';

const ErrorFallback = ({ error }) => {
  return (
    <div>
      <h3>Desculpe, ocorreu um erro na aplicação.</h3>
      <p>{error.message}</p>
      <RotaNaoEncontrada />
    </div>
  );
};

const ErrorBoundaryWrapper = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryWrapper;