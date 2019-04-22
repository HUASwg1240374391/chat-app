import React from 'react'
import { Fnbtn } from '../login_register/login_register'
import './userInfo.less'
class UserInfo extends React.Component {
  constructor() {
    super()
    this.state = {
      status: true
    }
  }
  changeStatus(value) {
    this.setState({
      status: value
    })
  }

  render() {
    return (
      <div className="userInfo">
        <div className="avatarBox">
          <img
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbijmzOIPHo1xU7F9b5tZcrBBm79tKR55RZq6m3lxREZBABlZK'
            }
            alt="avatar"
          />
        </div>

        <UserInfoItem
          click={() => {
            this.changeStatus(false)
          }}
          label="昵称"
          status={this.state.status}
          value="追风中年人"
        />
        <RenderDeterminBtn
          click={() => {
            this.changeStatus(true)
          }}
          status={this.state.status}
        />
      </div>
    )
  }
}
function UserInfoItem(props) {
  return (
    <div
      className="userInfoItem"
      onClick={() => {
        props.click()
      }}
    >
      <span>{props.label}:</span>
      <input
        defaultValue={props.value}
        className="UserInfoItemInput"
        readOnly={props.status}
      />
    </div>
  )
}
function RenderDeterminBtn(props) {
  if (!props.status) {
    return (
      <div className="determinBtnBox">
        <span>
          <Fnbtn
            text="确定"
            click={() => {
              props.click()
            }}
          />
        </span>
        <span>
          <Fnbtn
            text="取消"
            click={() => {
              props.click()
            }}
          />
        </span>
      </div>
    )
  } else {
    return <span />
  }
}
export default UserInfo
