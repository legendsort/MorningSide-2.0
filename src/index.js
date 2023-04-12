
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client'

import "./index.css";
import MainLayout from './layout/MainLayout'
import LandingPage from './pages/LandingPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<LandingPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);