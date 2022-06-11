import React from 'react';
import logo from './logo.svg';
import './App.scss';
import AppRouting from './routers';
import Header from './containers/Header';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <AppRouting></AppRouting>
    </div>
  );
}

export default App;
