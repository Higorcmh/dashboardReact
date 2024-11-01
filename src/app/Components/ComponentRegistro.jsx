import { React } from "react";
import { Link } from "react-router-dom";

import "../styles/StylesRegistro.css";

function ComponentRegistro() {
    return(
        <div>
            <h2 className="register-title">
                Create an Account
            </h2>
            <p className="register-subtitle">
                Create a account to continue
            </p>
            <form>
                <div className="register-forms">
                    <p className="register-p">Email address</p>
                    <input 
                    className="email-input"
                    type="email"
                    pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                    title="Invalid email address"
                    placeholder="esteban_schiller@gmail.com"
                    required
                    />
                </div>
                <div className="register-forms">
                    <p className="register-p">Username</p>
                    <input 
                    className="username-input"
                    type="text" 
                    minLength="8"
                    placeholder="Username"
                    required
                     />
                </div>
                <div className="register-forms">
                    <p className="register-p">Password</p>
                    <input 
                    className="password-input"
                    type="password"
                    minLength="8"
                    required
                     />
                </div>
                <div className="register-checkbox">
                    <input type="checkbox" />
                    <label className="terms" htmlFor="accept">
                    I accept terms and conditions
                    </label>
                </div>
                <button className="register-button" type="submit">
                Sign In
                </button>
                </form>
                <p className="register-text">
                Already have an account? {" "} 
                <Link to={"/"} className="register-login" href="#">
                Login
                </Link>
                </p>
        </div>
    );
}

export default ComponentRegistro;