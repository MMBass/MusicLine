var q=Object.defineProperty,j=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var R=(e,r,n)=>r in e?q(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,u=(e,r)=>{for(var n in r||(r={}))_.call(r,n)&&R(e,n,r[n]);if(w)for(var n of w(r))O.call(r,n)&&R(e,n,r[n]);return e},m=(e,r)=>j(e,G(r));var v=(e,r)=>{var n={};for(var a in e)_.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&w)for(var a of w(e))r.indexOf(a)<0&&O.call(e,a)&&(n[a]=e[a]);return n};import{R as b,r as l,j as t,c as U,M as W,L as K,N as k,a as p,b as V,d as J,e as Q,A as X,s as d,B as E,f as H,g as Y,C as Z,T as ee,I as te,h as re,i as g,k as ne,l as oe,D as ae,m as se,n as ie,o as ce,p as le,q as ue,t as de,F as A,G as S,u as pe,v as he,H as me,w as $,x as fe,y as xe,z as N,E as ye,J as ge,S as De,K as ve,O as be,P as Ee,Q as Ce}from"./vendor.d39f49f2.js";const we=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};we();const L=b.createContext(void 0);function Le(e){const[r,n]=l.exports.useState({}),s={openDrawer:(c,i,f="temporary",x)=>{n({open:c,anchor:i,permanent:f,child:x})},closeDrawer:(c,i,f="temporary",x)=>{n({open:c,anchor:i,permanent:f,child:x})}};return t(L.Provider,{value:u(u({},r),s),children:e.children})}const M=b.createContext(void 0);function Se(e){const[r,n]=l.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),c={createLoader:(i,f)=>{r[i]&&n(m(u({},r),{[i]:void 0})),n(m(u({},r),{[i]:{open:!1,color:f||"primary"}}))},openLoader:i=>{r[i]?n(m(u({},r),{[i]:m(u({},r[i]),{open:!0})})):console.error("Loader does'nt exist. Name: "+i)},closeLoader:i=>{r[i]?n(m(u({},r),{[i]:m(u({},r[i]),{open:!1})})):console.error("Loader does'nt exist. Name: "+i)}};return t(M.Provider,{value:u(u({},r),c),children:e.children})}const z=b.createContext(void 0);function Ne(e){const[r,n]=l.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),c={createBanner:(i,f,x,h)=>{r[i]&&n(m(u({},r),{[i]:void 0})),n(m(u({},r),{[i]:{open:!1,severity:f||"success",title:x||"",mesaage:h||""}}))},openBanner:i=>{r[i]?n(m(u({},r),{[i]:m(u({},r[i]),{open:!0})})):console.error("Banner does'nt exist. Name: "+i)},closeBanner:i=>{r[i]?n(m(u({},r),{[i]:m(u({},r[i]),{open:!1})})):console.error("Banner does'nt exist. Name: "+i)}};return t(z.Provider,{value:u(u({},r),c),children:e.children})}const I=U({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function ke(){const[e,r]=l.exports.useState(I.palette.primary.light);return t("div",{className:"wrapper",children:t(W,{children:t("meta",{name:"theme-color",content:e})})})}const Ae=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}];function Me(){return t(K,{children:Ae.map((e,r)=>t(k,{to:e.url,children:p(V,{button:!0,children:[t(J,{primary:e.name}),t(Q,{children:t(X,{})})]},e.name)},r))})}const Te=d(Me)`
  
`,C=b.createContext(void 0);function Be(e){const r=l.exports.useContext(M),[n,a]=l.exports.useState(!1),[o,s]=l.exports.useState([]),[c,i]=l.exports.useState([]),x={handleSet:h=>{r.openLoader("main"),fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?apikey=d98598e033ac1e0ad0a3335990d12579&q_track=${encodeURI(h.songtName)}&q_artist=${encodeURI(h.artistName)}`).then(y=>y.json()).then(y=>{var T,B,P;if(r.closeLoader("main"),(P=(B=(T=y==null?void 0:y.message)==null?void 0:T.body)==null?void 0:B.lyrics)==null?void 0:P.lyrics_body){let D=y.message.body.lyrics.lyrics_body;D=D.substring(0,D.indexOf("...")),a(D),i(D.split(/(?:\r\n|\r|\n)/g)),s(D.split(" "));let F=document.querySelector(".gsst_a");F&&F.dispatchEvent(new Event("click"))}})}};return t(C.Provider,{value:u({currLyrics:n,singles:o,lines:c},x),children:e.children})}function Pe({className:e}){return l.exports.useContext(C),t(E,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}].map(n=>t(k,{to:n.url,children:t(H,{sx:{my:2},children:n.name})},n.name))})}const Fe=d(Pe)`
  
`,Re=n=>{var a=n,{className:e}=a,r=v(a,["className"]);const o=l.exports.useContext(L);return t(Y,{position:"static",className:e,children:t(Z,{maxWidth:"xl",children:p(ee,{disableGutters:!0,children:[t(E,{sx:{display:{xs:"flex",md:"none"}},children:t(te,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{o.openDrawer(!0,"left","temporary",Te)},color:"inherit",children:t(re,{})})}),t(k,{to:"/",children:t(g,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),t(Fe,{className:"nav-bar"})]})})})},_e=d(Re)`
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
`;function Oe(n){var a=n,{className:e}=a,r=v(a,["className"]);return t("div",{className:e,children:r.children})}const $e=d(Oe)`
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

`;function Ie(n){var a=n,{className:e}=a,r=v(a,["className"]);const o=l.exports.useContext(L);return t(ne,{className:e,anchor:o.anchor,open:o.open,variant:o.permanent,onClose:()=>{o.closeDrawer(!1)},children:t(E,{className:"drawer-layout",sx:{width:o.anchor==="top"||o.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{o.closeDrawer(!1)},children:t(o.child,{})})})}const qe=d(Ie)`
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
`;function je({className:e}){const[r,n]=l.exports.useState(!0),a=()=>{n(!1)};return p(oe,{id:"main-modal-root",className:e,open:r,onClose:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(ae,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(se,{children:t(ie,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(ce,{children:t(H,{onClick:a,children:"Close"})})]})}d(je)`
  
`;function Ge(n){var a=n,{className:e}=a,r=v(a,["className"]);const[o,s]=l.exports.useState(!0);return t(le,{className:e,open:o,onClose:()=>{s(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}d(Ge)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function Ue({className:e}){return t("div",{id:"",className:e})}const We=d(Ue)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function Ke({className:e}){const r=l.exports.useContext(C);l.exports.useEffect(()=>{window.onload=()=>{const o=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],s={childList:!1,attributes:!0,subtree:!1};function c(){n()}new MutationObserver(c).observe(o,s)}},[]);let n=()=>{setTimeout(()=>{let o=document.querySelectorAll(".gs-title");o&&o.forEach((s,c)=>{if(s.innerText.includes("Lyrics")){let i=s.innerText.replace("Lyrics | Musixmatch"," ");s.innerText=i;const f={artistName:i.split("-")[0],songtName:i.split("-")[1]};s.addEventListener("click",x=>{r.handleSet(f)})}else s.innerText.includes("Lyrics")||s.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&s.parentElement.parentElement.parentElement.remove()})},50)};function a(o){let s=document.querySelector("#gsc-i-id1");if(s)if(o.target.value.length<=1){let c=document.querySelector(".gsst_a");c&&c.dispatchEvent(new Event("click"))}else{s.value=o.target.value;let c=document.querySelectorAll(".gsc-search-box button")[0];c?setTimeout(()=>{c.dispatchEvent(new Event("click"))},100*Math.floor(Math.random()*4)):console.error("no gsc loaded, try reload the page")}else console.error("no gsc loaded, try reload the page")}return p("div",{id:"",className:e,children:[t(ue,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:a,autoFocus:!1,autoComplete:"off"}),t("div",{className:"gcse-search"})]})}const Ve=d(Ke)`
  *,::before,::after{
      background-color: '#ffffff0';
  }
`;function Je(n){var a=n,{className:e}=a,r=v(a,["className"]);l.exports.useEffect(()=>{o()},[]);const o=()=>{};return t(de,{className:e,title:p(A,{children:[t(g,{color:"inherit",children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD:"}),p("div",{className:"tt-body",children:[t("p",{className:"tt-p",children:"\u05EA\u05E8\u05D2\u05D5\u05DD"}),t("hr",{}),t("p",{className:"tt-p",children:"\u05EA\u05E8\u05D2\u05D5\u05DD"}),t("hr",{}),t("p",{className:"tt-p",children:"\u05EA\u05E8\u05D2\u05D5\u05DD"})]})]}),arrow:!0,sx:{color:"white"},enterDelay:0,enterTouchDelay:0,leaveTouchDelay:60*1e3,children:t("p",{className:"single-lyric",children:r.lyric})})}const Qe=d(Je)`
  
`;function Xe({className:e}){const r=l.exports.useContext(C);return t(E,{children:t(S,{container:!0,spacing:2,children:r.lines&&t("div",{id:"lyrics_body",className:e,children:r.lines.map((n,a)=>p(A,{children:[t(S,{className:"lyrics-line en-line",item:!0,children:n.split(" ").map((o,s)=>t(Qe,{lyric:o},s))},a.toString()+Math.floor(Math.random()*3e4)),t(S,{item:!0,className:"lyrics-line he-line",children:n.split(" ").map((o,s)=>{if(s===0)return t("small",{className:"single-trans",children:o&&"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."},s)})},a.toString()+Math.floor(Math.random()*3e4))]}))})})})}const Ye=d(Xe)`
   max-width: 90%;
  font-family: 'Assistant','Roboto', 'sans-serif';
  /* text-align: center; */
  font-size: 20px;
  padding: 10px;
  padding-inline-start: 50px;
  margin-top: 50px;

  @media (max-width: 600px) {
      padding-inline-start: 30px;
  }

  .en-line{
    /* overflow: hidden; // todo remove after grid fixed? */
  }

  .en-line p{
    margin: unset;
    display: inline-block;
  }

  .lyrics-line{
    padding: 6px 0px;
    max-width: 98%;
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

`;function Ze({className:e}){const r=l.exports.useContext(C);function n(a){a.preventDefault();let o=document.querySelectorAll(".gsc-search-box button")[0];o?o.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return p("div",{className:e,children:[!r.currLyrics&&p("div",{children:[p(g,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",t("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D0\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4"]}),t(g,{variant:"h3",className:"page-h3",children:"\u05DC\u05D9\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DE\u05D5\u05D6\u05D9\u05E7\u05D4"})]}),t(E,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:n,children:t(Ve,{})}),r.currLyrics&&t(Ye,{className:"lyrics-body"})]})}const et=d(Ze)`

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
    
`;function tt({className:e}){return t("div",{className:e,children:t(g,{variant:"h2",className:"page-h2",children:"About Page"})})}const rt=d(tt)`

`;function nt({className:e}){return p("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(g,{variant:"h2",className:"page-h2",children:"404"}),t(g,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const ot=d(nt)`

`;function at({className:e}){const r=l.exports.useContext(L),n=l.exports.useContext(M),a=l.exports.useContext(z),o=l.exports.useRef(null),s=pe({key:"muirtl",stylisPlugins:[ve,be]});function c(){i()}const i=()=>{const h=document.createElement("script");h.type="text/javascript",h.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",h.defer=!0,document.body.appendChild(h)};l.exports.useEffect(()=>{c()},[]);const f=h=>{a.closeBanner(h)};function x(h){h.preventDefault();let y=document.querySelectorAll(".gsc-search-box button")[0];y?y.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return p("div",{className:e,ref:o,children:[t(he,{value:s,children:p(me,{children:[t(ke,{}),t(_e,{className:"header",HandleSubmit:x}),a.main.open&&p($,{severity:"warning",className:"main-alert",children:[t(fe,{children:a.main.title}),a.main.message]}),t($e,{children:p(xe,{children:[t(N,{path:"/",element:t(et,{className:"page"})}),t(N,{path:"/about",element:t(rt,{className:"page"})}),t(N,{path:"*",element:t(ot,{className:"page"})})]})}),r.open&&r.child&&t(qe,{className:"drawer"}),n.main.open&&t(ye,{color:n.main.color||"primary"}),n.circular.open&&t(ge,{color:n.main.color||"primary"}),a.snackbar.open&&t(De,{open:a.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t($,{onClose:()=>{f("snackbar")},severity:a.snackbar.severity,sx:{width:"100%"},children:a.snackbar.message})}),t(ze,{})]})}),t(We,{})]})}const st=d(at)`
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


  .toolTip-title{
    text-align: center;
  }

  .tt-body *{
    color: blue;
    text-align: center;
  }
`,it=[Le,Ne,Se,Be];function ct(e){return t(A,{children:it.reduceRight((r,n)=>t(n,{children:r}),e.children)})}Ee.render(t(b.StrictMode,{children:t(ct,{children:t(Ce,{theme:I,children:t(st,{className:"app"})})})}),document.getElementById("root"));
