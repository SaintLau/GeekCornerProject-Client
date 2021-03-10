import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.css';

const divStyle = {
    backgroundColor: 'black',
    height: '100',
}

function HomePage() {
    return (

     <div style={divStyle}>
        
        <div>
            <img src="/best-anime.jpg" alt="imageIntro" />
         </div>   

         <div className="who-div">
            <h2 className="who">Who are we?</h2>
                <p className="who-p">A community where you can find</p>
                <p className="who-pp">the geeky things you love</p>
                <img className="who-pic" src="/fairytail.jpeg" alt="imageIntro" />
        </div>

        <div className="our-div">
            <img className="our-pic" src="/sailormoon.jpeg" alt="imageIntro" />
                <h2 className="our">Our goal</h2>
                <p className="our-p">Be a safe space where you can be who you are, free of judgment</p>
        </div>

        <div className="why-div">
                <h2 className="why">Why join us?</h2>
                <p className="why-p">Why not? We are a growing community, </p>
                <p className="why-p"> always aiming to bring new topics</p>
                <p className="why-p"> and interests for you and</p>
                <p className="why-p">...we are awesome</p>
        </div>
     </div> 

    )
}
export default HomePage;