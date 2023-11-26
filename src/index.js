import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Inicio from './componentes/Inicio';
import Objetivos from './componentes/Objetivos';
import Sistemas from './componentes/Sistemas';
import QuienesSomos from './componentes/QuienesSomos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />,
    errorElement: <h1>ERROR</h1>
  },
  {
    path: '/Objetivos',
    element: <Objetivos />,
  },{
    path: '/Sistemas',
    element: <Sistemas />,
  },{
    path: '/QuienesSomos',
    element: <QuienesSomos />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
