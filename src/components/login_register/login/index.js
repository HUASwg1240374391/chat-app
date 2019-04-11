import React from 'react'
import { LoginAndRegister, Fnbtn } from '../index'
class Login extends React.Component {
  render() {
    return (
      <div className="App-login-register">
        <LoginAndRegister />
        <div className="App-login-register-item">
          <span className="App-login-register-label">账号</span>
          <input className="App-login-register-input" />
        </div>

        <div className="App-login-register-item">
          <span className="App-login-register-label">密码</span>
          <input className="App-login-register-input" type="password" />
        </div>
        <Fnbtn text="登录" />
      </div>
    )
  }
}
export default Login
