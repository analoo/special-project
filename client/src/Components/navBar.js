import React from "react";
import { Link, useLocation } from "react-router-dom";


function NavBar() {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            {/* <!-- <a className="navbar-brand" href="/">Navbar w/ text</a> --> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Home
                    </Link>
                    <Link to="/search" className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                        Search
                    </Link>
                    <Link to="/profile" className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                        Profile
                    </Link>
                    <Link to="/login" className={location.pathname === "/login" ? "nav-link active" : "nav-link"}>
                        Login
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;