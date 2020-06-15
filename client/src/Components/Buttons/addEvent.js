import React from "react";
import API from "../../Utils/API"
import { useHistory } from "react-router-dom";


function AddEvent() {

    const AddEvent = () => {
        API.createEvent({
            name: "Pre Hackathon Celebration Party",
            location: "Conversatory of Flowers",
            color: "orange",
            startDate: "2020-04-13",
            endDate: "2020-04-13",
            startTime: "08:00:16",
            endTime: "09:00:22",
            contacts: "Ana, Leila",
            mask: 1,
            sixFeet: 0,
            outside: 0,
            notes: "Hope this works",
            startMonth: 4,
            startDay: 13,
            startYear: 2020,
        }).then(res =>
            console.log(res))
        // history.push("/");
    }

    return (
        <button className="btn" onClick={AddEvent}>
            Add Event
        </button>
    )

}

export default AddEvent;