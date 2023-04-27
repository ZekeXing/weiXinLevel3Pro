Component({


  /**
   * 组件的属性列表
   */
  properties: {

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
        "num": 2
      },
      {
        "pagePath": "/pages/me/me",
        "text": "我的",
        "icon": "user-o"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {}
})