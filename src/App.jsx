import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Chat from './pages/Chat/Chat'
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate'

function App() {
    const navigate = useNavigate();
  useEffect(()=>{
    const accessToken = localStorage.getItem("auth-token");
    if(accessToken) {
        navigate('/chat');
    }
  },[])
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/chat' element={<Chat />} />
        <Route path='/profile' element={<ProfileUpdate />} />
      </Routes>
    </>
  )
}

export default App