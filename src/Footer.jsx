import React from 'react';
import logoiamge from './image/ar-glasses.png'
import './App.css';

function Footer() {
    return (
        <>
                <footer className="page-footer font-small mdb-color pt-4">


                <div className="container-fluid text-center text-md-left">


                <div className="row text-center text-md-left mt-3 pb-3">
                 <hr className="hr__2" />
                 <div className="row d-flex align-items-center">


                <div className="col-md-7 col-lg-6">

               
            <p className=" text-md-left img__4 fw-light"><img className="mx-3"  src={logoiamge} width="30px" height="30px"/> <i class="far fa-copyright"></i> 2021Arnau Ros.LLC All Rights Reserved 
            </p>

            </div>

                <div className="col-md-5 col-lg-6  ml-lg-0 text-white">


            <div className="text-center text-md-right ">
            <ul className="list-unstyled list-inline foot__1">
                <li className="list-inline-item">
              <a className="btn-floating btn-sm rgba-white-slight mx-2">
                  <p><i class="fab fa-facebook-f"></i></p>
                     </a>
                </li>
                 <li className="list-inline-item">
                     <a className="btn-floating btn-sm rgba-white-slight mx-2">
                     <p>    <i class="fab fa-twitter"></i></p>
                 </a>
            </li>
            <li className="list-inline-item">
                     <a className="btn-floating btn-sm rgba-white-slight mx-2">
                     <p>   <i class="fab fa-linkedin-in"></i></p>
                 </a>
            </li>
 
                </ul>
        </div>

        </div>


        </div>


</div>


</div>
        
    </footer>
        </>
        
    )
}

export default Footer;
