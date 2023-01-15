import React, { useState } from 'react';
import FirstPage from './components/FirstPage';
import Quiz from './components/Quiz';
import './index.scss';
import { Route, Routes } from 'react-router-dom';


export default function App () {
  
  return (
    <Routes>
      <Route path='/' element={<FirstPage />} />
      <Route path='quiz' element={<Quiz />} />
    </Routes>
  );
}

  