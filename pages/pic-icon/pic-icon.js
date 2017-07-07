Page({
  data: {
    imgUrls: [
      'https://api.jintao.me/weixin/pic3-1.jpg',
      'https://api.jintao.me/weixin/pic3-2.jpg',
      'https://api.jintao.me/weixin/pic3-3.jpg',
      'https://api.jintao.me/weixin/pic3-4.jpg',
      'https://api.jintao.me/weixin/pic3-5.jpg',
      'https://api.jintao.me/weixin/pic3-6.jpg',
      'https://api.jintao.me/weixin/pic3-7.jpg',
      'https://api.jintao.me/weixin/pic3-8.jpg',
      'https://api.jintao.me/weixin/pic3-9.jpg',
      'https://api.jintao.me/weixin/pic3-10.jpg'
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