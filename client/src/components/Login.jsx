import '../css/login.css';
import Header from './Header';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
                credentials: "include"
            });

            const data = await response.json();
            console.log(data);
            
            if (response.ok) {
                navigate('/');

            } else {
                setMessage("Type correct email and password")
                console.error("Login failed:", response.statusText);
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    }


    return (
        <>
            <Header />
            <div className="loginDiv">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="formGroup">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="email" required autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="password" required autoComplete="new-password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className={`message ${message && 'visible'}`}>{message}</div>
                    <div className="loginButtonDiv">
                        <button type="submit">Login</button>
                    </div>
                    <div className="signupRedirect">
                        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </>

    );
};

export default Login;
