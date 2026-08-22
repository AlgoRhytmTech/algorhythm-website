import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout';
import HomePage from './pages/HomePage';
import TracePage from './pages/TracePage';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/trace" element={<TracePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
