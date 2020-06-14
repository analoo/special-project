import React, {useEffect, useState} from "react";
import API from "../Utils/API"

function Profile(){
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("")

    useEffect(() => {
        API.getUser()
        .then(res => {
            console.log(res.data)
            setId(res.data.id)
            setName(res.data.name)
            setUsername(res.data.email)
        })
    }, [])

    return(
        <div>
            {/* This is the Profile Page
            Id: {id}
            Username: {username} */}

            <div className="card main-div" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h6 className="card-subtitle mb-2 purple">User Id: {id}</h6>
                    <a href={`mailto:${username}`} className="card-link dark-purple">Email</a>
                </div>
            </div>
        </div>
    )
}

export default Profile;