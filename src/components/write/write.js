import React from 'react'
import './write.less'
import { Fnbtn } from '../login_register/login_register'
class Write extends React.Component {
  render() {
    return (
      <div className="write">
        <input
          spellCheck="false"
          className="write-title"
          placeholder="请输入标题"
        />
        <textarea
          spellCheck="false"
          className="write-content"
          placeholder="说点什么...."
        />
        <div className="write-btn">
          <div className="cancel">
            <Fnbtn
              text="取消"
              click={() => {
                console.log('cancel')
              }}
            />
          </div>
          <div className="submit">
            <Fnbtn
              text="提交"
              click={() => {
                console.log('submit')
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default Write
