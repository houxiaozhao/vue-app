webpackJsonp([11],{NaOX:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("geGu"),s=a("U1qX"),c=a("25r8"),l=c(o.a,s.a,null,null,null);e.default=l.exports},U1qX:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lxt-page",style:{height:t.screenHeight+"px"}},[a("mt-header",{attrs:{title:"登录"}},[a("mt-button",{staticClass:"fa fa-fw fa-home",attrs:{slot:"left"},on:{click:function(e){t.go("home")}},slot:"left"}),t._v(" "),a("mt-button",{staticClass:"fa fa-fw fa-refresh",attrs:{slot:"right"},on:{click:t.check},slot:"right"})],1),t._v(" "),a("div",[a("mt-field",{attrs:{label:"用户名",placeholder:"请输入用户名"},model:{value:t.model.username,callback:function(e){t.model.username=e},expression:"model.username"}}),t._v(" "),a("mt-field",{attrs:{label:"邮箱",placeholder:"请输入邮箱",type:"email"},model:{value:t.model.password,callback:function(e){t.model.password=e},expression:"model.password"}}),t._v(" "),a("mt-field",{attrs:{label:"验证码",placeholder:"请输入验证码"},model:{value:t.model.captcha,callback:function(e){t.model.captcha=e},expression:"model.captcha"}},[a("img",{attrs:{src:t.captchaBase64,height:"36px",width:"100px"},on:{click:t.getCaptcha}})]),t._v(" "),a("div",{staticClass:"pd-md"},[a("mt-button",{attrs:{type:"primary",size:"large"},on:{click:t.login}},[t._v("登录")])],1),t._v(" "),a("mt-field",{attrs:{label:"接口地址"},model:{value:t.server,callback:function(e){t.server=e},expression:"server"}}),t._v(" "),a("mt-field",{attrs:{label:"热更新地址"},model:{value:t.chcpUrl,callback:function(e){t.chcpUrl=e},expression:"chcpUrl"}}),t._v(" "),a("div",{staticStyle:{position:"absolute",width:"100%",bottom:"0",color:"gray","font-size":"12px","text-align":"center"}},[t._v("版本号："+t._s(t.$store.state.common.app.version))])],1),t._v(" "),a("mt-popup",{staticStyle:{width:"100%",height:"50px","line-height":"50px",color:"#fff","text-align":"center",background:"rgba(0,0,0,0.5)"},attrs:{position:"top",modal:!1},model:{value:t.popupTop,callback:function(e){t.popupTop=e},expression:"popupTop"}},[t._v("\n    "+t._s(t.msg)+"\n  ")])],1)},s=[],c={render:o,staticRenderFns:s};e.a=c},geGu:function(t,e,a){"use strict";var o=a("34v0"),s=a.n(o),c=a("wFu8"),l=(a.n(c),a("PphD"));e.a={name:"login",data:function(){return{model:{username:"admin",password:"admin",captcha:""},server:Config.server,chcpUrl:Config.chcpUrl,popupTop:!1,msg:"",captchaBase64:""}},methods:s()({},a.i(l.a)({doLogin:"LOGIN",doLogout:"LOGOUT"}),{getCaptcha:function(){var t=this;utils.http.post("/captcha").then(function(e){t.captchaBase64="data:image/png;base64, "+e.data.body.data})},login:function(){var t=this;c.Indicator.open({text:"登录中...",spinnerType:"fading-circle"}),utils.http.post("/system/login",this.model).then(function(e){console.log(e),200==e.data.head.status?(t.doLogin({user:e.data.body.data.user,userSetting:e.data.body.data.userSetting}),t.go("/page/home")):(t.msg=e.data.body.data,t.popupTop=!0,setTimeout(function(){t.popupTop=!1},3e3),t.getCaptcha()),c.Indicator.close()})},check:function(){utils.version.check()}}),watch:{server:function(t){Config.server=t},chcpUrl:function(t){Config.chcpUrl=t}},mounted:function(){this.doLogout(),this.getCaptcha()}}}});