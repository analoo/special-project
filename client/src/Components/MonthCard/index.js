import React, {useEffect, useState} from "react";
import EventCard from "../EventCard";
import API from "../../Utils/API"

function MonthCard(props) {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        API.activitiesByMonth({
            start: props.data.start,
            end: props.data.end
        }).then(res => {
            setActivities(res.data)
        }).catch(err => 
            console.log(err))
      }, []);

    return (
        <div className="card">
            <div className="card-header bg-gray" id="headingOne">
                <h2 className="mb-0">
                    <button className="btn btn-block text-left font-weight-bold collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        {props.data.month}
                    </button>
                </h2>
            </div>

            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                {activities.map( (activity,i) => (
                    <EventCard data={activity} key={`${i}-${activity.Event.name}`}/>
                ))}
            </div>

        </div>
    )
}

export default MonthCard;