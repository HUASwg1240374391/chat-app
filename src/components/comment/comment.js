import React from 'react'
import './comment.less'
import ArticleBody from './articleBody/articleBody'
import CommentItem from './commentItem/commentItem'
import InputComment from './inputComment/inputComment'
class Comment extends React.Component {
  render() {
    return (
      <div className="comment-page">
        <ArticleBody />
        <h2 className="commentTips">评论:</h2>
        <CommentItem
          avatar="https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929__340.jpg"
          nickName="研发狗"
          content="你在说你🐴呢？沙雕"
          time="刚刚"
        />
        <CommentItem
          avatar="https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929__340.jpg"
          nickName="研发狗"
          content="你在说你🐴呢？沙雕"
          time="刚刚"
        />
        <CommentItem
          avatar="https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929__340.jpg"
          nickName="研发狗"
          content="你在说你🐴呢？沙雕"
          time="刚刚"
        />
        <CommentItem
          avatar="https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929__340.jpg"
          nickName="研发狗"
          content="你在说你🐴呢？沙雕"
          time="刚刚"
        />
        <CommentItem
          avatar="https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929__340.jpg"
          nickName="研发狗"
          content="你在说你🐴呢？沙雕"
          time="刚刚"
        />

        <InputComment />
      </div>
    )
  }
}
export default Comment
