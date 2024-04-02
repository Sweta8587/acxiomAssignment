import React from "react";
import {Route, Routes} from "react-router-dom"
import Homepage from "../Home/Homepage";
import VendorLogin from "../Logins/Vendor/VendorLogin";
import UserLogin from "../Logins/User/UserLogin";
import AdminLogin from "../Logins/Admin/AdminLogin";
import AdminSignUp from "../Logins/Admin/AdminSignUp";
import UserSignUp from "../Logins/User/UserSignUp";
import VenderSignUp from "../Logins/Vendor/VendorSignUp";


const Navigate=()=>{

    return(
        <>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/logAsVendor" element={<VendorLogin/>}/>
            <Route path="/logAsUser" element={<UserLogin/>}/>
            <Route path="/logAsAdmin" element={<AdminLogin/>}/>
            <Route path="/SignUpAsAdmin" element={<AdminSignUp/>}/>
            <Route path="/SignUpAsVendor" element={<VenderSignUp/>}/>
            <Route path="/SignUpAsUser" element={<UserSignUp/>}/>
        </Routes>


        </>
    );
};
export default Navigate;