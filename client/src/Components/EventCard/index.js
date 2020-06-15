import React from "react";
var moment = require('moment');


function EventCard(props) {
    let contacts = props.data.contacts.split(",")


    return (

        <div id={props.id} className="collapse show" aria-labelledby={props.labelledby} data-parent={"#accordionExample"}>

            <div className="card-body">
                <div className="card mx-auto" style={{ maxWidth: "50rem" }}>
                    <div className="card-header" style={{backgroundColor: props.data.color}}>
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
                                    <p className="card-text">Contacts:</p>
                                    <ul>
                                        {contacts.map(person => (
                                            <li key={person}>{person}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EventCard;