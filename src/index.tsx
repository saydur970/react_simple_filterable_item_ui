import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './components/App';
import { UIContextProvider } from './context/ui.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UIContextProvider>
      <App />
    </UIContextProvider>
  </React.StrictMode>
);
