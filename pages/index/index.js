//index.js
//获取应用实例
var imageUtil = require('../../utils/util.js');
const app = getApp()

Page({
  data: {
    imagewidth: 0,//缩放后的宽 
    imageheight: 0//缩放后的高 
  },

  imageLoad: function(e)
  {
    var imageSize = imageUtil.imageUtil(e)
    this.setData({
      imagewidth: imageSize.imageWidth,
      imageheight: imageSize.imageHeight
    })
  },

  joinDraw: function() {
    wx.navigateTo({
      url: '../draw/draw'
    })
  },

  activeDetail: function() {
    wx.navigateTo({
      url: '../detail/detail'
    })
  }
  
})
