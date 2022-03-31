var R=Object.defineProperty,O=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var w=(e,t,o)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(e,t)=>{for(var o in t||(t={}))S.call(t,o)&&w(e,o,t[o]);if(D)for(var o of D(t))k.call(t,o)&&w(e,o,t[o]);return e},p=(e,t)=>O(e,H(t));var x=(e,t)=>{var o={};for(var n in e)S.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&D)for(var n of D(e))t.indexOf(n)<0&&k.call(e,n)&&(o[n]=e[n]);return o};import{a as $,R as y,r as l,j as r,c as _,M as z,L as I,N as L,b as d,d as j,e as q,f as G,A as W,s as u,B as v,g as A,h as K,C as U,T as V,I as J,i as Y,k as g,l as Q,m as X,D as Z,n as ee,o as te,p as re,q as oe,t as ne,u as ae,v as se,H as ie,w as N,x as ce,y as le,z as C,E as ue,F as de,S as pe,G as he,J as me,K as ge,O as fe,P as xe}from"./vendor.fbeca555.js";const De=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=o(a);fetch(a.href,i)}};De();$.create({baseURL:"https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search",headers:{},params:{apikey:"d98598e033ac1e0ad0a3335990d12579",page_size:"10",page:"1",format:"json"}});const b=y.createContext(void 0);function ye(e){const[t,o]=l.exports.useState({}),a={toggleDrawer:(i,s,h="temporary",f)=>{o({open:i,anchor:s,permanent:h,child:f})}};return r(b.Provider,{value:c(c({},t),a),children:e.children})}const M=y.createContext(void 0);function ve(e){const[t,o]=l.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),i={createLoader:(s,h)=>{t.name&&o(p(c({},t),{[s]:void 0})),o(p(c({},t),{[s]:{open:!1,color:h||"primary"}}))},toggleLoader:s=>{t.name?o(p(c({},t),{[s]:p(c({},t.name),{open:!t.name.open})})):console.error("Loader does'nt exist. Name: "+s)}};return r(M.Provider,{value:c(c({},t),i),children:e.children})}const P=y.createContext(void 0);function be(e){const[t,o]=l.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),i={createBanner:(s,h,f,E)=>{t[s]&&o(p(c({},t),{[s]:void 0})),o(p(c({},t),{[s]:{open:!1,severity:h||"success",title:f||"",mesaage:E||""}}))},toggleBanner:s=>{t[s]?o(p(c({},t),{[s]:p(c({},t[s]),{open:!t[s].open})})):console.error("Banner does'nt exist. Name: "+s)}};return r(P.Provider,{value:c(c({},t),i),children:e.children})}const B=_({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function Ee(){const[e,t]=l.exports.useState(B.palette.primary.light);return r("div",{className:"wrapper",children:r(z,{children:r("meta",{name:"theme-color",content:e})})})}const Ce=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}];function we(){return r(I,{children:Ce.map((e,t)=>r(L,{to:e.url,children:d(j,{button:!0,children:[r(q,{primary:e.name}),r(G,{children:r(W,{})})]},e.name)},t))})}const Se=u(we)`
  
`;function ke({className:e}){return r(v,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}].map(o=>r(L,{to:o.url,children:r(A,{sx:{my:2},children:o.name})},o.name))})}const Ne=u(ke)`
  
`,Le=o=>{var n=o,{className:e}=n,t=x(n,["className"]);const a=l.exports.useContext(b);return r(K,{position:"static",className:e,children:r(U,{maxWidth:"xl",children:d(V,{disableGutters:!0,children:[r(v,{sx:{display:{xs:"flex",md:"none"}},children:r(J,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{a.toggleDrawer(!0,"left","temporary",Se)},color:"inherit",children:r(Y,{})})}),r(g,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),r(Ne,{className:"nav-bar"})]})})})},Ae=u(Le)`
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
`;function Me(o){var n=o,{className:e}=n,t=x(n,["className"]);return r("div",{className:e,children:t.children})}const Pe=u(Me)`
  height: 100vh;
  min-height: 700px;
  background-color: ${e=>e.theme.palette.primary.light};
`;function Be({className:e}){return r("div",{id:"FOOTER",className:e})}const Te=u(Be)`
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

`;function Fe(o){var n=o,{className:e}=n,t=x(n,["className"]);const a=l.exports.useContext(b);return r(Q,{className:e,anchor:a.anchor,open:a.open,variant:a.permanent,onClose:()=>{a.toggleDrawer(!1)},children:r(v,{className:"drawer-layout",sx:{width:a.anchor==="top"||a.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{a.toggleDrawer(!1)},children:r(a.child,{})})})}const Re=u(Fe)`
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
`;function Oe({className:e}){const[t,o]=l.exports.useState(!0),n=()=>{o(!1)};return d(X,{id:"main-modal-root",className:e,open:t,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[r(Z,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),r(ee,{children:r(te,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),r(re,{children:r(A,{onClick:n,children:"Close"})})]})}u(Oe)`
  
`;function He(o){var n=o,{className:e}=n,t=x(n,["className"]);const[a,i]=l.exports.useState(!0);return r(oe,{className:e,open:a,onClose:()=>{i(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:t.children})}u(He)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function $e({className:e}){return r("div",{id:"",className:e})}const _e=u($e)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function ze({className:e}){function t(o){let n=document.querySelector("#gsc-i-id1");if(n)if(o.target.value.length<=1){let a=document.querySelector(".gsst_a");a&&a.dispatchEvent(new Event("click"))}else{n.value=o.target.value;let a=document.querySelectorAll(".gsc-search-box button")[0];a?setTimeout(()=>{a.dispatchEvent(new Event("click"))},100*Math.floor(Math.random()*4)):console.error("no gsc loaded")}else console.error("no gsc loaded")}return d("div",{id:"",className:e,children:[r(ne,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:t,autoFocus:!0}),r("div",{className:"gcse-search"})]})}const Ie=u(ze)`
  
`;window.onload=()=>{const e=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],t={childList:!1,attributes:!0,subtree:!1};function o(){je()}new MutationObserver(o).observe(e,t)};let je=()=>{setTimeout(()=>{let e=document.querySelectorAll(".gs-title");e&&e.forEach((t,o)=>{t.innerText.includes("Lyrics")?(t.innerText=t.innerText.replace("| Musixmatch"," "),t.addEventListener("click",()=>{console.log("clicked url")})):t.innerText.includes("Lyrics")||t.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&t.parentElement.parentElement.parentElement.remove()})},50)};function qe({className:e}){function t(o){o.preventDefault();let n=document.querySelectorAll(".gsc-search-box button")[0];n?n.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return d("div",{className:e,children:[d(g,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",r("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D0\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4"]}),r(g,{variant:"h3",className:"page-h3",children:"\u05DC\u05D9\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DE\u05D5\u05D6\u05D9\u05E7\u05D4"}),r(v,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:t,children:r(Ie,{})})]})}const Ge=u(qe)`
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

    
`;function We({className:e}){return r("div",{className:e,children:r(g,{variant:"h2",className:"page-h2",children:"About Page"})})}const Ke=u(We)`

`;function Ue({className:e}){return d("div",{id:"NO_MATCH_WRAPPER",className:e,children:[r(g,{variant:"h2",className:"page-h2",children:"404"}),r(g,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const Ve=u(Ue)`

`;function Je({className:e}){const t=l.exports.useContext(b),o=l.exports.useContext(M),n=l.exports.useContext(P),a=l.exports.useRef(null),[i,s]=l.exports.useState(!1),h=ae({key:"muirtl",stylisPlugins:[he,me]});function f(){E()}const E=()=>{const m=document.createElement("script");m.type="text/javascript",m.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",m.defer=!0,document.body.appendChild(m)};l.exports.useEffect(()=>{f(),s(!0),window.onscroll=()=>{T()}},[]);const T=()=>{a.current&&window.pageYOffset>a.current.offsetTop},F=m=>{n.toggleBanner(m)};return d("div",{className:e,ref:a,children:[r(se,{value:h,children:d(ie,{children:[r(Ee,{}),r(Ae,{className:"header"}),n.main.open&&d(N,{severity:"warning",className:"main-alert",children:[r(ce,{children:n.main.title}),n.main.message]}),r(Pe,{children:d(le,{children:[r(C,{path:"/",element:r(Ge,{className:"page"})}),r(C,{path:"/about",element:r(Ke,{className:"page"})}),r(C,{path:"*",element:r(Ve,{className:"page"})})]})}),t.open&&t.child&&r(Re,{className:"drawer"}),o.main.open&&r(ue,{color:o.main.color||"primary"}),o.circular.open&&r(de,{color:o.main.color||"primary"}),n.snackbar.open&&r(pe,{open:n.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:r(N,{onClose:()=>{F("snackbar")},severity:n.snackbar.severity,sx:{width:"100%"},children:n.snackbar.message})}),r(Te,{})]})}),r(_e,{})]})}const Ye=u(Je)`
  height: 100vh;
  min-height: 700px;
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
`,Qe=[ye,be,ve];function Xe(e){return r(ge,{children:Qe.reduceRight((t,o)=>r(o,{children:t}),e.children)})}fe.render(r(y.StrictMode,{children:r(Xe,{children:r(xe,{theme:B,children:r(Ye,{className:"app"})})})}),document.getElementById("root"));
