import React from 'react';
import './signIn.css';
import {Navbar} from '../../components';

const SignIn = () => {
  return (
    <div className='signIn'>
        <div className='signIn-top'>
            <Navbar></Navbar>
        </div>
        <div className='signIn-bottom'>
          <div className='signIn-bottom-form'>
            <form>
              <div className='signIn-bottom-form-heading'><h1>User Login !</h1></div>
              <div className='signIn-bottom-form-label'>
                <label for="email">Email Id</label><br></br>
                <input type="email" id="email" name="email" placeholder="*Email" required /><br></br>
              </div>
              <div className='signIn-bottom-form-label'>
                <label for="password">Password</label><br></br>
                <input type="password" id="password" name="password" placeholder="*Password" required />
              </div>
              <div className='signIn-bottom-form-button'>
                <input className='signIn-bottom-form-button-submit' type="submit" value="Sign In"></input>
              </div>
              <div className='signIn-bottom-form-login'>
                <p>New User? <a href='/Register'>Register Here !</a></p>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default SignIn