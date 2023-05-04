// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: 0
  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    tabbarList: [{
        "pagePath": "/pages/index/index",
        "text": "首页",
        "icon": "home-o"
      },
      {
        "pagePath": "/pages/cate/cate",
        "text": "分类",
        "icon": "apps-o"
      },
      {
        "pagePath": "/pages/cart/cart",
        "text": "购物车",
        "icon": "cart-o",
        "num": 0
      },
      {
        "pagePath": "/pages/me/me",
        "text": "我的",
        "icon": "user-o"
      }
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e){
      wx.switchTab({
        url:this.data.tabbarList[e.detail].pagePath,
      })
      this.showNum()
    },
    showNum(){
      this.setData({
        count:0
      })
      const cartList =  wx.getStorageSync('cartList')
      for (let index = 0; index < cartList.length; index++) {
        const element = cartList[index];
        this.setData({
        count:this.properties.count + element.quantity
        
        })
      }
      this.setData({
        'tabbarList[2].num': this.properties.count
      })
      // console.log(this.properties.count);
    }
  }
})
