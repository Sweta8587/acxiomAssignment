import React from "react";
import alstyles from "../Admin/AdminLogin.module.css"
// import { NavLink } from "react-router-dom";

const UserPortal = () => {



    return (
        <>
            <div className={alstyles.inparea}>
            <h1><label className={alstyles.llabel}>WELCOME USER</label></h1>
               
                
                
                <div className={alstyles.user}>
                    
                    <button className={alstyles.blabel}>Vender</button>
                    <button className={alstyles.blabel}>Cart</button>
                    <button className={alstyles.blabel}>Guest List</button>
                    <button className={alstyles.blabel}>Order Status</button>
                    
                    
                    
                </div>
                <div className={alstyles.user}>
                    
                    <button className={alstyles.blabel}>LogOut</button>
                    
                </div>
                
                
            </div>

        </>
    )
}

export default UserPortal;