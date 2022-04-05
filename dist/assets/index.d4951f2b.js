var q=Object.defineProperty,j=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var F=(e,r,n)=>r in e?q(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,u=(e,r)=>{for(var n in r||(r={}))R.call(r,n)&&F(e,n,r[n]);if(C)for(var n of C(r))_.call(r,n)&&F(e,n,r[n]);return e},m=(e,r)=>j(e,G(r));var b=(e,r)=>{var n={};for(var a in e)R.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&C)for(var a of C(e))r.indexOf(a)<0&&_.call(e,a)&&(n[a]=e[a]);return n};import{R as v,r as l,j as t,c as U,M as W,L as K,N as k,a as p,b as V,d as J,e as Q,A as X,s as d,B as w,f as $,g as Y,C as Z,T as ee,I as te,h as re,i as y,k as ne,l as oe,D as ae,m as se,n as ie,o as ce,p as le,q as ue,G as L,F as H,t as de,u as pe,v as he,H as me,w as O,x as fe,y as xe,z as N,E as ge,J as ye,S as De,K as ve,O as be,P as Ee,Q as Ce}from"./vendor.d39f49f2.js";const we=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};we();const S=v.createContext(void 0);function Se(e){const[r,n]=l.exports.useState({}),i={openDrawer:(c,s,f="temporary",x)=>{n({open:c,anchor:s,permanent:f,child:x})},closeDrawer:(c,s,f="temporary",x)=>{n({open:c,anchor:s,permanent:f,child:x})}};return t(S.Provider,{value:u(u({},r),i),children:e.children})}const A=v.createContext(void 0);function Le(e){const[r,n]=l.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),c={createLoader:(s,f)=>{r[s]&&n(m(u({},r),{[s]:void 0})),n(m(u({},r),{[s]:{open:!1,color:f||"primary"}}))},openLoader:s=>{r[s]?n(m(u({},r),{[s]:m(u({},r[s]),{open:!0})})):console.error("Loader does'nt exist. Name: "+s)},closeLoader:s=>{r[s]?n(m(u({},r),{[s]:m(u({},r[s]),{open:!1})})):console.error("Loader does'nt exist. Name: "+s)}};return t(A.Provider,{value:u(u({},r),c),children:e.children})}const z=v.createContext(void 0);function Ne(e){const[r,n]=l.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),c={createBanner:(s,f,x,h)=>{r[s]&&n(m(u({},r),{[s]:void 0})),n(m(u({},r),{[s]:{open:!1,severity:f||"success",title:x||"",mesaage:h||""}}))},openBanner:s=>{r[s]?n(m(u({},r),{[s]:m(u({},r[s]),{open:!0})})):console.error("Banner does'nt exist. Name: "+s)},closeBanner:s=>{r[s]?n(m(u({},r),{[s]:m(u({},r[s]),{open:!1})})):console.error("Banner does'nt exist. Name: "+s)}};return t(z.Provider,{value:u(u({},r),c),children:e.children})}const I=U({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function ke(){const[e,r]=l.exports.useState(I.palette.primary.light);return t("div",{className:"wrapper",children:t(W,{children:t("meta",{name:"theme-color",content:e})})})}const Ae=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}];function Be(){return t(K,{children:Ae.map((e,r)=>t(k,{to:e.url,children:p(V,{button:!0,children:[t(J,{primary:e.name}),t(Q,{children:t(X,{})})]},e.name)},r))})}const Me=d(Be)`
  
`,E=v.createContext(void 0);function Pe(e){const r=l.exports.useContext(A),[n,a]=l.exports.useState(!1),[o,i]=l.exports.useState([]),[c,s]=l.exports.useState([]),x={handleSet:h=>{r.openLoader("main"),fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?apikey=d98598e033ac1e0ad0a3335990d12579&q_track=${encodeURI(h.songtName)}&q_artist=${encodeURI(h.artistName)}`).then(g=>g.json()).then(g=>{var B,M,P;if(r.closeLoader("main"),(P=(M=(B=g==null?void 0:g.message)==null?void 0:B.body)==null?void 0:M.lyrics)==null?void 0:P.lyrics_body){let D=g.message.body.lyrics.lyrics_body;D=D.substring(0,D.indexOf("...")),a(D),s(D.split(/(?:\r\n|\r|\n)/g)),i(D.split(" "));let T=document.querySelector(".gsst_a");T&&T.dispatchEvent(new Event("click"))}})}};return t(E.Provider,{value:u({currLyrics:n,singles:o,lines:c},x),children:e.children})}function Te({className:e}){return l.exports.useContext(E),t(w,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}].map(n=>t(k,{to:n.url,children:t($,{sx:{my:2},children:n.name})},n.name))})}const Fe=d(Te)`
  
`,Re=n=>{var a=n,{className:e}=a,r=b(a,["className"]);const o=l.exports.useContext(S);return t(Y,{position:"static",className:e,children:t(Z,{maxWidth:"xl",children:p(ee,{disableGutters:!0,children:[t(w,{sx:{display:{xs:"flex",md:"none"}},children:t(te,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{o.openDrawer(!0,"left","temporary",Me)},color:"inherit",children:t(re,{})})}),t(k,{to:"/",children:t(y,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),t(Fe,{className:"nav-bar"})]})})})},_e=d(Re)`
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
`;function Oe(n){var a=n,{className:e}=a,r=b(a,["className"]);return t("div",{className:e,children:r.children})}const $e=d(Oe)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  padding: 35px;
  background-color: ${e=>e.theme.palette.primary.light};
`;function He({className:e}){return t("div",{id:"FOOTER",className:e})}const ze=d(He)`
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

`;function Ie(n){var a=n,{className:e}=a,r=b(a,["className"]);const o=l.exports.useContext(S);return t(ne,{className:e,anchor:o.anchor,open:o.open,variant:o.permanent,onClose:()=>{o.closeDrawer(!1)},children:t(w,{className:"drawer-layout",sx:{width:o.anchor==="top"||o.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{o.closeDrawer(!1)},children:t(o.child,{})})})}const qe=d(Ie)`
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
`;function je({className:e}){const[r,n]=l.exports.useState(!0),a=()=>{n(!1)};return p(oe,{id:"main-modal-root",className:e,open:r,onClose:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(ae,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(se,{children:t(ie,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(ce,{children:t($,{onClick:a,children:"Close"})})]})}d(je)`
  
`;function Ge(n){var a=n,{className:e}=a,r=b(a,["className"]);const[o,i]=l.exports.useState(!0);return t(le,{className:e,open:o,onClose:()=>{i(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}d(Ge)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function Ue({className:e}){return t("div",{id:"",className:e})}const We=d(Ue)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function Ke({className:e}){const r=l.exports.useContext(E);l.exports.useEffect(()=>{window.onload=()=>{const o=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],i={childList:!1,attributes:!0,subtree:!1};function c(){n()}new MutationObserver(c).observe(o,i)}},[]);let n=()=>{setTimeout(()=>{let o=document.querySelectorAll(".gs-title");o&&o.forEach((i,c)=>{if(i.innerText.includes("Lyrics")){let s=i.innerText.replace("Lyrics | Musixmatch"," ");i.innerText=s;const f={artistName:s.split("-")[0],songtName:s.split("-")[1]};i.addEventListener("click",x=>{r.handleSet(f)})}else i.innerText.includes("Lyrics")||i.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&i.parentElement.parentElement.parentElement.remove()})},50)};function a(o){let i=document.querySelector("#gsc-i-id1");if(i)if(o.target.value.length<=1){let c=document.querySelector(".gsst_a");c&&c.dispatchEvent(new Event("click"))}else{i.value=o.target.value;let c=document.querySelectorAll(".gsc-search-box button")[0];c?setTimeout(()=>{c.dispatchEvent(new Event("click"))},100*Math.floor(Math.random()*4)):console.error("no gsc loaded, try reload the page")}else console.error("no gsc loaded, try reload the page")}return p("div",{id:"",className:e,children:[t(ue,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:a,autoFocus:!1,autoComplete:"off"}),t("div",{className:"gcse-search"})]})}const Ve=d(Ke)`
  *,::before,::after{
      background-color: '#ffffff0';
  }
`;function Je({className:e}){const r=l.exports.useContext(E);return t(L,{container:!0,spacing:2,children:r.lines&&t("div",{id:"lyrics_body",className:e,children:r.lines.map((n,a)=>p(H,{children:[t(L,{className:"lyrics-line",item:!0,children:n.split(" ").map((o,i)=>t(de,{title:p(v.Fragment,{className:"toolTip-title",children:[t(y,{color:"inherit",children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD:"}),t("p",{children:"\u05EA\u05E8\u05D2\u05D5\u05DD"}),t("hr",{}),t("p",{children:"\u05EA\u05E8\u05D2\u05D5\u05DD"}),t("hr",{}),t("p",{children:"\u05EA\u05E8\u05D2\u05D5\u05DD"})]}),arrow:!0,sx:{color:"white"},children:t("p",{className:"single-lyric",children:o})}))},n[0]+a.toString()),t(L,{className:"lyrics-line",item:!0,children:n.split(" ").map((o,i)=>t("small",{className:"single-trans",children:"\u05D0\u05D9\u05DF-\u05EA\u05E8\u05D2\u05D5\u05DD"}))},n[0]+a.toString())]}))})})}const Qe=d(Je)`
  font-family: 'Assistant','Roboto', 'sans-serif';
  /* text-align: center; */
  font-size: 20px;
  padding: 10px;
  padding-inline-start: 50px;
  margin-top: 50px;

  @media (max-width: 600px) {
         padding-inline-start: 30px;
  }

  .lyrics-line{
    padding: 6px 0px;
  }

  .single-lyric, .single-trans{
     
          display: inline;
          min-width:unset;
          padding: 0px 5px;
          text-transform: none;
          font-size: 14px;
  }

  .single-lyric{
    cursor: pointer;
          font-size: 25px;
  }

  .toolTip-title{
    direction: ltr;
  }

hr{
  color: #aeaeae;
}
`;function Xe({className:e}){const r=l.exports.useContext(E);function n(a){a.preventDefault();let o=document.querySelectorAll(".gsc-search-box button")[0];o?o.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return p("div",{className:e,children:[!r.currLyrics&&p("div",{children:[p(y,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",t("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D0\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4"]}),t(y,{variant:"h3",className:"page-h3",children:"\u05DC\u05D9\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DE\u05D5\u05D6\u05D9\u05E7\u05D4"})]}),t(w,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:n,children:t(Ve,{})}),r.currLyrics&&t(Qe,{className:"lyrics-body"})]})}const Ye=d(Xe)`

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

    .lyrics-body, .MuiGrid-root, .muirtl-mhc70k-MuiGrid-root{
        direction: ltr;
    }
    
`;function Ze({className:e}){return t("div",{className:e,children:t(y,{variant:"h2",className:"page-h2",children:"About Page"})})}const et=d(Ze)`

`;function tt({className:e}){return p("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(y,{variant:"h2",className:"page-h2",children:"404"}),t(y,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const rt=d(tt)`

`;function nt({className:e}){const r=l.exports.useContext(S),n=l.exports.useContext(A),a=l.exports.useContext(z),o=l.exports.useRef(null),i=pe({key:"muirtl",stylisPlugins:[ve,be]});function c(){s()}const s=()=>{const h=document.createElement("script");h.type="text/javascript",h.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",h.defer=!0,document.body.appendChild(h)};l.exports.useEffect(()=>{c()},[]);const f=h=>{a.closeBanner(h)};function x(h){h.preventDefault();let g=document.querySelectorAll(".gsc-search-box button")[0];g?g.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return p("div",{className:e,ref:o,children:[t(he,{value:i,children:p(me,{children:[t(ke,{}),t(_e,{className:"header",HandleSubmit:x}),a.main.open&&p(O,{severity:"warning",className:"main-alert",children:[t(fe,{children:a.main.title}),a.main.message]}),t($e,{children:p(xe,{children:[t(N,{path:"/",element:t(Ye,{className:"page"})}),t(N,{path:"/about",element:t(et,{className:"page"})}),t(N,{path:"*",element:t(rt,{className:"page"})})]})}),r.open&&r.child&&t(qe,{className:"drawer"}),n.main.open&&t(ge,{color:n.main.color||"primary"}),n.circular.open&&t(ye,{color:n.main.color||"primary"}),a.snackbar.open&&t(De,{open:a.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(O,{onClose:()=>{f("snackbar")},severity:a.snackbar.severity,sx:{width:"100%"},children:a.snackbar.message})}),t(ze,{})]})}),t(We,{})]})}const ot=d(nt)`
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
`,at=[Se,Ne,Le,Pe];function st(e){return t(H,{children:at.reduceRight((r,n)=>t(n,{children:r}),e.children)})}Ee.render(t(v.StrictMode,{children:t(st,{children:t(Ce,{theme:I,children:t(ot,{className:"app"})})})}),document.getElementById("root"));
