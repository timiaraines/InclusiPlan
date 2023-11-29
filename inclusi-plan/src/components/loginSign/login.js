import React, { useState } from 'react';
import './login.css';
import { Link, useHistory } from 'react-router-dom'; // Import useHistory
import firebase from '/Users/mia/Desktop/InclusiPlan/inclusi-plan/src/firebaseConfig.js';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    const history = useHistory(); // Create history instance

    const submit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await firebase.auth().signInWithEmailAndPassword(email, pass);
            if (userCredential.user) {
                alert("Login Successful");
                history.push('/'); // Redirect to home page
            }
        } catch (error) {
            alert(error.message); // Display a more user-friendly error message
        }
    };

    return (
        <div className='main_container_signup'>
            <div className='header'>
                <h2>Login</h2>
            </div>
            <div className='box'>
                <input type='text' value={email} placeholder='School Email' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='box'>
                <input type='password' value={pass} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <p>Don't have an account? <Link to='/signup'>Create Account</Link></p>
            <button onClick={submit}>Login</button>
        </div>
    );
};

export default Login;
