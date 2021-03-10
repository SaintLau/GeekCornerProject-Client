import React from 'react';
import { Link } from 'react-router-dom';


const divStyle = {
        position: 'fixed',
        left: 0,
        bottom: -20,
        width: '100%',
        backgroundColor: 'indigo',
        color: 'white',   
        display: 'inline-flex',
        paddingTop: 0,
        paddingBottom: 0,
        justifyContent: 'space-around',

}

function Footer() {
    return (
        <footer class="footer">
            <div class="container">
              <span class="text-muted">

                 <a>
                      <p>GeekyCorner</p>
                 </a> 
                 <a>
                      <p>GeekyCorner 2021 All rights reserved. </p>  
                 </a>
                 <a>
                   <p>Follow us: </p> 
                 </a>
                </span>
            </div>
        </footer>
    )
}


export default Footer;