(window["webpackJsonpreact-ui"]=window["webpackJsonpreact-ui"]||[]).push([[0],{178:function(e,t,a){},180:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(28),c=a.n(r),l=(a(72),a(73),a(2)),o=a(3),s=a(5),u=a(4),m=a(6),d=a(19),h=a(16),v=a(20),b=a(7),f=(a(32),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.tags;return i.a.createElement("div",{className:"list-item-tag-container"}," \u6807\u7b7e\uff1a",e.map((function(e){return i.a.createElement("span",{key:e,className:"list-item-tag"},e)})))}}]),t}(n.Component)),p=a(60),g=a.n(p),j=a(187),O=a(186),E=a(184),y=a(185),w=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){j.a.registerLanguage("jsx",E.a),j.a.registerLanguage("javascript",y.a)}},{key:"render",value:function(){var e=this.props,t=e.language,a=e.value;return i.a.createElement("figure",{className:"highlight"},i.a.createElement(j.a,{language:t,style:O.a},a))}}]),t}(n.PureComponent);w.defaultProps={language:null};var N=w,x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.article;return i.a.createElement("div",null,i.a.createElement(g.a,{source:e,renderers:{code:N}}))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={demoUrl:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.time,n=e.tags,r=e.article_sub,c=e.detailA,l=e.uid,o=e.demoUrl,s=e.useDemoUrl,u=e.content_type,m=c&&u?{display:"inline-block"}:{display:"none"},d=c?{}:{minHeight:"800px"},h=c?"list-item":"list-item-no-detail",v=s&&o?{width:"100%",height:"300px",margin:"10px 0px 10px 0px",border:"none"}:{display:"none"},b=s&&o?o:"",p=s&&s?{display:"inline-block",margin:"0px 0px 0px 20px"}:{display:"none"};return i.a.createElement("div",{className:h,style:d},i.a.createElement("h2",null,t),i.a.createElement(f,{tags:n}),i.a.createElement("div",{className:"list-item-time-container"},a),i.a.createElement("iframe",{src:b,style:v}),i.a.createElement(x,{article:r}),i.a.createElement("a",{className:"list-item-a",style:m,href:window.location.href+"article?uid=".concat(l),target:"_blank"},"\u9605\u8bfb\u5168\u6587"),i.a.createElement("a",{className:"list-item-a",style:p,href:window.origin+b,target:"_blank"},"\u67e5\u770bDemo"))}}]),t}(n.Component),C=a(30),S=a.n(C),H=a(40),I="BEFORE_FETCH",U="FETCH_FAIL",_="FETCH_SUCCESS",D="MODIFY_HOME_PAGENUM";var A=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={visitorNumber:0,getVisitorNumUrl:"/Index/Index/getVisitorNum"},a.fetchVisitorNumber=a.fetchVisitorNumber.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fetchVisitorNumber()}},{key:"fetchVisitorNumber",value:function(){var e=this;fetch("/Index/Index/getVisitorNum",{method:"GET"}).then((function(e){return e.json()})).then((function(t){0===t.result.length||e.setState({visitorNumber:t.result[0].sumNum})}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"announcement-div",style:{width:"100%",height:"300px",backgroundColor:"white",padding:"10px 10px 10px 10px"}},i.a.createElement("div",{className:"announcement-visitor_number"},"\u4eca\u65e5\u8bbf\u95ee\u4eba\u6570\uff1a",this.state.visitorNumber))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={loadState:0},a.getLoadingStringState=a.getLoadingStringState.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"getLoadingStringState",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return 1===e?"\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u540e......":2===e?"":"\u522b\u5212\u62c9\u4e86\uff0c\u6211\u4e5f\u662f\u6709\u5e95\u7ebf\u7684"}},{key:"render",value:function(){var e=this.props.loadState;return i.a.createElement("div",{style:{height:"50px",textAlign:"center"}},this.getLoadingStringState(e))}}]),t}(n.Component),T=(a(59),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"author-div announcement-div"},i.a.createElement("div",{className:"roll-div"},i.a.createElement("div",{className:"roll-item1 roll-item"}),i.a.createElement("div",{className:"roll-item2 roll-item"}),i.a.createElement("div",{className:"roll-item3 roll-item"}),i.a.createElement("div",{className:"roll-item4 roll-item"}),i.a.createElement("div",{className:"roll-item5 roll-item"})))}}]),t}(n.Component)),V=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={homeContent:[],loadState:0,pageNum:0},a.lastScrollTime=0,a.scrollHandler=a.scrollHandler.bind(Object(b.a)(a)),a.fetchContent=a.fetchContent.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"scrollHandler",value:function(){var e=S()(".content-container").height(),t=S()(window).height(),a=S()(window).scrollTop(),n=new Date;if(150+a>=e-t){if(n-this.lastScrollTime<500)return;this.lastScrollTime=n,this.fetchContent()}}},{key:"fetchContent",value:function(){var e=this,t="/Index/Index/subIndex?limit=8";if(0===this.state.pageNum)t="/Index/Index/subIndex?start=0&limit=".concat(8);else{var a=5*(this.state.pageNum-1)+8;t="/Index/Index/subIndex?start=".concat(a,"&limit=5")}this.setState({loadState:1}),fetch(t,{method:"GET"}).then((function(e){return e.json()})).then((function(t){if(0===t.result.length)e.setState({loadState:3});else{var a=e.state.pageNum+1;e.setState({loadState:2,pageNum:a,homeContent:[].concat(Object(v.a)(e.state.homeContent),Object(v.a)(t.result))})}}))}},{key:"componentWillUnmount",value:function(){console.log("will Unmount"+this.state.pageNum),window.removeEventListener("scroll",this.scrollHandler)}},{key:"componentDidMount",value:function(){console.log("Did Unmount"+this.state.pageNum),window.addEventListener("scroll",this.scrollHandler),this.fetchContent(0)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"content-container-left"}),i.a.createElement("div",{className:"content-container"},i.a.createElement("div",{className:"content-container-header"}),this.state.homeContent.map((function(e){return i.a.createElement(k,{key:e.uid,title:e.title,time:e.upload_time,tags:e.tags?e.tags.split("."):[],uid:e.uid,article_sub:e.article_sub,detailA:!0,demoUrl:e.demoUrl,useDemoUrl:e.useDemoUrl,content_type:e.content_type})})),i.a.createElement(L,{loadState:this.state.loadState})),i.a.createElement("div",{className:"content-container-right"},i.a.createElement(A,null),i.a.createElement(T,null)))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={clientHeight:document.documentElement.clientHeight-80,clientWidth:document.documentElement.clientWidth},a.scrollTime=0,a.scrollHandler=a.scrollHandler.bind(Object(b.a)(a)),a.fetchContent=a.fetchContent.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"scrollHandler",value:function(){}},{key:"fetchContent",value:function(){}},{key:"render",value:function(){var e={width:this.state.clientWidth,height:this.state.clientHeight,border:"black",overflow:"auto",overflowX:"hidden",wordBreak:"break-all"};return i.a.createElement("div",{className:"scroll-div",style:e})}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(M,null))}}]),t}(n.Component),W=(n.Component,a(178),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={article:[]},a.fetchArticle=a.fetchArticle.bind(Object(b.a)(a)),a.getQueryVariable=a.getQueryVariable.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"getQueryVariable",value:function(e){var t,a,n=[];if(void 0!=(t=window.location.href).split("?")[1]&&void 0!=t.split("=")[1]){a=t.split("?")[1];var i=[];i=(a=decodeURIComponent(a)).split("&");for(var r=0;r<i.length;r++)n[i[r].split("=")[0]]=i[r].split("=")[1]}return n[e]}},{key:"fetchArticle",value:function(e){var t=this,a="/Index/Index/getArticle?uid=".concat(e);fetch(a,{method:"GET"}).then((function(e){return e.json()})).then((function(e){e.result&&t.setState({article:[].concat(Object(v.a)(t.state.article),Object(v.a)(e.result))})}))}},{key:"componentDidMount",value:function(){var e=this.getQueryVariable("uid");this.fetchArticle(e)}},{key:"render",value:function(){return i.a.createElement("div",{className:"article-con"},i.a.createElement("div",{className:"article-con-article"},this.state.article.map((function(e){return i.a.createElement(k,{key:e.uid,title:e.title,time:e.upload_time,tags:e.tags?e.tags.split("."):[],uid:e.uid,article_sub:e.article,demoUrl:e.demoUrl,useDemoUrl:e.useDemoUrl})}))))}}]),t}(n.Component)),P=a(43),R=a.n(P),B=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={navHide:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.location.hash.indexOf("article")>0&&this.setState({navHide:!0}),window.addEventListener("hashchange",(function(){window.location.hash.indexOf("article")>0?e.setState({navHide:!0}):e.setState({navHide:!1}),console.log("hash change"+window.location)}))}},{key:"render",value:function(){var e={height:"0px",width:"100%"};return i.a.createElement("div",null,i.a.createElement(d.HashRouter,null,i.a.createElement("div",{style:this.state.navHide?{height:"0px",display:"none"}:{position:"fixed",backgroundColor:"rgb(14, 55, 63)",height:"60px",width:"100%",top:0,zIndex:2,textAlign:"center",boxShadow:"0px 1px 1px rgb(14, 55, 63)"},className:"nav-container"},i.a.createElement("div",{className:"nav"},i.a.createElement("ul",null,i.a.createElement("li",{href:"/",className:"tab-head-home tab-head"},i.a.createElement(d.Link,{to:"/"},"\u535a\u5ba2")),i.a.createElement("li",{href:"/",className:"tab-head-about tab-head"},i.a.createElement(d.Link,{to:"/about"},"\u5173\u4e8e")),i.a.createElement("li",{href:"/",className:"tab-head-about tab-head"},i.a.createElement(d.Link,{className:"item-hide",to:"/article"},"Article"))))),i.a.createElement("div",{style:this.state.navHide?e:{height:"60px",width:"100%"},className:"content-container-top"}),i.a.createElement(P.CacheSwitch,null,i.a.createElement(R.a,{exact:!0,saveScrollPosition:!0,style:e,path:"/"},i.a.createElement(V,null)),i.a.createElement(h.d,{path:"/about"},i.a.createElement(F,null)),i.a.createElement(h.d,{path:"/Article"},i.a.createElement(W,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=a(18),Q=a(66),J={homeContent:[]};var z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return{homeContent:[]};case _:return{homeContent:t.homeContent};case I:return{homeContent:[]};default:return e}},X={pageNum:0};var Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return{pageNum:t.pageNum};default:return e}},$=Object(G.c)({fetchReducer:z,pageReducer:Y}),q=Object(G.d)($,Object(G.a)(Q.a));window.isProduct=!0,c.a.render(i.a.createElement(H.a,{store:q},i.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},32:function(e,t,a){},59:function(e,t,a){},67:function(e,t,a){e.exports=a(180)},72:function(e,t,a){},73:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.fda3e241.chunk.js.map