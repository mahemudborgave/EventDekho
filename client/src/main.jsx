import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainSearch from './components/MainSearch.jsx'
import Events from './pages/Events.jsx'
import Colleges from './pages/Colleges.jsx'
import Contact from './pages/Contact.jsx'
import Register from './pages/Register.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
        <Route path='' element={<MainSearch />} />
        <Route path='/events' element={<Events />} />
        <Route path='/colleges' element={<Colleges />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
      <Route path='/register' element={<Register />} />
    </>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
