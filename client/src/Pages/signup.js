import React, { useState, useEffect } from "react";
import axios from "axios"

function Signup() {
    const [email, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("/auth/register", {
            name: name,
            email: email,
            password: password,
        }).then(res => console.log(res))
            .catch(err => console.log(err))
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="email"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={e => setUserEmail(e.target.value)}
                        required />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required />
                </div>
                <div>
                    <button type="submit" value="Sign Up" >Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Signup;