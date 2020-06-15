import React, {useState, useEffect} from "react";
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

function eventJSON(color, activityName, location, notes, mask, sixFeet, outside, contact, startTime, endTime, startDate, endDate) {
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
            endDate: endDate
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

    useEffect(() => {
        // change color class to be color
        console.log(color)
    }, [color])

    const handleAdd = (event) => {
        event.preventDefault();

        let startDate = moment(state[0].startDate).format("YYYY-MM-DD");   
        let endDate = moment(state[0].endDate).format("YYYY-MM-DD");   

        console.log(startDate)
        console.log(endDate)

        const eventBody = eventJSON(color, activityName, location, notes, mask, sixFeet, outside, contact, startTime, endTime, startDate, endDate)
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
    }

    const onChangeTimeHandler = () => {
        setStartTime("None");
        setEndTime("None");
        setAllDay(1);
    };

    return (
        // <!-- Modal -->
        <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
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
                        {/* <div className="form-group ml-5">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="color" id="purple" value="purple" onChange={(event) => setColor(event.target.value)}/>
                                <label className="form-check-label purple-heart" htmlFor="purple"><span role="img" aria-label="purple heart">💜</span> Purple</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="color" id="orange" value="orange" onChange={(event) => setColor(event.target.value)}/>
                                <label className="form-check-label orange-heart" htmlFor="orange"><span role="img" aria-label="orange heart">🧡</span> Orange</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="color" id="green" value="green" onChange={(event) => setColor(event.target.value)}/>
                                <label className="form-check-label green-heart" htmlFor="green"><span role="img" aria-label="green heart">💚</span> Green</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="color" id="blue" value="blue" onChange={(event) => setColor(event.target.value)}/>
                                <label className="form-check-label blue-heart" htmlFor="blue"><span role="img" aria-label="blue heart">💙</span> Blue</label>
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
                                <h4 className="text-left" style={{ color: color }}>What?</h4>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="event" placeholder="Activity Name" value={activityName} onChange={(event) => setActivityName(event.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="location" placeholder="Location" value={location} onChange={(event) => setLocation(event.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" id="notes" rows="3" placeholder="Notes" value={notes} onChange={(event) => setNotes(event.target.value)}></textarea>
                                </div>
                                <div className="form-group">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="mask" value={mask} onChange={() => setMask(1)}/>
                                        <label className="form-check-label" htmlFor="mask">Wore Mask <span role="img" aria-label="face with medical mask">😷</span></label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="sixFeet" value={sixFeet} onChange={() => setSixFeet(1)}/>
                                        <label className="form-check-label" htmlFor="sixFeet">6ft Apart<span role="img" aria-label="footprints">👣</span></label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="outside" value={outside} onChange={() => setOutside(1)}/>
                                        <label className="form-check-label" htmlFor="outside">Outside <span role="img" aria-label="national-park">🏞</span></label>
                                    </div>
                                </div>
                            </div>
                            
                             {/* When Section */}
                             <div className="mb-4">
                                <h4 className="text-left" style={{ color: color }}>When?</h4>
                                <div className="row mb-4">
                                    <div className="col-4">
                                        <label className="float-left" htmlFor="startTime">Start Time</label>
                                        <input type="text" className="form-control" placeholder="08:00PM" value={startTime} onChange={(event) => setStartTime(event.target.value)}/>
                                    </div>
                                    <div className="col-4">
                                        <label className="float-left" htmlFor="endTime">End Time</label>
                                        <input type="text" className="form-control" placeholder="09:00PM" value={endTime} onChange={(event) => setEndTime(event.target.value)}/>
                                    </div>
                                    <div className="col-1 mt-4 font-weight-bold">
                                       <p>OR</p>
                                    </div>
                                    <div className="col-3 mt-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="allDay" value={allDay} onChange={(event) => onChangeTimeHandler(event.target.value)}/>
                                            <label className="form-check-label" htmlFor="allDay">
                                                All Day
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="row mb-4">
                                    <div className="col-4">
                                        <label className="float-left" htmlFor="startTime">Start Date</label>
                                        <input type="text" className="form-control" placeholder="2020-06-13" name="startTime" value={state.startDate}/>
                                    </div>
                                    <div className="col-4">
                                        <label className="float-left" htmlFor="endTime">End Date</label>
                                        <input type="text" className="form-control" placeholder="2020-06-13" name="endTime" value={state.endDate}/>
                                    </div>
                                    <div className="col-4 mt-4">
                                        <i className="far fa-calendar-alt bg-light-purple p-2"></i>
                                    </div>
                                </div> */}
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
                        <button type="button" className="btn bg-gray text-white" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn text-white" style={{ backgroundColor: color }} onClick={event => handleAdd(event)}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddForm;