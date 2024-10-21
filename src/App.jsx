import './App.css'

function App() {

  return (
    <>
      <div className="login-container">
        <h2 className="login-title">Login to Account</h2>
        <p className="login-text">Please enter your email and password to continue</p>
        <form className="login-form">
          <p className="login-email">Email address:</p>
          <input className="login-input" type="email" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" title="Invalid email address" placeholder="Email adress" required/>
          <div className="login-password">
          <p className="login-password-text">Password</p>
          <p className="login-password-text"><a href="#">Forget Password?</a></p>
          </div>
          <input className="login-input" type="password" placeholder="Password" minLength="8" required/>
          <div className="login-checkbox">
            <input type="checkbox"/>
            <label for="remember">Remember Password</label>
          </div>
          <button className="login-button" type="submit">Sign In</button>
        </form>
        <p className="login-text">Don't have an account? <a href="#">Create Account</a></p>
      </div>
    </>
  )
}

export default App
