import React from 'react'
import './article.less'
// import axios from 'axios'
class Article extends React.Component {
  render() {
    return (
      <div className="App-article">
        <img className="avatar" src={this.props.avatar} alt="avatar" />
        <span className="nickName">{this.props.nickName}</span>

        <span className="publishTime">
          <span className="iconfont icon-clock" />
          {this.props.time}
        </span>
        <div className="specificContentBox">
          <h2 className="specificContentBox-title">{this.props.title}</h2>
          <p className="specificContent">{this.props.content}</p>
        </div>
        <div className="talk-info">
          <span className="iconfont icon-like" />
          <span className="talk-info-quantity">
            {this.props.collectQuantity}
          </span>
          <span className="iconfont icon-message" />
          <span className="talk-info-quantity">
            {this.props.messageQuantity}
          </span>
        </div>
      </div>
    )
  }
}
export default Article
