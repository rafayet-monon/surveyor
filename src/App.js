import React, { useEffect } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import 'App.scss';
import { AuthProvider } from 'contexts/auth';
import RouteList from 'routes';

function App() {
  useEffect(() => {
    console.log(window.location.pathname);
  }, []);
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <RouteList />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
