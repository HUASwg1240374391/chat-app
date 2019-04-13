import React from 'react'
import Backbar from '../backBar/backbar'
import './publish.less'
import Write from '../write/write'
class Publish extends React.Component {
  render() {
    return (
      <div className="App-Publish">
        <Backbar title="发布" history={this.props.history} />
        <Write />
      </div>
    )
  }
}
export default Publish
