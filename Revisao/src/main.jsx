import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import { Tecnologies } from './Tecnologies.jsx';
import { Contact } from './Contact.jsx';
import './index.css'
import { Calculations } from './Calculations.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "/tec",
    element:  <Tecnologies />,
  },
  {
    path: "/contact",
    element:  <Contact />,
  },
  {
    path: "/calc",
    element:  <Calculations />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
