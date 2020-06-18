import React, { useState } from "react";
import API from "../Utils/API"
import MainDiv from "../Components/Container/main-Div"


function Signup() {
    const [email, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("")


    const handleSubmit = (event) => {
        event.preventDefault();
        API.register({
            name: name,
            email: email,
            password: password,
        }).then(res => {
            setError(res.data.message)
            if(res.data.code === 200){
                window.location.replace("/profile");
            }
            console.log(res)
        })
            .catch(err => console.log(err))
    }

    return (
        <MainDiv>
        <div className="col-md-6 col-sm-10 border rounded" id="bg-img" style={{border: "solid grey 1px", padding: "20px", top: "50px", height: "100%", verticalAlign: "middle"}}>
            <h3 className="card-title dark-purple">Sign Up</h3>
            {error === "" ?
                <div className="alert" style={{display: "inline-block"}}></div> 
                : 
                    <div className="alert" role="alert" style={{display: "inline-block"}}>
                        {error}
                    </div>
                }                
                <form className="m-4" onSubmit={handleSubmit}>
                    <div className="form-group row">
                        <label className="col-sm-2 col-md-4 col-form-label dark-purple font-weight-bold">Name</label>
                        <div className="col-sm-10 col-md-8">
                            <input
                                type="text"
                                name="name"
                                value={name}
                                className="form-control"
                                placeholder="Joe Smith"
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-md-4 col-form-label dark-purple font-weight-bold">Email</label>
                        <div className="col-sm-10 col-md-8">
                            <input
                                type="text"
                                name="email"
                                value={email}
                                className="form-control"
                                placeholder="smith@gmail.com"
                                onChange={e => setUserEmail(e.target.value)}
                                required 
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-md-4 col-form-label dark-purple font-weight-bold">Password</label>
                        <div className="col-sm-10 col-md-8">
                            <input
                                type="password"
                                name="password"
                                value={password}
                                className="form-control"
                                onChange={e => setPassword(e.target.value)}
                                required 
                            />
                        </div>
                    </div>
                    <div className="form-group row justify-content-center m-4">
                        {/* <div className="col-sm-2 col-md-2 col-form-label"></div> */}
                        <div className="col-sm-10 col-md-8">
                            <button className="btn btn-submit bg-yellow" type="submit" value="Signup">Sign Up</button>
                        </div>
                    </div>
                </form>
                <a href="/signin" type="button" className="dark-purple justify-content-center">Go back to Sign In</a>

            </div>
        </MainDiv>
    )
}

export default Signup;