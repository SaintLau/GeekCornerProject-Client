import React from 'react';
import { signup } from '../api/auth';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    state = {
        username: '',
        password: '',
        email: ''
    }
    handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
    
    handleFormSubmit = (event) => {
        event.preventDefault();
        const { username, email, password } = this.state;
        signup(username, email, password)
            .then(() => {
                this.props.history.push('/');
            })
            .catch((error) => {
                console.log(error)
            })
    }
    render(){
        const { username, password, email } = this.state;
        return(
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Username:</label>
                    <input type="text" name="username" value={username} onChange={this.handleChange}/>
                    <label>Email:</label>
                    <input type="email" name="email" value={email} onChange={this.handleChange} />
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={this.handleChange} />
                    <button>Signup</button>
                </form>
                <p>So, you already have an account</p>
                <p> but stepped on the dark side? Click <Link to={"/login"}>here</Link>
                </p>
          </div>
        )
      }
}
export default Signup;