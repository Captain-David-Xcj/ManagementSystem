(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,n){e.exports=n(193)},193:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(9),r=n.n(c),o=n(14),l=n(15),s=n(17),u=n(16),p=n(18),h=n(196),y=n(195),m=n(22),g=(n(123),n(29)),d=function(e){return{type:"ADD_PAGE",page:e}},f=function(e){return{type:"DELETE_PAGE",index:e}},v=function(e){return{type:"CHANGE_PAGE",key:e}},k=y.a.Item,b=y.a.SubMenu,E=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={menuItems:e.menuItems,backEndMenuUrl:e.backEndMenuUrl,pageList:[],activeKey:""},n.props.addPage({title:"Welcome",key:"0",component:"Welcome",content:"\u6b22\u8fce\u6b22\u8fce\uff0c\u70ed\u70c8\u6b22\u8fce123\uff01"}),n.props.history.push("/0",n.state),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){this.setState({pageList:e.pageList,activeKey:e.activeKey})}},{key:"formSubmenusChild",value:function(e){var t=this,n=i.a.createElement("div",null),a=e.child;return"undefined"!=typeof a&&a.length>0?(n=a.map(function(e,n){return t.formSubmenusChild(e)}),i.a.createElement(b,{key:e.key,title:i.a.createElement("span",null,i.a.createElement(m.a,{type:e.icon}),i.a.createElement("span",null,e.tittle))},n)):i.a.createElement(k,{routeurl:"/".concat(e.key),key:e.key,component:e.component,tittle:e.tittle},i.a.createElement(m.a,{type:e.icon}),e.tittle)}},{key:"handleClick",value:function(e){console.log(e);for(var t=this.state.pageList,n=0;n<t.length;n++)if(t[n].key===e.key)return console.log("\u8fd9\u4e2a\u6807\u7b7e\u9875\u5df2\u7ecf\u6253\u5f00\u4e86"),this.props.changePage(e.key),void this.props.history.push("/".concat(e.key),this.state);this.props.addPage({title:"".concat(e.item.props.component),key:"".concat(e.key),component:"".concat(e.item.props.component),content:"\u6b22\u8fce\u6b22\u8fce\uff0c\u70ed\u70c8\u6b22\u8fce123\uff01"}),this.props.changePage(e.key),this.props.history.push("/".concat(e.key),this.state)}},{key:"render",value:function(){var e=this,t=this.state,n=t.menuItems,a=t.backEndMenuUrl,c=n.map(function(t){return"undefined"!=typeof t.child&&t.child.length>0?e.formSubmenusChild(t):i.a.createElement(k,{routeurl:"/".concat(t.key),key:t.key,tittle:t.tittle},i.a.createElement(m.a,{type:t.icon}),t.tittle)});return i.a.createElement(y.a,{theme:"dark",onClick:this.handleClick.bind(this),style:{width:200},defaultOpenKeys:["sub1"],selectedKeys:[a],mode:"inline"},c)}}]),t}(i.a.Component);E.defaultProps={menuItems:[{key:"0",icon:"appstore",tittle:"Appstore",routeUrl:"",child:[{key:"3",icon:"search",tittle:"Search",routeUrl:"",component:"Search"}]},{key:"1",icon:"mail",tittle:"Mail",routeUrl:"",child:[{key:"4",icon:"notification",tittle:"Notification",routeUrl:"",component:"Picture"}]},{key:"2",icon:"setting",tittle:"Setting",routeUrl:"",child:[{key:"5",icon:"star",tittle:"Star",routeUrl:"",component:"Picture"}]},{key:"6",icon:"setting",tittle:"Setting",routeUrl:"",child:[{key:"7",icon:"star",tittle:"Star",routeUrl:"",component:"Picture"}]},{key:"8",icon:"setting",tittle:"Setting",routeUrl:"",child:[{key:"9",icon:"star",tittle:"Star",routeUrl:"",component:"Picture"}]},{key:"10",icon:"setting",tittle:"Setting",routeUrl:"",child:[{key:"11",icon:"star",tittle:"Star",routeUrl:"",component:"Picture"}]},{key:"12",icon:"setting",tittle:"Setting",routeUrl:"",child:[{key:"13",icon:"star",tittle:"Star",routeUrl:"",component:"Picture"}]},{key:"14",icon:"setting",tittle:"Setting",routeUrl:"",child:[{key:"15",icon:"star",tittle:"Star",routeUrl:"",component:"Picture"}]}]};var O=Object(g.b)(function(e){return{pageList:e.page.pageList,activeKey:e.page.activeKey}},function(e){return{addPage:function(t){return e(d(t))},deletePage:function(t){return e(f(t))},changePage:function(t){return e(v(t))}}})(E),j=n(194),P=n(12),K=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,"Welcome!!!")}}]),t}(i.a.Component),L=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,"Blog!!!")}}]),t}(i.a.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,"Picture!!!")}}]),t}(i.a.Component),x=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={panes:n.props.pageList,activeKey:n.props.activeKey},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){this.setState({panes:e.pageList,activeKey:e.activeKey})}},{key:"componentDidUpdate",value:function(e,t,n){console.log(this.state);var a=this.props.match.params.key;this.state.activeKey!==a&&this.props.history.push("/".concat(this.state.activeKey),this.state)}},{key:"render",value:function(){var e=this.props.match.params.key;return i.a.createElement("div",null,e===this.state.activeKey?i.a.createElement("div",null,i.a.createElement(P.a,{exact:!0,path:"/0",component:K}),i.a.createElement(P.a,{exact:!0,path:"/3",component:L}),i.a.createElement(P.a,{exact:!0,path:"/5",component:S})):i.a.createElement("a",{href:"/"},"\u8def\u5f84\u4e0d\u7b26,\u8bf7\u70b9\u51fb\u8fd4\u56de\u9996\u9875\uff01"))}}]),t}(i.a.Component),C=Object(g.b)(function(e){return{pageList:e.page.pageList,activeKey:e.page.activeKey}},function(e){return{addPage:function(t){return e(d(t))},deletePage:function(t){return e(f(t))},changePage:function(t){return e(v(t))}}})(x),U=j.a.TabPane,A=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){n.props.changePage(e),n.props.history.push("/".concat(e),n.state)},n.onEdit=function(e,t){n[t](e)},n.add=function(e){},n.remove=function(e){console.log(n.props.activeKey),n.props.deletePage(e),console.log(n.props.activeKey),n.props.history.push("/".concat(n.state.activeKey),n.state)},n.state={panes:n.props.pageList,activeKey:n.props.activeKey},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){this.setState({panes:e.pageList,activeKey:e.activeKey})}},{key:"render",value:function(){return i.a.createElement("div",{style:{padding:"0px 0px 0px 16px",background:"#fff",height:"100%"}},i.a.createElement(j.a,{hideAdd:!0,onChange:this.onChange.bind(this),activeKey:this.state.activeKey,type:"editable-card",onEdit:this.onEdit.bind(this)},this.state.panes.map(function(e){return i.a.createElement(U,{tab:e.title,key:e.key},i.a.createElement(P.a,{path:"/:key",component:C}))})))}}]),t}(i.a.Component),w=Object(g.b)(function(e){return{pageList:e.page.pageList,activeKey:e.page.activeKey}},function(e){return{addPage:function(t){return e(d(t))},deletePage:function(t){return e(f(t))},changePage:function(t){return e(v(t))}}})(A),D=h.a.Header,G=h.a.Footer,M=h.a.Sider,I=h.a.Content,W=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(h.a,null,i.a.createElement(D,{style:{background:"#fff"}},i.a.createElement("h1",{style:{textAlign:"center"}},"Management System")),i.a.createElement(h.a,{style:{height:"auto"}},i.a.createElement(M,{style:{overflow:"auto",height:"inherit",background:"#fff",margin:"0px 0px 0px 50px"}},i.a.createElement(P.a,{path:"/",component:O})),i.a.createElement(I,{style:{margin:"0px 50px 0px 0px",height:"inherit"}},i.a.createElement(P.a,{path:"/",component:w}))),i.a.createElement(G,{style:{textAlign:"center",height:"auto"}},"Management System \xa92019 Created by David Xie")))}}]),t}(i.a.Component),_=n(44),H=n(116),N={pageList:[],activeKey:"0"},R=Object(_.b)({page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PAGE":return Object.assign({},e,{pageList:[].concat(Object(H.a)(e.pageList),[{key:t.page.key,title:t.page.title,component:t.page.component,content:t.page.content}])});case"DELETE_PAGE":var n=e.activeKey,a=0;e.pageList.forEach(function(e,n){e.key===t.index&&(a=n-1)});var i=e.pageList.filter(function(e){return e.key!==t.index});return e.pageList.length&&i.length&&n===t.index&&(n=a>=0?e.pageList[a].key:i[0].key),Object.assign({},e,{pageList:i,activeKey:n});case"CHANGE_PAGE":return Object.assign({},e,{activeKey:t.key});default:return e}}}),T=n(76),B=Object(_.c)(R);r.a.render(i.a.createElement(g.a,{store:B},i.a.createElement(T.a,null,i.a.createElement(P.a,{path:"/",component:W}))),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.a358bc33.chunk.js.map