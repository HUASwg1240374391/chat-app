import React from 'react'
import { LoginAndRegister, Fnbtn, Tips } from '../login_register'
import { connect } from 'react-redux'
import * as actionCreators from '../store/actionCreators'
class Register extends React.Component {
  render() {
    return (
      <div className="App-login-register">
        <LoginAndRegister />
        <div className="App-login-register-item">
          <span className="App-login-register-label">账号</span>
          <input
            className={`App-login-register-input  ${
              this.props.registerAccountState
                ? ''
                : 'App-login-register-input-illegal'
            }`}
            placeholder="8~16位数字、字母、@或."
            onChange={e => {
              this.props.updateAccount(e, this.props.registerAccountState)
            }}
            value={this.props.account}
            type="text"
            spellCheck="false"
            onBlur={() => {
              this.checkAccount()
            }}
          />
        </div>

        <div className="App-login-register-item">
          <span className="App-login-register-label">密码</span>
          <input
            className={`App-login-register-input ${
              this.props.registerPasswordState
                ? ''
                : 'App-login-register-input-illegal'
            }`}
            placeholder="8~16位数字、字母、符号"
            type="password"
            value={this.props.password}
            onChange={e => {
              this.props.veriPassword(e)
            }}
          />
        </div>
        <div className="App-login-register-item">
          <span className="App-login-register-label">重复密码</span>
          <input
            className={`App-login-register-input ${
              this.props.registerPasswordReinputState
                ? ''
                : 'App-login-register-input-illegal'
            }`}
            type="password"
            value={this.props.registerPasswordReinput}
            onChange={e => {
              this.props.reVeriPassword(e, this.props.password)
            }}
          />
        </div>
        <Fnbtn
          text="注册"
          click={() => {
            this.props.submitRegister(this.props)
          }}
        />
        <Tips />
      </div>
    )
  }
}
const mapState = state => {
  return {
    account: state.loginAndRegisterState.registerAccount,
    registerAccountState: state.loginAndRegisterState.registerAccountState,
    password: state.loginAndRegisterState.registerPassword,
    registerPasswordState: state.loginAndRegisterState.registerPasswordState,
    passwordReinput: state.loginAndRegisterState.registerPasswordReinput,
    registerPasswordReinputState:
      state.loginAndRegisterState.registerPasswordReinputState
  }
}
const mapActions = dispatch => {
  return {
    /**
     * @description: 跟新account记录并且验证账号合法性
     * @param {type}:input change event
     * @return:void
     */
    updateAccount(e) {
      let account = e.target.value
      let verification = /[^@|\w|.]/
      if (
        !verification.test(account) &&
        (account.length <= 18 && account.length >= 8)
      ) {
        dispatch(actionCreators.testRegisterAccount(true))
      } else {
        dispatch(actionCreators.testRegisterAccount(false))
      }
      dispatch(actionCreators.updateRegisterAccount(account))
    },
    /**
     * @todo
     * @description:account 输入框失焦时进行账号查重
     * @param {type}: none
     * @return: void
     */
    checkAccount() {},
    /**
     * @description: 验证初次输入的密码的合法性
     * @param {type}:input change event
     * @return: void
     */
    veriPassword(e) {
      let password = e.target.value
      let verification = /[\s]/g
      if (
        !verification.test(password) &&
        password.length <= 16 &&
        password.length >= 8
      ) {
        dispatch(actionCreators.testRegisterPassword(true))
      } else {
        console.log(false)
        dispatch(actionCreators.testRegisterPassword(false))
      }
      dispatch(actionCreators.updateRegisterPassword(password))
    },
    /**
     * @description: 验证第二次输入的密码和第一次是否一致
     * @param {type}:input change event 和第一次输入的密码值
     * @return: void
     */
    reVeriPassword(e, initPassword) {
      let password = e.target.value
      if (password === initPassword) {
        dispatch(actionCreators.testRegisterPasswordReinput(true))
      } else {
        dispatch(actionCreators.testRegisterPasswordReinput(false))
      }
      dispatch(actionCreators.updateRegisterPasswordReinput(password))
    },
    /**
     * @todo
     * @description:提交注册请求并验证
     * @param {type}: none
     * @return: void
     */
    submitRegister(props) {
      props.history.replace('/login')
    }
  }
}
export default connect(
  mapState,
  mapActions
)(Register)
