var _=Object.defineProperty,j=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var M=(e,r,n)=>r in e?_(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,c=(e,r)=>{for(var n in r||(r={}))P.call(r,n)&&M(e,n,r[n]);if(x)for(var n of x(r))T.call(r,n)&&M(e,n,r[n]);return e},p=(e,r)=>j(e,q(r));var f=(e,r)=>{var n={};for(var o in e)P.call(e,o)&&r.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&x)for(var o of x(e))r.indexOf(o)<0&&T.call(e,o)&&(n[o]=e[o]);return n};import{a as G,R as C,r as u,j as t,c as U,M as V,L as v,N as A,b as l,d as E,e as b,f as W,A as K,s as d,B as w,g as R,h as J,C as Q,T as Y,I as X,i as Z,k as g,G as y,l as L,m as B,n as ee,o as te,D as re,p as ne,q as oe,t as ae,u as ie,v as se,w as ce,x as le,H as ue,y as F,z as de,E as pe,F as N,J as he,K as me,S as ge,O as De,P as fe,Q as xe,U as ye,V as ve}from"./vendor.83b84d54.js";const Ee=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}};Ee();G.create({baseURL:"https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search",headers:{},params:{apikey:"d98598e033ac1e0ad0a3335990d12579",page_size:"10",page:"1",format:"json"}});const S=C.createContext(void 0);function be(e){const[r,n]=u.exports.useState({}),a={toggleDrawer:(s,i,h="temporary",D)=>{n({open:s,anchor:i,permanent:h,child:D})}};return t(S.Provider,{value:c(c({},r),a),children:e.children})}const O=C.createContext(void 0);function Ce(e){const[r,n]=u.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),s={createLoader:(i,h)=>{r.name&&n(p(c({},r),{[i]:void 0})),n(p(c({},r),{[i]:{open:!1,color:h||"primary"}}))},toggleLoader:i=>{r.name?n(p(c({},r),{[i]:p(c({},r.name),{open:!r.name.open})})):console.error("Loader does'nt exist. Name: "+i)}};return t(O.Provider,{value:c(c({},r),s),children:e.children})}const $=C.createContext(void 0);function we(e){const[r,n]=u.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),s={createBanner:(i,h,D,k)=>{r[i]&&n(p(c({},r),{[i]:void 0})),n(p(c({},r),{[i]:{open:!1,severity:h||"success",title:D||"",mesaage:k||""}}))},toggleBanner:i=>{r[i]?n(p(c({},r),{[i]:p(c({},r[i]),{open:!r[i].open})})):console.error("Banner does'nt exist. Name: "+i)}};return t($.Provider,{value:c(c({},r),s),children:e.children})}const H=U({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function Se(){const[e,r]=u.exports.useState(H.palette.primary.light);return t("div",{className:"wrapper",children:t(V,{children:t("meta",{name:"theme-color",content:e})})})}const ke=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}];function Le(){return t(v,{children:ke.map((e,r)=>t(A,{to:e.url,children:l(E,{button:!0,children:[t(b,{primary:e.name}),t(W,{children:t(K,{})})]},e.name)},r))})}const Ne=d(Le)`
  
`;function Ae({className:e}){return t(w,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}].map(n=>t(A,{to:n.url,children:t(R,{sx:{my:2},children:n.name})},n.name))})}const Me=d(Ae)`
  
`,Pe=n=>{var o=n,{className:e}=o,r=f(o,["className"]);const a=u.exports.useContext(S);return t(J,{position:"static",className:e,children:t(Q,{maxWidth:"xl",children:l(Y,{disableGutters:!0,children:[t(w,{sx:{display:{xs:"flex",md:"none"}},children:t(X,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{a.toggleDrawer(!0,"left","temporary",Ne)},color:"inherit",children:t(Z,{})})}),t(g,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(Me,{className:"nav-bar"})]})})})},Te=d(Pe)`
  background-color: ${e=>e.theme.palette.primary.dark};
  color: ${e=>e.theme.palette.secondary.main};

  button{
    color: ${e=>e.theme.palette.secondary.main};
  }

  .MuiBox-root{
    justify-content: flex-end;
  }

  .MuiButtonBase-root{
    padding-inline-start: 0;
  }
`;function Be(n){var o=n,{className:e}=o,r=f(o,["className"]);return t("div",{className:e,children:r.children})}const Fe=d(Be)`
  height: 100vh;
  min-height: 420px;
  background-color: ${e=>e.theme.palette.primary.light};
`,Re=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}],Oe=[{name:"\u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7",url:"https://facebook.com"}],$e=[{name:"example@gmail.com",url:"mailto:example@gmail.com"}];function He({className:e}){return t("div",{id:"FOOTER",className:e,children:l(y,{container:!0,rowSpacing:6,columnSpacing:2,children:[t(y,{item:!0,xs:12,sm:4,children:l(v,{children:[t(L,{variant:"h5",component:"h5",children:"\u05E2\u05DE\u05D5\u05D3\u05D9\u05DD"}),Re.map((r,n)=>t(A,{to:r.url,children:t(E,{children:t(b,{primary:r.name})},n)},n))]})}),t(y,{item:!0,xs:12,sm:4,children:l(v,{children:[t(L,{variant:"h5",component:"h5",children:"\u05E2\u05E7\u05D1\u05D5 \u05D0\u05D7\u05E8\u05D9\u05E0\u05D5"}),Oe.map((r,n)=>t(B,{href:r.url,children:t(E,{children:t(b,{primary:r.name})},n)},n))]})}),t(y,{item:!0,xs:12,sm:4,children:l(v,{children:[t(L,{variant:"h5",component:"h5",children:"\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8"}),$e.map((r,n)=>t(B,{href:r.url,children:t(E,{children:t(b,{primary:r.name})},n)},n))]})})]})})}const ze=d(He)`
  color: ${e=>e.theme.palette.secondary.dark};
  background-color: ${e=>e.theme.palette.secondary.main};
  padding: 25px 30px 30px 25px;
  text-align: start;
  
  li span{
    color: ${e=>e.theme.palette.secondary.dark};
    font-size: 15px;
  }

  h5{
    background-color: unset;
    font-weight: 500;
    font-size: 17px;
    color: #303030;
    margin: unset;
  }

`;function Ie(n){var o=n,{className:e}=o,r=f(o,["className"]);const a=u.exports.useContext(S);return t(ee,{className:e,anchor:a.anchor,open:a.open,variant:a.permanent,onClose:()=>{a.toggleDrawer(!1)},children:t(w,{className:"drawer-layout",sx:{width:a.anchor==="top"||a.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{a.toggleDrawer(!1)},children:t(a.child,{})})})}const _e=d(Ie)`
  color: #F4F5F7;
  
  .MuiDrawer-paper {
    background-color: ${e=>e.theme.palette.primary.main};
    color: ${e=>e.theme.palette.secondary.main};
  }

  svg{
    color: ${e=>e.theme.palette.secondary.main};
  }

  a{
    color: ${e=>e.theme.palette.secondary.main};
    text-decoration: none;
  }
`;function je({className:e}){const[r,n]=u.exports.useState(!0),o=()=>{n(!1)};return l(te,{id:"main-modal-root",className:e,open:r,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(re,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(ne,{children:t(oe,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(ae,{children:t(R,{onClick:o,children:"Close"})})]})}d(je)`
  
`;function qe(n){var o=n,{className:e}=o,r=f(o,["className"]);const[a,s]=u.exports.useState(!0);return t(ie,{className:e,open:a,onClose:()=>{s(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}d(qe)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function Ge({className:e}){return t("div",{id:"",className:e})}const Ue=d(Ge)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function Ve({className:e}){function r(n){let o=document.querySelector("#gsc-i-id1");if(o){o.value=n.target.value;let a=document.querySelectorAll(".gsc-search-box button")[0];a?setTimeout(()=>{a.dispatchEvent(new Event("click"))},100*Math.floor(Math.random()*4)):console.error("no gsc loaded")}else console.error("no gsc loaded")}return l("div",{id:"",className:e,children:[t(se,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:r,autoFocus:!0}),t("div",{className:"gcse-search"})]})}const We=d(Ve)`
  
`;window.onload=()=>{const e=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],r={childList:!1,attributes:!0,subtree:!1};function n(){Ke()}new MutationObserver(n).observe(e,r)};let Ke=()=>{setTimeout(()=>{let e=document.querySelectorAll(".gs-title");e&&e.forEach((r,n)=>{r.innerText.includes("Lyrics")?(r.innerText=r.innerText.replace("| Musixmatch"," "),r.addEventListener("click",()=>{console.log("clicked url")})):r.innerText.includes("Lyrics")||r.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&r.parentElement.parentElement.parentElement.remove()})},50)};function Je({className:e}){function r(n){n.preventDefault();let o=document.querySelectorAll(".gsc-search-box button")[0];o?o.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return l("div",{className:e,children:[l(g,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",t("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D0\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4"]}),t(g,{variant:"h3",className:"page-h3",children:"\u05DC\u05D9\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DE\u05D5\u05D6\u05D9\u05E7\u05D4"}),t(w,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:r,children:t(We,{})})]})}const Qe=d(Je)`
    padding: 35px;

    .MuiTextField-root { 
        margin-top: 35px;
        width: 460px;
        border-color: white;

        @media (max-width: 600px) {
            width: 95%;
        }
    };

    .MuiTextField-root * { 
        color: white;
        border-color: white;
    }

    
`;function Ye({className:e}){return t("div",{className:e,children:t(g,{variant:"h2",className:"page-h2",children:"About Page"})})}const Xe=d(Ye)`

`;function Ze({className:e}){return l("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(g,{variant:"h2",className:"page-h2",children:"404"}),t(g,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const et=d(Ze)`

`;function tt({className:e}){const r=u.exports.useContext(S),n=u.exports.useContext(O),o=u.exports.useContext($),a=u.exports.useRef(null),[s,i]=u.exports.useState(!1),h=ce({key:"muirtl",stylisPlugins:[De,fe]});function D(){k()}const k=()=>{const m=document.createElement("script");m.type="text/javascript",m.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",m.defer=!0,document.body.appendChild(m)};u.exports.useEffect(()=>{D(),i(!0),window.onscroll=()=>{z()}},[]);const z=()=>{a.current&&window.pageYOffset>a.current.offsetTop},I=m=>{o.toggleBanner(m)};return l("div",{className:e,ref:a,children:[t(le,{value:h,children:l(ue,{children:[t(Se,{}),t(Te,{className:"header"}),o.main.open&&l(F,{severity:"warning",className:"main-alert",children:[t(de,{children:o.main.title}),o.main.message]}),t(Fe,{children:l(pe,{children:[t(N,{path:"/",element:t(Qe,{className:"page"})}),t(N,{path:"/about",element:t(Xe,{className:"page"})}),t(N,{path:"*",element:t(et,{className:"page"})})]})}),r.open&&r.child&&t(_e,{className:"drawer"}),n.main.open&&t(he,{color:n.main.color||"primary"}),n.circular.open&&t(me,{color:n.main.color||"primary"}),o.snackbar.open&&t(ge,{open:o.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(F,{onClose:()=>{I("snackbar")},severity:o.snackbar.severity,sx:{width:"100%"},children:o.snackbar.message})}),t(ze,{})]})}),t(Ue,{})]})}const rt=d(tt)`
  height: 100vh;
  color: ${e=>e.theme.palette.secondary.main};

  .page-h2{
    padding: 30px 0px 0px 0px;
    font-size: 80px; 
    font-weight: 400;
    color: ${e=>e.theme.palette.secondary.main};
    @media (max-width: 600px) {
      font-size: 55px;
    }
  }

  .page-h3{
    margin: 15px 0px 0px  0px;
    font-size: 40px; // 29
    font-weight: 500;
    color: ${e=>e.theme.palette.secondary.main};
    @media (max-width: 600px) {
      font-size: 29px;
    }
  }

  a {
    text-decoration: none;
  }

  .MuiLinearProgress-root{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }

  .main-alert{
    color: #fff;
    background-color: #2D4260;
    border-radius: unset;
  }
`,nt=[be,we,Ce];function ot(e){return t(xe,{children:nt.reduceRight((r,n)=>t(n,{children:r}),e.children)})}ye.render(t(C.StrictMode,{children:t(ot,{children:t(ve,{theme:H,children:t(rt,{className:"app"})})})}),document.getElementById("root"));
