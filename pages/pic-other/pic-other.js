Page({
  data: {
    imgUrls: [
      'https://api.jintao.me/weixin/pic4-1.jpg',
      'https://api.jintao.me/weixin/pic4-2.jpg',
      'https://api.jintao.me/weixin/pic4-3.jpg',
      'https://api.jintao.me/weixin/pic4-4.jpg',
      'https://api.jintao.me/weixin/pic4-5.jpg',
      'https://api.jintao.me/weixin/pic4-6.jpg',
      'https://api.jintao.me/weixin/pic4-7.jpg',
      'https://api.jintao.me/weixin/pic4-8.jpg',
      'https://api.jintao.me/weixin/pic4-9.jpg',
      'https://api.jintao.me/weixin/pic4-10.jpg'
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