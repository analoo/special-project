import React, {useEffect, useState} from "react";
import EventCard from "../EventCard";
import API from "../../Utils/API"

function MonthCard(props) {
    let monthArray = ["0", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"]
    const [activities, setActivities] = useState([]);
    let month = parseInt(props.data.split("-")[0])
    let year = parseInt(props.data.split("-")[1])
    let monthYear = monthArray[month]+year.toString()
    let displayMonthYear = monthArray[month]+" "+year.toString()
    
    useEffect(() => {
        API.activitiesByMonth({
            month: month,
            year: year
        }).then(res => {
            setActivities(res.data)
        }).catch(err => 
            console.log(err))
      }, []);

    return (
        <div className="card">
            <div className="card-header bg-muted" id={"heading" + monthYear} style={{border:"none"}}>
                <h2 className="mb-0">
                    <button className="btn btn-block text-left font-weight-bold collapsed dark-purple" type="button" data-toggle="collapse" data-target={"#collapse" + monthYear} aria-expanded="false" aria-controls={"collapse" + monthYear}>
                     <h4><i className="fas fa-caret-down dark-purple px-2"></i>{displayMonthYear}</h4>
                    </button>
                </h2>
            </div>

            {activities.map(activity => (               
                <EventCard data={activity} key={activity.id} id={"collapse" + monthYear} labelledby={"heading" + monthYear} month={monthYear}/>
            ))}

        </div>
    )
}

export default MonthCard;