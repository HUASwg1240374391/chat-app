import React from 'react'
import Backbar from '../backBar/backbar'
import './myself.less'
import UserBasic from '../userBasic/userBasic'
import UserItem from '../userItem/userItem'
import { Fnbtn } from '../login_register/login_register'
class Myself extends React.Component {
  render() {
    return (
      <div className="App-Myself">
        <Backbar title="我的" history={this.props.history} />
        <UserBasic
          nickName="追风中年人"
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbijmzOIPHo1xU7F9b5tZcrBBm79tKR55RZq6m3lxREZBABlZK"
        />
        <UserItem icon="write" itemText="我的发表" />
        <div className="loginOut">
          {' '}
          <Fnbtn
            text="退出登录"
            click={() => {
              console.log('loginOut')
            }}
          />
        </div>
      </div>
    )
  }
}
export default Myself
