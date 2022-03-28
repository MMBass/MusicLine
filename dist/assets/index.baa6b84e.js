var H=Object.defineProperty,z=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var L=(e,r,n)=>r in e?H(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,l=(e,r)=>{for(var n in r||(r={}))A.call(r,n)&&L(e,n,r[n]);if(f)for(var n of f(r))P.call(r,n)&&L(e,n,r[n]);return e},p=(e,r)=>z(e,j(r));var g=(e,r)=>{var n={};for(var a in e)A.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&f)for(var a of f(e))r.indexOf(a)<0&&P.call(e,a)&&(n[a]=e[a]);return n};import{a as q,R as b,r as u,j as t,c as _,M as G,L as y,N,b as c,d as v,e as E,f as U,A as V,s as d,B as C,g as T,h as W,C as K,T as J,I as Q,i as Y,k as m,G as x,l as S,m as B,n as X,o as Z,D as ee,p as te,q as re,t as ne,u as ae,v as oe,w as ie,x as se,H as le,y as M,z as ce,E as ue,F as k,J as de,K as pe,S as he,O as me,P as De,Q as ge,U as fe,V as xe}from"./vendor.83b84d54.js";const ye=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};ye();q.create({baseURL:"https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search",headers:{},params:{apikey:"d98598e033ac1e0ad0a3335990d12579",page_size:"10",page:"1",format:"json"}});const w=b.createContext(void 0);function ve(e){const[r,n]=u.exports.useState({}),o={toggleDrawer:(s,i,h="temporary",D)=>{n({open:s,anchor:i,permanent:h,child:D})}};return t(w.Provider,{value:l(l({},r),o),children:e.children})}const F=b.createContext(void 0);function Ee(e){const[r,n]=u.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),s={createLoader:(i,h)=>{r.name&&n(p(l({},r),{[i]:void 0})),n(p(l({},r),{[i]:{open:!1,color:h||"primary"}}))},toggleLoader:i=>{r.name?n(p(l({},r),{[i]:p(l({},r.name),{open:!r.name.open})})):console.error("Loader does'nt exist. Name: "+i)}};return t(F.Provider,{value:l(l({},r),s),children:e.children})}const R=b.createContext(void 0);function be(e){const[r,n]=u.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),s={createBanner:(i,h,D,O)=>{r[i]&&n(p(l({},r),{[i]:void 0})),n(p(l({},r),{[i]:{open:!1,severity:h||"success",title:D||"",mesaage:O||""}}))},toggleBanner:i=>{r[i]?n(p(l({},r),{[i]:p(l({},r[i]),{open:!r[i].open})})):console.error("Banner does'nt exist. Name: "+i)}};return t(R.Provider,{value:l(l({},r),s),children:e.children})}const $=_({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function Ce(){const[e,r]=u.exports.useState($.palette.primary.light);return t("div",{className:"wrapper",children:t(G,{children:t("meta",{name:"theme-color",content:e})})})}const we=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}];function Se(){return t(y,{children:we.map((e,r)=>t(N,{to:e.url,children:c(v,{button:!0,children:[t(E,{primary:e.name}),t(U,{children:t(V,{})})]},e.name)},r))})}const ke=d(Se)`
  
`;function Ne({className:e}){return t(C,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}].map(n=>t(N,{to:n.url,children:t(T,{sx:{my:2},children:n.name})},n.name))})}const Le=d(Ne)`
  
`,Ae=n=>{var a=n,{className:e}=a,r=g(a,["className"]);const o=u.exports.useContext(w);return c(W,{position:"static",className:e,children:[t("div",{className:"gcse-searchresults"}),t(K,{maxWidth:"xl",children:c(J,{disableGutters:!0,children:[t(C,{sx:{display:{xs:"flex",md:"none"}},children:t(Q,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{o.toggleDrawer(!0,"left","temporary",ke)},color:"inherit",children:t(Y,{})})}),t(m,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(Le,{className:"nav-bar"})]})})]})},Pe=d(Ae)`
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
`;function Be(n){var a=n,{className:e}=a,r=g(a,["className"]);return t("div",{className:e,children:r.children})}const Me=d(Be)`
  height: 100vh;
  background-color: ${e=>e.theme.palette.primary.light};
`,Te=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}],Fe=[{name:"\u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7",url:"https://facebook.com"}],Re=[{name:"example@gmail.com",url:"mailto:example@gmail.com"}];function $e({className:e}){return t("div",{id:"FOOTER",className:e,children:c(x,{container:!0,rowSpacing:6,columnSpacing:2,children:[t(x,{item:!0,xs:12,sm:4,children:c(y,{children:[t(S,{variant:"h5",component:"h5",children:"\u05E2\u05DE\u05D5\u05D3\u05D9\u05DD"}),Te.map((r,n)=>t(N,{to:r.url,children:t(v,{children:t(E,{primary:r.name})},n)},n))]})}),t(x,{item:!0,xs:12,sm:4,children:c(y,{children:[t(S,{variant:"h5",component:"h5",children:"\u05E2\u05E7\u05D1\u05D5 \u05D0\u05D7\u05E8\u05D9\u05E0\u05D5"}),Fe.map((r,n)=>t(B,{href:r.url,children:t(v,{children:t(E,{primary:r.name})},n)},n))]})}),t(x,{item:!0,xs:12,sm:4,children:c(y,{children:[t(S,{variant:"h5",component:"h5",children:"\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8"}),Re.map((r,n)=>t(B,{href:r.url,children:t(v,{children:t(E,{primary:r.name})},n)},n))]})})]})})}const Ie=d($e)`
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

`;function Oe(n){var a=n,{className:e}=a,r=g(a,["className"]);const o=u.exports.useContext(w);return t(X,{className:e,anchor:o.anchor,open:o.open,variant:o.permanent,onClose:()=>{o.toggleDrawer(!1)},children:t(C,{className:"drawer-layout",sx:{width:o.anchor==="top"||o.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{o.toggleDrawer(!1)},children:t(o.child,{})})})}const He=d(Oe)`
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
`;function ze({className:e}){const[r,n]=u.exports.useState(!0),a=()=>{n(!1)};return c(Z,{id:"main-modal-root",className:e,open:r,onClose:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(ee,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(te,{children:t(re,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(ne,{children:t(T,{onClick:a,children:"Close"})})]})}d(ze)`
  
`;function je(n){var a=n,{className:e}=a,r=g(a,["className"]);const[o,s]=u.exports.useState(!0);return t(ae,{className:e,open:o,onClose:()=>{s(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}d(je)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;let I=()=>{let e=setInterval(()=>{let r=document.querySelectorAll(".gs-title");r&&(clearInterval(e),r.forEach((n,a)=>{n.innerText.includes("Lyrics")?(n.innerText=n.innerText.replace("Lyrics | Musixmatch"," "),n.addEventListener("click",()=>{console.log("clicked url")})):n.parentElement.parentElement.remove()}))},500)};function qe({className:e}){function r(n){let a=document.querySelector("#gsc-i-id1");if(a){a.value=n.target.value;let o=document.querySelectorAll(".gsc-search-box button")[0];o?(o.dispatchEvent(new Event("click")),I()):console.error("no gsc loaded")}else console.error("no gsc loaded")}return c("div",{id:"",className:e,children:[t(oe,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:r,autoFocus:!0}),t("div",{className:"gcse-search"})]})}const _e=d(qe)`
  
`;function Ge({className:e}){function r(n){n.preventDefault();let a=document.querySelectorAll(".gsc-search-box button")[0];a?(a.dispatchEvent(new Event("click")),I()):console.error("no gsc loaded")}return c("div",{className:e,children:[c(m,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",t("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D0\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4"]}),t(m,{variant:"h3",className:"page-h3",children:"\u05DC\u05D9\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DE\u05D5\u05D6\u05D9\u05E7\u05D4"}),t(C,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:r,children:t(_e,{})})]})}const Ue=d(Ge)`
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

    
`;function Ve({className:e}){return t("div",{className:e,children:t(m,{variant:"h2",className:"page-h2",children:"About Page"})})}const We=d(Ve)`

`;function Ke({className:e}){return c("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(m,{variant:"h2",className:"page-h2",children:"404"}),t(m,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const Je=d(Ke)`

`;function Qe({className:e}){const r=u.exports.useContext(w),n=u.exports.useContext(F),a=u.exports.useContext(R),o=u.exports.useRef(null),s=ie({key:"muirtl",stylisPlugins:[me,De]});u.exports.useEffect(()=>{window.onscroll=()=>{i()}},[]);const i=()=>{o.current&&window.pageYOffset>o.current.offsetTop},h=D=>{a.toggleBanner(D)};return t("div",{className:e,ref:o,children:t(se,{value:s,children:c(le,{children:[t(Ce,{}),t(Pe,{className:"header"}),a.main.open&&c(M,{severity:"warning",className:"main-alert",children:[t(ce,{children:a.main.title}),a.main.message]}),t(Me,{children:c(ue,{children:[t(k,{path:"/",element:t(Ue,{className:"page"})}),t(k,{path:"/about",element:t(We,{className:"page"})}),t(k,{path:"*",element:t(Je,{className:"page"})})]})}),r.open&&r.child&&t(He,{className:"drawer"}),n.main.open&&t(de,{color:n.main.color||"primary"}),n.circular.open&&t(pe,{color:n.main.color||"primary"}),a.snackbar.open&&t(he,{open:a.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(M,{onClose:()=>{h("snackbar")},severity:a.snackbar.severity,sx:{width:"100%"},children:a.snackbar.message})}),t(Ie,{})]})})})}const Ye=d(Qe)`
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
`,Xe=[ve,be,Ee];function Ze(e){return t(ge,{children:Xe.reduceRight((r,n)=>t(n,{children:r}),e.children)})}fe.render(t(b.StrictMode,{children:t(Ze,{children:t(xe,{theme:$,children:t(Ye,{className:"app"})})})}),document.getElementById("root"));
