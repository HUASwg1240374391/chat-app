import React from 'react'
import { LoginAndRegister, Fnbtn, Tips } from '../login_register'
import { connect } from 'react-redux'
import * as actionCreators from '../store/actionCreators'
class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      tipsState: false
    }
  }
  tips() {
    if (!this.state.tipsState) {
      this.setState({
        tipsState: true
      })
      setTimeout(() => {
        this.setState({
          tipsState: false
        })
      }, 2000)
    }
  }
  render() {
    return (
      <div className="App-login-register">
        <LoginAndRegister />
        <div className="App-login-register-item">
          <span className="App-login-register-label">账号</span>
          <input
            className="App-login-register-input"
            onChange={e => {
              this.props.updateLoginAccount(e)
            }}
            spellCheck="false"
            value={this.props.loginAccount}
          />
        </div>

        <div className="App-login-register-item">
          <span className="App-login-register-label">密码</span>
          <input
            className="App-login-register-input"
            type="password"
            onChange={e => {
              this.props.updateLoginPassword(e)
            }}
            value={this.props.loginPassword}
          />
        </div>
        <Fnbtn
          text="登录"
          click={() => {
            this.tips()
          }}
        />
        <Tips state={this.state.tipsState} text={'成功'} type="failed" />
      </div>
    )
  }
}
const mapState = state => {
  return {
    loginAccount: state.loginAndRegisterState.loginAccount,
    loginPassword: state.loginAndRegisterState.loginPassword
  }
}
const mapAction = dispatch => {
  return {
    updateLoginAccount(e) {
      let account = e.target.value
      dispatch(actionCreators.updateLoginAccount(account))
    },
    updateLoginPassword(e) {
      let password = e.target.value
      dispatch(actionCreators.updateLoginPassword(password))
    }
  }
}
export default connect(
  mapState,
  mapAction
)(Login)
