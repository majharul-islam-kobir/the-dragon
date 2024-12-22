import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './page/about/About.jsx'
import Career from './page/career/Career.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import LogIn from './page/signina-register/LogIn.jsx'
import Register from './page/signina-register/Register.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'
import Home from './page/home/Home.jsx'
import Details from './page/modal/Details.jsx'

const routes = createBrowserRouter([ 
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/", 
        element: <Home /> // Home Page
      },
      {
        path: "/about", 
        element: <About /> // About Page
      },
      {
        path: "/career", 
        element: <Career /> // Career Page
      },
      {
        path: "/login",  
        element: <LogIn /> // Login Page
      },
      {
        path: "/register",  
        element: <Register /> // Register Page
      },
      {
        path: "/details/:id",  
        element: <Details />
      },
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}> {/* Redux Provider */}
      <AuthProvider> {/* Authentication Provider */}
        <RouterProvider router={routes} /> {/* Router */}
      </AuthProvider>
    </Provider>
  </StrictMode>
);
