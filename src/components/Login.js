import React from 'react';
import { login } from '../api/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    //because of the form
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name] : value})
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        const { setCurrentUser, history } = this.props; //they come from props

        login(username, password)
        .then((response) => {
            //if we get response user is logged so:
            //lift up the state to app.js
            //setCurrentUser which is a prop

            setCurrentUser(response.data);
            history.push('/feed');
        }).catch(() => {
            toast.error('Invalid Login');
        })
    }

    render() {
        const { username, password } = this.state;
        return (
        <>
            <form onSubmit={this.handleFormSubmit}>
                <label>Username</label>
                <input type="text" name="username" onChange={this.handleChange} value={username} />
                
                <label>Password</label>
                <input type="password" name="password" onChange={this.handleChange} value={password} />

                <button type="submit" class="btn btn-info">Login</button>
                <img src="/pikachu.png" alt="imageIntro" />
            </form>
       
            <div className="log">
                 <div class="container"> 
            <p>Don't have an account?</p> 
            <p>Don't worry, join us <Link to="/signup">here</Link>...we have cookies ^^</p>
          </div>
        </div> 
        
    </>
        )
    }
}

export default Login;