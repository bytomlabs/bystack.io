(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{441:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return J});a(335),a(62),a(39);var n=a(10),i=a.n(n),l=(a(29),a(531),a(331)),o=a.n(l),r=a(0),m=a.n(r),d=(a(330),a(447)),p=a(448),c=a(675),s=a(537),u=a.n(s),g=a(676),f=(a(442),a(462)),h=a(451),x=a(457),b=a(471),E=a(560),w=a.n(E),v="http://52.83.95.44:8866",y=(["image/jpg","image/jpeg","image/gif","image/png"].join(),d.a.div.withConfig({displayName:"apply__Cont",componentId:"tk17we-0"})(["width:800px;height:auto;box-sizing:border-box;background-color:#fff;padding:60px;margin:0 auto;@media (max-width:640px){width:auto;margin:0 20px;padding:30px 24px;margin-bottom:30px;}"])),A=d.a.div.withConfig({displayName:"apply__Line",componentId:"tk17we-1"})(["width:100%;height:1px;margin:50px 0 30px;background-color:#DEDEDE;"]),S=d.a.div.withConfig({displayName:"apply__FieldWrap",componentId:"tk17we-2"})(["padding-bottom:30px;input,textarea{width:100%;height:40px;padding:0 12px;border:1px solid #808A95;&:focus{outline:none;border-color:#035BD4;}}textarea{height:120px;padding:12px;}select{width:300px;height:40px;background-color:#fff;&:focus{outline:none;border-color:#035BD4;}}label{font-size:16px;cursor:pointer;}&>p{font-size:14px;color:#808A95;padding:6px 0;}&>div{color:#DB2323;font-size:14px;margin:8px 0;}@media (max-width:640px){label{font-size:14px;}}"]),k=d.a.div.withConfig({displayName:"apply__RadioList",componentId:"tk17we-3"})(["display:flex;flex-wrap:wrap;&>div{width:25%;margin:10px 0;input{cursor:pointer;width:18px;height:18px;vertical-align:middle;}label{color:#808A95;font-size:14px;}}@media (max-width:640px){&>div{width:50%;}}"]),B=d.a.div.withConfig({displayName:"apply__Upload",componentId:"tk17we-4"})(["width:100%;height:120px;input{width:120px;height:120px;opacity:0;cursor:pointer;}&>div{display:inline-block;width:120px;height:120px;overflow:hidden;vertical-align:top;border:1px dotted #808A95;}&>div:first-child{display:inline-block;background:#FAFBFC url(",") center / 20px no-repeat;}&>div:last-child{margin-left:120px;img{width:100%;height:100%;}}"],w.a),R=["交易所","钱包","投资机构","投资者","DApp开发团队","KOL","门户网站","营销公司","开发者团队","区块生产者/矿工","区块链教育机构","其他"],N=["Exchange","Wallet","Investment institution","Investor","DApp development team","KOL","Web portal","Marketing company","Development team","BP/miners","Blockchain education institutions","Others"],I=function(e){var t=e.error;return t?m.a.createElement("div",null,t):null},C=function(e){var t=e.field,a=t.name,n=t.value,i=t.onChange,l=t.onBlur,r=e.id,d=e.label,p=(e.className,o()(e,["field","id","label","className"]));return m.a.createElement("div",null,m.a.createElement("input",Object.assign({name:a,id:r,type:"radio",value:r,checked:r===n,onChange:i,onBlur:l},p)),m.a.createElement("label",{htmlFor:r},d))},T=function(e){e.value;var t=e.error,a=e.touched,n=(e.id,e.label,e.className,e.children);return m.a.createElement(k,null,n,a&&m.a.createElement(I,{error:t}))},D=function(e){var t=e.setFieldValue,a=Object(r.useState)(null),n=a[0],i=a[1];return m.a.createElement(B,null,m.a.createElement("div",null,m.a.createElement("input",{accept:"image/*",onChange:function(e){console.log(e.target.files[0]);var a=new FormData,n=e.target.files[0];a.append("file",n),u.a.post(v+"/upload",a).then(function(e){console.log(e.data);var a=""+v+e.data;i(a),t("logo",a)}).catch(function(e){return console.log(e)})},type:"file"})),n?m.a.createElement("div",null,m.a.createElement("img",{src:n,alt:""}),m.a.createElement("a",null,"删除")):m.a.createElement("div",{style:{visibility:"hidden"}}))},J=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).validate=function(e){console.log("values: ",e);var t={};return e.name&&e.name.trim()||(t.name="请输入名称"),e.address&&e.address.trim()||(t.address="请输入公司所在地"),e.btm?/^bm/i.test(e.btm)||(t.btm="请输入有效的钱包地址"):t.btm="请输入钱包地址",e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="请输入有效的邮箱地址"):t.email="请输入邮箱地址",e.type||(t.type="请选择所属类别"),t},t.handleSubmit=function(e,t){var a=t.setSubmitting;console.log("submit",e),u.a.post(v+"/supernode",{content:JSON.stringify(e)}).then(function(e){200===e.status&&(g.b.info("提交成功",{postion:g.b.POSITION.TOP_CENTER,autoClose:2e3,hideProgressBar:!0,className:"tost-body"}),a(!1))}).catch(function(e){a(!1)})},t}return i()(t,e),t.prototype.render=function(){var e=!1;try{e=window&&/^\/en/.test(window.location.pathname)}catch(a){}var t=[{name:"name",label:"form_label_name",des:"form_label_name_des"},{name:"address",label:"form_label_location"},{name:"btm",label:"form_label_btm",des:"form_label_btm_des"},{name:"email",label:"form_label_email"},{name:"website",label:"form_label_website"},{name:"wechat",label:"form_label_wechat"},{name:"sn",label:"form_label_sn",des:"form_label_sn_des"},{name:"plan",label:"form_label_plan",type:"textarea"},{name:"wish",label:"form_label_wish",des:"form_label_wish_des",type:"textarea"},{name:"reward",label:"form_label_reward",des:"form_label_reward_des",type:"textarea"},{name:"type",label:"form_label_type",type:"select",options:e?N:R},{name:"logo",label:"form_label_logo",des:"form_label_logo_des",type:"file",options:e?N:R}];return m.a.createElement(f.a,null,m.a.createElement(h.a,{title:"Bystack",keywords:["keyword"]}),m.a.createElement(b.a,{title:m.a.createElement(p.FormattedMessage,{id:"home_title"}),subTitle:m.a.createElement(p.FormattedMessage,{id:"form_title"})}),m.a.createElement(g.a,null),m.a.createElement(y,null,m.a.createElement(c.d,{validate:this.validate,onSubmit:this.handleSubmit},function(e){var a=e.isSubmitting,n=(e.values,e.errors),i=e.setFieldValue;return m.a.createElement(c.c,null,t.map(function(e,t){return m.a.createElement(S,{key:t},m.a.createElement("label",null,m.a.createElement(p.FormattedMessage,{id:e.label})),m.a.createElement("p",null,e.des&&m.a.createElement(p.FormattedMessage,{id:e.des})),"select"===e.type?m.a.createElement(T,{id:"radioGroup",error:n.type},e.options.map(function(t,a){return m.a.createElement(c.b,{key:a,component:C,name:e.name,id:"id_"+a,label:t})})):"file"===e.type?m.a.createElement(D,{setFieldValue:i}):m.a.createElement(c.b,{component:e.type||"input",name:e.name}),m.a.createElement("div",null,m.a.createElement(c.a,{name:e.name,component:"div"})))}),m.a.createElement(A,null),m.a.createElement("div",{style:{textAlign:"center"}},m.a.createElement("button",{type:"submit",disabled:a},m.a.createElement(x.a,{href:""},m.a.createElement(p.FormattedMessage,{id:"plan_btn_apply"})))))})))},t}(r.Component)},451:function(e,t,a){"use strict";var n=a(452),i=a(0),l=a.n(i),o=a(1),r=a.n(o),m=a(463),d=a.n(m),p=a(330);function c(e){var t=e.description,a=e.lang,i=e.meta,o=e.keywords,r=e.title;return l.a.createElement(p.StaticQuery,{query:s,render:function(e){var n=t||e.site.siteMetadata.description;return l.a.createElement(d.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s",meta:[{name:"description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})},data:n})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:r.a.string,lang:r.a.string,meta:r.a.array,keywords:r.a.arrayOf(r.a.string),title:r.a.string.isRequired},t.a=c;var s="1025518380"},452:function(e){e.exports={data:{site:{siteMetadata:{title:"@bytom/<%= proj_name %>",description:"@bytom/<%= proj_des %>",author:"bytom"}}}}},456:function(e,t){e.exports="data:image/png;base64,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"},457:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(0),i=a.n(n),l=a(447),o=a(448),r={small:[174,50],normal:[174,50],large:[174,50]},m={primary:["#fff","#fff","#035BD4","#035BD4","#035BD4"],ghost:["#fff","#000","#fff","rgba(255, 255, 255, 0)","#fff"]},d=l.a.a.withConfig({displayName:"Button__Wrap",componentId:"sxmbsh-0"})(["display:block;border:1px solid #fff;text-align:center;font-size:18px;font-weight:500;cursor:pointer;width:","px;height:","px;line-height:","px;color:",";border-color:",";&:hover{color:",";background-color:",";}background-color:",";margin:0 auto;transition:all 0.2s;@media (max-width:640px){width:130px;height:42px;font-size:14px;line-height:42px;}"],function(e){return r[e.size][0]},function(e){return r[e.size][1]},function(e){return r[e.size][1]},function(e){return m[e.type][0]},function(e){return m[e.type][2]},function(e){return m[e.type][1]},function(e){return m[e.type][4]},function(e){return m[e.type][3]}),p=d.withComponent(o.Link);function c(e){var t=e.children,a=e.size,n=void 0===a?"normal":a,l=e.type,o=void 0===l?"primary":l,r=e.style,m=void 0===r?{}:r,c=e.href,s=void 0===c?"":c;return s?i.a.createElement(p,{to:s,size:n,type:o,style:m},t):i.a.createElement(d,{size:n,type:o,style:m},t)}},462:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(1),o=a.n(l),r=a(448),m=a(447),d=a(456),p=a.n(d),c=m.a.div.withConfig({displayName:"Header__Wrap",componentId:"sc-5wukbf-0"})(["width:100%;height:72px;position:fixed;top:0;background-color:#0F0F0F;@media (max-width:640px){height:50px;}"]),s=m.a.div.withConfig({displayName:"Header__Cont",componentId:"sc-5wukbf-1"})(["width:1110px;margin:0 auto;@media (max-width:640px){padding:0 20px;}"]),u=m.a.img.withConfig({displayName:"Header__Logo",componentId:"sc-5wukbf-2"})(["width:154px;height:36px;margin:18px 0;display:inline-block;vertical-align:middle;@media (max-width:640px){width:90px;height:20px;margin:15px 0;}"]),g=m.a.ul.withConfig({displayName:"Header__Nav",componentId:"sc-5wukbf-3"})(["display:inline-block;vertical-align:top;li{line-height:72px;float:left;margin-left:80px;a{color:#fff;font-size:14px;font-weight:500;}}@media (max-width:640px){display:none;}"]),f=(m.a.a.withConfig({displayName:"Header__Lang",componentId:"sc-5wukbf-4"})(["display:block;width:100px;height:72px;line-height:72px;text-align:right;color:#fff;float:right;@media (max-width:640px){height:50px;}"]),function(){return i.a.createElement(c,null,i.a.createElement(s,null,i.a.createElement("a",{href:"https://bystack.io"},i.a.createElement(u,{src:p.a})),i.a.createElement(g,null)))}),h=(a(330),m.a.div.withConfig({displayName:"Footer__Wrap",componentId:"lqe3ey-0"})(["width:100%;height:60px;line-height:60px;text-align:center;color:#707070;font-size:14px;background-color:#0F0F0F;margin-top:",";@media (max-width:640px){font-size:12px;}"],function(e){return e.home?"100px":"60px"})),x=function(e){var t=e.home;return i.a.createElement(h,{home:t},"Copyright © 2019 Bytom Foundation. All Rights Reserved.")},b=m.a.div.withConfig({displayName:"Layout__Wrap",componentId:"fmplaq-0"})(["width:100%;"]),E=function(e){var t=e.children,a=e.light,n=void 0!==a&&a,l=e.home,o=void 0!==l&&l;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{light:n}),i.a.createElement(b,null,i.a.createElement(r.IntlContextConsumer,null,function(e){var a=e.language;return i.a.Children.map(t,function(e){return i.a.cloneElement(e,{lang:a})})})),i.a.createElement(x,{home:o}))};E.propTypes={children:o.a.node.isRequired};t.a=Object(r.injectIntl)(E)},471:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(0),i=a.n(n),l=a(447),o=(a(448),l.a.h1.withConfig({displayName:"PageTitle__Title",componentId:"sc-1jykafm-0"})(["text-align:center;font-weight:200;line-height:1em;font-size:44px;color:#fff;margin-top:150px;letter-spacing:",";@media (max-width:640px){font-size:31px;letter-spacing:",";margin-top:80px;}"],function(e){return"zh"===e.lang?"18px":"2px"},function(e){return"zh"===e.lang?"8px":"2px"})),r=Object(l.a)(o).withConfig({displayName:"PageTitle__SubTitle",componentId:"sc-1jykafm-1"})(["font-size:24px;line-height:1em;margin:30px 0 60px;font-weight:400;letter-spacing:",";@media (max-width:640px){font-size:16px;margin:15px 0 25px;}"],function(e){return"zh"===e.lang?"8px":"2px"});function m(e){var t=e.title,a=void 0===t?null:t,n=e.subTitle,l=void 0===n?null:n,m=e.lang;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o,{lang:m},a),i.a.createElement(r,{lang:m},l))}},560:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAiUlEQVRYR+3WsQqAMAxF0eZ73Z07u/u9FQWhgkvyEnG4ziY8T4qptcSnb/s42/V1say2aY2uYAQU54KgCMgZVAERRDAiwCaJqM01CCLoEeCy4NF6e7dE8G6qhquqt98HzPzykhETUBRg1YmADUEEPQL8Bz1an10W1FBzPSNWNRFEMCDALg6gPUoOaf+dZWjn+88AAAAASUVORK5CYII="}}]);