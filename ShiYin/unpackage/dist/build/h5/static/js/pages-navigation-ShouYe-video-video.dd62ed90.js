(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-navigation-ShouYe-video-video"],{"02f2":function(t,i,e){var o=e("24fb");i=o(!1),i.push([t.i,".container[data-v-71639610]{background-color:#000}.item[data-v-71639610]{\n\t\t/* width : 750rpx; */background-color:#000;position:relative}.videoHover[data-v-71639610]{position:absolute;top:0;left:0;flex:1;background-color:rgba(0,0,0,.1);justify-content:center;align-items:center\n\t\t\n\t\t/* border-style: dashed;\n\t\tborder-color: #DD524D;\n\t\tborder-width: 1px; */}.playState[data-v-71639610]{width:%?160?%;height:%?160?%;opacity:.2}.userInfo[data-v-71639610]{position:absolute;bottom:110px;right:10px;flex-direction:column}.userAvatar[data-v-71639610]{border-radius:500%;margin-bottom:15px;border-style:solid;border-width:2px;border-color:#fff}.userAvatar[data-v-71639610]{width:%?100?%;height:%?100?%}.likeIco[data-v-71639610],.shareIco[data-v-71639610],.commentIco[data-v-71639610]{width:%?60?%;height:%?60?%;margin-top:15px}.likeNum[data-v-71639610],.commentNum[data-v-71639610],.shareTex[data-v-71639610]{color:#fff;font-size:%?30?%;text-align:center;margin:5px}.likeNumActive[data-v-71639610]{color:red}.content[data-v-71639610]{width:%?720?%;z-index:99;position:absolute;bottom:30px;\n\t  /* justify-content: center; */padding:%?15?%;flex-direction:column;justify-content:flex-start;color:#fff}.userName[data-v-71639610]{font-size:%?30?%;color:#fff;margin-top:%?80?%}.words[data-v-71639610]{margin-top:%?10?%;font-size:%?30?%;color:#fff}.root[data-v-71639610]{background-color:#000}",""]),t.exports=i},1390:function(t,i,e){t.exports=e.p+"static/img/logins.de338a55.gif"},"231f":function(t,i,e){"use strict";e.r(i);var o=e("3b0a"),a=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(i,t,(function(){return o[t]}))}(s);i["default"]=a.a},"3b0a":function(t,i,e){"use strict";e("99af"),e("a9e3"),e("e25e"),e("ac1f"),e("1276"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o={data:function(){return{dataList:[],wHeight:0,boxStyle:{height:0,width:0},k:0,playIngIds:[],ready:!1,isDragging:!1,refreshing:!0,windowWidth:0,windowHeight:0,dex:[0,0],currents:0,platform:"",playIng:!1,videoTime:"",videoTimes:"",changeTime:"",isShowimage:!1,currenttimes:0,isShowProgressBarTime:!1,ProgressBarOpacity:.7,dotWidth:0,deleteHeight:0,percent:0,currentPosition:0,currentPositions:0,newTime:0,timeNumber:0,ProgressBarBottom:20,object_fit:"contain",mode:"aspectFit",timeout:"",voice:"",oldVideo:"",isAutoplay:!1,autoplayText:"开启自动播放",timers:"",heightNum:1.18,touchNum:0,aixinLeft:0,aixinTop:0,isShowAixin:!1,Rotate:0}},watch:{k:function(t,i){var e=this;console.log(t),this.dataList[i].state="stop",this.dataList[i].playIng=!1,this.dataList[i].isplay=!0,uni.createVideoContext(this.dataList[i]._id,this).play(),clearTimeout(this.oldVideo),this.oldVideo=setTimeout((function(){uni.createVideoContext(e.dataList[i]._id,e).seek(0),uni.createVideoContext(e.dataList[i]._id,e).pause(),console.log("预留第"+(i+1)+"个视频："+e.dataList[i]._id)}),500),uni.createVideoContext(this.dataList[t]._id,this).play(),console.log("已经暂停 --\x3e 第"+(i+1)+"个视频～"),clearTimeout(this.voice),this.voice=setTimeout((function(){e.dataList[t].isplay=!1}),300),setTimeout((function(){e.dataList[t].playIng=!0}),850);var o=t;++o,setTimeout((function(){uni.createVideoContext(e.dataList[o]._id,e).play()}),20),clearTimeout(this.timeout),this.timeout=setTimeout((function(){uni.createVideoContext(e.dataList[o]._id,e).seek(0),uni.createVideoContext(e.dataList[o]._id,e).pause(),console.log("预加载第"+(o+1)+"个视频："+e.dataList[o]._id)}),1500)}},onShow:function(){console.log("回到前台"),0!==this.dataList.length&&(this.dataList[this.k].state="play",uni.createVideoContext(this.dataList[this.k]._id,this).play())},onHide:function(){this.dataList[this.k].state="pause",uni.createVideoContext(this.dataList[this.k]._id,this).pause(),console.log("到后台")},onLoad:function(){this.platform=uni.getSystemInfoSync().platform;var t=uni.getSystemInfoSync().model;"ios"!=this.platform||"iPhone6"===t&&"iPhone6s"===t&&"iPhone7"===t&&"iPhone8"===t?(this.deleteHeight=0,this.heightNum=1.18):(this.deleteHeight=32,this.heightNum=1.27),this.windowWidth=uni.getSystemInfoSync().screenWidth,this.boxStyle.width=this.windowWidth+"px",this.wHeight=uni.getSystemInfoSync().screenHeight,this.boxStyle.height=this.wHeight-this.deleteHeight,this.get()},onReady:function(){},methods:{autoPlay:function(){this.isAutoplay=!this.isAutoplay,this.isAutoplay?(this.autoplayText="关闭自动播放",uni.showToast({title:"开启自动播放",icon:"none",duration:3e3})):(this.autoplayText="开启自动播放",uni.showToast({title:"关闭自动播放",icon:"none",duration:3e3}))},getData:function(){var t=this;uni.request({url:"https://bdb24c6d-8c19-4f80-8e7e-c9c9f037f131.bspapp.com/video",method:"POST",data:{info:"get_video"},success:function(i){for(var e=i.data.data,o=0;o<e.length;o++)t.dataList.push(e[o])}})},touchstart:function(t){this.dataList[this.k].isShowimage=!0,this.dataList[this.k].isShowProgressBarTime=!0,this.ProgressBarOpacity=1,this.dotWidth=10},touchend:function(){uni.createVideoContext(this.dataList[this.k]._id,this).seek(this.newTime),"pause"==this.dataList[this.k].state&&(this.dataList[this.k].state="play",uni.createVideoContext(this.dataList[this.k]._id,this).play()),this.dataList[this.k].isShowProgressBarTime=!1,this.dataList[this.k].isShowimage=!1,this.ProgressBarOpacity=.5,this.dotWidth=0},touchmove:function(t){var i=[];""!==this.videoTime&&(i=this.videoTime.split(":"));var e=60*Number(i[0])+Number(i[1]);this.currentPositions=t.changedTouches[0].screenX,this.percent=this.currentPositions/this.windowWidth,this.newTime=this.percent*e,this.currenttimes=parseInt(this.newTime);var o=this.newTime,a=0;o>60&&(a=parseInt(o/60),o=parseInt(o%60)),this.changeTime="".concat(Math.round(a)>9?Math.round(a):"0"+Math.round(a),":").concat(Math.round(o)>9?Math.round(o):"0"+Math.round(o))},timeupdate:function(t,i){var e=this;if(i==this.k){var o=t.detail.currentTime;this.timeNumber=Math.round(t.detail.duration),this.getTime(),this.percent=o/this.timeNumber,this.currentPosition=this.windowWidth*this.percent;var a=o,s=0;if(a>60&&(s=parseInt(a/60),a=parseInt(a%60)),this.changeTime="".concat(Math.round(s)>9?Math.round(s):"0"+Math.round(s),":").concat(Math.round(a)>9?Math.round(a):"0"+Math.round(a)),this.isAutoplay&&Math.round(o)==this.timeNumber-1){var n=uni.requireNativePlugin("dom"),r="item"+(this.k+1);setTimeout((function(){var t=e.$refs[r][0];n.scrollToElement(t,{offset:0,animated:!0})}),500)}}},getTime:function(){this.videoTime=this.formatSeconds(this.timeNumber);var t=[];""!==this.videoTime&&(t=this.videoTime.split(":")),this.videoTimes="".concat(t[0]>9?t[0]:"0"+t[0],":").concat(t[1]>9?t[1]:"0"+t[1])},formatSeconds:function(t){var i=parseInt(t),e=0;return i>60&&(e=parseInt(i/60),i=parseInt(i%60)),"".concat(e,":").concat(i)},playIngs:function(t){},moreVideo:function(t){},toVideo:function(t){},erweima:function(){},tozuozhe:function(){this.currents=1},stop:function(){},scrolls:function(t){var i=this;if(this.isDragging=t.isDragging,!t.isDragging){var e=Math.round(Math.abs(t.contentOffset.y)/(this.wHeight-this.deleteHeight+1));e!==this.k&&("ios"==uni.getSystemInfoSync().platform?(this.k=e,this.dataList[this.k].state="play",console.log("正在播放 --\x3e 第"+(this.k+1)+"个视频～")):(clearTimeout(this.timers),this.timers=setTimeout((function(){i.k=e,i.dataList[i.k].state="play",console.log("正在播放 --\x3e 第"+(i.k+1)+"个视频～")}),80)))}},get:function(){var t=this;uni.request({url:"http://120.24.238.88:8146/getvideo",method:"GET",success:function(i){console.log(i);var e=i.data;t.dataList=e,t.dataList[0]=uni.getStorageSync("video_chuancan"),t.dataList[0].state="play",setTimeout((function(){uni.createVideoContext(t.dataList[0]._id,t).seek(0),uni.createVideoContext(t.dataList[0]._id,t).play()}),200),t.dataList[0].isplay=!1,setTimeout((function(){t.dataList[0].playIng=!0}),500);var o=0;setTimeout((function(){++o,uni.createVideoContext(t.dataList[o]._id,t).play(),setTimeout((function(){uni.createVideoContext(t.dataList[o]._id,t).seek(0),uni.createVideoContext(t.dataList[o]._id,t).pause(),console.log("预加载第"+(o+1)+"个视频："+t.dataList[o]._id)}),2e3)}),50)}}),uni.request({url:"https://bdb24c6d-8c19-4f80-8e7e-c9c9f037f131.bspapp.com/video",method:"POST",data:{info:"get_video"},success:function(t){}})},onpullingdown:function(){this.refreshing=!0},onrefresh:function(){var t=this;setTimeout((function(){t.refreshing=!1}),1e3)},touchstartHover:function(t){var i=this;if(this.touchNum>=1){this.aixinLeft=t.touches[0].screenX-50,this.aixinTop=t.touches[0].screenY-50,this.isShowAixin=!0;var e=40,o=-40;this.Rotate=Math.floor(Math.random()*(e-o+1))+o,setTimeout((function(){i.isShowAixin=!1}),700),this.onTabItemTaps()}},tapVideoHover:function(t,i){var e=this;this.dataList[this.k].isShowimage=!1,this.dataList[this.k].isShowProgressBarTime=!1,this.ProgressBarOpacity=.5,this.dotWidth=0,console.log("state--",t),this.touchNum++,setTimeout((function(){1==e.touchNum&&(e.dataList[e.k].state="play"==t||"continue"==t?"pause":"continue","continue"==e.dataList[e.k].state&&uni.createVideoContext(e.dataList[e.k]._id,e).play(),"pause"==e.dataList[e.k].state&&uni.createVideoContext(e.dataList[e.k]._id,e).pause()),e.touchNum>=2&&e.doubleLike(),e.touchNum=0}),200)},doubleLike:function(){0==this.dataList[this.k].like&&(this.dataList[this.k].like_n+=1,this.dataList[this.k].like=!0)},toComment:function(t){uni.showToast({title:"加载中...",icon:"none",position:"bottom",duration:300}),uni.setStorageSync("videoID",this.dataList[t]._id),this.$refs.pinglun.open("bottom")},share:function(){uni.showToast({title:"分享",icon:"none"})},wxh5Video:function(){uni.navigateTo({url:"../wxh5previewVideo/wxh5previewVideo"})},previewVideo:function(){uni.navigateTo({url:"../previewVideo/previewVideo"})},toTwoVideo:function(){uni.navigateTo({url:"../new_index/new_index"})},tolistVideo:function(){uni.navigateTo({url:"../nvueSwiper/nvueSwiper"})},cLike:function(t){this.dataList[this.k].like=!this.dataList[this.k].like;var i=this.dataList[this.k];t?i.like_n-=1:i.like_n+=1},moveHandle:function(){},closeScrollview:function(){this.$refs.pinglun.close()},onTabItemTaps:function(){}}};i.default=o},"40ed":function(t,i,e){"use strict";e.r(i);var o=e("ab7f"),a=e("231f");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("8300");var n,r=e("f0c5"),d=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"71639610",null,!1,o["a"],n);i["default"]=d.exports},6800:function(t,i,e){t.exports=e.p+"static/img/share-fill.4b82c79a.png"},"71c1":function(t,i,e){var o=e("02f2");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e("4f06").default;a("2feee080",o,!0,{sourceMap:!1,shadowMode:!1})},"79df":function(t,i){t.exports="data:image/png;base64,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"},8300:function(t,i,e){"use strict";var o=e("71c1"),a=e.n(o);a.a},ab7f:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return o}));var o={uniPopup:e("bd58").default},a=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("v-uni-view",{staticClass:"container"},[o("v-uni-view",{style:"width: "+t.windowWidth+"px; height: "+t.boxStyle.height+"px;"},[o("list",{ref:"listBox",attrs:{loadmoreoffset:3*t.wHeight,"show-scrollbar":!1,pagingEnabled:!0,scrollable:!0},on:{loadmore:function(i){arguments[0]=i=t.$handleEvent(i),t.getData.apply(void 0,arguments)},scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.scrolls.apply(void 0,arguments)}}},[o("refresh",{staticClass:"refresh",attrs:{display:t.refreshing?"show":"hide"},on:{refresh:function(i){arguments[0]=i=t.$handleEvent(i),t.onrefresh.apply(void 0,arguments)},pullingdown:function(i){arguments[0]=i=t.$handleEvent(i),t.onpullingdown.apply(void 0,arguments)}}},[o("loading",{staticStyle:{"background-color":"#FFFFFF"}},[o("v-uni-image",{style:"width: 80upx; height: 40upx; margin-top: 80upx; margin-bottom: 30upx; margin-left: "+(t.windowWidth-200)+"px;",attrs:{src:e("1390")}})],1)],1),t._l(t.dataList,(function(i,a){return o("cell",{key:a},[o("div",{style:"width: "+t.windowWidth+"px; height: "+t.boxStyle.height+"px;",on:{disappear:function(i){arguments[0]=i=t.$handleEvent(i),t.stop()}}},[Math.abs(t.k-a)<=1?o("v-uni-view",[o("v-uni-view",{staticClass:"root"},[o("v-uni-video",{ref:"item"+a,refInFor:!0,style:t.boxStyle,attrs:{id:i._id,loop:!0,src:i.src,muted:i.isplay,"enable-progress-gesture":!1,"page-gesture":!1,controls:!1,"http-cache":!0,"show-loading":!1,"show-fullscreen-btn":!1,"show-center-play-btn":!1,"object-fit":t.object_fit},on:{play:function(i){arguments[0]=i=t.$handleEvent(i),t.playIngs(a)},timeupdate:function(i){arguments[0]=i=t.$handleEvent(i),t.timeupdate(i,a)}}}),i.playIng?t._e():o("v-uni-image",{style:"width: "+t.windowWidth+"px; height: "+(t.wHeight-t.deleteHeight)+"px; position: absolute;",attrs:{src:i.src+"?x-oss-process=video/snapshot,t_100,f_jpg",mode:t.mode}})],1),o("v-uni-view",{staticClass:"videoHover",style:t.boxStyle,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tapVideoHover(i.state,e)},touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.touchstartHover.apply(void 0,arguments)}}},["pause"==i.state?o("v-uni-image",{staticClass:"playState",attrs:{src:e("79df")}}):t._e()],1),o("v-uni-view",{staticClass:"userInfo"},[0==i.isShowProgressBarTime?o("v-uni-image",{staticClass:"userAvatar",attrs:{src:i.href,mode:"aspectFill"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tozuozhe.apply(void 0,arguments)}}}):t._e(),0==i.isShowProgressBarTime?o("v-uni-view",{staticStyle:{opacity:"0.9","margin-top":"17px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cLike(i.like)}}},[i.like?o("v-uni-image",{staticStyle:{width:"40px",height:"40px",position:"absolute",right:"6px"},attrs:{src:e("e713")}}):t._e(),i.like?t._e():o("v-uni-image",{staticStyle:{width:"40px",height:"40px",position:"absolute",right:"6px"},attrs:{src:e("abeb")}}),o("v-uni-text",{class:{likeNumActive:i.like},staticStyle:{color:"#FFFFFF","margin-top":"40px","font-size":"14px","text-align":"center","font-weight":"bold"}},[t._v(t._s(i.like_n))])],1):t._e(),0==i.isShowProgressBarTime?o("v-uni-view",{staticClass:"comment",staticStyle:{opacity:"0.9","margin-top":"17px"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toComment(a)}}},[o("v-uni-image",{staticStyle:{width:"35px",height:"35px",position:"absolute",right:"7px"},attrs:{src:e("e8d1")}}),o("v-uni-text",{staticStyle:{color:"#FFFFFF","margin-top":"40px","font-size":"14px","font-weight":"bold","text-align":"center"}},[t._v(t._s(i.sms_n))])],1):t._e(),0==i.isShowProgressBarTime?o("v-uni-view",{staticStyle:{opacity:"0.9","margin-top":"17px"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.share.apply(void 0,arguments)}}},[o("v-uni-image",{staticStyle:{width:"40px",height:"40px",position:"absolute",right:"5px"},attrs:{src:e("6800")}}),o("v-uni-text",{staticStyle:{color:"#FFFFFF","margin-top":"40px","font-size":"14px","text-align":"center","font-weight":"bold"}},[t._v("分享")])],1):t._e()],1),0!==t.dataList.length&&0==t.dataList[t.k].isShowProgressBarTime?o("v-uni-view",{staticClass:"content"},[o("v-uni-text",{staticClass:"userName",style:"width: "+(t.windowWidth-90)+"px;"},[t._v(t._s(i.title))]),o("v-uni-text",{staticClass:"words",style:"width: "+(t.windowWidth-90)+"px;"},[t._v(t._s(i.msg)+"-"+t._s(t.k+1))])],1):t._e(),1==i.isShowimage?o("v-uni-image",{style:"width: 120upx; height: 160upx; border-radius: 10upx; position: absolute; bottom: "+(t.ProgressBarBottom+160)+"upx; left: "+(t.currentPositions-15)+"px;",attrs:{src:i.src+"?x-oss-process=video/snapshot,t_"+t.currenttimes+"000,f_jpg",mode:"aspectFill"}}):t._e()],1):t._e()],1)])}))],2),0!==t.dataList.length&&1==t.dataList[t.k].isShowProgressBarTime?o("v-uni-view",{style:"position: absolute; bottom: "+(t.ProgressBarBottom+.2*this.windowWidth)/2+"px; left: "+(2*t.windowWidth-1.35*this.windowWidth)/2+"px;"},[o("v-uni-text",{staticStyle:{"font-size":"22px","font-weight":"bold",color:"#F1F1F1"}},[t._v(t._s(t.changeTime)+" / "+t._s(t.videoTimes))])],1):t._e(),0==t.isDragging?o("v-uni-view",{staticStyle:{position:"absolute",bottom:"0",left:"0"},on:{touchmove:function(i){arguments[0]=i=t.$handleEvent(i),t.touchmove.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.touchend.apply(void 0,arguments)},touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.touchstart.apply(void 0,arguments)}}},[o("v-uni-text",{style:"width: "+t.windowWidth+"px; opacity: 0;"},[t._v(".")]),o("v-uni-view",{style:"width: "+t.windowWidth+"px; height: 4upx; background-color: #C8C7CC; position: absolute; bottom: "+t.ProgressBarBottom+"upx; opacity: "+t.ProgressBarOpacity+";"}),0!==t.dataList.length&&0==t.dataList[t.k].isShowProgressBarTime?o("v-uni-view",{style:"width: "+t.currentPosition+"px; height: 4upx; background-color: #FFFFFF; position: absolute; bottom: "+t.ProgressBarBottom+"upx; left: 0; opacity: "+(t.ProgressBarOpacity-.1)+";"}):t._e(),0!==t.dataList.length&&1==t.dataList[t.k].isShowProgressBarTime?o("v-uni-view",{style:"width: "+t.currentPositions+"px; height: 8upx; background-color: #FFFFFF; position: absolute; bottom: "+t.ProgressBarBottom+"upx; left: 0; opacity: "+(t.ProgressBarOpacity+.05)+";"}):t._e(),0!==t.dataList.length&&0==t.dataList[t.k].isShowProgressBarTime?o("v-uni-view",{style:"width: 4px; height: 4px; background-color: #FFFFFF; border-radius: 10px; position: absolute; bottom: "+(t.ProgressBarBottom-2)+"upx; left: "+t.currentPosition+"px; opacity: "+t.ProgressBarOpacity+";"}):t._e(),0!==t.dataList.length&&1==t.dataList[t.k].isShowProgressBarTime?o("v-uni-view",{style:"width: "+t.dotWidth+"px; height: "+t.dotWidth+"px; background-color: #FFFFFF; border-radius: 10px; position: absolute; bottom: "+(t.ProgressBarBottom-5)+"upx; left: "+(t.currentPositions-5)+"px; opacity: "+t.ProgressBarOpacity+";"}):t._e()],1):t._e()],1),o("uni-popup",{ref:"pinglun",attrs:{type:"bottom"},on:{touchmove:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.moveHandle.apply(void 0,arguments)}}},[o("v-uni-view",{style:"width: "+t.windowWidth+"px; height: "+t.boxStyle.height/t.heightNum+"px; background-color: #242424; border-top-left-radius: 10px; border-top-right-radius: 10px;"},[o("douyin-scrollview",{attrs:{Width:t.windowWidth,Height:t.boxStyle.height/1.23,deleteIOSHeight:36,deleteAndroidHeight:15},on:{closeScrollview:function(i){arguments[0]=i=t.$handleEvent(i),t.closeScrollview.apply(void 0,arguments)}}})],1)],1)],1)},s=[]},abeb:function(t,i,e){t.exports=e.p+"static/img/xin-2.5aed4e17.png"},e713:function(t,i,e){t.exports=e.p+"static/img/xin.54107680.png"},e8d1:function(t,i,e){t.exports=e.p+"static/img/liaotian-2.6beccf53.png"}}]);