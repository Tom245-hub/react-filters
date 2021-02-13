import React, { useState } from 'react';


const LeftColumn = () => {

    const stylistList = [
        {
            'name': 'Ania',
            'city': 'Warszawa',
            'wiek': 22,
            'uslugi': {
                'fryzurySlubne': true,
                'fryzuryWieczorowe': false,
                'makijazeSlubne': true,
                'makijazeWieczorowe': true,
            },
        },
        {
            'name': 'Ksia',
            'city': 'Poznań',
            'wiek': 23,
            'uslugi': {
                'fryzurySlubne': true,
                'fryzuryWieczorowe': false,
                'makijazeSlubne': true,
                'makijazeWieczorowe': false,
            },
        },
        {
            'name': 'Zosia',
            'city': 'Warszawa',
            'wiek': 35,
            'uslugi': {
                'fryzurySlubne': false,
                'fryzuryWieczorowe': false,
                'makijazeSlubne': false,
                'makijazeWieczorowe': true,
            },
        },
        {
            'name': 'Joanna',
            'city': 'Kraków',
            'wiek': 30,
            'uslugi': {
                'fryzurySlubne': true,
                'fryzuryWieczorowe': false,
                'makijazeSlubne': true,
                'makijazeWieczorowe': false,
            },
        },
        {
            'name': 'Hania',
            'city': 'Kraków',
            'wiek': 33,
            'uslugi': {
                'fryzurySlubne': false,
                'fryzuryWieczorowe': false,
                'makijazeSlubne': true,
                'makijazeWieczorowe': false,
            },
        },
        {
            'name': 'Basia',
            'city': 'Wrocław',
            'wiek': 33,
            'uslugi': {
                'fryzurySlubne': true,
                'fryzuryWieczorowe': true,
                'makijazeSlubne': true,
                'makijazeWieczorowe': false,
            },
        },
    ]

    const [stylistListCity, setStylistListCity] = useState([]);

    let cities = [];
    stylistList.map((item, index) => { if (!cities.includes(item.city)) { cities.push(item.city) } })

    const filteringCity = (e) => {
        let value = e.target.value
        setStylistListCity(stylistList.filter(item => item.city === value))
    }

    let services = [];
    stylistList.map((stylist, index) => {
        Object.keys(stylist.uslugi).map((service, key) => { if (service && !services.includes(service)) { services.push(service) } })
    })

    const result = () => {
        return stylistListCity.map((item, index) => <li key={index}>{item.name}</li>)
    }

    return (
        <>
            <form >

                <div className="row">
                    <select className="form-control" onChange={filteringCity}>
                        <option value="">Wszystkie miasta</option>
                        {cities.map((item, index) => <option key={index} value={item}>{item}</option>)}
                    </select>
                </div>

                {services.map((service, index) => <div className="row align-items-center"><input type="checkbox" />{service}</div>)}

                <div className="row">
                    <input placeholder="Wyszukaj..." className="form-control" type="text" />
                    <button className="btn btn-secondary" type="submit">Wyszukaj</button>
                </div>

            </form>

            <div className="row">
                {result()}
            </div>


        </>
    );
}

export default LeftColumn;



