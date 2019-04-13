import React from 'react'
import './articleBody.less'
class ArticleBody extends React.Component {
  render() {
    return (
      <div className="ArticleBody">
        <ArticleHeader title="测试" author="追风中年人" time="2天" />
        <ArticleContent
          content="如果仅希望更换 Element 的主题色，推荐使用在线主题生成工具。Element 默认的主题色是鲜艳、友好的蓝色。通过替换主题色，能够让 Element 的视觉更加符合具体项目的定位。

使用上述工具，可以很方便地实时预览主题色改变之后的视觉，同时它还可以基于新的主题色生成完整的样式文件包，供直接下载使用（关于如何使用下载的主题包，请参考本节「引入自定义主题」和「搭配插件按需引入组件主题」部分）。"
        />
      </div>
    )
  }
}
function ArticleHeader(props) {
  return (
    <div className="ArticleHeader">
      <h2 className="ArticleHeaderTitle">{props.title}</h2>
      <span>作者：{props.author}</span>
      <span>发表于：{props.time}前</span>
    </div>
  )
}
function ArticleContent(props) {
  return (
    <div className="ArticleContent">
      <p>{props.content}</p>
    </div>
  )
}
export default ArticleBody
