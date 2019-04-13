import React from 'react'
import { connect } from 'react-redux'
import './userItem.less'
class UserItem extends React.Component {
  render() {
    return (
      <div className="userItem">
        <span className={`iconfont icon-${this.props.icon}`} />
        <span className="userItem-text">{this.props.itemText}</span>
      </div>
    )
  }
}
export default connect(
  null,
  null
)(UserItem)
