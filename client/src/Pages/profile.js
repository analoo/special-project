import React, {useEffect, useState} from "react";
import API from "../Utils/API"

function Profile(){
    const [id, setId] = useState("");
    const [username, setUsername] = useState("")

    useEffect(() => {
        API.getUser()
        .then(res => {
            console.log(res.data)
            setId(res.data.id)
            setUsername(res.data.email)
        })
    }, [])






    return(
        <div>
            This is the Profile Page
            Id: {id}
            Username: {username}
        </div>
    )
}

export default Profile;