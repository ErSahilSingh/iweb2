import React from 'react';
import './App.css'
import Form from './Form';

function Say() {
    return (
        <>
            <div className="container py-5">
               <div >
                   <h2 >Say Hello</h2>
                   <hr  className=" hr__1 "/>
                  
               </div>
               <div className="row ">
                    <div className="col-md-4 col-sm-12 py-5 ">
                    <p className=" bold__1">i'm sahil singh reactjs developer .Lorem Ipsum has been the industry's It was Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. galley of type and scrambled it to make a type  of type and scrambled</p>
                    <a href="#" className="text-dark">singhforever9917@gmail.com</a>
                    </div>
                    <div className="col-md-1"></div>
                <div className="col-md-6 col-sm-12 py-4 px-4">
                     
                        <Form/>
                   
                </div>
            </div>
            <h4 className="text-center py-5">Recent Blogs</h4>
            <div className="row">
                <div className="col-md-4 vl">
                    <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    <p><small>26.08.21</small></p>
                    <a href="#" className="text-dark"> See Now <i className="fas fa-external-link-alt"></i></a>
                    
                </div>
                <div className="col-md-4 vl">
                 <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                 <p><small>26.08.21</small></p>
                    <a href="#" className="text-dark">See Now <i className="fas fa-external-link-alt"></i></a>
                    
                </div>
                <div className="col-md-4 ">
                 <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                 <p><small>26.08.21</small></p>
                    <a href="#" className="text-dark">See Now <i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>

           </div> 
           
        </>
    )
}

export default Say;
