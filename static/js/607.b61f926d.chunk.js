"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[607],{8342:function(n,r,e){e.d(r,{zv:function(){return m},TP:function(){return h},tx:function(){return Z},gH:function(){return f},T9:function(){return s}});var t=e(4165),i=e(5861),a=e(1243),o={API_KEY:"17e6ca146ed92f44a5307abd19614ae1",URL:"https://api.themoviedb.org/3",BEARER:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxN2U2Y2ExNDZlZDkyZjQ0YTUzMDdhYmQxOTYxNGFlMSIsInN1YiI6IjY0NzhmNjA2OWI2ZTQ3MDEzNTMxNjRiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r2ccGh-TBKpqKwOnFm5ZjQdTu3o3d8lpGMEYqaUGQSw",LOCAL_STORAGE:"themoviedb"};function u(n,r){return{method:"GET",url:"".concat(o.URL,"/").concat(n),params:r,headers:{accept:"application/json",Authorization:"Bearer ".concat(o.BEARER)}}}function c(n){return p.apply(this,arguments)}function p(){return(p=(0,i.Z)((0,t.Z)().mark((function n(r){var e;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.request(r);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(){return d.apply(this,arguments)}function d(){return d=(0,i.Z)((0,t.Z)().mark((function n(){var r,e=arguments;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=u("trending/all/day",{language:e.length>1&&void 0!==e[1]?e[1]:"en-US",page:e.length>0&&void 0!==e[0]?e[0]:1}),n.abrupt("return",c(r));case 4:case"end":return n.stop()}}),n)}))),d.apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,i.Z)((0,t.Z)().mark((function n(r){var e,i,a,o,p,s,d,f,l,h,x,m,g,Z;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.query,i=void 0===e?"qqq":e,a=r.language,o=void 0===a?"en-US":a,p=r.include_adult,s=void 0!==p&&p,d=r.primary_release_year,f=void 0===d?"":d,l=r.page,h=void 0===l?1:l,x=r.region,m=void 0===x?"":x,g=r.year,Z=u("search/movie",{language:o,query:i,include_adult:s,primary_release_year:f,page:h,region:m,year:void 0===g?"":g}),n.abrupt("return",c(Z));case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return x=(0,i.Z)((0,t.Z)().mark((function n(r){var e,i,a=arguments;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:"en-US",i=u("movie/".concat(r),{language:e}),n.abrupt("return",c(i));case 3:case"end":return n.stop()}}),n)}))),x.apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return g=(0,i.Z)((0,t.Z)().mark((function n(r){var e,i,a=arguments;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:"en-US",i=u("movie/".concat(r,"/credits"),{language:e}),n.abrupt("return",c(i));case 3:case"end":return n.stop()}}),n)}))),g.apply(this,arguments)}function Z(n){return v.apply(this,arguments)}function v(){return v=(0,i.Z)((0,t.Z)().mark((function n(r){var e,i,a,o=arguments;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>1&&void 0!==o[1]?o[1]:"en-US",i=o.length>2&&void 0!==o[2]?o[2]:1,a=u("movie/".concat(r,"/reviews"),{language:e,page:i}),n.abrupt("return",c(a));case 4:case"end":return n.stop()}}),n)}))),v.apply(this,arguments)}},9424:function(n,r,e){var t=e(184);r.Z=function(n){var r=n.error;return(0,t.jsxs)("pre",{style:{textAlign:"left"},children:[" Something went wrong,",(0,t.jsx)("code",{children:JSON.stringify(r,null,2)})]})}},6360:function(n,r,e){e.d(r,{Z:function(){return t.Z}});var t=e(9424)},2881:function(n,r,e){e.d(r,{Z:function(){return t.Z}});var t=e(3521)},6607:function(n,r,e){e.r(r),e.d(r,{default:function(){return m}});var t,i=e(4165),a=e(5861),o=e(9439),u=e(2791),c=e(7689),p=e(8342),s=e(1154),d=e(2881),f=e(6360),l=e(168),h=e(82).ZP.ul(t||(t=(0,l.Z)(["\n  padding: 0 20px;\n\n  & li {\n    width: 100%;\n  }\n\n  & p {\n    text-align: justify;\n  }\n\n"]))),x=e(184);var m=function(){var n,r=(0,c.UO)().movieId,e=(0,u.useState)({}),t=(0,o.Z)(e,2),l=t[0],m=t[1],g=(0,u.useState)(!1),Z=(0,o.Z)(g,2),v=Z[0],w=Z[1],b=(0,u.useState)(!1),y=(0,o.Z)(b,2),j=y[0],k=y[1],S=(0,u.useState)(!1),_=(0,o.Z)(S,2),I=_[0],P=_[1];return(0,u.useEffect)((function(){var n=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(r){var e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,w(!0),n.next=4,(0,p.tx)(r);case 4:e=n.sent,m(e),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),P(!0),k(n.t0);case 12:return n.prev=12,w(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,8,12,15]])})));return function(r){return n.apply(this,arguments)}}();n(r)}),[r]),(0,x.jsxs)(x.Fragment,{children:[v&&(0,x.jsx)(d.Z,{}),I&&(0,x.jsx)(f.Z,{error:j}),(0,x.jsxs)(s.im,{children:[(0,x.jsx)(s.rS,{children:"Reviews"}),!(null!==(n=l.results)&&void 0!==n&&n.length)>0&&(0,x.jsx)(s.kA,{children:"No Reviews"}),(null===l||void 0===l?void 0:l.results)&&(0,x.jsx)(h,{children:l.results.map((function(n){return(0,x.jsxs)(s.ST,{children:[(0,x.jsxs)(s.kA,{children:["Author: ",n.author]}),(0,x.jsx)(s.MW,{children:n.content})]},n.id)}))})]})]})}},1154:function(n,r,e){e.d(r,{Hn:function(){return S},MW:function(){return j},Q4:function(){return k},ST:function(){return v},TP:function(){return m},Wg:function(){return Z},im:function(){return g},kA:function(){return y},nQ:function(){return w},rS:function(){return b}});var t,i,a,o,u,c,p,s,d,f,l=e(168),h=e(1087),x=e(82),m=(0,x.ZP)(h.rU)(t||(t=(0,l.Z)(["\n padding: 8px 16px;\n  margin:  20px 0;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n"]))),g=x.ZP.div(i||(i=(0,l.Z)(["\n  margin: 24px auto;\n\n  @media screen and (max-width: 767px) {\n    width: 280px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 704px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 846px;\n  }\n"]))),Z=x.ZP.ul(a||(a=(0,l.Z)(["\n  padding: 24px;\n  display: flex;\n  gap: 20px;\n  @media screen and (max-width: 767px) {\n    flex-direction: column;\n  }\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n  }\n"]))),v=x.ZP.li(o||(o=(0,l.Z)(["\n  @media screen and (min-width: 768px) {\n    width: calc(100% / 2);\n  }\n"]))),w=x.ZP.img(u||(u=(0,l.Z)(["\n  /* width: 248px; */\n  height: 315px;\n  border-radius: 5px;\n  margin: auto;\n\n  @media screen and (min-width: 768px) {\n    /* width: 294px; */\n    height: 400px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    /* width: 375px; */\n    height: 478px;\n  }\n"]))),b=x.ZP.h2(c||(c=(0,l.Z)(["\n  margin-bottom: 20px;\n  font-weight: 700;\n  \n  @media screen and (max-width: 767px) {\n    font-size: 1rem;\n  }\n"]))),y=x.ZP.h3(p||(p=(0,l.Z)(["\n  margin-bottom: 12px;\n  font-size: 1rem;\n  font-weight: 600;\n"]))),j=x.ZP.p(s||(s=(0,l.Z)(["\n  margin-bottom: 12px;\n"]))),k=x.ZP.ul(d||(d=(0,l.Z)(["\n  display: flex;\n  gap: 20px;\n  margin-top: 36px;\n  \n"]))),S=(0,x.ZP)(h.rU)(f||(f=(0,l.Z)(["\n  padding: 8px 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  border-radius: 5px;\n  color: #3f51b5;\n  border: 1px solid #3f51b5;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: #303f9f;\n    border: 1px solid #303f9f;\n  }\n"])))}}]);
//# sourceMappingURL=607.b61f926d.chunk.js.map