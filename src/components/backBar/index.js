import React from 'react'
import './index.less'

class BackBar extends React.Component {
  render() {
    return (
      <div className="App-back-bar">
        <span className="iconfont icon-back" />
        <span>{this.props.title}</span>
      </div>
    )
  }
}
export default BackBar
