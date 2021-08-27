import React from 'react'
import Accordion from './Accordion'

function About() {
    return (
        <>
         <div className="container py-5">
                 <div >
                   <h2 >About Me</h2>
                   <hr  className=" hr__1 "/>
                  
                 </div>
                <div className="row ">
                    <div className="col-md-5 col-sm-12 py-5">
                    <p className=" bold__1">i'm sahil singh reactjs developer Contrary Contrary to popular belief, Lorem Ipsum is not  simply random text. It has roots in a piece of classical Latin literaturContrary Contrary to popular belief, Lorem Ipsum is not  simply random text. It has roots in a piece of classical Latin literature from 45  to popular belief, Lorem Ipsu"de Finibus Bonorum .Lorem Ipsum has been the industry's  galley of type and scrambled it to make a type  of type and scrambled</p>
                    </div>
                    <div className="col-md-7 col-sm-12 py-5">
                        <p>Your one stop shop for:</p>
                        <Accordion/>

                   
                </div>
            </div>
        </div>
            
        </>
    )
}

export default About;
