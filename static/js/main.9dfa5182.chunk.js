(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(3),s=n.n(r),c=n(1),i=n(4),l=n(5),u=n(6),p=n(8),b=n(7),h=n(9);n(15);var m=function(e){var t=e.showGoods;return a.a.createElement("button",{onClick:t,type:"submit",className:"ui blue button"},"Start")};var g=function(e){var t=e.reverse,n=e.sortAlph,o=e.reset,r=e.sortLength,s=e.showByLength,c=e.goods,i=e.selectedOption;return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{onClick:t,type:"button",className:"ui blue basic button start"},"Reverse"),a.a.createElement("button",{onClick:n,type:"button",className:"ui violet basic button"},"Sort alphabetically"),a.a.createElement("button",{onClick:o,type:"button",className:"ui purple basic button"},"Reset"),a.a.createElement("button",{onClick:r,type:"button",className:"ui pink basic button"},"Sort by length"),a.a.createElement("select",{onClick:s,value:i,className:"ui basic button green dropdown"},a.a.createElement("option",{value:"0"},"Select length"),a.a.createElement("option",{value:"1"},"1"),a.a.createElement("option",{value:"2"},"2"),a.a.createElement("option",{value:"3"},"3"),a.a.createElement("option",{value:"4"},"4"),a.a.createElement("option",{value:"5"},"5"),a.a.createElement("option",{value:"6"},"6"),a.a.createElement("option",{value:"7"},"7"),a.a.createElement("option",{value:"8"},"8"),a.a.createElement("option",{value:"9"},"9"),a.a.createElement("option",{value:"10"},"10")),a.a.createElement("ol",{className:"ui list"},c.map(function(e){return a.a.createElement("li",{value:"-",key:e},e)})))};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],E=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(b.a)(t).call(this,e))).showGoods=function(){n.setState(function(e){return v({},e,{isStarted:!0})})},n.reset=function(){n.setState(function(e){return v({},e,{goods:[].concat(d)})})},n.reverse=function(){n.setState(function(e){return v({},e,{goods:Object(c.a)(e.goods).reverse()})})},n.sortAlph=function(){n.setState(function(e){return v({},e,{goods:Object(c.a)(e.goods).sort()})})},n.sortLength=function(){n.setState(function(e){return v({},e,{goods:Object(c.a)(e.initialValue).sort(function(e,t){return e.length-t.length})})})},n.showByLength=function(e){var t=e.target.value;n.setState(function(e){return v({},e,{selectedOption:t,goods:Object(c.a)(e.initialValue).filter(function(e){return e.length===+t})})})},n.state={initialValue:[].concat(d),goods:[].concat(d),isStarted:!1},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"wrapper"},this.state.isStarted?a.a.createElement(g,{reverse:this.reverse,sortAlph:this.sortAlph,reset:this.reset,sortLength:this.sortLength,chooseLength:this.chooseLength,showByLength:this.showByLength,goods:this.state.goods,initialValue:this.state.initialValue}):a.a.createElement(m,{showGoods:this.showGoods}))}}]),t}(o.Component);s.a.render(a.a.createElement(E,{test:123}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.9dfa5182.chunk.js.map