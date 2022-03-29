var H=Object.defineProperty,z=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var L=(e,r,n)=>r in e?H(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,l=(e,r)=>{for(var n in r||(r={}))A.call(r,n)&&L(e,n,r[n]);if(f)for(var n of f(r))P.call(r,n)&&L(e,n,r[n]);return e},p=(e,r)=>z(e,I(r));var D=(e,r)=>{var n={};for(var o in e)A.call(e,o)&&r.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&f)for(var o of f(e))r.indexOf(o)<0&&P.call(e,o)&&(n[o]=e[o]);return n};import{a as _,R as b,r as u,j as t,c as j,M as q,L as y,N,b as c,d as v,e as E,f as G,A as U,s as d,B as C,g as T,h as V,C as W,T as K,I as J,i as Q,k as m,G as x,l as S,m as M,n as Y,o as X,D as Z,p as ee,q as te,t as re,u as ne,v as oe,w as ae,x as se,H as ie,y as B,z as le,E as ce,F as k,J as ue,K as de,S as pe,O as he,P as me,Q as ge,U as De,V as fe}from"./vendor.83b84d54.js";const xe=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};xe();_.create({baseURL:"https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search",headers:{},params:{apikey:"d98598e033ac1e0ad0a3335990d12579",page_size:"10",page:"1",format:"json"}});const w=b.createContext(void 0);function ye(e){const[r,n]=u.exports.useState({}),a={toggleDrawer:(i,s,h="temporary",g)=>{n({open:i,anchor:s,permanent:h,child:g})}};return t(w.Provider,{value:l(l({},r),a),children:e.children})}const F=b.createContext(void 0);function ve(e){const[r,n]=u.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),i={createLoader:(s,h)=>{r.name&&n(p(l({},r),{[s]:void 0})),n(p(l({},r),{[s]:{open:!1,color:h||"primary"}}))},toggleLoader:s=>{r.name?n(p(l({},r),{[s]:p(l({},r.name),{open:!r.name.open})})):console.error("Loader does'nt exist. Name: "+s)}};return t(F.Provider,{value:l(l({},r),i),children:e.children})}const R=b.createContext(void 0);function Ee(e){const[r,n]=u.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),i={createBanner:(s,h,g,$)=>{r[s]&&n(p(l({},r),{[s]:void 0})),n(p(l({},r),{[s]:{open:!1,severity:h||"success",title:g||"",mesaage:$||""}}))},toggleBanner:s=>{r[s]?n(p(l({},r),{[s]:p(l({},r[s]),{open:!r[s].open})})):console.error("Banner does'nt exist. Name: "+s)}};return t(R.Provider,{value:l(l({},r),i),children:e.children})}const O=j({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function be(){const[e,r]=u.exports.useState(O.palette.primary.light);return t("div",{className:"wrapper",children:t(q,{children:t("meta",{name:"theme-color",content:e})})})}const Ce=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}];function we(){return t(y,{children:Ce.map((e,r)=>t(N,{to:e.url,children:c(v,{button:!0,children:[t(E,{primary:e.name}),t(G,{children:t(U,{})})]},e.name)},r))})}const Se=d(we)`
  
`;function ke({className:e}){return t(C,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}].map(n=>t(N,{to:n.url,children:t(T,{sx:{my:2},children:n.name})},n.name))})}const Ne=d(ke)`
  
`,Le=n=>{var o=n,{className:e}=o,r=D(o,["className"]);const a=u.exports.useContext(w);return t(V,{position:"static",className:e,children:t(W,{maxWidth:"xl",children:c(K,{disableGutters:!0,children:[t(C,{sx:{display:{xs:"flex",md:"none"}},children:t(J,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{a.toggleDrawer(!0,"left","temporary",Se)},color:"inherit",children:t(Q,{})})}),t(m,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(Ne,{className:"nav-bar"})]})})})},Ae=d(Le)`
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
`;function Pe(n){var o=n,{className:e}=o,r=D(o,["className"]);return t("div",{className:e,children:r.children})}const Me=d(Pe)`
  height: 100vh;
  background-color: ${e=>e.theme.palette.primary.light};
`,Be=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}],Te=[{name:"\u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7",url:"https://facebook.com"}],Fe=[{name:"example@gmail.com",url:"mailto:example@gmail.com"}];function Re({className:e}){return t("div",{id:"FOOTER",className:e,children:c(x,{container:!0,rowSpacing:6,columnSpacing:2,children:[t(x,{item:!0,xs:12,sm:4,children:c(y,{children:[t(S,{variant:"h5",component:"h5",children:"\u05E2\u05DE\u05D5\u05D3\u05D9\u05DD"}),Be.map((r,n)=>t(N,{to:r.url,children:t(v,{children:t(E,{primary:r.name})},n)},n))]})}),t(x,{item:!0,xs:12,sm:4,children:c(y,{children:[t(S,{variant:"h5",component:"h5",children:"\u05E2\u05E7\u05D1\u05D5 \u05D0\u05D7\u05E8\u05D9\u05E0\u05D5"}),Te.map((r,n)=>t(M,{href:r.url,children:t(v,{children:t(E,{primary:r.name})},n)},n))]})}),t(x,{item:!0,xs:12,sm:4,children:c(y,{children:[t(S,{variant:"h5",component:"h5",children:"\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8"}),Fe.map((r,n)=>t(M,{href:r.url,children:t(v,{children:t(E,{primary:r.name})},n)},n))]})})]})})}const Oe=d(Re)`
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

`;function $e(n){var o=n,{className:e}=o,r=D(o,["className"]);const a=u.exports.useContext(w);return t(Y,{className:e,anchor:a.anchor,open:a.open,variant:a.permanent,onClose:()=>{a.toggleDrawer(!1)},children:t(C,{className:"drawer-layout",sx:{width:a.anchor==="top"||a.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{a.toggleDrawer(!1)},children:t(a.child,{})})})}const He=d($e)`
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
`;function ze({className:e}){const[r,n]=u.exports.useState(!0),o=()=>{n(!1)};return c(X,{id:"main-modal-root",className:e,open:r,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(Z,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(ee,{children:t(te,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(re,{children:t(T,{onClick:o,children:"Close"})})]})}d(ze)`
  
`;function Ie(n){var o=n,{className:e}=o,r=D(o,["className"]);const[a,i]=u.exports.useState(!0);return t(ne,{className:e,open:a,onClose:()=>{i(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}d(Ie)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;window.onload=()=>{const e=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],r={childList:!1,attributes:!0,subtree:!1};function n(){_e()}new MutationObserver(n).observe(e,r)};let _e=()=>{setTimeout(()=>{let e=document.querySelectorAll(".gs-title");e&&e.forEach((r,n)=>{r.innerText.includes("Lyrics")?(r.innerText=r.innerText.replace("| Musixmatch"," "),r.addEventListener("click",()=>{console.log("clicked url")})):r.innerText.includes("Lyrics")||r.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&r.parentElement.parentElement.parentElement.remove()})},50)};function je({className:e}){function r(n){let o=document.querySelector("#gsc-i-id1");if(o){o.value=n.target.value;let a=document.querySelectorAll(".gsc-search-box button")[0];a?a.dispatchEvent(new Event("click")):console.error("no gsc loaded")}else console.error("no gsc loaded")}return c("div",{id:"",className:e,children:[t(oe,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:r,autoFocus:!0}),t("div",{className:"gcse-search"})]})}const qe=d(je)`
  
`;function Ge({className:e}){function r(n){n.preventDefault();let o=document.querySelectorAll(".gsc-search-box button")[0];o?o.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return c("div",{className:e,children:[c(m,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",t("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D0\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4"]}),t(m,{variant:"h3",className:"page-h3",children:"\u05DC\u05D9\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DE\u05D5\u05D6\u05D9\u05E7\u05D4"}),t(C,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:r,children:t(qe,{})})]})}const Ue=d(Ge)`
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

`;function Qe({className:e}){const r=u.exports.useContext(w),n=u.exports.useContext(F),o=u.exports.useContext(R),a=u.exports.useRef(null),i=ae({key:"muirtl",stylisPlugins:[he,me]});u.exports.useEffect(()=>{window.onscroll=()=>{s()}},[]);const s=()=>{a.current&&window.pageYOffset>a.current.offsetTop},h=g=>{o.toggleBanner(g)};return c("div",{className:e,ref:a,children:[t(se,{value:i,children:c(ie,{children:[t(be,{}),t(Ae,{className:"header"}),o.main.open&&c(B,{severity:"warning",className:"main-alert",children:[t(le,{children:o.main.title}),o.main.message]}),t(Me,{children:c(ce,{children:[t(k,{path:"/",element:t(Ue,{className:"page"})}),t(k,{path:"/about",element:t(We,{className:"page"})}),t(k,{path:"*",element:t(Je,{className:"page"})})]})}),r.open&&r.child&&t(He,{className:"drawer"}),n.main.open&&t(ue,{color:n.main.color||"primary"}),n.circular.open&&t(de,{color:n.main.color||"primary"}),o.snackbar.open&&t(pe,{open:o.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(B,{onClose:()=>{h("snackbar")},severity:o.snackbar.severity,sx:{width:"100%"},children:o.snackbar.message})}),t(Oe,{})]})}),t("script",{defer:!0,src:"/src/services/google-search-a85c2374ffc8b8898.js"})]})}const Ye=d(Qe)`
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
`,Xe=[ye,Ee,ve];function Ze(e){return t(ge,{children:Xe.reduceRight((r,n)=>t(n,{children:r}),e.children)})}De.render(t(b.StrictMode,{children:t(Ze,{children:t(fe,{theme:O,children:t(Ye,{className:"app"})})})}),document.getElementById("root"));
