import React from "react";
import SearchBar from "../Components/CalendarForm/searchBar"

function Home() {
    return (
        <div>
            <h1 className="my-3">Home</h1>
            <div className="bg-dark-purple home-header">
            <h3 className="px-5 py-5"><strong>footsteps</strong> is an easy way to record daily interactions. Our users can create activities with time, location, and participants. If users get sick or are contacted because they came in contact with an infected person, he or she can quickly share recent activity with a contact tracer. </h3>
            </div>
            
            {/* <SearchBar/> */}
        
            <div id="carouselExampleControls" className="carousel slide col-md-10 col-sm-12" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="/slide1.png" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="..." alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="..." alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon bg-dark-purple" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="foot-base">

            </div>
        </div>
    )
}

export default Home;