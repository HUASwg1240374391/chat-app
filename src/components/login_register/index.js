import React from 'react'
import { Link } from 'react-router-dom'
class LoginAndRegister extends React.Component {
  render() {
    return (
      <div className="App-login-register-btn">
        <Link to="/login">登录</Link>
        <Link to="/register">注册</Link>
      </div>
    )
  }
}
export default LoginAndRegister
