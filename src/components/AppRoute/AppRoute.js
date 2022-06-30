import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';

function AppRoute() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
  );
}

export default AppRoute;
