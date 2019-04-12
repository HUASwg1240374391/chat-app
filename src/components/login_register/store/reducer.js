const defaultState = {
  loginAccount: '',
  loginPassword: '',
  registerAccount: '',
  registerAccountState: true,
  registerPassword: '',
  registerPasswordState: true,
  registerPasswordReinput: '',
  registerPasswordReinputState: true
}
export default (state = defaultState, actions) => {
  const tem = { ...state }
  switch (actions.type) {
    case 'updateRegisterAccount':
      tem.registerAccount = actions.value
      return tem
    case 'testRegisterAccount':
      tem.registerAccountState = actions.value
      return tem
    case 'updateRegisterPassword':
      tem.registerPassword = actions.value
      return tem
    case 'testRegisterPassword':
      tem.registerPasswordState = actions.value
      return tem
    case 'updateRegisterPasswordReinput':
      tem.registerPasswordReinput = actions.value
      return tem
    case 'testRegisterPasswordReinput':
      tem.registerPasswordReinputState = actions.value
      return tem
    case 'updateLoginAccount':
      tem.loginAccount = actions.value
      return tem
    case 'updateLoginPassword':
      tem.loginPassword = actions.value
      return tem
    default:
      return state
  }
}
