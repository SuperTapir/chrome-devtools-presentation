import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DOMTree from './views/Elements/DOMTree';
import StylesConfig from './views/Elements/StylesConfig';
const pages = [DOMTree, StylesConfig];
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {pages.map((Page, index) => (
          <Route key={index} path={`/${index}`} element={<Page/>} />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
