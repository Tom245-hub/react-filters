import React from 'react';


const LeftColumn = () => {
    return (
        <>
            <div className="row">
                <select className="form-control">
                    <option value="">Wszystkie miasta</option>
                    <option value="warszawa">Warszawa</option>
                    <option value="krakow">Kraków</option>
                    <option value="wroclaw">Wrocław</option>
                    <option value="poznan">Poznań</option>
                    <option value="gdansk">Gdańsk</option>
                </select>
            </div>

            <div className="row align-items-center"><input type="checkbox" />Fryzury ślubne</div>
            <div className="row align-items-center"><input type="checkbox" />Makijaże ślubne</div>
            <div className="row align-items-center"><input type="checkbox" />Fryzury wieczorowe</div>
            <div className="row align-items-center"><input type="checkbox" />Makijaże wieczorowe</div>

        </>
    );
}

export default LeftColumn;



