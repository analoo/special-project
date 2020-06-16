import React, { useEffect, useState } from "react";
import API from "../Utils/API"

function Profile() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [color, setColor] = useState("#928AFF");

    console.log(color)

    useEffect(() => {
        API.getUser()
            .then(res => {
                setName(res.data.name)
                setEmail(res.data.email)
                setZipCode(res.data.zipcode)
                setCity(res.data.city)
                setState(res.data.state)
                setColor(res.data.color)
            })
    }, [])

    const submitHandler = (event) => {
        event.preventDefault();
        API.updateUser({
            name: name,
            zipcode: zipCode,
            city: city,
            state: state,
            color: color
        }).then(res =>
            console.log(res.data))

    }


    return (
        <div className="row m-3">
            <div class="card main-div col-md-6 col-sm-8" style={{top: "20px", borderColor: color}}>
                <div className="card-header" style={{backgroundColor: "transparent"}}>
                    {name ? 
                    <header>
                        <img className="avatar float-left" src="/mask-avatar.png" style={{backgroundColor: color, width: "70px"}} alt="user-avatar"/>
                        <h2 style={{ color: color }}>Welcome Back, {name}!</h2> 
                    </header>
                    : null}
                </div>
                <div className="card-body">
                    <div className="form-group row m-3">
                        <label className="col-sm-4 col-form-label dark-purple font-weight-bold" style={{ color: color }}>Email</label>
                        <div className="col-sm-8">
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    style={{ color: color }}
                                    className="form-control"/>
                            </div>
                        {/* <div className="col-sm-9 col-md-4">
                            <a href={`mailto:${email}`} className="card-link dark-purple float-left">{email}</a>
                        </div> */}
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="form-group row m-3">
                            <label className="col-sm-4 col-form-label dark-purple font-weight-bold" style={{ color: color }}>Display Name</label>
                            <div className="col-sm-8">
                                <input
                                    type="name"
                                    name="name"
                                    value={name}
                                    className="form-control"
                                    onChange={e => setName(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group row m-3">
                            <label className="col-sm-4 col-form-label dark-purple font-weight-bold" style={{ color: color }}>Primary City</label>
                            <div className="col-sm-8">
                                <input
                                    type="name"
                                    value={city}
                                    placeholder="San Francisco"
                                    className="form-control"
                                    onChange={e => setCity(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row m-3">
                            <label className="col-sm-4 col-form-label dark-purple font-weight-bold" style={{ color: color }}>Primary State</label>
                            <div className="col-sm-8">
                                <input
                                    type="name"
                                    value={state}
                                    placeholder="CA"
                                    className="form-control"
                                    onChange={e => setState(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row m-3">
                            <label className="col-sm-4 col-form-label dark-purple font-weight-bold" style={{ color: color }}>Zipcode</label>
                            <div className="col-sm-8">
                                <input
                                    type="name"
                                    value={zipCode}
                                    placeholder="92123"
                                    className="form-control"
                                    onChange={e => setZipCode(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row m-3">
                            <label className="col-sm-4 col-form-label dark-purple font-weight-bold" style={{ color: color }}>User Avatar Color</label>
                            <div className="col-sm-8">
                                <div class="form-check form-check-inline mr-3">
                                    <input className="form-check-input" type="radio" value="purple" name="colors" onChange={e => setColor(e.target.value)}/>
                                    <label className="form-check-label" for="exampleRadios1">
                                        <span role="img" aria-label="purple heart">💜</span>Purple
                                    </label>
                                </div>
                                <div className="form-check form-check-inline mr-3">
                                    <input className="form-check-input" type="radio" value="orange" name="colors" onChange={e => setColor(e.target.value)} />
                                    <label class="form-check-label" for="exampleRadios2">
                                        <span role="img" aria-label="orange heart">🧡</span>Orange
                                    </label>
                                </div>
                                <div class="form-check form-check-inline mr-3">
                                    <input className="form-check-input" type="radio" value="green" name="colors" onChange={e => setColor(e.target.value)} />
                                    <label class="form-check-label" for="exampleRadios3">
                                        <span role="img" aria-label="green heart">💚</span>Green
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" value="blue" name="colors" onChange={e => setColor(e.target.value)} />
                                    <label class="form-check-label" for="exampleRadios3">
                                        <span role="img" aria-label="blue heart">💙</span>Blue
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row m-3">
                            <label className="col-sm-4 col-form-label dark-purple font-weight-bold" style={{ color: color }}>Tested Positive for Coronovirus</label>
                            <div className="col-sm-8">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="virus" id="true" value="1"/>
                                    <label class="form-check-label" for="virus">
                                        TRUE
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="virus" id="false" value="1"/>
                                    <label class="form-check-label" for="virus">
                                        FALSE
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row m-3 float-right">
                            <div className="col-sm-6 col-md-12"></div>
                            <button type="button" className="btn bg-gray mr-2" onClick={() => window.location.reload(false)}>Cancel</button>
                            <button type="submit" className="btn bg-dark-purple">Save</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>

    )
}

export default Profile;