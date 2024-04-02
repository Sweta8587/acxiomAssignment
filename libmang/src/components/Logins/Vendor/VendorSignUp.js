import React from "react";
import alstyles from "../Admin/AdminLogin.module.css"
// import { NavLink } from "react-router-dom";

const VenderSignUp = () => {



    return (
        <>
            <div className={alstyles.inparea}>
            <h1><label className={alstyles.llabel}>Welcome Vendor</label></h1>
               
                
                
                <div className={alstyles.user}>
                    
                    <button className={alstyles.blabel}>Your Item</button>
                    <button className={alstyles.blabel}>Add New Item</button>
                    <button className={alstyles.blabel}>Transaction</button>
                    <button className={alstyles.blabel}>LogOut</button>
                    
                    
                    
                </div>
                
                
            </div>

        </>
    )
}

export default VenderSignUp;