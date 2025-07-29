import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ 추가
import App from './App.jsx';
import './global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* ✅ 여기 감싸줌 */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);