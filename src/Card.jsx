import React from 'react'

import './App.css'
import bird1 from './image/hiring.png';
import bird2 from './image/innovation.png';
import bird3 from './image/business-idea.png';

function Card() {
    return (
        <>
        <div className="row py-5" >
            <div className="col-md-4 ">
                <p className="fw-bold">01Example</p>
                <div className="card" >
                <img src={bird1} className="card-img-top cardimg__1" alt="..." />
                
                </div>
            </div>
            <div className="col-md-4 ">
                <p className="fw-bold">02Example</p>
                <div className="card" >
                <img src={bird2}  className="card-img-top cardimg__1" alt="..." />
                
                </div>
            </div>
            <div className="col-md-4 ">
                <p className="fw-bold">03Example</p>
                <div className="card" >
                <img src={bird3} className="card-img-top cardimg__1" alt="..." />
                
                </div>
            </div>
        </div>
        </>
    )
}

export default Card;
