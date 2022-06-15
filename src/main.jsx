import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import DOMTree from './views/Elements/DOMTree'
import StylesConfig from './views/Elements/StylesConfig'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<DOMTree />} />
        <Route path="/StylesConfig" element={<StylesConfig />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
