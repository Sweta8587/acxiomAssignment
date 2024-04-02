import React from "react";
import alstyles from "../Admin/AdminLogin.module.css"
// import { NavLink } from "react-router-dom";

const UserSignUp = () => {



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
                    
                    <button className={alstyles.blabel}>Cancel</button>
                    <button className={alstyles.blabel}>Login</button>
                    
                    
                    
                </div>
                
                
            </div>

        </>
    )
}

export default UserSignUp;