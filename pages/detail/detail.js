// pages/detail/detail.js
import loginAuth from '../utils/loginAuth'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    attribute: [{
        "name": "规格尺寸",
        "value": "方形：380*380*30mm\n圆形：φ380*30mm"
      },

      {
        "name": "填充物",
        "value": "聚氨酯"
      },

      {
        "name": "填充物重量",
        "value": "方形：185g\n圆形：155g"
      },

      {

        "name": "面料",

        "value": "100%聚酯纤维"

      },

      {

        "name": "执行标准",

        "value": "GB/T 22843-2009"

      },

      {

        "name": "安全技术类别",

        "value": "GB18401-2010 B类"

      }

    ],

    gallery: [

      {

        "goods_id": 1134032,

        "id": 577,

        "img_desc": "",

        "img_url": "http://yanxuan.nosdn.127.net/5a9050413ef325301e5e5b6bfdcc4b58.jpg",

        "sort_order": 5

      },

      {

        "goods_id": 1134032,

        "id": 578,

        "img_desc": "",

        "img_url": "http://yanxuan.nosdn.127.net/e866882f7bb9acde7c4e1d00171741f9.jpg",

        "sort_order": 5

      },

      {

        "goods_id": 1134032,

        "id": 579,

        "img_desc": "",

        "img_url": "http://yanxuan.nosdn.127.net/23947cb71c6c2f9635b53da910ac788d.jpg",

        "sort_order": 5

      },

      {

        "goods_id": 1134032,

        "id": 580,

        "img_desc": "",

        "img_url": "http://yanxuan.nosdn.127.net/bf80a04940ae1cd3e6c584d26fdee6ed.jpg",

        "sort_order": 5

      }

    ],

    goodsList: [

      {

        "id": 1009024,

        "list_pic_url": "http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png",

        "name": "日式和风懒人沙发",

        "retail_price": 599

      },

      {

        "id": 1015007,

        "list_pic_url": "http://yanxuan.nosdn.127.net/a2045004de8a6225289376ad54317fc8.png",

        "name": "典雅美式全棉刺绣抱枕",

        "retail_price": 59

      },

      {

        "id": 1020000,

        "list_pic_url": "http://yanxuan.nosdn.127.net/819fdf1f635a694166bcfdd426416e8c.png",

        "name": "升级款记忆绵护椎腰靠",

        "retail_price": 79

      },

      {

        "id": 1030001,

        "list_pic_url": "http://yanxuan.nosdn.127.net/88dc5d80c6f84102f003ecd69c86e1cf.png",

        "name": "160*230羊毛手工地毯",

        "retail_price": 969

      },

      {

        "id": 1030002,

        "list_pic_url": "http://yanxuan.nosdn.127.net/8b9328496990357033d4259fda250679.png",

        "name": "160*230羊毛圈绒枪刺地毯",

        "retail_price": 899

      },

      {

        "id": 1030003,

        "list_pic_url": "http://yanxuan.nosdn.127.net/1d1ab099dc0e254c15e57302e78e200b.png",

        "name": "160*230羊毛手工几何地毯",

        "retail_price": 1469

      },

      {

        "id": 1035006,

        "list_pic_url": "http://yanxuan.nosdn.127.net/ee92704f3b8323905b51fc647823e6e5.png",

        "name": "全棉单面割绒浴室地垫",

        "retail_price": 56

      },

      {

        "id": 1039051,

        "list_pic_url": "http://yanxuan.nosdn.127.net/c8ca0600fa7ba11ca8be6a3173dd38c9.png",

        "name": "多功能午睡枕",

        "retail_price": 79

      }

    ],

    info: {

      "add_time": 0,

      "app_exclusive_price": 0,

      "attribute_category": 0,

      "brand_id": 0,

      "category_id": 1008002,

      "counter_price": 0,

      "extra_price": 0,

      "goods_brief": "慢回弹海绵的呵护，萌趣添彩。",

      "goods_desc": "<p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/ecbd6f05e8fc71571d889324e2f0dcad.jpg\" _src=\"http://yanxuan.nosdn.127.net/ecbd6f05e8fc71571d889324e2f0dcad.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/bcdbec6d1b2ff457a0e7513df91563f0.jpg\" _src=\"http://yanxuan.nosdn.127.net/bcdbec6d1b2ff457a0e7513df91563f0.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/dcb21741c5c773e06cf4502925c81944.jpg\" _src=\"http://yanxuan.nosdn.127.net/dcb21741c5c773e06cf4502925c81944.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/86ffdbf55ae77e3c21a07a70445deda8.jpg\" _src=\"http://yanxuan.nosdn.127.net/86ffdbf55ae77e3c21a07a70445deda8.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/598afa2e998b37d2c7513e7ab3a3ab73.jpg\" _src=\"http://yanxuan.nosdn.127.net/598afa2e998b37d2c7513e7ab3a3ab73.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/91dc47775ce962a1c2a7ac5e620f058c.jpg\" _src=\"http://yanxuan.nosdn.127.net/91dc47775ce962a1c2a7ac5e620f058c.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/394b2bd47066e301a2144ab56b3b3350.jpg\" _src=\"http://yanxuan.nosdn.127.net/394b2bd47066e301a2144ab56b3b3350.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/80dd29542f2ecd571db647486cda4e9f.jpg\" _src=\"http://yanxuan.nosdn.127.net/80dd29542f2ecd571db647486cda4e9f.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/2a5edf27fe34192ed741ee8b011e8bcc.jpg\" _src=\"http://yanxuan.nosdn.127.net/2a5edf27fe34192ed741ee8b011e8bcc.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/d2ee6fd1f0893f6c033b27f7353d1622.jpg\" _src=\"http://yanxuan.nosdn.127.net/d2ee6fd1f0893f6c033b27f7353d1622.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/e11dd4cdab417eba665e0ad4ebc9243e.jpg\" _src=\"http://yanxuan.nosdn.127.net/e11dd4cdab417eba665e0ad4ebc9243e.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/feb11e4b1fb22d07533f11b59d6e602f.jpg\" _src=\"http://yanxuan.nosdn.127.net/feb11e4b1fb22d07533f11b59d6e602f.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/5094e4cf95940490ffccfad5db698301.jpg\" _src=\"http://yanxuan.nosdn.127.net/5094e4cf95940490ffccfad5db698301.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/b0f9af05048828816c9a774124509dd0.jpg\" _src=\"http://yanxuan.nosdn.127.net/b0f9af05048828816c9a774124509dd0.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/82020ae739c4ba0957db83b22c102673.jpg\" _src=\"http://yanxuan.nosdn.127.net/82020ae739c4ba0957db83b22c102673.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/09789518f58c163313d5d4b190888500.jpg\" _src=\"http://yanxuan.nosdn.127.net/09789518f58c163313d5d4b190888500.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/3d155f2f1d12b54e5dfc83e3d3496dc2.jpg\" _src=\"http://yanxuan.nosdn.127.net/3d155f2f1d12b54e5dfc83e3d3496dc2.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/44d1b96c7810379c6b48d58e637cba55.jpg\" _src=\"http://yanxuan.nosdn.127.net/44d1b96c7810379c6b48d58e637cba55.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/c2075c17cf5c447d27c89f23d2d63462.jpg\" _src=\"http://yanxuan.nosdn.127.net/c2075c17cf5c447d27c89f23d2d63462.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/3985bdbdb5899bee08137ab2300f3810.jpg\" _src=\"http://yanxuan.nosdn.127.net/3985bdbdb5899bee08137ab2300f3810.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/fe8a47c8056ed17d6e08ac715d3aee93.jpg\" _src=\"http://yanxuan.nosdn.127.net/fe8a47c8056ed17d6e08ac715d3aee93.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/31f98b129c846c333bb95db48c434271.jpg\" _src=\"http://yanxuan.nosdn.127.net/31f98b129c846c333bb95db48c434271.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/857e3041c75f5ffb2eeb394ca9e1211d.jpg\" _src=\"http://yanxuan.nosdn.127.net/857e3041c75f5ffb2eeb394ca9e1211d.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/b04c0a98d696e3ba0a37857bcca5ca4d.jpg\" _src=\"http://yanxuan.nosdn.127.net/b04c0a98d696e3ba0a37857bcca5ca4d.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/33a9842b9e01b0629d56a4ae725611a1.jpg\" _src=\"http://yanxuan.nosdn.127.net/33a9842b9e01b0629d56a4ae725611a1.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/296263f5dc5e365662203331a940d058.jpg\" _src=\"http://yanxuan.nosdn.127.net/296263f5dc5e365662203331a940d058.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/25e32af7a35f9c3b1105d5e1dc163e8b.jpg\" _src=\"http://yanxuan.nosdn.127.net/25e32af7a35f9c3b1105d5e1dc163e8b.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/6efac795f3b6207cf090846887461d65.jpg\" _src=\"http://yanxuan.nosdn.127.net/6efac795f3b6207cf090846887461d65.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/e9b1e2e1c90d1481c83460ff71eaa47e.jpg\" _src=\"http://yanxuan.nosdn.127.net/e9b1e2e1c90d1481c83460ff71eaa47e.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/7ab77215a79e8d9cc93304ec139af08e.jpg\" _src=\"http://yanxuan.nosdn.127.net/7ab77215a79e8d9cc93304ec139af08e.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/5eaab9336750bddb5a88fddfae7d2fbd.jpg\" _src=\"http://yanxuan.nosdn.127.net/5eaab9336750bddb5a88fddfae7d2fbd.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/e7046719cdf72538e69b0313587c8565.jpg\" _src=\"http://yanxuan.nosdn.127.net/e7046719cdf72538e69b0313587c8565.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/748836f2589106b87efec1c6be06f93d.jpg\" _src=\"http://yanxuan.nosdn.127.net/748836f2589106b87efec1c6be06f93d.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/40da8c4bed171c0fbfa9f2089a2309d7.jpg\" _src=\"http://yanxuan.nosdn.127.net/40da8c4bed171c0fbfa9f2089a2309d7.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/468ed6ff0bbee10ba15467bb7b75c202.jpg\" _src=\"http://yanxuan.nosdn.127.net/468ed6ff0bbee10ba15467bb7b75c202.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/e2e1f9262f85b3301a6c9780acfcbb75.jpg\" _src=\"http://yanxuan.nosdn.127.net/e2e1f9262f85b3301a6c9780acfcbb75.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/3ef0c70c73bff6274be4c562e88a7d6f.jpg\" _src=\"http://yanxuan.nosdn.127.net/3ef0c70c73bff6274be4c562e88a7d6f.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/720c18b1bd787c125d59aa8f8f4c8e61.jpg\" _src=\"http://yanxuan.nosdn.127.net/720c18b1bd787c125d59aa8f8f4c8e61.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/cc80af1a2b58ac83a5d65cb3fa02f3db.jpg\" _src=\"http://yanxuan.nosdn.127.net/cc80af1a2b58ac83a5d65cb3fa02f3db.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/98d647cacddc7bdd7eae86050eb9f3d0.jpg\" _src=\"http://yanxuan.nosdn.127.net/98d647cacddc7bdd7eae86050eb9f3d0.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/a091331dc2412de558446a42831b0358.jpg\" _src=\"http://yanxuan.nosdn.127.net/a091331dc2412de558446a42831b0358.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/bd6126e6eb2a4e493104f75ecbeb6e32.jpg\" _src=\"http://yanxuan.nosdn.127.net/bd6126e6eb2a4e493104f75ecbeb6e32.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/3d15ad6abec2f8c499c0d9d036a8b524.jpg\" _src=\"http://yanxuan.nosdn.127.net/3d15ad6abec2f8c499c0d9d036a8b524.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/69a56acc851dd042a52f18c78ac8ee33.jpg\" _src=\"http://yanxuan.nosdn.127.net/69a56acc851dd042a52f18c78ac8ee33.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/c8bde0e10b1e089088ca38fd77fbf994.jpg\" _src=\"http://yanxuan.nosdn.127.net/c8bde0e10b1e089088ca38fd77fbf994.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/bd9ffb9b37957549689ece880fc78b2f.jpg\" _src=\"http://yanxuan.nosdn.127.net/bd9ffb9b37957549689ece880fc78b2f.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/09ad556caef32a5c951dc7fbad1f8de3.jpg\" _src=\"http://yanxuan.nosdn.127.net/09ad556caef32a5c951dc7fbad1f8de3.jpg\" style=\"\"/></p><p><img class=\"img\" src=\"http://yanxuan.nosdn.127.net/a919f989730d977f8b1745b5dc0e6a8d.jpg\" _src=\"http://yanxuan.nosdn.127.net/a919f989730d977f8b1745b5dc0e6a8d.jpg\" style=\"\"/></p><p><br/></p>",

      "goods_number": 100,

      "goods_sn": "1134032",

      "goods_unit": "件",

      "id": 1134032,

      "is_app_exclusive": 0,

      "is_delete": 0,

      "is_hot": 0,

      "is_limited": 0,

      "is_new": 1,

      "is_on_sale": 1,

      "keywords": "",

      "list_pic_url": "http://yanxuan.nosdn.127.net/8b30eeb17c831eba08b97bdcb4c46a8e.png",

      "name": "趣味粉彩系列记忆棉坐垫",

      "primary_pic_url": "http://yanxuan.nosdn.127.net/5357e0476acbc71131df5a3fb3ea13d9.jpg",

      "primary_product_id": 1135151,

      "promotion_desc": "限时购",

      "promotion_tag": "",

      "retail_price": 49,

      "sell_volume": 2869,

      "sort_order": 13,

      "unit_price": 0

    },

    isCollected: false,
    isShowed: false,
    issue: [

      {

        "answer": "单笔订单金额（不含运费）满88元免邮费；不满88元，每单收取10元运费。\n(港澳台地区需满",

        "goods_id": "1127052",

        "id": 1,

        "question": "购买运费如何收取？"

      },

      {

        "answer": "严选默认使用顺丰快递发货（个别商品使用其他快递），配送范围覆盖全国大部分地区（港澳台地区除",

        "goods_id": "1127052",

        "id": 2,

        "question": "使用什么快递发货？"

      },

      {

        "answer": "1.自收到商品之日起30日内，顾客可申请无忧退货，退款将原路返还，不同的银行处理时间不同，",

        "goods_id": "1127052",

        "id": 3,

        "question": "如何申请退货？"

      },

      {

        "answer": "1.如需开具普通发票，请在下单时选择“我要开发票”并填写相关信息（APP仅限2.4.0及以",

        "goods_id": "1127052",

        "id": 4,

        "question": "如何开具发票？"

      }

    ],
    productList: [{
      "goods_id": 1134032,
      "goods_number": 100,
      "goods_sn": "1134032",
      "goods_specification_ids": "",
      "id": 199,
      "retail_price": 49
    }],
    stepNum: "",
    bying: false,
    cartList: []

  },

  onShowPopup(e) {
    this.setData({
      isShowed: true
    })
  },
  // searchGoods() {
  //   for (let index = 0; index < this.data.goodsList.length; index++) {
  //     const element = this.data.goodsList[index];
  //     console.log( element.id);
  //     if(this.data.info.category_id == element.id)console.log(element);
  //   }
  // },
  onClosePopup(e) {
    // this.searchGoods()
    const cartList = this.data.goodsList.map(item => {
      return {
        ...item,
        quantity: this.data.stepNum
      }
    })
    this.setData({
      isShowed: false,
      bying: false,
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
})