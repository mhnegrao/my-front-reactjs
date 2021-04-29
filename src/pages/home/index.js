import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Container } from '../../components/container';

function Home() {
  return (
    <div className="App">
      <Container>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Título da páginaaaaa</h1>
      </Container>
    </div>
  );
}

export default Home;
