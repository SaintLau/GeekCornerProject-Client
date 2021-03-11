import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.css';
import Carousel from 'react-bootstrap/Carousel'
import Badge from 'react-bootstrap/Badge'

function HomePage() {
    return (

    <div className="master"> 

            <Carousel>
                <Carousel.Item>
                     <img
                         className="d-block w-100"
                         width={900} height={700} alt="900x500"
                         src="/anime.jpeg"
                         alt="First slide"
                        />
                {/* <Carousel.Caption style={{color: 'black'}}>
                      <h3>Anime for all!</h3>
                     <p>You can find all the genres in one place</p>
                </Carousel.Caption>*/}
                </Carousel.Item>
                <Carousel.Item>
                     <img
                        className="d-block w-100"
                        width={900} height={700} alt="900x500"
                         src="/best-anime.jpg"
                        alt="Second slide"
                    />

                {/* <Carousel.Caption style={{color: 'red'}}>
                      <h3>All the characters you love</h3>
                     <p>All our beloved characters and more to find</p>
                </Carousel.Caption>*/}
                </Carousel.Item>
                <Carousel.Item>
                     <img
                        className="d-block w-100"
                        width={900} height={700} alt="900x500"
                        src="/anime2.jpg"
                        alt="Third slide"
                    />

                   {/*  <Carousel.Caption style={{color: 'white'}}>
                     <h3>Adventures!</h3>
                      <p>Hours and hours of adventures to start exploring</p>
                    </Carousel.Caption>*/}
                    </Carousel.Item>
                    </Carousel>
            
         <div className="who-div">
             <h2 className="who">Who are we?</h2>
             <p className="who-p">A community where you can find
                the geeky things you love</p>
             <img className="who-pic" src="/fairytail.jpeg" alt="imageIntro" />
        </div>

        <div className="our-div">
            <img className="our-pic" src="/sailormoon.jpeg" alt="imageIntro" />
                <h2 className="our">Our goal</h2>
                <p className="our-p">Be a safe space where you can be who you are, free of judgment</p>
        </div>

        <div className="why-div">
                <h2 className="why">Why join us?</h2>
                <img className="why-pic" src="/citrus.jpg" alt="imageIntro" />
                <p className="why-p">Why not? We are a growing community,
                 always aiming to bring the latest topics
                 and interests for you!</p>
        </div>

        <div className="pill">
            <Badge pill variant="primary">
                Click <Link to={"/signup"}>here</Link> to join!
            </Badge>{' '}
        </div>
     </div> 

    )
}
export default HomePage;