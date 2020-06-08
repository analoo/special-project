import React from "react";

function Login() {
    return (
        <form action="/auth/login" method="post">
            <div>
                <label>Username:</label>
                <input type="text" name="username" />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" />
            </div>
            <div>
            <button type="submit" value="Login" >Login</button>
            </div>
        </form>
    )
}

export default Login;