import React, { useState, useEffect } from "react";
// import CalendarForm from "../CalendarForm";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import API from "../../Utils/API";
var moment = require("moment");

let monthArray = ["0", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"]
let colors = {
    purple: "#c31bfe",
    orange: "#ff8400",
    green: "#00ce00",
    blue: "#006dff"
}

function eventJSON(color, activityName, location, notes, mask, sixFeet, outside, contact, startTime, endTime, startDate, endDate, startDay, startMonth, startYear) {
    return (
        {
            color: color,
            name: activityName,
            location: location,
            notes: notes,
            mask: mask,
            sixFeet: sixFeet,
            outside: outside,
            contacts: contact,
            startTime: startTime,
            endTime: endTime,
            startDate: startDate,
            endDate: endDate,
            startDay: startDay,
            startMonth: startMonth,
            startYear: startYear
        }
    )
}


function AddForm() {
    const [color, setColor] = useState("#928AFF");
    const [activityName, setActivityName] = useState("");
    const [location, setLocation] = useState("");
    const [notes, setNotes] = useState("");
    const [mask, setMask] = useState(0);
    const [sixFeet, setSixFeet] = useState(0);
    const [outside, setOutside] = useState(0);
    const [contact, setContact] = useState("");
    const [startOS, setStartOS] = useState("0")
    const [endOS, setEndOS] = useState("0")
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [allDay, setAllDay] = useState("");
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [display, setDisplay] = useState("");
    
    const handleAdd = (event) => {
        event.preventDefault();

        // Check required inputs
        if (!activityName || !location || !startTime || !endTime) {
            setDisplay("true")
        } else {
            let startDate = moment(state[0].startDate).format("YYYY-MM-DD");
            let endDate = moment(state[0].endDate).format("YYYY-MM-DD");
            let startDay = moment(state[0].startDate).date();
            let startMonth = moment(state[0].startDate).month() + 1;
            let startYear = moment(state[0].startDate).year();

            let parsedStartHour = parseInt(startTime.split(":")[0]) + parseInt(startOS)
            let parsedStartMinute = parseInt(startTime.split(":")[1])
            let refStart = moment({ hour: parsedStartHour, minute: parsedStartMinute, seconds: 0 }).format("HH:mm:ss")

            let parsedEndHour = parseInt(endTime.split(":")[0]) + parseInt(endOS)
            let parsedEndMinute = parseInt(endTime.split(":")[1])
            let refEnd = moment({ hour: parsedEndHour, minute: parsedEndMinute, seconds: 0 }).format("HH:mm:ss")


            const eventBody = eventJSON(color, activityName, location, notes, mask, sixFeet, outside, contact, refStart, refEnd, startDate, endDate, startDay, startMonth, startYear)
            console.log(eventBody)

            API.createEvent(eventBody)
                .then((res) => {
                    console.log("Saved Event")
                    console.log(res)
                    return (
                        window.location.reload()
                    )
                })
                .catch(error => {
                    console.log(error)
                })

            // Close modal
            // data-dismiss="modal"
            window.location.href = "/activities"
        }
    }

    const onChangeTimeHandler = () => {
        setStartOS("0")
        setStartTime("12:01");
        setEndOS("12")
        setEndTime("11:59");
        setAllDay(1);
    };

    return (
        // <!-- Modal -->
        <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form className="App">
                    
                        <div className="modal-header">
                            {/* <h5 className="modal-title dark-purple font-weight-bold" id="staticBackdropLabel">ADD NEW EVENT</h5> */}
                            <div className="btn-group">
                                <button type="button" className="btn border text-white dropdown-toggle" style={{ backgroundColor: color }} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Color
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item purple-heart" href="#" id="purple" value="purple" onClick={(event) => setColor(colors["purple"])}>
                                        <span role="img" aria-label="purple heart">💜</span> Purple
                                    </a>
                                    <a className="dropdown-item orange-heart" href="#" id="orange" value="orange" onClick={(event) => setColor(colors["orange"])}>
                                        <span role="img" aria-label="orange heart">🧡</span> Orange
                                    </a>
                                    <a className="dropdown-item green-heart" href="#" id="green" value="green" onClick={(event) => setColor(colors["green"])}>
                                        <span role="img" aria-label="green heart">💚</span> Green
                                    </a>
                                    <a className="dropdown-item blue-heart" href="#" id="blue" value="blue" onClick={(event) => setColor(colors["blue"])}>
                                        <span role="img" aria-label="blue heart">💙</span> Blue
                                    </a>
                                </div>
                            </div>
                            <button type="button" onClick={(e) => window.location.reload()} className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* What Section */}
                            <div className="mb-4">
                                {display ? 
                                <div class="alert alert-danger" role="alert">
                                    Fill in required fields!
                                </div>
                                :
                                null
                                }
                                <h4 className="text-left" style={{ color: color }}>What?</h4>
                                <div className="form-group">
                                    <input type="text" className={!activityName ? "is-invalid form-control" : "is-valid form-control"} id="event" placeholder="Activity Name" name="event" value={activityName} onChange={(event) => setActivityName(event.target.value)} required/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className={!location ? "is-invalid form-control" : "is-valid form-control"} id="location" placeholder="Location" name="location" value={location} onChange={(event) => setLocation(event.target.value)} required/>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" id="notes" rows="3" placeholder="Notes" name="notes" value={notes} onChange={(event) => setNotes(event.target.value)}></textarea>
                                </div>
                                <div className="form-group">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="mask" value={mask} onChange={() => setMask(1)} />
                                        <label className="form-check-label" htmlFor="mask">Wore Mask <span role="img" aria-label="face with medical mask">😷</span></label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="sixFeet" value={sixFeet} onChange={() => setSixFeet(1)} />
                                        <label className="form-check-label" htmlFor="sixFeet">6ft Apart<span role="img" aria-label="footprints">👣</span></label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="outside" value={outside} onChange={() => setOutside(1)} />
                                        <label className="form-check-label" htmlFor="outside">Outside <span role="img" aria-label="national-park">🏞</span></label>
                                    </div>
                                </div>
                            </div>

                            {/* When Section */}
                            <div className="mb-4">
                                <h4 className="text-left" style={{ color: color }}>When?</h4>
                                <div className="form-row mb-1 px-4">
                                    <div className="col-md-3">
                                        <label className="float-left" htmlFor="startTime">Start Time</label>
                                    </div>
                                    <div className="col-md-3">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        className={startTime.length !== 5 ? "is-invalid form-control" : "is-valid form-control"} 
                                        placeholder="08:00" 
                                        name="startTime" 
                                        value={startTime}
                                        maxLength="5"
                                        minLength="5" 
                                        data-bv-stringlength-message="The start date must must be 5 characters"
                                        onChange={(event) => setStartTime(event.target.value)} 
                                        required/>
                                    </div>
                                    <div className="col-md-3">
                                        {startOS === "0" ?
                                            <select className="form-control" id="exampleFormControlSelect1" onChange={e => setStartOS(e.target.value)}>
                                                <option value="0">AM</option>
                                                <option value="12" >PM</option>
                                            </select> :
                                            <select className="form-control" id="exampleFormControlSelect1" onChange={e => setStartOS(e.target.value)}>
                                                <option value="12">PM</option>
                                                <option value="0" >AM</option>
                                            </select>}
                                    </div>
                                    <div className="col-md-3 font-weight-bold">
                                        <p>OR</p>
                                    </div>
                                </div>
                                <div className="form-row mb-4 px-4">
                                    <div className="col-md-3">
                                        <label className="float-left" htmlFor="endTime">End Time</label>
                                    </div>

                                    <div className="col-md-3">
                                        <input 
                                        type="text" 
                                        className={endTime.length !== 5 ? "is-invalid form-control" : "is-valid form-control"} 
                                        placeholder="09:00" 
                                        name="endTime" 
                                        value={endTime}
                                        maxLength="5"
                                        minLength="5" 
                                        data-bv-stringlength-message="The start date must must be 5 characters" 
                                        onChange={(event) => setEndTime(event.target.value)} 
                                        required/>
                                    </div>
                                    <div className="col-md-3">
                                    {endOS === "0" ?
                                            <select className="form-control" id="exampleFormControlSelect1" onChange={e => setEndOS(e.target.value)}>
                                                <option value="0">AM</option>
                                                <option value="12" >PM</option>
                                            </select> :
                                            <select className="form-control" id="exampleFormControlSelect1" onChange={e => setEndOS(e.target.value)}>
                                                <option value="12">PM</option>
                                                <option value="0" >AM</option>
                                            </select>}

                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="allDay" value={allDay} onChange={(event) => onChangeTimeHandler(event.target.value)} />
                                            <label className="form-check-label" htmlFor="allDay">
                                                All Day
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <DateRange
                                    name="date"
                                    editableDateInputs={true}
                                    onChange={item => setState([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={state}
                                    color={color}
                                    rangeColors={[color]}
                                    id="date"
                                />
                            </div>

                            {/* Who Section */}
                            <div className="mb-4">
                                <h4 className="text-left" style={{ color: color }}>Who?</h4>
                                <div className="row form-group">
                                    <div className="col-12">
                                        <textarea className="form-control" id="contact" name="contact" rows="2" placeholder="Contacts" value={contact} onChange={(event) => setContact(event.target.value)}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn bg-gray text-white" data-dismiss="modal" onClick={(e) => window.location.reload()} >Cancel</button>
                            <button type="submit" className="btn text-white" style={{ backgroundColor: color }} onClick={(event) => handleAdd(event)}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddForm;