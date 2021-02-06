import './css/style.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LeftColumn from './layout/LeftColumn';
import RightColumn from './layout/RightColumn';


const App = () => {


  return (
    <>
      <Router>
        <div className="container-fluid">
          <div className="row justify-content-md-center vh-100">
            <div className="col col-md-2 left-column" >
              <LeftColumn />
            </div>
            <div className="col col-md-10 right-column" >
              <RightColumn />
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;



