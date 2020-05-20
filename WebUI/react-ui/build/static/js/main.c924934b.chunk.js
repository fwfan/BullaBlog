(window["webpackJsonpreact-ui"]=window["webpackJsonpreact-ui"]||[]).push([[0],{179:function(e,t,n){},180:function(e,t,n){},183:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(28),r=n.n(o),c=(n(73),n(74),n(1)),s=n(5),l=n(3),u=n(2),d=n(4),h=n(19),m=n(16),f=n(20),v=n(7),b=(n(34),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.tags;return i.a.createElement("div",{className:"list-item-tag-container"}," \u6807\u7b7e\uff1a",e.map((function(e){return i.a.createElement("span",{key:e,className:"list-item-tag"},e)})))}}]),t}(a.Component)),p=n(61),g=n.n(p),O=n(190),y=n(189),j=n(187),E=n(188),w=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){O.a.registerLanguage("jsx",j.a),O.a.registerLanguage("javascript",E.a)}},{key:"render",value:function(){var e=this.props,t=e.language,n=e.value;return i.a.createElement("figure",{className:"highlight"},i.a.createElement(O.a,{language:t,style:y.a},n))}}]),t}(a.PureComponent);w.defaultProps={language:null};var x=w,k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.article;return i.a.createElement("div",null,i.a.createElement(g.a,{source:e,escapeHtml:!1,renderers:{code:x}}))}}]),t}(a.Component),S=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={demoUrl:""},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.time,a=e.tags,o=e.article_sub,r=e.detailA,c=e.uid,s=e.demoUrl,l=e.useDemoUrl,u=e.content_type,d=r&&u?{display:"inline-block"}:{display:"none"},h=r?{}:{minHeight:"800px"},m=r?"list-item":"list-item-no-detail",f=l&&s?{width:"100%",height:"300px",margin:"10px 0px 10px 0px",border:"none"}:{display:"none"},v=l&&s?s:"",p=l&&l?{display:"inline-block",margin:"0px 0px 0px 20px"}:{display:"none"};return i.a.createElement("div",{className:m,style:h},i.a.createElement("h2",null,t),i.a.createElement(b,{tags:a}),i.a.createElement("div",{className:"list-item-time-container"},n),i.a.createElement("iframe",{src:v,style:f}),i.a.createElement(k,{article:o}),i.a.createElement("a",{className:"list-item-a",style:d,href:window.location.href+"article?uid=".concat(c),target:"_blank"},"\u9605\u8bfb\u5168\u6587"),i.a.createElement("a",{className:"list-item-a",style:p,href:window.origin+v,target:"_blank"},"\u67e5\u770bDemo"))}}]),t}(a.Component),N=n(32),M=n.n(N),C=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={visitorNumber:0,getVisitorNumUrl:"/Index/Index/getVisitorNum"},n.fetchVisitorNumber=n.fetchVisitorNumber.bind(Object(v.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchVisitorNumber()}},{key:"fetchVisitorNumber",value:function(){var e=this;fetch("/Index/Index/getVisitorNum",{method:"GET"}).then((function(e){return e.json()})).then((function(t){0===t.result.length||e.setState({visitorNumber:t.result[0].sumNum})}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"announcement-div",style:{width:"100%",height:"300px",backgroundColor:"white",padding:"10px 10px 10px 10px",borderRadius:"2px"}},i.a.createElement("div",{className:"announcement-visitor_number"},"\u4eca\u65e5\u8bbf\u95ee\u4eba\u6570\uff1a",this.state.visitorNumber))}}]),t}(a.Component),H=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={loadState:0},n.getLoadingStringState=n.getLoadingStringState.bind(Object(v.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getLoadingStringState",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return 1===e?"\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u540e......":2===e?"":"\u522b\u5212\u62c9\u4e86\uff0c\u6211\u4e5f\u662f\u6709\u5e95\u7ebf\u7684"}},{key:"render",value:function(){var e=this.props.loadState;return i.a.createElement("div",{style:{height:"50px",textAlign:"center"}},this.getLoadingStringState(e))}}]),t}(a.Component),_=(n(60),n(30)),L="GET_USER_MOOD_VALUE",D="SET_USER_MOOD_VALUE";var U=n(29),I=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e)))._events={},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"on",value:function(e,t){var n=this._events[e]||[];return n.push(t),this._events[e]=n,this}},{key:"off",value:function(e,t){var n=this._events[e];return this._events[e]=n&&n.filter((function(e){return e!==t})),this}},{key:"fireEvent",value:function(){for(var e=this,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var i=n[0],o=[].slice.call(n,1),r=this._events[i];return r.forEach((function(t){return t.apply(e,o)})),this}}]),t}(a.Component);n(179);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach((function(t){Object(U.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=new I,A=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).info=function(){T.fireEvent("info")},n.success=function(){T.fireEvent("success")},n.fail=function(){T.fireEvent("fail")},n}return Object(d.a)(t,e),t}(a.Component),W=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).info=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\u7f51\u7edc\u4e00\u7ebf\u7275\uff0c\u73cd\u60dc\u8fd9\u6bb5\u7f18^_^",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3,a=arguments.length>2?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{backgroundColor:"rgb(86, 184, 241)"};arguments.length>4&&arguments[4];n.setState(V({state:o},{message:e,status:"show",style:i}));var o=n.state;setTimeout((function(){n.setState(V({state:o},{status:"hide",style:i})),"function"==typeof a&&a()}),t)},n.success=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\u670d\u52a1\u5668\u6536\u5230\u60a8\u7684\u6d88\u606f\u5566~~",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3,a=arguments.length>2?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{backgroundColor:"rgb(157, 252, 169)"},o=(arguments.length>4&&arguments[4],n.state);n.setState(V({state:o},{message:e,status:"show",style:i})),setTimeout((function(){n.setState(V({state:o},{status:"hide",style:i})),"function"==typeof a&&a()}),t)},n.fail=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\u670d\u52a1\u5668\u6ca1\u6709\u6536\u5230\u60a8\u7684\u6d88\u606f\u2014_\u2014!",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3,a=arguments.length>2?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{backgroundColor:"rgb(247, 159, 137)"};arguments.length>4&&arguments[4];n.setState(V({state:o},{message:e,status:"show",style:i}));var o=n.state;setTimeout((function(){n.setState(V({state:o},{status:"hide",style:i})),"function"==typeof a&&a()}),t)},n.state={message:"",status:"hide",style:{}},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.EventManagerExmaple=T.on("info",this.info),this.EventManagerExmaple=T.on("success",this.success),this.EventManagerExmaple=T.on("fail",this.fail)}},{key:"componentWillUnmount",value:function(){this.EventManagerExmaple=T.un("info",this.info),this.EventManagerExmaple=T.un("success",this.success),this.EventManagerExmaple=T.un("fail",this.fail)}},{key:"render",value:function(){return i.a.createElement("div",{className:"show"==this.state.status?"toast-show-div":"toast-hide-div",style:this.state.style},this.state.message)}}]),t}(a.Component),B=new A,R=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).textareaOnchangeHandler=function(e){n.setState({editMood:e.target.value})},n.submitHandler=function(){n.state.editMood&&fetch("/Index/Index/userMood",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({editMood:n.state.editMood})}).then((function(e){return e.json()})).then((function(e){B.success(),n.changeMoodMode(),n.props.getUserMood()}))},n.state={editMood:"",moodMode:"display"},n.changeMoodMode=n.changeMoodMode.bind(Object(v.a)(n)),n.cancleSubmitMood=n.cancleSubmitMood.bind(Object(v.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"changeMoodMode",value:function(){"display"==this.state.moodMode?this.setState({moodMode:"edit"}):this.setState({moodMode:"display"}),this.setState({editMood:""})}},{key:"cancleSubmitMood",value:function(){this.setState({moodMode:"display"})}},{key:"componentDidMount",value:function(){this.props.getUserMood()}},{key:"render",value:function(){var e={marginLeft:"20px",float:"right",bottom:"0px"};return i.a.createElement("div",{className:"author-div"},i.a.createElement("div",{className:"edit"==this.state.moodMode?"usermood-form-div":"usermood-form-div-disable"},i.a.createElement("form",{className:"usermood-form"},i.a.createElement("textarea",{maxLength:120,className:"usermood-textarea",value:this.state.editMood,onChange:this.textareaOnchangeHandler,placeholder:"\u4f60\u60f3\u53d1\u8868\u7684\u5fc3\u60c5......\u4e0d\u80fd\u4e3a\u7a7a^_^"})),i.a.createElement("button",{className:"submit-btn",style:e,onClick:this.submitHandler},"\u63d0 \u4ea4"),i.a.createElement("button",{className:"cancel-btn",style:e,onClick:this.cancleSubmitMood},"\u53d6 \u6d88")),i.a.createElement("div",{className:"edit"==this.state.moodMode?"usermood-display-div-disable":"usermood-display-div"},this.props.userMood.map((function(e){return i.a.createElement("p",{key:Math.random()},e.mood)}))),i.a.createElement("button",{className:"create-btn",style:{marginLeft:"20px",bottom:"0px",position:"absolute",float:"right",right:"0px",opacity:0},onClick:this.changeMoodMode},"\u65b0 \u5efa"),i.a.createElement("div",{className:"roll-div"},i.a.createElement("div",{className:"roll-item1 roll-item"}),i.a.createElement("div",{className:"roll-item2 roll-item"}),i.a.createElement("div",{className:"roll-item3 roll-item"}),i.a.createElement("div",{className:"roll-item4 roll-item"}),i.a.createElement("div",{className:"roll-item5 roll-item"})))}}]),t}(a.Component);var G=Object(_.b)((function(e){return{userMood:e.userMoodReducer.textareaValue}}),(function(e){return{changeUserMood:function(t){return e({type:D,value:[{mood:t,submitTime:n}]});var n},getUserMood:function(){return e((function(e){fetch("/Index/Index/userMood").then((function(e){return e.json()})).then((function(t){e({type:L,value:t.result})}))}))}}}))(R),Q=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={homeContent:[],loadState:0,pageNum:0},n.lastScrollTime=0,n.scrollHandler=n.scrollHandler.bind(Object(v.a)(n)),n.fetchContent=n.fetchContent.bind(Object(v.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"scrollHandler",value:function(){var e=M()(".content-container").height(),t=M()(window).height(),n=M()(window).scrollTop(),a=new Date;if(150+n>=e-t){if(a-this.lastScrollTime<500)return;this.lastScrollTime=a,this.fetchContent()}}},{key:"fetchContent",value:function(){var e=this,t="/Index/Index/subIndex?limit=8";if(0===this.state.pageNum)t="/Index/Index/subIndex?start=0&limit=".concat(8);else{var n=5*(this.state.pageNum-1)+8;t="/Index/Index/subIndex?start=".concat(n,"&limit=5")}this.setState({loadState:1}),fetch(t,{method:"GET"}).then((function(e){return e.json()})).then((function(t){if(0===t.result.length)e.setState({loadState:3});else{var n=e.state.pageNum+1;e.setState({loadState:2,pageNum:n,homeContent:[].concat(Object(f.a)(e.state.homeContent),Object(f.a)(t.result))})}}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollHandler)}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollHandler),this.fetchContent(0)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"content-container-left"}),i.a.createElement("div",{className:"content-container"},i.a.createElement("div",{className:"content-container-header"}),this.state.homeContent.map((function(e){return i.a.createElement(S,{key:e.uid,title:e.title,time:e.upload_time,tags:e.tags?e.tags.split("."):[],uid:e.uid,article_sub:e.article_sub,detailA:!0,demoUrl:e.demoUrl,useDemoUrl:e.useDemoUrl,content_type:e.content_type})})),i.a.createElement(H,{loadState:this.state.loadState})),i.a.createElement("div",{className:"content-container-right"},i.a.createElement(C,null),i.a.createElement(G,null)))}}]),t}(a.Component),J=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={clientHeight:document.documentElement.clientHeight-80,clientWidth:document.documentElement.clientWidth},n.scrollTime=0,n.scrollHandler=n.scrollHandler.bind(Object(v.a)(n)),n.fetchContent=n.fetchContent.bind(Object(v.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"scrollHandler",value:function(){}},{key:"fetchContent",value:function(){}},{key:"render",value:function(){var e={width:this.state.clientWidth,height:this.state.clientHeight,border:"black",overflow:"auto",overflowX:"hidden",wordBreak:"break-all"};return i.a.createElement("div",{className:"scroll-div",style:e})}}]),t}(a.Component),z=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(J,null))}}]),t}(a.Component),X=(n(180),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={article:[]},n.fetchArticle=n.fetchArticle.bind(Object(v.a)(n)),n.getQueryVariable=n.getQueryVariable.bind(Object(v.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getQueryVariable",value:function(e){var t,n,a=[];if(void 0!=(t=window.location.href).split("?")[1]&&void 0!=t.split("=")[1]){n=t.split("?")[1];var i=[];i=(n=decodeURIComponent(n)).split("&");for(var o=0;o<i.length;o++)a[i[o].split("=")[0]]=i[o].split("=")[1]}return a[e]}},{key:"fetchArticle",value:function(e){var t=this,n="/Index/Index/getArticle?uid=".concat(e);fetch(n,{method:"GET"}).then((function(e){return e.json()})).then((function(e){e.result&&t.setState({article:[].concat(Object(f.a)(t.state.article),Object(f.a)(e.result))})}))}},{key:"componentDidMount",value:function(){var e=this.getQueryVariable("uid");this.fetchArticle(e)}},{key:"render",value:function(){return i.a.createElement("div",{className:"article-con"},i.a.createElement("div",{className:"article-con-article"},this.state.article.map((function(e){return i.a.createElement(S,{key:e.uid,title:e.title,time:e.upload_time,tags:e.tags?e.tags.split("."):[],uid:e.uid,article_sub:e.article,demoUrl:e.demoUrl,useDemoUrl:e.useDemoUrl})}))))}}]),t}(a.Component)),$=n(44),q=n.n($),F=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={navHide:!1,activeLi:"home"},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.location.hash.indexOf("article")>0&&this.setState({navHide:!0}),window.addEventListener("hashchange",(function(){window.location.hash.indexOf("article")>0?e.setState({navHide:!0,activeLi:"article"}):window.location.hash.indexOf("study")>0?e.setState({navHide:!1,activeLi:"study"}):window.location.hash.indexOf("life")>0?e.setState({navHide:!1,activeLi:"life"}):window.location.hash.indexOf("about")>0?e.setState({navHide:!1,activeLi:"about"}):e.setState({navHide:!1,activeLi:"home"}),console.log("hash change"+window.location)}))}},{key:"render",value:function(){var e={border:"blue 0px solid",borderBottomColor:"white",borderBottomWidth:"3px"},t={borderBottomColor:"none",borderBottomWidth:"0"},n={height:"0px",width:"100%"};return i.a.createElement("div",null,i.a.createElement(h.HashRouter,null,i.a.createElement(W,null),i.a.createElement("div",{style:this.state.navHide?{height:"0px",display:"none"}:{position:"fixed",backgroundColor:"rgb(14, 55, 63)",height:"60px",width:"100%",top:0,zIndex:2,textAlign:"center",boxShadow:"0px 1px 1px rgb(14, 55, 63)"},className:"nav-container"},i.a.createElement("div",{className:"nav"},i.a.createElement("ul",null,i.a.createElement("li",{href:"/",className:"tab-head-home tab-head",style:"home"===this.state.activeLi?e:t},i.a.createElement(h.Link,{to:"/"},"\u535a\u5ba2")),i.a.createElement("li",{href:"/",className:"tab-head-about tab-head",style:"about"===this.state.activeLi?e:t},i.a.createElement(h.Link,{to:"/about"},"\u5173\u4e8e")),i.a.createElement("li",{href:"/",className:"tab-head-about tab-head",style:"article"===this.state.activeLi?e:t},i.a.createElement(h.Link,{className:"item-hide",to:"/article"},"Article"))))),i.a.createElement("div",{style:this.state.navHide?n:{height:"60px",width:"100%"},className:"content-container-top"}),i.a.createElement($.CacheSwitch,null,i.a.createElement(q.a,{exact:!0,saveScrollPosition:!0,style:n,path:"/"},i.a.createElement(Q,null)),i.a.createElement(m.d,{path:"/about"},i.a.createElement(z,null)),i.a.createElement(m.d,{path:"/article"},i.a.createElement(X,null)))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=n(18),Y=n(67);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(n,!0).forEach((function(t){Object(U.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var te={textareaValue:[{mood:"",time:"1"}]};var ne=Object(K.c)({userMoodReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:case L:return ee({state:e},{textareaValue:t.value});default:return e}}}),ae=Object(K.d)(ne,Object(K.a)(Y.a));window.isProduct=!0,r.a.render(i.a.createElement(_.a,{store:ae},i.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},34:function(e,t,n){},60:function(e,t,n){},68:function(e,t,n){e.exports=n(183)},73:function(e,t,n){},74:function(e,t,n){}},[[68,1,2]]]);
//# sourceMappingURL=main.c924934b.chunk.js.map