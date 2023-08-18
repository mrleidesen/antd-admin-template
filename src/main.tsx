import React from 'react';
import ReactDOM from 'react-dom/client';
import 'virtual:uno.css';
import '@unocss/reset/tailwind-compat.css';

import './assets/index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
