import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider,Link} from 'react-router-dom'
import Projects from './pages/projects.jsx'
import Contact from './pages/contact.jsx'
import Team from './pages/team.jsx'
import PageNotFound from './pages/pageNotFound.jsx'
import Banner from './pages/banner.jsx'
import './index.css'
const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [
    {index: true, element: <Banner/>},
    {
      path: 'projects',
      element: <Projects/>,
    },

    {
      path: 'team',
      element: <Team/>,
    }, 
    {
      path: 'contact',
      element: <Contact/>,
    },
    {
      path: '*',
      element: <PageNotFound/>,
    },
  ],

}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
