import React from 'react'
import PropTypes from 'prop-types'
class Children extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      childrenAccount: 0,
      value: "i'm value"
    }
    this.updateChildrenAccount = this.updateChildrenAccount.bind(this)
  }
  static childContextTypes = {
    text: PropTypes.string,
    update: PropTypes.func
  }
  getChildContext() {
    return {
      text: this.state.value,
      update: this.updateChildrenAccount
    }
  }
  updateChildrenAccount() {
    this.setState(
      {
        childrenAccount: this.state.childrenAccount + 1
      },
      () => {
        console.log(this.state.childrenAccount)
      }
    )
    return null
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
    // let update = this.updateChildrenAccount
    return React.Children.map(children, item => {
      return React.cloneElement(item, {
        // together: React.Children.count(children)
        together: children
        // update
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
    text: PropTypes.string,
    update: PropTypes.func
  }
  constructor() {
    super()
    this.div = React.createRef()
  }
  render() {
    let fn = null
    if (this.context.update) {
      fn = this.context.update
    }
    let div = React.createRef()
    setTimeout(() => {
      if (div.current) {
        console.log(div)
      }
    }, 1000)
    return (
      <div onClick={fn} ref={div}>
        {this.context.text}
      </div>
    )
  }
}

export { Children, Inner }
