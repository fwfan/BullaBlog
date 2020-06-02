(window["webpackJsonpreact-ui"]=window["webpackJsonpreact-ui"]||[]).push([[0],{177:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},184:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(30),i=a.n(o),s=(a(71),a(72),a(1)),c=a(5),l=a(3),u=a(2),h=a(4),d=a(20),m=a(17),f=a(21),p=a(8),b=a(7),v=(a(26),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.tags;return r.a.createElement("div",{className:"list-item-tag-container"}," \u6807\u7b7e\uff1a",e.map((function(e){return r.a.createElement("span",{key:e,className:"list-item-tag"},e)})))}}]),t}(n.Component)),g=a(60),y=a.n(g),O=a(188),j=a(187),E=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.language,a=e.value;return r.a.createElement("figure",{className:"highlight"},r.a.createElement(O.a,{language:t,style:j.a},a))}}]),t}(n.PureComponent);E.defaultProps={language:null};var w=E,D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.article;return r.a.createElement("div",null,r.a.createElement(y.a,{source:e,escapeHtml:!1,renderers:{code:w}}))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={demoUrl:""},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.time,n=e.tags,o=e.article_sub,i=e.detailA,s=e.uid,c=e.demoUrl,l=e.useDemoUrl,u=e.content_type,h=i&&u?{display:"inline-block"}:{display:"none"},d=i?{}:{minHeight:"800px"},m=i?"list-item":"list-item-no-detail",f=l&&c?{width:"100%",height:"300px",margin:"10px 0px 10px 0px",border:"none"}:{display:"none"},p=l&&c?c:"",b=l&&l?{display:"inline-block",margin:"0px 0px 0px 20px"}:{display:"none"};return r.a.createElement("div",{className:m,style:d},r.a.createElement("h2",null,t),r.a.createElement(v,{tags:n}),r.a.createElement("div",{className:"list-item-time-container"},a),r.a.createElement("iframe",{src:p,style:f}),r.a.createElement(D,{article:o}),r.a.createElement("a",{className:"list-item-a",style:h,href:window.location.href+"article?uid=".concat(s),target:"_blank"},"\u9605\u8bfb\u5168\u6587"),r.a.createElement("a",{className:"list-item-a",style:b,href:window.origin+p,target:"_blank"},"\u67e5\u770bDemo"))}}]),t}(n.Component),M=a(33),k=a.n(M);a(177);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).fetchData=function(e,t){if(e){if(t){var n=[];Object.keys(t).forEach((function(e){return n.push(e+"="+t[e])})),-1===e.search(/\?/)?e+="?"+n.join("&"):e+="&"+n.join("&")}fetch(e,{method:"GET"}).then((function(e){return e.json()})).then((function(e){e.result.length>0&&a.setState(N({},a.state,{},e.result))}))}},a.isLeapYear=function(e){return e%4===0&&e%100!==0||e%400===0},a.getMonthDayArr=function(e,t){for(var n=new Date(e+"-"+t+"-01").getDay(),r={day:1,month:1,year:2020,isThisMonth:!0,isCurrentToday:!1,isCurrentMonth:!1,data:""},o=(new Date).getDate(),i=[],s=-1,c=1,l=0;l<49;l++){var u=l%7;0===u&&(i[++s]=[]),0===s?i[s]=[{day:"\u65e5",data:"",isThisMonth:!0},{day:"\u4e00",data:"",isThisMonth:!0},{day:"\u4e8c",data:"",isThisMonth:!0},{day:"\u4e09",data:"",isThisMonth:!0},{day:"\u56db",data:"",isThisMonth:!0},{day:"\u4e94",data:"",isThisMonth:!0},{day:"\u516d",data:"",isThisMonth:!0}]:(i[s][u]=Object.assign({},r),1===s?u===n?i[s][u].day=1:u>n?i[s][u].day=1+u-n:t-1===2&&a.isLeapYear(e)?(i[s][u].day=29-(n-u)+1,i[s][u].isThisMonth=!1):t-1!==2||a.isLeapYear(e)?t-1===1||t-1===3||t-1===5||t-1===7||t-1===8||t-1===10||t-1===12?(i[s][u].day=31-(n-u)+1,i[s][u].isThisMonth=!1):(i[s][u].day=30-(n-u)+1,i[s][u].isThisMonth=!1):(i[s][u].day=28-(n-u)+1,i[s][u].isThisMonth=!1):2===t&&a.isLeapYear(e)?i[1][6].day+7*(s-2)+1+u>29?(i[s][u].day=c,i[s][u].isThisMonth=!1,c++):i[s][u].day=i[1][6].day+7*(s-2)+1+u:2!==t||a.isLeapYear(e)?1===t||3===t||5===t||7===t||8===t||10===t||12===t?i[1][6].day+7*(s-2)+1+u>31?(i[s][u].day=c,i[s][u].isThisMonth=!1,c++):i[s][u].day=i[1][6].day+7*(s-2)+1+u:i[1][6].day+7*(s-2)+1+u>30?(i[s][u].day=c,i[s][u].isThisMonth=!1,c++):i[s][u].day=i[1][6].day+7*(s-2)+1+u:i[1][6].day+7*(s-2)+1+u>28?(i[s][u].day=c,i[s][u].isThisMonth=!1,c++):i[s][u].day=i[1][6].day+7*(s-2)+1+u);for(var h=0;h<a.state.data.length;h++){var d=a.state.data[h],m=d.date,f=new Date(parseInt(m)).getFullYear(),p=new Date(parseInt(m)).getMonth()+1,b=new Date(parseInt(m)).getDate();t===p&&e===f&&i[s][u].day===b&&i[s][u].isThisMonth&&(i[s][u].data=d.content)}i[s][u].day===o&&t===a.state.today.month&&(i[s][u].isToday=!0)}return i},a.pre=function(){var e=a.state.selectDate.month,t=a.state.selectDate.year,n=a.state;1===e?(e=12,t-=1):e-=1,a.setState(N({state:n},{selectDate:{year:t,month:e}})),a.props.url&&a.fetchData(a.props.url,a.state.selectDate)},a.next=function(){var e=a.state.selectDate.month,t=a.state.selectDate.year,n=a.state;12===e?(e=1,t+=1):e+=1,a.setState(N({state:n},{selectDate:{year:t,month:e}})),a.props.url&&a.fetchData(a.props.url,a.state.selectDate)},a.getDayStyle=function(e){return{color:e.isThisMonth?"":"grey",backgroundColor:e.data?"rgb(157, 252, 169)":"",fontWeight:e.isToday?"bolder":""}},a.state={today:{year:(new Date).getFullYear(),month:(new Date).getMonth()+1,day:(new Date).getDate(),week:(new Date).getDay()},selectDate:{year:(new Date).getFullYear(),month:(new Date).getMonth()+1},data:[{date:"1588464000000",content:"\u5185\u5bb91"},{date:"1589904000000",content:"\u5185\u5bb92"}]},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.fetchData(this.props.url,this.state.selectDate)}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){for(var e={width:this.props.style.width,height:this.props.style.height,margin:this.props.style.margin},t=[],a=[],n=this.getMonthDayArr(this.state.selectDate.year,this.state.selectDate.month),o=0;o<n.length;o++){var i=n[o];if(a=[],i[i.length-1].isThisMonth||1!==o)if(i[0].isThisMonth||6!==o)for(var s=0;s<i.length;s++){var c=i[s];c.data?a.push(r.a.createElement("td",{key:"calendar-td"+o+s,style:this.getDayStyle(c)},c.day,r.a.createElement("span",null,c.data))):a.push(r.a.createElement("td",{key:"calendar-td"+o+s,style:this.getDayStyle(c)},c.day))}else;else;t.push(r.a.createElement("tr",{key:"calendar-tr"+o},a))}return r.a.createElement("div",{className:"calender-div",style:e},r.a.createElement("div",{className:"calender-select-date-div"},r.a.createElement("div",{className:"calender-preMonth"},r.a.createElement("button",{onClick:this.pre},"\u4e0a\u4e00\u6708")),r.a.createElement("div",{className:"calendar-select-date-div-date-div"},this.state.selectDate.year+"\u5e74"+this.state.selectDate.month+"\u6708"),r.a.createElement("div",{className:"calender-nextMonth"},r.a.createElement("button",{onClick:this.next},"\u4e0b\u4e00\u6708"))),r.a.createElement("div",{className:"calender-month-div"},r.a.createElement("table",{className:"calender-month-table"},r.a.createElement("tbody",null,t))))}}]),t}(n.Component);P.defaultProps={style:{width:"220px",height:"200px"},data:[{date:"1588464000000",content:"\u4e3e\u4f8b\uff1a\u66f4\u65b0\u5185\u5bb91"},{date:"1589904000000",content:"\u4e3e\u4f8b\uff1a\u66f4\u65b0\u5185\u5bb92"}],url:""};n.Component;function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).fetchHotTags=function(){fetch("/Index/Index/allTags",{method:"GET"}).then((function(e){return e.json()})).then((function(e){e.success&&a.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.state,{},{tags:e.result}))}))},a.clickHandler=function(e){var t={tag:e.target.dataset.value};a.props.homeFetch(t,!0)},a.state={tags:[]},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.fetchHotTags()}},{key:"render",value:function(){var e=this,t=this.state.tags;return r.a.createElement("div",{className:"all-tags-div"},r.a.createElement("div",{className:"all-tags-title-div"},"\u70ed\u95e8\u6807\u7b7e\uff1a"),t.map((function(t){return r.a.createElement("a",{href:"#",onClick:e.clickHandler,key:t.id,"data-value":t.tag_name},t.tag_name)})))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={visitorNumber:0,getVisitorNumUrl:"/Index/Index/getVisitorNum"},a.fetchVisitorNumber=a.fetchVisitorNumber.bind(Object(b.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.fetchVisitorNumber()}},{key:"fetchVisitorNumber",value:function(){var e=this;fetch("/Index/Index/getVisitorNum",{method:"GET"}).then((function(e){return e.json()})).then((function(t){0===t.result.length||e.setState({visitorNumber:t.result[0].sumNum})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"announcement-div",style:{width:"100%",height:"300px",backgroundColor:"white",padding:"10px 10px 10px 10px",borderRadius:"2px"}},r.a.createElement("div",{className:"announcement-visitor-number"},"\u4eca\u65e5\u8bbf\u95ee\u4eba\u6570\uff1a",this.state.visitorNumber),r.a.createElement(T,{homeFetch:this.props.homeFetch}))}}]),t}(n.Component),H=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={loadState:0},a.getLoadingStringState=a.getLoadingStringState.bind(Object(b.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"getLoadingStringState",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return 1===e?"\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u540e......":2===e?"":"\u522b\u5212\u62c9\u4e86\uff0c\u6211\u4e5f\u662f\u6709\u5e95\u7ebf\u7684"}},{key:"render",value:function(){var e=this.props.loadState;return r.a.createElement("div",{style:{color:"grey",height:"200px",textAlign:"center",lineHeight:"200px"}},this.getLoadingStringState(e))}}]),t}(n.Component),L=(a(59),a(31)),_="GET_USER_MOOD_VALUE",U="SET_USER_MOOD_VALUE",F="START",A="END",V="DOING";var W=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e)))._events={},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"on",value:function(e,t){var a=this._events[e]||[];return a.push(t),this._events[e]=a,this}},{key:"off",value:function(e,t){var a=this._events[e];return this._events[e]=a&&a.filter((function(e){return e!==t})),this}},{key:"fireEvent",value:function(){for(var e=this,t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];var r=a[0],o=[].slice.call(a,1),i=this._events[r];return i.forEach((function(t){return t.apply(e,o)})),this}}]),t}(n.Component);a(179);function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var B=new W,G=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).info=function(){B.fireEvent("info")},a.success=function(){B.fireEvent("success")},a.fail=function(){B.fireEvent("fail")},a}return Object(h.a)(t,e),t}(n.Component),Q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).info=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\u7f51\u7edc\u4e00\u7ebf\u7275\uff0c\u73cd\u60dc\u8fd9\u6bb5\u7f18^_^",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{backgroundColor:"rgb(86, 184, 241)"};arguments.length>4&&arguments[4];a.setState(Y({state:o},{message:e,status:"show",style:r}));var o=a.state;setTimeout((function(){a.setState(Y({state:o},{status:"hide",style:r})),"function"===typeof n&&n()}),t)},a.success=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\u670d\u52a1\u5668\u6536\u5230\u60a8\u7684\u6d88\u606f\u5566~~",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{backgroundColor:"rgb(157, 252, 169)"},o=(arguments.length>4&&arguments[4],a.state);a.setState(Y({state:o},{message:e,status:"show",style:r})),setTimeout((function(){a.setState(Y({state:o},{status:"hide",style:r})),"function"===typeof n&&n()}),t)},a.fail=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\u670d\u52a1\u5668\u6ca1\u6709\u6536\u5230\u60a8\u7684\u6d88\u606f\u2014_\u2014!",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{backgroundColor:"rgb(247, 159, 137)"};arguments.length>4&&arguments[4];a.setState(Y({state:o},{message:e,status:"show",style:r}));var o=a.state;setTimeout((function(){a.setState(Y({state:o},{status:"hide",style:r})),"function"===typeof n&&n()}),t)},a.state={message:"",status:"hide",style:{}},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.EventManagerExmaple=B.on("info",this.info),this.EventManagerExmaple=B.on("success",this.success),this.EventManagerExmaple=B.on("fail",this.fail)}},{key:"componentWillUnmount",value:function(){this.EventManagerExmaple=B.un("info",this.info),this.EventManagerExmaple=B.un("success",this.success),this.EventManagerExmaple=B.un("fail",this.fail)}},{key:"render",value:function(){return r.a.createElement("div",{className:"show"===this.state.status?"toast-show-div":"toast-hide-div",style:this.state.style},this.state.message)}}]),t}(n.Component),J=new G,z=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).textareaOnchangeHandler=function(e){a.setState({editMood:e.target.value})},a.submitHandler=function(){a.state.editMood&&fetch("/Index/Index/userMood",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({editMood:a.state.editMood})}).then((function(e){return e.json()})).then((function(e){J.success(),a.changeMoodMode(),a.props.getUserMood()}))},a.state={editMood:"",moodMode:"display"},a.changeMoodMode=a.changeMoodMode.bind(Object(b.a)(a)),a.cancleSubmitMood=a.cancleSubmitMood.bind(Object(b.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"changeMoodMode",value:function(){"display"===this.state.moodMode?this.setState({moodMode:"edit"}):this.setState({moodMode:"display"}),this.setState({editMood:""})}},{key:"cancleSubmitMood",value:function(){this.setState({moodMode:"display"})}},{key:"componentDidMount",value:function(){this.props.getUserMood()}},{key:"render",value:function(){var e={marginLeft:"20px",float:"right",bottom:"0px"};return r.a.createElement("div",{className:"author-div"},r.a.createElement("div",{className:"edit"===this.state.moodMode?"usermood-form-div":"usermood-form-div-disable"},r.a.createElement("form",{className:"usermood-form"},r.a.createElement("textarea",{maxLength:120,className:"usermood-textarea",value:this.state.editMood,onChange:this.textareaOnchangeHandler,placeholder:"\u4f60\u60f3\u53d1\u8868\u7684\u5fc3\u60c5......\u4e0d\u80fd\u4e3a\u7a7a^_^"})),r.a.createElement("button",{className:"submit-btn",style:e,onClick:this.submitHandler},"\u63d0 \u4ea4"),r.a.createElement("button",{className:"cancel-btn",style:e,onClick:this.cancleSubmitMood},"\u53d6 \u6d88")),r.a.createElement("div",{className:"edit"===this.state.moodMode?"usermood-display-div-disable":"usermood-display-div"},this.props.userMood.map((function(e){return r.a.createElement("div",{key:Math.random()},r.a.createElement("div",{className:"usermood-time-div"},function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e=e;t||(e=parseInt(e+"000"));var a=new Date(e),n=a.getFullYear(),r=a.getMonth()+1,o=a.getDate();return n+"-"+(r<10?"0"+r:r)+"-"+(o<10?"0"+o:o)+" "+a.toTimeString().substr(0,8)}(e.submitTime,!1)),r.a.createElement("p",null,e.mood))}))),r.a.createElement("button",{className:"create-btn",style:{marginLeft:"20px",bottom:"-40px",position:"absolute",float:"right",right:"0px",opacity:0},onClick:this.changeMoodMode},"\u65b0 \u5efa"),r.a.createElement("div",{className:"roll-div"},r.a.createElement("div",{className:"roll-item1 roll-item"}),r.a.createElement("div",{className:"roll-item2 roll-item"}),r.a.createElement("div",{className:"roll-item3 roll-item"}),r.a.createElement("div",{className:"roll-item4 roll-item"}),r.a.createElement("div",{className:"roll-item5 roll-item"})))}}]),t}(n.Component);var X=Object(L.b)((function(e){return{userMood:e.userMoodReducer.textareaValue}}),(function(e){return{changeUserMood:function(t){return e({type:U,value:[{mood:t,submitTime:a}]});var a},getUserMood:function(){return e((function(e){fetch("/Index/Index/userMood").then((function(e){return e.json()})).then((function(t){e({type:_,value:t.result})}))}))}}}))(z);a(180);function $(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var q=new W,K=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).setProcess=function(e){q.fireEvent("change",e)},a.startProcess=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};q.fireEvent("start",e)},a.endProcess=function(e){q.fireEvent("end",e)},a}return Object(h.a)(t,e),t}(n.Component),Z=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).updateState=function(e){var t=a.state;a.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({originalState:t},e))},a.startProcess=function(e){a.updateState({status:"START",width:"10%",height:"4px"}),setTimeout((function(){"INIT"!==a.state.status?(a.updateState({width:"20%",height:"4px"}),setTimeout((function(){"INIT"!==a.state.status?(a.updateState({width:"40%",height:"4px"}),setTimeout((function(){"INIT"!==a.state.status?(a.updateState({width:"80%",height:"4px"}),setTimeout((function(){"INIT"!==a.state.status?a.updateState({width:"90%",height:"4px"}):a.endProcess()}),200)):a.endProcess()}),200)):a.endProcess()}),200)):a.endProcess()}),100)},a.endProcess=function(e){a.updateState({status:"END",width:"100%"}),a.updateState({status:"INIT",width:0,height:0})},a.state={status:"INIT",width:"0",height:"0",backgroundColor:"green"},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.eventManager=q.on("change",this.updateState),this.eventManager=q.on("start",this.startProcess),this.eventManager=q.on("end",this.endProcess)}},{key:"componentWillUnmount",value:function(){this.eventManager=q.un("change",this.updateState),this.eventManager=q.on("start",this.startProcess),this.eventManager=q.on("end",this.endProcess)}},{key:"render",value:function(){var e={width:this.state.width,height:this.state.height,backgroundColor:this.state.backgroundColor};return r.a.createElement("div",{className:"process",style:e})}}]),t}(n.Component),ee=new K;function te(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ae(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?te(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):te(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ne=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).clearContent=function(e,t){e?a.setState(ae({},a.state,{},{homeContent:[],loadState:1}),(function(){return console.log(a.state)})):a.setState(ae({},a.state,{},{loadState:1}),(function(){return console.log(a.state)})),a.fetchContent(t)},a.state={homeContent:[],loadState:0,pageNum:0,filter:"",stopFetch:!1},a.lastScrollTime=0,a.scrollHandler=a.scrollHandler.bind(Object(b.a)(a)),a.beforeFetchContent=a.beforeFetchContent.bind(Object(b.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"scrollHandler",value:function(){var e=k()(".content-container").height(),t=k()(window).height(),a=k()(window).scrollTop(),n=new Date;if(150+a>=e-t){if(n-this.lastScrollTime<500||!0===this.state.stopFetch)return;this.lastScrollTime=n,this.beforeFetchContent(this.state.filter,!1)}}},{key:"beforeFetchContent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.setState(ae({},this.state,{},{filter:e}));var a="/Index/Index/subIndex?limit=5",n=8;if(ee.startProcess(),0===this.state.pageNum||t)a="/Index/Index/subIndex?start=0&limit=".concat(n);else{var r=5*(this.state.pageNum-1)+n;a="/Index/Index/subIndex?start=".concat(r,"&limit=5")}if(e){for(var o in e)a=a+"&"+o+"="+e[o];t?this.clearContent(!0,a):this.clearContent(!1,a)}else this.clearContent(!1,a)}},{key:"fetchContent",value:function(e){var t=this;fetch(e,{method:"GET"}).then((function(e){return e.json()})).then((function(e){ee.endProcess(),e.result.length<5&&t.setState(ae({},t.state,{},{stopFetch:!0,loadState:3}));var a=t.state.pageNum+1;t.setState(ae({},t.state,{},{stopFetch:e.result.length<5,loadState:e.result.length<5?3:2,pageNum:a,homeContent:[].concat(Object(f.a)(t.state.homeContent),Object(f.a)(e.result))}))}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollHandler)}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollHandler),this.beforeFetchContent()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"content-container-left"}),r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"content-container-header"}),this.state.homeContent.map((function(e){return r.a.createElement(S,{key:e.uid,title:e.title,time:e.upload_time,tags:e.tags?e.tags.split("."):[],uid:e.uid,article_sub:e.article_sub,detailA:!0,demoUrl:e.demoUrl,useDemoUrl:e.useDemoUrl,content_type:e.content_type})})),r.a.createElement(H,{loadState:this.state.loadState})),r.a.createElement("div",{className:"content-container-right"},r.a.createElement(I,{homeFetch:this.beforeFetchContent}),r.a.createElement(X,null)))}}]),t}(n.Component),re=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={clientHeight:document.documentElement.clientHeight-80,clientWidth:document.documentElement.clientWidth},a.scrollTime=0,a.scrollHandler=a.scrollHandler.bind(Object(b.a)(a)),a.beforeFetchContent=a.beforeFetchContent.bind(Object(b.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"scrollHandler",value:function(){}},{key:"beforeFetchContent",value:function(){}},{key:"render",value:function(){var e={width:this.state.clientWidth,height:this.state.clientHeight,border:"black",overflow:"auto",overflowX:"hidden",wordBreak:"break-all"};return r.a.createElement("div",{className:"scroll-div",style:e})}}]),t}(n.Component),oe=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(re,null))}}]),t}(n.Component),ie=(a(181),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={article:[]},a.fetchArticle=a.fetchArticle.bind(Object(b.a)(a)),a.getQueryVariable=a.getQueryVariable.bind(Object(b.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"getQueryVariable",value:function(e){var t,a,n=[];if(void 0!=(t=window.location.href).split("?")[1]&&void 0!=t.split("=")[1]){a=t.split("?")[1];var r=[];r=(a=decodeURIComponent(a)).split("&");for(var o=0;o<r.length;o++)n[r[o].split("=")[0]]=r[o].split("=")[1]}return n[e]}},{key:"fetchArticle",value:function(e){var t=this,a="/Index/Index/getArticle?uid=".concat(e);fetch(a,{method:"GET"}).then((function(e){return e.json()})).then((function(e){e.result&&t.setState({article:[].concat(Object(f.a)(t.state.article),Object(f.a)(e.result))})}))}},{key:"componentDidMount",value:function(){var e=this.getQueryVariable("uid");this.fetchArticle(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"article-con"},r.a.createElement("div",{className:"article-con-article"},this.state.article.map((function(e){return r.a.createElement(S,{key:e.uid,title:e.title,time:e.upload_time,tags:e.tags?e.tags.split("."):[],uid:e.uid,article_sub:e.article,demoUrl:e.demoUrl,useDemoUrl:e.useDemoUrl})}))))}}]),t}(n.Component)),se=a(43),ce=a.n(se),le=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={navHide:!1,activeLi:"home"},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.location.hash.indexOf("article")>0&&this.setState({navHide:!0}),window.addEventListener("hashchange",(function(){window.location.hash.indexOf("article")>0?e.setState({navHide:!0,activeLi:"article"}):window.location.hash.indexOf("study")>0?e.setState({navHide:!1,activeLi:"study"}):window.location.hash.indexOf("life")>0?e.setState({navHide:!1,activeLi:"life"}):window.location.hash.indexOf("about")>0?e.setState({navHide:!1,activeLi:"about"}):e.setState({navHide:!1,activeLi:"home"})}))}},{key:"render",value:function(){var e={border:"blue 0px solid",borderBottomColor:"white",borderBottomWidth:"3px"},t={borderBottomColor:"none",borderBottomWidth:"0"},a={height:"0px",width:"100%"};return r.a.createElement("div",null,r.a.createElement(d.HashRouter,null,r.a.createElement(Q,null),r.a.createElement("div",{style:this.state.navHide?{height:"0px",display:"none"}:{position:"fixed",backgroundColor:"rgb(14, 55, 63)",height:"60px",width:"100%",top:0,zIndex:2,textAlign:"center",boxShadow:"0px 1px 1px rgb(14, 55, 63)"},className:"nav-container"},r.a.createElement("div",{className:"nav"},r.a.createElement("ul",null,r.a.createElement("li",{href:"/",className:"tab-head-home tab-head",style:"home"===this.state.activeLi?e:t},r.a.createElement(d.Link,{to:"/"},"\u535a\u5ba2")),r.a.createElement("li",{href:"/",className:"tab-head-about tab-head",style:"about"===this.state.activeLi?e:t},r.a.createElement(d.Link,{to:"/about"},"\u5173\u4e8e")),r.a.createElement("li",{href:"/",className:"tab-head-about tab-head",style:"article"===this.state.activeLi?e:t},r.a.createElement(d.Link,{className:"item-hide",to:"/article"},"Article"))))),r.a.createElement("div",{style:this.state.navHide?a:{height:"60px",width:"100%"},className:"content-container-top"}),r.a.createElement(Z,null),r.a.createElement(se.CacheSwitch,null,r.a.createElement(ce.a,{exact:!0,saveScrollPosition:!0,style:a,path:"/"},r.a.createElement(ne,null)),r.a.createElement(m.d,{path:"/about"},r.a.createElement(oe,null)),r.a.createElement(m.d,{path:"/article"},r.a.createElement(ie,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ue=a(19),he=a(65);function de(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function me(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?de(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):de(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var fe={textareaValue:[{mood:"",time:"1"}]};function pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function be(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?pe(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):pe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ve={processStatus:{status:"INIT",process:0}};var ge=Object(ue.c)({userMoodReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:case _:return me({state:e},{textareaValue:t.value});default:return e}},processBarReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return be({state:e},{processStatus:{status:"start",process:0}});case V:return be({state:e},{status:"DOING",process:t.process});case A:return be({state:e},{status:"END",process:100});default:return e}}}),ye=Object(ue.d)(ge,Object(ue.a)(he.a));console.log(ye.getState());var Oe=ye;window.isProduct=!0,i.a.render(r.a.createElement(L.a,{store:Oe},r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},26:function(e,t,a){},59:function(e,t,a){},66:function(e,t,a){e.exports=a(184)},71:function(e,t,a){},72:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.6f48ae9f.chunk.js.map