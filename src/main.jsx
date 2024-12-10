import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'  // react-router-dom import পরিবর্তন
import Home from './page/home/Home.jsx'
import About from './page/about/About.jsx'
import Career from './page/career/Career.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import LogIn from './page/signina-register/LogIn.jsx'
import Register from './page/signina-register/Register.jsx'

const routes = createBrowserRouter([ // 'route' পরিবর্তন করে 'routes'
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",  // Home page
        element: <Home />
      },
      {
        path: "/about",  // About page
        element: <About />
      },
      {
        path: "/career",  // Career page
        element: <Career />
      },
      {
        path: "/login",  // Login page
        element: <LogIn />
      },
      {
        path: "/register",  // Register page
        element: <Register />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />  {/* 'route' পরিবর্তন করে 'routes' */}
    </AuthProvider>
  </StrictMode>
)
