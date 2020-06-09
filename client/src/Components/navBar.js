import React from "react";
import { Link, useLocation } from "react-router-dom";
import CheckInButton from "../Components/CheckInButton";


function NavBar() {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
             <a class="navbar-brand" href="/">
                <img src="https://lh6.googleusercontent.com/dByUthx2WomxVwte5qD-8sW_K5qFNboZRA8MiAfhaKyl_0lO0m_QPn8YLodF0ahMMBZhJHZaFx-fl8dJ_Y9d-72mHPZibGyT1Ar5Gfau" width="60" height="60" class="d-inline-block align-top" alt="" loading="lazy"/>
            </a>
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
                </ul>
            </div>
            <CheckInButton/>
        </nav>
    )
}

export default NavBar;