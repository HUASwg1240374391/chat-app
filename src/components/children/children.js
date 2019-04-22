import React from 'react'
class Children extends React.Component {
  componentDidMount() {
    console.log('did mount')

    React.Children.forEach(this.props.children, item => {
      console.log(item.props)
    })
  }
  render() {
    return (
      <div>
        <h1>i'm children container</h1>
        <div>{this.props.children}</div>
      </div>
    )
  }
}
export default Children
