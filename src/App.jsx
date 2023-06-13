import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Forum from './pages/Forum';
import Footer from './components/Footer';
import NovoTopico from './pages/NovoTopico';
import DetalhesTopico from './components/DetalhesTopico';
import UseContext from './context/UseContext';
import RotaNaoEncontrada from './pages/RotaNaoEncontrada';
import ErrorBoundaryWrapper from './components/ErrorBoundaryWrapper';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <UseContext>
          <ErrorBoundaryWrapper>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/novo-topico" element={<NovoTopico />} />
              <Route path="/editar-topico/:titulo" element={<NovoTopico />} />
              <Route path="/:titulo" element={<DetalhesTopico />} />
              <Route path="/nao-encontrada" element={<RotaNaoEncontrada />} />
              <Route path="/*" element={<Navigate to="/nao-encontrada" />} />
            </Routes>
          </ErrorBoundaryWrapper>
        </UseContext>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;