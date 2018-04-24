var app = getApp();
var imageUtil = require('../../utils/util.js');

Page({

  data: {
    imagewidth: 0,
    imageheight: 0
  },

  imageLoad: function (e) {
    var imageSize = imageUtil.imageUtil(e)
    this.setData({
      imagewidth: imageSize.imageWidth,
      imageheight: imageSize.imageHeight
    })
  },
  backHome: function() {
    wx.navigateBack({
      delta: 1
    })
  },

})