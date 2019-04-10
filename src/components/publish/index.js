import React from 'react'
import Backbar from '../backBar'
class Publish extends React.Component {
  render() {
    return (
      <div className="App-Publish">
        <Backbar title="发表" history={this.props.history} />
      </div>
    )
  }
}
export default Publish
