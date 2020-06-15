import React, {useEffect, useState} from "react";
import EventCard from "../EventCard";
import API from "../../Utils/API"

function MonthCard(props) {
    const [activities, setActivities] = useState([]);
    console.log(activities)

    useEffect(() => {
        API.activitiesByMonth({
            UserId: 1,
            start: props.data.start,
            end: props.data.end
        }).then(res => {
            setActivities(res.data)
        }).catch(err => 
            console.log(err))
      }, []);

    return (
        <div className="card">
            <div className="card-header bg-gray" id={"heading" + props.data.month.split(" ").join("")}>
                <h2 className="mb-0">
                    <button className="btn btn-block text-left font-weight-bold collapsed" type="button" data-toggle="collapse" data-target={"#collapse" + props.data.month.split(" ").join("")} aria-expanded="false" aria-controls={"collapse" + props.data.month.split(" ").join("")}>
                        {props.data.month}
                    </button>
                </h2>
            </div>

            {activities.map(activity => (
               
                <EventCard data={activity} key={activity.id} id={"collapse" + props.data.month.split(" ").join("")} labelledby={"heading" + props.data.month.split(" ").join("")} month={props.data.month.split(" ").join("")}/>
                
            ))}

        </div>
    )
}

export default MonthCard;