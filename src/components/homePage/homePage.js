import React from 'react'
import './homePage.less'
import Article from '../article/article'
import { connect } from 'react-redux'
class HomePage extends React.Component {
  render() {
    return (
      <div className="homePage">
        {this.props.articleList.map((item, index) => {
          return (
            <Article
              key={index}
              avatar={item.avatar}
              time={item.time}
              nickName={item.nickName}
              title={item.title}
              collectQuantity={item.collectQuantity}
              messageQuantity={item.messageQuantity}
              content={item.content}
              id={item.id}
            />
          )
        })}
      </div>
    )
  }
}
const mapState = state => {
  return {
    articleList: state.articleState.articleList
  }
}
const mapAction = dispatch => {
  return {}
}
export default connect(
  mapState,
  mapAction
)(HomePage)
