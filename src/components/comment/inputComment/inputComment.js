import React from 'react'
import './inputComment.less'
import { Fnbtn } from '../../login_register/login_register'
class InputComment extends React.Component {
  render() {
    return (
      <div className="inputComment">
        <textarea className="entryComment" placeholder="BB点什么?" />
        <div className="submit">
          <Fnbtn
            text="发送"
            click={() => {
              console.log('发送评论')
            }}
          />
        </div>
      </div>
    )
  }
}
export default InputComment
