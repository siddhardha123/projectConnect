import React from "react";
import { Navigate, Outlet } from "react-router";

const useAuth = () =>{
    const user = {isLoggedIn:false}
    return user && user.isLoggedIn;
}



const PrivateRoute = () => {
    const isLoggedIn = useAuth();
    return isLoggedIn? <Outlet/> : <Navigate to="/login" />;
  };

export default PrivateRoute