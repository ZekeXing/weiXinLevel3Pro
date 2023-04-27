Component({
  properties:{
    goodsList:{
      type:Array,
      value:[]
    }
  },
  methods:{
    goDetail(e){
      wx.navigateTo({
        url: `/pages/detail/detail?id=${e.currentTarget.id}`,
      })
    }
  }
})