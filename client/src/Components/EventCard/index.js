import React from "react";

function EventCard() {
    return (

        <div className="card-body">
            <div className="card border-warning m-3 mx-auto" style={{ maxWidth: "50rem" }}>
                <div className="card-header bg-warning">
                    <h5 className="float-left">Weekend in Tahoe - <span>Ana's House</span></h5>
                    <h6 className="float-right">06/12/20 - 06/14/20 | All-Day</h6>
                </div>
                <div className="card-body m-3">
                    <div className="row">
                        <div className="col-9">
                            <p className="card-text text-left">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                            <div className="mb-2 float-left">
                                <span className="mr-2" role="img" aria-label="face with medical mask">😷</span>
                                <span className="mr-2" role="img" aria-label="footprints">👣</span>
                                <span role="img" aria-label="national-park">🏞</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="p-3 mb-2 bg-light rounded-lg text-left">
                                <p className="card-text">Contacts:</p>
                                <ul>
                                    <li>Ana</li>
                                    <li>Leila</li>
                                    <li>Nadine</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default EventCard;