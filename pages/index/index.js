//index.js
//获取应用实例
var imageUtil = require('../../utils/util.js');
const app = getApp()

Page({
  data: {
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
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
      url: '../draw/draw',
    })
  }
  
})
