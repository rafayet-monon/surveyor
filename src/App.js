import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteList from './routes';
import { AuthProvider } from './contexts/authContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <RouteList />
      </AuthProvider>
    </Router>
  );
}

export default App;
