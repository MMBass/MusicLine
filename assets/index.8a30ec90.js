var T=Object.defineProperty,B=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var C=(e,t,n)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))w.call(t,n)&&C(e,n,t[n]);if(x)for(var n of x(t))S.call(t,n)&&C(e,n,t[n]);return e},p=(e,t)=>B(e,_(t));var y=(e,t)=>{var n={};for(var o in e)w.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&x)for(var o of x(e))t.indexOf(o)<0&&S.call(e,o)&&(n[o]=e[o]);return n};import{R as D,r as u,j as r,c as F,M as R,L as $,N,a as d,b as O,d as H,e as q,A as I,s as l,B as v,f as L,g as z,C as j,T as G,I as U,h as W,i as g,k as K,l as V,D as J,m as Q,n as X,o as Y,p as Z,q as ee,t as te,u as re,v as ne,H as oe,w as k,x as ae,y as se,z as E,E as ie,F as ce,S as le,G as ue,J as de,K as pe,O as he,P as me}from"./vendor.31590749.js";const ge=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};ge();const b=D.createContext(void 0);function fe(e){const[t,n]=u.exports.useState({}),a={toggleDrawer:(i,s,m="temporary",f)=>{n({open:i,anchor:s,permanent:m,child:f})}};return r(b.Provider,{value:c(c({},t),a),children:e.children})}const A=D.createContext(void 0);function ye(e){const[t,n]=u.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),i={createLoader:(s,m)=>{t.name&&n(p(c({},t),{[s]:void 0})),n(p(c({},t),{[s]:{open:!1,color:m||"primary"}}))},toggleLoader:s=>{t.name?n(p(c({},t),{[s]:p(c({},t.name),{open:!t.name.open})})):console.error("Loader does'nt exist. Name: "+s)}};return r(A.Provider,{value:c(c({},t),i),children:e.children})}const M=D.createContext(void 0);function xe(e){const[t,n]=u.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),i={createBanner:(s,m,f,h)=>{t[s]&&n(p(c({},t),{[s]:void 0})),n(p(c({},t),{[s]:{open:!1,severity:m||"success",title:f||"",mesaage:h||""}}))},toggleBanner:s=>{t[s]?n(p(c({},t),{[s]:p(c({},t[s]),{open:!t[s].open})})):console.error("Banner does'nt exist. Name: "+s)}};return r(M.Provider,{value:c(c({},t),i),children:e.children})}const P=F({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function De(){const[e,t]=u.exports.useState(P.palette.primary.light);return r("div",{className:"wrapper",children:r(R,{children:r("meta",{name:"theme-color",content:e})})})}const ve=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}];function be(){return r($,{children:ve.map((e,t)=>r(N,{to:e.url,children:d(O,{button:!0,children:[r(H,{primary:e.name}),r(q,{children:r(I,{})})]},e.name)},t))})}const Ee=l(be)`
  
`;function Ce({className:e}){return r(v,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}].map(n=>r(N,{to:n.url,children:r(L,{sx:{my:2},children:n.name})},n.name))})}const we=l(Ce)`
  
`,Se=n=>{var o=n,{className:e}=o,t=y(o,["className"]);const a=u.exports.useContext(b);return r(z,{position:"static",className:e,children:r(j,{maxWidth:"xl",children:d(G,{disableGutters:!0,children:[r(v,{sx:{display:{xs:"flex",md:"none"}},children:r(U,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{a.toggleDrawer(!0,"left","temporary",Ee)},color:"inherit",children:r(W,{})})}),r(g,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),r(we,{className:"nav-bar"})]})})})},ke=l(Se)`
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
`;function Ne(n){var o=n,{className:e}=o,t=y(o,["className"]);return r("div",{className:e,children:t.children})}const Le=l(Ne)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  background-color: ${e=>e.theme.palette.primary.light};
`;function Ae({className:e}){return r("div",{id:"FOOTER",className:e})}const Me=l(Ae)`
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

`;function Pe(n){var o=n,{className:e}=o,t=y(o,["className"]);const a=u.exports.useContext(b);return r(K,{className:e,anchor:a.anchor,open:a.open,variant:a.permanent,onClose:()=>{a.toggleDrawer(!1)},children:r(v,{className:"drawer-layout",sx:{width:a.anchor==="top"||a.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{a.toggleDrawer(!1)},children:r(a.child,{})})})}const Te=l(Pe)`
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
`;function Be({className:e}){const[t,n]=u.exports.useState(!0),o=()=>{n(!1)};return d(V,{id:"main-modal-root",className:e,open:t,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[r(J,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),r(Q,{children:r(X,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),r(Y,{children:r(L,{onClick:o,children:"Close"})})]})}l(Be)`
  
`;function _e(n){var o=n,{className:e}=o,t=y(o,["className"]);const[a,i]=u.exports.useState(!0);return r(Z,{className:e,open:a,onClose:()=>{i(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:t.children})}l(_e)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function Fe({className:e}){return r("div",{id:"",className:e})}const Re=l(Fe)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function $e({className:e}){function t(n){let o=document.querySelector("#gsc-i-id1");if(o)if(n.target.value.length<=1){let a=document.querySelector(".gsst_a");a&&a.dispatchEvent(new Event("click"))}else{o.value=n.target.value;let a=document.querySelectorAll(".gsc-search-box button")[0];a?setTimeout(()=>{a.dispatchEvent(new Event("click"))},100*Math.floor(Math.random()*4)):console.error("no gsc loaded")}else console.error("no gsc loaded")}return d("div",{id:"",className:e,children:[r(ee,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:t,autoFocus:!0,autoComplete:"on"}),r("div",{className:"gcse-search"})]})}const Oe=l($e)`
  
