import { getAuth } from 'firebase/auth';
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import './Login.css';

const auth = getAuth(app);

const Login = () => {
    const [signInwithGoogle, user] = useSignInWithGoogle(auth);
    return (
        <div className='login'>
           <h2>Log In !!</h2>

            <div style={{margin: '20px'}}>
                <button onClick={() => signInwithGoogle()}>Sign In Google</button>
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