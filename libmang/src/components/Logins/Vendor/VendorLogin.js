import React from "react";
import alstyles from "../Admin/AdminLogin.module.css"
import { NavLink } from "react-router-dom";

const VendorLogin=()=>{



    return(
        <>
        <div className={alstyles.inparea}>
        <div className={alstyles.user}>
                    
                    <label className={alstyles.llabel}>CHART</label>
                    <NavLink to="/">
                    <label className={alstyles.llabel}>BACK</label>
                    </NavLink>
                    
                </div>
            <h1><label className={alstyles.llabel}>Event Management System</label></h1>
                <div className={alstyles.user}>
                    <label className={alstyles.llabel}>User Id</label>
                    <input className={alstyles.inpbox}></input>
                </div>
                <div className={alstyles.user}>
                    <label className={alstyles.llabel}>Password</label>
                    <input
                        className={alstyles.inpbox}
                        type="password"
                    ></input>
                </div>
                <div className={alstyles.user}>
                    <label className={alstyles.blabel}>Cancel</label>
                    
                    <NavLink to="/SignUpAsVendor">
                    <label className={alstyles.blabel}>Login</label>
                    </NavLink>
                </div>
                <div>
                    Not sign? <label className={alstyles.blabel}>SignUp</label>
                </div>
            </div>
        </>
    )
}

export default VendorLogin;