`;te.create({baseURL:"https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search",headers:{},params:{apikey:"d98598e033ac1e0ad0a3335990d12579",page_size:"10",page:"1",format:"json"}});function He(e){fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?apikey=d98598e033ac1e0ad0a3335990d12579&q_track=${encodeURI(e.songtName)}&q_artist=${encodeURI(e.artistName)}`).then(t=>t.json()).then(t=>{var n,o,a;if((a=(o=(n=t==null?void 0:t.message)==null?void 0:n.body)==null?void 0:o.lyrics)==null?void 0:a.lyrics_body){let i=document.querySelector(".gsst_a");i&&i.dispatchEvent(new Event("click"));let s=t.message.body.lyrics.lyrics_body;s=s.substring(0,s.indexOf("...")),document.querySelector("#no_lyrics").style.display="none",document.querySelector("#lyrics").innerHTML=`
              <div>
                ${s.replace(/(?:\r\n|\r|\n)/g,"<br>")}
              </div>
            `}})}window.onload=()=>{const e=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],t={childList:!1,attributes:!0,subtree:!1};function n(){qe()}new MutationObserver(n).observe(e,t)};let qe=()=>{setTimeout(()=>{let e=document.querySelectorAll(".gs-title");e&&e.forEach((t,n)=>{if(t.innerText.includes("Lyrics")){let o=t.innerText.replace("Lyrics | Musixmatch"," ");t.innerText=o;const a={artistName:o.split("-")[0],songtName:o.split("-")[1]};t.addEventListener("click",i=>{He(a)})}else t.innerText.includes("Lyrics")||t.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&t.parentElement.parentElement.parentElement.remove()})},50)};function Ie({className:e}){function t(n){n.preventDefault();let o=document.querySelectorAll(".gsc-search-box button")[0];o?o.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return d("div",{className:e,children:[d("div",{id:"no_lyrics",children:[d(g,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",r("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D0\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4"]}),r(g,{variant:"h3",className:"page-h3",children:"\u05DC\u05D9\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DE\u05D5\u05D6\u05D9\u05E7\u05D4"})]}),r(v,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:t,children:r(Oe,{})}),r("div",{id:"lyrics"})]})}const ze=l(Ie)`
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

    
`;function je({className:e}){return r("div",{className:e,children:r(g,{variant:"h2",className:"page-h2",children:"About Page"})})}const Ge=l(je)`

`;function Ue({className:e}){return d("div",{id:"NO_MATCH_WRAPPER",className:e,children:[r(g,{variant:"h2",className:"page-h2",children:"404"}),r(g,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const We=l(Ue)`

`;function Ke({className:e}){const t=u.exports.useContext(b),n=u.exports.useContext(A),o=u.exports.useContext(M),a=u.exports.useRef(null),i=re({key:"muirtl",stylisPlugins:[ue,de]});function s(){m()}const m=()=>{const h=document.createElement("script");h.type="text/javascript",h.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",h.defer=!0,document.body.appendChild(h)};u.exports.useEffect(()=>{s()},[]);const f=h=>{o.toggleBanner(h)};return d("div",{className:e,ref:a,children:[r(ne,{value:i,children:d(oe,{children:[r(De,{}),r(ke,{className:"header"}),o.main.open&&d(k,{severity:"warning",className:"main-alert",children:[r(ae,{children:o.main.title}),o.main.message]}),r(Le,{children:d(se,{children:[r(E,{path:"/",element:r(ze,{className:"page"})}),r(E,{path:"/about",element:r(Ge,{className:"page"})}),r(E,{path:"*",element:r(We,{className:"page"})})]})}),t.open&&t.child&&r(Te,{className:"drawer"}),n.main.open&&r(ie,{color:n.main.color||"primary"}),n.circular.open&&r(ce,{color:n.main.color||"primary"}),o.snackbar.open&&r(le,{open:o.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:r(k,{onClose:()=>{f("snackbar")},severity:o.snackbar.severity,sx:{width:"100%"},children:o.snackbar.message})}),r(Me,{})]})}),r(Re,{})]})}const Ve=l(Ke)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  color: ${e=>e.theme.palette.secondary.main};

  .page-h2{
    padding: 30px 0px 0px 0px;
    font-size: 80px; 
    font-weight: 400;
    color: ${e=>e.theme.palette.secondary.main};
    @media (max-width: 600px) {
      font-size: 50px;
    }
  }

  .page-h3{
    margin: 15px 0px 0px  0px;
    font-size: 40px; // 29
    font-weight: 500;
    color: ${e=>e.theme.palette.secondary.main};
    @media (max-width: 600px) {
      font-size: 26px;
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
`,Je=[fe,xe,ye];function Qe(e){return r(pe,{children:Je.reduceRight((t,n)=>r(n,{children:t}),e.children)})}he.render(r(D.StrictMode,{children:r(Qe,{children:r(me,{theme:P,children:r(Ve,{className:"app"})})})}),document.getElementById("root"));
