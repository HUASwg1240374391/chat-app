import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.less'
import './iconfont/iconfont.css'
import Nav from './components/nav'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './components/homePage'
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Route path="/" component={HomePage} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
