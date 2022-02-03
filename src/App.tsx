import React from 'react';
import './App.css';
import { HomePage } from './Container/HomePage';
import {Routes,Route } from 'react-router-dom';
import { Services } from './Container/Services';
import { Navbar } from './Component/Navbar';
import { Footer } from './Component/Footer';
import { Navigate } from 'react-router-dom';
import { BlogPage } from './Container/BlogPage';
// import {BrowserRouter, Route,Router,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route
            path='/home'
            element={<HomePage/>}
          />
          <Route
            path='/'
            element={<Navigate replace to='/home'/>}
          />
          <Route
            path='/services'
            element={<Services/>}
          />
          <Route
            path='/blog'
            element={<BlogPage/>}
          />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
