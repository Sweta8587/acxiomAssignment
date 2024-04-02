import React from "react";
import alstyles from "../Admin/AdminLogin.module.css"
// import { NavLink } from "react-router-dom";

const AdminSignUp = () => {



    return (
        <>
            <div className={alstyles.inparea}>
            <h1><label className={alstyles.llabel}>Event Management System</label></h1>
               <div className={alstyles.user}>
                    <label className={alstyles.llabel}>Name</label>
                    <input className={alstyles.inpbox}></input>
                </div>
                <div className={alstyles.user}>
                    <label className={alstyles.llabel}>Email</label>
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
                    <label className={alstyles.llabel}>Category</label>
                    <input className={alstyles.inpbox}></input>
                </div>
                <div className={alstyles.user}>
                    
                    <button className={alstyles.bblabel}>Sign Up</button>
                    
                    
                    
                </div>
                
                
            </div>

        </>
    )
}

export default AdminSignUp;