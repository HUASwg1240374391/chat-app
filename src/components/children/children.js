import React from 'react'
class Children extends React.Component {
  componentDidMount() {
    console.log('did mount')

    React.Children.forEach(this.props.children, item => {
      console.log(item.props)
    })
  }
  handleChildren() {
    let children = this.props.children
    return React.Children.map(children, item => {
      return React.cloneElement(item, {
        // together: React.Children.count(children)
        together: children
      })
    })
  }
  render() {
    return (
      <div>
        <h1>i'm children container</h1>
        <div>{this.handleChildren()}</div>
      </div>
    )
  }
}
function Inner(props) {
  return (
    <div>
      <span>inner span</span>
      {props.together}
    </div>
  )
}
export { Children, Inner }
