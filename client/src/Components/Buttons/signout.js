import React from "react";
import API from "../../Utils/API"
import { useHistory } from "react-router-dom";


function SignOut(){
    const history = useHistory();
    const signout = () => {
        API.signOut().then(res =>
            console.log(res))
            history.push("/");


    }

    return(
        <button className="btn" onClick={signout}>
            SignOut
        </button>
    )

}

export default SignOut;