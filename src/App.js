import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Coffee from './components/Coffee';
import Journal from './components/Journal';
import styled from 'styled-components';

const Main = styled.div`
  width: 100%;
  text-align: center;
`

function App() {
  return (
    <Main className="App">
      <Header />
      <Coffee />
      <Journal />
      <Footer />
    </Main>
  );
}

export default App;
