"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{135:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(861),a=r(439),c=r(757),i=r.n(c),s=r(791),o=r(245),u=r(689),l=r(87),d="MovieDetails_imgWrapper__1TLwc",h="MovieDetails_movie__9X7I7",p="MovieDetails_genres__Pnmgt",v="MovieDetails_genre__+tTbx",f="MovieDetails_additional__+f3rh",Z="MovieDetails_additionalList__0IfAN",x="MovieDetails_link__U+v+7",m=r(184),w=function(){var e,t,r=(0,u.TH)(),c=(0,s.useRef)(null!==(e=null===(t=r.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),w=(0,s.useState)({}),_=(0,a.Z)(w,2),j=_[0],b=_[1],k=(0,s.useState)("fetch"),y=(0,a.Z)(k,2),g=y[0],D=y[1],N=(0,u.UO)().movieId;(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.details(N);case 3:t=e.sent,b(t),D("finish"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[N]);var O=j.poster_path,P=j.title,M=j.vote_average,S=j.overview,E=j.genres,I=Math.trunc(10*M),R="https://image.tmdb.org/t/p/w500/".concat(O);return"finish"===g&&(0,m.jsxs)("main",{children:[(0,m.jsxs)("div",{className:h,children:[(0,m.jsxs)("div",{className:d,children:[(0,m.jsx)(l.rU,{to:c.current,children:"Go back"}),(0,m.jsx)("div",{children:(0,m.jsx)("img",{src:R,width:"160",alt:""})})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:P}),(0,m.jsxs)("p",{children:["User Score: ",I,"%"]}),(0,m.jsx)("h2",{children:"Overview"}),(0,m.jsx)("p",{children:S}),(0,m.jsx)("h2",{children:"Genres"}),(0,m.jsx)("ul",{className:p,children:E.map((function(e){var t=e.id,r=e.name;return(0,m.jsx)("li",{className:v,children:r},t)}))})]})]}),(0,m.jsx)("p",{className:f,children:"Additional information"}),(0,m.jsxs)("ul",{className:Z,children:[(0,m.jsx)("li",{children:(0,m.jsx)(l.rU,{to:"cast",className:x,children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(l.rU,{to:"reviews",className:x,children:"Reviews"})})]}),(0,m.jsx)(s.Suspense,{fallback:(0,m.jsx)("div",{children:"Loading....."}),children:(0,m.jsx)(u.j3,{})})]})}},245:function(e,t,r){var n=r(861),a=r(144),c=r(671),i=r(274),s=r(359),o=r(757),u=r.n(o),l=r(243),d=(0,s.Z)("URL"),h=(0,s.Z)("API_KEY"),p=(0,s.Z)("TRAND"),v=(0,s.Z)("DETAILS"),f=(0,s.Z)("CREDITS"),Z=(0,s.Z)("REVIEWS"),x=(0,s.Z)("SEARCH"),m=(0,a.Z)((function e(){var t=this;(0,c.Z)(this,e),Object.defineProperty(this,d,{writable:!0,value:"https://api.themoviedb.org/3/"}),Object.defineProperty(this,h,{writable:!0,value:"d9b22b66e437cf83ab7d8ce61de5c8ef"}),Object.defineProperty(this,p,{writable:!0,value:"trending/movie/day"}),Object.defineProperty(this,v,{writable:!0,value:"movie/"}),Object.defineProperty(this,f,{writable:!0,value:"/credits"}),Object.defineProperty(this,Z,{writable:!0,value:"/reviews"}),Object.defineProperty(this,x,{writable:!0,value:"search/movie"}),this.trand=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get("".concat((0,i.Z)(t,d)[d]).concat((0,i.Z)(t,p)[p],"?api_key=").concat((0,i.Z)(t,h)[h]));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)}))),this.details=function(){var e=(0,n.Z)(u().mark((function e(r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get("".concat((0,i.Z)(t,d)[d]).concat((0,i.Z)(t,v)[v]).concat(r,"?api_key=").concat((0,i.Z)(t,h)[h]));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.credits=function(){var e=(0,n.Z)(u().mark((function e(r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get("".concat((0,i.Z)(t,d)[d]).concat((0,i.Z)(t,v)[v]).concat(r).concat((0,i.Z)(t,f)[f],"?api_key=").concat((0,i.Z)(t,h)[h]));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.reviews=function(){var e=(0,n.Z)(u().mark((function e(r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get("".concat((0,i.Z)(t,d)[d]).concat((0,i.Z)(t,v)[v]).concat(r).concat((0,i.Z)(t,Z)[Z],"?api_key=").concat((0,i.Z)(t,h)[h]));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.search=function(){var e=(0,n.Z)(u().mark((function e(r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get("".concat((0,i.Z)(t,d)[d]).concat((0,i.Z)(t,x)[x],"?api_key=").concat((0,i.Z)(t,h)[h],"&query=").concat(r));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})),w=new m;t.Z=w}}]);
//# sourceMappingURL=135.8140bfc3.chunk.js.map