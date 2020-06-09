import React, {useState} from "react";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


function CalendarForm() {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);


    return (
        <DateRange
            name="date"
            editableDateInputs={true}
            onChange={item => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            color={"#7e57c2"}
            rangeColors={["#7e57c2", "#7e57c2", "#7e57c2"]}
            id="date"
        />
    )
}

export default CalendarForm;