"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[982,540],{6488:function(n,t,e){e.d(t,{Bt:function(){return p},Mc:function(){return i},Tg:function(){return s},d5:function(){return f},vw:function(){return o}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"654dca5a8217a14f67a4e1bec4dc984e"}}),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"movie","week",n.next=4,u.get("/trending/".concat("movie","/").concat("week","?page=").concat(t));case 4:return e=n.sent,r=e.data,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/search/movie?page=".concat(t,"&query=").concat(e));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/movie/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},8982:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,a,c=e(5861),u=e(9439),s=e(7757),o=e.n(s),i=e(2791),f=e(7689),p=e(540),v=e(6488),d=e(168),h=e(6444),l=h.ZP.ul(r||(r=(0,d.Z)(["\ndisplay:flex;\nflex-direction:column;\ngap:15px"]))),x=h.ZP.h2(a||(a=(0,d.Z)(["\nfont-size:18px;\nfont-weight:600;\n"]))),m=e(184),w=function(){var n=(0,i.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,i.useState)(!1),s=(0,u.Z)(a,2),d=s[0],h=s[1],w=(0,f.UO)().movieId;return(0,i.useEffect)((function(){var n=function(){var n=(0,c.Z)(o().mark((function n(t){var e,a,c;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.Bt)(w);case 3:e=n.sent,a=e.results,r(a),n.next=13;break;case 8:n.prev=8,n.t0=n.catch(0),c=n.t0.response,h(!0),console.log(c.data.message);case 13:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}();n(w)}),[w]),(0,m.jsxs)(m.Fragment,{children:[d&&(0,m.jsx)(p.default,{}),e.length?(0,m.jsx)(l,{children:e.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,m.jsx)("li",{children:(0,m.jsxs)("div",{children:[(0,m.jsx)(x,{children:e}),(0,m.jsx)("p",{children:r})]})},t)}))}):(0,m.jsx)("p",{children:"No results"})]})};w.defaultProps=[];var g=w},540:function(n,t,e){e.r(t);var r=e(184);t.default=function(){return(0,r.jsx)("h1",{children:"Not Found Page"})}}}]);
//# sourceMappingURL=982.94089236.chunk.js.map