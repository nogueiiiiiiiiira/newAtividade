import './index.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Tecnologies } from './Tecnologies';
import App from './App'
  
const router = createBrowserRouter([ 

  {
    path: "/",
    element: <App/>
  },

  {
    path: "/Tec",
    element: <Tecnologies/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);