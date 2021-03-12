import React from 'react';
import './App.css';
import Routes from './routes';
import { AuthProvider } from './components/Contexts/auth';

const App: React.FC = () => {
  return (    
    <AuthProvider>
      <Routes/>        
    </AuthProvider>
  );
}

export default App;
