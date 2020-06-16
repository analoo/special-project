import React, {useEffect, useState} from "react";
import MonthCard from "../MonthCard";
import API from "../../Utils/API"


function MonthContainer() {
    const [months, setMonths] = useState([])

    useEffect(() => {
        API.userMonths().then(res => {
            console.log(res.data)
            setMonths(res.data)
        }).catch(err => 
            console.log(err))
      }, []);

    return (
        <div className="accordion mx-auto my-5" id="accordionExample" style={{maxWidth: "70rem" , border: "none"}}>
            {months.map(month => (
                <MonthCard data={month} key={month}/>
            ))}
            
        </div>
    )
}

export default MonthContainer;