import { authService, firebaseInstance } from 'fbase';
import React, { useState } from 'react';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error,setError] = useState("");
    const onChange = (event) => {

        const { target: { name, value } } = event;
        if (name === "email") {
            setEmail(value)
        } else if (name === "password") {
            setPassword(value)
        }
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                data = await authService.createUserWithEmailAndPassword(email, password);
            }
            else {
                data = await authService.signInWithEmailAndPassword(email, password)
            }
            console.log(data);
        } catch (err) {
            setError(err.message)
        }

    }
    const toggleAccount = () => setNewAccount((prev)=>!prev);
    const onSocialClick = async (event) =>{
        const { target:{name},}= event;
        let provider;
        console.log(name)
        if(name==="google"){
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        }
        const data = await authService.signInWithPopup(provider);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input  name="email" type="text" placeholder="Email" required value={email} onChange={onChange} />
                <input name="password" type="password" placeholder="Password" value={password} required onChange={onChange} />
                <input type="submit" value={newAccount ? "Create Account" : "LogIn"} />
                {error}
            </form>
            <span onClick={toggleAccount}>{newAccount?"Sign in":"Create Account"}</span>
            <div>
                <button name="google" onClick={onSocialClick}> Continue with Google</button>
            </div>
        </div>
    )
}

export default Auth;