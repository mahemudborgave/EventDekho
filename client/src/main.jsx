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
import Login from './pages/Login.jsx'
import CollegeDetails from './pages/CollegeDetails.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
        <Route path='' element={<MainSearch />} />
        <Route path='/events' element={<Events />} />
        <Route path='/colleges' element={<Colleges />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/collegeDetails/:code' element={<CollegeDetails />} />
      </Route>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
