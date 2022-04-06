var W=Object.defineProperty,V=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var O=(e,n,r)=>n in e?W(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,d=(e,n)=>{for(var r in n||(n={}))H.call(n,r)&&O(e,r,n[r]);if(w)for(var r of w(n))I.call(n,r)&&O(e,r,n[r]);return e},m=(e,n)=>V(e,K(n));var g=(e,n)=>{var r={};for(var o in e)H.call(e,o)&&n.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&w)for(var o of w(e))n.indexOf(o)<0&&I.call(e,o)&&(r[o]=e[o]);return r};import{R as v,r as l,j as t,c as J,M as Q,a as h,B as X,b as C,d as Y,A as Z,s as u,L as ee,N as A,e as te,f as ne,g as re,h as oe,i as S,k as ie,C as se,T as ae,I as ce,l as le,m as y,n as de,o as ue,D as pe,p as he,q as me,t as fe,u as xe,v as ge,w as ye,F as M,G as z,x as De,y as be,H as ve,z as q,E as Ce,J as Se,K as k,O as Ee,P as we,S as Le,Q as Ne,U as ze,V as ke,W as Me}from"./vendor.0d26e462.js";const Ae=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}};Ae();const L=v.createContext(void 0);function Te(e){const[n,r]=l.exports.useState({}),a={openDrawer:(c,s,p="temporary",x)=>{r({open:c,anchor:s,permanent:p,child:x})},closeDrawer:(c,s,p="temporary",x)=>{r({open:c,anchor:s,permanent:p,child:x})}};return t(L.Provider,{value:d(d({},n),a),children:e.children})}const T=v.createContext(void 0);function Be(e){const[n,r]=l.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),c={createLoader:(s,p)=>{n[s]&&r(m(d({},n),{[s]:void 0})),r(m(d({},n),{[s]:{open:!1,color:p||"primary"}}))},openLoader:s=>{n[s]?r(m(d({},n),{[s]:m(d({},n[s]),{open:!0})})):console.error("Loader does'nt exist. Name: "+s)},closeLoader:s=>{n[s]?r(m(d({},n),{[s]:m(d({},n[s]),{open:!1})})):console.error("Loader does'nt exist. Name: "+s)}};return t(T.Provider,{value:d(d({},n),c),children:e.children})}const G=v.createContext(void 0);function Pe(e){const[n,r]=l.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),c={createBanner:(s,p,x,f)=>{n[s]&&r(m(d({},n),{[s]:void 0})),r(m(d({},n),{[s]:{open:!1,severity:p||"success",title:x||"",mesaage:f||""}}))},openBanner:s=>{n[s]?r(m(d({},n),{[s]:m(d({},n[s]),{open:!0})})):console.error("Banner does'nt exist. Name: "+s)},closeBanner:s=>{n[s]?r(m(d({},n),{[s]:m(d({},n[s]),{open:!1})})):console.error("Banner does'nt exist. Name: "+s)}};return t(G.Provider,{value:d(d({},n),c),children:e.children})}const j=J({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function Fe(){const[e,n]=l.exports.useState(j.palette.primary.light);return t("div",{className:"wrapper",children:t(Q,{children:t("meta",{name:"theme-color",content:e})})})}const B=v.createContext(void 0);function Re(e){const[n,r]=l.exports.useState({fontSize:{sm:15,md:25}}),a={reduceFontSize:()=>{n.fontSize.sm>2&&r(m(d({},n),{fontSize:{sm:n.fontSize.sm-.5,md:n.fontSize.md-.5}}))},increaseFontSize:()=>{n.fontSize.md<60&&r(m(d({},n),{fontSize:{sm:n.fontSize.sm+.5,md:n.fontSize.md+.5}}))}};return t(B.Provider,{value:d(d({},n),a),children:e.children})}function $e({className:e}){const n=l.exports.useContext(B);return t("div",{id:"",className:e,children:h(X,{className:"button-group",children:[t(C,{"aria-label":"reduce",onClick:()=>{n.reduceFontSize()},children:t(Y,{fontSize:"small"})}),t(C,{className:"font-size-disabled",disabled:!0,children:"Font Size"}),t(C,{"aria-label":"increase",onClick:()=>{n.increaseFontSize()},children:t(Z,{fontSize:"small"})})]})})}const _e=u($e)`
  text-align: center;
  height: 30px;
 flex-grow: 2;
  .MuiButtonGroup-root{
    height: 30px;
  }

  button{
    background-color: #eeededb0;
    color: #5b91ff;
    padding: unset;
  }

  .font-size-disabled{
    color: white !important;
    font-size: 12px;
    padding: 0 10px;
    background: #ffffff6b;
  }

`,Oe=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}];function He(){return t(ee,{children:Oe.map((e,n)=>t(A,{to:e.url,children:h(te,{button:!0,children:[t(ne,{primary:e.name}),t(re,{children:t(oe,{})})]},e.name)},n))})}const Ie=u(He)`
  
`,E=v.createContext(void 0);function qe(e){const n=l.exports.useContext(T),[r,o]=l.exports.useState(!1),[i,a]=l.exports.useState([]),[c,s]=l.exports.useState([]),x={handleSet:f=>{n.openLoader("main"),fetch("https://cors-anywhere.herokuapp.com/"+"http://api.musixmatch.com/ws/1.1/"+`matcher.lyrics.get?apikey=d98598e033ac1e0ad0a3335990d12579&q_track=${encodeURI(f.songtName)}&q_artist=${encodeURI(f.artistName)}`).then(D=>D.json()).then(D=>{var P,F,R;if(n.closeLoader("main"),(R=(F=(P=D==null?void 0:D.message)==null?void 0:P.body)==null?void 0:F.lyrics)==null?void 0:R.lyrics_body){let b=D.message.body.lyrics.lyrics_body;b=b.substring(0,b.indexOf("...")),o(b),a(b.split(" "));let $=[];b.split(/(?:\r\n|\r|\n)/g).map(U=>{$.push({src:U,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."})}),s($);let _=document.querySelector(".gsst_a");_&&_.dispatchEvent(new Event("click"))}})}};return t(E.Provider,{value:d({currLyrics:r,singles:i,lines:c},x),children:e.children})}function Ge({className:e}){return l.exports.useContext(E),t(S,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}].map(r=>t(A,{to:r.url,children:t(C,{sx:{my:2},children:r.name})},r.name))})}const je=u(Ge)`
  
`,Ue=r=>{var o=r,{className:e}=o,n=g(o,["className"]);const i=l.exports.useContext(L);return t(ie,{position:"static",className:e,children:t(se,{maxWidth:"xl",children:h(ae,{disableGutters:!0,children:[t(S,{sx:{display:{xs:"flex",md:"none"}},children:t(ce,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{i.openDrawer(!0,"left","temporary",Ie)},color:"inherit",children:t(le,{})})}),t(A,{to:"/",children:t(y,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),t(_e,{}),t(je,{className:"nav-bar"})]})})})},We=u(Ue)`
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
`;function Ve(r){var o=r,{className:e}=o,n=g(o,["className"]);return t("div",{className:e,children:n.children})}const Ke=u(Ve)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  padding: 35px;
  background-color: ${e=>e.theme.palette.primary.light};
`;function Je({className:e}){return t("div",{id:"FOOTER",className:e})}const Qe=u(Je)`
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

`;function Xe(r){var o=r,{className:e}=o,n=g(o,["className"]);const i=l.exports.useContext(L);return t(de,{className:e,anchor:i.anchor,open:i.open,variant:i.permanent,onClose:()=>{i.closeDrawer(!1)},children:t(S,{className:"drawer-layout",sx:{width:i.anchor==="top"||i.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{i.closeDrawer(!1)},children:t(i.child,{})})})}const Ye=u(Xe)`
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
`;function Ze({className:e}){const[n,r]=l.exports.useState(!0),o=()=>{r(!1)};return h(ue,{id:"main-modal-root",className:e,open:n,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(pe,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(he,{children:t(me,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(fe,{children:t(C,{onClick:o,children:"Close"})})]})}u(Ze)`
  
`;function et(r){var o=r,{className:e}=o,n=g(o,["className"]);const[i,a]=l.exports.useState(!0);return t(xe,{className:e,open:i,onClose:()=>{a(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:n.children})}u(et)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function tt({className:e}){return t("div",{id:"",className:e})}const nt=u(tt)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function rt({className:e}){const n=l.exports.useContext(E);l.exports.useEffect(()=>{window.onload=()=>{const i=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],a={childList:!1,attributes:!0,subtree:!1};function c(){r()}new MutationObserver(c).observe(i,a)}},[]);let r=()=>{setTimeout(()=>{let i=document.querySelectorAll(".gs-title");i&&i.forEach((a,c)=>{if(a.innerText.includes("Lyrics")){let s=a.innerText.replace("Lyrics | Musixmatch"," ");a.innerText=s;const p={artistName:s.split("-")[0],songtName:s.split("-")[1]};a.addEventListener("click",x=>{n.handleSet(p)})}else a.innerText.includes("Lyrics")||a.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&a.parentElement.parentElement.parentElement.remove()})},50)};function o(i){let a=document.querySelector("#gsc-i-id1");if(a)if(i.target.value.length<=1){let c=document.querySelector(".gsst_a");c&&c.dispatchEvent(new Event("click"))}else{a.value=i.target.value;let c=document.querySelectorAll(".gsc-search-box button")[0];c?setTimeout(()=>{c.dispatchEvent(new Event("click"))},100*Math.floor(Math.random()*4)):console.error("no gsc loaded, try reload the page")}else console.error("no gsc loaded, try reload the page")}return h("div",{id:"",className:e,children:[t(ge,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:o,autoFocus:!1,autoComplete:"off"}),t("div",{className:"gcse-search"})]})}const ot=u(rt)`
  *,::before,::after{
      background-color: '#ffffff0';
  }
`;function it(r){var o=r,{className:e}=o,n=g(o,["className"]);l.exports.useEffect(()=>{i()},[]);const i=()=>{};return t(ye,{className:e,title:h(M,{children:[t(y,{color:"inherit",children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD:"}),t("div",{className:"tt-body",style:{textAlign:"center"},children:["","",""].map(()=>h(M,{children:[t("p",{className:"tt-p",children:"\u05EA\u05E8\u05D2\u05D5\u05DD"}),t("hr",{})]}))})]}),arrow:!0,sx:{color:"white"},enterDelay:0,enterTouchDelay:5,leaveTouchDelay:60*1e3,leaveDelay:0,children:t("p",{className:"single-lyric",children:n.lyric})})}const st=u(it)`
  
`;function at(r){var o=r,{className:e}=o,n=g(o,["className"]);const i=l.exports.useContext(E);return t(S,{children:t(z,{container:!0,spacing:2,children:i.lines&&t("div",{id:"lyrics_body",className:e,children:i.lines.map((a,c)=>h("div",{children:[t(z,{className:"lyrics-line en-line",item:!0,children:a.src.split(" ").map((s,p)=>t(st,{lyric:s},p))},c.toString()+Math.floor(Math.random()*3e4)),t(z,{item:!0,className:"lyrics-line he-line",children:a.trans.split(" ").map((s,p)=>t("small",{className:"single-trans",children:s&&s},p))},c.toString()+Math.floor(Math.random()*3e4))]}))})})})}const ct=u(at)`
   /* max-width: 90%; */
  font-family: 'Assistant','Roboto', 'sans-serif';
  /* text-align: center; */
  font-size: 20px;
  padding: 10px;
  padding-inline-start: 50px;
  margin-top: 50px;

  @media (max-width: 600px) {
    padding-inline-start: 15px;
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
  }

  .single-lyric{
    cursor: pointer;
  }

  .he-line{
      /* font-size: 14px; */
      font-size: ${e=>e.fontSize.md-5+"px"};
  }

  .en-line{
      /* font-size: 20px; */
      font-size: ${e=>e.fontSize.md+"px"};
  }

  @media (max-width: 600px) {
      .he-line{
        /* font-size: 14px; */
        font-size: ${e=>e.fontSize.md-5+"px"};
      }

      .en-line{
        /* font-size: 20px; */
        font-size: ${e=>e.fontSize.md+"px"};
      }
  }

`;function lt({className:e}){const n=l.exports.useContext(E),r=l.exports.useContext(B);l.exports.useEffect(()=>{},[r]);function o(i){i.preventDefault();let a=document.querySelectorAll(".gsc-search-box button")[0];a?a.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return h("div",{className:e,children:[!n.currLyrics&&h("div",{children:[h(y,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",t("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D1\u05E9\u05D5\u05E8\u05D4"]}),t(y,{variant:"h3",className:"page-h3",children:"\u05DC\u05D9\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DE\u05D5\u05D6\u05D9\u05E7\u05D4"})]}),t(S,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:o,children:t(ot,{})}),n.currLyrics&&t(ct,{className:"lyrics-body",fontSize:r.fontSize})]})}const dt=u(lt)`

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
    
`;function ut({className:e}){return t("div",{className:e,children:t(y,{variant:"h2",className:"page-h2",children:"About Page"})})}const pt=u(ut)`

`;function ht({className:e}){return h("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(y,{variant:"h2",className:"page-h2",children:"404"}),t(y,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const mt=u(ht)`

`;function ft({className:e}){const n=l.exports.useContext(L),r=l.exports.useContext(T),o=l.exports.useContext(G),i=l.exports.useRef(null),a=De({key:"muirtl",stylisPlugins:[Ne,ze]});function c(){s()}const s=()=>{const f=document.createElement("script");f.type="text/javascript",f.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",f.defer=!0,document.body.appendChild(f)};l.exports.useEffect(()=>{c()},[]);const p=f=>{o.closeBanner(f)};function x(f){f.preventDefault();let N=document.querySelectorAll(".gsc-search-box button")[0];N?N.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return h("div",{className:e,ref:i,children:[t(be,{value:a,children:h(ve,{children:[t(Fe,{}),t(We,{className:"header",HandleSubmit:x}),o.main.open&&h(q,{severity:"warning",className:"main-alert",children:[t(Ce,{children:o.main.title}),o.main.message]}),t(Ke,{children:h(Se,{children:[t(k,{path:"/",element:t(dt,{className:"page"})}),t(k,{path:"/about",element:t(pt,{className:"page"})}),t(k,{path:"*",element:t(mt,{className:"page"})})]})}),n.open&&n.child&&t(Ye,{className:"drawer"}),r.main.open&&t(Ee,{color:r.main.color||"primary"}),r.circular.open&&t(we,{color:r.main.color||"primary"}),o.snackbar.open&&t(Le,{open:o.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(q,{onClose:()=>{p("snackbar")},severity:o.snackbar.severity,sx:{width:"100%"},children:o.snackbar.message})}),t(Qe,{})]})}),t(nt,{})]})}const xt=u(ft)`
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
`,gt=[Re,Te,Pe,Be,qe];function yt(e){return t(M,{children:gt.reduceRight((n,r)=>t(r,{children:n}),e.children)})}ke.render(t(v.StrictMode,{children:t(yt,{children:t(Me,{theme:j,children:t(xt,{className:"app"})})})}),document.getElementById("root"));
