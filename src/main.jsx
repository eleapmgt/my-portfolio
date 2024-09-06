import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Layout from './components/Layout';
import './styles/globals.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <App />
    </Layout>
  </StrictMode>
);
