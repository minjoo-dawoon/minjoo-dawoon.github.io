"use strict";(self.webpackChunkminjoo_da_woon=self.webpackChunkminjoo_da_woon||[]).push([[871],{3723:function(e,t,a){a.d(t,{L:function(){return f},M:function(){return v},P:function(){return y},S:function(){return R},_:function(){return n},a:function(){return i},b:function(){return l},g:function(){return d},h:function(){return r}});var c=a(7294),s=(a(2369),a(5697)),o=a.n(s);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e},i.apply(this,arguments)}function n(e,t){if(null==e)return{};var a,c,s={},o=Object.keys(e);for(c=0;c<o.length;c++)t.indexOf(a=o[c])>=0||(s[a]=e[a]);return s}const r=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function l(e,t,a,c,s){return void 0===s&&(s={}),i({},a,{loading:c,shouldLoad:e,"data-main-image":"",style:i({},s,{opacity:t?1:0})})}function d(e,t,a,c,s,o,n,r){const l={};o&&(l.backgroundColor=o,"fixed"===a?(l.width=c,l.height=s,l.backgroundColor=o,l.position="relative"):("constrained"===a||"fullWidth"===a)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),n&&(l.objectFit=n),r&&(l.objectPosition=r);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return d}const p=["children"],b=function(e){let{layout:t,width:a,height:s}=e;return"fullWidth"===t?c.createElement("div",{"aria-hidden":!0,style:{paddingTop:s/a*100+"%"}}):"constrained"===t?c.createElement("div",{style:{maxWidth:a,display:"block"}},c.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+s+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,a=n(e,p);return c.createElement(c.Fragment,null,c.createElement(b,i({},a)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],u=["fallback","sources","shouldLoad"],g=function(e){let{src:t,srcSet:a,loading:s,alt:o="",shouldLoad:r}=e,l=n(e,m);return c.createElement("img",i({},l,{decoding:"async",loading:s,src:r?t:void 0,"data-src":r?void 0:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,alt:o}))},h=function(e){let{fallback:t,sources:a=[],shouldLoad:s=!0}=e,o=n(e,u);const r=o.sizes||(null==t?void 0:t.sizes),l=c.createElement(g,i({},o,t,{sizes:r,shouldLoad:s}));return a.length?c.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:o}=e;return c.createElement("source",{key:t+"-"+o+"-"+a,type:o,media:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,sizes:r})})),l):l};var w;g.propTypes={src:s.string.isRequired,alt:s.string.isRequired,sizes:s.string,srcSet:s.string,shouldLoad:s.bool},h.displayName="Picture",h.propTypes={alt:s.string.isRequired,shouldLoad:s.bool,fallback:s.exact({src:s.string.isRequired,srcSet:s.string,sizes:s.string}),sources:s.arrayOf(s.oneOfType([s.exact({media:s.string.isRequired,type:s.string,sizes:s.string,srcSet:s.string.isRequired}),s.exact({media:s.string,type:s.string.isRequired,sizes:s.string,srcSet:s.string.isRequired})]))};const _=["fallback"],y=function(e){let{fallback:t}=e,a=n(e,_);return t?c.createElement(h,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):c.createElement("div",i({},a))};y.displayName="Placeholder",y.propTypes={fallback:s.string,sources:null==(w=h.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const v=function(e){return c.createElement(c.Fragment,null,c.createElement(h,i({},e)),c.createElement("noscript",null,c.createElement(h,i({},e,{shouldLoad:!0}))))};v.displayName="MainImage",v.propTypes=h.propTypes;const j=function(e,t,a){for(var c=arguments.length,s=new Array(c>3?c-3:0),i=3;i<c;i++)s[i-3]=arguments[i];return e.alt||""===e.alt?o().string.apply(o(),[e,t,a].concat(s)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},E={image:o().object.isRequired,alt:j},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],x=["style","className"],N=new Set;let C,k;const P=function(e){let{as:t="div",image:s,style:o,backgroundColor:l,className:d,class:p,onStartLoad:b,onLoad:f,onError:m}=e,u=n(e,S);const{width:g,height:h,layout:w}=s,_=function(e,t,a){const c={};let s="gatsby-image-wrapper";return"fixed"===a?(c.width=e,c.height=t):"constrained"===a&&(s="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:s,"data-gatsby-image-wrapper":"",style:c}}(g,h,w),{style:y,className:v}=_,j=n(_,x),E=(0,c.useRef)(),P=(0,c.useMemo)((()=>JSON.stringify(s.images)),[s.images]);p&&(d=p);const L=function(e,t,a){let c="";return"fullWidth"===e&&(c='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(c='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),c}(w,g,h);return(0,c.useEffect)((()=>{C||(C=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return k=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=E.current.querySelector("[data-gatsby-image-ssr]");if(e&&r())return e.complete?(null==b||b({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==b||b({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void N.add(P);if(k&&N.has(P))return;let t,c;return C.then((e=>{let{renderImageToString:a,swapPlaceholderImage:n}=e;E.current&&(E.current.innerHTML=a(i({isLoading:!0,isLoaded:N.has(P),image:s},u)),N.has(P)||(t=requestAnimationFrame((()=>{E.current&&(c=n(E.current,P,N,o,b,f,m))}))))})),()=>{t&&cancelAnimationFrame(t),c&&c()}}),[s]),(0,c.useLayoutEffect)((()=>{N.has(P)&&k&&(E.current.innerHTML=k(i({isLoading:N.has(P),isLoaded:N.has(P),image:s},u)),null==b||b({wasCached:!0}),null==f||f({wasCached:!0}))}),[s]),(0,c.createElement)(t,i({},j,{style:i({},y,o,{backgroundColor:l}),className:v+(d?" "+d:""),ref:E,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},L=(0,c.memo)((function(e){return e.image?(0,c.createElement)(P,e):null}));L.propTypes=E,L.displayName="GatsbyImage";const W=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],z=function(e,t){for(var a=arguments.length,c=new Array(a>2?a-2:0),s=2;s<a;s++)c[s-2]=arguments[s];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(c)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},D=new Set(["fixed","fullWidth","constrained"]),O={src:o().string.isRequired,alt:j,width:z,height:z,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!D.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(F=L,function(e){let{src:t,__imageData:a,__error:s}=e,o=n(e,W);return s&&console.warn(s),a?c.createElement(F,i({image:a},o)):(console.warn("Image not loaded",t),null)});var F;R.displayName="StaticImage",R.propTypes=O},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,c=!1;for(let s=0;s<e.length;s++){const o=e[s];t&&/[a-zA-Z]/.test(o)&&o.toUpperCase()===o?(e=e.slice(0,s)+"-"+e.slice(s),t=!1,c=a,a=!0,s++):a&&c&&/[a-zA-Z]/.test(o)&&o.toLowerCase()===o?(e=e.slice(0,s-1)+"-"+e.slice(s-1),c=a,a=!1,t=!0):(t=o.toLowerCase()===o&&o.toUpperCase()!==o,c=a,a=o.toUpperCase()===o&&o.toLowerCase()!==o)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},526:function(e,t,a){a.d(t,{Z:function(){return l}});var c=a(3723),s=a(7294),o="style-module--backDrop--a52da",i="style-module--coverImage--0bcfb",n="style-module--image--53ef6",r="style-module--item--1eebd";var l=function(e){let{isFriends:t=!1}=e;return s.createElement("section",{className:"style-module--wrap--30247"},s.createElement("div",{className:"style-module--text--524a0"},s.createElement("h2",{className:"style-module--title--a1f1b"},"Photo Gallery"),s.createElement("p",{className:"style-module--description--6d5ca"},"좌우로 넘겨주세요.")),s.createElement("aside",{className:"style-module--indicators--1b1a0"},s.createElement("i",{className:"style-module--left--0b93e"}),s.createElement("i",{className:"style-module--right--9a331"})),s.createElement("div",{className:"style-module--album--4f5b0"},s.createElement("div",{className:r},s.createElement("div",{className:o}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_1.jpg",objectFit:"cover",className:i,__imageData:a(135)}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_1.jpg",objectFit:"contain",className:n,__imageData:a(135)})),s.createElement("div",{className:r},s.createElement("div",{className:o}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_2.jpg",objectFit:"cover",className:i,__imageData:a(3449)}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_2.jpg",objectFit:"contain",className:n,__imageData:a(3449)})),s.createElement("div",{className:r},s.createElement("div",{className:o}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_3.jpg",objectFit:"cover",className:i,__imageData:a(5300)}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_3.jpg",objectFit:"contain",className:n,__imageData:a(5300)})),s.createElement("div",{className:r},s.createElement("div",{className:o}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_4.jpg",objectFit:"cover",className:i,__imageData:a(2154)}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_4.jpg",objectFit:"contain",className:n,__imageData:a(2154)})),s.createElement("div",{className:r},s.createElement("div",{className:o}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_5.jpg",objectFit:"cover",className:i,__imageData:a(450)}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_5.jpg",objectFit:"contain",className:n,__imageData:a(450)})),s.createElement("div",{className:r},s.createElement("div",{className:o}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_6.jpg",objectFit:"cover",className:i,__imageData:a(9302)}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_6.jpg",objectFit:"contain",className:n,__imageData:a(9302)})),t&&s.createElement("div",{className:r},s.createElement("div",{className:o}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_7.jpg",objectFit:"cover",className:i,__imageData:a(90)}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_7.jpg",objectFit:"contain",className:n,__imageData:a(90)})),s.createElement("div",{className:r},s.createElement("div",{className:o}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_8.jpg",objectFit:"cover",className:i,__imageData:a(2187)}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_8.jpg",objectFit:"contain",className:n,__imageData:a(2187)})),t&&s.createElement(s.Fragment,null,s.createElement("div",{className:r},s.createElement("div",{className:o}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_9.jpg",objectFit:"cover",className:i,__imageData:a(5544)}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_9.jpg",objectFit:"contain",className:n,__imageData:a(5544)})),s.createElement("div",{className:r},s.createElement("div",{className:o}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_10.jpg",objectFit:"cover",className:i,__imageData:a(4540)}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_10.jpg",objectFit:"contain",className:n,__imageData:a(4540)})),s.createElement("div",{className:r},s.createElement("div",{className:o}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_11.jpg",objectFit:"cover",className:i,__imageData:a(8717)}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_11.jpg",objectFit:"contain",className:n,__imageData:a(8717)}))),s.createElement("div",{className:r},s.createElement("div",{className:o}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_12.jpg",objectFit:"cover",className:i,__imageData:a(4610)}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_12.jpg",objectFit:"contain",className:n,__imageData:a(4610)})),s.createElement("div",{className:r},s.createElement("div",{className:o}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_13.jpg",objectFit:"cover",className:i,__imageData:a(3466)}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_13.jpg",objectFit:"contain",className:n,__imageData:a(3466)})),s.createElement("div",{className:r},s.createElement("div",{className:o}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_14.jpg",objectFit:"cover",className:i,__imageData:a(8679)}),s.createElement(c.S,{alt:"Wedding Photo",src:"../../images/album/photo_14.jpg",objectFit:"contain",className:n,__imageData:a(8679)}))))}},3699:function(e,t,a){a.d(t,{w:function(){return n},Z:function(){return r}});var c=a(3723),s=a(7294),o=a(1872),i="style-module--canvas--4a5d4";const n="Da-Woon and Minjoo's Wedding";var r=function(){const{distanceLeft:e,distanceRight:t,finalProgress:r,finalReveal:l}=(0,s.useContext)(o.pI),d=(0,s.useRef)(null),p=(0,s.useRef)(null),b=(0,s.useRef)(null),f=(0,s.useRef)(null),m=(0,s.useRef)(null),u=(0,s.useRef)(null),g=(0,s.useRef)(null),h=(0,s.useRef)(null),{0:w,1:_}=(0,s.useState)(0),{0:y,1:v}=(0,s.useState)(0),j=(0,s.useRef)(null),{0:E,1:S}=(0,s.useState)(0),{0:x,1:N}=(0,s.useState)(0),{0:C,1:k}=(0,s.useState)(0),{0:P,1:L}=(0,s.useState)(0),{0:W,1:z}=(0,s.useState)(0),{0:D,1:O}=(0,s.useState)(0),{0:R,1:F}=(0,s.useState)(0),{0:T,1:M}=(0,s.useState)(0),{0:I,1:A}=(0,s.useState)(0),{0:q,1:J}=(0,s.useState)({}),H=(0,s.useMemo)((()=>.485*E),[E]),U=(0,s.useMemo)((()=>.593*x),[x]),Z=(0,s.useMemo)((()=>.62*E),[E]),B=(0,s.useMemo)((()=>.62*x),[x]),G=(0,s.useMemo)((()=>w-H+1.1*I),[I,w,H]),V=(0,s.useMemo)((()=>y-U+I),[I,y,U]),Y=(0,s.useMemo)((()=>w-.5*I+1.1*I),[I,w]),$=(0,s.useMemo)((()=>w-Z-.1*I),[I,w,Z]),K=(0,s.useMemo)((()=>y-B+I),[I,y,B]),Q=(0,s.useMemo)((()=>w-.6*I),[I,w]),X=(0,s.useMemo)((()=>Math.sqrt(w**2+y**2)+Math.sqrt((C/2)**2+(P/2)**2)),[w,y,C,P]),ee=(0,s.useCallback)((e=>{e&&(b.current=e,u.current=e.getContext("2d"))}),[]),te=(0,s.useCallback)((e=>{e&&(f.current=e,g.current=e.getContext("2d"))}),[]),ae=(0,s.useCallback)((e=>{e&&(m.current=e,h.current=e.getContext("2d"))}),[]),ce=(0,s.useCallback)((()=>{if(!d.current||!f.current||!m.current)return;const e=d.current.getElementsByTagName("img"),t=Array.from(e).find((e=>e.alt===n));t&&(j.current=t,J({}))}),[]),se=(0,s.useCallback)((()=>{if(!j.current)return;if(!w||!y)return;const{width:e,height:t}=j.current,a=e/t;let c,s,o,i;a>w/y?(c=2*y*a,s=2*y,o=(2*w-c)/2,i=0):(c=2*w,s=2*w*(1/a),o=0,i=(2*y-s)/2);const n=.1*c;S(c),N(s),k(o),L(i),A(n)}),[y,w]),oe=(0,s.useCallback)((()=>{if(!u.current)return;const e=u.current;e.clearRect(0,0,2*w,2*y),e.beginPath(),e.setLineDash([5,5]),e.lineWidth=3,e.strokeStyle="#faebd7",e.moveTo(W,D+.6*I),e.lineTo(R,T+.6*I),e.stroke()}),[I,w,y,W,D,R,T]),ie=(0,s.useCallback)((()=>{if(!j.current)return;if(!g.current)return;const t=g.current,a=w-.5*I;let c,s,o,i,n;c=e>=0?e/10*(a-.5*I):1.1*I*e,r>0?(s=(C-G)*r+G,o=(P-V)*r+V):(s=w-H-c,o=y-U+I),t.clearRect(0,0,2*w,2*y),t.drawImage(j.current,s,o,E,x),r>0?(i=(H+C-.5*I-Y)*r+Y,n=(U+P-.5*I-(y+.5*I))*r+(y+.5*I)):(i=a-c,n=y+.5*I),z(i),O(n),t.globalCompositeOperation="destination-in",t.fillStyle="#000",t.beginPath(),t.arc(i,n,l>0?(X-.5*I)*l+.5*I:.5*I,0,2*Math.PI),t.fill(),t.globalCompositeOperation="source-over"}),[I,w,y,Y,e,E,x,H,U,r,l,X,C,P,G,V]),ne=(0,s.useCallback)((()=>{if(!j.current)return;if(!h.current)return;const e=h.current,a=w+.5*I;let c,s,o,i,n;c=t>=0?t/10*(a-(2*w-.5*I)):1.1*-I*t,r>0?(s=(C-$)*r+$,o=(P-K)*r+K):(s=w-Z+I-c,o=y-B+I),e.clearRect(0,0,2*w,2*y),e.drawImage(j.current,s,o,E,x),r>0?(i=(Z+C-.5*I-Q)*r+Q,n=(B+P-.5*I-(y+.5*I))*r+(y+.5*I)):(i=a-c,n=y+.5*I),F(i),M(n),e.globalCompositeOperation="destination-in",e.fillStyle="#000",e.beginPath(),e.arc(i,n,l>0?(X-.5*I)*l+.5*I:.5*I,0,2*Math.PI),e.fill(),e.globalCompositeOperation="source-over"}),[I,w,y,Q,t,E,x,Z,B,r,l,X,C,P,$,K]);return(0,s.useLayoutEffect)((()=>{se(),ie(),ne(),oe()}),[w,y,se,ie,ne,oe,q]),(0,s.useEffect)((()=>(p.current=new ResizeObserver((e=>{let[t]=e;const{width:a,height:c}=t.contentRect;_(a),v(c)})),p.current.observe(d.current),()=>{var e;null===(e=p.current)||void 0===e||e.disconnect()})),[]),(0,s.useEffect)((()=>{if(!d.current)return;const{width:e,height:t}=d.current.getBoundingClientRect();_(e),v(t)}),[]),(0,s.useMemo)((()=>s.createElement("div",{className:"style-module--wrap--7a4f5",ref:d},s.createElement("canvas",{className:i,ref:ee,width:2*w,height:2*y,style:{width:w+"px",height:y+"px",zIndex:0}}),s.createElement("canvas",{className:i,ref:te,width:2*w,height:2*y,style:{width:w+"px",height:y+"px",zIndex:1}}),s.createElement("canvas",{className:i,ref:ae,width:2*w,height:2*y,style:{width:w+"px",height:y+"px",zIndex:r>0?2:0}}),s.createElement(c.S,{src:"../../images/main.jpg",loading:"eager",alt:n,style:{display:"none"},onLoad:ce,__imageData:a(4161)}))),[ce,y,w,r,ee,te,ae])}},3932:function(e,t,a){a.d(t,{Z:function(){return o}});var c=a(7294),s="style-module--author--729b0";var o=function(){return c.createElement("footer",{className:"style-module--footer--cc446"},c.createElement("div",{className:"style-module--wrap--83a16"},c.createElement("p",{className:"style-module--thanks--2b354"},"Thank You!"),c.createElement("p",{className:s},"Website designed by Minjoo"),c.createElement("p",{className:s},"Assembled by"," ",c.createElement("a",{href:"https://dawoonchung.com",target:"_blank",rel:"noopener noreferrer"},"Da-Woon")," ","with lots of ☕️")))}},1872:function(e,t,a){a.d(t,{EC:function(){return s},pI:function(){return i}});var c=a(7294);const s=1,o={altLeft:"Da-Woon's Life Path",altRight:"Minjoo's Life Path",captionEntered:!1,captionPosition:0,captionOpacity:1,distanceLeft:s,distanceRight:s,finalProgress:0,finalReveal:0,setAltLeft:()=>{},setAltRight:()=>{},setCaptionEntered:()=>{},setCaptionPosition:()=>{},setCaptionOpacity:()=>{},setDistanceLeft:()=>{},setDistanceRight:()=>{},setFinalProgress:()=>{},setFinalReveal:()=>{}},i=(0,c.createContext)(o);t.ZP=function(e){let{children:t}=e;const{0:a,1:o}=(0,c.useState)("Da-Woon's Life Path"),{0:n,1:r}=(0,c.useState)("Minjoo's Life Path"),{0:l,1:d}=(0,c.useState)(!1),{0:p,1:b}=(0,c.useState)(0),{0:f,1:m}=(0,c.useState)(1),{0:u,1:g}=(0,c.useState)(s),{0:h,1:w}=(0,c.useState)(s),{0:_,1:y}=(0,c.useState)(0),{0:v,1:j}=(0,c.useState)(0),E=(0,c.useMemo)((()=>({altLeft:a,altRight:n,captionEntered:l,captionPosition:p,captionOpacity:f,distanceLeft:u,distanceRight:h,finalProgress:_,finalReveal:v,setAltLeft:o,setAltRight:r,setCaptionEntered:d,setCaptionPosition:b,setCaptionOpacity:m,setDistanceLeft:g,setDistanceRight:w,setFinalProgress:y,setFinalReveal:j})),[a,n,l,p,f,u,h,_,v]);return c.createElement(i.Provider,{value:E},t)}},817:function(e,t,a){a.d(t,{F:function(){return c}});var c="style-module--header--692ed"},514:function(e,t,a){a.d(t,{BH:function(){return o},Oc:function(){return d},TN:function(){return p},YY:function(){return b},_y:function(){return i},lC:function(){return n},ns:function(){return l},rI:function(){return f},rP:function(){return s},ue:function(){return c},vZ:function(){return r}});var c="style-module--backDrop--9f289",s="style-module--hero--df5d3",o="style-module--image--9aaa9",i="style-module--indicator--75cf0",n="style-module--simple--89bf3",r="style-module--simpleTitle--70f13",l="style-module--simpleTitleTop--85497",d="style-module--subtitle--268da",p="style-module--title--7888f",b="style-module--titleTop--ac1ee",f="style-module--titleWrap--3438d"},4052:function(e,t,a){a.d(t,{DH:function(){return s},P8:function(){return o},qv:function(){return c},re:function(){return i}});var c="style-module--icon--54f56",s="style-module--main--0c88a",o="style-module--nowrap--a2b1a",i="style-module--wrap--74c8e"},1804:function(e,t,a){a.d(t,{J:function(){return c}});var c="style-module--root--bc05f"},4540:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#584848","images":{"fallback":{"src":"/static/7522a3bddd2e3ba754f29387f45c0d9f/778ef/photo_10.jpg","srcSet":"/static/7522a3bddd2e3ba754f29387f45c0d9f/6762e/photo_10.jpg 683w,\\n/static/7522a3bddd2e3ba754f29387f45c0d9f/eb51c/photo_10.jpg 1365w,\\n/static/7522a3bddd2e3ba754f29387f45c0d9f/778ef/photo_10.jpg 2730w","sizes":"(min-width: 2730px) 2730px, 100vw"},"sources":[{"srcSet":"/static/7522a3bddd2e3ba754f29387f45c0d9f/8f4b1/photo_10.webp 683w,\\n/static/7522a3bddd2e3ba754f29387f45c0d9f/59a49/photo_10.webp 1365w,\\n/static/7522a3bddd2e3ba754f29387f45c0d9f/f927a/photo_10.webp 2730w","type":"image/webp","sizes":"(min-width: 2730px) 2730px, 100vw"}]},"width":2730,"height":4096}')},135:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#d8d8e8","images":{"fallback":{"src":"/static/5a6bb05aa2b01811aa9c883fb73fddb7/778ef/photo_1.jpg","srcSet":"/static/5a6bb05aa2b01811aa9c883fb73fddb7/6762e/photo_1.jpg 683w,\\n/static/5a6bb05aa2b01811aa9c883fb73fddb7/eb51c/photo_1.jpg 1365w,\\n/static/5a6bb05aa2b01811aa9c883fb73fddb7/778ef/photo_1.jpg 2730w","sizes":"(min-width: 2730px) 2730px, 100vw"},"sources":[{"srcSet":"/static/5a6bb05aa2b01811aa9c883fb73fddb7/8f4b1/photo_1.webp 683w,\\n/static/5a6bb05aa2b01811aa9c883fb73fddb7/59a49/photo_1.webp 1365w,\\n/static/5a6bb05aa2b01811aa9c883fb73fddb7/f927a/photo_1.webp 2730w","type":"image/webp","sizes":"(min-width: 2730px) 2730px, 100vw"}]},"width":2730,"height":4096}')},2187:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/add3a25f107e44463986e8123709ad2e/778ef/photo_8.jpg","srcSet":"/static/add3a25f107e44463986e8123709ad2e/6762e/photo_8.jpg 683w,\\n/static/add3a25f107e44463986e8123709ad2e/eb51c/photo_8.jpg 1365w,\\n/static/add3a25f107e44463986e8123709ad2e/778ef/photo_8.jpg 2730w","sizes":"(min-width: 2730px) 2730px, 100vw"},"sources":[{"srcSet":"/static/add3a25f107e44463986e8123709ad2e/8f4b1/photo_8.webp 683w,\\n/static/add3a25f107e44463986e8123709ad2e/59a49/photo_8.webp 1365w,\\n/static/add3a25f107e44463986e8123709ad2e/f927a/photo_8.webp 2730w","type":"image/webp","sizes":"(min-width: 2730px) 2730px, 100vw"}]},"width":2730,"height":4096}')},90:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8b8b8","images":{"fallback":{"src":"/static/99cdb609a56f635ebcd3fc261d2d3c23/778ef/photo_7.jpg","srcSet":"/static/99cdb609a56f635ebcd3fc261d2d3c23/6762e/photo_7.jpg 683w,\\n/static/99cdb609a56f635ebcd3fc261d2d3c23/eb51c/photo_7.jpg 1365w,\\n/static/99cdb609a56f635ebcd3fc261d2d3c23/778ef/photo_7.jpg 2730w","sizes":"(min-width: 2730px) 2730px, 100vw"},"sources":[{"srcSet":"/static/99cdb609a56f635ebcd3fc261d2d3c23/8f4b1/photo_7.webp 683w,\\n/static/99cdb609a56f635ebcd3fc261d2d3c23/59a49/photo_7.webp 1365w,\\n/static/99cdb609a56f635ebcd3fc261d2d3c23/f927a/photo_7.webp 2730w","type":"image/webp","sizes":"(min-width: 2730px) 2730px, 100vw"}]},"width":2730,"height":4096}')},9302:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8f8","images":{"fallback":{"src":"/static/d6db49bf880b04d1fcff8e71397c29b1/778ef/photo_6.jpg","srcSet":"/static/d6db49bf880b04d1fcff8e71397c29b1/6762e/photo_6.jpg 683w,\\n/static/d6db49bf880b04d1fcff8e71397c29b1/eb51c/photo_6.jpg 1365w,\\n/static/d6db49bf880b04d1fcff8e71397c29b1/778ef/photo_6.jpg 2730w","sizes":"(min-width: 2730px) 2730px, 100vw"},"sources":[{"srcSet":"/static/d6db49bf880b04d1fcff8e71397c29b1/8f4b1/photo_6.webp 683w,\\n/static/d6db49bf880b04d1fcff8e71397c29b1/59a49/photo_6.webp 1365w,\\n/static/d6db49bf880b04d1fcff8e71397c29b1/f927a/photo_6.webp 2730w","type":"image/webp","sizes":"(min-width: 2730px) 2730px, 100vw"}]},"width":2730,"height":4096}')},3466:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#a89898","images":{"fallback":{"src":"/static/9842144c7655ea4ce2b7bf37d4db9798/778ef/photo_13.jpg","srcSet":"/static/9842144c7655ea4ce2b7bf37d4db9798/6762e/photo_13.jpg 683w,\\n/static/9842144c7655ea4ce2b7bf37d4db9798/eb51c/photo_13.jpg 1365w,\\n/static/9842144c7655ea4ce2b7bf37d4db9798/778ef/photo_13.jpg 2730w","sizes":"(min-width: 2730px) 2730px, 100vw"},"sources":[{"srcSet":"/static/9842144c7655ea4ce2b7bf37d4db9798/8f4b1/photo_13.webp 683w,\\n/static/9842144c7655ea4ce2b7bf37d4db9798/59a49/photo_13.webp 1365w,\\n/static/9842144c7655ea4ce2b7bf37d4db9798/f927a/photo_13.webp 2730w","type":"image/webp","sizes":"(min-width: 2730px) 2730px, 100vw"}]},"width":2730,"height":4096}')},4610:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#98c8f8","images":{"fallback":{"src":"/static/5b40e4b9dd4c024a477a89f407f0d664/778ef/photo_12.jpg","srcSet":"/static/5b40e4b9dd4c024a477a89f407f0d664/6762e/photo_12.jpg 683w,\\n/static/5b40e4b9dd4c024a477a89f407f0d664/eb51c/photo_12.jpg 1365w,\\n/static/5b40e4b9dd4c024a477a89f407f0d664/778ef/photo_12.jpg 2730w","sizes":"(min-width: 2730px) 2730px, 100vw"},"sources":[{"srcSet":"/static/5b40e4b9dd4c024a477a89f407f0d664/8f4b1/photo_12.webp 683w,\\n/static/5b40e4b9dd4c024a477a89f407f0d664/59a49/photo_12.webp 1365w,\\n/static/5b40e4b9dd4c024a477a89f407f0d664/f927a/photo_12.webp 2730w","type":"image/webp","sizes":"(min-width: 2730px) 2730px, 100vw"}]},"width":2730,"height":4096}')},8679:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8d8e8","images":{"fallback":{"src":"/static/4f6b11046600aec3e4145c7f45a59fae/778ef/photo_14.jpg","srcSet":"/static/4f6b11046600aec3e4145c7f45a59fae/6762e/photo_14.jpg 683w,\\n/static/4f6b11046600aec3e4145c7f45a59fae/eb51c/photo_14.jpg 1365w,\\n/static/4f6b11046600aec3e4145c7f45a59fae/778ef/photo_14.jpg 2730w","sizes":"(min-width: 2730px) 2730px, 100vw"},"sources":[{"srcSet":"/static/4f6b11046600aec3e4145c7f45a59fae/8f4b1/photo_14.webp 683w,\\n/static/4f6b11046600aec3e4145c7f45a59fae/59a49/photo_14.webp 1365w,\\n/static/4f6b11046600aec3e4145c7f45a59fae/f927a/photo_14.webp 2730w","type":"image/webp","sizes":"(min-width: 2730px) 2730px, 100vw"}]},"width":2730,"height":4096}')},5544:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#a8c8e8","images":{"fallback":{"src":"/static/ed7d8030578e13abd584ba90a211e8be/778ef/photo_9.jpg","srcSet":"/static/ed7d8030578e13abd584ba90a211e8be/6762e/photo_9.jpg 683w,\\n/static/ed7d8030578e13abd584ba90a211e8be/eb51c/photo_9.jpg 1365w,\\n/static/ed7d8030578e13abd584ba90a211e8be/778ef/photo_9.jpg 2730w","sizes":"(min-width: 2730px) 2730px, 100vw"},"sources":[{"srcSet":"/static/ed7d8030578e13abd584ba90a211e8be/8f4b1/photo_9.webp 683w,\\n/static/ed7d8030578e13abd584ba90a211e8be/59a49/photo_9.webp 1365w,\\n/static/ed7d8030578e13abd584ba90a211e8be/f927a/photo_9.webp 2730w","type":"image/webp","sizes":"(min-width: 2730px) 2730px, 100vw"}]},"width":2730,"height":4096}')},5300:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8e8d8","images":{"fallback":{"src":"/static/8b0c4aba2eb7b49e7b7773f6acdf004b/778ef/photo_3.jpg","srcSet":"/static/8b0c4aba2eb7b49e7b7773f6acdf004b/6762e/photo_3.jpg 683w,\\n/static/8b0c4aba2eb7b49e7b7773f6acdf004b/eb51c/photo_3.jpg 1365w,\\n/static/8b0c4aba2eb7b49e7b7773f6acdf004b/778ef/photo_3.jpg 2730w","sizes":"(min-width: 2730px) 2730px, 100vw"},"sources":[{"srcSet":"/static/8b0c4aba2eb7b49e7b7773f6acdf004b/8f4b1/photo_3.webp 683w,\\n/static/8b0c4aba2eb7b49e7b7773f6acdf004b/59a49/photo_3.webp 1365w,\\n/static/8b0c4aba2eb7b49e7b7773f6acdf004b/f927a/photo_3.webp 2730w","type":"image/webp","sizes":"(min-width: 2730px) 2730px, 100vw"}]},"width":2730,"height":4096}')},3449:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#081818","images":{"fallback":{"src":"/static/2254d1c23f579613fdd2ec537c814fe2/778ef/photo_2.jpg","srcSet":"/static/2254d1c23f579613fdd2ec537c814fe2/6762e/photo_2.jpg 683w,\\n/static/2254d1c23f579613fdd2ec537c814fe2/eb51c/photo_2.jpg 1365w,\\n/static/2254d1c23f579613fdd2ec537c814fe2/778ef/photo_2.jpg 2730w","sizes":"(min-width: 2730px) 2730px, 100vw"},"sources":[{"srcSet":"/static/2254d1c23f579613fdd2ec537c814fe2/8f4b1/photo_2.webp 683w,\\n/static/2254d1c23f579613fdd2ec537c814fe2/59a49/photo_2.webp 1365w,\\n/static/2254d1c23f579613fdd2ec537c814fe2/f927a/photo_2.webp 2730w","type":"image/webp","sizes":"(min-width: 2730px) 2730px, 100vw"}]},"width":2730,"height":4096}')},2154:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8a898","images":{"fallback":{"src":"/static/4777d19394f0ce4d4633cd5f69b97fc4/778ef/photo_4.jpg","srcSet":"/static/4777d19394f0ce4d4633cd5f69b97fc4/6762e/photo_4.jpg 683w,\\n/static/4777d19394f0ce4d4633cd5f69b97fc4/eb51c/photo_4.jpg 1365w,\\n/static/4777d19394f0ce4d4633cd5f69b97fc4/778ef/photo_4.jpg 2730w","sizes":"(min-width: 2730px) 2730px, 100vw"},"sources":[{"srcSet":"/static/4777d19394f0ce4d4633cd5f69b97fc4/8f4b1/photo_4.webp 683w,\\n/static/4777d19394f0ce4d4633cd5f69b97fc4/59a49/photo_4.webp 1365w,\\n/static/4777d19394f0ce4d4633cd5f69b97fc4/f927a/photo_4.webp 2730w","type":"image/webp","sizes":"(min-width: 2730px) 2730px, 100vw"}]},"width":2730,"height":4096}')},8717:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/c0588704b8934c54cc3ce5dc29bb12ec/778ef/photo_11.jpg","srcSet":"/static/c0588704b8934c54cc3ce5dc29bb12ec/6762e/photo_11.jpg 683w,\\n/static/c0588704b8934c54cc3ce5dc29bb12ec/eb51c/photo_11.jpg 1365w,\\n/static/c0588704b8934c54cc3ce5dc29bb12ec/778ef/photo_11.jpg 2730w","sizes":"(min-width: 2730px) 2730px, 100vw"},"sources":[{"srcSet":"/static/c0588704b8934c54cc3ce5dc29bb12ec/8f4b1/photo_11.webp 683w,\\n/static/c0588704b8934c54cc3ce5dc29bb12ec/59a49/photo_11.webp 1365w,\\n/static/c0588704b8934c54cc3ce5dc29bb12ec/f927a/photo_11.webp 2730w","type":"image/webp","sizes":"(min-width: 2730px) 2730px, 100vw"}]},"width":2730,"height":4096}')},450:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8e8e8","images":{"fallback":{"src":"/static/f9cdd1bfe3798f330e73f747db34f2bb/778ef/photo_5.jpg","srcSet":"/static/f9cdd1bfe3798f330e73f747db34f2bb/6762e/photo_5.jpg 683w,\\n/static/f9cdd1bfe3798f330e73f747db34f2bb/eb51c/photo_5.jpg 1365w,\\n/static/f9cdd1bfe3798f330e73f747db34f2bb/778ef/photo_5.jpg 2730w","sizes":"(min-width: 2730px) 2730px, 100vw"},"sources":[{"srcSet":"/static/f9cdd1bfe3798f330e73f747db34f2bb/8f4b1/photo_5.webp 683w,\\n/static/f9cdd1bfe3798f330e73f747db34f2bb/59a49/photo_5.webp 1365w,\\n/static/f9cdd1bfe3798f330e73f747db34f2bb/f927a/photo_5.webp 2730w","type":"image/webp","sizes":"(min-width: 2730px) 2730px, 100vw"}]},"width":2730,"height":4096}')},4161:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/static/db838e1531b7548657f571abe5aa405e/05cb5/main.jpg","srcSet":"/static/db838e1531b7548657f571abe5aa405e/ed523/main.jpg 1480w,\\n/static/db838e1531b7548657f571abe5aa405e/81046/main.jpg 2960w,\\n/static/db838e1531b7548657f571abe5aa405e/05cb5/main.jpg 5919w","sizes":"(min-width: 5919px) 5919px, 100vw"},"sources":[{"srcSet":"/static/db838e1531b7548657f571abe5aa405e/0e8b8/main.webp 1480w,\\n/static/db838e1531b7548657f571abe5aa405e/8230c/main.webp 2960w,\\n/static/db838e1531b7548657f571abe5aa405e/47444/main.webp 5919w","type":"image/webp","sizes":"(min-width: 5919px) 5919px, 100vw"}]},"width":5919,"height":3946}')}}]);
//# sourceMappingURL=9c3f74bd74381e17a73fbf648c6d3277e216e52a-408d9bafb6c0c30951cf.js.map