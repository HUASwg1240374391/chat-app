import React from 'react'
import { LoginAndRegister, Fnbtn } from '../index'
class Register extends React.Component {
  render() {
    return (
      <div className="App-login-register">
        <LoginAndRegister />
        <div className="App-login-register-item">
          <span className="App-login-register-label">账号</span>
          <input
            className="App-login-register-input"
            placeholder="8~12位数字、字母、符号"
          />
        </div>

        <div className="App-login-register-item">
          <span className="App-login-register-label">密码</span>
          <input
            className="App-login-register-input"
            placeholder="8~12位数字、字母、符号"
            type="password"
          />
        </div>
        <div className="App-login-register-item">
          <span className="App-login-register-label">重复密码</span>
          <input className="App-login-register-input" type="password" />
        </div>
        <Fnbtn text="注册" />
      </div>
    )
  }
}
export default Register
