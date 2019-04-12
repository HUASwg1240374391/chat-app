import React from 'react'
import { Link } from 'react-router-dom'
import './login_register.less'
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
function Fnbtn(props) {
  return (
    <div className="function-button" onClick={props.click}>
      {props.text}
    </div>
  )
}
function Tips(props) {
  return (
    <div
      style={props.state ? { display: 'block' } : { display: 'none' }}
      className={`App-loginAndRegister-tips App-loginAndRegister-tips-animation `}
    >
      <span
        className={`iconfont icon-${props.type} App-loginAndRegister-tips-icon`}
      />
      <br />
      <span className={`App-loginAndRegister-tips-text`}>{props.text}</span>
    </div>
  )
}
export { LoginAndRegister, Fnbtn, Tips }
