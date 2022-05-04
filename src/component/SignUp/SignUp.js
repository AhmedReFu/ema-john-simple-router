import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css'
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    if (user) {
        navigate('/login')
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if (password.length < 6) {
            setErrors('password must be 6 characters or longer');
            return;
        }
        else {
            if (password !== confirmPassword) {
                setErrors('Your two  password did not match')
                return;
            } else {
                createUserWithEmailAndPassword(email, password);
                if (error) {
                    return setErrors(error.message.slice(22, 42))
                }

            };


        }



    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>SignUp</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{errors}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="SignUp" />
                </form>
                <p style={{ textAlign: 'center' }}>
                    Already have an account? <Link className='signUp-btn' to='/login' >Login</Link>
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

export default SignUp;