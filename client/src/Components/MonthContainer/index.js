import React from "react";
import MonthCard from "../MonthCard";


function MonthContainer() {
    return (
        <div className="accordion mx-auto my-5" id="accordionExample" style={{maxWidth: "70rem"}}>
            {/* map through all months available or all months */}
            <MonthCard/>
        </div>
    )
}

export default MonthContainer;