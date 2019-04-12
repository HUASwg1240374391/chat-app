import React from 'react'
import './navItem.less'
import { connect } from 'react-redux'
class NavItem extends React.Component {
  render() {
    return (
      <div
        className={`nav-item ${
          this.props.activeNavItem === this.props.pathname
            ? 'active-nav-item'
            : ''
        }`}
      >
        <span
          className={'iconfont icon-' + this.props.iconType + ' nav-item-icon'}
        />
        <span className="nav-item-text">{this.props.children}</span>
      </div>
    )
  }
}
const mapState = state => {
  return {
    activeNavItem: state.navState.activeItem
  }
}
export default connect(
  mapState,
  null
)(NavItem)
