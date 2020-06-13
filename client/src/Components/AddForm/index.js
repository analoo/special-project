import React, {useState} from "react";
// import CalendarForm from "../CalendarForm";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./style.css";

// function eventJSON(color, eventName, location, notes, mask, sixFt, outside, contact, startTime, endTime, startDate, endDate, allDay) {
//     return (
//         {
            
//         }
//     )
// }

function AddForm() {
    const [color, setColor] = useState("");
    const [activityName, setActivityName] = useState("");
    const [location, setLocation] = useState("");
    const [notes, setNotes] = useState("");
    const [mask, setMask] = useState(0);
    const [sixFt, setSixFt] = useState(0);
    const [outside, setOutside] = useState(0);
    const [contact, setContact] = useState("");
    const [solo, setSolo] = useState(""); // or setContact(null)
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [allDay, setAllDay] = useState("");

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);

    const handleAdd = (event) => {
        event.preventDefault();

        console.log(color)
        console.log(activityName)
        console.log(location)
        console.log(notes)
        console.log(mask)
        console.log(sixFt)
        console.log(outside)
        console.log(contact)
        console.log(startTime)
        console.log(endTime)
        console.log("start date:", state[0].startDate)
        console.log("end date:", state[0].endDate)
        console.log(allDay)
        
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
    
        // Close modal
        // data-dismiss="modal"
    }

    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        if (name === "color") {
            setColor(value);
        } else if (name === "activityName") {
            setActivityName(value);
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
        } else if (name === "startTime") {
            setStartTime(value);
        } else if (name === "endTime") {
            setEndTime(value);
        } else if (name === "allDay") {
            setAllDay(value);
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
                        {/* <h5 className="modal-title dark-purple font-weight-bold" id="staticBackdropLabel">ADD NEW EVENT</h5> */}
                        <div class="btn-group">
                            <button type="button" class="btn bg-purple dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Color
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item dark-purple" href="#"><span role="img" aria-label="purple heart">💜 Purple</span></a>
                                <a class="dropdown-item" href="#"><span role="img" aria-label="orange heart">🧡 Orange</span></a>
                                <a class="dropdown-item" href="#"><span role="img" aria-label="green heart">💚 Green</span></a>
                                <a class="dropdown-item" href="#"><span role="img" aria-label="blue heart">💙 Blue</span></a>
                            </div>
                        </div>
                        {/* <div className="form-group ml-5">
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
                        </div> */}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            {/* What Section */}
                            <div className="mb-4">
                                <h4 className="text-left purple">What?</h4>
                                <div className="form-group">
                                    {/* <label className="float-left font-weight-bold" htmlFor="eventName">Event Name</label> */}
                                    <input type="text" className="form-control" id="event" name="activityName" placeholder="Activity Name" onChange={(event) => onChangeHandler(event)}/>
                                </div>
                                <div className="form-group">
                                    {/* <label className="float-left font-weight-bold" htmlFor="location">Location</label> */}
                                    <input type="text" className="form-control" id="location" name="location" placeholder="Location" value={location} onChange={(event) => setLocation(event.target.value)}/>
                                </div>
                                <div className="form-group">
                                    {/* <label className="float-left font-weight-bold" htmlFor="notes">Notes</label> */}
                                    <textarea className="form-control" id="notes" rows="3" name="notes" placeholder="Notes" onChange={(event) => onChangeHandler(event)}></textarea>
                                </div>
                                <div className="form-group">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="mask" name="mask" value={mask} onChange={() => setMask(1)}/>
                                        <label className="form-check-label" htmlFor="mask">Wore Mask <span role="img" aria-label="face with medical mask">😷</span></label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="sixFt" name="sixFt" value={sixFt} onChange={() => setSixFt(1)}/>
                                        <label className="form-check-label" htmlFor="sixFt">6ft Apart<span role="img" aria-label="footprints">👣</span></label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="outside" name="outside" value={outside} onChange={() => setOutside(1)}/>
                                        <label className="form-check-label" htmlFor="outside">Outside <span role="img" aria-label="national-park">🏞</span></label>
                                    </div>
                                </div>
                            </div>
                            
                             {/* When Section */}
                             <div className="mb-4">
                                <h4 className="text-left purple">When?</h4>
                                <div className="row mb-4">
                                    <div className="col-4">
                                        <label className="float-left" htmlFor="startTime">Start Time</label>
                                        <input type="text" className="form-control" placeholder="08:00PM" name="startTime" onChange={(event) => onChangeHandler(event)}/>
                                    </div>
                                    <div className="col-4">
                                        <label className="float-left" htmlFor="endTime">End Time</label>
                                        <input type="text" className="form-control" placeholder="09:00PM" name="endTime" onChange={(event) => onChangeHandler(event)}/>
                                    </div>
                                    <div className="col-1 mt-4 font-weight-bold">
                                       <p>OR</p>
                                    </div>
                                    <div className="col-3 mt-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="allDay" name="allDay" value="true" onChange={(event) => setAllDay(event.target.value)}/>
                                            <label className="form-check-label" htmlFor="allDay">
                                                All Day
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-4">
                                        <label className="float-left" htmlFor="startTime">Start Date</label>
                                        <input type="text" className="form-control" placeholder="2020-06-13" name="startTime" onChange={(event) => onChangeHandler(event)}/>
                                    </div>
                                    <div className="col-4">
                                        <label className="float-left" htmlFor="endTime">End Date</label>
                                        <input type="text" className="form-control" placeholder="2020-06-13" name="endTime" onChange={(event) => onChangeHandler(event)}/>
                                    </div>
                                    <div className="col-4 mt-4">
                                        <i class="far fa-calendar-alt bg-light-purple p-2"></i>
                                    </div>
                                </div>
                                <DateRange
                                    name="date"
                                    editableDateInputs={true}
                                    onChange={item => setState([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={state}
                                    color={"#928AFF"}
                                    rangeColors={["#928AFF"]}
                                    id="date"
                                />
                            </div>

                             {/* Who Section */}
                            <div className="mb-4">
                                <h4 className="text-left purple">Who?</h4>
                                <div className="row form-group">
                                    <div className="col-8">
                                        <label className="float-left" htmlFor="contact">Contacts</label>
                                        <textarea className="form-control" id="contact" name="contact" rows="2" placeholder="Ana, Leila, Nadine" value={contact} onChange={(event) => setContact(event.target.value)}></textarea>
                                    </div>
                                    <div className="col-1 mt-5 font-weight-bold">
                                       <p>OR</p>
                                    </div>
                                    <div className="col-3 mt-5">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="solo" name="solo" onChange={(event) => setContact("None")}/>
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
                        <button type="button" className="btn bg-gray" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn bg-dark-purple" onClick={event => handleAdd(event)}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddForm;