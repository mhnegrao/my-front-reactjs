import React from 'react';
import logo from '../../assets/images/istockphoto.jpg';
import { Container } from '../../components/container';

function Home() {
  return (
    <div className="App">
      <Container>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Front Chocolates!!!!!</h1>
        <table>
          <thead>
            <td colSpan="2">
              <h3>Listagem Chocolates</h3>
            </td>
          </thead>
          <tbody>
            <tr>
              <td>Marca</td>
              <td>Foto</td>
            </tr>
            <tr>
              <td>Marca</td>
              <td>Foto</td>
            </tr>
            <tr>
              <td>Marca</td>
              <td>Foto</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  );
}

export default Home;
