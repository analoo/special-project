import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import API from "../Utils/API"


function Signup() {
    const [email, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const history = useHistory();



    const handleSubmit = (event) => {
        event.preventDefault();
        API.register({
            name: name,
            email: email,
            password: password,
        }).then(res => {
            history.push("/profile");
            console.log(res)})
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
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