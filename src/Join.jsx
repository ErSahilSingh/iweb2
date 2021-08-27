import React from 'react';
import './App.css'

function Join() {
    return (
        <>
        <div className="container-fluid py-5">
        <hr className=" hr__2"/>
        <h2 className="display-6 text-center py-3">Join the Newsletter!</h2>
        <p className="text-center">You'll receiver an email every once in awhile about new <br/>product , courses and video</p>
    <div className="SearchBar  ">
        <form className="d-flex justify-content-center">
        <input className="form-control me-2 " type="search" placeholder="singh@gmail.com" aria-label="Search" />
        <button className="btn btn-secondary" type="submit"><i class="fas fa-arrow-right text-white"></i></button>
        </form>
      
    </div>
        <p className="text-center fw-light "><small>We'll never share your details . See our privacy Policy</small></p>
        </div>
            
        </>
    )
}

export default Join;
