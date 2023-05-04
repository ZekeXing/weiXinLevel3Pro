export default ()=>{
  let token = wx.getStorageSync('token')

  let pages = getCurrentPages()

  let prevRoute = "/" + pages[pages.length - 1].route

  if(prevRoute === "/pages/detail/detail"){
    prevRoute += "?id="+ getApp().globalData.detailId
  }

  if(!token){
    getApp().globalData.prevRoute = prevRoute
    getApp().globalData.isBack = true
    getApp().globalData.isFromTabbar = false

    wx.showToast({
      title: '请先登录',
      icon:'success',
      mask:true
    })
    setTimeout(()=>{
    wx.switchTab({
      url: '/pages/me/me',
      })
    },1500);
    return true
  }
  return false
}