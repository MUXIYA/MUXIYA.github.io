(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e472b5d4"],{"159b":function(t,e,a){var n=a("da84"),i=a("fdbc"),s=a("17c2"),r=a("9112");for(var o in i){var c=n[o],f=c&&c.prototype;if(f&&f.forEach!==s)try{r(f,"forEach",s)}catch(u){f.forEach=s}}},"17c2":function(t,e,a){"use strict";var n=a("b727").forEach,i=a("a640"),s=i("forEach");t.exports=s?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},5230:function(t,e,a){"use strict";a("d437")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),i=a("5899"),s="["+i+"]",r=RegExp("^"+s+s+"*"),o=RegExp(s+s+"*$"),c=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(r,"")),2&t&&(a=a.replace(o,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,a){var n=a("861d"),i=a("d2bb");t.exports=function(t,e,a){var s,r;return i&&"function"==typeof(s=e.constructor)&&s!==a&&n(r=s.prototype)&&r!==a.prototype&&i(t,r),t}},a640:function(t,e,a){"use strict";var n=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&n((function(){a.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,a){"use strict";var n=a("83ab"),i=a("da84"),s=a("94ca"),r=a("6eeb"),o=a("5135"),c=a("c6b6"),f=a("7156"),u=a("c04e"),l=a("d039"),h=a("7c73"),d=a("241c").f,g=a("06cf").f,p=a("9bf2").f,v=a("58a8").trim,m="Number",b=i[m],I=b.prototype,w=c(h(I))==m,E=function(t){var e,a,n,i,s,r,o,c,f=u(t,!1);if("string"==typeof f&&f.length>2)if(f=v(f),e=f.charCodeAt(0),43===e||45===e){if(a=f.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+f}for(s=f.slice(2),r=s.length,o=0;o<r;o++)if(c=s.charCodeAt(o),c<48||c>i)return NaN;return parseInt(s,n)}return+f};if(s(m,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var _,N=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof N&&(w?l((function(){I.valueOf.call(a)})):c(a)!=m)?f(new b(E(e)),a,N):E(e)},x=n?d(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;x.length>S;S++)o(b,_=x[S])&&!o(N,_)&&p(N,_,g(b,_));N.prototype=I,I.constructor=N,r(i,m,N)}},d437:function(t,e,a){},eef3:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"staffManagement"},[t._m(0),a("div",{staticClass:"staffManagement_bot"},[a("Table",{ref:"tableFams",attrs:{columns:t.columns1,data:t.data1,height:t.tableHeight},scopedSlots:t._u([{key:"portrait",fn:function(e){var n=e.row;return[a("div",{staticStyle:{display:"flex","align-items":"center","text-align":"left"}},[a("div",{staticClass:"mgright_15"},[a("Avatar",{attrs:{src:n.portrait}})],1),a("div",[t._v(t._s(n.name))])])]}},{key:"isPush",fn:function(e){var n=e.row;return[a("i-switch",{on:{"on-change":function(e){return t.handChange(e,n)}},model:{value:n.isPush,callback:function(e){t.$set(n,"isPush",e)},expression:"row.isPush"}})]}}])})],1),a("div",{staticClass:"staffManagement_page"},[a("Page",{attrs:{total:t.total,"page-size":t.limit,"show-total":"","show-elevator":""},on:{"on-page-size-change":t.handleSizeChange,"on-change":t.handleCurrentChange}})],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"staffManagement_top"},[a("div",{staticClass:"staffManagement_title"},[t._v(" 员工管理 ")])])}],s=(a("159b"),a("a9e3"),a("365c")),r={data:function(){return{columns1:[{title:"排序",type:"index",align:"center"},{title:"员工姓名",slot:"portrait",width:250},{title:"手机号",key:"phone",align:"center"},{title:"加入时间",key:"creationTime",align:"center"},{title:"是否推送",slot:"isPush",align:"center"}],data1:[],page:1,limit:15,total:0,wxAppId:localStorage.getItem("wxAppId"),tableHeight:607}},mounted:function(){window.addEventListener("resize",this.getTableHeight),this.getTableHeight(),this.handgetStuffList()},methods:{getTableHeight:function(){console.log(this.$refs.tableFams),this.$refs.tableFams&&(this.tableHeight=window.innerHeight-this.$refs.tableFams.$el.offsetTop-200)},handgetStuffList:function(){var t=this,e={page:this.page,limit:this.limit,wxAppId:this.wxAppId};s["a"].getStuffList(e).then((function(e){t.data1=e.data.list,t.data1.forEach((function(t){t.isPush=Boolean(t.isPush)})),t.total=e.data.pageData.count,console.log("this.data1",t.data1)}))},handChange:function(t,e){var a=this,n=Number(t);s["a"].setStuffIsPush({isPush:n,wxAppId:this.wxAppId,companyUserId:e.companyUserId}).then((function(t){console.log("res",t),a.$Message.success("修改成功")})).catch((function(t){console.log(t),a.handgetStuffList()}))},handleCurrentChange:function(t){this.page=t,this.handgetStuffList()},handleSizeChange:function(t){this.limit=t,this.page=1,this.handgetStuffList()}},created:function(){}},o=r,c=(a("5230"),a("2877")),f=Object(c["a"])(o,n,i,!1,null,"4af3b3d0",null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-e472b5d4.46b3f277.js.map