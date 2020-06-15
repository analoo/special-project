import React, { useEffect, useState } from "react";
import API from "../Utils/API"

function Profile() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [color, setColor] = useState("grey")
    const [style, setStyle] = useState({ backgroundColor: color, padding: "4px", width: "50px", borderRadius: "5px" })



    useEffect(() => {
        API.getUser()
            .then(res => {
                setId(res.data.id)
                setName(res.data.name)
                setEmail(res.data.email)
                setZipCode(res.data.zipcode)
                setCity("San Francisco")
                setState("CA")
                setColor("blue")
            })
    }, [])

    const submitHandler = (event) => {
        event.preventDefault();
        API.updateUser({
            name: name,
            zipcode: zipCode,
            // city: city,
            // state: state,
            // color: color
        }).then(res =>
            console.log(res.data))

    }


    return (
        <div>
            <div class="card main-div col-md-8 col-sm-10">
                <div className="card-header">
                    {name ? <h2>   <img src="/mask-avatar.png" style={style} />Welcome Back, {name}!</h2> : null}

                </div>
                <div className="card-body">
                    {/* <h5 className="card-title">Name: {name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">User Id: {id}</h6>
                     */}
                    <div className="form-group row">
                        <label className="col-sm-2 col-md-4 col-form-label">Email</label>
                        <div className="col-sm-10 col-md-4">
                            <a href={`mailto:${email}`} class="card-link">{email}</a>
                        </div>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="form-group row">
                            <label className="col-sm-2 col-md-4 col-form-label">Display Name</label>
                            <div className="col-sm-10 col-md-4">
                                <input
                                    type="name"
                                    name="email"
                                    value={name}
                                    onChange={e => setName(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-md-4 col-form-label">Primary City</label>
                            <div className="col-sm-10 col-md-4">
                                <input
                                    type="name"
                                    value={city}
                                    placeholder="San Francisco"
                                    onChange={e => setCity(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-md-4 col-form-label">Primary State</label>
                            <div className="col-sm-10 col-md-4">
                                <input
                                    type="name"
                                    value={state}
                                    placeholder="CA"
                                    onChange={e => setState(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-md-4 col-form-label">Zipcode</label>
                            <div className="col-sm-10 col-md-4">
                                <input
                                    type="name"
                                    value={zipCode}
                                    placeholder="92123"
                                    onChange={e => setZipCode(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-md-4 col-form-label">User Avatar</label>
                            <div className="col-sm-10 col-md-4">
                                <div class="form-check">
                                    <input className="form-check-input" type="radio" value="red" name="colors" onChange={e => setColor(e.target.value)} />
                                    <label className="form-check-label" for="exampleRadios1">
                                        Red
  </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" value="grey" name="colors" onChange={e => setColor(e.target.value)} />
                                    <label class="form-check-label" for="exampleRadios2">
                                        Grey
  </label>
                                </div>
                                <div class="form-check disabled">
                                    <input className="form-check-input" type="radio" value="purple" name="colors" onChange={e => setColor(e.target.value)} />
                                    <label class="form-check-label" for="exampleRadios3">
                                        Purple
  </label>
                                </div>

                            </div>
                        </div>
                        <div className="form-group row">
                            <button type="button" className="btn bg-gray" onClick={() => window.location.reload(false)}>Cancel</button>
                            <button type="submit" className="btn bg-dark-purple">Save</button>
                        </div>


                    </form>
                </div>
            </div>

        </div>


    )
}

export default Profile;