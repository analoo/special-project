import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom"
import API from "../Utils/API"

function Login() {

    const [email, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();



    const handleSubmit = (event) => {
        event.preventDefault();
        API.login({
            email: email,
            password: password,
        }).then(res => {
            history.push("/");
            console.log(res)})
            .catch(err => console.log(err))
    }

    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input 
                type="email"
                name="email"
                value={email}
                onChange={e => setUserEmail(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input 
                type="password" 
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)} />
            </div>
            <div>
            <button type="submit" value="Login">Login</button>
            </div>
        </form>
    )
}

export default Login;