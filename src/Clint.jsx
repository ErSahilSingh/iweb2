import React from 'react'
import './App.css'

function Clint() {
    return (
        <>
        
        <div className="container ">
                <div >
                   <h2 >What Clints Say</h2>
                   <hr  className=" hr__1 "/>
                  
                 </div>
            
                <div id="carouselExampleCaptions" className="carousel slide py-5" data-bs-ride="carousel">
  
                    <div className="carousel-inner">
                    <div className="carousel-item active">
      
                    <div className="text-center text__2">
        
                        <p >"IGN gives EVO15-S laptop a 9 out of 10.IGN<br/> gives EVO15-S laptop a 9 out of 10.IGN gives EVO15-S laptop a 9 out of 10."</p>
                        <p>- Ronald weasly</p>
                        <p>CEO</p>
                    </div>
                    </div>
            <div className="carousel-item">
      
                    <div className="text-center text__2">
        
                         <p >"NEURON Receives an Editors'IGN gives EVO15-S laptop a 9 out of 10.IGN<br/> Choice Award from PCMag.com."</p>
                         <p>- Ronald weasly</p>
                        <p>CEO</p>
                     </div>
                     </div>
                 <div className="carousel-item">
      
                    <div className="text-center text__2">
        
                        <p >"PC World Gave our EON17-XIGN gives EVO15-S laptop a 9 out of 10.IGN<br/> an Editors' Choice Award."</p>
                        <p>- Ronald weasly</p>
                        <p>CTO</p>
                        </div>
                        </div>
    
                    </div>
                <button className="carousel-control-prev btn btn-secondary btn-sm" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"> </span>
                    <span className="visually-hidden">Previous</span>
                    
            </button>
                <button className="carousel-control-next text-dark btn btn-secondary btn-sm" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
                </div>

        </div>
        
        </>
    )
}

export default Clint;
