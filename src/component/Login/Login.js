import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }


    if (user) {
        navigate('/home');
    }
    const handleSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
        if (error) {
            return setErrors(error);
        }
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{errors.message}</p>
                    {loading && <p>Loading...</p>}
                    <input onClick={() => { }} className='form-submit' type="submit" value="Login" required />
                </form>
                <p style={{ textAlign: 'center' }}>
                    New to Ema-john? <Link className='signUp-btn' to='/signup' >Create an account</Link>

                </p>
                <div style={{ display: 'flex' }}>
                    <div className='hr-line'>
                        <hr />
                    </div>
                    <div>
                        <p>or</p>
                    </div>
                    <div className='hr-line'>
                        <hr />
                    </div>
                </div>
                <div className="form-div">
                    <input className='google-sign' type="button" value="Continue with Google" />
                </div>
            </div>
        </div>
    );
};

export default Login;