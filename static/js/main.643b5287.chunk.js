(this["webpackJsonpmonsters-dex"]=this["webpackJsonpmonsters-dex"]||[]).push([[0],{17:function(e,n,t){e.exports=t(32)},27:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){},30:function(e,n,t){},31:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(2),c=t.n(a),i=t(6),s=t(1),l=t(15),u=t(16),h=(t(27),t(3)),d=t(4),f=t(7),p=t(5),g=t(8),m=(t(28),t(29),function(e){var n=e.monster,t=n.id,r=n.name,a=n.email;return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(t,"?set=set2&size=180x180")}),o.a.createElement("h2",null,r),o.a.createElement("p",null,a))}),E=function(e){return o.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return o.a.createElement(m,{key:e.id,monster:e})})))},b=(t(30),function(e){var n=e.placeholder,t=e.handleChange;return o.a.createElement("input",{"aria-label":n,className:"search",type:"search",placeholder:n,onChange:t})}),v=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)},O=function(e){function n(e){var t;return Object(h.a)(this,n),(t=Object(f.a)(this,Object(p.a)(n).call(this,e))).state={hasError:!1},t}return Object(g.a)(n,e),Object(d.a)(n,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Ooops! Something went wrong."):this.props.children}}]),n}(o.a.Component),w=(t(31),function(e){function n(){return Object(h.a)(this,n),Object(f.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(g.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,r=e.robots,a=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return a?o.a.createElement("h1",null,"Loading..."):o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Monster Dex"),o.a.createElement(b,{placeholder:"search monsters",handleChange:t}),o.a.createElement(v,null,o.a.createElement(O,null,o.a.createElement(E,{monsters:c}))))}}]),n}(r.Component)),R=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})})).catch((function(n){return e({type:"REQUEST_ROBOTS_FAILED",error:n})}))}))}}}))(w),S={searchField:""},y={robots:[],isPending:!1,error:""},j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var k=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:n.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:n.error,isPending:!1});default:return e}}}),_=Object(l.createLogger)(),T=Object(s.d)(k,Object(s.a)(u.a,_));c.a.render(o.a.createElement(i.a,{store:T},o.a.createElement(R,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/monster-dex",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/monster-dex","/service-worker.js");j?(!function(e,n){fetch(e).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(n,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.643b5287.chunk.js.map