import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './Container/HomePage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Services } from './Container/Services';
import { Navbar } from './Component/Navbar';
// import {BrowserRouter, Route,Router,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route
            path = '/'
            element={<HomePage/>}
          />
          <Route
            path='services'
            element={<Services/>}
          />
        </Routes>
    </div>
  );
}

export default App;
