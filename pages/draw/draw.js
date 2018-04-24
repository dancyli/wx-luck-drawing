const app = getApp();
var imageUtil = require('../../utils/util.js');

var timer;
var n = 1; 
var which = 1;//中奖项  
var deg; //中奖度数
var luck = [285, 255, 15, 75, 225, 195, 195, 195, 195, 195, 315, 315, 315, 105, 105];//定义奖项 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagewidth: 0, //缩放后的宽 
    imageheight: 0, //缩放后的高
    animationData: {},//动画  
    isclick: "start",//按钮事件
    hiddenModal: true,//弹框是否隐藏
    detail: "", //弹框内容
    noLuck: false,
    isEnd: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  imageLoad: function (e) {
    var imageSize = imageUtil.imageUtil(e)
    this.setData({
      imagewidth: imageSize.imageWidth,
      imageheight: imageSize.imageHeight
    })
  },

  start: function (e) {
    var _this = this;

    // var animation = wx.createAnimation({
    //   transformOrigin: "50% 50%",
    //   duration: 0,
    //   timingFunction: "linear"
    // });
    // animation.rotate(0).step();
    // this.setData({
    //   animationData: animation.export()
    // })

    timer = setInterval(function () {
      //开始旋转  
      // star.call(_this);
      var animation = wx.createAnimation({
        transformOrigin: "50% 50%",
        duration: 300,
        timingFunction: "linear"
      });
      animation.rotate(360 * n).step();
      _this.setData({
        animationData: animation.export()
        // image: "/images/dianji_tingzhi.png"
      })
      //  
      n++;
    }, 300);

    setTimeout(function () {
      _this.stop()
    }, 2000)

  },
  stop: function (e) {
    var _this = this;
    clearInterval(timer);
    timer = null;
    // console.log("结束动画.....");
    sto.call(_this);
    function sto() {
      // console.log("重置动画.....")
      var animation = wx.createAnimation({
        transformOrigin: "50% 50%",
        duration: 1.4 * (2160 - (which - 1) * 60),
        timingFunction: "ease-out"
      });
      deg = Math.ceil(Math.random() * 10) + 4;
      animation.rotate(360 * n + luck[deg]).step();
      console.log(luck[deg])
      this.setData({
        animationData: animation.export(),
        isEnd: true
      })

      _this.getDrawResult(luck[deg]);
      
    }
    
    
  },
  getDrawResult: function(deg)
  {
    var prize = ""
    switch(deg){
      case 285: prize = "iPhoneX一台"; break;
      case 255: prize = "海尔智能对开门冰箱一台"; break;
      case 15: prize = "小米电动滑板车一台"; break;
      case 75: prize = "美的电饭煲一台"; break;
      case 225: prize = "床上四件套"; break;
      case 195: prize = "现金红包5元"; break;
      default:  
        this.setData({
          noLuck: true
        })
        break;
    }
    if(!this.noLuck)
    {
      this.setData({
        detail: prize
      })
    }
    

  }

})