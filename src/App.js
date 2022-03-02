import './App.css';
import { Footer } from './MyComponents/Footer';
import Header from './MyComponents/Header';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './MyComponents/About';
import TodoMain from './MyComponents/TodoMain';


function App() {

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />

        <Routes>
          <Route exact path="/" element={<TodoMain />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
