import React from "react";
import alstyles from "../Admin/AdminLogin.module.css"
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const VendorLogin = () => {
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    async function collectData() {
        try {
            navigate("/LogedinVendorPortal");

            let response = await fetch("http://localhost:5000/logAsVendor", {
                method: "GET",
                body: JSON.stringify({
                    UserId: username,
                    Password: password,
                }),
                headers: {
                    "content-type": "Application/json",
                },
            });

            if (!response.ok) {
                if (response.status === 404) {
                    setShowAlert(true); // Set showAlert state to true to show the alert
                } else {
                    console.log("Response was not ok");
                }

            }
            else {
                navigate("/LogedinVendorPortal");
            }

        } catch (error) {
            console.log("Not able to fetch", error);
        }
    }




    return (
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
                    <label className={alstyles.llabel} htmlFor="username">User Id</label>
                    <input
                        id="username"
                        className={alstyles.inpbox}
                        value={username}
                        onChange={handleUsernameChange}

                    ></input>
                </div>
                <div className={alstyles.user}>
                    <label className={alstyles.llabel} htmlFor="password">Password</label>
                    <input
                        id="password"
                        className={alstyles.inpbox}
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    ></input>
                </div>
                <div className={alstyles.user}>
                    <label className={alstyles.blabel}>Cancel</label>

                    <button
                        className={alstyles.blabel}
                        onClick={collectData}
                    >
                        Login
                    </button>
                    {/* Alert component to show when the user does not exist */}
                    {showAlert && (
                        <div className="alert">
                            <p>User does not exist. Please check your credentials.</p>
                            <button onClick={() => setShowAlert(false)}>Close</button>
                        </div>
                    )}

                </div>
                <div>
                    Not Vendor? <NavLink to="/SignUpAsVendor">
                        <button className={alstyles.blabel}>Sign Up</button>
                    </NavLink>
                </div>

            </div>
        </>
    )
}

export default VendorLogin;