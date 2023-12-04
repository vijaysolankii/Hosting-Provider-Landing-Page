import React from 'react'

const Login = () => {
  return (
    <section className="login">
        <div className="container">
            <div className="login-form">
                <input type="text" name="username" id="username" />
                <input type="password" name="password" id="password" />
                <input type="submit" value="Login" />
            </div>
        </div>
    </section>
  )
}

export default Login