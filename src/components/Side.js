import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from './Chart';
import Pie from './Pie';

const Side = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          
         <Chart/>
         
        </div>
        <div className="col-md-6">
          
        <Chart/>
         
        </div>
      </div>
    </div>
  );
};

export default Side;
