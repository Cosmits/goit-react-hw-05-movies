/*! For license information please see 384.ed0620fe.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[384],{342:function(n,e,t){t.d(e,{gH:function(){return d},T9:function(){return l}});var r=t(165),i=t(861),a=t(243),o={API_KEY:"17e6ca146ed92f44a5307abd19614ae1",URL:"https://api.themoviedb.org/3",BEARER:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxN2U2Y2ExNDZlZDkyZjQ0YTUzMDdhYmQxOTYxNGFlMSIsInN1YiI6IjY0NzhmNjA2OWI2ZTQ3MDEzNTMxNjRiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r2ccGh-TBKpqKwOnFm5ZjQdTu3o3d8lpGMEYqaUGQSw",LOCAL_STORAGE:"themoviedb"};function s(n,e){return{method:"GET",url:"".concat(o.URL,"/").concat(n),params:e,headers:{accept:"application/json",Authorization:"Bearer ".concat(o.BEARER)}}}function c(n){return u.apply(this,arguments)}function u(){return(u=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.request(e);case 3:return t=n.sent,n.abrupt("return",t.data);case 7:throw n.prev=7,n.t0=n.catch(0),console.error(n.t0),new Error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function l(){return p.apply(this,arguments)}function p(){return p=(0,i.Z)((0,r.Z)().mark((function n(){var e,t=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=s("trending/all/day",{language:t.length>1&&void 0!==t[1]?t[1]:"en-US",page:t.length>0&&void 0!==t[0]?t[0]:1}),n.abrupt("return",c(e));case 4:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,a,o,u,l,p,d,f,h,g,x,m,b;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query,i=void 0===t?"qqq":t,a=e.language,o=void 0===a?"en-US":a,u=e.include_adult,l=void 0!==u&&u,p=e.primary_release_year,d=void 0===p?"":p,f=e.page,h=void 0===f?1:f,g=e.region,x=void 0===g?"":g,m=e.year,b=s("search/movie",{language:o,query:i,include_adult:l,primary_release_year:d,page:h,region:x,year:void 0===m?"":m}),n.abrupt("return",c(b));case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},424:function(n,e,t){var r=t(184);e.Z=function(n){var e=n.error;return(0,r.jsxs)("pre",{style:{textAlign:"left"},children:[" Something went wrong,",(0,r.jsx)("code",{children:JSON.stringify(e,null,2)})]})}},19:function(n,e,t){t.d(e,{Z:function(){return m}});var r,i,a,o,s=t.p+"static/media/no-poster.48f1f2e7e9f886b92281.jpg",c=t(168),u=t(82),l=u.ZP.li(r||(r=(0,c.Z)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1), \n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  \n\n  &:hover {\n    transform: scale(1.03);\n    cursor: pointer;\n    background-color: #303f9f;\n    color: white;\n  }\n"]))),p=u.ZP.img(i||(i=(0,c.Z)(["\n  width: 100%;\n  height: 467px;\n  object-fit: cover;\n\n"]))),d=u.ZP.h2(a||(a=(0,c.Z)(["\n  margin: 12px 8px;\n  font-size: 2rem;\n  font-weight: 700;\n\n"]))),f=t(184);function h(n){var e=n.image,t=e.title,r=e.poster_path,i=e.name,a=t||i;return(0,f.jsxs)(l,{children:[r?(0,f.jsx)(p,{src:"https://image.tmdb.org/t/p/w300".concat(r),alt:a}):(0,f.jsx)(p,{src:s,alt:a}),(0,f.jsxs)(d,{children:[a," "]})]})}var g=u.ZP.ul(o||(o=(0,c.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),x=t(634),m=function(n){var e=n.images;return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(x.P,{children:(0,f.jsx)(g,{children:e.map((function(n){return(0,f.jsx)(h,{image:n},n.id)}))})})})}},554:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var r,i=t(165),a=t(433),o=t(861),s=t(439),c=t(791),u=t(596),l=(t(462),t(342)),p=t(634),d=t(168),f=t(82),h=f.ZP.h1(r||(r=(0,d.Z)(["\n  margin-bottom: 24px;\n  text-transform: capitalize;\n"]))),g=t(184);function x(n){var e=n.searchValue,t=n.totalHits;return(0,g.jsx)(p.P,{children:(0,g.jsxs)(h,{children:[" ",e,(0,g.jsxs)("sup",{style:{fontSize:"initial"},children:[" ",t," img"]})]})})}var m,b=t(521),v=t(19),Z=["title","titleId"];function y(){return y=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},y.apply(this,arguments)}function j(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function w(n,e){var t=n.title,r=n.titleId,i=j(n,Z);return c.createElement("svg",y({"aria-hidden":"true",focusable:"false",role:"img",className:"octicon octicon-search",viewBox:"0 0 16 16",width:16,height:16,style:{display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"},ref:e,"aria-labelledby":r},i),t?c.createElement("title",{id:r},t):null,m||(m=c.createElement("path",{d:"M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"})))}var S,k,O,I,_=c.forwardRef(w),E=(t.p,f.ZP.header(S||(S=(0,d.Z)(["\n  /* top: 0;\n  left: 0;\n  -webkit-position: sticky;\n  position: sticky;\n  z-index: 1100; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  /* background-color: #3f51b5; */\n  /* box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); */\n"])))),P=f.ZP.form(k||(k=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),N=f.ZP.button(O||(O=(0,d.Z)(['\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  /* background-image: url("./icons/search.svg"); */\n  background-color: #303f9f;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.8;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  fill: white;\n\n\n  &:hover {\n     opacity: 1;\n  }\n']))),z=f.ZP.input(I||(I=(0,d.Z)(["\n margin-left: 8px;\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"])));function T(n){var e=n.onSubmit,t=(0,c.useState)(""),r=(0,s.Z)(t,2),i=r[0],a=r[1];return(0,g.jsx)(E,{children:(0,g.jsxs)(P,{onSubmit:function(n){n.preventDefault();var t=n.target.elements.searchName.value.trim().toLowerCase();t&&(e(t),n.target.reset()),a("")},children:[(0,g.jsx)(N,{type:"submit",children:(0,g.jsx)(_,{})}),(0,g.jsx)(z,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies...",name:"searchName",value:i,onChange:function(n){a(n.target.value)}})]})})}var A=t(424);function R(){var n=(0,c.useState)(""),e=(0,s.Z)(n,2),t=e[0],r=e[1],p=(0,c.useState)([]),d=(0,s.Z)(p,2),f=d[0],h=d[1],m=(0,c.useState)(0),Z=(0,s.Z)(m,2),y=Z[0],j=Z[1],w=(0,c.useState)(!1),S=(0,s.Z)(w,2),k=S[0],O=S[1],I=(0,c.useState)(1),_=(0,s.Z)(I,2),E=_[0],P=_[1],N=(0,c.useState)(!1),z=(0,s.Z)(N,2),R=z[0],q=z[1],J=(0,c.useState)(!1),C=(0,s.Z)(J,2),F=C[0],G=C[1],L=(0,c.useState)(!1),U=(0,s.Z)(L,2),Y=U[0],B=U[1];(0,c.useEffect)((function(){if(t&&!R){var n=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(){var e,r;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,O(!0),n.next=4,(0,l.gH)({query:t,page:E});case 4:if((e=n.sent).results.length&&1===E&&u.Am.info((0,g.jsxs)("span",{children:["Fined ",e.total_results," movies with name ",t]}),{position:u.Am.POSITION.TOP_LEFT,theme:"colored"}),e.results.length){n.next=8;break}return n.abrupt("return",u.Am.warning("Sorry movie('s) not found...",{position:u.Am.POSITION.TOP_LEFT,theme:"colored"}));case 8:r=!1,(!e.results.length||e.results.length<12)&&(r=!0),q(r),h((function(n){return[].concat((0,a.Z)(n),(0,a.Z)(e.results))})),j(e.total_results),O(!1),G(null),n.next=21;break;case 17:n.prev=17,n.t0=n.catch(0),B(!0),G(n.t0);case 21:return n.prev=21,O(!1),n.finish(21);case 24:case"end":return n.stop()}}),n,null,[[0,17,21,24]])})));return function(){return n.apply(this,arguments)}}();n()}else O(!1)}),[t,E,R]);var M=(0,c.useRef)(null);return(0,c.useEffect)((function(){var n=new IntersectionObserver((function(n){n[0].isIntersecting&&P((function(n){return n+1}))}),{threshold:1});M.current&&n.observe(M.current)}),[M]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(T,{onSubmit:function(n){t!==n&&(r(n),h([]),P(1),j(0),q(!1))}}),f.length>0&&(0,g.jsx)(v.Z,{images:f,searchValue:t,totalHits:y}),k&&(0,g.jsx)(b.Z,{}),R&&f.length>0&&(0,g.jsx)(x,{searchValue:"The END",totalHits:y}),(0,g.jsx)("div",{className:"bottom",ref:M}),Y&&(0,g.jsx)(A.Z,{error:F}),(0,g.jsx)(u.Ix,{hideProgressBar:!0})]})}}}]);
//# sourceMappingURL=384.ed0620fe.chunk.js.map