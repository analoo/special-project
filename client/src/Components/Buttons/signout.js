import React from "react";
import API from "../../Utils/API"
import { useHistory } from "react-router-dom";


function SignOut(){
    const history = useHistory();
    
    const signout = () => {
        API.signOut().then(res =>
            console.log(res))
    }

    return(
        <a href="/" type="button" className="btn bg-yellow" onClick={signout}>
            SignOut
        </a>
    )

}

export default SignOut;