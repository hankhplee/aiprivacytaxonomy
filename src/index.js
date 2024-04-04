import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'

import App from './App'
import Home from './Home'
import Methods from './methods'
import Publication from './publication'
import Exposure from './taxonomy_pages/exposure'


const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      children: [
          {
              path: '/aiprivacytaxonomy',
              element: <Home />,
          },
          {
              path: '/methods',
              element: <Methods />,
          },
          {
              path: '/publication',
              element: <Publication />,
          },
          {
            path: '/exposure',
            element: <Exposure />,
          },
      ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
