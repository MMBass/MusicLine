var I=Object.defineProperty,q=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var B=(e,r,n)=>r in e?I(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,l=(e,r)=>{for(var n in r||(r={}))M.call(r,n)&&B(e,n,r[n]);if(b)for(var n of b(r))T.call(r,n)&&B(e,n,r[n]);return e},g=(e,r)=>q(e,z(r));var D=(e,r)=>{var n={};for(var a in e)M.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&b)for(var a of b(e))r.indexOf(a)<0&&T.call(e,a)&&(n[a]=e[a]);return n};import{R as v,r as c,j as t,c as j,M as G,L as U,N as L,a as h,b as W,d as K,e as V,A as J,s as u,B as C,f as R,g as Q,C as X,T as Y,I as Z,h as ee,i as y,k as te,l as re,D as ne,m as oe,n as ae,o as se,p as ie,q as ce,F as _,t as le,u as ue,H as de,v as F,w as pe,x as he,y as S,z as me,E as ge,S as fe,G as xe,J as ye,K as De,O as ve}from"./vendor.2ab2e3b0.js";const be=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};be();const E=v.createContext(void 0);function Ce(e){const[r,n]=c.exports.useState({}),o={toggleDrawer:(s,i,d="temporary",m)=>{n({open:s,anchor:i,permanent:d,child:m})}};return t(E.Provider,{value:l(l({},r),o),children:e.children})}const O=v.createContext(void 0);function Ee(e){const[r,n]=c.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),s={createLoader:(i,d)=>{r.name&&n(g(l({},r),{[i]:void 0})),n(g(l({},r),{[i]:{open:!1,color:d||"primary"}}))},toggleLoader:i=>{r.name?n(g(l({},r),{[i]:g(l({},r.name),{open:!r.name.open})})):console.error("Loader does'nt exist. Name: "+i)}};return t(O.Provider,{value:l(l({},r),s),children:e.children})}const $=v.createContext(void 0);function we(e){const[r,n]=c.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),s={createBanner:(i,d,m,p)=>{r[i]&&n(g(l({},r),{[i]:void 0})),n(g(l({},r),{[i]:{open:!1,severity:d||"success",title:m||"",mesaage:p||""}}))},toggleBanner:i=>{r[i]?n(g(l({},r),{[i]:g(l({},r[i]),{open:!r[i].open})})):console.error("Banner does'nt exist. Name: "+i)}};return t($.Provider,{value:l(l({},r),s),children:e.children})}const H=j({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function Se(){const[e,r]=c.exports.useState(H.palette.primary.light);return t("div",{className:"wrapper",children:t(G,{children:t("meta",{name:"theme-color",content:e})})})}const Le=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}];function Ne(){return t(U,{children:Le.map((e,r)=>t(L,{to:e.url,children:h(W,{button:!0,children:[t(K,{primary:e.name}),t(V,{children:t(J,{})})]},e.name)},r))})}const ke=u(Ne)`
  
`;function Ae({className:e}){return t(C,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}].map(n=>t(L,{to:n.url,children:t(R,{sx:{my:2},children:n.name})},n.name))})}const Pe=u(Ae)`
  
`,Be=n=>{var a=n,{className:e}=a,r=D(a,["className"]);const o=c.exports.useContext(E);return t(Q,{position:"static",className:e,children:t(X,{maxWidth:"xl",children:h(Y,{disableGutters:!0,children:[t(C,{sx:{display:{xs:"flex",md:"none"}},children:t(Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{o.toggleDrawer(!0,"left","temporary",ke)},color:"inherit",children:t(ee,{})})}),t(L,{to:"/",children:t(y,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),t(Pe,{className:"nav-bar"})]})})})},Me=u(Be)`
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
`;function Te(n){var a=n,{className:e}=a,r=D(a,["className"]);return t("div",{className:e,children:r.children})}const Fe=u(Te)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  padding: 35px;
  background-color: ${e=>e.theme.palette.primary.light};
`;function Re({className:e}){return t("div",{id:"FOOTER",className:e})}const _e=u(Re)`
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

`;function Oe(n){var a=n,{className:e}=a,r=D(a,["className"]);const o=c.exports.useContext(E);return t(te,{className:e,anchor:o.anchor,open:o.open,variant:o.permanent,onClose:()=>{o.toggleDrawer(!1)},children:t(C,{className:"drawer-layout",sx:{width:o.anchor==="top"||o.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{o.toggleDrawer(!1)},children:t(o.child,{})})})}const $e=u(Oe)`
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
`;function He({className:e}){const[r,n]=c.exports.useState(!0),a=()=>{n(!1)};return h(re,{id:"main-modal-root",className:e,open:r,onClose:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(ne,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(oe,{children:t(ae,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(se,{children:t(R,{onClick:a,children:"Close"})})]})}u(He)`
  
`;function Ie(n){var a=n,{className:e}=a,r=D(a,["className"]);const[o,s]=c.exports.useState(!0);return t(ie,{className:e,open:o,onClose:()=>{s(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}u(Ie)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function qe({className:e}){return t("div",{id:"",className:e})}const ze=u(qe)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`,w=v.createContext(void 0);function je(e){const[r,n]=c.exports.useState(!1),[a,o]=c.exports.useState([]),[s,i]=c.exports.useState([]),m={handleSet:p=>{fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?apikey=d98598e033ac1e0ad0a3335990d12579&q_track=${encodeURI(p.songtName)}&q_artist=${encodeURI(p.artistName)}`).then(f=>f.json()).then(f=>{var N,k,A;if((A=(k=(N=f==null?void 0:f.message)==null?void 0:N.body)==null?void 0:k.lyrics)==null?void 0:A.lyrics_body){let x=f.message.body.lyrics.lyrics_body;x=x.substring(0,x.indexOf("...")),n(x),i(x.split(/(?:\r\n|\r|\n)/g)),o(x.split(" "));let P=document.querySelector(".gsst_a");P&&P.dispatchEvent(new Event("click"))}})}};return t(w.Provider,{value:l({currLyrics:r,singles:a,lines:s},m),children:e.children})}function Ge({className:e}){const r=c.exports.useContext(w);c.exports.useEffect(()=>{window.onload=()=>{const o=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],s={childList:!1,attributes:!0,subtree:!1};function i(){n()}new MutationObserver(i).observe(o,s)}},[]);let n=()=>{setTimeout(()=>{let o=document.querySelectorAll(".gs-title");o&&o.forEach((s,i)=>{if(s.innerText.includes("Lyrics")){let d=s.innerText.replace("Lyrics | Musixmatch"," ");s.innerText=d;const m={artistName:d.split("-")[0],songtName:d.split("-")[1]};s.addEventListener("click",p=>{r.handleSet(m)})}else s.innerText.includes("Lyrics")||s.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&s.parentElement.parentElement.parentElement.remove()})},50)};function a(o){let s=document.querySelector("#gsc-i-id1");if(s)if(o.target.value.length<=1){let i=document.querySelector(".gsst_a");i&&i.dispatchEvent(new Event("click"))}else{s.value=o.target.value;let i=document.querySelectorAll(".gsc-search-box button")[0];i?setTimeout(()=>{i.dispatchEvent(new Event("click"))},100*Math.floor(Math.random()*4)):console.error("no gsc loaded")}else console.error("no gsc loaded")}return h("div",{id:"",className:e,children:[t(ce,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:a,autoFocus:!1,autoComplete:"on"}),t("div",{className:"gcse-search"})]})}const Ue=u(Ge)`

`;function We({className:e}){const r=c.exports.useContext(w);return t(_,{children:r.lines&&t("div",{id:"lyrics_body",className:e,children:r.lines.map(n=>t("p",{children:n},n[0]))})})}const Ke=u(We)`
  font-family: 'Assistant','Roboto', 'sans-serif';
  /* text-align: center; */
  font-size: 20px;
  padding: 10px;
  margin-top: 50px;
`;function Ve({className:e}){const r=c.exports.useContext(w);function n(a){a.preventDefault();let o=document.querySelectorAll(".gsc-search-box button")[0];o?o.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return h("div",{className:e,children:[!r.currLyrics&&h("div",{children:[h(y,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",t("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D0\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4"]}),t(y,{variant:"h3",className:"page-h3",children:"\u05DC\u05D9\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DE\u05D5\u05D6\u05D9\u05E7\u05D4"})]}),t(C,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:n,children:t(Ue,{})}),r.currLyrics&&t(Ke,{})]})}const Je=u(Ve)`

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

    
`;function Qe({className:e}){return t("div",{className:e,children:t(y,{variant:"h2",className:"page-h2",children:"About Page"})})}const Xe=u(Qe)`

`;function Ye({className:e}){return h("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(y,{variant:"h2",className:"page-h2",children:"404"}),t(y,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const Ze=u(Ye)`

`;function et({className:e}){const r=c.exports.useContext(E),n=c.exports.useContext(O),a=c.exports.useContext($),o=c.exports.useRef(null),s=le({key:"muirtl",stylisPlugins:[xe,ye]});function i(){d()}const d=()=>{const p=document.createElement("script");p.type="text/javascript",p.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",p.defer=!0,document.body.appendChild(p)};c.exports.useEffect(()=>{i()},[]);const m=p=>{a.toggleBanner(p)};return h("div",{className:e,ref:o,children:[t(ue,{value:s,children:h(de,{children:[t(Se,{}),t(Me,{className:"header"}),a.main.open&&h(F,{severity:"warning",className:"main-alert",children:[t(pe,{children:a.main.title}),a.main.message]}),t(Fe,{children:h(he,{children:[t(S,{path:"/",element:t(Je,{className:"page"})}),t(S,{path:"/about",element:t(Xe,{className:"page"})}),t(S,{path:"*",element:t(Ze,{className:"page"})})]})}),r.open&&r.child&&t($e,{className:"drawer"}),n.main.open&&t(me,{color:n.main.color||"primary"}),n.circular.open&&t(ge,{color:n.main.color||"primary"}),a.snackbar.open&&t(fe,{open:a.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(F,{onClose:()=>{m("snackbar")},severity:a.snackbar.severity,sx:{width:"100%"},children:a.snackbar.message})}),t(_e,{})]})}),t(ze,{})]})}const tt=u(et)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  color: ${e=>e.theme.palette.secondary.main};

  a{
      color: #fff;
      &hover{
        color: #fff;
      }
  }

  .page-h2{
    padding: 30px 0px 0px 0px;
    font-size: 80px; 
    font-weight: 400;
    color: ${e=>e.theme.palette.secondary.main};
    @media (max-width: 600px) {
      font-size: 46px;
    }
  }

  .page-h3{
    margin: 15px 0px 0px  0px;
    font-size: 40px; // 29
    font-weight: 500;
    color: ${e=>e.theme.palette.secondary.main};
    @media (max-width: 600px) {
      font-size: 22px;
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
`,rt=[Ce,we,Ee,je];function nt(e){return t(_,{children:rt.reduceRight((r,n)=>t(n,{children:r}),e.children)})}De.render(t(v.StrictMode,{children:t(nt,{children:t(ve,{theme:H,children:t(tt,{className:"app"})})})}),document.getElementById("root"));
