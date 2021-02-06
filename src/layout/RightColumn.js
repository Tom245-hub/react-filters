import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const App = () => {
    const [stylistList, setStylistList] = useState([]);

    const getFetch = () => {
        fetch('http://react-filters/admin/api.php', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(response => {

                let cities = ['Warszawa', 'Kraków', 'Wrocław'];
                let tab = [];

                for (let i = 0; i <= cities.length; i++) {
                    response.forEach(item => (item.city == cities[i] && tab.push(item)))
                }

                setStylistList(tab)

            });


    }

    useEffect(() => {
        getFetch();
    }, []);

    return (
        <>
            {stylistList.map((stylist, index) =>
                <React.Fragment key={index}>
                    {stylistList &&
                        <Card details={stylist} />
                    }
                </React.Fragment>
            )}
        </>
    );
}

export default App;



