(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-585a0191"],{"116b":function(t,e,n){"use strict";n("e2e3")},"333d":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},a=[];n("c5f6");Math.easeInOutQuad=function(t,e,n,r){return t/=r/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function c(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function u(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function i(t,e,n){var r=u(),a=t-r,i=20,s=0;e="undefined"===typeof e?500:e;var l=function t(){s+=i;var u=Math.easeInOutQuad(s,r,a,e);c(u),s<e?o(t):n&&"function"===typeof n&&n()};l()}var s={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&i(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&i(0,800)}}},l=s,d=(n("e498"),n("2877")),f=Object(d["a"])(l,r,a,!1,null,"6af373ef",null);e["a"]=f.exports},4381:function(t,e,n){"use strict";n("6762"),n("2fdb");var r=n("4360"),a={inserted:function(t,e,n){var a=e.value,o=r["a"].getters&&r["a"].getters.roles;if(!(a&&a instanceof Array&&a.length>0))throw new Error("need roles! Like v-permission=\"['admin','editor']\"");var c=a,u=o.some((function(t){return c.includes(t)}));u||t.parentNode&&t.parentNode.removeChild(t)}},o=function(t){t.directive("permission",a)};window.Vue&&(window["permission"]=a,Vue.use(o)),a.install=o;e["a"]=a},"4ebe":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-editor-container"},[t.account?n("el-form",{attrs:{size:"mini"}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{staticClass:"card-panel-col",attrs:{xs:24,sm:24,lg:24}},[n("el-card",[n("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n        \n     账号: "+t._s(t.account.accountNo)+"  \n       ")]),t._v(" "),n("el-form-item",{attrs:{label:"等级:"}},[t._v("\n          "+t._s(t._f("levelFilter")(t.account.level))+"\n          ")]),t._v(" "),n("el-form-item",{attrs:{label:" 有效时间:"}},[n("span",[t.account.toDate>(new Date).getTime()?n("font",[t._v("  "+t._s(t._f("parseTime")(t.account.toDate,"{y}-{m}-{d} {h}:{i}")))]):n("font",{attrs:{color:"red"}},[t._v("  "+t._s(t._f("parseTime")(t.account.toDate,"{y}-{m}-{d} {h}:{i}")))])],1)]),t._v(" "),n("el-form-item",{attrs:{label:" 账号状态:"}},[n("span",[1==t.account.status?n("font",[t._v("  "+t._s(t._f("accountStatusFilter")(t.account.status)))]):n("font",{attrs:{color:"red"}},[t._v("  "+t._s(t._f("accountStatusFilter")(t.account.status)))])],1)]),t._v(" "),t.account.statVO?n("el-form-item",{attrs:{label:" 结算时间:"}},[n("span",[t._v(t._s(t._f("parseTime")(t.account.statVO.toDate,"{y}-{m}-{d} {h}:{i}")))])]):t._e(),t._v(" "),n("el-form-item",{attrs:{label:"速率:"}},[n("span"),t._v(" "),n("span",[t._v(t._s(t._f("speedFilter")(t.account.speed)))])]),t._v(" "),n("el-form-item",{attrs:{label:"周期:"}},[t._v("\n          "+t._s(t.account.cycle)+"天/周期\n          ")]),t._v(" "),n("el-form-item",{attrs:{label:"流量:"}},[n("span",[(t.account.statVO?(t.account.statVO.flow/1024/1024/1024).toFixed(2):0)<t.account.bandwidth?n("font",[t._v(t._s(t.account.statVO?(t.account.statVO.flow/1024/1024/1024).toFixed(2):0))]):n("font",{attrs:{color:"red"}},[t._v(t._s(t.account.statVO?(t.account.statVO.flow/1024/1024/1024).toFixed(2):0))]),t._v("\n            /"+t._s(t.account.bandwidth)+"GB/周期")],1)]),t._v(" "),n("el-form-item",{attrs:{label:"连接数:"}},[t._v(t._s(t.account.maxConnection)+"/账号\n           ")]),t._v(" "),n("el-form-item",{attrs:{label:"订阅地址(推荐):"}},[n("el-col",{attrs:{xs:24,sm:6,lg:6}},[n("el-input",{model:{value:t.account.subscriptionUrl,callback:function(e){t.$set(t.account,"subscriptionUrl",e)},expression:"account.subscriptionUrl"}},[n("el-button",{attrs:{slot:"prepend"},on:{click:function(e){return t.generatorNewSubscriptionUrl()}},slot:"prepend"},[t.account.subscriptionUrl?t._e():n("div",[t._v("生成")]),t.account.subscriptionUrl?n("div",[t._v("更新")]):t._e()]),t._v(" "),n("el-button",{attrs:{slot:"append"},on:{click:function(e){return t.handlerCopy(t.account.subscriptionUrl,e)}},slot:"append"},[t._v("复制")])],1)],1)],1)],1)],1),t._v(" "),n("el-col",{staticClass:"card-panel-col",attrs:{xs:24,sm:24,lg:24}},[n("el-card",[n("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n          v2ray账号\n        ")]),t._v(" "),n("el-row",[n("el-col",{attrs:{xs:24,sm:24,lg:12}},[n("el-form-item",{attrs:{label:"服务器:"}},[n("el-select",{attrs:{placeholder:"请选择服务器"},on:{change:t.serverChange},model:{value:t.serverId,callback:function(e){t.serverId=e},expression:"serverId"}},t._l(t.serverList,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),t.v2rayAccount?n("div",[n("el-form-item",{attrs:{label:"地址:"}},[t._v(t._s(t.v2rayAccount.add))]),t._v(" "),n("el-form-item",{attrs:{label:"端口:"}},[t._v(t._s(t.v2rayAccount.port))]),t._v(" "),n("el-form-item",{attrs:{label:"用户Id:"}},[t._v(t._s(t.v2rayAccount.id))]),t._v(" "),n("el-form-item",{attrs:{label:"额外Id(alterId):"}},[t._v(t._s(t.v2rayAccount.aid))]),t._v(" "),n("el-form-item",{attrs:{label:"加密方式:"}},[t._v("auto")]),t._v(" "),n("el-form-item",{attrs:{label:"传输协议:"}},[t._v(t._s(t.v2rayAccount.net))]),t._v(" "),n("el-form-item",{attrs:{label:"伪装类型:"}},[t._v(t._s(t.v2rayAccount.type))]),t._v(" "),n("el-form-item",{attrs:{label:"传输域名(host):"}},[t._v(t._s(t.v2rayAccount.host))]),t._v(" "),n("el-form-item",{attrs:{label:"路径(path):"}},[t._v(t._s(t.v2rayAccount.path))]),t._v(" "),n("el-form-item",{attrs:{label:"底层传输安全(tls):"}},[t._v(t._s(t.v2rayAccount.tls))]),t._v(" "),n("el-form-item",{attrs:{label:"服务器描述:"}},[t._v(t._s(t.server.desc))])],1):t._e()],1),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,lg:12}},[t.v2rayAccount?n("div",[n("el-form-item",{attrs:{label:""}},[n("el-col",{attrs:{xs:24,sm:24,lg:6}},[n("el-input",{model:{value:t.toColip,callback:function(e){t.toColip=e},expression:"toColip"}},[n("el-button",{attrs:{slot:"append"},on:{click:function(e){return t.handlerCopy(t.toColip,e)}},slot:"append"},[t._v("复制")])],1)],1)],1),t._v(" "),n("el-form-item",{attrs:{label:""}},[n("vue-qr",{attrs:{text:t.toColip,qid:"qrcode"}})],1)],1):t._e()])],1)],1)],1)],1)],1):t._e()],1)},a=[],o=n("bd86"),c=n("5723"),u=n("aa22"),i=n("333d"),s=n("f71e"),l=n("27ae"),d=n("658f"),f=n.n(d),v=n("4360"),p=(n("3022"),n("4381")),m={name:"UserAccount",components:{Pagination:i["a"],VueQr:f.a},directives:{permission:p["a"]},filters:{levelFilter:function(t){var e={0:"等级0",1:"等级1",2:"等级2",3:"等级3"};return e[t]},speedFilter:function(t){return t<=1024?"流畅":t>1024&&t<=2024?"高速":"极速"},statusFilter:function(t){var e={1:"success",0:"danger"};return e[t]},accountStatusFilter:function(t){var e={1:"正常",0:"禁用"};return e[t]},statusFilter2:function(t){var e={1:"在线",0:"下线"};return e[t]}},data:function(){var t;return{serverId:null,server:null,accountFormOptions:[{value:1,label:"正常"},{value:0,label:"禁止"}],accountForm:(t={id:null,fromDate:null,toDate:null,cycle:null,accountNo:null,status:null,bandwidth:null},Object(o["a"])(t,"fromDate",null),Object(o["a"])(t,"fromDate",null),Object(o["a"])(t,"status","1"),Object(o["a"])(t,"addDay",0),t),connections:0,accountDialog:!1,roles:v["a"].getters.roles,v2rayAccount:null,toColip:"",opAccountId:null,serverTotal:0,chooseServerId:null,serverListQuery:{page:1,pageSize:10},isEdit:!1,serverList:null,account:null,total:0,listLoading:!0,listQuery:{page:1,pageSize:50,userEmail:""}}},computed:{},created:function(){this.getRemoteAccount(),this.getServerList()},methods:{generatorNewSubscriptionUrl:function(){var t=this;this.isEdit?this.$confirm("确认更新操作？成功原订阅地址将失效。","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",roundButton:!0,center:!1}).then((function(){t.trueGeneratorSubscriptionUrl()})).catch((function(){})):this.trueGeneratorSubscriptionUrl()},trueGeneratorSubscriptionUrl:function(){var t=this;Object(c["b"])().then((function(e){t.getRemoteAccount(),t.$message.success("更新订阅地址成功，原地址已经失效")}))},handlerCopy:function(t,e){Object(s["a"])(t,e)},serverChange:function(){var t=this;Object(u["d"])(this.serverId).then((function(e){t.server=e.obj})),Object(c["e"])({serverId:this.serverId}).then((function(e){t.v2rayAccount=e.obj,t.toColip="vmess://"+l["Base64"].encode(JSON.stringify(t.v2rayAccount))}))},getServerList:function(){var t=this;Object(u["b"])().then((function(e){for(var n in t.serverList=[],e.obj){var r=e.obj[n],a={};a.value=r.id,a.label=r.serverName,t.serverList[n]=a}}))},formatDate:function(t){if(!t)return"";var e=t.getFullYear(),n=t.getMonth()+1,r=(t=t.getDate(),t.getHours()),a=t.getMinutes(),o=t.getSeconds();return e+"-"+n+"-"+t+" "+r+":"+a+":"+o},getRemoteAccount:function(){var t=this;Object(c["c"])(1).then((function(e){t.account=e.obj,t.isEdit=!!t.account.subscriptionUrl}))}}},b=m,_=(n("116b"),n("2877")),g=Object(_["a"])(b,r,a,!1,null,"34da18e8",null);e["default"]=g.exports},5723:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return o})),n.d(e,"e",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"f",(function(){return i}));var r=n("b775");function a(t){return Object(r["a"])({url:"/account/".concat(t),method:"get"})}function o(t){return Object(r["a"])({url:"/account/generatorSubscriptionUrl",method:"get",data:t})}function c(t){return Object(r["a"])({url:"/account/v2rayAccount",method:"get",params:t})}function u(t){return Object(r["a"])({url:"/account",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/account",method:"put",data:t})}},7456:function(t,e,n){},aa22:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"f",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s}));var r=n("b775");function a(t){return Object(r["a"])({url:"/server",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/server",method:"put",data:t})}function c(t){return Object(r["a"])({url:"/server/".concat(t),method:"get"})}function u(t){return Object(r["a"])({url:"/server",method:"get",params:t})}function i(){return Object(r["a"])({url:"/server/findServersForAccount",method:"get"})}function s(t){return Object(r["a"])({url:"/server/".concat(t),method:"DELETE"})}},e2e3:function(t,e,n){},e498:function(t,e,n){"use strict";n("7456")},f71e:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("2b0e"),a=n("b311"),o=n.n(a);function c(){r["default"].prototype.$message({message:"复制成功",type:"success",duration:1500})}function u(){r["default"].prototype.$message({message:"复制失败",type:"error"})}function i(t,e){var n=new o.a(e.target,{text:function(){return t}});n.on("success",(function(){c(),n.destroy()})),n.on("error",(function(){u(),n.destroy()})),n.onClick(e)}}}]);