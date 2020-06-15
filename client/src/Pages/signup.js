import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../Utils/API"
import MainDiv from "../Components/Container/main-Div"


function Signup() {
    const [email, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("")
    const history = useHistory();



    const handleSubmit = (event) => {
        event.preventDefault();
        API.register({
            name: name,
            email: email,
            password: password,
        }).then(res => {
            setError(res.data.message)
            if(res.data.code === 200){
                history.push("/profile");
            }
            console.log(res)
        })
            .catch(err => console.log(err))
    }

    return (
        <MainDiv>
            <div className="col-md-6 col-sm-10" style={{ border: "solid grey 1px" }}>
                <h5 class="card-title">Sign Up</h5>
                <form onSubmit={handleSubmit}>
                    {error === "" ?
                        <div className="alert" style={{ display: "inline-block" }}></div> :
                        <div className="alert" role="alert" style={{ display: "inline-block", color: "red" }}>
                            {error}
                        </div>}
                    <div className="form-group row">
                        <label className="col-sm-2 col-md-4 col-form-label">Name</label>
                        <div className="col-sm-10 col-md-4">
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-md-4 col-form-label">Email</label>
                        <div className="col-sm-10 col-md-4">
                            <input
                                type="text"
                                name="email"
                                value={email}
                                onChange={e => setUserEmail(e.target.value)}
                                required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-md-4 col-form-label">Password</label>
                        <div className="col-sm-10 col-md-4">
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-2 col-md-2 col-form-label"></div>
                        <div className="col-sm-10 col-md-6">
                            <button className="btn btn-submit bg-yellow" type="submit" value="Login">Login</button>
                        </div>
                    </div>

                </form>
            </div>
        </MainDiv>
    )
}

export default Signup;