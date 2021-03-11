import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';



function HomePageLogin() {
    return(
        <div>
          <div>
              <h2>Kon'nichiwa! Choose your next adventure <Link to={"/animes"}>here</Link>!</h2>
          </div>  
       
         <div>
         <img src="/profileimg.jpg" alt="imageIntro" />
         </div>

     </div>
    )
}

export default HomePageLogin;