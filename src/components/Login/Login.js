import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='login'>
           <h2>Log In !!</h2>
           <button>Sign In Google</button>
            <form action="">
                <input type="email" name="" placeholder='email' id="" />
                <br />
                <input type="password" name="" placeholder='password' id="" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;