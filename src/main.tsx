import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css';
import { Navigation } from './routers/Navigation.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>,
)
