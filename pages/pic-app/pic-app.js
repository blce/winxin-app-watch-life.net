Page({
  data: {
    imgUrls: [
      'https://api.jintao.me/weixin/pic1-1.jpg',
      'https://api.jintao.me/weixin/pic1-2.jpg',
      'https://api.jintao.me/weixin/pic1-3.jpg',
      'https://api.jintao.me/weixin/pic1-4.jpg',
      'https://api.jintao.me/weixin/pic1-5.jpg',
      'https://api.jintao.me/weixin/pic1-6.jpg',
      'https://api.jintao.me/weixin/pic1-7.jpg',
      'https://api.jintao.me/weixin/pic1-8.jpg',
      'https://api.jintao.me/weixin/pic1-9.jpg',
      'https://api.jintao.me/weixin/pic1-10.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 500
  },
  previewImage: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index,
      imgUrls = this.data.imgUrls;
    wx.previewImage({
      current: imgUrls[index],
      urls: imgUrls
    })
  }
})