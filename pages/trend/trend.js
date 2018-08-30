// pages/trend/trend.js
var wxCharts = require('../../utils/wxcharts.js');
var trendChart = null;
var chartData = {
  main: {
    title : 'current',
    data: [100, 102, 150, 99, 135],
    categories: ['1s', '2s', '3s', '4s', '5s']
  }
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
      chartTitle : 'Device Current',
      isMainChartDisplay: true,

      latitude: 24.26,
      longtitude: 118.04,
      markers:[{
        latitude: 24.26,
        longtitude: 118.04,
        name: '厦门ABB',
      }],
      covers:[{
        latitude: 24.26,
        longtitude: 108.04,
        iconPath: '/image/location.png'
      }]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    var wwidth = 320;
    try{
      var res = wx.getSystemInfoSync();
      wwidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed');
    }
    trendChart = new wxCharts({
      canvasId: 'ATScanvas',
      type: 'line',
      categories: chartData.main.categories,
      series: [{
        name: chartData.main.title,
        data: chartData.main.data,
        format: function(val, name){
          return val.toFixed(2) + 'A';
        }
      }],
      yAxis : {
        format : function(val){
          return val + 'A';
        }
      },
      xAxis: {
        disabledGrid : false,
        type: 's'
      },
      extra:{
        column :{
          width: 15,
        },
        legendTextColor: '#000000'
      },
      width: wwidth,
      height:200,
    });
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})