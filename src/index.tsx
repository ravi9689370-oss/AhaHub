import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { APP_CONFIG } from './config';

// Initialize Capacitor if available
if (typeof window !== 'undefined' && (window as any).__CAPACITOR__) {
  console.log('Capacitor environment detected');
  document.addEventListener('capacitorDeviceReady', () => {
    console.log('Capacitor device ready');
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);