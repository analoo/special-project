import React from "react";
import EventCard from "../EventCard";

function MonthCard(card) {
    return (
        <div className="card">
            <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                    <button className="btn btn-block text-left font-weight-bold collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        {/* {card.month} */}
                        June 2020
                    </button>
                </h2>
            </div>

            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">

                {/* Get all Events for that month within current year */}
                <EventCard />
                <EventCard />
                <EventCard />
            </div>

        </div>
    )
}

export default MonthCard;