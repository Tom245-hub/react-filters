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
                setStylistList(result(response))
            });
    }

    useEffect(() => {
        getFetch();
    }, []);

    // Sortuje po mieście
    let cities = [];
    let sortedResult = [];
    const result = (list) => {
        // zliczanie ilości miast
        list.map(item =>
            !cities.includes(item.city) && cities.push(item.city)
        )

        // sortowanie według miasta
        cities.map(itemCities =>
            list.map(itemList => itemList.city === itemCities && sortedResult.push(itemList))
        )
        return sortedResult;
    }

    // Sortuje po wykonywanej usłudze
    // let hairWedding = [];
    // const servicefilter = (list) => {
    //     list.map(item =>
    //         item.services.wedding_hair && hairWedding.push(item)
    //     )
    //     return hairWedding;
    // }

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



