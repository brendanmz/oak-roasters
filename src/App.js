import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Coffee from './components/Coffee';
import Journal from './components/Journal';

function App() {
  return (
    <div className="App">
      <Header />
      <Coffee />
      <Journal />
      <Footer />
    </div>
  );
}

export default App;
