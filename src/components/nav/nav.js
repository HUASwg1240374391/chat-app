import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import NavItem from './navItem/navItem'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreator'
import './nav.less'

class Nav extends React.Component {
  componentWillUpdate(nextProp) {
    if (nextProp !== this.props) {
      this.props.updateActiveNavItem(this.props.location.pathname)
    }
  }
  render() {
    return (
      <div className="App-nav">
        <Link to="/">
          <NavItem iconType="home" pathname="/">
            主页
          </NavItem>
        </Link>
        <Link to="/publish">
          <NavItem iconType="publish" pathname="/publish">
            发布
          </NavItem>
        </Link>
        <Link to="/myself">
          <NavItem iconType="myself" pathname="/myself">
            我的
          </NavItem>
        </Link>
      </div>
    )
  }
}
const mapState = state => {
  return {
    activeItem: state.navState.activeItem
  }
}
const mapAction = dispatch => {
  return {
    updateActiveNavItem(path) {
      dispatch(actionCreators.updateActiveNavItem(path))
    }
  }
}
export default withRouter(
  connect(
    mapState,
    mapAction
  )(Nav)
)
