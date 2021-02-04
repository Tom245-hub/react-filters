import '../css/style.css';
import React from 'react';

const Card = ({ details }) => {


    return (
        <React.Fragment>
            <div className="card">
                <img className="card-img-top" src={details.image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{details.name}</h5>
                    <p className="card-text">{details.city}</p>
                    <a href="#" className="btn btn-primary">Zobacz profil</a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Card;