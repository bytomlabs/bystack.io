(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{201:function(e,t,n){"use strict";n.r(t);n(268),n(231);var a=n(217),i=n.n(a),l=(n(278),n(10)),o=n.n(l),r=n(0),c=n.n(r),p=n(211),d=n(216),s=n(369),m=n(259),f=n.n(m),u=n(227),g=n(221),h=n(252),x=n(219),b=p.a.div.withConfig({displayName:"record__Cont",componentId:"sc-1rln75j-0"})(["width:100%;background-color:#fff;"]),E=p.a.div.withConfig({displayName:"record__Node",componentId:"sc-1rln75j-1"})(["display:flex;padding:16px;align-items:center;justify-content:space-between;border-bottom:0.5px solid #F0F0F0;&>span{background-color:#91D303;display:inline-block;width:26px;height:26px;text-align:center;line-height:26px;color:#fff;border-radius:30px;}&>div{display:flex;flex:1;align-items:center;img{width:46px;height:46px;border:0.5px solid #d5d5d5;border-radius:4px;display:inline-block;}div{display:inline-block;margin-left:12px;h1{font-size:15px;color:#101010;font-weight:500;margin:0;}p{font-size:12px;color:#8A8A8A;margin:10px 0 0 0;}}}"]),v=p.a.div.withConfig({displayName:"record__Loading",componentId:"sc-1rln75j-2"})(["width:100%;height:80px;line-height:80px;text-align:center;"]),w=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={list:[],loading:!1},t.fetchData=function(){try{window.bytom.default_account.address}catch(e){console.log("非bycoin")}try{t.setState({loading:!0}),f.a.post(x.a.node_list_mobile,{address:"bm1qp58rjudg0yp6ayyda5w24yp02j09k59jlnuz7r"}).then(function(e){var n=e.data.data.supernode||[];n=n.filter(function(e){return e.vote_count}).sort(function(e,t){return t.percent-e.percent});var a=[e.data.data.voted];t.setState({list:n,voted:a,loading:!1})})}catch(e){console.log(e),t.setState({loading:!1})}},t.alert=function(e){window.bycoin.callAPI("native.toastInfo",e)},t}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.fetchData()},n.render=function(){var e=this.state,t=e.list,n=e.loading;this.props.language;return c.a.createElement(u.a,null,c.a.createElement(g.a,{title:"Bystack",keywords:["keyword"]}),c.a.createElement(h.a,{title:c.a.createElement("span",{style:{letterSpacing:0}},"89898 BTM"),subTitle:"预期收益"}),c.a.createElement(b,null,n?c.a.createElement(v,null,c.a.createElement(i.a,{type:"loading",spin:!0})):null,!t.length&&!n&&c.a.createElement(s.a,null),t.map(function(e,t){return c.a.createElement(E,{key:t},c.a.createElement("div",null,c.a.createElement("img",{src:x.a.imgage_host+e.reserved_1,alt:""}),c.a.createElement("div",null,c.a.createElement("h1",null,e.name),c.a.createElement("p",null,"票数：",e.vote_count," "))))})))},t}(r.Component);t.default=Object(d.injectIntl)(function(){return c.a.createElement(d.IntlContextConsumer,null,function(e){var t=e.language;return c.a.createElement(w,{language:t})})})},219:function(e,t,n){"use strict";n(216);var a="true"==={}.BUILD_FOR_TEST?"//apitest.bystack.com/supernode/v1":"//api.bystack.com/supernode/v1";t.a={imgage_host:a,news_cn:a+"/news",news_en:a+"/news/english",node_list:a+"/sn-table",node_list_mobile:a+"/sn-table/voted",node_detail:a+"/sn-table/detail",vote:a+"/vote",upload:a+"/upload",apply:a+"/supernode",btm_asset_id:"ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",nav:[{title:"nav_bp",link:"",href:"/node",target:"_top"},{title:"nav_doc",href:"https://github.com/Bytom/vapor/wiki/API-Doc"}]}},221:function(e,t,n){"use strict";var a=n(222),i=n(0),l=n.n(i),o=n(1),r=n.n(o),c=n(239),p=n.n(c),d=n(83);function s(e){var t=e.description,n=e.lang,i=e.meta,o=e.keywords,r=e.title;return l.a.createElement(d.StaticQuery,{query:m,render:function(e){var a=t||e.site.siteMetadata.description;return l.a.createElement(p.a,{htmlAttributes:{lang:n},title:r,titleTemplate:"%s",meta:[{name:"description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})},data:a})}s.defaultProps={lang:"en",meta:[],keywords:[]},s.propTypes={description:r.a.string,lang:r.a.string,meta:r.a.array,keywords:r.a.arrayOf(r.a.string),title:r.a.string.isRequired},t.a=s;var m="1025518380"},222:function(e){e.exports={data:{site:{siteMetadata:{title:"@bytom/<%= proj_name %>",description:"@bytom/<%= proj_des %>",author:"bytom"}}}}},224:function(e,t){e.exports="data:image/png;base64,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"},227:function(e,t,n){"use strict";var a=n(0),i=n.n(a),l=n(1),o=n.n(l),r=n(216),c=n(211),p=(n(240),n(236)),d=n.n(p),s=(n(231),n(217)),m=n.n(s),f=(n(248),n(232)),u=n.n(f),g=(n(249),n(219)),h=n(224),x=n.n(h),b=c.a.div.withConfig({displayName:"Header__Wrap",componentId:"sc-5wukbf-0"})(["width:100%;height:72px;background-color:#0F0F0F;@media (max-width:640px){height:50px;}"]),E=c.a.div.withConfig({displayName:"Header__Cont",componentId:"sc-5wukbf-1"})(["width:1110px;margin:0 auto;@media (max-width:640px){padding:0 20px;box-sizing:border-box;width:100%;}"]),v=c.a.img.withConfig({displayName:"Header__Logo",componentId:"sc-5wukbf-2"})(["width:154px;height:36px;margin:18px 0;display:inline-block;vertical-align:middle;@media (max-width:640px){width:90px;height:20px;margin:15px 0;}"]),w=c.a.ul.withConfig({displayName:"Header__Nav",componentId:"sc-5wukbf-3"})(["display:inline-block;vertical-align:top;margin-left:50px;li{line-height:72px;float:left;margin-left:30px;a{color:#fff;font-size:14px;font-weight:500;:hover{color:#035BD4;}}}@media (max-width:640px){display:none;}"]),y=c.a.div.withConfig({displayName:"Header__Lang",componentId:"sc-5wukbf-4"})(["display:block;width:100px;height:72px;line-height:72px;text-align:right;color:#fff;float:right;cursor:pointer;@media (max-width:640px){height:50px;line-height:50px;}"]),S=c.a.div.withConfig({displayName:"Header__MobileMenu",componentId:"sc-5wukbf-5"})(["width:100px;height:72px;line-height:72px;text-align:right;color:#fff;float:right;cursor:pointer;width:30px;display:none;@media (max-width:640px){display:block;height:50px;line-height:50px;}"]),k=function(){var e=function(e){var t=e.link,n=void 0===t?"":t,a=e.href,l=void 0===a?"":a,o=e.title,c=void 0===o?"":o,p=e.target,d=void 0===p?"_blank":p;return l?i.a.createElement("a",{key:l,target:d,rel:"noopener noreferrer",href:l},i.a.createElement(r.FormattedMessage,{id:c})):n?i.a.createElement(r.Link,{key:n,to:n},i.a.createElement(r.FormattedMessage,{id:c})):void 0},t=i.a.createElement(u.a,null,g.a.nav.map(function(t,n){return i.a.createElement(u.a.Item,{key:n},i.a.createElement(e,t))}));return i.a.createElement(b,null,i.a.createElement(E,{className:"clearfix"},i.a.createElement("a",{href:"https://www.bystack.com"},i.a.createElement(v,{src:x.a})),i.a.createElement(w,null,i.a.createElement(function(){return g.a.nav.map(function(t,n){return i.a.createElement("li",{key:n},i.a.createElement(e,t))})},null)),i.a.createElement(S,null,i.a.createElement(d.a,{trigger:["click"],overlay:t},i.a.createElement("a",{style:{height:"100%",color:"#fff",display:"inline-block"}},i.a.createElement(m.a,{type:"menu"})))),i.a.createElement(r.IntlContextConsumer,null,function(e){e.languages;var t=e.language;return i.a.createElement(y,{onClick:function(){return Object(r.changeLocale)("zh"===t?"en":"zh")}},i.a.createElement(r.FormattedMessage,{id:"nav_lang"}))})))},A=c.a.div.withConfig({displayName:"Footer__Wrap",componentId:"lqe3ey-0"})(["width:100%;height:60px;line-height:60px;text-align:center;color:#707070;font-size:14px;background-color:#0F0F0F;margin-top:",";position:",";bottom:0;@media (max-width:640px){font-size:12px;line-height:1.5em;padding-top:16px;position:static;}"],function(e){return e.home?"0":"60px"},function(e){return e.fixedFooter?"fixed":"static"}),I=function(e){var t=e.home,n=e.fixedFooter,a=void 0!==n&&n;return i.a.createElement(A,{fixedFooter:a,home:t},i.a.createElement("span",null,"Copyright © 2019 Bytom Foundation. All Rights Reserved"))},R=c.a.div.withConfig({displayName:"Layout__Wrap",componentId:"fmplaq-0"})(["width:100%;"]),B=function(e){var t=e.children,n=e.light,a=void 0!==n&&n,l=e.home,o=void 0!==l&&l,c=e.fixedFooter,p=void 0!==c&&c;return i.a.createElement(i.a.Fragment,null,i.a.createElement(k,{light:a}),i.a.createElement(R,null,i.a.createElement(r.IntlContextConsumer,null,function(e){var n=e.language;return i.a.Children.map(t,function(e){return i.a.cloneElement(e,{lang:n})})})),i.a.createElement(I,{home:o,fixedFooter:p}))};B.propTypes={children:o.a.node.isRequired};t.a=Object(r.injectIntl)(B)},252:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(0),i=n.n(a),l=n(211),o=n(253),r=n.n(o),c=l.a.h1.withConfig({displayName:"PageTitle__Title",componentId:"sc-1jykafm-0"})(["text-align:center;font-weight:200;line-height:1em;font-size:44px;color:#fff;margin-top:78px;letter-spacing:",";@media (max-width:640px){font-size:31px;letter-spacing:",";margin-top:25px;padding-bottom:12px;}"],function(e){return"zh"===e.lang?"18px":"2px"},function(e){return"zh"===e.lang?"8px":"2px"}),p=Object(l.a)(c).withConfig({displayName:"PageTitle__SubTitle",componentId:"sc-1jykafm-1"})(["font-size:24px;line-height:1em;margin:30px 0 60px;font-weight:400;letter-spacing:",";@media (max-width:640px){font-size:16px;margin:15px 0 25px;letter-spacing:2px;}"],function(e){return"zh"===e.lang?"8px":"2px"}),d=l.a.img.withConfig({displayName:"PageTitle__Img",componentId:"sc-1jykafm-2"})(["display:block;width:200px;height:auto;margin:20px auto 0 auto;"]);function s(e){var t=e.title,n=void 0===t?null:t,a=e.subTitle,l=void 0===a?null:a,o=e.imgTitle,s=void 0!==o&&o,m=e.lang,f=e.extra;return i.a.createElement(i.a.Fragment,null,s&&i.a.createElement(d,{src:r.a,alt:""}),i.a.createElement(c,{lang:m},n),l&&i.a.createElement(p,{lang:m},l),f&&i.a.createElement(i.a.Fragment,null,f))}},253:function(e,t,n){e.exports=n.p+"static/bystack-a371f3ff5d16bb553bfaf5457b66ed41.png"},278:function(e,t,n){"use strict";var a=n(13),i=n(28),l=n(29),o=n(22),r=[].sort,c=[1,2,3];a(a.P+a.F*(o(function(){c.sort(void 0)})||!o(function(){c.sort(null)})||!n(279)(r)),"Array",{sort:function(e){return void 0===e?r.call(l(this)):r.call(l(this),i(e))}})},279:function(e,t,n){"use strict";var a=n(22);e.exports=function(e,t){return!!e&&a(function(){t?e.call(null,function(){},1):e.call(null)})}},369:function(e,t,n){"use strict";var a=n(0),i=n.n(a),l=n(211),o=n(216),r=n(370),c=n.n(r),p=l.a.div.withConfig({displayName:"Empty__Wrap",componentId:"sc-1toa2z4-0"})(["text-align:center;padding:150px;img{width:138px;}p{color:#808A95;line-height:50px;}"]);t.a=function(e){var t=e.style,n=void 0===t?{}:t;return i.a.createElement(p,{style:n},i.a.createElement("img",{src:c.a,alt:""}),i.a.createElement("p",null,i.a.createElement(o.FormattedMessage,{id:"empty_list"})))}},370:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARQAAACcBAMAAABMyklLAAAAIVBMVEVHcEzy8vL09PTt7e34+Pjr6+v5+fno6Oj29vbw8PDi4uKcylWqAAAABnRSTlMATm7gxSfo+SdJAAAD9klEQVR42u2cPVPcMBCGCR9DG4oUpEu6+wl0tLRpGNIxMB6nptDg9jIaqU6BSEuhGf/KSFr5g8yhlX1aUbDLYXMFvveefd+1bD4ODri4uLi4Pnj9+F6rvmFSNs+J+tMUrF+IkpPnpBRZUsvntJTjpJSHolIu01LOU0qeXopKuU1LuUpLUSWl3CeVfEr2p3soKiVtltOklP5F1TNLMspP/YOqZpZ0lP86KdXMcpi2SmkpKbPc6GR/7IuqZpardH8cFVPJLEiUA5VKZjlKR7l3c6WWWZAo99ZJ0XXM8ohYJVCpYhYsyt62Slcxyw3SH6BSxSxYlK33SuE4X66KMjTI1DDLMRJlT0V6LfRmOcesEr1i6M2CRbnvhE+Qpj8N4VG2faBCb5Yb1Cq9CAkyhtosG6w/0bb0k+XEoP2xwbb0ZkGjDLZtVekz4u2KKFsrwLbUk+UCtUovQIrRtGbBo9xbaJBxWkjNcor2Z06F1CwbXErnEtR629KuWU7w/oQGtd60xlCaJSPKLssQZqNIJwseZZflMcyGcrJc4VF2rrXBK54KnVkyFnDOta5BTTCtMnRrlqMMqzgqToqEcUtnlk1Gfzpv29ZD8RmiMgt2WwVsK0CKgjwTmeUwpz8QZhi3mmzNgtxWGa0i4tJJle7Q5aIo22BbGPueCo1ZcqLsqPgGSTl4hWayZEUZqDQRC9XVUMZZeaCiwoIlGJfELI85/fFjZVjbhtFCYZbDLKvYKUH+JFRgVXl3NtWXzNsq4ynIeaWFeRserlty9UPKu+W3Vaax4qZt9G3U4ndq6SNCVb/X3FaZvNI04bYGKDEGzkda6yVbHd/G3ZprMbgIClTaOFfC4bSCIy/bxu9X2xXXYsMaLlBp46I/KAEueqCet9UR6Rb7ierXfmd1YqLi535ctgw7s2CrwG47vJInxQYt4BU9HXH+JHcbcO70yn/1c7cUYV8nKDZIwxM4F2Ruh1pJxcYwN62c0myGOCxLUCy9XUtlPlem9uxTa6kMXpHtYBE9WmXc5W/9u7lfRwXGiqcSOqTHLsVezZ/kbM0+VGz0SjO8KaNemXAhFFcrqXSjV9pWFSmNU3mjQWKkImUZLSup2BmVQkLkSirdjIrDUqKUXCXFiq6beUUWuPRQGVKuhbDzckTcwwoxUfFH2peN8xzqlWv3sg6BhQ//VQAyzZXQIb/br9oGp+IEWNcP+BRhzEbTDglyx/GN2q9yqEwvHGumpTKV2at3o5Z3opKod6DyphSmwlSYClNhKkyFqTAVpsJUmApTYSpMhakwFabCVJgKU2EqTIWpMBWmwlSYClNhKkyFqTR7SqH+k9DXvwl8Vq34fzRxcXFxfej6BzB4f/9LX/oHAAAAAElFTkSuQmCC"}}]);