import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteList from './routes';
import ScrollToTop from './routes/scrollToTop';
import { AuthProvider } from './contexts/authContext';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <AuthProvider>
          <div className="app">
            <RouteList />
          </div>
        </AuthProvider>
      </ScrollToTop>
    </Router>
  );
}

export default App;
