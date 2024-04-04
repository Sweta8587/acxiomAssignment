import React from "react";
import alstyles from "../Vendor/VendorPortal.module.css"
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const VendorPortal = () => {

    const location = useLocation();
    const name = location.state.Nameis;

    return (
        <>
            <div className={alstyles.inparea}>
                <h1 className={alstyles.llabel}>Welcome {name} !</h1>
                <div className={alstyles.llabel}>

                <NavLink to="/SectionToShowProductStatus" >
                <button className={alstyles.blabel}>Product Status</button>
                    </NavLink>
                    <NavLink to="/SectionToShowRequestItem" >
                    <button className={alstyles.blabel}>Request Item</button>
                    </NavLink>
                    <NavLink to="/SectionToShowViewProducts" >
                    <button className={alstyles.blabel}>View Products</button>
                    </NavLink>
                    
                    
                    <button className={alstyles.blabel}>Log Out</button>



                </div>



                <div className={alstyles.user}>

                <button className={alstyles.blabel}>Your Item</button>
                <NavLink to="/SectionToShowItem" >
                <button className={alstyles.blabel}>Add New Item</button>
                    </NavLink>
                    
                    
                    <button className={alstyles.blabel}>Transaction</button>
                    <button className={alstyles.blabel}>Log Out</button>



                </div>
                


            </div>

        </>
    )
}

export default VendorPortal;