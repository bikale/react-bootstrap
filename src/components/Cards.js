import React from 'react';
import Crad from './Card';
import Card from './Card';
export default function Cards() {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col-md-4 col-sm-4">
          <Card />
        </div>
        <div className="col-md-4 col-sm-4">
          <Card />
        </div>
        <div className="col-sm-4">
          <Card />
        </div>
      </div>
    </div>
  );
}
