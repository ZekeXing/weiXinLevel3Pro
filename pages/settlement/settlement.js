// pages/settlement/settlement.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList:[],
    goodsPrice:0,
    totalPrice: 0,
    freight: 6,
    msg: '',
    date:''
  },
  update(){
    this.setData({
      cartList: wx.getStorageSync('cartList')
    })
  },
  inputHandler(e){
    this.setData({
      msg : e.detail.value

    })
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
this.update()
this.sum()
  },
sum(){
  totalPrice: 0
  for (let index = 0; index < this.data.cartList.length; index++) {
    const element = this.data.cartList[index];
    this.setData({
      goodsPrice: this.data.goodsPrice + (element.retail_price * element.quantity)
    })
}
this.setData({
  totalPrice: this.data.goodsPrice+this.data.freight
})
},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})