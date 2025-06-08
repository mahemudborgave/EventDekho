import React, { useState, useEffect, createContext } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import UserContext from './context/UserContext'
import 'react-toastify/dist/ReactToastify.css';
import SearchContext from './context/SearchContext'

function App() {
  const [user, setUser] = useState("md");
  const [email, setEmail] = useState("md");
  const [searchValue, setSearchValue] = useState("");
  // console.log("Jethalal");
  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedEmail = localStorage.getItem("email");

    if (storedUser) setUser(storedUser);
    if (storedEmail) setEmail(storedEmail);
  }, []);
  return (
    <>
      <UserContext.Provider value={{ user, setUser, email, setEmail}} >
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Outlet />
          <ToastContainer />
        </SearchContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
