import React from 'react';
import './register.css';
import {Navbar} from '../../components';

const Register = () => {
  return (
    <div className='register'>
        <div className='register-top'>
            <Navbar></Navbar>
        </div>
        <div className='register-bottom'>
          <div className='register-bottom-form'>
            <form>
              <div className='register-bottom-form-heading'><h1>Register Yourself !</h1></div>
              <div className='register-bottom-form-label'>
                <label for="name">Name</label><br></br>
                <input type="text" id="name" name="name" placeholder="*Name" required />
              </div>
              <div className='register-bottom-form-label'>
                <label for="username">Userame</label><br></br>
                <input type="text" id="username" name="username" placeholder="*Userame" required />
              </div>
              <div className='register-bottom-form-label'>
                <label for="email">Email Id</label><br></br>
                <input type="email" id="email" name="email" placeholder="*Email" required /><br></br>
              </div>
              <div className='register-bottom-form-label'>
                <label for="password">Password</label><br></br>
                <input type="password" id="password" name="password" placeholder="*Password" required />
              </div>
              <div className='register-bottom-form-button'>
                <input className='register-bottom-form-button-submit' type="submit" value="Register Me"></input>
              </div>
              <div className='register-bottom-form-login'>
                <p>Existing User? <a href='/SignIn'>Sign In</a></p>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Register