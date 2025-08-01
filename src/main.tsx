import './app/lib/dynamicImportErrorListener.ts';
import './view/index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './view/App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
