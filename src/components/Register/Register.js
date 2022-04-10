import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div className='register'>
            <h2>Please Register !!</h2>
            <form action="">
                <input type="text" name="" placeholder='name' id="" />
                <br />
                <input type="email" name="" placeholder='email' id="" />
                <br />
                <input type="password" name="" placeholder='password' id="" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;