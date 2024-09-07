import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import login_logo from '/src/assets/logo.png';
import { login, signUp } from '../../Components/Firebase';

function Login() {
    const [signState, setSignState] = useState("Sign In");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Use navigate hook

    const user_auth = async (event) => {
        event.preventDefault();
        try {
            if (signState === "Sign In") {
                await login(email, password);
                navigate("/"); // Redirect to home page upon successful login
            } else {
                await signUp(name, email, password);
                navigate("/"); // Redirect to home page upon successful sign up
            }
        } catch (error) {
            // Handle authentication errors if needed
            console.error("Authentication Error:", error);
        }
    };

    return (
        <>
            <div className="login">
                <img src={login_logo} alt="Logo" className='login_logo' />
                <div className="login-form">
                    <h1>{signState}</h1>
                    <form onSubmit={user_auth}>
                        {signState === "Sign Up" && (
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Your Name'
                            />
                        )}
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email'
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password'
                        />
                        <button type="submit">{signState}</button>
                        <div className="form-help">
                            <div className="remember">
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember">Remember Me</label>
                            </div>
                            <p>Need Help?</p>
                        </div>
                    </form>
                    <div className="form-switch">
                        {signState === "Sign In" ? (
                            <p>New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span></p>
                        ) : (
                            <p>Already have an account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span></p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
