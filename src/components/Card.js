import '../css/style.css';
import React from 'react';
import { Link } from "react-router-dom";

const Card = ({ details }) => {


    return (
        <Link to="#">
            <div className="card">
                <div className="image-box">
                    <img className="card-img-top" src={details.image} alt="Card image cap" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{details.name}</h5>
                    <p className="card-text">{details.city}</p>
                    <a href="#" className="btn btn-primary">Zobacz profil</a>
                </div>
            </div>
        </Link>
    );
}

export default Card;