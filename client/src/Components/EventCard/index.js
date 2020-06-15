import React from "react";
var moment = require('moment');


function EventCard(props) {
    let contacts = props.data.contacts.split(",")


    return (

        <div className="card-body">
            <div className="card mx-auto" style={{ maxWidth: "50rem" }}>
                <div className="card-header bg-purple">
                    <div className="row">
                        <div className="col-md-8">
                            <h5 className="float-left">{props.data.Event.name}</h5>
                        </div>
                        <div className="col-md-4">
                            <h6 className="float-left">{moment(props.data.startDate).format("MMM DD")}, {props.data.startTime} - {moment(props.data.endDate).format("MMM DD")}, {props.data.endTime}</h6>
                        </div>
                    </div>
                </div>
                <div className="card-body m-3">
                    <div className="row">
                        <div className="col-md-9">
                            <i className="fas fa-edit float-right"></i>
                            <p className="card-text text-left">{props.data.notes}</p>
                            <div className="mb-2 float-left">
                                {props.data.mask ? <span className="mr-2" role="img" aria-label="face with medical mask">😷</span> : null}
                                {props.data.sixFeet ? <span className="mr-2" role="img" aria-label="footprints">👣</span> : null}
                                {props.data.outside ? <span role="img" aria-label="national-park">🏞</span> : null}
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="p-3 mb-2 bg-light rounded-lg text-left">
                                <p className="card-text">Contacts: {contacts}</p>
                                {/* <ul>
                                {contacts.map(person => (
                                    <li>{person}</li>
                                ))}
                                </ul> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        // <div className="card-body">
        //     <div className="card mx-auto" style={{ maxWidth: "50rem" }}>
        //         <div className="card-header bg-purple">
        //             <div className="row">
        //                 <div className="col-md-8">
        //                     <h5 className="float-left">Weekend in Tahoe - <span>Ana's House</span></h5>
        //                 </div>
        //                 <div className="col-md-4">
        //                     <h6 className="float-left">06/12/20 - 06/14/20 | All-Day</h6>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="card-body m-3">
        //             <div className="row">
        //                 <div className="col-md-9">
        //                     <i className="fas fa-edit float-right"></i>
        //                     <p className="card-text text-left">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
        //                     <div className="mb-2 float-left">
        //                         <span className="mr-2" role="img" aria-label="face with medical mask">😷</span>
        //                         <span className="mr-2" role="img" aria-label="footprints">👣</span>
        //                         <span role="img" aria-label="national-park">🏞</span>
        //                     </div>
        //                 </div>
        //                 <div className="col-md-3">
        //                     <div className="p-3 mb-2 bg-light rounded-lg text-left">
        //                         <p className="card-text">Contacts:</p>
        //                         <ul>
        //                             <li>Ana</li>
        //                             <li>Leila</li>
        //                             <li>Nadine</li>
        //                         </ul>
        //                     </div>
        //                 </div>

        //             </div>
        //         </div>
        //     </div>
        // </div>

    )
}

export default EventCard;