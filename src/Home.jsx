import React from 'react';
import './App.css'
import bird from './image/bird.jpeg'

function Home() {
    return (
        <>
        <div className="container py-5">
                <div className="row ">
                    <div className="col-md-7 col-sm-12 para__1 ">
                    <h3 className="display-6 bold__1">i'm sahil singh reactjs developer .Lorem Ipsum has been the industry's  galley of type and scrambled it to make a type  of type and scrambled</h3>
                    </div>
                    <div className="col-md-5 col-sm-12 py-5">
                    <img classname="bird__1 " src={bird} width="100%" hight="100%"/>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Home;
