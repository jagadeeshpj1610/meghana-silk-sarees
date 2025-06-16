


const Login = () => {
    return (
        <div className="loginDiv">
            <h2>Login</h2>
            <form>
                <div className="formGroup">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="email" required name="email_no_autofill" autoComplete="off" />
                </div>
                <div className="formGroup">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="password" name="password_no_autofill" autoComplete="new-password" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );

}

export default Login;