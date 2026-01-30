import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import useGetCurrentUser from "./hooks/useGetCurrentUser";

export const serverUrl = "http://localhost:8000";
const App = () => {
  useGetCurrentUser();
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/" element={<Home/>}
      />
    </Routes>
  );
}

export default App

