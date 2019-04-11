import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'
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
  return <div className="function-button">{props.text}</div>
}
export { LoginAndRegister, Fnbtn }
