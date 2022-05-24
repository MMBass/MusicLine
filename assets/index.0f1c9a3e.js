var X=Object.defineProperty,Y=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var H=(e,n,r)=>n in e?X(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,d=(e,n)=>{for(var r in n||(n={}))q.call(n,r)&&H(e,r,n[r]);if(z)for(var r of z(n))G.call(n,r)&&H(e,r,n[r]);return e},x=(e,n)=>Y(e,Z(n));var v=(e,n)=>{var r={};for(var s in e)q.call(e,s)&&n.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&z)for(var s of z(e))n.indexOf(s)<0&&G.call(e,s)&&(r[s]=e[s]);return r};import{R as S,r as l,j as t,c as ee,M as te,a as g,B as ne,b as L,d as re,A as oe,s as f,L as se,N as F,e as ie,f as ae,g as ce,h as le,i as N,k as ue,C as de,T as pe,I as he,l as me,m as E,n as fe,o as ge,D as xe,p as De,q as ye,t as be,u as ve,v as Ee,w as Ce,F as A,x as J,G as M,y as Se,z as we,H as Le,E as U,J as Ne,K as ke,O as B,P as ze,S as Ae,Q as Te,U as Me,V as Be,W as Fe}from"./vendor.49f63279.js";const Pe=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}};Pe();const T=S.createContext(void 0);function Re(e){const[n,r]=l.exports.useState({}),i={openDrawer:(c,a,p="temporary",u)=>{r({open:c,anchor:a,permanent:p,child:u})},closeDrawer:(c,a,p="temporary",u)=>{r({open:c,anchor:a,permanent:p,child:u})}};return t(T.Provider,{value:d(d({},n),i),children:e.children})}const P=S.createContext(void 0);function $e(e){const[n,r]=l.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),c={createLoader:(a,p)=>{n[a]&&r(x(d({},n),{[a]:void 0})),r(x(d({},n),{[a]:{open:!1,color:p||"primary"}}))},openLoader:a=>{n[a]?r(x(d({},n),{[a]:x(d({},n[a]),{open:!0})})):console.error("Loader does'nt exist. Name: "+a)},closeLoader:a=>{n[a]?r(x(d({},n),{[a]:x(d({},n[a]),{open:!1})})):console.error("Loader does'nt exist. Name: "+a)}};return t(P.Provider,{value:d(d({},n),c),children:e.children})}const W=S.createContext(void 0);function Oe(e){const[n,r]=l.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),c={createBanner:(a,p,u,D)=>{n[a]&&r(x(d({},n),{[a]:void 0})),r(x(d({},n),{[a]:{open:!1,severity:p||"success",title:u||"",mesaage:D||""}}))},openBanner:a=>{n[a]?r(x(d({},n),{[a]:x(d({},n[a]),{open:!0})})):console.error("Banner does'nt exist. Name: "+a)},closeBanner:a=>{n[a]?r(x(d({},n),{[a]:x(d({},n[a]),{open:!1})})):console.error("Banner does'nt exist. Name: "+a)}};return t(W.Provider,{value:d(d({},n),c),children:e.children})}const V=ee({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function Ie(){const[e,n]=l.exports.useState(V.palette.primary.light);return t("div",{className:"wrapper",children:t(te,{children:t("meta",{name:"theme-color",content:e})})})}const R=S.createContext(void 0);function _e(e){const[n,r]=l.exports.useState({fontSize:{sm:15,md:25}}),i={reduceFontSize:()=>{n.fontSize.sm>2&&r(x(d({},n),{fontSize:{sm:n.fontSize.sm-.5,md:n.fontSize.md-.5}}))},increaseFontSize:()=>{n.fontSize.md<60&&r(x(d({},n),{fontSize:{sm:n.fontSize.sm+.5,md:n.fontSize.md+.5}}))}};return t(R.Provider,{value:d(d({},n),i),children:e.children})}function je({className:e}){const n=l.exports.useContext(R);return t("div",{id:"",className:e,children:g(ne,{className:"button-group",children:[t(L,{"aria-label":"reduce",onClick:()=>{n.reduceFontSize()},children:t(re,{fontSize:"small"})}),t(L,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D8\u05E7\u05E1\u05D8"}),t(L,{"aria-label":"increase",onClick:()=>{n.increaseFontSize()},children:t(oe,{fontSize:"small"})})]})})}const He=f(je)`
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

`,qe=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}];function Ge(){return t(se,{children:qe.map((e,n)=>t(F,{to:e.url,children:g(ie,{button:!0,children:[t(ae,{primary:e.name}),t(ce,{children:t(le,{})})]},e.name)},n))})}const Ue=f(Ge)`
  
`,w=S.createContext(void 0);function Je(e){const n=l.exports.useContext(P),[r,s]=l.exports.useState(!1),[o,i]=l.exports.useState([]),[c,a]=l.exports.useState([]),[p,u]=l.exports.useState(0),D="https://musicline-backend-basssites.vercel.app",k=b=>{n.openLoader("main"),fetch(`${D}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:b})}).then(h=>h.json()).then(h=>{var m,y,O;if(n.closeLoader("main"),(O=(y=(m=h==null?void 0:h.message)==null?void 0:m.body)==null?void 0:y.lyrics)==null?void 0:O.lyrics_body){let C=h.message.body.lyrics.lyrics_body;C=C.substring(0,C.indexOf("..."));let I=[];C.split(/(?:\r\n|\r|\n)/g).map(j=>{j.length>=2&&I.push({src:j,trans:""})}),a(I),s(C),i(C.split(" "));let _=document.querySelector(".gsst_a");_&&_.dispatchEvent(new Event("click"))}})},K=()=>{let b=!1;for(let h=0;h<c.length;h++){let m=c[h];if(b===!0)break;if(m.trans.length<=1||m.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."){b=!0,$(m.src,h);break}else continue}},$=(b,h)=>{fetch(`${D}/line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(b)})}).then(m=>m.json()).then(m=>{let y=c;(m==null?void 0:m.trans)?(y[h]={src:b,trans:m==null?void 0:m.trans},a(y),u(p+1)):(c[h].trans===void 0&&(y[h]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),c[h].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(y[h]={src:b,trans:"[missing]"}),a(y),u(p+1))}).catch(m=>{let y=c;c[h].trans===""&&(y[h]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),c[h].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(y[h]={src:b,trans:"[missing]"}),a(y),u(p+1),console.log(m)})},Q={getLines:k,getLinesTrans:$,checkNextTrans:K};return t(w.Provider,{value:d({currLyrics:r,singles:o,lines:c,cou:p},Q),children:e.children})}function We({className:e}){return l.exports.useContext(w),t(N,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}].map(r=>t(F,{to:r.url,children:t(L,{sx:{my:2},children:r.name})},r.name))})}const Ve=f(We)`
  
`,Ke=r=>{var s=r,{className:e}=s,n=v(s,["className"]);const o=l.exports.useContext(T),i=l.exports.useContext(w);return t(ue,{position:"static",className:e,children:t(de,{maxWidth:"xl",children:g(pe,{disableGutters:!0,children:[t(N,{sx:{display:{xs:"flex",md:"none"}},children:t(he,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{o.openDrawer(!0,"left","temporary",Ue)},color:"inherit",children:t(me,{})})}),t(F,{to:"/",children:t(E,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),i.lines[0]&&t(He,{}),t(Ve,{className:"nav-bar"})]})})})},Qe=f(Ke)`
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
`;function Xe(r){var s=r,{className:e}=s,n=v(s,["className"]);return t("div",{className:e,children:n.children})}const Ye=f(Xe)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  padding: 35px;
  background-color: ${e=>e.theme.palette.primary.light};
`;function Ze({className:e}){return t("div",{id:"FOOTER",className:e})}const et=f(Ze)`
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

`;function tt(r){var s=r,{className:e}=s,n=v(s,["className"]);const o=l.exports.useContext(T);return t(fe,{className:e,anchor:o.anchor,open:o.open,variant:o.permanent,onClose:()=>{o.closeDrawer(!1)},children:t(N,{className:"drawer-layout",sx:{width:o.anchor==="top"||o.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{o.closeDrawer(!1)},children:t(o.child,{})})})}const nt=f(tt)`
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
`;function rt({className:e}){const[n,r]=l.exports.useState(!0),s=()=>{r(!1)};return g(ge,{id:"main-modal-root",className:e,open:n,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(xe,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(De,{children:t(ye,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(be,{children:t(L,{onClick:s,children:"Close"})})]})}f(rt)`
  
`;function ot(r){var s=r,{className:e}=s,n=v(s,["className"]);const[o,i]=l.exports.useState(!0);return t(ve,{className:e,open:o,onClose:()=>{i(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:n.children})}f(ot)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function st({className:e}){return t("div",{id:"",className:e})}const it=f(st)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function at({className:e}){const n=l.exports.useContext(w);l.exports.useEffect(()=>{window.onload=()=>{const o=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],i={childList:!1,attributes:!0,subtree:!1};function c(){r()}new MutationObserver(c).observe(o,i)}},[]);let r=()=>{setTimeout(()=>{let o=document.querySelectorAll(".gs-title");o&&o.forEach((i,c)=>{if(i.innerText.includes("Lyrics")){let a=i.innerText.replace("Lyrics | Musixmatch"," ");i.innerText=a;const p={artistName:encodeURI(a.split("-")[0]),songName:encodeURI(a.split("-")[1])};i.addEventListener("click",u=>{n.getLines(p)})}else i.innerText.includes("Lyrics")||i.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&i.parentElement.parentElement.parentElement.remove()})},50)};function s(o){let i=document.querySelector("#gsc-i-id1");if(i)if(o.target.value.length<=1){let c=document.querySelector(".gsst_a");c&&c.dispatchEvent(new Event("click"))}else{i.value=o.target.value;let c=document.querySelectorAll(".gsc-search-box button")[0];c?setTimeout(()=>{c.dispatchEvent(new Event("click"))},100*Math.floor(Math.random()*4)):console.error("no gsc loaded, try reload the page")}else console.error("no gsc loaded, try reload the page")}return g("div",{id:"",className:e,children:[t(Ee,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:s,autoFocus:!1,autoComplete:"off"}),t("div",{className:"gcse-search"})]})}const ct=f(at)`
  *,::before,::after{
      background-color: '#ffffff0';
  }
`;function lt(r){var s=r,{className:e}=s,n=v(s,["className"]);const[o,i]=l.exports.useState([]);l.exports.useEffect(()=>{c()},[]);const c=()=>{};function a(){fetch("https://musicline-backend-basssites.vercel.app/single-trans",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(n.lyric)})}).then(u=>u.json()).then(u=>{(u==null?void 0:u.results)?i(u.results):i(["no results"])}).catch(u=>{console.log(u)})}return t(Ce,{className:e,title:g(A,{children:[t(E,{color:"inherit",children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD:"}),t("div",{className:"tt-body",style:{textAlign:"center"},children:o[0]?o.map(p=>g(A,{children:[t("p",{className:"tt-p",children:p}),t("hr",{})]})):t(J,{sx:{margin:"8px"},color:"primary"})})]}),arrow:!0,sx:{color:"white"},enterDelay:0,enterTouchDelay:5,leaveTouchDelay:60*1e3,leaveDelay:0,onOpen:()=>{a()},children:t("p",{className:"single-lyric",children:n.lyric})})}const ut=f(lt)`

`;function dt(r){var s=r,{className:e}=s,n=v(s,["className"]);const o=l.exports.useContext(w);return l.exports.useEffect(()=>{o.checkNextTrans()},[o,o.cou]),t(N,{children:t(M,{container:!0,spacing:2,children:o.lines&&t("div",{id:"lyrics_body",className:e,children:o.lines.map((i,c)=>{var a;return g("div",{children:[t(M,{className:"lyrics-line en-line",item:!0,children:i.src.split(" ").map((p,u)=>t(ut,{lyric:p},u))},c.toString()+Math.floor(Math.random()*3e4)),t(M,{item:!0,className:"lyrics-line he-line",children:t(A,{children:((a=i.trans)==null?void 0:a.length)>2?i.trans.split(" ").map((p,u)=>t("small",{onLoad:()=>{o.checkNextTrans()},className:"single-trans",children:p},u)):t("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})},c.toString()+Math.floor(Math.random()*3e4))]})})})})})}const pt=f(dt)`
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

  .he-line small{
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
      direction: rtl;
      text-align: left;
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

`;function ht({className:e}){const n=l.exports.useContext(w),r=l.exports.useContext(R);l.exports.useEffect(()=>{},[r]);function s(o){o.preventDefault();let i=document.querySelectorAll(".gsc-search-box button")[0];i?i.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return g("div",{className:e,children:[!n.currLyrics&&g("div",{children:[g(E,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",t("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D1\u05E9\u05D5\u05E8\u05D4"]}),t(E,{variant:"h3",className:"page-h3",children:"\u05DC\u05D9\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DE\u05D5\u05D6\u05D9\u05E7\u05D4"})]}),t(N,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:s,children:t(ct,{})}),n.currLyrics&&t(pt,{className:"lyrics-body",fontSize:r.fontSize})]})}const mt=f(ht)`

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
    
`;function ft({className:e}){return t("div",{className:e,children:t(E,{variant:"h2",className:"page-h2",children:"About Page"})})}const gt=f(ft)`

`;function xt({className:e}){return g("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(E,{variant:"h2",className:"page-h2",children:"404"}),t(E,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const Dt=f(xt)`

`;function yt({className:e}){const n=l.exports.useContext(T),r=l.exports.useContext(P),s=l.exports.useContext(W),o=l.exports.useRef(null),i=Se({key:"muirtl",stylisPlugins:[Te,Me]});function c(){a()}const a=()=>{const D=document.createElement("script");D.type="text/javascript",D.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",D.defer=!0,document.body.appendChild(D)};l.exports.useEffect(()=>{c()},[]);const p=D=>{s.closeBanner(D)};function u(D){D.preventDefault();let k=document.querySelectorAll(".gsc-search-box button")[0];k?k.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return g("div",{className:e,ref:o,children:[t(we,{value:i,children:g(Le,{children:[t(Ie,{}),t(Qe,{className:"header",HandleSubmit:u}),s.main.open&&g(U,{severity:"warning",className:"main-alert",children:[t(Ne,{children:s.main.title}),s.main.message]}),t(Ye,{children:g(ke,{children:[t(B,{path:"/",element:t(mt,{className:"page"})}),t(B,{path:"/about",element:t(gt,{className:"page"})}),t(B,{path:"*",element:t(Dt,{className:"page"})})]})}),n.open&&n.child&&t(nt,{className:"drawer"}),r.main.open&&t(J,{color:r.main.color||"primary"}),r.circular.open&&t(ze,{color:r.main.color||"primary"}),s.snackbar.open&&t(Ae,{open:s.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(U,{onClose:()=>{p("snackbar")},severity:s.snackbar.severity,sx:{width:"100%"},children:s.snackbar.message})}),t(et,{})]})}),t(it,{})]})}const bt=f(yt)`
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
    direction: rtl;
    text-align: center;
  }

  .tt-body *{
    text-align: center;
  }

  .loader{
      padding: 20px;
  }
`,vt=[_e,Re,Oe,$e,Je];function Et(e){return t(A,{children:vt.reduceRight((n,r)=>t(r,{children:n}),e.children)})}Be.render(t(S.StrictMode,{children:t(Et,{children:t(Fe,{theme:V,children:t(bt,{className:"app"})})})}),document.getElementById("root"));
