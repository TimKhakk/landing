(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[947],{70947:function(e,t,n){"use strict";n.d(t,{G:function(){return He}});var r=n(67294),o=n(5031),i=n(87174),a=n(26369),s=n(32782),f=n(35860),c=n(69320),u=n(1770),l=n(73935);function p(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function d(e){return e instanceof p(e).Element||e instanceof Element}function m(e){return e instanceof p(e).HTMLElement||e instanceof HTMLElement}function h(e){return"undefined"!==typeof ShadowRoot&&(e instanceof p(e).ShadowRoot||e instanceof ShadowRoot)}var v=Math.max,y=Math.min,g=Math.round;function b(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function w(){return!/^((?!chrome|android).)*safari/i.test(b())}function x(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&m(e)&&(o=e.offsetWidth>0&&g(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&g(r.height)/e.offsetHeight||1);var a=(d(e)?p(e):window).visualViewport,s=!w()&&n,f=(r.left+(s&&a?a.offsetLeft:0))/o,c=(r.top+(s&&a?a.offsetTop:0))/i,u=r.width/o,l=r.height/i;return{width:u,height:l,top:c,right:f+u,bottom:c+l,left:f,x:f,y:c}}function O(e){var t=p(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function E(e){return e?(e.nodeName||"").toLowerCase():null}function j(e){return((d(e)?e.ownerDocument:e.document)||window.document).documentElement}function A(e){return x(j(e)).left+O(e).scrollLeft}function k(e){return p(e).getComputedStyle(e)}function D(e){var t=k(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function R(e,t,n){void 0===n&&(n=!1);var r=m(t),o=m(t)&&function(e){var t=e.getBoundingClientRect(),n=g(t.width)/e.offsetWidth||1,r=g(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=j(t),a=x(e,o,n),s={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(r||!r&&!n)&&(("body"!==E(t)||D(i))&&(s=function(e){return e!==p(e)&&m(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:O(e);var t}(t)),m(t)?((f=x(t,!0)).x+=t.clientLeft,f.y+=t.clientTop):i&&(f.x=A(i))),{x:a.left+s.scrollLeft-f.x,y:a.top+s.scrollTop-f.y,width:a.width,height:a.height}}function B(e){var t=x(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function M(e){return"html"===E(e)?e:e.assignedSlot||e.parentNode||(h(e)?e.host:null)||j(e)}function S(e){return["html","body","#document"].indexOf(E(e))>=0?e.ownerDocument.body:m(e)&&D(e)?e:S(M(e))}function L(e,t){var n;void 0===t&&(t=[]);var r=S(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=p(r),a=o?[i].concat(i.visualViewport||[],D(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(L(M(a)))}function P(e){return["table","td","th"].indexOf(E(e))>=0}function C(e){return m(e)&&"fixed"!==k(e).position?e.offsetParent:null}function N(e){for(var t=p(e),n=C(e);n&&P(n)&&"static"===k(n).position;)n=C(n);return n&&("html"===E(n)||"body"===E(n)&&"static"===k(n).position)?t:n||function(e){var t=/firefox/i.test(b());if(/Trident/i.test(b())&&m(e)&&"fixed"===k(e).position)return null;var n=M(e);for(h(n)&&(n=n.host);m(n)&&["html","body"].indexOf(E(n))<0;){var r=k(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var W="top",H="bottom",F="right",T="left",V="auto",q=[W,H,F,T],_="start",U="end",z="viewport",I="popper",K=q.reduce((function(e,t){return e.concat([t+"-"+_,t+"-"+U])}),[]),G=[].concat(q,[V]).reduce((function(e,t){return e.concat([t,t+"-"+_,t+"-"+U])}),[]),Y=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function X(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function $(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var Z={placement:"bottom",modifiers:[],strategy:"absolute"};function J(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function Q(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?Z:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},Z,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,f={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;c(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:d(e)?L(e):e.contextElement?L(e.contextElement):[],popper:L(t)};var u=function(e){var t=X(e);return Y.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=u.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:f,options:r}),c=function(){};a.push(s||c)}})),f.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(J(t,n)){o.rects={reference:R(t,N(n),"fixed"===o.options.strategy),popper:B(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,c=i.options,u=void 0===c?{}:c,l=i.name;"function"===typeof a&&(o=a({state:o,options:u,name:l,instance:f})||o)}else o.reset=!1,r=-1}}},update:$((function(){return new Promise((function(e){f.forceUpdate(),e(o)}))})),destroy:function(){c(),s=!0}};if(!J(e,t))return f;function c(){a.forEach((function(e){return e()})),a=[]}return f.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var ee={passive:!0};function te(e){return e.split("-")[0]}function ne(e){return e.split("-")[1]}function re(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function oe(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?te(o):null,a=o?ne(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case W:t={x:s,y:n.y-r.height};break;case H:t={x:s,y:n.y+n.height};break;case F:t={x:n.x+n.width,y:f};break;case T:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?re(i):null;if(null!=c){var u="y"===c?"height":"width";switch(a){case _:t[c]=t[c]-(n[u]/2-r[u]/2);break;case U:t[c]=t[c]+(n[u]/2-r[u]/2)}}return t}var ie={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ae(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,f=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,l=e.isFixed,d=a.x,m=void 0===d?0:d,h=a.y,v=void 0===h?0:h,y="function"===typeof u?u({x:m,y:v}):{x:m,y:v};m=y.x,v=y.y;var b=a.hasOwnProperty("x"),w=a.hasOwnProperty("y"),x=T,O=W,E=window;if(c){var A=N(n),D="clientHeight",R="clientWidth";if(A===p(n)&&"static"!==k(A=j(n)).position&&"absolute"===s&&(D="scrollHeight",R="scrollWidth"),o===W||(o===T||o===F)&&i===U)O=H,v-=(l&&A===E&&E.visualViewport?E.visualViewport.height:A[D])-r.height,v*=f?1:-1;if(o===T||(o===W||o===H)&&i===U)x=F,m-=(l&&A===E&&E.visualViewport?E.visualViewport.width:A[R])-r.width,m*=f?1:-1}var B,M=Object.assign({position:s},c&&ie),S=!0===u?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:g(n*o)/o||0,y:g(r*o)/o||0}}({x:m,y:v},p(n)):{x:m,y:v};return m=S.x,v=S.y,f?Object.assign({},M,((B={})[O]=w?"0":"",B[x]=b?"0":"",B.transform=(E.devicePixelRatio||1)<=1?"translate("+m+"px, "+v+"px)":"translate3d("+m+"px, "+v+"px, 0)",B)):Object.assign({},M,((t={})[O]=w?v+"px":"",t[x]=b?m+"px":"",t.transform="",t))}var se={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=G.reduce((function(e,n){return e[n]=function(e,t,n){var r=te(e),o=[T,W].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[T,F].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},fe={left:"right",right:"left",bottom:"top",top:"bottom"};function ce(e){return e.replace(/left|right|bottom|top/g,(function(e){return fe[e]}))}var ue={start:"end",end:"start"};function le(e){return e.replace(/start|end/g,(function(e){return ue[e]}))}function pe(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&h(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function de(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function me(e,t,n){return t===z?de(function(e,t){var n=p(e),r=j(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0;if(o){i=o.width,a=o.height;var c=w();(c||!c&&"fixed"===t)&&(s=o.offsetLeft,f=o.offsetTop)}return{width:i,height:a,x:s+A(e),y:f}}(e,n)):d(t)?function(e,t){var n=x(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):de(function(e){var t,n=j(e),r=O(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=v(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=v(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+A(e),f=-r.scrollTop;return"rtl"===k(o||n).direction&&(s+=v(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(j(e)))}function he(e,t,n,r){var o="clippingParents"===t?function(e){var t=L(M(e)),n=["absolute","fixed"].indexOf(k(e).position)>=0&&m(e)?N(e):e;return d(n)?t.filter((function(e){return d(e)&&pe(e,n)&&"body"!==E(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=me(e,n,r);return t.top=v(o.top,t.top),t.right=y(o.right,t.right),t.bottom=y(o.bottom,t.bottom),t.left=v(o.left,t.left),t}),me(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ve(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ye(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function ge(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.strategy,a=void 0===i?e.strategy:i,s=n.boundary,f=void 0===s?"clippingParents":s,c=n.rootBoundary,u=void 0===c?z:c,l=n.elementContext,p=void 0===l?I:l,m=n.altBoundary,h=void 0!==m&&m,v=n.padding,y=void 0===v?0:v,g=ve("number"!==typeof y?y:ye(y,q)),b=p===I?"reference":I,w=e.rects.popper,O=e.elements[h?b:p],E=he(d(O)?O:O.contextElement||j(e.elements.popper),f,u,a),A=x(e.elements.reference),k=oe({reference:A,element:w,strategy:"absolute",placement:o}),D=de(Object.assign({},w,k)),R=p===I?D:A,B={top:E.top-R.top+g.top,bottom:R.bottom-E.bottom+g.bottom,left:E.left-R.left+g.left,right:R.right-E.right+g.right},M=e.modifiersData.offset;if(p===I&&M){var S=M[o];Object.keys(B).forEach((function(e){var t=[F,H].indexOf(e)>=0?1:-1,n=[W,H].indexOf(e)>=0?"y":"x";B[e]+=S[n]*t}))}return B}var be={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,u=n.boundary,l=n.rootBoundary,p=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,y=te(v),g=f||(y===v||!m?[ce(v)]:function(e){if(te(e)===V)return[];var t=ce(e);return[le(e),t,le(t)]}(v)),b=[v].concat(g).reduce((function(e,n){return e.concat(te(n)===V?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?G:f,u=ne(r),l=u?s?K:K.filter((function(e){return ne(e)===u})):q,p=l.filter((function(e){return c.indexOf(e)>=0}));0===p.length&&(p=l);var d=p.reduce((function(t,n){return t[n]=ge(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[te(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:l,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,E=!0,j=b[0],A=0;A<b.length;A++){var k=b[A],D=te(k),R=ne(k)===_,B=[W,H].indexOf(D)>=0,M=B?"width":"height",S=ge(t,{placement:k,boundary:u,rootBoundary:l,altBoundary:p,padding:c}),L=B?R?F:T:R?H:W;w[M]>x[M]&&(L=ce(L));var P=ce(L),C=[];if(i&&C.push(S[D]<=0),s&&C.push(S[L]<=0,S[P]<=0),C.every((function(e){return e}))){j=k,E=!1;break}O.set(k,C)}if(E)for(var N=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return j=t,"break"},U=m?3:1;U>0;U--){if("break"===N(U))break}t.placement!==j&&(t.modifiersData[r]._skip=!0,t.placement=j,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function we(e,t,n){return v(e,y(t,n))}var xe={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,c=n.rootBoundary,u=n.altBoundary,l=n.padding,p=n.tether,d=void 0===p||p,m=n.tetherOffset,h=void 0===m?0:m,g=ge(t,{boundary:f,rootBoundary:c,padding:l,altBoundary:u}),b=te(t.placement),w=ne(t.placement),x=!w,O=re(b),E="x"===O?"y":"x",j=t.modifiersData.popperOffsets,A=t.rects.reference,k=t.rects.popper,D="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,R="number"===typeof D?{mainAxis:D,altAxis:D}:Object.assign({mainAxis:0,altAxis:0},D),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,S={x:0,y:0};if(j){if(i){var L,P="y"===O?W:T,C="y"===O?H:F,V="y"===O?"height":"width",q=j[O],U=q+g[P],z=q-g[C],I=d?-k[V]/2:0,K=w===_?A[V]:k[V],G=w===_?-k[V]:-A[V],Y=t.elements.arrow,X=d&&Y?B(Y):{width:0,height:0},$=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Z=$[P],J=$[C],Q=we(0,A[V],X[V]),ee=x?A[V]/2-I-Q-Z-R.mainAxis:K-Q-Z-R.mainAxis,oe=x?-A[V]/2+I+Q+J+R.mainAxis:G+Q+J+R.mainAxis,ie=t.elements.arrow&&N(t.elements.arrow),ae=ie?"y"===O?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(L=null==M?void 0:M[O])?L:0,fe=q+oe-se,ce=we(d?y(U,q+ee-se-ae):U,q,d?v(z,fe):z);j[O]=ce,S[O]=ce-q}if(s){var ue,le="x"===O?W:T,pe="x"===O?H:F,de=j[E],me="y"===E?"height":"width",he=de+g[le],ve=de-g[pe],ye=-1!==[W,T].indexOf(b),be=null!=(ue=null==M?void 0:M[E])?ue:0,xe=ye?he:de-A[me]-k[me]-be+R.altAxis,Oe=ye?de+A[me]+k[me]-be-R.altAxis:ve,Ee=d&&ye?function(e,t,n){var r=we(e,t,n);return r>n?n:r}(xe,de,Oe):we(d?xe:he,de,d?Oe:ve);j[E]=Ee,S[E]=Ee-de}t.modifiersData[r]=S}},requiresIfExists:["offset"]};var Oe={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=te(n.placement),f=re(s),c=[T,F].indexOf(s)>=0?"height":"width";if(i&&a){var u=function(e,t){return ve("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ye(e,q))}(o.padding,n),l=B(i),p="y"===f?W:T,d="y"===f?H:F,m=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],h=a[f]-n.rects.reference[f],v=N(i),y=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,g=m/2-h/2,b=u[p],w=y-l[c]-u[d],x=y/2-l[c]/2+g,O=we(b,x,w),E=f;n.modifiersData[r]=((t={})[E]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&pe(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ee(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function je(e){return[W,F,H,T].some((function(t){return e[t]>=0}))}var Ae=Q({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=p(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,ee)})),s&&f.addEventListener("resize",n.update,ee),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,ee)})),s&&f.removeEventListener("resize",n.update,ee)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=oe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:te(t.placement),variation:ne(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ae(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ae(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];m(o)&&E(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});m(r)&&E(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},se,be,xe,Oe,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ge(t,{elementContext:"reference"}),s=ge(t,{altBoundary:!0}),f=Ee(a,r),c=Ee(s,o,i),u=je(f),l=je(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":l})}}]}),ke=n(69590),De=n.n(ke),Re=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})},Be="undefined"!==typeof window&&window.document&&window.document.createElement?r.useLayoutEffect:r.useEffect,Me=[];const Se=["bottom-start","bottom","bottom-end","top-start","top","top-end","right-start","right","right-end","left-start","left","left-end"];function Le({anchorRef:e,placement:t=Se,offset:n,modifiers:o=[],strategy:i,altBoundary:a}){const[s,f]=r.useState(null),[c,u]=r.useState(null),p=Array.isArray(t)?t:[t],{attributes:d,styles:m}=function(e,t,n){void 0===n&&(n={});var o=r.useRef(null),i={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||Me},a=r.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=a[0],f=a[1],c=r.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);l.flushSync((function(){f({styles:Re(n.map((function(e){return[e,t.styles[e]||{}]}))),attributes:Re(n.map((function(e){return[e,t.attributes[e]]})))})}))},requires:["computeStyles"]}}),[]),u=r.useMemo((function(){var e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[c,{name:"applyStyles",enabled:!1}])};return De()(o.current,e)?o.current||e:(o.current=e,e)}),[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,c]),p=r.useRef();return Be((function(){p.current&&p.current.setOptions(u)}),[u]),Be((function(){if(null!=e&&null!=t){var r=(n.createPopper||Ae)(e,t,u);return p.current=r,function(){r.destroy(),p.current=null}}}),[e,t,n.createPopper]),{state:p.current?p.current.state:null,styles:s.styles,attributes:s.attributes,update:p.current?p.current.update:null,forceUpdate:p.current?p.current.forceUpdate:null}}(null===e||void 0===e?void 0:e.current,s,{strategy:i,modifiers:[{name:"arrow",options:{element:c}},{name:"offset",options:{offset:n,altBoundary:a}},{name:"flip",options:{fallbackPlacements:p.slice(1),altBoundary:a}},...o],placement:p[0]});return{attributes:d,styles:m,setPopperRef:f,setArrowRef:u}}var Pe=n(15442);n(69979);const Ce=(0,s.Ge)("popup");function Ne({styles:e,attributes:t,setArrowRef:n}){return r.createElement("div",Object.assign({"data-popper-arrow":!0,ref:n,className:Ce("arrow"),style:e},t),r.createElement("div",{className:Ce("arrow-content")},r.createElement("div",{className:Ce("arrow-circle-wrapper")},r.createElement("div",{className:Ce("arrow-circle",{left:!0})})),r.createElement("div",{className:Ce("arrow-circle-wrapper")},r.createElement("div",{className:Ce("arrow-circle",{right:!0})}))))}const We=(0,s.Ge)("popup");function He({keepMounted:e=!1,hasArrow:t=!1,offset:n=[0,4],open:s,placement:l,anchorRef:p,disableEscapeKeyDown:d,disableOutsideClick:m,disableLayer:h,style:v,className:y,contentClassName:g,modifiers:b=[],children:w,onEscapeKeyDown:x,onOutsideClick:O,onClose:E,onClick:j,onMouseEnter:A,onMouseLeave:k,onFocus:D,onBlur:R,disablePortal:B,container:M,strategy:S,qa:L,restoreFocus:P,restoreFocusRef:C,role:N,id:W,focusTrap:H=!1,autoFocus:F=!1}){const T=r.useRef(null);(0,u.s)({open:s,disableEscapeKeyDown:d,disableOutsideClick:m,onEscapeKeyDown:x,onOutsideClick:O,onClose:E,contentRefs:[p,T],enabled:!h});const{attributes:V,styles:q,setPopperRef:_,setArrowRef:U}=Le({anchorRef:p,placement:l,offset:t?[n[0],n[1]+8]:n,strategy:S,altBoundary:B,modifiers:[{name:"arrow",options:{enabled:t,padding:4}},{name:"preventOverflow",options:{padding:1,altBoundary:B}},...b]}),z=(0,c.c)(_,T,(0,a.e)()),I=(0,Pe.H)({enabled:Boolean(P&&s),restoreFocusRef:C});return r.createElement(i.h,{container:M,disablePortal:B},r.createElement(o.Z,{nodeRef:T,in:s,addEndListener:e=>{var t;return null===(t=T.current)||void 0===t?void 0:t.addEventListener("animationend",e)},classNames:(0,f.Y)(We),mountOnEnter:!e,unmountOnExit:!e,appear:!0},r.createElement("div",Object.assign({ref:z,style:q.popper},V.popper,I,{className:We({open:s},y),"data-qa":L,id:W,role:N}),r.createElement(a.i,{enabled:H&&s,disableAutoFocus:!F},r.createElement("div",{onClick:j,onMouseEnter:A,onMouseLeave:k,onFocus:D,onBlur:R,className:We("content",g),style:v,tabIndex:-1},t&&r.createElement(Ne,{styles:q.arrow,attributes:V.arrow,setArrowRef:U}),w)))))}},69979:function(){},69590:function(e){var t="undefined"!==typeof Element,n="function"===typeof Map,r="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,f,c,u;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(f=s;0!==f--;)if(!i(e[f],a[f]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(f=u.next()).done;)if(!a.has(f.value[0]))return!1;for(u=e.entries();!(f=u.next()).done;)if(!i(f.value[1],a.get(f.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(f=u.next()).done;)if(!a.has(f.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(f=s;0!==f--;)if(e[f]!==a[f])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"===typeof e.valueOf&&"function"===typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"===typeof e.toString&&"function"===typeof a.toString)return e.toString()===a.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(f=s;0!==f--;)if(!Object.prototype.hasOwnProperty.call(a,c[f]))return!1;if(t&&e instanceof Element)return!1;for(f=s;0!==f--;)if(("_owner"!==c[f]&&"__v"!==c[f]&&"__o"!==c[f]||!e.$$typeof)&&!i(e[c[f]],a[c[f]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}}}]);