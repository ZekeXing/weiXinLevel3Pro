// pages/detail/detail.js
import loginAuth from '../utils/loginAuth'
import {
  GoodsDetailApi
} from '../utils/api'
import {
  RelatedGoodsApi
} from '../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCollected: false,
    isShowed: false,
    stepNum: "",
    bying: false,
    cartList: [],
    gallery: [],
    info: [],
    attribute: [],
    issue: [],
    productList: [],
    goodsList: []
  },

  onShowPopup(e) {
    this.setData({
      isShowed: true
    })
  },

  onClosePopup(e) {
    const cartList = this.data.goodsList.map(item => {
      return {
        ...item,
        quantity: this.data.stepNum
      }
    })
    this.setData({
      isShowed: false,
      bying: false,
      cartList
    })
    wx.setStorageSync('cartList',cartList)

  },
  onStepperChange(e) {
    this.setData({
      stepNum: e.detail
    })
  },
  collectTap(e) {
    this.setData({
      isCollected: !this.data.isCollected,
    })

  },
  goCart(e) {
    wx.setStorageSync('cartList', this.data.cartList)
    if (loginAuth()) {
      return

    }
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },
  addToCart() {
    this.setData({
      isShowed: true
    })
  },
  Buy() {

    this.setData({
      bying: true,
      isShowed: true
    })
  },
  async onLoad(options) {
    let goodsId = options.id
    let res = await GoodsDetailApi({
      data: {
        id: goodsId
      }
    })
    let {
      gallery,
      info,
      attribute,
      issue,
      productList,
    } = res.data
    this.setData({
      gallery,
      info,
      attribute,
      issue,
      productList,

    })
    info.goods_desc = info.goods_desc.replace(/<img/g, '<img class="img"');

    let relatedRes = await RelatedGoodsApi({
      data: {
        id: goodsId
      }
    })
    this.setData({
      gallery,
      info,
      attribute,
      issue,
      productList,
      goodsList: relatedRes.data.goodsList
    
    })
    
  }

})