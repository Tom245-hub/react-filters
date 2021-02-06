import React, { useState } from 'react';
import { Link, useLocation, useHistory } from "react-router-dom";


const LeftColumn = () => {
    let locationParams = useLocation().search;
    const [searchParams, setSearchParams] = useState(locationParams)


    let history = useHistory();
    console.log(`Console1: ${history}`)


    const handleCity = (e) => {

        console.log(searchParams)
    }

    return (
        <>
            <select className="form-control" onChange={handleCity}>
                <option value="">Wszystkie miasta</option>
                <option value="warszawa">Warszawa</option>
                <option value="krakow">Kraków</option>
                <option value="wroclaw">Wrocław</option>
                <option value="poznan">Poznań</option>
                <option value="gdansk">Gdańsk</option>
            </select>
        </>
    );
}

export default LeftColumn;



