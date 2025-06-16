import { Link } from "react-router-dom";
import '../css/signup.css';
import Header from "./Header";

const SignUp = () => {
    return (
        <>
        <Header />
            <div className="signUpDiv">
                <h2>Sign Up</h2>
                <form>
                    <div className="formDiv">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="name" required autoComplete="off" />
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="email" required autoComplete="off" />
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="password" required autoComplete="new-password" />
                        <button type="submit">Sign Up</button>
                        <p className="loginRedirect">Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </form>
            </div>
        </>

    );
}

export default SignUp;
