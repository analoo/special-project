import React from "react";

function Home(){
    return(
        <div>
            <h1 className="mt-3">Recent Events</h1>

            <div className="accordion mx-auto" id="accordionExample" style={{maxWidth: "50rem"}}>
                <div className="card">
                    <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                        <button className="btn btn-block text-left font-weight-bold collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        June
                        </button>
                    </h2>
                    </div>

                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            <div className="card border-light m-3 mx-auto" style={{maxWidth: "50rem"}}>
                                <div className="card-header">
                                    <h5 className="float-left">Golden Gate Park</h5>
                                    <h6 className="float-right">06/04/20</h6>
                                </div>
                                <div className="card-body text-left">
                                    <div className="row">
                                        <div className="col">
                                            <h5 class="card-title">Picnic</h5>
                                            <p class="card-text">Went on a picnic in the park.</p>
                                        </div>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="card border-light m-3 mx-auto" style={{maxWidth: "50rem"}}>
                                <div className="card-header">
                                    <h5 className="float-left">Golden Gate Park</h5>
                                    <h6 className="float-right">06/04/20</h6>
                                </div>
                                <div className="card-body text-left">
                                    <div className="row">
                                        <div className="col">
                                            <h5 class="card-title">Picnic</h5>
                                            <p class="card-text">Went on a picnic in the park.</p>
                                        </div>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                        <button className="btn btn-block text-left font-weight-bold collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                       May
                        </button>
                    </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                        <button className="btn btn-block text-left font-weight-bold collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        April
                        </button>
                    </h2>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;