import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Image } from 'pages/Image/Image';
import { ModalPage } from 'pages/ModalPage/ModalPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/image" element={<Outlet />}>
        <Route path=":name" element={<Image />}>
          <Route path="modal/:id" element={<ModalPage />} />
        </Route>{' '}
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
export default Router;
