(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{263:function(e,t,n){"use strict";n.r(t);n(68),n(16),n(964);var a=n(965),o=n.n(a),i=(n(526),n(386)),c=n.n(i),l=n(0),r=n.n(l),d=n(274),u=n(361),f=n.n(u),h=n(317),p=d.a.div.withConfig({displayName:"DocContent__Wrap",componentId:"sc-1b0c9ww-0"})(["padding:20px;font-size:14px;line-height:1.8em;"]),s=d.a.div.withConfig({displayName:"DocContent__Article",componentId:"sc-1b0c9ww-1"})(["max-width:800px;margin:0 auto;"]),m=d.a.h1.withConfig({displayName:"DocContent__Title",componentId:"sc-1b0c9ww-2"})(["margin:20px 0;font-size:26px;"]);var g=function(e){var t=e.id,n=Object(l.useState)({}),a=n[0],o=n[1];Object(l.useEffect)((function(){console.log(t),i(t)}),[t]);var i=function(e){void 0===e&&(e="godnv2"),f.a.get(h.a.doc_detail+"?id="+e).then((function(e){console.log(e),o(e.data.data)})).catch((function(e){return console.log(e)}))};return r.a.createElement(p,null,r.a.createElement(s,null,r.a.createElement(m,null,a.title),r.a.createElement("article",{dangerouslySetInnerHTML:{__html:a.body_html}})))},y=n(276),v=(n(503),n(360));var E=c.a.SubMenu,w=o.a.Content,_=o.a.Sider,x=d.a.div.withConfig({displayName:"docs__Wrap",componentId:"n8yafw-0"})([".ant-layout{background:#fff;}"]),b=d.a.div.withConfig({displayName:"docs__Logo",componentId:"n8yafw-1"})(["float:left;width:200px;height:100%;color:#1590ff;font-size:28px;"]),k=d.a.div.withConfig({displayName:"docs__Header",componentId:"n8yafw-2"})(["height:64px;line-height:64px;padding:0 50px;background:#fff;flex:0 0 auto;box-sizing:border-box;box-shadow:0 2px 8px #f0f1f2;"]),C=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).state={loading:!1,menu:[],content:""},t.filter=function(e){void 0===e&&(e=[]);var t=[],n=void 0,a=0;e.forEach((function(e,o){e.depth!==a?(!function e(t,n){void 0===t&&(t=[]),t[t.length-1]?n.children&&e(n.children):t.push(n)}(t,e),a=e.depth,n=e):n.children?n.children.push(e):n.children=[e]}))},t.filter2=function(e){var t=[],n=e.map((function(e,t){return e.index=t,e})),a=0;n.forEach((function(e,t){1!==e.depth&&(e.depth!==n[t-1].depth&&(a=n[t-1].index),e.parenIndex=a)})),console.log(n);n.forEach((function(e,n){e.parenIndex||t.push(e)})),console.log(t)},t.fetchData=function(){f.a.get(h.a.doc_menu).then((function(e){var n=e.data.data.content,a=[];n.forEach((function(e){if(1===e.depth&&a.push(e),2===e.depth){var t=a[a.length-1];t.children?t.children.push(e):t.children=[e]}if(3===e.depth){var n=a[a.length-1].children[a[a.length-1].children.length-1];n.children?n.children.push(e):n.children=[e]}})),console.log(a),t.setState({menu:a})})).catch((function(e){console.log(e)}))},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.componentDidMount=function(){this.fetchData()},i.render=function(){var e=this.state.menu,t=this.props.location;console.log(t.search.split("=")[1]);var n=t.search.split("=")[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{title:"Bystack"}),r.a.createElement(x,null,r.a.createElement(o.a,{style:{minHeight:"100vh"}},r.a.createElement(k,{style:{background:"#fff"}},r.a.createElement(b,null,r.a.createElement(y.Link,{to:"/"},"BYSTACK")),r.a.createElement("p",{style:{textAlign:"right"}},"开发者中心")),r.a.createElement(o.a,{style:{marginTop:20}},r.a.createElement(_,{width:260,style:{background:"#fff"}},r.a.createElement(c.a,{mode:"inline",style:{height:"100%"},defaultSelectedKeys:[n||"godnv2"],defaultOpenKeys:["0"]},e.map((function(e,t){return e.children?r.a.createElement(E,{key:t,title:e.title},e.children.map((function(e,n){return e.children?r.a.createElement(E,{key:t,title:e.title},e.children.map((function(e,t){return r.a.createElement(c.a.Item,{key:""+e.slug},r.a.createElement(y.Link,{to:"/devcenter/docs?id="+e.slug},e.title))}))):r.a.createElement(c.a.Item,{key:""+e.slug},r.a.createElement(y.Link,{to:"/devcenter/docs?id="+e.slug},e.title))}))):r.a.createElement(c.a.Item,{key:t},e.title)})))),r.a.createElement(o.a,{style:{padding:"0 24px 24px"}},r.a.createElement(w,null,r.a.createElement(g,{id:n})))))))},a}(r.a.Component);t.default=C},964:function(e,t,n){"use strict";n(279),n(249)},965:function(e,t,n){"use strict";n(15),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(832)),o=i(n(779));function i(e){return e&&e.__esModule?e:{default:e}}a.default.Sider=o.default;var c=a.default;t.default=c}}]);