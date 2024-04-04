import React from "react";
import alstyles from "../Vendor/VendorLogin.module.css"
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
            const response = await fetch("http://localhost:5000/logAsVendor", {
                method: "POST",
                body: JSON.stringify({
                    UserId: username,
                    Password: password,
                }),
                headers: {
                    "content-type": "application/json",
                },
            });

            if(response.status===200){
                const loginData = await response.json();
                console.log("This is login user data",loginData);
                navigate("/LogedinVendorPortal",{ state: { Nameis:loginData.Name }}); // Pass data to next route (optional)

            }

            if (!response.ok) {
                const errorData = await response.json(); // Parse error data from response
                if (errorData.message) {
                    setShowAlert(true, errorData.message); // Set alert with specific message
                } else {
                    console.log("Login failed with status:", response.status);
                    setShowAlert(true, "Login failed. Please try again."); // Generic message
                }
            } else {
                const loginData = await response.json(); // Parse response data (optional)
                navigate("/LogedinVendorPortal", loginData); // Pass data to next route (optional)
            }
        } catch (error) {
            console.error("Error during login:", error);
            setShowAlert(true, "An error occurred. Please try again."); // Generic error message
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
                <h1><div className={alstyles.llabel}>Event Management System</div></h1>
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
                    New Vendor? <NavLink to="/SignUpAsVendor">
                        <button className={alstyles.blabel}>Sign Up</button>
                    </NavLink>
                </div>

            </div>
        </>
    )
}

export default VendorLogin;