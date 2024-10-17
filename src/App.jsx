import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="login-container">
        <h2 class="login-title">Login to Account</h2>
        <p class="login-text" id='login-intro'>Please enter your email and password to continue</p>
        <form class="login-form">
          <p class="login-text">Email address:</p>
          <input type="email" placeholder="Email adress" required/>
          <p class="login-text">Password</p>
          <p class="login-text" id='login-forget'><a id="link-forget" href="#">Forget Password?</a></p>
          <input type="email" placeholder="Password" required/>
          <div class="login-checkbox">
            <input type="checkbox" id="remember"/>
            <label for="remember">Remember Password</label>
          </div>
          <button class="login-button" type="submit">Sign In</button>
        </form>
        <p class="login-text" id='login-create'>Don't have an account? <a id="link-create" href="#">Create Account</a></p>
      </div>
    </>
  )
}

export default App
