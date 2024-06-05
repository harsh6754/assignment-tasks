import React from "react"
import { Routes, Route } from 'react-router-dom';
import SideNavbar from "./components/SideNavbar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
function App() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<SideNavbar />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
