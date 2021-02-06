import React from 'react';


const LeftColumn = () => {
    return (
        <>
            <select className="form-control">
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



