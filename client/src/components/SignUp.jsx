

const SignUp = () => {
    return (
        <div className="signUpDiv">
            <h2>Sign Up</h2>
            <form>
                <div className="formGroup">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="name" required name="name_no_autofill" autoComplete="off" />
                </div>
                <div className="formGroup">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="email" required name="email_no_autofill" autoComplete="off" />
                </div>
                <div className="formGroup">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="password" name="password_no_autofill" autoComplete="new-password" required />
                </div>
                <button type="submit">Sign Up</button>
            </form>                 
        </div>
    );

}


export default SignUp;