webpackJsonp([11],{"/3dO":function(t,a,e){"use strict";var n=e("34v0"),r=e.n(n),i=e("YaEn"),s=e("PphD");a.a={name:"page",data:function(){return{urlArray:["/page/login"],transitionName:"animate-in"}},computed:r()({},e.i(s.b)(["hasHeader","hasTabs","hasFooter","fixFooter","isLoading"])),beforeRouteUpdate:function(t,a,e){this.urlArray.length>1&&this.urlArray[this.urlArray.length-2]==t.path&&(this.$router.isBack=!0),console.log(this.urlArray),this.$router.isBack?(this.transitionName="animate-out",this.$router.isBack=!1):this.transitionName="animate-in",e()},created:function(){var t=this;i.a.afterEach(function(a,e){t.urlArray.length>1&&t.urlArray[t.urlArray.length-2]==a.path?t.urlArray.pop():t.urlArray.push(a.path)})}}},Fgsa:function(t,a,e){var n=e("wPmz");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("6imX")("41d20b8e",n,!0)},Xk10:function(t,a,e){"use strict";function n(t){e("Fgsa")}Object.defineProperty(a,"__esModule",{value:!0});var r=e("/3dO"),i=e("uwGg"),s=e("25r8"),o=n,u=s(r.a,i.a,o,null,null);a.default=u.exports},uwGg:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("transition",{attrs:{name:t.transitionName,mode:"out-in"}},[e("keep-alive",{attrs:{include:"home"}},[e("router-view")],1)],1)],1)},r=[],i={render:n,staticRenderFns:r};a.a=i},wPmz:function(t,a,e){a=t.exports=e("bKW+")(!1),a.push([t.i,".animate-in-leave-active,.animate-out-leave-active{-webkit-transition:all .2s ease-in;transition:all .2s ease-in}.animate-in-enter-active,.animate-out-enter-active{-webkit-transition:all .2s ease-out;transition:all .2s ease-out}.animate-in-enter,.animate-out-leave-to{-webkit-transform:translateX(10%);transform:translateX(10%);opacity:0}.animate-in-leave-to,.animate-out-enter{-webkit-transform:translateX(-10%);transform:translateX(-10%);opacity:0}",""])}});