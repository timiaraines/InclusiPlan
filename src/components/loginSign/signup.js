import React, { useState } from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import firebase from '/Users/mia/Desktop/InclusiPlan/inclusi-plan/src/firebaseConfig.js'

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPassword] = useState('')
    const [school, setSchool] = useState('')
    const submit = async(e) =>
    {
        e.preventDefault()
        try {
            const user = await firebase.auth().createUserWithEmailAndPassword(email, pass)
            if(user)
            {
                alert("Account Successfully Created")
            }
        } catch (error) {
            alert(error)
        }
    }
    return (
        <>
        <div className='main_container_signup'>
            <div className='header'>
                <h2>signup</h2>
            </div>
            <div className='box'>
                <input type='text' value={name} placeholder='UserName'onChange={(e) => setName(e.target.value)} ></input>
            </div>
            <div className='box'>
                <input type='text' value={email} placeholder='School Email' onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className='box'>
                <input type='password' value={pass} placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div className='box'>
                <input type='text' value={school} placeholder='School Code' onChange={(e) => setSchool(e.target.value)}></input>
            </div>
            <p>Already have an account? <Link to='/login'>Login Now</Link> </p>
            <button onClick={submit}>Sign Up</button>
        </div>
        
        </>
        
    )
}

export default Signup