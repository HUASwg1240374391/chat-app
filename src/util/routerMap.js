import HomePage from '../components/homePage/homePage'
import Login from '../components/login_register/login/login'
import Register from '../components/login_register/register/register'
import Myself from '../components/myself/myself'
import Publish from '../components/publish/publish'
import Comment from '../components/comment/comment'

export default [
  { path: '/', name: 'homepage', component: HomePage },
  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/myself', name: 'Myself', component: Myself, auth: true },
  { path: '/publish', name: 'Publish', component: Publish, auth: true },
  { path: '/comment/:id', name: 'comment', component: Comment }
]
