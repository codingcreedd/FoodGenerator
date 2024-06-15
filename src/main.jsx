import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './Components/Context.jsx'
import { BrowserRouter , createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error from './Components/Error.jsx';
import { Dishes } from './Components/Dishes.jsx'

const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      errorElement: <Error/>
  },
  {
    path: 'dishes',
    element: <Dishes />
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
