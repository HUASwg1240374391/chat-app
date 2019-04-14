import React from 'react'
import './userBasic.less'
class UserBasic extends React.Component {
  render() {
    return (
      <div className="userBasic">
        <img className="userAvatar" src={this.props.avatar} alt="user-avatar" />
        <span
          className="user-nickName"
          onClick={() => {
            this.props.click()
          }}
        >
          {this.props.nickName}{' '}
        </span>
      </div>
    )
  }
}
export default UserBasic
