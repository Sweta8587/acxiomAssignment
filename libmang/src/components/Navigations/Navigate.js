import React from "react";
import {Route, Routes} from "react-router-dom"
import Homepage from "../Home/Homepage";
import VendorLogin from "../Logins/Vendor/VendorLogin";
import UserLogin from "../Logins/User/UserLogin";
import AdminLogin from "../Logins/Admin/AdminLogin";
import AdminSignUp from "../Logins/Admin/AdminSignUp";
import UserSignUp from "../Logins/User/UserSignUp";
import VenderSignUp from "../Logins/Vendor/VendorSignUp";
import UserPortal from "../Logins/User/UserPortal";
import VendorPortal from "../Logins/Vendor/VendorPortal";
import ProductList from "../Logins/Vendor/ProductList";
import ProductStatus from "../Logins/Vendor/ProductStatus";
import RequestItem from "../Logins/Vendor/RequestItem";


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
            <Route path="/LogedinUserPortal" element={<UserPortal/>}/>
            <Route path="/LogedinVendorPortal" element={<VendorPortal/>}/>
            <Route path="/SectionToShowItem" element={<ProductList/>}/>
            <Route path="/SectionToShowProductStatus" element={<ProductStatus/>}/>
            <Route path="/SectionToShowRequestItem" element={<RequestItem/>}/>
        </Routes>


        </>
    );
};
export default Navigate;