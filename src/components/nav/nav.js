import React from 'react'
import { Link } from 'react-router-dom'
import NavItem from '../navItem/navItem'
import './nav.less'
class Nav extends React.Component {
  render() {
    return (
      <div className="App-nav">
        <Link to="/">
          <NavItem iconType="home">主页</NavItem>
        </Link>
        <Link to="/publish">
          <NavItem iconType="publish">发布</NavItem>
        </Link>
        <Link to="/myself">
          <NavItem iconType="myself">我的</NavItem>
        </Link>
      </div>
    )
  }
}
export default Nav
