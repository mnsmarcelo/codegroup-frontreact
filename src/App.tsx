import React from 'react';
import Container from 'react-bootstrap/Container';
import { Header } from 'components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchUserPage } from './pages/search-user/SearchUserPage';
import { RepositoriesPage } from './pages/repositories/RepositoriesPage';

function App() {
  return (
    <Container fluid="md">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchUserPage />} />
          <Route path="/repos/:user" element={<RepositoriesPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
