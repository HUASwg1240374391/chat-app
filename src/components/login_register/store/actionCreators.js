// import axios from 'axios'
export const updateRegisterAccount = value => {
  return {
    type: 'updateRegisterAccount',
    value
  }
}
export const testRegisterAccount = value => {
  return {
    type: 'testRegisterAccount',
    value
  }
}
export const updateRegisterPassword = value => {
  return {
    type: 'updateRegisterPassword',
    value
  }
}
export const testRegisterPassword = value => {
  return {
    type: 'testRegisterPassword',
    value
  }
}
export const updateRegisterPasswordReinput = value => {
  return {
    type: 'updateRegisterPasswordReinput',
    value
  }
}
export const testRegisterPasswordReinput = value => {
  return {
    type: 'testRegisterPasswordReinput',
    value
  }
}
/*
 点击注册按钮发送请求
export const sendRegisterRequest = () => {
  return (state, dispatch) => {
    axios.post('url').then(response => {
      // 注册结果判断
      // 成功则跳转到登录页面
      // 失败则清空状态
    })
  }
}
*/

export const updateLoginAccount = value => {
  return {
    type: 'updateLoginAccount',
    value
  }
}
export const updateLoginPassword = value => {
  return {
    type: 'updateLoginPassword',
    value
  }
}
