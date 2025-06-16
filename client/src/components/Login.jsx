import '../css/login.css';
import { Link } from 'react-router-dom';
import Header from './Header';

const Login = () => {
    return (
        <>
            <Header />
            <div className="loginDiv">
                <h2>Login</h2>
                <form>
                    <div className="formGroup">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="email" required autoComplete="off" />
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="password" required autoComplete="new-password" />
                    </div>
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
