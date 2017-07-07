Page({
  data: {
    imgUrls: [
      'https://api.jintao.me/weixin/pic2-1.jpg',
      'https://api.jintao.me/weixin/pic2-2.jpg',
      'https://api.jintao.me/weixin/pic2-3.jpg',
      'https://api.jintao.me/weixin/pic2-4.jpg',
      'https://api.jintao.me/weixin/pic2-5.jpg',
      'https://api.jintao.me/weixin/pic2-6.jpg',
      'https://api.jintao.me/weixin/pic2-7.jpg',
      'https://api.jintao.me/weixin/pic2-8.jpg',
      'https://api.jintao.me/weixin/pic2-9.jpg',
      'https://api.jintao.me/weixin/pic2-10.jpg'
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