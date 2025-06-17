import { Link } from "react-router-dom";
import '../css/signup.css';
import Header from "./Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {

        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
                credentials: "include"
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                navigate('/login');

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
            <div className="signUpDiv">
                <h2>Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <div className="formDiv">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="name" required autoComplete="off" onChange={(e)=>setName(e.target.value)}/>
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="email" required autoComplete="off" onChange={(e)=>setEmail(e.target.value)}/>
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="password" required autoComplete="new-password"  onChange={(e)=>setPassword(e.target.value)} />
                        <div className={`message ${message && 'visible'}`}>{message}</div>
                        <button type="submit">Sign Up</button>
                        <p className="loginRedirect">Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </form>
            </div>
        </>

    );
}

export default SignUp;
