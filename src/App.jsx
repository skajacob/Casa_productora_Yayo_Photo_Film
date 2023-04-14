import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import {
  AboutNavigation,
  ContactNavigation,
  GalleryNavigation,
  PortfolioNavigation,
} from './Navigation';
import './styles/App.css';

function App() {
  return <Routes>
    <Route path='/' element={<AboutNavigation />} />
    <Route path='/contact' element={<ContactNavigation />} />
    <Route path='/gallery' element={<GalleryNavigation />} />
    <Route path='/portfolio' element={<PortfolioNavigation />} />
    <Route path='*' element={<ErrorPage />} />
  </Routes>
};

export default App;
