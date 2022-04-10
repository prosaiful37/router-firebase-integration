import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='login'>
           <h2>Log In !!</h2>

            <div style={{margin: '20px'}}>
                <button>Sign In Google</button>
            </div>
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