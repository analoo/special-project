import React, {useEffect, useState} from "react";
import MonthCard from "../MonthCard";
import API from "../../Utils/API"


function MonthContainer() {
    const [months, setMonths] = useState([])

    useEffect(() => {
        API.userMonths().then(res => {
            setMonths(res.data)
        }).catch(err => 
            console.log(err))
      }, []);



    return (
        <div className="accordion mx-auto my-5" id="accordionExample" style={{maxWidth: "70rem"}}>
            {/* map through all months available or all months */}
            {months.map(month => (
                 <MonthCard data={month} key={month}/>
            ))}
            
        </div>
    )
}

export default MonthContainer;