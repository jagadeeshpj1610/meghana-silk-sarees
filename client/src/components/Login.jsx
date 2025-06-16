import '../css/login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="loginDiv">
            <h2>Login</h2>
            <form>
                <div className="formGroup">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="email" required name="email_no_autofill" autoComplete="off" />

                    <label htmlFor="password">Password:</label>
                    <input type="password" className="password" name="password_no_autofill" autoComplete="new-password" required />
                </div>
                <div className='loginButtonDiv'>
                    <button type="submit">Login</button>
                    <Link className='signupLink' to='/signup'><p className='signupPrompt'>if you don't have an account Sign Up</p></Link>
                </div>
            </form>                     
        </div>
    );

};

export default Login;