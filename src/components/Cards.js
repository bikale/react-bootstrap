import React from 'react';
import NavBar from './NavBar';
import Card from './Card';
import img1 from '../assets/chess.jpeg';
import img2 from '../assets/alone-console.jpg';
import img3 from '../assets/game.jpg';
export default function Cards() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <Card imgsrc={img1} title="Chess" />
          </div>
          <div className="col-md-4 col-sm-4">
            <Card imgsrc={img2} title="Console" />
          </div>
          <div className="col-md-4 col-sm-4">
            <Card imgsrc={img3} title="Game center" />
          </div>
        </div>
      </div>
    </div>
  );
}
