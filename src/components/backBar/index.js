import React from 'react'
import './index.less'

class BackBar extends React.Component {
  goBack() {
    this.props.history.goBack()
  }
  render() {
    return (
      <div className="App-back-bar">
        <span
          className="iconfont icon-back"
          onClick={() => {
            this.goBack()
          }}
        />
        <span className="App-back-bar-title">{this.props.title}</span>
      </div>
    )
  }
}
export default BackBar
