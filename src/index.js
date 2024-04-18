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
import Distortion from './taxonomy_pages/distortion'
import Surveillance from './taxonomy_pages/surveillance'
import Disclosure from './taxonomy_pages/disclosure'
import IncreasedAccessibility from './taxonomy_pages/increased_accessibility'
import Identification from './taxonomy_pages/identification'
import Intrusion from './taxonomy_pages/intrusion'
import Aggregation from './taxonomy_pages/aggregation'
import PhrenologyPhysiognomy from './taxonomy_pages/phrenology_physiognomy'
import SecondaryUse from './taxonomy_pages/secondary_use'
import Exclusion from './taxonomy_pages/exclusion'
import Insecurity from './taxonomy_pages/insecurity'




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
          {
            path: '/distortion',
            element: <Distortion />,
          },
          {
            path: '/surveillance',
            element: <Surveillance />,
          },
          {
            path: '/disclosure',
            element: <Disclosure />,
          },
          {
            path: '/increased_accessibility',
            element: <IncreasedAccessibility />,
          },
          {
            path: '/intrusion',
            element: <Intrusion />,
          },
          {
            path: '/identification',
            element: <Identification />,
          },
          {
            path: '/aggregation',
            element: <Aggregation />,
          },
          {
            path: '/phrenology_physiognomy',
            element: <PhrenologyPhysiognomy />,
          },
          {
            path: '/secondary_use',
            element: <SecondaryUse />,
          },
          {
            path: '/insecurity',
            element: <Insecurity />,
          },
          {
            path: '/exclusion',
            element: <Exclusion />,
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
