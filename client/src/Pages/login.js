import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import API from "../Utils/API"
import MainDiv from "../Components/Container/main-Div"


function Login() {

    const [email, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        API.login({
            email: email,
            password: password,
        }).then(res => {
            if(res.data.code === 200){
                window.location.replace("/profile");
            }
            else{
                setError(res.data.message)
            }
        })
            .catch(err => console.log(err))
    }


    return (
        <MainDiv>
        <div className="col-md-6 col-sm-10" id="bg-img" style={{border: "solid grey 1px", padding: "10px", top: "50px", height: "100%", verticalAlign: "middle"}}>
        {error === "" ?
                <div className="alert" style={{display: "inline-block", color: "red"}}></div> : 
                    <div className="alert" role="alert" style={{display: "inline-block" , color: "red", backgroundColor: "pink", width: "100%"}}>
                    {error}
                </div>}
            <h5 className="card-title">Sign In</h5>
            <form onSubmit={handleSubmit}>
                
                <div className="form-group row">
                    <label className="col-sm-2 col-md-4 col-form-label">Email</label>
                    <div className="col-sm-10 col-md-4">
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={e => setUserEmail(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-md-4 col-form-label">Password</label>
                    <div className="col-sm-10 col-md-4">
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                <div className="col-sm-2 col-md-2 col-form-label"></div>
                    <div className="col-sm-10 col-md-6">
                    <button className="btn btn-submit bg-yellow" type="submit" value="Login">Login</button>
                    </div>
                </div>

            </form>
            <a href="/signup" type="button" style={{color: "purple", opacity: "70%", border: "none", fontSize: "medium" }}>New? Sign Up Here</a>

        </div>
        </MainDiv>
    )
}

export default Login;