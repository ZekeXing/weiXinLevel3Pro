// pages/cate/cate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsId: 11,
    active: 0, // 当前选中的分类索引
    per: ['全部商品', '手机产品', '时尚耳机', '数码电子', '家用电器', '食品生鲜', '酒水饮料', '生活美食', '美妆护肤', '个护清洁', '母婴用品', '运动户外', '家居家装', '家具家纺', '男装', '女装', '内衣配饰', '汽车用品', '书籍文娱'], // 商品分类数组
    goodsList: [{
        id: 0,
        title: "（HUAWEI）P30",
        titleTwo: "超感光徕卡三摄|逆光智美自拍",
        price: "4288.00",
        image: "https://res.vmallres.com/pimages//product/6901443293513/800_800_1555464685019mp.png"
      },
      {
        id: 1,
        title: "（HUAWEI）荣耀V20",
        titleTwo: "魅眼视屏4800万深感相机",
        price: "3699.00",
        image: "//img12.360buyimg.com/n7/jfs/t25954/134/1930444050/488286/31587d0d/5bbf1fc9N3ced3749.jpg"

      },
      {
        id: 2,
        title: "IE80S入耳式监听耳机",
        titleTwo: "森海塞尔HiFi音乐耳机",
        price: "2399.00",
        image: "https://images.wincheers.net/UpLoad/Web/ProductImg/2018-06-15/NEW_XM/IE80S.jpg"

      },
      {
        id: 3,
        title: "IE60入耳式HiFi耳机",
        titleTwo: "森海塞尔入耳式HIFI耳机",
        price: "799.00",
        image: "https://images.wincheers.net/UpLoad/Web/ProductImg/2017-08-14/NEW_XM/IE-60-4.png"
      }, {
        id: 4,
        title: "Apple iPhone 12",
        titleTwo: "A14仿生芯片 | 6.1英寸超视网膜XDR屏幕",
        price: "7999.00",
        image: "https://www.apple.com.cn/v/iphone-14/g/images/key-features/features/size/size_yellow__dnv9794q7loy_large.jpg"
      },
      {
        id: 5,
        title: "Samsung Galaxy S21",
        titleTwo: "Exynos 2100芯片 | 6.2英寸120Hz屏幕",
        price: "5499.00",
        image: "https://bkimg.cdn.bcebos.com/pic/b21bb051f8198618367a6b2a08a239738bd4b31c4847?x-bce-process=image/resize,m_lfit,w_536,limit_1"
      },
      {
        id: 6,
        title: "Xiaomi Mi 11",
        titleTwo: "骁龙888芯片 | 2K WQHD+ AMOLED屏幕",
        price: "3999.00",
        image: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1681726094.73687921.png"
      },
      {
        id: 7,
        title: "OnePlus 9 Pro",
        titleTwo: "骁龙888芯片 | 120Hz Fluid AMOLED屏幕",
        price: "5999.00",
        image: "https://oasisstatics.oneplus.cn/content/dam/oasis/page/2021/9-series/spec-image/9-pro/Pine%20green-gallery..png"
      },
      {
        id: 8,
        title: "vivo X60 Pro",
        titleTwo: "Exynos 1080芯片 | 120Hz AMOLED屏幕",
        price: "4498.00",
        image: "//img12.360buyimg.com/n7/jfs/t25954/134/1930444050/488286/31587d0d/5bbf1fc9N3ced3749.jpg"
      },
      {
        id: 9,
        title: "OPPO Find X3 Pro",
        titleTwo: "骁龙888芯片 | 120Hz AMOLED屏幕",
        price: "5999.00",
        image: "https://bkimg.cdn.bcebos.com/pic/b21bb051f8198618367a6b2a08a239738bd4b31c4847?x-bce-process=image/resize,m_lfit,w_536,limit_1"
      },
      {
        id: 10,
        title: "华为Mate 40 Pro",
        titleTwo: "麒麟9000芯片 | 6.76英寸OLED屏幕",
        price: "6999.00",
        image: "//img12.360buyimg.com/n7/jfs/t25954/134/1930444050/488286/31587d0d/5bbf1fc9N3ced3749.jpg"
      },
      {
        id: 11,
        title: "小米10 至尊纪念版",
        titleTwo: "骁龙865芯片 | 120Hz AMOLED屏幕",
        price: "5299.00",
        image: "https://bkimg.cdn.bcebos.com/pic/b21bb051f8198618367a6b2a08a239738bd4b31c4847?x-bce-process=image/resize,m_lfit,w_536,limit_1"
      },
      {
        id: 12,
        title: "荣耀V40",
        titleTwo: "麒麟985芯片 | 120Hz OLED屏幕",
        price: "3599.00",
        image: "//img12.360buyimg.com/n7/jfs/t25954/134/1930444050/488286/31587d0d/5bbf1fc9N3ced3749.jpg"
      },
      {
        id: 13,
        title: "Realme GT",
        titleTwo: "骁龙888芯片 | 120Hz Super AMOLED屏幕",
        price: "2799.00",
        image: "//img12.360buyimg.com/n7/jfs/t25954/134/1930444050/488286/31587d0d/5bbf1fc9N3ced3749.jpg"
      }
    ],
    selector: []

  },
  changeNav(e) {
    const index = e.currentTarget.dataset.index;
    this.select(index)
    this.setData({
      active: index
    })
  },
  select(index){
    if(index == 0 ){
      this.setData({
        selector : this.data.goodsList
      })
    }
    else if(index == 1){
      
      this.setData({
        selector : this.data.goodsList.filter(item => !item.title.includes('耳机'))
      })
    }else if(index == 2){
      this.setData({
        selector : this.data.goodsList.filter(item => item.title.includes('耳机'))

      })
    }else{
      this.setData({
        selector : []

      })
    }
  },
  btnJumpDetail(e) {
    wx.navigateTo({
      // url: '/pages/detail/detail?goodsId=10001',
      url: '/pages/detail/detail?goodsId=' + e.currentTarget.dataset.cart.id,
    })
  },
  startAuth(e) {
    wx.checkIsSupportSoterAuthentication({
      success: (res) => {
        checkEnrolledSoter()
      },
      fail: (err) => {
        wx.showModal({
          title: '指纹检测',
          content: '您的设备不支持',
          complete: (res) => {
            if (res.cancel) {

            }

            if (res.confirm) {

            }
          }
        })
      }
    })
    const checkEnrolledSoter = () => {
      wx.checkIsSoterEnrolledInDevice({
        checkAuthMode: 'fingerPrint',
        success(res) {
          if (res.isEnrolled) {
            wx.startSoterAuthentication({
              challenge: 'challenge',
              requestAuthModes: ['fingerPrint', 'facial'],
              success(res) {
                wx.showToast({
                  title: '认证成功',
                })
                wx.switchTab({
                  url: '/pages/index/index',
                })
              }
            })
          } else {
            wx.showModal({
              title: '生物信息检测',
              content: '设备未录入生物认证信息',
              complete: (res) => {
                if (res.cancel) {

                }

                if (res.confirm) {

                }
              }
            })
          }
        }
      })
    }
  },
  syncGoodsId(e) {
    // console.log(e.detail)
    this.setData({
      goodsId: e.detail.value
    })
  },
  tapGetChild(e) {
    //this.selectComponent()获取子组件实例
    //使用class获取子组件实例需要.class
    //使用id获取子组件实例需要#id
    const child = this.selectComponent(".child")
    //const child = this.selectComponent("#child")
    child.setData({
      goodsId: child.properties.goodsId + 1
    })
    child.tapGoodsId()
  },
  onShow() {
    this.getTabBar().setData({
      active: 1
      
    })
    this.setData({
      selector: this.data.goodsList
    })
  },
})