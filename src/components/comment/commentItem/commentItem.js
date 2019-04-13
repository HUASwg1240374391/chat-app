import React from 'react'
import './commentItem.less'
class CommentItem extends React.Component {
  render() {
    return (
      <div className="CommentItem">
        <img src={this.props.avatar} alt="avatar" />
        <div className="commentRightPart">
          <h3>{this.props.nickName}</h3>
          <p>{this.props.content}</p>
          <span className="iconfont icon-clock" />
          <span>{this.props.time}</span>
        </div>
      </div>
    )
  }
}
export default CommentItem
