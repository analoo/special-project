import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import API from "../Utils/API"

function Login() {

    const [email, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        API.login({
            email: email,
            password: password,
        }).then(res => {
            setError(res.data.message)
            // history.push("/");
            console.log(res)
        })
            .catch(err => console.log(err))
    }


    return (
        <div className="col-md-6 col-sm-10">
            <form onSubmit={handleSubmit}>
                <div classname="alert alert-light" role="alert">
                    {error}
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-md-2 col-form-label">Email</label>
                    <div className="col-sm-10 col-md-6">
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={e => setUserEmail(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-md-2 col-form-label">Password</label>
                    <div className="col-sm-10 col-md-6">
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <button className="btn btn-submit" type="submit" value="Login">Login</button>
                </div>

            </form>
        </div>
    )
}

export default Login;