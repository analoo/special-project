import React, { useState, useEffect } from "react";
import API from "../../Utils/API"

function SearchBar() {
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");
    const [results, setResults] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        API.findLocation()
            .then(result => {
                setResults(result.data.groups[0].items)
                console.log(result)
            })
            .catch(err => console.log(err))
    }

    // need to still figure out how to parse out the value of the card selected
    const handleSelect = (event) => {
        event.preventDefault()
        console.log(event.target)
        // we would use set location to set the location selected to be used in the output

    }

    return (
        <div>
            <p>The location selected is: {location}</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group" >
                    <input className="form-control form-control-lg"
                        type="text"
                        placeholder="search for places"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

            <div>
                {results ?
                    <div>
                        <ul className="list-group">
                            {results.map( (element,i) => (
                                <li className="list-group-item">
                                    <div type="button" onClick={e => handleSelect(e)} data-id={element.venue} key={`result-${i}`}>
                                    <p>{element.venue.name}</p>
                                 {element.venue.location.formattedAddress.map(add => (
                                     <p>{add}</p>
                                 )

                                 )}
                                 </div> 
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                    : null}
            </div>
        </div>
    )
}

export default SearchBar;