// ==UserScript==
// @name         云学堂自动刷视频
// @namespace    czy
// @version      2.2.1
// @author       czy
// @icon         https://picobd.yxt.com/orgs/yxt_malladmin/mvcpic/image/201811/71672740d9524c53ac3d60b6a4123bca.png
// @match        http://*.yunxuetang.cn/plan/*.html
// @match        http://*.yunxuetang.cn/kng/plan/document/*
// @match        http://*.yunxuetang.cn/kng/view/document/*
// @match        http://*.yunxuetang.cn/kng/plan/video/*
// @match        http://*.yunxuetang.cn/kng/view/video/*
// @match        http://*.yunxuetang.cn/kng/view/package/*
// @match        http://*.yunxuetang.cn/kng/plan/package/*
// @match        http://*.yunxuetang.cn/kng/o2ostudy/video/*
// @match        http://*.yunxuetang.cn/mit/myhomeworkexprience*
// @match        http://*.yunxuetang.cn/kng/course/package/video/*
// @match        http://*.yunxuetang.cn/kng/course/package/document/*
// @match        http://*.yunxuetang.cn/sty/index.htm/*
// @match        http://*.yunxuetang.cn/kng/o2ostudy/document/*
// @match        https://*.yunxuetang.cn/plan/*.html
// @match        https://*.yunxuetang.cn/kng/plan/document/*
// @match        https://*.yunxuetang.cn/kng/view/document/*
// @match        https://*.yunxuetang.cn/kng/plan/video/*
// @match        https://*.yunxuetang.cn/kng/view/video/*
// @match        https://*.yunxuetang.cn/kng/view/package/*
// @match        https://*.yunxuetang.cn/kng/plan/package/*
// @match        https://*.yunxuetang.cn/kng/o2ostudy/video/*
// @match        https://*.yunxuetang.cn/mit/myhomeworkexprience*
// @match        https://*.yunxuetang.cn/kng/course/package/video/*
// @match        https://*.yunxuetang.cn/kng/course/package/document/*
// @match        https://*.yunxuetang.cn/sty/index.htm/*
// @match        https://*.yunxuetang.cn/kng/o2ostudy/document/*
// @match        https://*.yunxuetang.cn/kng/*
// @match        https://*.yunxuetang.cn/mit/*
// @match        https://*.yunxuetang.cn/sty/*
// @match        https://*.yunxuetang.cn/plan/*
// @match        https://*.yunxuetang.cn

// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @license      MIT
// @connect      none
// @require      http://code.jquery.com/jquery-1.11.0.min.js
// ==/UserScript==

(function () {
    function Toast(msg, duration) {
        duration = isNaN(duration) ? 3000 : duration;
        var m = document.createElement('div');
        m.innerHTML = msg;
        m.style.cssText = "font-family:siyuan;max-width:60%;min-width: 150px;padding:0 14px;height: 40px;color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 4px;position: fixed;top: 2%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
        document.body.appendChild(m);
        setTimeout(function() {
            var d = 0.5;
            m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
            m.style.opacity = '0';
            setTimeout(function() {
                document.body.removeChild(m)
            }, d * 1000);
        }, duration);
    }

    //新版本
    let currentTime = ""; //当前播放到的时间
    let playTopTxt = "";//还需 ****可完成本课程学习，加油
    if(document.getElementsByClassName('yxt-color-warning')[0]){
        currentTime = document.getElementsByClassName('yxt-color-warning')[0].innerText;
    }
    if(document.getElementsByClassName('yxtbiz-language-slot ')[0] && document.getElementsByClassName('play-area-title')[0].innerText){
        playTopTxt = document.getElementsByClassName('yxtbiz-language-slot ')[0].innerText;
    }
    //新版本
    Element.prototype.trigger = function(eventName){
        this.dispatchEvent(new Event(eventName));
    }


    setInterval(()=>{//定时器，5秒处理一次
        //触发看视频中的弹框
        Element.prototype.trigger = function(eventName){
            this.dispatchEvent(new Event(eventName));
        }


        //按钮
        for(let i = 0;i<document.getElementsByClassName('yxtf-button').length;i++){
            if(document.getElementsByClassName('yxtf-button')[i].innerText.indexOf('继续学习')>-1){
                document.getElementsByClassName('yxtf-button')[i].trigger('click');}
            if(document.getElementsByClassName('yxtf-button')[i].innerText.indexOf('开始学习')>-1){
                document.getElementsByClassName('yxtf-button')[i].trigger('click');}
            if(document.getElementsByClassName('yxtf-button')[i].innerText.indexOf('暂不评价')>-1){
                document.getElementsByClassName('yxtf-button')[i].trigger('click');}
        }
    },5000)
})();