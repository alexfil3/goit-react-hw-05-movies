"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[888],{888:function(A,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(861),n=e(439),a=e(757),c=e.n(a),i=e(791),s=e(689),o=e(245),u=e(184),h=function(A){var t=A.name,r=void 0===t?"":t,n=A.character,a=void 0===n?"":n,c=A.profile_path,i=void 0===c?"":c,s="https://image.tmdb.org/t/p/w500".concat(i),o=null!==i?s:e(504);return(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{src:o,alt:r,height:"150",width:"100"}),(0,u.jsx)("p",{children:r}),(0,u.jsx)("p",{children:a})]})},p=function(){var A=(0,s.UO)().movieId,t=(0,i.useState)([]),e=(0,n.Z)(t,2),a=e[0],p=e[1],f=(0,i.useState)("fetch"),d=(0,n.Z)(f,2),l=d[0],v=d[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.credits(A);case 3:e=t.sent,p(e),v("finish"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[A]),"finish"===l&&(0,u.jsx)("div",{children:a.length>0?(0,u.jsx)("ul",{children:a.map((function(A){var t=A.character,e=A.name,r=A.id,n=A.profile_path;return(0,u.jsx)("li",{children:(0,u.jsx)(h,{name:e,character:t,profile_path:n})},r)}))}):(0,u.jsx)("p",{children:"We don't have cast for this movie"})})}},245:function(A,t,e){var r=e(861),n=e(144),a=e(671),c=e(274),i=e(359),s=e(757),o=e.n(s),u=e(243),h=(0,i.Z)("URL"),p=(0,i.Z)("API_KEY"),f=(0,i.Z)("TRAND"),d=(0,i.Z)("DETAILS"),l=(0,i.Z)("CREDITS"),v=(0,i.Z)("REVIEWS"),Z=(0,i.Z)("SEARCH"),E=(0,n.Z)((function A(){var t=this;(0,a.Z)(this,A),Object.defineProperty(this,h,{writable:!0,value:"https://api.themoviedb.org/3/"}),Object.defineProperty(this,p,{writable:!0,value:"d9b22b66e437cf83ab7d8ce61de5c8ef"}),Object.defineProperty(this,f,{writable:!0,value:"trending/movie/day"}),Object.defineProperty(this,d,{writable:!0,value:"movie/"}),Object.defineProperty(this,l,{writable:!0,value:"/credits"}),Object.defineProperty(this,v,{writable:!0,value:"/reviews"}),Object.defineProperty(this,Z,{writable:!0,value:"search/movie"}),this.trand=(0,r.Z)(o().mark((function A(){var e;return o().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,u.Z.get("".concat((0,c.Z)(t,h)[h]).concat((0,c.Z)(t,f)[f],"?api_key=").concat((0,c.Z)(t,p)[p]));case 2:return e=A.sent,A.abrupt("return",e.data.results);case 4:case"end":return A.stop()}}),A)}))),this.details=function(){var A=(0,r.Z)(o().mark((function A(e){var r;return o().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,u.Z.get("".concat((0,c.Z)(t,h)[h]).concat((0,c.Z)(t,d)[d]).concat(e,"?api_key=").concat((0,c.Z)(t,p)[p]));case 2:return r=A.sent,A.abrupt("return",r.data);case 4:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}(),this.credits=function(){var A=(0,r.Z)(o().mark((function A(e){var r;return o().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,u.Z.get("".concat((0,c.Z)(t,h)[h]).concat((0,c.Z)(t,d)[d]).concat(e).concat((0,c.Z)(t,l)[l],"?api_key=").concat((0,c.Z)(t,p)[p]));case 2:return r=A.sent,A.abrupt("return",r.data.cast);case 4:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}(),this.reviews=function(){var A=(0,r.Z)(o().mark((function A(e){var r;return o().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,u.Z.get("".concat((0,c.Z)(t,h)[h]).concat((0,c.Z)(t,d)[d]).concat(e).concat((0,c.Z)(t,v)[v],"?api_key=").concat((0,c.Z)(t,p)[p]));case 2:return r=A.sent,A.abrupt("return",r.data.results);case 4:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}(),this.search=function(){var A=(0,r.Z)(o().mark((function A(e){var r;return o().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,u.Z.get("".concat((0,c.Z)(t,h)[h]).concat((0,c.Z)(t,Z)[Z],"?api_key=").concat((0,c.Z)(t,p)[p],"&query=").concat(e));case 2:return r=A.sent,A.abrupt("return",r.data.results);case 4:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}()})),w=new E;t.Z=w},504:function(A){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAgMDAwMDBAcFBAQEBAkGBwUHCgkLCwoJCgoMDREODAwQDAoKDhQPEBESExMTCw4UFhQSFhESExL/2wBDAQMDAwQEBAgFBQgSDAoMEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhL/wAARCADwAPADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q=="}}]);
//# sourceMappingURL=888.c072325c.chunk.js.map