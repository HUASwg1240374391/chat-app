import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.less'
import './iconfont/iconfont.css'
import Nav from './components/nav'
import { BrowserRouter } from 'react-router-dom'
import RouteMap from './util/routerMap'
class App extends Component {
  constructor() {
    super()
    this.state = {
      token: ''
    }
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Switch>
            {RouteMap.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.path}
                  exact
                  render={props => {
                    return <item.component {...props} />
                  }}
                />
                /*
                render={props => {
                  return !item.auth ? (
                    <item.component {...props} />
                  ) : this.state.token ? (
                    <item.component {...props} />
                  ) : (
                    <Redirect to="/login" />
                  )
                }}
                */
              )
            })}
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
