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

            <div class="card main-div" style={{width: "18rem"}}>
                <div class="card-body">
                    <h5 class="card-title">Name: {name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">User Id: {id}</h6>
                    <a href={`mailto:${username}`} class="card-link">Email</a>
                </div>
            </div>
        </div>
    )
}

export default Profile;