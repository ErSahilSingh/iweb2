import React from 'react';
import './App.css'


function Contact() {
    return (
        <>
            <div className="container py-5">
               <div >
                   <h2 >Content Creation</h2>
                   <hr  className=" hr__1 "/>
                  
               </div>
               <div className="row ">
                    <div className="col-md-4 col-sm-12 py-5 ">
                    <p className=" bold__1">i'm sahil singh reactjs developer .Lorem Ipsum has been the industry's It was Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. galley of type and scrambled it to make a type  of type and scrambled</p>
                    <a href="#" className="text-dark">Get in contact about a sponsorship <i class="fas fa-level-down-alt"></i></a>
                    </div>
                    <div className="col-md-1"></div>
                <div className="col-md-7 col-sm-12 py-4 px-4">
                     <div className="embed-responsive embed-responsive-16by9 youtub__1">
                        <iframe  width="95%" height="250px" className="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg " allowfullscreen ></iframe>
                    </div>
                </div>
            </div>

           </div>
        </>
    )
}

export default Contact;
