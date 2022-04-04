var q=Object.defineProperty,z=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var T=(e,r,o)=>r in e?q(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,u=(e,r)=>{for(var o in r||(r={}))F.call(r,o)&&T(e,o,r[o]);if(E)for(var o of E(r))R.call(r,o)&&T(e,o,r[o]);return e},h=(e,r)=>z(e,j(r));var v=(e,r)=>{var o={};for(var n in e)F.call(e,n)&&r.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&E)for(var n of E(e))r.indexOf(n)<0&&R.call(e,n)&&(o[n]=e[n]);return o};import{R as b,r as l,j as t,c as G,M as U,L as W,N,a as f,b as K,d as V,e as J,A as Q,s as d,B as w,f as O,g as X,C as Y,T as Z,I as ee,h as te,i as D,k as re,l as oe,D as ne,m as ae,n as se,o as ie,p as ce,q as le,F as $,t as ue,u as de,H as pe,v as _,w as he,x as me,y as S,z as fe,E as xe,S as ge,G as ye,J as De,K as ve,O as be}from"./vendor.2ab2e3b0.js";const Ce=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=o(a);fetch(a.href,i)}};Ce();const L=b.createContext(void 0);function Ee(e){const[r,o]=l.exports.useState({}),i={openDrawer:(c,s,m="temporary",x)=>{o({open:c,anchor:s,permanent:m,child:x})},closeDrawer:(c,s,m="temporary",x)=>{o({open:c,anchor:s,permanent:m,child:x})}};return t(L.Provider,{value:u(u({},r),i),children:e.children})}const k=b.createContext(void 0);function we(e){const[r,o]=l.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),c={createLoader:(s,m)=>{r[s]&&o(h(u({},r),{[s]:void 0})),o(h(u({},r),{[s]:{open:!1,color:m||"primary"}}))},openLoader:s=>{r[s]?o(h(u({},r),{[s]:h(u({},r[s]),{open:!0})})):console.error("Loader does'nt exist. Name: "+s)},closeLoader:s=>{r[s]?o(h(u({},r),{[s]:h(u({},r[s]),{open:!1})})):console.error("Loader does'nt exist. Name: "+s)}};return t(k.Provider,{value:u(u({},r),c),children:e.children})}const H=b.createContext(void 0);function Le(e){const[r,o]=l.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),c={createBanner:(s,m,x,p)=>{r[s]&&o(h(u({},r),{[s]:void 0})),o(h(u({},r),{[s]:{open:!1,severity:m||"success",title:x||"",mesaage:p||""}}))},openBanner:s=>{r[s]?o(h(u({},r),{[s]:h(u({},r[s]),{open:!0})})):console.error("Banner does'nt exist. Name: "+s)},closeBanner:s=>{r[s]?o(h(u({},r),{[s]:h(u({},r[s]),{open:!1})})):console.error("Banner does'nt exist. Name: "+s)}};return t(H.Provider,{value:u(u({},r),c),children:e.children})}const I=G({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function Se(){const[e,r]=l.exports.useState(I.palette.primary.light);return t("div",{className:"wrapper",children:t(U,{children:t("meta",{name:"theme-color",content:e})})})}const Ne=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}];function ke(){return t(W,{children:Ne.map((e,r)=>t(N,{to:e.url,children:f(K,{button:!0,children:[t(V,{primary:e.name}),t(J,{children:t(Q,{})})]},e.name)},r))})}const Ae=d(ke)`
  
`,C=b.createContext(void 0);function Be(e){const r=l.exports.useContext(k),[o,n]=l.exports.useState(!1),[a,i]=l.exports.useState([]),[c,s]=l.exports.useState([]),x={handleSet:p=>{r.openLoader("main"),fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?apikey=d98598e033ac1e0ad0a3335990d12579&q_track=${encodeURI(p.songtName)}&q_artist=${encodeURI(p.artistName)}`).then(g=>g.json()).then(g=>{var A,B,P;if(r.closeLoader("main"),(P=(B=(A=g==null?void 0:g.message)==null?void 0:A.body)==null?void 0:B.lyrics)==null?void 0:P.lyrics_body){let y=g.message.body.lyrics.lyrics_body;y=y.substring(0,y.indexOf("...")),n(y),s(y.split(/(?:\r\n|\r|\n)/g)),i(y.split(" "));let M=document.querySelector(".gsst_a");M&&M.dispatchEvent(new Event("click"))}})}};return t(C.Provider,{value:u({currLyrics:o,singles:a,lines:c},x),children:e.children})}function Pe({className:e}){return l.exports.useContext(C),t(w,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}].map(o=>t(N,{to:o.url,children:t(O,{sx:{my:2},children:o.name})},o.name))})}const Me=d(Pe)`
  
`,Te=o=>{var n=o,{className:e}=n,r=v(n,["className"]);const a=l.exports.useContext(L);return t(X,{position:"static",className:e,children:t(Y,{maxWidth:"xl",children:f(Z,{disableGutters:!0,children:[t(w,{sx:{display:{xs:"flex",md:"none"}},children:t(ee,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{a.openDrawer(!0,"left","temporary",Ae)},color:"inherit",children:t(te,{})})}),t(N,{to:"/",children:t(D,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),t(Me,{className:"nav-bar"})]})})})},Fe=d(Te)`
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
`;function Re(o){var n=o,{className:e}=n,r=v(n,["className"]);return t("div",{className:e,children:r.children})}const _e=d(Re)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  padding: 35px;
  background-color: ${e=>e.theme.palette.primary.light};
`;function Oe({className:e}){return t("div",{id:"FOOTER",className:e})}const $e=d(Oe)`
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

`;function He(o){var n=o,{className:e}=n,r=v(n,["className"]);const a=l.exports.useContext(L);return t(re,{className:e,anchor:a.anchor,open:a.open,variant:a.permanent,onClose:()=>{a.closeDrawer(!1)},children:t(w,{className:"drawer-layout",sx:{width:a.anchor==="top"||a.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{a.closeDrawer(!1)},children:t(a.child,{})})})}const Ie=d(He)`
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
`;function qe({className:e}){const[r,o]=l.exports.useState(!0),n=()=>{o(!1)};return f(oe,{id:"main-modal-root",className:e,open:r,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(ne,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(ae,{children:t(se,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(ie,{children:t(O,{onClick:n,children:"Close"})})]})}d(qe)`
  
`;function ze(o){var n=o,{className:e}=n,r=v(n,["className"]);const[a,i]=l.exports.useState(!0);return t(ce,{className:e,open:a,onClose:()=>{i(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}d(ze)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function je({className:e}){return t("div",{id:"",className:e})}const Ge=d(je)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function Ue({className:e}){const r=l.exports.useContext(C);l.exports.useEffect(()=>{window.onload=()=>{const a=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],i={childList:!1,attributes:!0,subtree:!1};function c(){o()}new MutationObserver(c).observe(a,i)}},[]);let o=()=>{setTimeout(()=>{let a=document.querySelectorAll(".gs-title");a&&a.forEach((i,c)=>{if(i.innerText.includes("Lyrics")){let s=i.innerText.replace("Lyrics | Musixmatch"," ");i.innerText=s;const m={artistName:s.split("-")[0],songtName:s.split("-")[1]};i.addEventListener("click",x=>{r.handleSet(m)})}else i.innerText.includes("Lyrics")||i.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&i.parentElement.parentElement.parentElement.remove()})},50)};function n(a){let i=document.querySelector("#gsc-i-id1");if(i)if(a.target.value.length<=1){let c=document.querySelector(".gsst_a");c&&c.dispatchEvent(new Event("click"))}else{i.value=a.target.value;let c=document.querySelectorAll(".gsc-search-box button")[0];c?setTimeout(()=>{c.dispatchEvent(new Event("click"))},100*Math.floor(Math.random()*4)):console.error("no gsc loaded, try reload the page")}else console.error("no gsc loaded, try reload the page")}return f("div",{id:"",className:e,children:[t(le,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:n,autoFocus:!1,autoComplete:"on"}),t("div",{className:"gcse-search"})]})}const We=d(Ue)`
  *,::before,::after{
      background-color: '#ffffff0';
  }
`;function Ke({className:e}){const r=l.exports.useContext(C);return t($,{children:r.lines&&t("div",{id:"lyrics_body",className:e,children:r.lines.map((o,n)=>t("p",{children:o},o[0]+n.toString()))})})}const Ve=d(Ke)`
  font-family: 'Assistant','Roboto', 'sans-serif';
  /* text-align: center; */
  font-size: 20px;
  padding: 10px;
  margin-top: 50px;
`;function Je({className:e}){const r=l.exports.useContext(C);function o(n){n.preventDefault();let a=document.querySelectorAll(".gsc-search-box button")[0];a?a.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return f("div",{className:e,children:[!r.currLyrics&&f("div",{children:[f(D,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",t("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D0\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4"]}),t(D,{variant:"h3",className:"page-h3",children:"\u05DC\u05D9\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DE\u05D5\u05D6\u05D9\u05E7\u05D4"})]}),t(w,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:o,children:t(We,{})}),r.currLyrics&&t(Ve,{})]})}const Qe=d(Je)`

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

    
`;function Xe({className:e}){return t("div",{className:e,children:t(D,{variant:"h2",className:"page-h2",children:"About Page"})})}const Ye=d(Xe)`

`;function Ze({className:e}){return f("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(D,{variant:"h2",className:"page-h2",children:"404"}),t(D,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const et=d(Ze)`

`;function tt({className:e}){const r=l.exports.useContext(L),o=l.exports.useContext(k),n=l.exports.useContext(H),a=l.exports.useRef(null),i=ue({key:"muirtl",stylisPlugins:[ye,De]});function c(){s()}const s=()=>{const p=document.createElement("script");p.type="text/javascript",p.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",p.defer=!0,document.body.appendChild(p)};l.exports.useEffect(()=>{c()},[]);const m=p=>{n.closeBanner(p)};function x(p){p.preventDefault();let g=document.querySelectorAll(".gsc-search-box button")[0];g?g.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return f("div",{className:e,ref:a,children:[t(de,{value:i,children:f(pe,{children:[t(Se,{}),t(Fe,{className:"header",HandleSubmit:x}),n.main.open&&f(_,{severity:"warning",className:"main-alert",children:[t(he,{children:n.main.title}),n.main.message]}),t(_e,{children:f(me,{children:[t(S,{path:"/",element:t(Qe,{className:"page"})}),t(S,{path:"/about",element:t(Ye,{className:"page"})}),t(S,{path:"*",element:t(et,{className:"page"})})]})}),r.open&&r.child&&t(Ie,{className:"drawer"}),o.main.open&&t(fe,{color:o.main.color||"primary"}),o.circular.open&&t(xe,{color:o.main.color||"primary"}),n.snackbar.open&&t(ge,{open:n.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(_,{onClose:()=>{m("snackbar")},severity:n.snackbar.severity,sx:{width:"100%"},children:n.snackbar.message})}),t($e,{})]})}),t(Ge,{})]})}const rt=d(tt)`
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
`,ot=[Ee,Le,we,Be];function nt(e){return t($,{children:ot.reduceRight((r,o)=>t(o,{children:r}),e.children)})}ve.render(t(b.StrictMode,{children:t(nt,{children:t(be,{theme:I,children:t(rt,{className:"app"})})})}),document.getElementById("root"));
