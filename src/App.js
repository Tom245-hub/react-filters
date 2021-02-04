import './css/style.css';
import React, { useState, useEffect } from 'react';
import Card from './components/Card';


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

  const handleCity = (e) => {
    console.log(e.target.value)
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-md-center vh-100">
          <div className="col col-md-3 left-column" >
            <select className="form-control" onChange={handleCity}>
              <option value="">Wszystkie miasta</option>
              <option value="warszawa">Warszawa</option>
              <option value="krakow">Kraków</option>
              <option value="wroclaw">Wrocław</option>
              <option value="poznan">Poznań</option>
              <option value="gdansk">Gdańsk</option>
            </select>
          </div>
          <div className="col col-md-9 right-column" >
            {stylistList.map((stylist, index) =>
              // console.log(stylist)
              <React.Fragment key={index}>
                {stylistList &&
                  <Card details={stylist} />
                }
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;



