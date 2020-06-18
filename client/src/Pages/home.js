import React from "react";
import SearchBar from "../Components/CalendarForm/searchBar"

function Home() {
    return (
        <div>
            <div className="bg-dark-purple home-header">
                <h3 className="px-5 pt-5"><strong>footsteps</strong> is an easy way to record daily interactions </h3>
                <h5 className="px-5 pb-5">We collect only absolutely necessary information and keep it safe </h5>
            </div>
            <div>
                <div className="home-images">
                    <a href="/signup">
                    <img className="d-block w-100" src="/1.png" />

                    </a>
                    
                </div>
                <div className="home-images">
                    <img className="d-block w-100" src="/2.png" />
                </div>
               
                <div className="home-images bg-purple">
                    <img className="d-block w-100" src="/3.png" />
                </div>
                <div className="home-images bg-purple">
                    <img className="d-block w-100" src="/4.png" />
                </div>
            </div>

            <div className="foot-base">

            </div>
        </div>
    )
}

export default Home;