import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import AppliedJobs from './Component/AppliedJobs/AppliedJobs';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import JobDetails from './Component/JobDetails/JobDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>, 
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        path: '/',
        element: <Home></Home>
      }, 
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader : () => fetch('featured_jobs.json') // warning: only load the data you nedd. do not load all the data 

      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader : () => fetch('featured_jobs.json') // do not load all data. load only what you need. 
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
