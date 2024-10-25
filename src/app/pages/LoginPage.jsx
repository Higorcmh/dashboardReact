import { React } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <div className="login-container">
        <h2 className="login-title">Login to Account</h2>
        <p className="login-text">
          Please enter your email and password to continue
        </p>
        <form>
          <div className="login-forms">
            <p className="login-p">Email address:</p>
            <input
              className="login-input"
              type="email"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              title="Invalid email address"
              placeholder="esteban_schiller@gmail.com"
              required
            />
          </div>
          <div className="login-forms">
            <p className="login-p">Password</p>
            <p className="login-p">
              <a href="#">Forget Password?</a>
            </p>
            <input
              className="login-input"
              type="password"
              minLength="8"
              required
            />
          </div>
          <div className="login-checkbox">
            <input type="checkbox" />
            <label className="remember" for="remember">
              Remember Password
            </label>
          </div>
          <button className="login-button" type="submit">
            Sign In
          </button>
        </form>
        <p className="login-text">
          Don't have an account?{" "}
          <Link to={"/registro"} className="create-button" href="#">
            Create Account
          </Link>
        </p>
      </div>
    </>
  );
}

export default LoginPage;
