"use strict";(self.webpackChunkminjoo_da_woon=self.webpackChunkminjoo_da_woon||[]).push([[691],{3478:function(e,t,a){a.r(t),a.d(t,{Head:function(){return Se},default:function(){return ke}});var c=a(7294),i=a(526),n=a(9408),s=a(3932),r=a(3699),o=a(4184),b=a.n(o),f=a(1872);var l=function(){const{0:e,1:t}=(0,c.useState)(0),a=(0,c.useRef)(null),i=(0,c.useRef)(null);(0,c.useEffect)((()=>(i.current=new ResizeObserver((()=>{t(window.innerWidth-document.documentElement.clientWidth)})),i.current.observe(a.current),()=>{var e;null===(e=i.current)||void 0===e||e.disconnect()})),[]);const{altLeft:n,altRight:s,captionEntered:r,captionPosition:o}=(0,c.useContext)(f.pI),l=(0,c.useMemo)((()=>({transform:"translate3d(calc(((100vw - "+e+"px) / 2 - 100% - 0.5ch) * "+o+"), 0, 0)"})),[o,e]),d=(0,c.useMemo)((()=>({transform:"translate3d(calc(((100vw - "+e+"px) / -2 + 100% + 0.5ch) * "+o+"), 0, 0)"})),[o,e]);return c.createElement("div",{className:b()("style-module--wrap--c174d",{"style-module--entered--5ea6e":r}),ref:a},c.createElement("div",{className:"style-module--left--7febd",style:l},n),c.createElement("div",{className:"style-module--right--d0089",style:d},s))};const d=(0,c.createContext)({observer:null,currentEntries:[]});var p=function(e){let{children:t,options:a}=e;const{0:i,1:n}=(0,c.useState)([]),{0:s,1:r}=(0,c.useState)(null);(0,c.useEffect)((()=>{r(new IntersectionObserver((e=>{n(e)}),a))}),[a]),(0,c.useEffect)((()=>()=>{null==s||s.disconnect()}),[s]);const o=(0,c.useMemo)((()=>({observer:s,currentEntries:i})),[i,s]);return c.createElement(d.Provider,{value:o},t)};var g=function(e){const{observer:t,currentEntries:a}=(0,c.useContext)(d),i=(0,c.useMemo)((()=>a.find((t=>t.target===e))),[a,e]);return(0,c.useEffect)((()=>{if(!t||!e)return;const a=e;return t.observe(a),()=>{t.unobserve(a)}}),[e,t]),{observer:t,currentEntry:i}},u="style-module--cities--09d5d",w="style-module--sentinel--ce4ec",m=a(3723);var h=function(e){let{className:t,children:a,target:i,alt:n,prevAlt:s,distance:r,prevDistance:o,ratio:l}=e;const{0:d,1:p}=(0,c.useState)(),u=(0,c.useCallback)((e=>{e&&p(e)}),[]),{currentEntry:w}=g(d),{setDistanceLeft:m,setDistanceRight:h,setAltLeft:v,setAltRight:j}=(0,c.useContext)(f.pI),y=(0,c.useMemo)((()=>"left"===i?m:h),[m,h,i]),E=(0,c.useMemo)((()=>"left"===i?v:j),[v,j,i]);return(0,c.useEffect)((()=>{if(!w)return;const{isIntersecting:e,intersectionRatio:t,boundingClientRect:a}=w;e&&a.y>0&&(E(t>.5?n:s),y((r-o)*t+o))}),[n,w,r,s,o,E,y]),c.createElement("section",{className:b()(t,"style-module--section--caeae"),style:{height:100*l+"vh"}},c.createElement("div",{className:"style-module--intersection--bb18a",ref:u},a))};const v="Seoul, 1987",j=f.EC;var y=function(e){let{ratio:t=1}=e;return c.createElement(h,{target:"left",alt:v,prevAlt:"Da-Woon's Life Path",distance:j,prevDistance:f.EC,ratio:t},c.createElement(m.S,{alt:v,objectFit:"cover",objectPosition:"right center",quality:70,src:"../../../images/seoul-left.jpg",style:{width:"100%"},__imageData:a(1462)}))};const E="Busan, 1988";var x=function(e){let{ratio:t=1}=e;return c.createElement(h,{target:"left",alt:E,prevAlt:v,distance:3,prevDistance:j,ratio:t},c.createElement(m.S,{alt:E,objectFit:"cover",objectPosition:"65% center",quality:70,src:"../../../images/busan.jpg",style:{width:"100%"},__imageData:a(5255)}))};const k="Saitama, 1992";var S=function(e){let{ratio:t=1}=e;return c.createElement(h,{target:"left",alt:k,prevAlt:E,distance:2,prevDistance:3,ratio:t},c.createElement(m.S,{alt:k,objectFit:"cover",objectPosition:"right center",quality:70,src:"../../../images/tokyo-left.jpg",style:{width:"100%"},__imageData:a(914)}))};const D="Chicago, 1994";var N=function(e){let{ratio:t=1}=e;return c.createElement(h,{target:"left",alt:D,prevAlt:k,distance:5,prevDistance:2,ratio:t},c.createElement(m.S,{alt:D,objectFit:"cover",objectPosition:"36% center",quality:70,src:"../../../images/chicago.jpg",style:{width:"100%"},__imageData:a(6267)}))};const _="Gwangju, 1995";var z=function(e){let{ratio:t=1}=e;return c.createElement(h,{target:"left",alt:_,prevAlt:D,distance:2,prevDistance:5,ratio:t},c.createElement(m.S,{alt:_,objectFit:"cover",objectPosition:"center center",quality:70,src:"../../../images/gwangju.jpg",style:{width:"100%"},__imageData:a(2141)}))};const C="Calgary, 2001";var A=function(e){let{ratio:t=1}=e;return c.createElement(h,{target:"left",alt:C,prevAlt:_,distance:4,prevDistance:2,ratio:t},c.createElement(m.S,{alt:C,objectFit:"cover",objectPosition:"center center",quality:70,src:"../../../images/calgary.jpg",style:{width:"100%"},__imageData:a(6447)}))};const O="KAIST, 2006";var P=function(e){let{ratio:t=1}=e;return c.createElement(h,{target:"left",alt:O,prevAlt:C,distance:1,prevDistance:4,ratio:t},c.createElement(m.S,{alt:O,objectFit:"cover",objectPosition:"right center",quality:70,src:"../../../images/kaist-left.jpg",style:{width:"100%"},__imageData:a(9778)}))};const F="Helsinki, 2010";var J=function(e){let{ratio:t=1}=e;return c.createElement(h,{target:"left",alt:F,prevAlt:O,distance:5,prevDistance:1,ratio:t},c.createElement(m.S,{alt:F,objectFit:"cover",objectPosition:"center center",quality:70,src:"../../../images/helsinki.jpg",style:{width:"100%"},__imageData:a(5206)}))};const q="Muhanga, 2012";var I=function(e){let{ratio:t=1}=e;return c.createElement(h,{target:"left",alt:q,prevAlt:F,distance:8,prevDistance:5,ratio:t},c.createElement(m.S,{alt:q,objectFit:"cover",objectPosition:"75% center",quality:70,src:"../../../images/muhanga.jpg",style:{width:"100%"},__imageData:a(7598)}))};const L="Kigali, 2014";var R=function(e){let{ratio:t=1}=e;return c.createElement(h,{target:"left",alt:L,prevAlt:q,distance:7,prevDistance:8,ratio:t},c.createElement(m.S,{alt:L,objectFit:"cover",objectPosition:"center center",quality:70,src:"../../../images/kigali.jpg",style:{width:"100%"},__imageData:a(9390)}))};const B="Berlin, 2017";var M=function(e){let{ratio:t=1}=e;return c.createElement(h,{target:"left",alt:B,prevAlt:L,distance:3,prevDistance:7,ratio:t},c.createElement(m.S,{alt:B,objectFit:"cover",objectPosition:"65% center",quality:70,src:"../../../images/berlin.jpg",style:{width:"100%"},__imageData:a(7406)}))};const W="Singapore, 2018";var K=function(e){let{ratio:t=1}=e;return c.createElement(h,{target:"left",alt:W,prevAlt:B,distance:5,prevDistance:3,ratio:t},c.createElement(m.S,{alt:W,objectFit:"cover",objectPosition:"center center",quality:70,src:"../../../images/singapore.jpg",style:{width:"100%"},__imageData:a(2919)}))};const T="Hamburg, 2020";var Z=function(e){let{ratio:t=1}=e;return c.createElement(h,{target:"left",alt:T,prevAlt:W,distance:1,prevDistance:5,ratio:t},c.createElement(m.S,{alt:T,objectFit:"cover",objectPosition:"right center",quality:70,src:"../../../images/hamburg-left.jpg",style:{width:"100%"},__imageData:a(8887)}))};var H=function(){return c.createElement("div",{className:u},c.createElement(y,null),c.createElement(x,null),c.createElement(S,{ratio:1.3}),c.createElement(N,null),c.createElement(z,{ratio:1.3}),c.createElement(A,null),c.createElement(P,null),c.createElement(J,{ratio:1.5}),c.createElement(I,{ratio:1}),c.createElement(R,{ratio:1}),c.createElement(M,{ratio:1}),c.createElement(K,{ratio:1}),c.createElement(Z,null))};const G="Seoul, 1987",V=f.EC;var Y=function(e){let{ratio:t=1}=e;return c.createElement(h,{target:"right",alt:G,prevAlt:"Minjoo's Life Path",distance:V,prevDistance:f.EC,ratio:t},c.createElement(m.S,{alt:G,objectFit:"cover",objectPosition:"left center",quality:70,src:"../../../images/seoul-right.jpg",style:{width:"100%"},__imageData:a(1646)}))};const Q="Tsukuba, 1993";var U=function(e){let{ratio:t=1}=e;return c.createElement(h,{target:"right",alt:Q,prevAlt:G,distance:2,prevDistance:V,ratio:t},c.createElement(m.S,{alt:Q,objectFit:"cover",objectPosition:"left center",quality:70,src:"../../../images/tokyo-right.jpg",style:{width:"100%"},__imageData:a(5481)}))};const X="Bundang, 1995";var $=function(e){let{ratio:t=1}=e;return c.createElement(h,{target:"right",alt:X,prevAlt:Q,distance:1,prevDistance:2,ratio:t},c.createElement(m.S,{alt:X,objectFit:"cover",objectPosition:"center center",quality:70,src:"../../../images/bundang.jpg",style:{width:"100%"},__imageData:a(8406)}))};const ee="Massachusetts, 1996";var te=function(e){let{ratio:t=1}=e;return c.createElement(h,{target:"right",alt:ee,prevAlt:X,distance:4,prevDistance:1,ratio:t},c.createElement(m.S,{alt:ee,objectFit:"cover",objectPosition:"60% center",quality:70,src:"../../../images/massachusetts.jpg",style:{width:"100%"},__imageData:a(1582)}))};const ae="KAIST, 2006";var ce=function(e){let{ratio:t=1}=e;return c.createElement(h,{target:"right",alt:ae,prevAlt:ee,distance:1,prevDistance:4,ratio:t},c.createElement(m.S,{alt:ae,objectFit:"cover",objectPosition:"left center",quality:70,src:"../../../images/kaist-right.jpg",style:{width:"100%"},__imageData:a(4367)}))};const ie="Yokohama, 2009";var ne=function(e){let{ratio:t=1}=e;return c.createElement(h,{target:"right",alt:ie,prevAlt:ae,distance:3,prevDistance:1,ratio:t},c.createElement(m.S,{alt:ie,objectFit:"cover",objectPosition:"center center",quality:70,src:"../../../images/yokohama.jpg",style:{width:"100%"},__imageData:a(3418)}))};const se="Nara, 2010";var re=function(e){let{ratio:t=1}=e;return c.createElement(h,{target:"right",alt:se,prevAlt:ie,distance:4,prevDistance:3,ratio:t},c.createElement(m.S,{alt:se,objectFit:"cover",objectPosition:"44% center",quality:70,src:"../../../images/nara.jpg",style:{width:"100%"},__imageData:a(244)}))};const oe="Songpa, 2017";var be=function(e){let{ratio:t=1}=e;return c.createElement(h,{target:"right",alt:oe,prevAlt:se,distance:2,prevDistance:4,ratio:t},c.createElement(m.S,{alt:oe,objectFit:"cover",objectPosition:"44% center",quality:70,src:"../../../images/songpa.jpg",style:{width:"100%"},__imageData:a(2311)}))};const fe="Hamburg, 2017";var le=function(e){let{ratio:t=1}=e;return c.createElement(h,{target:"right",alt:fe,prevAlt:oe,distance:1,prevDistance:2,ratio:t},c.createElement(m.S,{alt:fe,objectFit:"cover",objectPosition:"left center",quality:70,src:"../../../images/hamburg-right.jpg",style:{width:"100%"},__imageData:a(1809)}))};var de=function(){const{0:e,1:t}=(0,c.useState)(),{0:i,1:n}=(0,c.useState)(),{0:s,1:r}=(0,c.useState)(),o=(0,c.useCallback)((e=>{e&&t(e)}),[]),b=(0,c.useCallback)((e=>{e&&n(e)}),[]),l=(0,c.useCallback)((e=>{e&&r(e)}),[]),{currentEntry:d}=g(e),{currentEntry:p}=g(i),{currentEntry:u}=g(s),{setAltLeft:h,setAltRight:v,setCaptionEntered:j,setCaptionPosition:y,setDistanceLeft:E,setDistanceRight:x,setFinalProgress:k,setFinalReveal:S}=(0,c.useContext)(f.pI);return(0,c.useLayoutEffect)((()=>{if(!d)return;const{isIntersecting:e,intersectionRatio:t,boundingClientRect:a}=d;e?a.y>0&&(h(t>.5?"LONDON":T),v(t>.5?"2021":fe),y(t),E(-2*t+1),x(-2*t+1),j(!0)):a.y<0?(h("LONDON"),v("2021"),y(1)):y(0)}),[d,h,v,j,y,E,x,k]),(0,c.useLayoutEffect)((()=>{if(!p)return;const{isIntersecting:e,intersectionRatio:t,boundingClientRect:a}=p;e&&(y(1),a.y>0&&k(t))}),[p,h,v,y,k]),(0,c.useLayoutEffect)((()=>{if(!u)return;const{isIntersecting:e,intersectionRatio:t,boundingClientRect:a}=u;e?(k(1),a.y>0&&(j(!1),S(t))):a.y<0?S(1):S(0)}),[u,h,v,j,k,S]),c.createElement("section",{className:"style-module--london--868da"},c.createElement("aside",{className:w,ref:o}),c.createElement("aside",{className:w,ref:b}),c.createElement("aside",{className:w,ref:l}),c.createElement("div",{className:"style-module--londonIntersection--09992"},c.createElement(m.S,{alt:"London",objectFit:"cover",objectPosition:"center center",quality:70,src:"../../images/london.jpg",style:{width:"100%"},__imageData:a(6293)})))};var pe=function(){return c.createElement("div",{className:u},c.createElement(Y,{ratio:2.3}),c.createElement(U,{ratio:1.3}),c.createElement($,{ratio:1.5}),c.createElement(te,{ratio:1.5}),c.createElement(ce,{ratio:1.1}),c.createElement(ne,{ratio:1.1}),c.createElement(re,{ratio:1.2}),c.createElement(be,null),c.createElement(le,null))};var ge=function(){const{setFinalProgress:e}=(0,c.useContext)(f.pI),{0:t,1:a}=(0,c.useState)(),i=(0,c.useCallback)((e=>{e&&a(e)}),[]),{currentEntry:n}=g(t);return(0,c.useLayoutEffect)((()=>{if(!n)return;const{isIntersecting:t}=n;t&&e(0)}),[n,e]),c.createElement(c.Fragment,null,c.createElement("div",{className:"style-module--wrap--d8e38",ref:i},c.createElement(H,null),c.createElement(pe,null)),c.createElement(de,null))},ue=a(514);var we=function(){const{setCaptionEntered:e}=(0,c.useContext)(f.pI),t=(0,c.useRef)(null),i=(0,c.useRef)(null);return(0,c.useEffect)((()=>(i.current=new IntersectionObserver((t=>{let[a]=t;const{isIntersecting:c}=a;e(!c)}),{threshold:.5}),i.current.observe(t.current),()=>{var e;null===(e=i.current)||void 0===e||e.disconnect()})),[e]),c.createElement("div",{className:ue.rP,ref:t},c.createElement("h1",{className:ue.TN},"Da-Woon & Minjoo"),c.createElement("h2",{className:ue.Oc},"Wedding"),c.createElement(m.S,{src:"../../images/front.jpg",alt:r.w,className:ue.BH,__imageData:a(8116)}),c.createElement("div",{className:ue.ue},c.createElement("i",{className:ue._y})))},me=a(817);var he=function(){return c.createElement(p,{options:{threshold:new Array(101).fill(0).map(((e,t)=>t/100))}},c.createElement(f.ZP,null,c.createElement("header",{className:me.F},c.createElement(r.Z,null),c.createElement(l,null),c.createElement(we,null),c.createElement(ge,null))))},ve=a(5604),je=a(2988);const ye={kakao:"카카오톡",line:"라인",other:"인 앱"};var Ee=function(){const{0:e,1:t}=(0,c.useState)("other");return(0,c.useLayoutEffect)((()=>{navigator.userAgent.match(/KAKAOTALK/i)?t("kakao"):navigator.userAgent.match(/Line/i)?t("line"):t("other")}),[]),c.createElement("aside",{className:"style-module--warning--f31ee"},ye[e]," 브라우저에서는 웹사이트가 정상적으로 보이지 않을 수 있습니다.")},xe=a(1804);var ke=function(){const{0:e,1:t}=(0,c.useState)(!1);return(0,c.useLayoutEffect)((()=>{navigator.userAgent.match(/inapp|NAVER|KAKAOTALK|Snapchat|Line|WirtschaftsWoche|Thunderbird|Instagram|everytimeApp|WhatsApp|Electron|wadiz|AliApp|zumapp|iPhone(.*)Whale|Android(.*)Whale|kakaostory|band|twitter|DaumApps|DaumDevice\/mobile|FB_IAB|FB4A|FBAN|FBIOS|FBSS|SamsungBrowser\/[^1]/i)&&(t(!0),navigator.userAgent.match(/iPhone|iPad/i)||(window.location.href="intent://"+window.location.href.replace(/https?:\/\//i,"")+"#Intent;scheme=http;package=com.android.chrome;end"))}),[]),c.createElement("div",{className:xe.J},e&&c.createElement(Ee,null),c.createElement(he,null),c.createElement(ve.Z,null),c.createElement(i.Z,null),c.createElement(n.Z,null),c.createElement(je.Z,null),c.createElement(s.Z,null))};function Se(){return c.createElement(c.Fragment,null,c.createElement("meta",{name:"viewport",content:"width=device-width"}),c.createElement("meta",{name:"robots",content:"noindex, follow"}),c.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),c.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),c.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Great+Vibes&family=Nanum+Gothic:wght@400;700&family=Noto+Sans:wght@400;600&display=swap",rel:"stylesheet"}),c.createElement("title",null,"Minjoo & Da-Woon"))}},914:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/096ec4ebe1116f2bbfbfc67655ef92d1/b010a/tokyo-left.jpg","srcSet":"/static/096ec4ebe1116f2bbfbfc67655ef92d1/be0b1/tokyo-left.jpg 150w,\\n/static/096ec4ebe1116f2bbfbfc67655ef92d1/7b2ec/tokyo-left.jpg 300w,\\n/static/096ec4ebe1116f2bbfbfc67655ef92d1/b010a/tokyo-left.jpg 600w","sizes":"(min-width: 600px) 600px, 100vw"},"sources":[{"srcSet":"/static/096ec4ebe1116f2bbfbfc67655ef92d1/1f3f9/tokyo-left.webp 150w,\\n/static/096ec4ebe1116f2bbfbfc67655ef92d1/941a0/tokyo-left.webp 300w,\\n/static/096ec4ebe1116f2bbfbfc67655ef92d1/35a3d/tokyo-left.webp 600w","type":"image/webp","sizes":"(min-width: 600px) 600px, 100vw"}]},"width":600,"height":800}')},9390:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#5888b8","images":{"fallback":{"src":"/static/34062318405ecd77bb723dfba86f1731/47b35/kigali.jpg","srcSet":"/static/34062318405ecd77bb723dfba86f1731/d0506/kigali.jpg 640w,\\n/static/34062318405ecd77bb723dfba86f1731/51b97/kigali.jpg 1280w,\\n/static/34062318405ecd77bb723dfba86f1731/47b35/kigali.jpg 2560w","sizes":"(min-width: 2560px) 2560px, 100vw"},"sources":[{"srcSet":"/static/34062318405ecd77bb723dfba86f1731/e1b5b/kigali.webp 640w,\\n/static/34062318405ecd77bb723dfba86f1731/940f6/kigali.webp 1280w,\\n/static/34062318405ecd77bb723dfba86f1731/60c4c/kigali.webp 2560w","type":"image/webp","sizes":"(min-width: 2560px) 2560px, 100vw"}]},"width":2560,"height":1707}')},9778:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#a8a8a8","images":{"fallback":{"src":"/static/f2ea6306a0f28d5b4240156e4dba71c2/9601a/kaist-left.jpg","srcSet":"/static/f2ea6306a0f28d5b4240156e4dba71c2/a041d/kaist-left.jpg 121w,\\n/static/f2ea6306a0f28d5b4240156e4dba71c2/f78b5/kaist-left.jpg 243w,\\n/static/f2ea6306a0f28d5b4240156e4dba71c2/9601a/kaist-left.jpg 485w","sizes":"(min-width: 485px) 485px, 100vw"},"sources":[{"srcSet":"/static/f2ea6306a0f28d5b4240156e4dba71c2/a90b5/kaist-left.webp 121w,\\n/static/f2ea6306a0f28d5b4240156e4dba71c2/6372e/kaist-left.webp 243w,\\n/static/f2ea6306a0f28d5b4240156e4dba71c2/57938/kaist-left.webp 485w","type":"image/webp","sizes":"(min-width: 485px) 485px, 100vw"}]},"width":485,"height":644}')},1582:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#0888d8","images":{"fallback":{"src":"/static/d6f26eea5a609aeee42e5106ba2b033d/0d4d9/massachusetts.jpg","srcSet":"/static/d6f26eea5a609aeee42e5106ba2b033d/17c8b/massachusetts.jpg 320w,\\n/static/d6f26eea5a609aeee42e5106ba2b033d/24398/massachusetts.jpg 640w,\\n/static/d6f26eea5a609aeee42e5106ba2b033d/0d4d9/massachusetts.jpg 1280w","sizes":"(min-width: 1280px) 1280px, 100vw"},"sources":[{"srcSet":"/static/d6f26eea5a609aeee42e5106ba2b033d/60c8f/massachusetts.webp 320w,\\n/static/d6f26eea5a609aeee42e5106ba2b033d/8190b/massachusetts.webp 640w,\\n/static/d6f26eea5a609aeee42e5106ba2b033d/2aeb6/massachusetts.webp 1280w","type":"image/webp","sizes":"(min-width: 1280px) 1280px, 100vw"}]},"width":1280,"height":700}')},8406:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#d8e8f8","images":{"fallback":{"src":"/static/e8bd0497078c561d62c6d51f57550cb1/db01e/bundang.jpg","srcSet":"/static/e8bd0497078c561d62c6d51f57550cb1/09d64/bundang.jpg 320w,\\n/static/e8bd0497078c561d62c6d51f57550cb1/c7b9b/bundang.jpg 640w,\\n/static/e8bd0497078c561d62c6d51f57550cb1/db01e/bundang.jpg 1280w","sizes":"(min-width: 1280px) 1280px, 100vw"},"sources":[{"srcSet":"/static/e8bd0497078c561d62c6d51f57550cb1/c7aba/bundang.webp 320w,\\n/static/e8bd0497078c561d62c6d51f57550cb1/302ae/bundang.webp 640w,\\n/static/e8bd0497078c561d62c6d51f57550cb1/de923/bundang.webp 1280w","type":"image/webp","sizes":"(min-width: 1280px) 1280px, 100vw"}]},"width":1280,"height":851}')},5255:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#182838","images":{"fallback":{"src":"/static/5967d0d90847571f95151ab2fdb171e7/59894/busan.jpg","srcSet":"/static/5967d0d90847571f95151ab2fdb171e7/7e9c5/busan.jpg 480w,\\n/static/5967d0d90847571f95151ab2fdb171e7/4c8c3/busan.jpg 960w,\\n/static/5967d0d90847571f95151ab2fdb171e7/59894/busan.jpg 1920w","sizes":"(min-width: 1920px) 1920px, 100vw"},"sources":[{"srcSet":"/static/5967d0d90847571f95151ab2fdb171e7/b2f57/busan.webp 480w,\\n/static/5967d0d90847571f95151ab2fdb171e7/815c9/busan.webp 960w,\\n/static/5967d0d90847571f95151ab2fdb171e7/9e479/busan.webp 1920w","type":"image/webp","sizes":"(min-width: 1920px) 1920px, 100vw"}]},"width":1920,"height":1080}')},6293:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#7898c8","images":{"fallback":{"src":"/static/e9a04c3c9d9da350b2a75fe7adb6ee02/98262/london.jpg","srcSet":"/static/e9a04c3c9d9da350b2a75fe7adb6ee02/93fbb/london.jpg 480w,\\n/static/e9a04c3c9d9da350b2a75fe7adb6ee02/63a6e/london.jpg 960w,\\n/static/e9a04c3c9d9da350b2a75fe7adb6ee02/98262/london.jpg 1920w","sizes":"(min-width: 1920px) 1920px, 100vw"},"sources":[{"srcSet":"/static/e9a04c3c9d9da350b2a75fe7adb6ee02/2acd1/london.webp 480w,\\n/static/e9a04c3c9d9da350b2a75fe7adb6ee02/b4c2b/london.webp 960w,\\n/static/e9a04c3c9d9da350b2a75fe7adb6ee02/827b6/london.webp 1920w","type":"image/webp","sizes":"(min-width: 1920px) 1920px, 100vw"}]},"width":1920,"height":1280}')},5206:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8d8e8","images":{"fallback":{"src":"/static/8024102739daf3a3ab8dfac759f47aa9/2644e/helsinki.jpg","srcSet":"/static/8024102739daf3a3ab8dfac759f47aa9/0d381/helsinki.jpg 640w,\\n/static/8024102739daf3a3ab8dfac759f47aa9/f9bee/helsinki.jpg 1280w,\\n/static/8024102739daf3a3ab8dfac759f47aa9/2644e/helsinki.jpg 2560w","sizes":"(min-width: 2560px) 2560px, 100vw"},"sources":[{"srcSet":"/static/8024102739daf3a3ab8dfac759f47aa9/5762e/helsinki.webp 640w,\\n/static/8024102739daf3a3ab8dfac759f47aa9/eae7f/helsinki.webp 1280w,\\n/static/8024102739daf3a3ab8dfac759f47aa9/d51be/helsinki.webp 2560w","type":"image/webp","sizes":"(min-width: 2560px) 2560px, 100vw"}]},"width":2560,"height":1440}')},2141:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/3f9773c3e9af840817737880e400248c/590d2/gwangju.jpg","srcSet":"/static/3f9773c3e9af840817737880e400248c/3bfe0/gwangju.jpg 240w,\\n/static/3f9773c3e9af840817737880e400248c/7ce87/gwangju.jpg 480w,\\n/static/3f9773c3e9af840817737880e400248c/590d2/gwangju.jpg 960w","sizes":"(min-width: 960px) 960px, 100vw"},"sources":[{"srcSet":"/static/3f9773c3e9af840817737880e400248c/5eaec/gwangju.webp 240w,\\n/static/3f9773c3e9af840817737880e400248c/a0226/gwangju.webp 480w,\\n/static/3f9773c3e9af840817737880e400248c/bbfbb/gwangju.webp 960w","type":"image/webp","sizes":"(min-width: 960px) 960px, 100vw"}]},"width":960,"height":638}')},8887:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#3858a8","images":{"fallback":{"src":"/static/324280ec6c3d7ad29c9160c26d2145f3/f6210/hamburg-left.jpg","srcSet":"/static/324280ec6c3d7ad29c9160c26d2145f3/45f6e/hamburg-left.jpg 200w,\\n/static/324280ec6c3d7ad29c9160c26d2145f3/5fca3/hamburg-left.jpg 400w,\\n/static/324280ec6c3d7ad29c9160c26d2145f3/f6210/hamburg-left.jpg 800w","sizes":"(min-width: 800px) 800px, 100vw"},"sources":[{"srcSet":"/static/324280ec6c3d7ad29c9160c26d2145f3/48b5c/hamburg-left.webp 200w,\\n/static/324280ec6c3d7ad29c9160c26d2145f3/6840d/hamburg-left.webp 400w,\\n/static/324280ec6c3d7ad29c9160c26d2145f3/8805d/hamburg-left.webp 800w","type":"image/webp","sizes":"(min-width: 800px) 800px, 100vw"}]},"width":800,"height":1066}')},4367:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#889898","images":{"fallback":{"src":"/static/5645aa2fe24409f51e512f8badf198bc/9601a/kaist-right.jpg","srcSet":"/static/5645aa2fe24409f51e512f8badf198bc/a041d/kaist-right.jpg 121w,\\n/static/5645aa2fe24409f51e512f8badf198bc/f78b5/kaist-right.jpg 243w,\\n/static/5645aa2fe24409f51e512f8badf198bc/9601a/kaist-right.jpg 485w","sizes":"(min-width: 485px) 485px, 100vw"},"sources":[{"srcSet":"/static/5645aa2fe24409f51e512f8badf198bc/a90b5/kaist-right.webp 121w,\\n/static/5645aa2fe24409f51e512f8badf198bc/6372e/kaist-right.webp 243w,\\n/static/5645aa2fe24409f51e512f8badf198bc/57938/kaist-right.webp 485w","type":"image/webp","sizes":"(min-width: 485px) 485px, 100vw"}]},"width":485,"height":644}')},2919:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/2d043ba6c94ab0000a819d3e9fbc12c7/84f6b/singapore.jpg","srcSet":"/static/2d043ba6c94ab0000a819d3e9fbc12c7/f0148/singapore.jpg 1545w,\\n/static/2d043ba6c94ab0000a819d3e9fbc12c7/dded9/singapore.jpg 3089w,\\n/static/2d043ba6c94ab0000a819d3e9fbc12c7/84f6b/singapore.jpg 6178w","sizes":"(min-width: 6178px) 6178px, 100vw"},"sources":[{"srcSet":"/static/2d043ba6c94ab0000a819d3e9fbc12c7/a6f49/singapore.webp 1545w,\\n/static/2d043ba6c94ab0000a819d3e9fbc12c7/7c37e/singapore.webp 3089w,\\n/static/2d043ba6c94ab0000a819d3e9fbc12c7/f329b/singapore.webp 6178w","type":"image/webp","sizes":"(min-width: 6178px) 6178px, 100vw"}]},"width":6178,"height":7723}')},1646:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#584888","images":{"fallback":{"src":"/static/e2f831e8e0286d0df7f4d94e17c665f8/499a6/seoul-right.jpg","srcSet":"/static/e2f831e8e0286d0df7f4d94e17c665f8/28d2a/seoul-right.jpg 150w,\\n/static/e2f831e8e0286d0df7f4d94e17c665f8/466ad/seoul-right.jpg 300w,\\n/static/e2f831e8e0286d0df7f4d94e17c665f8/499a6/seoul-right.jpg 600w","sizes":"(min-width: 600px) 600px, 100vw"},"sources":[{"srcSet":"/static/e2f831e8e0286d0df7f4d94e17c665f8/e157a/seoul-right.webp 150w,\\n/static/e2f831e8e0286d0df7f4d94e17c665f8/92f46/seoul-right.webp 300w,\\n/static/e2f831e8e0286d0df7f4d94e17c665f8/fe963/seoul-right.webp 600w","type":"image/webp","sizes":"(min-width: 600px) 600px, 100vw"}]},"width":600,"height":676}')},6267:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#5878b8","images":{"fallback":{"src":"/static/fa7e9f3ba2e7a2e076ba4efa0fe77469/3b369/chicago.jpg","srcSet":"/static/fa7e9f3ba2e7a2e076ba4efa0fe77469/95243/chicago.jpg 300w,\\n/static/fa7e9f3ba2e7a2e076ba4efa0fe77469/bbb9b/chicago.jpg 600w,\\n/static/fa7e9f3ba2e7a2e076ba4efa0fe77469/3b369/chicago.jpg 1200w","sizes":"(min-width: 1200px) 1200px, 100vw"},"sources":[{"srcSet":"/static/fa7e9f3ba2e7a2e076ba4efa0fe77469/f5e19/chicago.webp 300w,\\n/static/fa7e9f3ba2e7a2e076ba4efa0fe77469/c8f85/chicago.webp 600w,\\n/static/fa7e9f3ba2e7a2e076ba4efa0fe77469/15905/chicago.webp 1200w","type":"image/webp","sizes":"(min-width: 1200px) 1200px, 100vw"}]},"width":1200,"height":675}')},244:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8b8b8","images":{"fallback":{"src":"/static/2b0bf40924c157f8c2a67510a53b780d/4c962/nara.jpg","srcSet":"/static/2b0bf40924c157f8c2a67510a53b780d/a55b9/nara.jpg 314w,\\n/static/2b0bf40924c157f8c2a67510a53b780d/ec8b7/nara.jpg 627w,\\n/static/2b0bf40924c157f8c2a67510a53b780d/4c962/nara.jpg 1254w","sizes":"(min-width: 1254px) 1254px, 100vw"},"sources":[{"srcSet":"/static/2b0bf40924c157f8c2a67510a53b780d/56523/nara.webp 314w,\\n/static/2b0bf40924c157f8c2a67510a53b780d/47810/nara.webp 627w,\\n/static/2b0bf40924c157f8c2a67510a53b780d/ed7d5/nara.webp 1254w","type":"image/webp","sizes":"(min-width: 1254px) 1254px, 100vw"}]},"width":1254,"height":836}')},7406:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#88a8c8","images":{"fallback":{"src":"/static/08b204f7d6926e2f4bd4d5b5d226a89f/f3a9b/berlin.jpg","srcSet":"/static/08b204f7d6926e2f4bd4d5b5d226a89f/71705/berlin.jpg 620w,\\n/static/08b204f7d6926e2f4bd4d5b5d226a89f/69b50/berlin.jpg 1240w,\\n/static/08b204f7d6926e2f4bd4d5b5d226a89f/f3a9b/berlin.jpg 2480w","sizes":"(min-width: 2480px) 2480px, 100vw"},"sources":[{"srcSet":"/static/08b204f7d6926e2f4bd4d5b5d226a89f/e4c09/berlin.webp 620w,\\n/static/08b204f7d6926e2f4bd4d5b5d226a89f/8308f/berlin.webp 1240w,\\n/static/08b204f7d6926e2f4bd4d5b5d226a89f/f4664/berlin.webp 2480w","type":"image/webp","sizes":"(min-width: 2480px) 2480px, 100vw"}]},"width":2480,"height":1034}')},3418:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#282828","images":{"fallback":{"src":"/static/37b05e18413a42d24ef2fa50b0b06567/060e3/yokohama.jpg","srcSet":"/static/37b05e18413a42d24ef2fa50b0b06567/6e896/yokohama.jpg 360w,\\n/static/37b05e18413a42d24ef2fa50b0b06567/30ad8/yokohama.jpg 720w,\\n/static/37b05e18413a42d24ef2fa50b0b06567/060e3/yokohama.jpg 1440w","sizes":"(min-width: 1440px) 1440px, 100vw"},"sources":[{"srcSet":"/static/37b05e18413a42d24ef2fa50b0b06567/1eccb/yokohama.webp 360w,\\n/static/37b05e18413a42d24ef2fa50b0b06567/6e6a4/yokohama.webp 720w,\\n/static/37b05e18413a42d24ef2fa50b0b06567/a67da/yokohama.webp 1440w","type":"image/webp","sizes":"(min-width: 1440px) 1440px, 100vw"}]},"width":1440,"height":960}')},2311:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/5a135d473ab4123486e1ef75213f736a/862d2/songpa.jpg","srcSet":"/static/5a135d473ab4123486e1ef75213f736a/ac769/songpa.jpg 256w,\\n/static/5a135d473ab4123486e1ef75213f736a/0e233/songpa.jpg 512w,\\n/static/5a135d473ab4123486e1ef75213f736a/862d2/songpa.jpg 1024w","sizes":"(min-width: 1024px) 1024px, 100vw"},"sources":[{"srcSet":"/static/5a135d473ab4123486e1ef75213f736a/053d8/songpa.webp 256w,\\n/static/5a135d473ab4123486e1ef75213f736a/93623/songpa.webp 512w,\\n/static/5a135d473ab4123486e1ef75213f736a/41185/songpa.webp 1024w","type":"image/webp","sizes":"(min-width: 1024px) 1024px, 100vw"}]},"width":1024,"height":683}')},8116:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#282828","images":{"fallback":{"src":"/static/b69ea219fd81aea3be54666c952b5efd/142ab/front.jpg","srcSet":"/static/b69ea219fd81aea3be54666c952b5efd/3f2ba/front.jpg 1548w,\\n/static/b69ea219fd81aea3be54666c952b5efd/50269/front.jpg 3096w,\\n/static/b69ea219fd81aea3be54666c952b5efd/142ab/front.jpg 6192w","sizes":"(min-width: 6192px) 6192px, 100vw"},"sources":[{"srcSet":"/static/b69ea219fd81aea3be54666c952b5efd/a80a2/front.webp 1548w,\\n/static/b69ea219fd81aea3be54666c952b5efd/336ff/front.webp 3096w,\\n/static/b69ea219fd81aea3be54666c952b5efd/d8c81/front.webp 6192w","type":"image/webp","sizes":"(min-width: 6192px) 6192px, 100vw"}]},"width":6192,"height":4128}')},5481:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/bbae5f2b2e9ad7418762a99355cfa8d8/b010a/tokyo-right.jpg","srcSet":"/static/bbae5f2b2e9ad7418762a99355cfa8d8/be0b1/tokyo-right.jpg 150w,\\n/static/bbae5f2b2e9ad7418762a99355cfa8d8/7b2ec/tokyo-right.jpg 300w,\\n/static/bbae5f2b2e9ad7418762a99355cfa8d8/b010a/tokyo-right.jpg 600w","sizes":"(min-width: 600px) 600px, 100vw"},"sources":[{"srcSet":"/static/bbae5f2b2e9ad7418762a99355cfa8d8/1f3f9/tokyo-right.webp 150w,\\n/static/bbae5f2b2e9ad7418762a99355cfa8d8/941a0/tokyo-right.webp 300w,\\n/static/bbae5f2b2e9ad7418762a99355cfa8d8/35a3d/tokyo-right.webp 600w","type":"image/webp","sizes":"(min-width: 600px) 600px, 100vw"}]},"width":600,"height":800}')},6447:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#78b8d8","images":{"fallback":{"src":"/static/dfedc57345e792d1517a916ad0bc2b1f/64606/calgary.jpg","srcSet":"/static/dfedc57345e792d1517a916ad0bc2b1f/ca4a8/calgary.jpg 300w,\\n/static/dfedc57345e792d1517a916ad0bc2b1f/10580/calgary.jpg 600w,\\n/static/dfedc57345e792d1517a916ad0bc2b1f/64606/calgary.jpg 1200w","sizes":"(min-width: 1200px) 1200px, 100vw"},"sources":[{"srcSet":"/static/dfedc57345e792d1517a916ad0bc2b1f/2177e/calgary.webp 300w,\\n/static/dfedc57345e792d1517a916ad0bc2b1f/60611/calgary.webp 600w,\\n/static/dfedc57345e792d1517a916ad0bc2b1f/ff8c4/calgary.webp 1200w","type":"image/webp","sizes":"(min-width: 1200px) 1200px, 100vw"}]},"width":1200,"height":800}')},1462:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#584888","images":{"fallback":{"src":"/static/4aec6719093000f50d3bf2bb38b02572/499a6/seoul-left.jpg","srcSet":"/static/4aec6719093000f50d3bf2bb38b02572/28d2a/seoul-left.jpg 150w,\\n/static/4aec6719093000f50d3bf2bb38b02572/466ad/seoul-left.jpg 300w,\\n/static/4aec6719093000f50d3bf2bb38b02572/499a6/seoul-left.jpg 600w","sizes":"(min-width: 600px) 600px, 100vw"},"sources":[{"srcSet":"/static/4aec6719093000f50d3bf2bb38b02572/e157a/seoul-left.webp 150w,\\n/static/4aec6719093000f50d3bf2bb38b02572/92f46/seoul-left.webp 300w,\\n/static/4aec6719093000f50d3bf2bb38b02572/fe963/seoul-left.webp 600w","type":"image/webp","sizes":"(min-width: 600px) 600px, 100vw"}]},"width":600,"height":676}')},1809:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#4868b8","images":{"fallback":{"src":"/static/2075b9ffcf1e1e9900b5d2463839dcee/f6210/hamburg-right.jpg","srcSet":"/static/2075b9ffcf1e1e9900b5d2463839dcee/45f6e/hamburg-right.jpg 200w,\\n/static/2075b9ffcf1e1e9900b5d2463839dcee/5fca3/hamburg-right.jpg 400w,\\n/static/2075b9ffcf1e1e9900b5d2463839dcee/f6210/hamburg-right.jpg 800w","sizes":"(min-width: 800px) 800px, 100vw"},"sources":[{"srcSet":"/static/2075b9ffcf1e1e9900b5d2463839dcee/48b5c/hamburg-right.webp 200w,\\n/static/2075b9ffcf1e1e9900b5d2463839dcee/6840d/hamburg-right.webp 400w,\\n/static/2075b9ffcf1e1e9900b5d2463839dcee/8805d/hamburg-right.webp 800w","type":"image/webp","sizes":"(min-width: 800px) 800px, 100vw"}]},"width":800,"height":1066}')},7598:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#d8d8e8","images":{"fallback":{"src":"/static/32d41f3c1cf7834bb37b8aac500919fd/dff8d/muhanga.jpg","srcSet":"/static/32d41f3c1cf7834bb37b8aac500919fd/1dbbb/muhanga.jpg 212w,\\n/static/32d41f3c1cf7834bb37b8aac500919fd/1feac/muhanga.jpg 424w,\\n/static/32d41f3c1cf7834bb37b8aac500919fd/dff8d/muhanga.jpg 847w","sizes":"(min-width: 847px) 847px, 100vw"},"sources":[{"srcSet":"/static/32d41f3c1cf7834bb37b8aac500919fd/2893d/muhanga.webp 212w,\\n/static/32d41f3c1cf7834bb37b8aac500919fd/778c6/muhanga.webp 424w,\\n/static/32d41f3c1cf7834bb37b8aac500919fd/d8cde/muhanga.webp 847w","type":"image/webp","sizes":"(min-width: 847px) 847px, 100vw"}]},"width":847,"height":491}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-bac2a10606f9aae711c3.js.map