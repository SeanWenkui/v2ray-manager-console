(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10cdf851"],{"25c1":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"createPost-container"},[r("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:e.postForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"服务器名称",prop:"serverName"}},[r("el-input",{model:{value:e.postForm.serverName,callback:function(t){e.$set(e.postForm,"serverName",t)},expression:"postForm.serverName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"访问域名",prop:"clientDomain"}},[r("el-input",{model:{value:e.postForm.clientDomain,callback:function(t){e.$set(e.postForm,"clientDomain",t)},expression:"postForm.clientDomain"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"访问端口",prop:"clientPort"}},[r("el-input",{model:{value:e.postForm.clientPort,callback:function(t){e.$set(e.postForm,"clientPort",t)},expression:"postForm.clientPort"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"支持TLS",prop:"supportTLS"}},[r("el-radio-group",{model:{value:e.postForm.supportTLS,callback:function(t){e.$set(e.postForm,"supportTLS",t)},expression:"postForm.supportTLS"}},[r("el-radio",{attrs:{label:!0},model:{value:e.postForm.supportTLS,callback:function(t){e.$set(e.postForm,"supportTLS",t)},expression:"postForm.supportTLS"}},[e._v("是")]),e._v(" "),r("el-radio",{attrs:{label:!1},model:{value:e.postForm.supportTLS,callback:function(t){e.$set(e.postForm,"supportTLS",t)},expression:"postForm.supportTLS"}},[e._v("否")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"中间件地址",prop:"proxyIp"}},[r("el-input",{attrs:{placeholder:"127.0.0.1"},model:{value:e.postForm.proxyIp,callback:function(t){e.$set(e.postForm,"proxyIp",t)},expression:"postForm.proxyIp"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"中间件端口",prop:"proxyPort"}},[r("el-input",{model:{value:e.postForm.proxyPort,callback:function(t){e.$set(e.postForm,"proxyPort",t)},expression:"postForm.proxyPort"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"v2ray地址",prop:"v2rayIp"}},[r("el-input",{attrs:{placeholder:"127.0.0.1"},model:{value:e.postForm.v2rayIp,callback:function(t){e.$set(e.postForm,"v2rayIp",t)},expression:"postForm.v2rayIp"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"v2ray端口",prop:"v2rayPort"}},[r("el-input",{model:{value:e.postForm.v2rayPort,callback:function(t){e.$set(e.postForm,"v2rayPort",t)},expression:"postForm.v2rayPort"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"v2ray管理端口",prop:"v2rayManagerPort"}},[r("el-input",{model:{value:e.postForm.v2rayManagerPort,callback:function(t){e.$set(e.postForm,"v2rayManagerPort",t)},expression:"postForm.v2rayManagerPort"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"流量倍数",prop:"Multiple"}},[r("el-input",{attrs:{placeholder:"1"},model:{value:e.postForm.multiple,callback:function(t){e.$set(e.postForm,"multiple",t)},expression:"postForm.multiple"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"v2rayTag",prop:"inboundTag"}},[r("el-input",{model:{value:e.postForm.inboundTag,callback:function(t){e.$set(e.postForm,"inboundTag",t)},expression:"postForm.inboundTag"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"ws路径",prop:"wsPath"}},[r("el-input",{attrs:{placeholder:"/ws/%s/"},model:{value:e.postForm.wsPath,callback:function(t){e.$set(e.postForm,"wsPath",t)},expression:"postForm.wsPath"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"服务描述"}},[r("el-input",{model:{value:e.postForm.desc,callback:function(t){e.$set(e.postForm,"desc",t)},expression:"postForm.desc"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"服务器等级",prop:"level"}},[r("el-select",{model:{value:e.postForm.level,callback:function(t){e.$set(e.postForm,"level",t)},expression:"postForm.level"}},e._l(e.levelOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"服务器状态",prop:"status"}},[r("el-select",{model:{value:e.postForm.status,callback:function(t){e.$set(e.postForm,"status",t)},expression:"postForm.status"}},e._l(e.statusOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:e.submitForm}},[e._v("\n      提交\n    ")])],1)],1)},l=[],a=r("aa22"),s={serverName:"",clientDomain:"",clientPort:443,supportTLS:!0,proxyIp:"127.0.0.1",proxyPort:8091,v2rayIp:"127.0.0.1",v2rayPort:6001,v2rayManagerPort:62789,multiple:1,desc:"",status:1,level:0,inboundTag:"",maxConnection:100,wsPath:"/ws/%s/"},n={serverName:{required:!0,trigger:"blur"},clientDomain:{required:!0,trigger:"blur"},clientPort:{required:!0,trigger:"blur"},supportTLS:{required:!0,trigger:"blur"},proxyIp:{required:!0,trigger:"blur"},proxyPort:{required:!0,trigger:"blur"},v2rayIp:{required:!0,trigger:"blur"},v2rayPort:{required:!0,trigger:"blur"},v2rayManagerPort:{required:!0,trigger:"blur"},multiple:{required:!0,trigger:"blur"},desc:"",status:{required:!0,trigger:"blur"},inboundTag:{required:!0,trigger:"blur"},wsPath:{required:!0,trigger:"blur"}},i={name:"ServerDetail",props:{isEdit:{type:Boolean,default:!1}},data:function(){return{postForm:Object.assign({},s),loading:!1,rules:Object.assign({},n),tempRoute:{},statusOptions:[{value:1,label:"上线"},{value:0,label:"下线"}],levelOptions:[{value:0,label:"等级0"},{value:1,label:"等级1"},{value:2,label:"等级2"},{value:3,label:"等级3"}]}},computed:{},created:function(){if(this.isEdit){var e=this.$route.params&&this.$route.params.id;this.fetchData(e)}this.tempRoute=Object.assign({},this.$route)},methods:{fetchData:function(e){var t=this;console.log("server get id "+e),Object(a["d"])(e).then((function(e){t.postForm=e.obj,t.postForm}))},submitForm:function(){var e=this;console.log(this.postForm),this.$refs.postForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0;var r=e.isEdit?Object(a["f"])(e.postForm):Object(a["a"])(e.postForm);r.then((function(t){console.log("addserver chenggong !"+t),e.$notify({title:"成功",message:"提交成功",type:"success",duration:2e3})})).catch((function(e){console.log(e)})).finally((function(){e.loading=!1}))}))}}},p=i,u=(r("c9b0"),r("2877")),c=Object(u["a"])(p,o,l,!1,null,"5ceee5e5",null);t["a"]=c.exports},9501:function(e,t,r){},aa22:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"f",(function(){return a})),r.d(t,"d",(function(){return s})),r.d(t,"e",(function(){return n})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return p}));var o=r("b775");function l(e){return Object(o["a"])({url:"/server",method:"post",data:e})}function a(e){return Object(o["a"])({url:"/server",method:"put",data:e})}function s(e){return Object(o["a"])({url:"/server/".concat(e),method:"get"})}function n(e){return Object(o["a"])({url:"/server",method:"get",params:e})}function i(){return Object(o["a"])({url:"/server/findServersForAccount",method:"get"})}function p(e){return Object(o["a"])({url:"/server/".concat(e),method:"DELETE"})}},c9b0:function(e,t,r){"use strict";r("9501")},ec13:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("server-detail",{attrs:{"is-edit":!1}})},l=[],a=r("25c1"),s={name:"CreateServer",components:{ServerDetail:a["a"]}},n=s,i=r("2877"),p=Object(i["a"])(n,o,l,!1,null,null,null);t["default"]=p.exports}}]);