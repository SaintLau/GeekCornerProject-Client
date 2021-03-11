import React from 'react';
import { signup } from '../api/auth';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


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
            <div class="container">
                <form onSubmit={this.handleFormSubmit}>
                    <div class="form-group mb-2">
                    <label>Username:</label>
                    <input type="text" class="form-control" name="username" value={username} onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                    <label>Email:</label>
                    <input type="email" class="form-control" name="email" value={email} onChange={this.handleChange} />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with other otakus</small>
                    </div>
                   <div class="form-group">
                    <label>Password:</label>
                    <input type="password" class="form-control" name="password" value={password} onChange={this.handleChange} />
                    <button class="btn btn-info">Signup</button>
                    </div>
                </form>
            </div>
                <img className="" src="/lucy.jpg" alt="imageIntro" />

            <div className="sign">
                 <div class="container-sign"> 
                     <p>So, you already have an account</p>
                     <p>
                     but stepped on the dark side? Click <Link to={"/login"}>here</Link>
                    </p>
                </div>
            </div>
                
        </div>

 
        )
      }
}
export default Signup;