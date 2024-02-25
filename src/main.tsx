import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Web3ModalProvider } from './services/WebModalProvider';

// Styles
import './css/style.css';
import './css/satoshi.css';

import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Web3ModalProvider>
      <App />
    </Web3ModalProvider>
  </React.StrictMode>,
);
