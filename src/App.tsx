import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import DetailPage from 'pages/DetailPage/DetailPage';
import NotFound from 'pages/NotFound/NotFound';
import AddEditPage from 'pages/AddEditPage/AddEditPage';
// import MainLayout from './components/layouts/MainLayout';
// import Template from './components/template';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  return (
    <div id="top" className="light app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:productCode" element={<DetailPage />} />
        <Route path="/add" element={<AddEditPage />} />
        <Route path="/edit/:productCode" element={<AddEditPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
