import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
// import { Link } from "react-router-dom";

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
            .then(response =>
                setStylistList(response)
            );
    }

    useEffect(() => {
        getFetch();
    }, []);

    return (
        <>
            {stylistList.map((stylist, index) =>
                // console.log(stylist)
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



