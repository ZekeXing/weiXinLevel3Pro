const baseUrl = "http://kumanxuan1.f3322.net:8001";

export default function request(url, params = {}) {

  return new Promise(function (resolve, reject) {

    wx.showLoading({
      title: '加载中···',
    })

    //封装携带header信息
    let token = wx.getStorageSync('token')
    var defaultHeader = {}
    if (token) {
      if (params.header) {
        params.header['X-Nideshop-Token'] = token
      } else {
        defaultHeader = {
          'X-Nideshop-Token':token
        }
      }
    }

    wx.request({
      url: baseUrl + url,
      data: params.data || {},
      header: params.header || {},
      method: params.method || 'GET',
      dataType: 'json',
      success: function (res) {
        wx.hideLoading();

        if (res.data.errno == 0) {
          resolve(res.data)
        } else {
          wx.showToast({
            title: res.data.errmsg,
            duration: 2000,
            icon: "error"
          })
        }
      },
      fail: function (err) {
        wx.hideLoading();
        wx.showToast({
          title: err || '请求错误'
        })
        reject(err)
      }
    })

  })
}