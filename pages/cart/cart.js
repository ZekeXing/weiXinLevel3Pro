// pages/cart/cart.js
Page({

  data: {
    cartList: [],
    totalPrice: 0,
    cartThings: {}

  },
  // 通过id找到对象
  selectThings(e){
    for (let index = 0; index < this.data.cartList.length; index++) {
      const element = this.data.cartList[index];
      
      if (e.currentTarget.dataset.id == element.id){return element}
     
    }
    return null
  },
  decreaseCount(e) {
    this.reDown()

    // console.log(e);
    this.selectThings(e).quantity--
    // console.log(this.selectThings(e));
    
    this.setData({  
      // cartList.quantity : this.data.cartList.quantity-1
      cartList: this.data.cartList
    })
    this.flash()

  },
  increaseCount(e) {
    this.reDown()

    this.selectThings(e).quantity++
    this.setData({  
      cartList: this.data.cartList
    })
    this.flash()
  },
  flash(){

    this.setData({
      cartList: this.data.cartList
    })
    wx.setStorageSync('cartList', this.data.cartList)
    this.sum()

  },
  reDown(){
    this.setData({  
      cartList: wx.getStorageSync('cartList')
    })
    
  },
  //结账
  settlement(){
    this.flash()
    wx.setStorageSync('totalPrice', this.data.totalPrice)
    wx.navigateTo({
      url: '/pages/settlement/settlement',
    })
  },
  sum() {
    this.reDown()
    this.setData({
      totalPrice: 0
    })

    for (let index = 0; index < this.data.cartList.length; index++) {
      const element = this.data.cartList[index];
      this.setData({
        totalPrice: this.data.totalPrice + (element.retail_price * element.quantity)
      })

    }
  },
  onLoad(options) {
    this.reDown()
  },


  onReady() {
    this.sum()
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.sum()
    this.getTabBar().setData({
      active: 2
    })
    this.flash()

    
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