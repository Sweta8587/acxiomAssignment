import React from "react";
import { NavLink } from "react-router-dom";
import homeStyles from "../Home/Homepage.module.css"

const Homepage=()=>{


    return(
        <>
        <div className={homeStyles.loginArea}>
            <div><center><h3>Login as</h3></center></div>
            <NavLink to="/logAsVendor" >
            <button className={homeStyles.logbutton}>Vendor</button>
            </NavLink>
           
           <NavLink to="/logAsUser">
           <button className={homeStyles.logbutton}>User</button>
           </NavLink>
            
           <NavLink to="/logAsAdmin">
           <button className={homeStyles.logbutton}>Admin</button>
           </NavLink>

        </div>
        
        </>

    );
};

export default Homepage;