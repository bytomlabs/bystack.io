(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{208:function(e,t,n){"use strict";n.r(t);n(268),n(90),n(85),n(30);var a=n(10),i=n.n(a),o=n(0),r=n.n(o),l=n(211),c=n(216),d=n(259),p=n.n(d),s=n(227),m=n(221),f=n(351),u=(n(331),n(338)),g=n.n(u),h=l.a.div.withConfig({displayName:"SocialMedia__Wrap",componentId:"g1audn-0"})(["a{margin:0 5px 0 0;}"]);var v=function(e){var t=e.data,n=(void 0===t?"":t).split(/\s+|\n/).map(function(e){return e.split("*")});return console.log(n),r.a.createElement(h,null,n.map(function(e,t){return/微信|wechat/gi.test(e[0])?r.a.createElement(g.a,{placement:"top",content:r.a.createElement("span",null,e[1])},r.a.createElement("a",null,e[0])):r.a.createElement("a",{target:"_blank",href:e[1]},e[0])}))},y=n(219),x=l.a.div.withConfig({displayName:"node_detail__Cont",componentId:"sc-1yiqkdq-0"})(["width:1110px;margin:0 auto;position:relative;z-index:99;@media (max-width:640px){width:100%;}"]),b=l.a.div.withConfig({displayName:"node_detail__Header",componentId:"sc-1yiqkdq-1"})(["background-color:#fff;height:auto;width:100%;padding-bottom:20px;@media (max-width:640px){width:auto;margin:0 20px;height:auto;}"]),w=l.a.div.withConfig({displayName:"node_detail__Head",componentId:"sc-1yiqkdq-2"})(["display:flex;padding:30px 40px;align-items:center;box-shadow:0px 2px 4px rgba(0,0,0,0.04);&>img{width:96px;height:96px;display:inline-block;border:1px solid #ececec;border-radius:8px;}&>div:first-of-type{flex:1;margin:0 30px;p{color:#808A95;font-size:13px;line-height:1.6em;font-weight:300;}h1{color:#1F2021;font-size:18px;line-height:2em;margin:5px 0 0 0;}}@media (max-width:640px){flex-direction:column;&>div:last-of-type{padding-top:15px;}&>div:first-of-type{margin:0;p{width:auto;}h1{text-align:center;}}}"]),E=l.a.div.withConfig({displayName:"node_detail__Line",componentId:"sc-1yiqkdq-3"})(["height:1px;background-color:#ECEEEF;margin:0 40px 20px 40px;"]),k=l.a.table.withConfig({displayName:"node_detail__TableLight",componentId:"sc-1yiqkdq-4"})(["font-size:14px;td{padding:4px 0;vertical-align:top;padding-right:18px;word-break:break-word;&:last-child p{margin:0;}}tr>td:first-child{color:#808A95;width:95px;font-weight:300;}@media (max-width:640px){p{word-break:break-all;}&:last-child p{-webkit-line-clamp:3;padding-right:0;}}"]),S=l.a.div.withConfig({displayName:"node_detail__Detail",componentId:"sc-1yiqkdq-5"})(["display:flex;padding:0 40px;","{width:50%;}@media (max-width:640px){flex-direction:column;","{width:100%;}}"],k,k),I=(l.a.div.withConfig({displayName:"node_detail__Address",componentId:"sc-1yiqkdq-6"})(["width:35vw;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"]),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={list:[],data:{},loading:!1},t.fetchData=function(e){e&&p.a.get(y.a.node_detail+"/"+e).then(function(e){var n=Object.assign({},e.data.data.super_node_data,{percent:e.data.data.percent,vote:e.data.data.vote_count});t.setState({data:n,list:e.data.data.vote||[]})}).catch(function(e){console.log(e)})},t}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.props.location.search.split("=")[1];this.fetchData(e)},n.render=function(){var e=this.state.data,t="zh"===this.props.lang,n=[[{title:r.a.createElement(c.FormattedMessage,{id:"node_detail_homepage"}),value:e.homepage},{title:r.a.createElement(c.FormattedMessage,{id:"node_detail_reward"}),value:""+(e.reward||"")},{title:r.a.createElement(c.FormattedMessage,{id:"node_detail_location"}),value:e["location"+(t?"":"_en")]},{title:r.a.createElement(c.FormattedMessage,{id:"node_detail_type"}),value:e["node_type"+(t?"":"_en")]}],[{title:r.a.createElement(c.FormattedMessage,{id:"node_detail_sn"}),value:r.a.createElement(v,{data:e["social_list"+(t?"":"_en")]})},{title:r.a.createElement(c.FormattedMessage,{id:"node_detail_manifesto"}),value:e["declaration"+(t?"":"_en")]}]];return r.a.createElement(s.a,{fixedFooter:!0},r.a.createElement(m.a,{title:"Bystack",keywords:["keyword"]}),r.a.createElement(x,null,r.a.createElement("div",{style:{padding:"50px 0 30px"}},r.a.createElement(f.a,{style:{backgroundColor:"inherit"},title:r.a.createElement(c.FormattedMessage,{id:"node_detail_title"})})),r.a.createElement(b,null,r.a.createElement(w,null,r.a.createElement("img",{src:""+y.a.imgage_host+(e.reserved_1||e.logo),alt:""}),r.a.createElement("div",null,r.a.createElement("h1",null,e.name),r.a.createElement("p",null,e.introduce))),r.a.createElement(E,null),r.a.createElement(S,null,r.a.createElement(k,null,r.a.createElement("tbody",null,n[0].map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.title),r.a.createElement("td",null,r.a.createElement(r.a.Fragment,null,e.value)))}))),r.a.createElement(k,null,r.a.createElement("tbody",null,n[1].map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.title),r.a.createElement("td",null,r.a.createElement(r.a.Fragment,null,e.value)))})))))))},t}(r.a.Component));t.default=Object(c.injectIntl)(function(e){return r.a.createElement(c.IntlContextConsumer,null,function(t){var n=t.language;return r.a.createElement(I,Object.assign({},e,{lang:n}))})})},219:function(e,t,n){"use strict";n(216);var a="true"==={}.BUILD_FOR_TEST?"//apitest.bystack.com/supernode/v1":"//api.bystack.com/supernode/v1";t.a={imgage_host:a,news_cn:a+"/news",news_en:a+"/news/english",node_list:a+"/sn-table",node_list_mobile:a+"/sn-table/voted",node_detail:a+"/sn-table/detail",vote:a+"/vote",btm_asset_id:"ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",nav:[{title:"nav_bp",link:"",href:"/node"},{title:"nav_doc",href:"https://github.com/Bytom/vapor/wiki/API-Doc"}]}},221:function(e,t,n){"use strict";var a=n(222),i=n(0),o=n.n(i),r=n(1),l=n.n(r),c=n(239),d=n.n(c),p=n(83);function s(e){var t=e.description,n=e.lang,i=e.meta,r=e.keywords,l=e.title;return o.a.createElement(p.StaticQuery,{query:m,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(d.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s",meta:[{name:"description",content:a}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(i)})},data:a})}s.defaultProps={lang:"en",meta:[],keywords:[]},s.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=s;var m="1025518380"},222:function(e){e.exports={data:{site:{siteMetadata:{title:"@bytom/<%= proj_name %>",description:"@bytom/<%= proj_des %>",author:"bytom"}}}}},224:function(e,t){e.exports="data:image/png;base64,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"},227:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(1),r=n.n(o),l=n(216),c=n(211),d=(n(240),n(236)),p=n.n(d),s=(n(231),n(217)),m=n.n(s),f=(n(248),n(232)),u=n.n(f),g=(n(249),n(219)),h=n(224),v=n.n(h),y=c.a.div.withConfig({displayName:"Header__Wrap",componentId:"sc-5wukbf-0"})(["width:100%;height:72px;background-color:#0F0F0F;@media (max-width:640px){height:50px;}"]),x=c.a.div.withConfig({displayName:"Header__Cont",componentId:"sc-5wukbf-1"})(["width:1110px;margin:0 auto;@media (max-width:640px){padding:0 20px;box-sizing:border-box;width:100%;}"]),b=c.a.img.withConfig({displayName:"Header__Logo",componentId:"sc-5wukbf-2"})(["width:154px;height:36px;margin:18px 0;display:inline-block;vertical-align:middle;@media (max-width:640px){width:90px;height:20px;margin:15px 0;}"]),w=c.a.ul.withConfig({displayName:"Header__Nav",componentId:"sc-5wukbf-3"})(["display:inline-block;vertical-align:top;margin-left:50px;li{line-height:72px;float:left;margin-left:30px;a{color:#fff;font-size:14px;font-weight:500;:hover{color:#035BD4;}}}@media (max-width:640px){display:none;}"]),E=c.a.div.withConfig({displayName:"Header__Lang",componentId:"sc-5wukbf-4"})(["display:block;width:100px;height:72px;line-height:72px;text-align:right;color:#fff;float:right;cursor:pointer;@media (max-width:640px){height:50px;line-height:50px;}"]),k=c.a.div.withConfig({displayName:"Header__MobileMenu",componentId:"sc-5wukbf-5"})(["width:100px;height:72px;line-height:72px;text-align:right;color:#fff;float:right;cursor:pointer;width:30px;display:none;@media (max-width:640px){display:block;height:50px;line-height:50px;}"]),S=function(){var e=function(e){var t=e.link,n=void 0===t?"":t,a=e.href,o=void 0===a?"":a,r=e.title,c=void 0===r?"":r;return o?i.a.createElement("a",{key:o,target:"_blank",rel:"noopener noreferrer",href:o},i.a.createElement(l.FormattedMessage,{id:c})):n?i.a.createElement(l.Link,{key:n,to:n},i.a.createElement(l.FormattedMessage,{id:c})):void 0},t=i.a.createElement(u.a,null,g.a.nav.map(function(t,n){return i.a.createElement(u.a.Item,{key:n},i.a.createElement(e,t))}));return i.a.createElement(y,null,i.a.createElement(x,{className:"clearfix"},i.a.createElement("a",{href:"https://www.bystack.com"},i.a.createElement(b,{src:v.a})),i.a.createElement(w,null,i.a.createElement(function(){return g.a.nav.map(function(t,n){return i.a.createElement("li",{key:n},i.a.createElement(e,t))})},null)),i.a.createElement(k,null,i.a.createElement(p.a,{trigger:"click",overlay:t},i.a.createElement("a",{style:{height:"100%",color:"#fff",display:"inline-block"}},i.a.createElement(m.a,{type:"menu"})))),i.a.createElement(l.IntlContextConsumer,null,function(e){e.languages;var t=e.language;return i.a.createElement(E,{onClick:function(){return Object(l.changeLocale)("zh"===t?"en":"zh")}},i.a.createElement(l.FormattedMessage,{id:"nav_lang"}))})))},I=c.a.div.withConfig({displayName:"Footer__Wrap",componentId:"lqe3ey-0"})(["width:100%;height:60px;line-height:60px;text-align:center;color:#707070;font-size:14px;background-color:#0F0F0F;margin-top:",";position:",";bottom:0;@media (max-width:640px){font-size:12px;line-height:1.5em;padding-top:16px;position:static;}"],function(e){return e.home?"0":"60px"},function(e){return e.fixedFooter?"fixed":"static"}),N=function(e){var t=e.home,n=e.fixedFooter,a=void 0!==n&&n;return i.a.createElement(I,{fixedFooter:a,home:t},"Copyright © 2019 Bytom Foundation. All Rights Reserved.")},A=c.a.div.withConfig({displayName:"Layout__Wrap",componentId:"fmplaq-0"})(["width:100%;"]),C=function(e){var t=e.children,n=e.light,a=void 0!==n&&n,o=e.home,r=void 0!==o&&o,c=e.fixedFooter,d=void 0!==c&&c;return i.a.createElement(i.a.Fragment,null,i.a.createElement(S,{light:a}),i.a.createElement(A,null,i.a.createElement(l.IntlContextConsumer,null,function(e){var n=e.language;return i.a.Children.map(t,function(e){return i.a.cloneElement(e,{lang:n})})})),i.a.createElement(N,{home:r,fixedFooter:d}))};C.propTypes={children:r.a.node.isRequired};t.a=Object(l.injectIntl)(C)},331:function(e,t,n){"use strict";n(177),n(178)},338:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(0)),i=l(n(329)),o=n(215),r=l(n(226));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n},g=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=s(this,m(t).apply(this,arguments))).saveTooltip=function(t){e.tooltip=t},e.renderPopover=function(t){var n=t.getPrefixCls,o=e.props,r=o.prefixCls,l=u(o,["prefixCls"]);delete l.title;var c=n("popover",r);return a.createElement(i.default,d({},l,{prefixCls:c,ref:e.saveTooltip,overlay:e.getOverlay(c)}))},e}var n,l,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,a.Component),n=t,(l=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"getOverlay",value:function(e){var t=this.props,n=t.title,i=t.content;return(0,r.default)(!("overlay"in this.props),"Popover","`overlay` is removed, please use `content` instead, see: https://u.ant.design/popover-content"),a.createElement("div",null,n&&a.createElement("div",{className:"".concat(e,"-title")},n),a.createElement("div",{className:"".concat(e,"-inner-content")},i))}},{key:"render",value:function(){return a.createElement(o.ConfigConsumer,null,this.renderPopover)}}])&&p(n.prototype,l),c&&p(n,c),t}();t.default=g,g.defaultProps={placement:"top",transitionName:"zoom-big",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}}},351:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n(0),i=n.n(a),o=n(211),r=o.a.div.withConfig({displayName:"BlockTitle__Wrap",componentId:"ksdd5l-0"})(["width:100%;height:60px;display:flex;justify-content:space-around;align-items:center;background-color:#080808;"]),l=o.a.h1.withConfig({displayName:"BlockTitle__Title",componentId:"ksdd5l-1"})(["color:#fff;font-size:24px;font-weight:400;margin:0;"]),c=o.a.span.withConfig({displayName:"BlockTitle__Line",componentId:"ksdd5l-2"})(["width:400px;display:block;height:1px;opacity:0.25;background-color:#fff;@media (max-width:640px){width:20%;}"]);function d(e){var t=e.title,n=e.style;return i.a.createElement(r,{style:n},i.a.createElement(c,null),i.a.createElement(l,null,t),i.a.createElement(c,null))}}}]);