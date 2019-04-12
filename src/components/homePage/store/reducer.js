const defaultState = {
  articleList: [
    {
      avatar:
        'https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929__340.jpg',
      time: '50分钟前',
      nickName: '追风中年人',
      title: '发表的标题',
      collectQuantity: '10',
      messageQuantity: '5',
      content:
        '我们建议使用 CDN 引入 Element 的用户在链接地址上锁定版本，以免将来 Element 升级时受到非兼容性更新的影响。锁定版本的方法请查看 unpkg.com。'
    },
    {
      avatar:
        'https://cdn.pixabay.com/photo/2019/02/24/10/53/woman-4017330__340.jpg',
      time: '50分钟前',
      nickName: '大点声我听不见',
      title: '发表的标题',
      collectQuantity: '10',
      messageQuantity: '5',
      content:
        '我们建议使用 CDN 引入 Element 的用户在链接地址上锁定版本，以免将来 Element 升级时受到非兼容性更新的影响。锁定版本的方法请查看 unpkg.com。'
    },
    {
      avatar:
        'https://cdn.pixabay.com/photo/2019/04/08/21/56/sunset-4113091__480.jpg',
      time: '50分钟前',
      nickName: '泥猴🌶么大声干🐎',
      title: '发表的标题',
      collectQuantity: '10',
      messageQuantity: '5',
      content:
        '我们建议使用 CDN 引入 Element 的用户在链接地址上锁定版本，以免将来 Element 升级时受到非兼容性更新的影响。锁定版本的方法请查看 unpkg.com。'
    },
    {
      avatar:
        'https://cdn.pixabay.com/photo/2015/07/31/15/01/girl-869213__340.jpg ',
      time: '50分钟前',
      nickName: '🐂🍺',
      title: '发表的标题',
      collectQuantity: '10',
      messageQuantity: '5',
      content:
        '我们建议使用 CDN 引入 Element 的用户在链接地址上锁定版本，以免将来 Element 升级时受到非兼容性更新的影响。锁定版本的方法请查看 unpkg.com。'
    }
  ]
}
export default (state = defaultState, action) => {
  const tem = { ...state }
  switch (action.type) {
    case 'loadMoreArticle':
      tem.articleList.concat([action.value])
      return tem
    default:
      return tem
  }
}
