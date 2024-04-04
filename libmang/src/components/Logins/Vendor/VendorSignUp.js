import React from "react";
import { useState } from "react";
import alstyles from "../Vendor/VendorSignUp.module.css"
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const VenderSignUp = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [name, setname] = useState('');
    const [password, setPassword] = useState('');
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const handlenameChange = (e) => {
        setname(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    async function collectData() {
        try {
            let response = await fetch("http://localhost:5000/SignUpAsVendor", {
                method: "POST",
                body: JSON.stringify({
                    Name:name,
                    UserId: username,
                    Password: password,
                }),
                headers: {
                    "content-type": "Application/json",
                },
            });

            if (!response.ok) {
                console.log("Response was not ok");
            }
            else {
                navigate("/logAsVendor");
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
                    <label className={alstyles.llabel} htmlFor="username">Name</label>
                    <input
                        id="name"
                        className={alstyles.inpbox}
                        value={name}
                        onChange={handlenameChange}

                    ></input>
                </div>
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
                        Sign Up
                    </button>

                </div>

            </div>

        </>
    )
}

export default VenderSignUp;