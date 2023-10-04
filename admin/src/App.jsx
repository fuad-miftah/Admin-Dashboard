import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Error from './Pages/Error';
import Home from './Pages/Home';

import './App.css'

function App() {
  const { userInfo } = useSelector((state) => state.auth);

  // const ProtectedRoute = ({ children }) => {
  //   const [isAuthenticated, setIsAuthenticated] = useState(null);

  //   useEffect(() => {
  //     const verifyUserAuthentication = async () => {
  //       try {
  //         if (userInfo && userInfo.access_token) {
  //           const response = await axiosInstance.get(`${routedb}/user/${userInfo.details._id}`);
  //           console.log('user is authenticated', response);
  //           setIsAuthenticated(true);
  //         } else {
  //           setIsAuthenticated(false);
  //         }
  //       } catch (error) {
  //         console.log("user is not authenticated");
  //         console.log(error);
  //         setIsAuthenticated(false);
  //       }
  //     };

  //     verifyUserAuthentication();
  //   }, []);

  //   if (isAuthenticated === null) {
  //     return <p>Loading...</p>;
  //   } else if (!userInfo || isAuthenticated === false) {
  //     return <Navigate to="/login" />;
  //   } else {
  //     return children;
  //   }
  // };
  const ProtectedRoute = ({ children }) => {
    if (userInfo) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App
