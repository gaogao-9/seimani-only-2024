(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[486],{6132:function(n,e,t){Promise.resolve().then(t.bind(t,472))},472:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return a}});var r=t(7437),i=t(2331);function a(n){let{children:e}=n;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.t,{children:e})})}},2331:function(n,e,t){"use strict";t.d(e,{t:function(){return $}});var r=t(7437),i=t(8646),a=t(8493),o=t(5443),l=t(4340),s=t(1493),c=t(61),u=t(2265),d=t(7138),h=t(6463),f=t(9651),x=t(739);let p=n=>null!=document.startViewTransition?document.startViewTransition(n):(n(),null),m=n=>e=>t=>{t.preventDefault();let r=window.location.href,i=t.target.closest("a").href;r!==i&&(window.sessionStorage.setItem("navigationStatus","navigationStart"),p(async()=>{null==e||e(),window.sessionStorage.setItem("navigationStatus","navigating"),n(i),await Promise.race([new Promise(n=>{let e=()=>{"navigationEnd"===window.sessionStorage.getItem("navigationStatus")?n():setTimeout(e,10)};e()}),new Promise(n=>{setTimeout(n,5e3)})])}))};function g(){let n=(0,i._)(["\n  min-height: 100%;\n"]);return g=function(){return n},n}function v(){let n=(0,i._)(["\n  overflow: auto;\n  list-style: none;\n"]);return v=function(){return n},n}function j(){let n=(0,i._)([""]);return j=function(){return n},n}function w(){let n=(0,i._)(['\n  position: relative;\n  padding: 3px 5px;\n  font-size: var(--chakra-fontSizes-lg);\n  text-decoration: none;\n  color: var(--chakra-colors-orange-400);\n  font-family: "Kaisei Opti", cursive;\n\n  &::after {\n    position: absolute;\n    bottom: -1px;\n    left: 50%;\n    content: "";\n    width: calc(100% - 10px);\n    height: 1px;\n    background: var(--chakra-colors-orange-400);\n    transform: translateX(calc(-50% + 2.5px)) scaleX(0);\n    transform-origin: center top;\n    transition: transform 0.3s;\n  }\n\n  &:hover::after,\n  &[data-selected]::after {\n    transform: translateX(calc(-50% + 2.5px)) scaleX(1);\n  }\n\n  &[aria-disabled] {\n    pointer-events: none;\n    font-weight: 600;\n\n    &::after {\n      transform: translateX(calc(-50% + 2.5px)) scaleX(1);\n    }\n  }\n']);return w=function(){return n},n}let b=a.Z.div(g()),k=a.Z.ul(v()),_=a.Z.li(j()),y=a.Z.span(w()),Z=()=>{let[n,e]=(0,u.useState)(null),t=(0,h.useRouter)(),i=(0,u.useMemo)(()=>m(t.push),[t.push]),a=(0,u.useMemo)(()=>i(),[i]);return(0,u.useEffect)(()=>{e(window.location.pathname)},[]),(0,r.jsx)(b,{children:(0,r.jsx)(k,{children:x._.map(e=>{let t=e.pathname===n;return(0,r.jsx)(_,{children:(0,r.jsx)(f.M,{my:4,as:"span",children:t?(0,r.jsx)(y,{"data-selected":!0,children:(0,r.jsx)("span",{children:e.title})}):(0,r.jsx)(d.default,{href:e.pathname,onClick:"top"!==e.name?a:void 0,children:(0,r.jsx)(y,{children:(0,r.jsx)("span",{className:"menuHeaderTransition ".concat(e.name),children:e.title})})})})},e.title)})})})};var S=t(6206),z=t(8978),C=t(4862),X=t(6493),E=t(5222),T=t(408);let N=n=>{let{children:e,...t}=n;return(0,r.jsxs)(S.d,{...t,children:[(0,r.jsx)(z.Z,{}),(0,r.jsxs)(C.s,{children:[(0,r.jsx)(X.o,{}),(0,r.jsx)(E.x,{}),(0,r.jsx)(T.f,{p:0,children:e})]})]})};var O=t(7499);function P(){let n=(0,i._)(["\n  height: 60px;\n  background-color: var(--chakra-colors-yellow-700);\n  overflow: hidden;\n"]);return P=function(){return n},n}function I(){let n=(0,i._)(["\n  display: flex;\n  flex-wrap: wrap;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n"]);return I=function(){return n},n}function M(){let n=(0,i._)(["\n  margin: 0 0.2em;\n  white-space: nowrap;\n"]);return M=function(){return n},n}let A=a.Z.div(P()),F=a.Z.div(I()),V=a.Z.span(M()),q=n=>(0,r.jsx)(A,{...n,children:(0,r.jsxs)(F,{children:[(0,r.jsx)(V,{children:(0,r.jsx)(O.x,{fontSize:"xs",color:"orange.50",children:"政剣マニフェスティアオンリーイベント"})}),(0,r.jsx)(V,{children:(0,r.jsx)(O.x,{fontSize:"xs",color:"orange.50",children:"戦挙管理委員会"})})]})});function D(){let n=(0,i._)(['\n  display: grid;\n  grid-template: "contents menu  " 1fr / 1fr auto;\n  width: 100%;\n  height: 100vh;\n  height: 100dvh;\n  isolation: isolate;\n']);return D=function(){return n},n}function H(){let n=(0,i._)(["\n  grid-area: ",";\n  ",";\n  overflow-x: hidden;\n  isolation: isolate;\n"]);return H=function(){return n},n}let K=a.Z.div(D()),R=a.Z.div(H(),n=>{let{gridArea:e}=n;return e},n=>{let{overflow:e}=n;return e&&"overflow: ".concat(e,";")}),U=n=>{let{children:e,...t}=n,{isOpen:i,onOpen:a,onClose:u}=(0,o.q)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(K,{...t,children:[(0,r.jsxs)(R,{gridArea:"contents","overflow-y":"visible",children:[(0,r.jsx)(l.xu,{isolation:"isolate",children:e}),(0,r.jsx)(l.xu,{isolation:"isolate",children:(0,r.jsx)(q,{})})]}),(0,r.jsxs)(R,{gridArea:"menu","overflow-y":"auto",style:{backgroundColor:"var(--chakra-colors-white-full)"},children:[(0,r.jsx)(l.xu,{display:{base:"none",lg:"block"},w:"200px",h:"100%",pt:6,overflowY:"auto",children:(0,r.jsx)(Z,{})}),(0,r.jsx)(l.xu,{display:{base:"block",lg:"none"},children:(0,r.jsx)(N,{size:"xs",isOpen:i,onClose:u,children:(0,r.jsx)(Z,{})})})]})]}),(0,r.jsx)(l.xu,{display:{base:"block",lg:"none"},position:"absolute",top:"5px",right:"20px",children:(0,r.jsx)(s.h,{"aria-label":"ページ内リンクメニューを表示",icon:(0,r.jsx)(c.U,{color:"gray.700"}),onClick:a})})]})};function Y(){let n=(0,i._)(["\n  position: relative;\n  min-height: calc(100vh - 60px);\n  min-height: calc(100dvh - 60px);\n  background-color: var(--chakra-colors-white-full);\n  background-image: linear-gradient(\n      90deg,\n      rgba(245, 200, 35, 0.3) 50%,\n      transparent 50%\n    ),\n    linear-gradient(rgba(255, 205, 175, 0.3) 50%, transparent 50%);\n  background-size: 80px 80px;\n  background-position: 20px 20px;\n  background-attachment: fixed;\n"]);return Y=function(){return n},n}function B(){let n=(0,i._)(["\n  position: absolute;\n  top: auto;\n  left: auto;\n  right: auto;\n  bottom: 0;\n  width: 100%;\n  height: 50vh;\n  height: 50dvh;\n  overflow: hidden;\n  background-image: linear-gradient(\n    0deg,\n    rgba(200, 160, 135, 0.7),\n    transparent\n  );\n  mix-blend-mode: multiply;\n"]);return B=function(){return n},n}function G(){let n=(0,i._)(["\n  position: relative;\n  z-index: 1;\n"]);return G=function(){return n},n}let J=a.Z.div(Y()),L=a.Z.div(B()),Q=a.Z.div(G()),W=n=>{let{children:e}=n;return(0,r.jsxs)(J,{children:[(0,r.jsx)(L,{}),(0,r.jsx)(Q,{children:e})]})},$=n=>{let{children:e,...t}=n;return(0,r.jsx)(U,{...t,children:(0,r.jsx)(W,{children:e})})}},739:function(n,e,t){"use strict";t.d(e,{_:function(){return r}});let r=[{title:"トップページ",name:"top",pathname:"/top"},{title:"会場情報",name:"map",pathname:"/map"},{title:"参加者全般",name:"common",pathname:"/common"},{title:"サークル参加",name:"circle",pathname:"/circle"},{title:"コスプレ参加",name:"cosplay",pathname:"/cosplay"},{title:"イベント情報",name:"event",pathname:"/event"},{title:"スタッフ一覧",name:"staff",pathname:"/staff"}]}},function(n){n.O(0,[973,815,852,208,796,971,23,744],function(){return n(n.s=6132)}),_N_E=n.O()}]);