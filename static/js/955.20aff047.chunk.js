"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[955],{6488:function(n,e,t){t.d(e,{Bt:function(){return f},Mc:function(){return s},Tg:function(){return u},d5:function(){return p},vw:function(){return c}});var r=t(5861),a=t(7757),i=t.n(a),o=t(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"654dca5a8217a14f67a4e1bec4dc984e"}}),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"movie","week",n.next=4,o.get("/trending/".concat("movie","/").concat("week","?page=").concat(e));case 4:return t=n.sent,r=t.data,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/search/movie?page=".concat(e,"&query=").concat(t));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},6681:function(n,e,t){t.d(e,{w:function(){return c}});var r,a=t(168),i=t(6444),o=t(6048),u=t.n(o),c=(0,i.ZP)(u())(r||(r=(0,a.Z)(["\n  display: flex;\n  list-style: none;\n  justify-content: flex-start;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  font-size: 16px;\n  font-weight: 700;\n  @media (max-width: 720px) {\n    flex-wrap: wrap;\n  }\n  & li {\n    color: ",";\n    transition: color 250ms linear;\n    :hover:not(.disabled) {\n      color: ",";\n    }\n  }\n  & .activePage {\n    color: ",";\n  }\n  & a {\n    padding: 0 8px;\n    cursor: pointer;\n  }\n  & a.disabled {\n    cursor: default;\n  }\n"])),(function(n){return"black"}),(function(n){return"#333652"}),(function(n){return"#FAD02C"}))},7047:function(n,e,t){t.d(e,{Z:function(){return d}});var r,a,i=t(168),o=t(6444),u=t(1087),c=o.ZP.ul(r||(r=(0,i.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 10px 5px;\n  margin-left: 15px;\n"]))),s=(0,o.ZP)(u.OL)(a||(a=(0,i.Z)(["\n  color: #00008b;\n"]))),p=t(7689),f=t(184),l=function(n){var e=n.results,t=(0,p.TH)(),r=e.map((function(n){var e=n.id,r=n.title;return(0,f.jsx)("li",{children:(0,f.jsx)(s,{to:"/movies/".concat(e),state:{from:t},children:(0,f.jsx)("p",{children:r})})},e)}));return(0,f.jsx)(c,{children:r})},d=l;l.defaultProps={results:[]}},4955:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,a,i,o,u=t(5861),c=t(3433),s=t(9439),p=t(7757),f=t.n(p),l=t(1087),d=t(2791),x=t(1686),h=t(6488),g=t(4942),m=t(1413),v=t(2134),b=t(8174),Z=t(168),y=t(6444),w=y.ZP.header(r||(r=(0,Z.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #e98b10;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),k=y.ZP.form(a||(a=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),j=y.ZP.button(i||(i=(0,Z.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),P=y.ZP.input(o||(o=(0,Z.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),C={search:""},S=t(184),_=function(n){var e=n.onSubmit,t=(0,d.useState)((0,m.Z)({},C)),r=(0,s.Z)(t,2),a=r[0],i=r[1],o=a.query;return(0,S.jsx)(w,{children:(0,S.jsxs)(k,{onSubmit:function(n){if(n.preventDefault(),""===a.search.trim().toLowerCase())return b.Am.warn("Enter correct search!");e(a.search),i((0,m.Z)({},C))},children:[(0,S.jsx)(j,{type:"submit","aria-label":"search-button",children:(0,S.jsx)(v.RB5,{})}),(0,S.jsx)(P,{name:"search",value:o,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",required:!0,onChange:function(n){var e=n.target,t=e.name,r=e.value;i((function(n){return(0,m.Z)((0,m.Z)({},n),{},(0,g.Z)({},t,r.trim()))}))}})]})})},q=(0,d.memo)(_),L=t(7047),N=t(2623),z=t(6681),E=function(){var n=(0,l.lr)(),e=(0,s.Z)(n,2),t=e[0],r=e[1],a=(0,d.useMemo)((function(){return Object.fromEntries((0,c.Z)(t))}),[t]),i=a.query,o=a.page,p=Number(o)?Number(o):1,g=(0,d.useState)(0),m=(0,s.Z)(g,2),v=m[0],b=m[1],Z=(0,d.useState)([]),y=(0,s.Z)(Z,2),w=y[0],k=y[1],j=(0,d.useState)(""),P=(0,s.Z)(j,2),C=P[0],_=P[1],E=(0,d.useState)(!1),B=(0,s.Z)(E,2),D=B[0],O=B[1],R=(0,d.useState)(null),A=(0,s.Z)(R,2),F=A[0],M=A[1];(0,d.useEffect)((function(){if(i)try{O(!0);var n=function(){var n=(0,u.Z)(f().mark((function n(e){var t,r,a;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,h.vw)(e,i);case 2:t=n.sent,r=t.results,a=t.total_pages,r.length?(b(a),k(r)):x.Notify.failure("No found");case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();n(p,i)}catch(e){M(e.message)}finally{O(!1)}}),[i,p,o]);var T=(0,d.useCallback)((function(n){n!==C?(r({query:n,page:1}),k([]),_(n)):x.Notify.warning("you have already entered this query!")}),[r,C]);return(0,S.jsxs)("main",{style:{paddingBottom:20},children:[(0,S.jsx)(q,{onSubmit:T}),(0,S.jsx)(L.Z,{results:w}),F&&(0,S.jsxs)("p",{children:["Error",F.message]}),v>1&&(0,S.jsx)(z.w,{breakLabel:"...",nextLabel:">",onPageChange:function(n){r({query:i,page:n.selected+1})},pageRangeDisplayed:3,pageCount:v,previousLabel:"<",renderOnZeroPageCount:null,disabledLinkClassName:"disabled",activeClassName:"activePage",forcePage:p-1}),D&&(0,S.jsx)(N.Z,{})]})}}}]);
//# sourceMappingURL=955.20aff047.chunk.js.map