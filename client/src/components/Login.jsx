import '../css/login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = ({ setIsLoggedIn, setIsAdmin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState({ text: "", type: "" });
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
                setIsLoggedIn(true)
                setIsAdmin(true)
                navigate('/');

            } else {
                setMessage({ text: "Enter valid email and password", type: "error" });
                console.error("Login failed:", response.statusText);
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    }


    return (

        <div className="loginDiv">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="formGroup">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="email" required autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="password" required autoComplete="new-password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                {message.text && (
                    <div className={`message ${message.type}`}>
                        {message.text}
                    </div>
                )}
                <div className="loginButtonDiv">
                    <button type="submit">Login</button>
                </div>
                <div className="signupRedirect">
                    <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                </div>
            </form>
        </div>

    );
};

export default Login;
