import React, {useState} from "react";
import CalendarForm from "../CalendarForm";
// import "./style.css";

function AddForm() {
    const [color, setColor] = useState("");
    const [eventName, setEventName] = useState("");
    const [location, setLocation] = useState("");
    const [notes, setNotes] = useState("");
    const [mask, setMask] = useState("");
    const [sixFt, setSixFt] = useState("");
    const [outside, setOutside] = useState("");
    const [contact, setContact] = useState("");

    const handleAdd = (event) => {
        event.preventDefault();

        console.log(color)
        console.log(eventName)
        console.log(location)
        console.log(notes)
        console.log(mask)
        console.log(sixFt)
        console.log(outside)
        console.log(contact)
        
        // API.saveEvent(eventBody, userId)
        //     .then(() => {
        //         console.log("Saved Event")
        //         return (
        //             window.location.reload()
        //         )
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        }

    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        if (name === "color") {
            setColor(value);
        } else if (name === "eventName") {
            setEventName(value);
        } else if (name === "location") {
            setLocation(value);
        } else if (name === "notes") {
            setNotes(value);
        } else if (name === "mask") {
            setMask(value);
        } else if (name === "sixFt") {
            setSixFt(value);
        } else if (name === "outside") {
            setOutside(value);
        } else if (name === "contact") {
            setContact(value);
        } else if (name === "solo") {
            setContact(null); // set to null if no contacts
        }

    };
    return (
        // <!-- Modal -->
        <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Add new event</h5>
                        <div className="form-group ml-5">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="color" id="purple" value="purple" onChange={(event) => onChangeHandler(event)}/>
                                <label className="form-check-label" htmlFor="purple"><span role="img" aria-label="purple heart">💜</span></label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="color" id="orange" value="orange" onChange={(event) => onChangeHandler(event)}/>
                                <label className="form-check-label" htmlFor="orange"><span role="img" aria-label="orange heart">🧡</span></label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="color" id="green" value="green" onChange={(event) => onChangeHandler(event)}/>
                                <label className="form-check-label" htmlFor="green"><span role="img" aria-label="green heart">💚</span></label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="color" id="blue" value="blue" onChange={(event) => onChangeHandler(event)}/>
                                <label className="form-check-label" htmlFor="blue"><span role="img" aria-label="blue heart">💙</span></label>
                            </div>
                        </div>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            {/* What Section */}
                            <div className="mb-4">
                                <h4 className="text-left font-weight-bold">What?</h4>
                                <hr/>
                                <div className="form-group">
                                    <label className="float-left font-weight-bold" htmlFor="eventName">Event Name</label>
                                    <input type="text" className="form-control" id="event" name="eventName" placeholder="Picinic" onChange={(event) => onChangeHandler(event)}/>
                                </div>
                                <div className="form-group">
                                    <label className="float-left font-weight-bold" htmlFor="location">Location</label>
                                    <input type="text" className="form-control" id="location" placeholder="Golden Gate Park" onChange={(event) => onChangeHandler(event)}/>
                                </div>
                                <div className="form-group">
                                    <label className="float-left font-weight-bold" htmlFor="notes">Notes</label>
                                    <textarea className="form-control" id="notes" rows="3" name="notes" onChange={(event) => onChangeHandler(event)}></textarea>
                                </div>
                                <div className="form-group">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="mask" name="mask" value="option1" onChange={(event) => onChangeHandler(event)}/>
                                        <label className="form-check-label" htmlFor="mask">Wore Mask <span role="img" aria-label="face with medical mask">😷</span></label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="sixFt" name="sixFt" value="option2" onChange={(event) => onChangeHandler(event)}/>
                                        <label className="form-check-label" htmlFor="sixFt">6ft Apart<span role="img" aria-label="footprints">👣</span></label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="outside" name="outside" value="option3" onChange={(event) => onChangeHandler(event)}/>
                                        <label className="form-check-label" htmlFor="outside">Outside <span role="img" aria-label="national-park">🏞</span></label>
                                    </div>
                                </div>
                            </div>
                            
                             {/* When Section */}
                             <div className="mb-4">
                                <h4 className="text-left font-weight-bold">When?</h4>
                                <hr/>
                                <div className="row mb-4">
                                    <div className="col">
                                        <label className="float-left font-weight-bold" htmlFor="startTime">Start Time</label>
                                        <input type="text" className="form-control" placeholder="08:00PM"/>
                                    </div>
                                    <div className="col">
                                        <label className="float-left font-weight-bold" htmlFor="endTime">End Time</label>
                                        <input type="text" className="form-control" placeholder="09:00PM"/>
                                    </div>
                                    <div className="col mt-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="allDay"/>
                                            <label className="form-check-label" htmlFor="allDay">
                                                All Day
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <CalendarForm />
                            </div>

                             {/* Who Section */}
                            <div className="mb-4">
                                <h4 className="text-left font-weight-bold">Who?</h4>
                                <hr/>
                                <div className="row form-group">
                                    <div className="col-9">
                                        <label className="float-left font-weight-bold" htmlFor="contact">Contacts</label>
                                        <textarea className="form-control" id="contact" name="contact" rows="2" placeholder="Ana, Leila, Nadine" onChange={(event) => onChangeHandler(event)}></textarea>
                                    </div>
                                    <div className="col-3 mt-5">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="solo" name="solo" onChange={(event) => onChangeHandler(event)}/>
                                            <label className="form-check-label" htmlFor="solo">
                                                None
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-warning" onClick={event => handleAdd(event)}>Check In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddForm;