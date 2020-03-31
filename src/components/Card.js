import React from 'react';
import img1 from '../assets/game.jpg';
export default function Card(props) {
  return (
    <div>
      <div className="card text-center">
        <div className="overflow">
          <img src={img1} alt="" srcset="" className='card-img-top'/>
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">Game Player</h4>
          <p className="card-text text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            deserunt quidem impedit ut cumque eveniet ad praesentium maxime illo
            temporibus.
          </p>
          <a href="#" className="btn btn-outline-success">
            read more ...
          </a>
        </div>
      </div>
    </div>
  );
}
