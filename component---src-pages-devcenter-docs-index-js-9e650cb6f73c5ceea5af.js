(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{273:function(e,t,n){"use strict";n.r(t);n(68),n(16),n(981);var a=n(982),i=n.n(a),l=(n(535),n(393)),o=n.n(l),c=n(0),r=n.n(c),u=n(281),d=n(368),m=n.n(d),h=n(325),f=u.a.div.withConfig({displayName:"DocContent__Wrap",componentId:"sc-1ua1dj9-0"})(["padding:20px;font-size:14px;line-height:1.8em;"]),p=u.a.div.withConfig({displayName:"DocContent__Article",componentId:"sc-1ua1dj9-1"})(["max-width:800px;margin:0 auto;"]),s=u.a.h1.withConfig({displayName:"DocContent__Title",componentId:"sc-1ua1dj9-2"})(["margin:20px 0 42px 0;font-size:36px;"]);var g=function(e){var t=e.id,n=Object(c.useState)({}),a=n[0],i=n[1];Object(c.useEffect)((function(){console.log(t),l(t)}),[t]);var l=function(e){void 0===e&&(e="godnv2"),m.a.get(h.a.doc_detail+"?id="+e).then((function(e){console.log(e),i(e.data.data)})).catch((function(e){return console.log(e)}))};return r.a.createElement(f,null,r.a.createElement(p,null,r.a.createElement(s,null,a.title),r.a.createElement("article",{dangerouslySetInnerHTML:{__html:a.body_html}})))},v=n(282),y=(n(510),n(322));var E=o.a.SubMenu,b=i.a.Content,x=i.a.Sider,_=u.a.div.withConfig({displayName:"docs__Wrap",componentId:"pu7b2f-0"})([".ant-layout{background:#fff;}.ant-menu-vertical > .ant-menu-item,.ant-menu-vertical-left > .ant-menu-item,.ant-menu-vertical-right > .ant-menu-item,.ant-menu-inline > .ant-menu-item,.ant-menu-vertical > .ant-menu-submenu > .ant-menu-submenu-title,.ant-menu-vertical-left > .ant-menu-submenu > .ant-menu-submenu-title,.ant-menu-vertical-right > .ant-menu-submenu > .ant-menu-submenu-title,.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title{line-height:30px;height:30px;}"]),w=u.a.div.withConfig({displayName:"docs__Logo",componentId:"pu7b2f-1"})(["float:left;width:200px;height:100%;color:#1590ff;font-size:28px;"]),k=u.a.div.withConfig({displayName:"docs__Header",componentId:"pu7b2f-2"})(["height:64px;line-height:64px;padding:0 50px;background:#fff;flex:0 0 auto;box-sizing:border-box;box-shadow:0 2px 8px #f0f1f2;"]),C=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={loading:!1,menu:[],content:""},t.filter=function(e){void 0===e&&(e=[]);var t=[],n=void 0,a=0;e.forEach((function(e,i){e.depth!==a?(!function e(t,n){void 0===t&&(t=[]),t[t.length-1]?n.children&&e(n.children):t.push(n)}(t,e),a=e.depth,n=e):n.children?n.children.push(e):n.children=[e]}))},t.filter2=function(e){var t=[],n=e.map((function(e,t){return e.index=t,e})),a=0;n.forEach((function(e,t){1!==e.depth&&(e.depth!==n[t-1].depth&&(a=n[t-1].index),e.parenIndex=a)})),console.log(n);n.forEach((function(e,n){e.parenIndex||t.push(e)})),console.log(t)},t.fetchData=function(){m.a.get(h.a.doc_menu).then((function(e){var n=e.data.data.content,a=[];n.forEach((function(e){if(1===e.depth&&a.push(e),2===e.depth){var t=a[a.length-1];t.children?t.children.push(e):t.children=[e]}if(3===e.depth){var n=a[a.length-1].children[a[a.length-1].children.length-1];n.children?n.children.push(e):n.children=[e]}})),console.log(a),t.setState({menu:a})})).catch((function(e){console.log(e)}))},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var l=a.prototype;return l.componentDidMount=function(){this.fetchData()},l.render=function(){var e=this.state.menu,t=this.props.location;console.log(t.search.split("=")[1]);var n=t.search.split("=")[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{title:"Bystack"}),r.a.createElement(_,null,r.a.createElement(i.a,{style:{minHeight:"100vh"}},r.a.createElement(k,{style:{background:"#fff"}},r.a.createElement(w,null,r.a.createElement(v.Link,{to:"/"},"BYSTACK")),r.a.createElement("p",{style:{textAlign:"right"}},"开发者中心")),r.a.createElement(i.a,{style:{marginTop:20}},r.a.createElement(x,{width:260,style:{background:"#fff"}},r.a.createElement(o.a,{mode:"inline",style:{height:"100%"},defaultSelectedKeys:[n||"godnv2"],defaultOpenKeys:["0"]},e.map((function(e,t){return e.children?r.a.createElement(E,{key:t,title:e.title},e.children.map((function(e,n){return e.children?r.a.createElement(E,{key:t,title:e.title},e.children.map((function(e,t){return r.a.createElement(o.a.Item,{key:""+e.slug},r.a.createElement(v.Link,{to:"/devcenter/docs?id="+e.slug},e.title))}))):r.a.createElement(o.a.Item,{key:""+e.slug},r.a.createElement(v.Link,{to:"/devcenter/docs?id="+e.slug},e.title))}))):r.a.createElement(o.a.Item,{key:t},e.title)})))),r.a.createElement(i.a,{style:{padding:"0 24px 24px"}},r.a.createElement(b,null,r.a.createElement(g,{id:n})))))))},a}(r.a.Component);t.default=C},981:function(e,t,n){"use strict";n(286),n(250)},982:function(e,t,n){"use strict";n(15),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(849)),i=l(n(789));function l(e){return e&&e.__esModule?e:{default:e}}a.default.Sider=i.default;var o=a.default;t.default=o}}]);