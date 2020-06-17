import React from "react";
import SearchBar from "../Components/CalendarForm/searchBar"

function Home() {
    return (
        <div>
            <div className="bg-dark-purple home-header">
                <h3 className="px-5 pt-5"><strong>footsteps</strong> is an easy way to record daily interactions </h3>
                <h4 className="px-5 pb-5">We collect only absolutely necessary information and keep it safe </h4>
            </div>
            <div>
                <div className="home-images">
                    <img className="d-block w-100" src="/slide1s.png" />
                </div>
                <div className="home-images">
                    <img className="d-block w-100" src="/slide2s.png" />
                </div>
               
                <div className="home-images bg-purple">
                    <img className="d-block w-100" src="/slide3.png" />
                </div>
                <div className="home-images bg-purple">
                    <img className="d-block w-100" src="/slide4.png" />
                </div>
            </div>

            <div className="foot-base">

            </div>
        </div>
    )
}

export default Home;