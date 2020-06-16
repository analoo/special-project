import React, { useState, useEffect } from "react";
import API from "../../Utils/API"

function SearchBar() {
    const [search, setSearch] = useState("");
    const [ll, setll] = useState("")
    const [location, setLocation] = useState("");
    const [results, setResults] = useState([])

    console.log(location)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (ll === "") {
            setResults("You need to set your city in the profile section")
        }
        else {
            API.findLocation({
                query: search,
                ll: "43.0633, -87.9667",
            })
                .then(result => {
                    setResults(result.data.groups[0].items)
                    console.log(result)
                })
                .catch(err => console.log(err))
        }

    }

    useEffect(() => {
        API.getUser().then(
            res => {
                console.log(res.data)
                setll(res.data.ll)
            }
        )
    }, [])

    // need to still figure out how to parse out the value of the card selected
    const handleSelect = (event) => {
        event.preventDefault()
        console.log(event)
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
                <button type="submit" className="btn bg-yellow">Submit</button>
            </form>

            <div>
                {results ?
                    <div>
                        <ul className="list-group">
                            {results.map((element, i) => (
                                <li className="list-group-item">
                                    <button type="button" onClick={e => setLocation(e.target)} data-id={element.venue} key={`result-${i}`}>
                                        {`${element.venue.name} - ${element.venue.location.formattedAddress[0]}, ${element.venue.location.formattedAddress[1]}`}
                                    </button>
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