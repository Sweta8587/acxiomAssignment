import React from "react";
import alstyles from "../Admin/AdminLogin.module.css"
import { NavLink } from "react-router-dom";

const AdminLogin = () => {



    return (
        <>
            <div className={alstyles.inparea}>
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
                    <label className={alstyles.blabel}>Login</label>
                </div>
                <div>
                    Not Registered? <NavLink to="/SignUpAsAdmin">
                    <button className={alstyles.bblabel}>Sign Up</button>
                    </NavLink>
                </div>
                
            </div>

        </>
    )
}

export default AdminLogin;