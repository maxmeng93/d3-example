(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{229:function(e,t,n){},230:function(e,t,n){},231:function(e,t,n){},232:function(e,t,n){},233:function(e,t,n){},235:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),l=n.n(c),o=n(1),i=n(12);var u=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"\u56fe\u8868\u5217\u8868"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/line"},"\u6298\u7ebf\u56fe/\u9762\u79ef\u56fe")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/bar"},"\u67f1\u72b6/\u6761\u5f62\u56fe")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/pie"},"\u997c\u56fe")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/scatter"},"\u6563\u70b9\u56fe")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/radar"},"\u96f7\u8fbe\u56fe")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/tree"},"\u6811\u56fe")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/treemap"},"\u77e9\u5f62\u6811\u56fe")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/sunburst"},"\u65ed\u65e5\u56fe")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/boxplot"},"\u7bb1\u7ebf\u56fe")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/candlestick"},"K\u7ebf\u56fe")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/heatmap"},"\u70ed\u529b\u56fe")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/map"},"\u5730\u56fe")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/graph"},"\u5173\u7cfb\u56fe")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/tree_of_life"},"\u73af\u5f62\u8fdb\u5316\u6811\u56fe"))))};var s=function(){return r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"\u9996\u9875"),r.a.createElement(u,null))};var m=function(){return r.a.createElement("div",null,"404")},p=n(2),d=n(3),h=n(5),f=n(4),b=n(6),E=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("span",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("h1",null,"\u767b\u5f55"))}}]),t}(r.a.Component),v=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("span",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("h1",null,"\u6ce8\u518c"))}}]),t}(r.a.Component),O=n(7),j=n(15),k=n.n(j),g=n(25),y=n.n(g),w=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.markedSetting()}},{key:"markedSetting",value:function(){k.a.setOptions({renderer:new k.a.Renderer,gfm:!0,tables:!0,breaks:!0,pedantic:!1,sanitize:!0,smartLists:!0,smartypants:!1,highlight:function(e){return y.a.highlightAuto(e).value}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:this.props.markdown?k()(this.props.markdown):null}})}}]),t}(r.a.Component),x=n(26),C=n.n(x),N=(n(229),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={markdown:""},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;this.renderChart(),fetch(C.a).then(function(e){return e.text()}).then(function(t){return e.setState({markdown:t})})}},{key:"renderChart",value:function(){var e=O.select(this.refs["chart-wrap"]),t=40.5,n=40.5,a=50.5,r=60.5,c=960-r-n,l=500-t-a,o=O.scaleLinear().domain([0,100]).range([0,c]),i=O.scaleLog().base(Math.E).domain([Math.exp(0),Math.exp(9)]).range([l,0]),u=O.axisBottom().scale(o),s=O.axisLeft().scale(i).tickFormat(function(e){return"e"+function(e){return(e+"").split("").map(function(e){return"0123456789"[e]}).join("")}(Math.round(Math.log(e)))}),m=O.line().x(function(e){return o(e[0])}).y(function(e){return i(e[1])}),p=e.append("svg").attr("width",c+r+n).attr("height",l+t+a).append("g").attr("transform","translate("+r+","+t+")");p.append("g").attr("class","axis axis--y").attr("transform","translate(-10,0)").call(s),p.append("g").attr("class","axis axis--x").attr("transform","translate(0,"+(l+10)+")").call(u),p.append("path").datum(O.range(100).map(function(e){return[e,e*e+e+1]})).attr("class","line").attr("d",m)}},{key:"render",value:function(){return r.a.createElement("div",{id:"line",className:"content"},r.a.createElement("span",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("h1",null,"\u6298\u7ebf\u56fe"),r.a.createElement("div",{ref:"chart-wrap"}),r.a.createElement(w,{markdown:this.state.markdown}))}}]),t}(r.a.Component)),H=n(27),D=n.n(H),M=n(28),L=n.n(M),S=(n(230),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={markdown:""},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;O.csv(L.a).then(function(t){return e.renderChart(t)}),fetch(D.a).then(function(e){return e.text()}).then(function(t){return e.setState({markdown:t})})}},{key:"renderChart",value:function(e){var t,n=[],a=e.filter(function(e){return t||(t=e.year),-1===n.indexOf(e.year)&&n.push(e.year),e.year===t}),r=30,c=0,l=0,o=100,i=500-o-c,u=450-r-l;function s(e){return e.age}function m(t){O.select(".selected").classed("selected",!1),b.filter(function(e){return e===t}).classed("selected",!0),a=e.filter(function(e){return e.year===t}),v.data(a,s).transition().attr("width",function(e){return d(e.value)})}var p,d=O.scaleLinear().domain([0,O.max(e,function(e){return e.value})]).range([0,i]),h=O.scaleBand().domain(a.map(function(e){return e.age})).range([0,u]).paddingInner(.25),f=O.select(this.refs["chart-wrap"]);f.append("h2").text("Age distribution of the world, "+t),f.append("div").attr("class","play-button").text("\u25b6 PLAY ALL YEARS").on("click",function(){var e=0;p=setInterval(function(){m(n[e]),++e>n.length-1&&clearInterval(p)},1e3)});var b=f.append("div").attr("class","buttons-container").selectAll("div").data(n).enter().append("div").text(function(e){return e}).attr("class",function(e){return e===t?"selected":""}).on("click",function(e){m(e),clearInterval(p)});f.append("div").attr("class","top-label age-label").append("p").text("age group"),f.append("div").attr("class","top-label").text("portion of the population"),f.append("div").attr("class","clearfix");var E=f.append("svg").attr("width",i+o+c).attr("height",u+r+l).append("g").attr("transform","translate("+o+","+r+")"),v=E.append("g").attr("class","bar").selectAll("rect").data(a,s).enter().append("rect").attr("x",0).attr("y",function(e){return h(e.age)}).attr("width",function(e){return d(e.value)}).attr("height",h.bandwidth()),j=O.axisTop().scale(d).ticks(5,"%");E.append("g").call(j);var k=O.axisLeft().scale(h);E.append("g").call(k)}},{key:"render",value:function(){return r.a.createElement("div",{id:"bar",className:"content"},r.a.createElement("span",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("h1",null,"\u67f1\u72b6\u56fe"),r.a.createElement("div",{ref:"chart-wrap"}),r.a.createElement(w,{markdown:this.state.markdown}))}}]),t}(r.a.Component)),A=n(29),I=n.n(A),R=n(30),_=n.n(R),B=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={markdown:""},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;O.csv(_.a).then(function(t){return e.renderChart(t)}),fetch(I.a).then(function(e){return e.text()}).then(function(t){return e.setState({markdown:t})})}},{key:"renderChart",value:function(e){var t=O.select(this.refs["chart-wrap"]),n=Math.min(975,500)/2*.8,a=O.pie().sort(null).value(function(e){return e.value}),r=O.arc().innerRadius(n).outerRadius(n),c=O.arc().innerRadius(0).outerRadius(Math.min(975,500)/2-1),l=O.scaleOrdinal().domain(e.map(function(e){return e.name})).range(O.quantize(function(e){return O.interpolateSpectral(.8*e+.1)},e.length).reverse()),o=a(e),i=t.append("svg").attr("viewBox",[-487.5,-250,975,500]);i.append("g").attr("stroke","white").selectAll("path").data(o).join("path").attr("fill",function(e){return l(e.data.name)}).attr("d",c).append("title").text(function(e){return"".concat(e.data.name,": ").concat(e.data.value.toLocaleString())}),i.append("g").attr("font-family","sans-serif").attr("font-size",12).attr("text-anchor","middle").selectAll("text").data(o).join("text").attr("transform",function(e){return"translate(".concat(r.centroid(e),")")}).call(function(e){return e.append("tspan")}).attr("y","-0.4em").attr("font-weight","bold").text(function(e){return e.data.name}).call(function(e){return e.filter(function(e){return e.endAngle-e.startAngle>.25}).append("tspan").attr("x",0).attr("y","0.7em").attr("fill-opacity","0.7").text(function(e){return e.data.value.toLocaleString()})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("span",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("h1",null,"\u997c\u56fe"),r.a.createElement("div",{ref:"chart-wrap"}),r.a.createElement(w,{markdown:this.state.markdown}))}}]),t}(r.a.Component),z=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("span",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("h1",null,"\u6563\u70b9\u56fe"))}}]),t}(r.a.Component),F=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("span",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("h1",null,"\u96f7\u8fbe\u56fe"))}}]),t}(r.a.Component),J=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("span",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("h1",null,"\u6811\u56fe"))}}]),t}(r.a.Component),K=n(31),T=n.n(K),W=(n(231),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={markdown:""},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;this.renderChart(),fetch(T.a).then(function(e){return e.text()}).then(function(t){return e.setState({markdown:t})})}},{key:"renderChart",value:function(){console.log(O)}},{key:"render",value:function(){return r.a.createElement("div",{id:"treemap",className:"content"},r.a.createElement("span",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("h1",null,"\u77e9\u5f62\u6811\u56fe"),r.a.createElement("div",{ref:"chart-wrap"}),r.a.createElement(w,{markdown:this.state.markdown}))}}]),t}(r.a.Component)),Y=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("span",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("h1",null,"\u65ed\u65e5\u56fe"))}}]),t}(r.a.Component),q=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("span",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("h1",null,"\u7bb1\u7ebf\u56fe"))}}]),t}(r.a.Component),P=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("span",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("h1",null,"K\u7ebf\u56fe"))}}]),t}(r.a.Component),$=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("span",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("h1",null,"\u70ed\u529b\u56fe"))}}]),t}(r.a.Component),G=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("span",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("h1",null,"\u5730\u56fe"))}}]),t}(r.a.Component),Q=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("span",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("h1",null,"\u5173\u7cfb\u56fe"))}}]),t}(r.a.Component),U=n(32),V=n.n(U),X=n(33),Z=n.n(X),ee=(n(232),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={markdown:""},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;fetch(Z.a).then(function(e){return e.text()}).then(function(t){return e.renderChart(t)}),fetch(V.a).then(function(e){return e.text()}).then(function(t){return e.setState({markdown:t})})}},{key:"renderChart",value:function(e){e=function(e){for(var t=[],n={},a=e.split(/\s*(;|\(|\)|,|:)\s*/),r=0;r<a.length;r++){var c=a[r];switch(c){case"(":var l={};n.branchset=[l],t.push(n),n=l;break;case",":var l={};t[t.length-1].branchset.push(l),n=l;break;case")":n=t.pop();break;case":":break;default:var o=a[r-1];")"==o||"("==o||","==o?n.name=c:":"==o&&(n.length=parseFloat(c))}}return n}(e),console.log(e),console.log(O);O.select(this.refs["chart-wrap"]).append("svg")}},{key:"render",value:function(){return r.a.createElement("div",{id:"treeOfLife",className:"content"},r.a.createElement("span",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("h1",null,"\u73af\u5f62\u8fdb\u5316\u6811\u56fe"),r.a.createElement("div",{ref:"chart-wrap"}),r.a.createElement(w,{markdown:this.state.markdown}))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(233),n(234);l.a.render(r.a.createElement(function(){return r.a.createElement(o.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:s}),r.a.createElement(i.a,{path:"/login",component:E}),r.a.createElement(i.a,{path:"/regist",component:v}),r.a.createElement(i.a,{path:"/line",component:N}),r.a.createElement(i.a,{path:"/bar",component:S}),r.a.createElement(i.a,{path:"/pie",component:B}),r.a.createElement(i.a,{path:"/scatter",component:z}),r.a.createElement(i.a,{path:"/radar",component:F}),r.a.createElement(i.a,{path:"/tree",component:J}),r.a.createElement(i.a,{path:"/treemap",component:W}),r.a.createElement(i.a,{path:"/sunburst",component:Y}),r.a.createElement(i.a,{path:"/boxplot",component:q}),r.a.createElement(i.a,{path:"/candlestick",component:P}),r.a.createElement(i.a,{path:"/heatmap",component:$}),r.a.createElement(i.a,{path:"/map",component:G}),r.a.createElement(i.a,{path:"/graph",component:Q}),r.a.createElement(i.a,{path:"/tree_of_life",component:ee}),r.a.createElement(i.a,{component:m})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},26:function(e,t,n){e.exports=n.p+"static/media/index.abfff113.md"},27:function(e,t,n){e.exports=n.p+"static/media/index.78a8f568.md"},28:function(e,t,n){e.exports=n.p+"static/media/index.10b5edf5.csv"},29:function(e,t,n){e.exports=n.p+"static/media/index.b82b781c.md"},30:function(e,t,n){e.exports=n.p+"static/media/population-by-age.5b5b12f0.csv"},31:function(e,t,n){e.exports=n.p+"static/media/index.6229f99a.md"},32:function(e,t,n){e.exports=n.p+"static/media/index.38e4271f.md"},33:function(e,t,n){e.exports=n.p+"static/media/life.8c643b9c.txt"},34:function(e,t,n){e.exports=n(235)}},[[34,1,2]]]);
//# sourceMappingURL=main.65a6536c.chunk.js.map