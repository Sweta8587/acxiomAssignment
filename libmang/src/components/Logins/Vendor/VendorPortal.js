import React from "react";
import alstyles from "../Vendor/VendorPortal.module.css"
// import { NavLink } from "react-router-dom";

const VendorPortal = () => {



    return (
        <>
            <div className={alstyles.inparea}>
                <h1 className={alstyles.llabel}>WELCOME Vendor</h1>



                <div className={alstyles.user}>

                    <button className={alstyles.blabel}>Vendr</button>
                    <button className={alstyles.blabel}>Cart</button>
                    <button className={alstyles.blabel}>Guest List</button>
                    <button className={alstyles.blabel}>Order Status</button>



                </div>
                <div className={alstyles.user}>

                    <button className={alstyles.blabel}>Log Out</button>




                </div>


            </div>

        </>
    )
}

export default VendorPortal;