import{LoginApi} from '../utils/api'
Page({

  data: {
    username: wx.getStorageSync('token') ? JSON.parse(wx.getStorageSync('userInfo')).nickname : '点击登录',
    avatar: wx.getStorageSync('token') ? JSON.parse(wx.getStorageSync('userInfo')).avatar : '../../pages/asset/image/avatar.jpg',
    iconList: [{
        icon: 'orders-o',
        text: '我的订单'
      },
      {
        icon: 'bill-o',
        text: '优惠券'
      },

      {
        icon: 'goods-collect-o',
        text: '我的收藏'
      },
      {
        icon: 'location-o',
        text: '我的足迹'
      },

      {
        icon: 'todo-list-o',
        text: '地址管理'
      },
      {
        icon: 'shield-o',
        text: '账号安全'
      },
      {
        icon: 'phone-circle-o',
        text: '联系客服'
      },
      {
        icon: 'question-o',
        text: '帮助中心'
      },
      {
        icon: 'smile-comment-o',
        text: '意见反馈'
      }

    ],
    isLoginPopup: false,
    userpass_error: false,
    username_error: false,
    login_username: '',
    login_password: '',
    isLogined: wx.getStorageSync('token'),
    isShowLogoutDialog: false
  },
  goLogin() {
    this.setData({
      isLoginPopup: true
    })
  },
  goLogout() {
    if(!this.data.isLogined){
      return
    }
    this.setData({
      isShowLogoutDialog:true
    })
  },
  isLogoutOK() {
    wx.clearStorageSync()
    this.setData({
      isLogined:false,
      username:'点击登录',
      avatar:'../asset/image/avatar.jpg'
    })

  },
  async login() {
    //this.setData({
    //  isLoginPopup:false
    //})
    if (!this.data.login_username) {
      this.setData({
        username_error: true

      })
      return

    }
    if (!this.data.login_password) {
      this.setData({
        userpass_error: true

      })
      return
    }
    let res = await LoginApi({
      method:'POST',
      data:{
        username: this.data.login_username,
        pwd: this.data.login_password
      }

    })
    console.log(res.data)

    wx.showToast({
      title: '登录成功',
      icon:'success',
      mask:true
    })
    //4.token和userInfo保存
    wx.setStorageSync('token',res.data.token)
    wx.setStorageSync('userInfo',JSON.stringify(res.data.userInfo))
    //5.更新状态
    setTimeout(()=>{
      this.setData({
      isLoginPopup:false,
      username:res.data.userInfo.nickname,
      avatar:res.data.userInfo.avatar,
      isLogined:true,
      login_username:'',
      login_password:''
    })
    },1500);

    //6 返回上一页
    if(getApp().globalData.isBack === true) {
      if(getApp().globalData.isFromTabbar === true){
        wx.switchTab({
          url: getApp().globalData.prevRoute,
        })
      }else{
        wx.navigateTo({
          url: getApp().globalData.prevRoute,
        })
      }
      getApp().globalData.isBack = false
    }
    
    //wx.request({
    //  url: 'http://kumanxuan1.f3322.net:8001/auth/loginByWeb', //接口地址
    //  data: {
    //    username: this.data.login_username,
    //    pwd: this.data.login_password
    //  },
    //  method:'POST',
    //  header: {
    //    'content-type': 'application/json' // 默认值
    //  },
    //  success(res) {
    //    const data = res.data
    //    console.log(res.data.token)
    //  }
    // })
  },
  onClose() {
    this.setData({
      isLoginPopup:false
    })
  },
  onInputUsername(e) {
    this.setData({
      login_username: e.detail,
      username_error: e.detail.trim() === ''

    })
  },
  onInputPassword(e) {
    this.setData({
      login_password: e.detail,
      userpass_error: e.detail.trim() === ''

    })
  },

  onShow: function () {
    this.getTabBar().setData({
      active: 3
    })
  },
})