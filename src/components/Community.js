import React from 'react';
import { Link } from 'react-router-dom';

function Community() {

    return (
        <div>
    <div className="kawai">
       <img src="/kawaiicoming.jpg" alt="image" /> 
    </div>

    <div className="coming">
        <h2>
            We are deeply sorry, but this section is still under development
        </h2>
        <h3>
            We'll do our very best to be as fast as possible
        </h3>
        <h5>
            But while you wait, why don't not find some new <Link to={"/animes"}>quest</Link>?
           
        </h5>
    </div>
    
   
    </div>
 )   
}

export default Community;