import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { loggedin } from './api/auth';
import Login from './components/Login';
import Signup from './components/Signup';
import PrivateRoute from './components/PrivateRoute';
//import games routes
import ListProjects from './components/Games/ListProjects';
import ProjectDetails from './components/Games/ProjectDetails';
import AddProject from './components/Games/AddProject';
import EditProject from './components/Games/EditProject';
//import anime routes
import AddAnime from './components/Animes/AddAnime';
import AnimeDetails from './components/Animes/AnimeDetails';
import EditAnime from './components/Animes/EditAnime';
import ListAnimes from './components/Animes/ListAnimes';


class App extends React.Component {
  state = {
    loggedInUser: null
  }

  setCurrentUser = (user) => { //when login pass result to user, same as logout
    this.setState({
      loggedInUser: user
    });
  }

  componentDidMount() {
    if (this.state.loggedInUser === null) {
      //check if the user session is still active on the server
      loggedin()
      .then((response) => {
        if (response.data._id) {
          //there's an active user session on the server
          this.setCurrentUser(response.data)
        }
      })
    }
  }

  render() { 
    const { loggedInUser } = this.state;
         return (
          <div className="App">
             <ToastContainer />
             <NavBar loggedInUser={loggedInUser} setCurrentUser={this.setCurrentUser} />
             <Switch>
             <Route exact path="/animes/add" component={AddAnime} />
             <Route exact path="/animes/:id" component={AnimeDetails} />
             <Route exact path="/animes/:id/edit" component={EditAnime} />
             <Route exact path="/animes" component={ListAnimes} />
 {/*} GAMES  <Route exact path="/" component={ListProjects} />
     ROUTES   <Route exact path="/games" component={ListProjects} />
               <Route exact path="/projects/add" component={AddProject} />   
               <PrivateRoute exact path="/games/add" component={AddProject} />
               <Route exact path="/games/:id" component={ProjectDetails} />
               <Route exact path="/games/:id/edit" component={EditProject} /> */}
               <Route exact path="/login" render={
                 (props) => {
                   return <Login {...props} setCurrentUser={this.setCurrentUser} />
                 }
               } />
               <Route exact path="/signup" component={Signup} /> 
               <Route exact path="/login-google" render={
                 () => {
                   window.location.href = `${process.env.REACT_APP_GEEK_CORNER_API}/api/auth/google` 
                 }
               } />  
    </Switch>
    </div>
  );
}
}
export default App;
