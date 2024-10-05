import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';


import App from './App.jsx';

import Contact from './Components/Contact.jsx';
import About from  './Components/About.jsx'
import Projects from './Components/Projects.jsx';

import Data from './Projects/DataTable/Data.jsx'
import Weather from './Projects/Weather/Weather.jsx';
import Makeup from './Projects/Make up/Makeup.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/weatherApp',
    element: <Weather />,
  },
  {
    path: '/makeUp',
    element: <Makeup/>,
  },
  {
    path: '/dataTable',
    element: <Data/>,
  },
 
 
]);

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

