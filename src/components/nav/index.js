import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './index.less'
class Nav extends React.Component {
  render() {
    return (
      <div className="App-nav">
        <Link to="/">主页</Link>
        <Link to="/publish">发表</Link>
        <Link to="/myself">我</Link>
      </div>
    )
  }
}
export default Nav
