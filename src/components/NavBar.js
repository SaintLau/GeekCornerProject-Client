import { render } from '@testing-library/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../api/auth';

function NavBar({ loggedInUser, setCurrentUser, history }) { 

    const logoutUser = () => {
        logout()
        .then(() => {
            setCurrentUser(null);
        })
    }


    return loggedInUser ? (
               <>
                <nav className='navbar navbar-dark bg-dark mb-3'>
                     <div className='container'>
                     <a className='navbar-link'>
                         <p>Welcome, <NavLink to="/profile">{loggedInUser.username}</NavLink></p>
                      </a>

                      <a className='navbar-link'>
                         <NavLink to="/feed">
                            <button class="btn btn-info">My Feed</button>   
                         </NavLink>  
                     </a>
                    
                      <a className='navbar-link'>
                         <NavLink to="/animes">
                            <button class="btn btn-info">Animes</button>   
                         </NavLink>  
                     </a>

                    <a className='navbar-link'>
                        <NavLink to="/community">
                         <button class="btn btn-info">Community</button>   
                        </NavLink>  
                    </a>
                    <a className='navbar-link'>
                            <NavLink to="/">
                                <button class="btn btn-info" onClick={logoutUser}>Logout</button>
                            </NavLink> 
                    </a>
                            
                    </div>
                 </nav>
                </>
        )
    : (
        <>
            <nav className='navbar navbar-dark bg-dark mb-3'>
                <div className='container'>
                    <a className='navbar-link' >
                     <NavLink activeStyle={{color: "light-blue"}} exact to={"/login-google"}>
                        Login With Google
                    </NavLink>
                     </a>
                     <a className='navbar-link'> 
                    <NavLink activeStyle={{color: "light-blue"}} exact to={"/login"}>
                        Login
                    </NavLink>
                    </a>
            
                    <a className='navbar-link'>
                    <NavLink activeStyle={{color: "light-blue"}} exact to={"/signup"}>
                        Signup
                    </NavLink>
                    </a>
                </div>
             </nav>
        </>
    )
}

export default NavBar;