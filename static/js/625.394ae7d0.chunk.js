"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[625,540],{6488:function(e,t,n){n.d(t,{Bt:function(){return f},Mc:function(){return o},Tg:function(){return u},d5:function(){return p},vw:function(){return i}});var r=n(5861),a=n(7757),c=n.n(a),s=n(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"ac91775ba29254b7e75060011bf34a90"}}),u=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"movie","week",e.next=4,s.get("/trending/".concat("movie","/").concat("week","?page=").concat(t));case 4:return n=e.sent,r=n.data,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/search/movie?page=".concat(t,"&query=").concat(n));case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},7625:function(e,t,n){n.r(t);var r=n(5861),a=n(9439),c=n(7757),s=n.n(c),u=n(7689),i=n(2791),o=n(1087),p=n(6488),f=n(540),v=n(184);t.default=function(){var e,t=(0,i.useState)(null),n=(0,a.Z)(t,2),c=n[0],d=n[1],h=(0,i.useState)(!1),l=(0,a.Z)(h,2),x=l[0],m=l[1],w=(0,u.UO)().movieId,g=(0,u.s0)(),j=(null===(e=(0,u.TH)().state)||void 0===e?void 0:e.from)||"/";(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.Mc)(t);case 3:n=e.sent,d(n),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),r=e.t0.response,console.log(r.data.message),m(!0);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();e(w)}),[w]);return(0,v.jsxs)("main",{children:[(0,v.jsx)("button",{onClick:function(){return g(j)},children:"Go Back"}),x&&(0,v.jsx)(f.default,{}),c&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("img",{src:c.poster_path?"https://image.tmdb.org/t/p/w200/".concat(c.poster_path):"https://via.placeholder.com/200",alt:c.tagline}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("h1",{children:[(0,v.jsx)("span",{children:c.title}),(0,v.jsx)("span",{children:"(".concat(c.release_date.slice(0,4),")")})]}),(0,v.jsxs)("p",{children:[(0,v.jsx)("span",{children:"Overview"}),c.overview]}),(0,v.jsxs)("p",{children:[(0,v.jsx)("span",{children:"Genre:"}),(0,v.jsx)("span",{children:c.genres&&c.genres.map((function(e){return e.name})).join(", ")})]})]})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)(o.rU,{to:"cast",state:{from:j},children:"Cast"}),(0,v.jsx)(o.rU,{to:"reviews",state:{from:j},children:"Reviews"})]}),(0,v.jsx)(u.j3,{})]})}},540:function(e,t,n){n.r(t);var r=n(184);t.default=function(){return(0,r.jsx)("h1",{children:"Not Found Page"})}}}]);
//# sourceMappingURL=625.394ae7d0.chunk.js.map