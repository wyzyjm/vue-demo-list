(function () {
    // 监听窗口改变
    window.onresize = function () {
        resize() // 函数
    }
    // 监听文档 加载
    document.addEventListener('DOMContentLoaded', resize)
    // 修改根字体函数
    function resize() {
        var baseSize = 10; // 比例
        var designWidth = 375; // 设计稿宽度
        var width = window.innerWidth // 屏幕宽度
        var currentFotsize = (width / designWidth) * baseSize;  // 当前字体大小
        document.querySelector('html').style.fontSize = currentFotsize + 'px'
    }
})()