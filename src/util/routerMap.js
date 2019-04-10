import HomePage from '../components/homePage'
import Login from '../components/login_register/login'
import Register from '../components/login_register/register'
import Myself from '../components/myself'
import Publish from '../components/publish'

export default [
  { path: '/', name: 'homepage', component: HomePage },
  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/myself', name: 'Myself', component: Myself, auth: true },
  { path: '/publish', name: 'Publish', component: Publish, auth: true }
]
