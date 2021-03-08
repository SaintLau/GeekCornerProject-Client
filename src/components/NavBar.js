import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../api/auth';

function NavBar({ loggedInUser, setCurrentUser, history }) { 
    
    const logoutUser = () => {
        logout()
        .then(() => {
            setCurrentUser(null);
           // history.push('/'); //when logout, goes to initial page, but we declare it below so we don't need this one here
        })
    }


    return loggedInUser ? (
               <>
                 <p>Welcome {loggedInUser.username}</p>
                      <ul>
                        <li>
                            <NavLink to="/">
                                <button onClick={logoutUser}>Logout</button>
                            </NavLink>
                        </li>
                            <li>
                                <NavLink activeStyle={{color: "red"}} exact to={"/projects"}>
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeStyle={{color: "red"}} exact to={"/projects/add"}>
                                    Add Projects
                                </NavLink>
                            </li>
                        </ul>

                </>
        )
    : (
        <>
            <ul>
            <li>
               <NavLink activeStyle={{color: "red"}} exact to={"/login-google"}>
                    Login With Google
               </NavLink>
            </li>
            <li>
               <NavLink activeStyle={{color: "red"}} exact to={"/login"}>
                    Login
               </NavLink>
            </li>
            <li>
               <NavLink activeStyle={{color: "red"}} exact to={"/signup"}>
                    Signup
               </NavLink>
            </li>
            <li>
               <NavLink activeStyle={{color: "red"}} exact to={"/projects"}>
                    Projects
               </NavLink>
            </li>
            </ul>
        </>
    )
}

export default NavBar;