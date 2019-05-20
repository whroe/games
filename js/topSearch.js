/**
 * 顶部固定搜索框
 * 2019-05-16 by 石公子
 * 参数说明:
 *      imgUrl:      搜索小icon地址
 *      searchText:  搜索提示文字
 */
$(function () {
    // 暴露出去
    window.createTopSearch = function (options) {
        // 定义变量 保存顶部搜索框
        var $searchHtml = $(`<div class="top-search-box">
                            <div class="search-box">
                                <input class="search" placeholder="${options.searchText}" type="text">
                            </div>
                          </div>`);
        
        // 给搜索框设置样式
        $searchHtml.css({
            width: '100%',
            height: '50px',
            lineHeight: '50px',
            backgroundColor: 'rgba(255, 123, 0, .8)',
            position: 'fixed',
            top: 0,
            left: 0,
            display: 'none'
        })
        $searchHtml.find('.search-box').css({
            width: '400px',
            height: '30px',
            lineHeight: '30px',
            backgroundColor: '#ff6700',
            margin: '10px auto',
            backgroundImage: `url("${options.imgUrl}")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '356px -2px'
        })
        $searchHtml.find('input').css({
            height: '26px',
            width: '360px',
            border: '2px solid #ff6700',
            outline: 'none',
            textIndent: '10px'
        })

        /* 顶部搜索框交互 */
        $(document).scroll(function () {
            // 获取到顶部的距离
            var topDistance = $('html, body').scrollTop();
            // 判断
            if (topDistance > 500) {
                // 如果滚动距离大于500 滑下来
                $('.top-search-box').slideDown(300)
            } else {
                // 否则 收回去
                $('.top-search-box').slideUp(300)
            }
        })

        // 添加到body
        $('body').append($searchHtml)
    }
})