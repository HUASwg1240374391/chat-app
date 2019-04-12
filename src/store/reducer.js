import { combineReducers } from 'redux'
import loginAndRegisterReducer from '../components/login_register/store/reducer'
import navReducer from '../components/nav/store/reducer'
import articleReducer from '../components/homePage/store/reducer'
export default combineReducers({
  loginAndRegisterState: loginAndRegisterReducer,
  navState: navReducer,
  articleState: articleReducer
})
