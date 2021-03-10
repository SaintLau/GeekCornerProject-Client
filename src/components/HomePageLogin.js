import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const divStyle =  {
    
}

function HomePageLogin() {
    return(

          <div>
              <p>Kon'nichiwa! Choose your next adventure <Link to={"/animes"}>here</Link>!</p>
          </div>  
       
    )
}

export default HomePageLogin;