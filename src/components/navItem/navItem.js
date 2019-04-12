import React from 'react'
import './navItem.less'
class NavItem extends React.Component {
  render() {
    return (
      <div className="nav-item">
        <span
          className={'iconfont icon-' + this.props.iconType + ' nav-item-icon'}
        />
        <span className="nav-item-text">{this.props.children}</span>
      </div>
    )
  }
}
export default NavItem
