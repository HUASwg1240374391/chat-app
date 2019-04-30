import React from 'react'
import PropTypes from 'prop-types'
class Children extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      childrenAccount: 0,
      value: 0
    }
    this.updateChildrenAccount = this.updateChildrenAccount.bind(this)
  }
  static childContextTypes = {
    text: PropTypes.string
  }
  getChildContext() {
    return {
      text: "i'm context transfer"
    }
  }
  updateChildrenAccount() {
    this.setState({
      childrenAccount: this.state.childrenAccount + 1
    })
  }
  componentDidMount() {
    this.setState({
      value: this.state.value + 1
    })
    console.log(this.state.value)
    this.setState({
      value: this.state.value + 1
    })
    console.log(this.state.value)
    setTimeout(() => {
      console.log(this.state.value)
    }, 0)
  }
  handleChildren() {
    let children = this.props.children
    let update = this.updateChildrenAccount
    return React.Children.map(children, item => {
      return React.cloneElement(item, {
        // together: React.Children.count(children)
        together: children,
        update
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
class Inner extends React.Component {
  static contextTypes = {
    text: PropTypes.string
  }
  render() {
    let fn = null
    if (this.props.update) {
      fn = this.props.update
    }
    return <div onClick={fn}>{this.context.text}</div>
  }
}

export { Children, Inner }
