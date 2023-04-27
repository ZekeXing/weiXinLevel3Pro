// index.js
import {
  HomeApi
} from '../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [],
    hotGoodsList: [],
    newGoodsList: []
  },

  //tap 事件函数
  tapHandler(e) {
    console.log(e.currentTarget.dataset.id)
  },
  // tap事件函数
  btnJump(e) {
    wx.switchTab({
      url: '/pages/me/me',
    })
  },
  btnJumpDetail(e) {
    wx.navigateTo({
      // url: '/pages/detail/detail?goodsId=10001',
      url: '/pages/detail/detail?goodsId=' + e.currentTarget.dataset.cart.id,
    })
  },
  onShow() {
    this.getTabBar().setData({
      active: 0
    })
  },
  async onLoad(options) {
    let res = await HomeApi()

    console.log(res.data);

    let {
      banner,
      hotGoodsList,
      newGoodsList
    } = res.data
    this.setData({
      banner,
      hotGoodsList,
      newGoodsList
    })
  }
})