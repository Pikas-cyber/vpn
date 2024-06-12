const crypto = require('crypto');

// 网站名字
var originalTitle = "小飞侠";
// 机场的地址url
var wangzhangurl = "https://xfxssr.com";
// 登录页面背景图
var loginBackgroundImageUrl = 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/56b00087d93a4a84adef69adc1dc2c14~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp';
// 登录后的背景图
var headBackgroundImageUrl = 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/56b00087d93a4a84adef69adc1dc2c14~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp';
// 存储网站授权码  不懂勿动
var license_key;

document.title = originalTitle;

// SHA1哈希函数
function sha1(data) {
    return crypto.createHash('sha1').update(data).digest('hex');
}

// 计算License并更新变量
function calculateLicense() {
    const firstHash = sha1(wangzhangurl);
    const combined = firstHash + "1145141919";
    license_key = sha1(combined); // 直接更新license_key变量
}

calculateLicense();

function updateBackgroundImage(elementClass, imageUrl) {
    var elements = document.querySelectorAll(elementClass);
    elements.forEach(function(elem) {
        elem.style.backgroundImage = 'url("' + imageUrl + '")';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // 初始设置背景图像
    updateBackgroundImage('.head___1MReR', headBackgroundImageUrl);
    updateBackgroundImage('.login___SuG13', loginBackgroundImageUrl);

    // 每隔5秒更新背景图像
    setInterval(function() {
        updateBackgroundImage('.head___1MReR', headBackgroundImageUrl);
        updateBackgroundImage('.login___SuG13', loginBackgroundImageUrl);
    }, 5000); // 5000毫秒 = 5秒
});

// CRISP 客服
window.$crisp = [];
window.CRISP_WEBSITE_ID = ""; // 填写 Crisp ID
(function () {
  d = document;
  s = d.createElement("script");
  s.src = "https://client.crisp.chat/l.js";
  s.async = 1;
  d.getElementsByTagName("head")[0].appendChild(s);
})();
