import { combineReducers } from 'redux'
import loginAndRegisterReducer from '../components/login_register/store/reducer'
export default combineReducers({
  loginAndRegisterState: loginAndRegisterReducer
})
