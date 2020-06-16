import React, { useState, useEffect } from "react";
// import CalendarForm from "../CalendarForm";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import API from "../Utils/API";
import MainDiv from "../Components/Container/main-Div"

var moment = require("moment");

let colors = {
    purple: "#c31bfe",
    orange: "#ff8400",
    green: "#00ce00",
    blue: "#006dff"
}

function eventJSON(color, activityName, location, notes, mask, sixFeet, outside, contact, startTime, endTime, startDate, endDate, startDay, startMonth, startYear, eventId) {
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
            startYear: startYear,
            eventId: eventId
        }
    )
}


function Edit(props) {
    const [id, setId] = useState("")
    const [eventId, setEventID] = useState("")
    const [color, setColor] = useState("#928AFF");
    const [activityName, setActivityName] = useState("");
    const [location, setLocation] = useState("");
    const [notes, setNotes] = useState("");
    const [mask, setMask] = useState(0);
    const [sixFeet, setSixFeet] = useState(0);
    const [outside, setOutside] = useState(0);
    const [contact, setContact] = useState("");
    const [startOS, setStartOS] = useState(0)
    const [endOS, setEndOS] = useState(0)
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
        setId(props.match.params.id)
        API.getSingleEvent(props.match.params.id)
            .then(res => {
                setColor(res.data.color)
                setActivityName(res.data.Event.name);
                setLocation(res.data.Event.location);
                setNotes(res.data.notes);
                setMask(res.data.mask);
                setSixFeet(res.data.sixFeet);
                setOutside(res.data.outside)
                setContact(res.data.contacts);
                setEventID(res.data.Event.id)
                if(res.data.startTime.split(":")[0] >= 13){
                    let time = `${res.data.startTime.split(":")[0]-12}:${res.data.startTime.split(":")[1]}`
                    setStartTime(time)
                    setStartOS("12")
                }
                else{
                    setStartTime(`${res.data.startTime.split(":")[0]}:${res.data.startTime.split(":")[1]}`)
                    setStartOS("0")
                }
                if(res.data.endTime.split(":")[0] >= 13){
                    let time = `${res.data.endTime.split(":")[0]-12}:${res.data.endTime.split(":")[1]}`
                    setEndTime(time)
                    setEndOS("12")
                }
                else{
                    setEndTime(`${res.data.endTime.split(":")[0]}:${res.data.endTime.split(":")[1]}`)
                    setEndOS("0")
                }
                // setState({startDate: res.data.startDate, endDate: res.data.endDate, key:"selection"})
                // // endDate: endDate,

            })
    }, [color])

    const handleAdd = (event) => {
        event.preventDefault();

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



        const eventBody = eventJSON(color, activityName, location, notes, mask, sixFeet, outside, contact, refStart, refEnd, startDate, endDate, startDay, startMonth, startYear,eventId)
        console.log(eventBody)

        API.updateEvent(id,eventBody)
            .then((res) => {
                window.location.replace("/activities")
            })
            .catch(error => {
                console.log(error)
            })

        // Close modal
        // data-dismiss="modal"
    }

    const onChangeTimeHandler = () => {
        setStartOS("0")
        setStartTime("12:01");
        setEndOS("12")
        setEndTime("11:59");
        setAllDay(1);
    };

    return (
        <MainDiv>

            <div className="card">
                <div className="card-header">
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
                </div>
                <div className="card-body">
                    <form>
                        {/* What Section */}
                        <div className="mb-4">
                            <h4 className="text-left" style={{ color: color }}>What?</h4>
                            <div className="form-group">
                                <input type="text" className="form-control" id="event" placeholder="Activity Name" value={activityName} onChange={(event) => setActivityName(event.target.value)} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="location" placeholder="Location" value={location} onChange={(event) => setLocation(event.target.value)} />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="notes" rows="3" placeholder="Notes" value={notes} onChange={(event) => setNotes(event.target.value)}></textarea>
                            </div>
                            <div className="form-group">
                                <div className="form-check form-check-inline">
                                    {mask ? <input className="form-check-input" type="checkbox" id="mask" value={mask} checked onChange={() => setMask(0)} /> : <input className="form-check-input" type="checkbox" id="mask" value={mask} onChange={() => setMask(1)} />}
                                    <label className="form-check-label" htmlFor="mask">Wore Mask <span role="img" aria-label="face with medical mask">😷</span></label>
                                </div>
                                <div className="form-check form-check-inline">
                                    {sixFeet ? <input className="form-check-input" type="checkbox" id="sixFeet" value={sixFeet} checked onChange={() => setSixFeet(0)} /> : <input className="form-check-input" type="checkbox" id="sixFeet" value={sixFeet} onChange={() => setSixFeet(1)} />}
                                    <label className="form-check-label" htmlFor="sixFeet">6ft Apart<span role="img" aria-label="footprints">👣</span></label>
                                </div>
                                <div className="form-check form-check-inline">
                                    {outside ? <input className="form-check-input" type="checkbox" id="outside" value={outside} checked onChange={() => setOutside(0)} /> : <input className="form-check-input" type="checkbox" id="outside" value={outside} onChange={() => setOutside(1)} />}
                                    <label className="form-check-label" htmlFor="outside">Outside <span role="img" aria-label="national-park">🏞</span></label>
                                </div>
                            </div>
                        </div>

                        {/* When Section */}
                        <div className="mb-4">
                            <h4 className="text-left" style={{ color: color }}>When?</h4>
                            <div className="row mb-4 px-4">
                                <div class="form-row">
                                    <div className="col-md-4">
                                        <label className="float-left" htmlFor="startTime">Start Time</label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" placeholder="08:00" value={startTime} onChange={(event) => setStartTime(event.target.value)} />
                                    </div>
                                    <div className="col-md-3">
                                        {startOS == "0" ?
                                            <select className="form-control" id="exampleFormControlSelect1" onChange={e => setStartOS(e.target.value)}>
                                                <option value="0">AM</option>
                                                <option value="12" >PM</option>
                                            </select> :
                                            <select className="form-control" id="exampleFormControlSelect1" onChange={e => setStartOS(e.target.value)}>
                                                <option value="12">PM</option>
                                                <option value="0" >AM</option>
                                            </select>}

                                    </div>
                                </div>

                                <div class="form-row">
                                    <div className="col-md-4">
                                        <label className="float-left" htmlFor="endTime">End Time</label>
                                    </div>

                                    <div className="col-md-3">
                                        <input type="text" className="form-control" placeholder="09:00" value={endTime} onChange={(event) => setEndTime(event.target.value)} />
                                    </div>
                                    <div className="col-md-3">
                                        {endOS == "0" ?
                                            <select className="form-control" id="exampleFormControlSelect1" onChange={e => setEndOS(e.target.value)}>
                                                <option value="0">AM</option>
                                                <option value="12" >PM</option>
                                            </select> :
                                            <select className="form-control" id="exampleFormControlSelect1" onChange={e => setEndOS(e.target.value)}>
                                                <option value="12">PM</option>
                                                <option value="0" >AM</option>
                                            </select>}

                                    </div>
                                </div>
                                <div className="col-1 mt-4 font-weight-bold">
                                    <p>OR</p>
                                </div>
                                <div className="col-3 mt-4">
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
                                <div className="col-8">
                                    <label className="float-left" htmlFor="contact">Contacts</label>
                                    <textarea className="form-control" id="contact" name="contact" rows="2" placeholder="Ana, Leila, Nadine" value={contact} onChange={(event) => setContact(event.target.value)}></textarea>
                                </div>
                                <div className="col-1 mt-5 font-weight-bold">
                                    <p>OR</p>
                                </div>
                                <div className="col-3 mt-5">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="solo" name="solo" onChange={(event) => setContact("None")} />
                                        <label className="form-check-label" htmlFor="solo">
                                            None
                                            </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="card-body">
                            <button type="button" className="btn bg-gray text-white float-right" onClick={e => window.location.replace("/activities")}>Cancel</button>
                            <button type="button" className="btn text-white float-right" style={{ backgroundColor: color }} onClick={event => handleAdd(event)}>Save</button>
                        </div>
                    </form>
                </div>
                <div className="foot-base" style={{ height: "30vh" }}>

                </div>
            </div>

        </MainDiv>


    )
}

export default Edit;