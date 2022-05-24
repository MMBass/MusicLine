var Z=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var U=(e,r,o)=>r in e?Z(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,h=(e,r)=>{for(var o in r||(r={}))W.call(r,o)&&U(e,o,r[o]);if(P)for(var o of P(r))V.call(r,o)&&U(e,o,r[o]);return e},x=(e,r)=>ee(e,te(r));var S=(e,r)=>{var o={};for(var s in e)W.call(e,s)&&r.indexOf(s)<0&&(o[s]=e[s]);if(e!=null&&P)for(var s of P(e))r.indexOf(s)<0&&V.call(e,s)&&(o[s]=e[s]);return o};import{R as k,r as c,j as t,c as re,M as ne,a as g,B as oe,b as A,d as se,A as ie,s as D,L as ae,N as j,e as le,f as ce,g as ue,h as de,i as B,I as pe,k as he,l as me,C as fe,T as ge,m as N,n as De,o as xe,D as ye,p as Ee,q as Ce,t as be,u as Se,v as ve,w as Le,x as we,F as z,y as X,G as $,z as Ne,E as ke,H as Te,J as _,K,O as Ae,P as Q,Q as ze,S as Be,U as Fe,V as Me,W as Pe,X as Ie}from"./vendor.4d62d666.js";const Oe=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=o(i);fetch(i.href,l)}};Oe();const I=k.createContext(void 0);function Re(e){const[r,o]=c.exports.useState({}),l={openDrawer:(a,n,p="temporary",u)=>{o({open:a,anchor:n,permanent:p,child:u})},closeDrawer:(a,n,p="temporary",u)=>{o({open:a,anchor:n,permanent:p,child:u})}};return t(I.Provider,{value:h(h({},r),l),children:e.children})}const H=k.createContext(void 0);function $e(e){const[r,o]=c.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),a={createLoader:(n,p)=>{r[n]&&o(x(h({},r),{[n]:void 0})),o(x(h({},r),{[n]:{open:!1,color:p||"primary"}}))},openLoader:n=>{r[n]?o(x(h({},r),{[n]:x(h({},r[n]),{open:!0})})):console.error("Loader does'nt exist. Name: "+n)},closeLoader:n=>{r[n]?o(x(h({},r),{[n]:x(h({},r[n]),{open:!1})})):console.error("Loader does'nt exist. Name: "+n)}};return t(H.Provider,{value:h(h({},r),a),children:e.children})}const G=k.createContext(void 0);function _e(e){const[r,o]=c.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),a={createBanner:(n,p,u,C)=>{console.log(C),r[n]&&o(x(h({},r),{[n]:void 0})),o(x(h({},r),{[n]:{open:!0,severity:p||"success",title:u||"",message:C||""}}))},openBanner:n=>{r[n]?o(x(h({},r),{[n]:x(h({},r[n]),{open:!0})})):console.error("Banner does'nt exist. Name: "+n)},closeBanner:n=>{r[n]?o(x(h({},r),{[n]:x(h({},r[n]),{open:!1})})):console.error("Banner does'nt exist. Name: "+n)}};return t(G.Provider,{value:h(h({},r),a),children:e.children})}const Y=re({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function je(){const[e,r]=c.exports.useState(Y.palette.primary.light);return t("div",{className:"wrapper",children:t(ne,{children:t("meta",{name:"theme-color",content:e})})})}const q=k.createContext(void 0);function He(e){const[r,o]=c.exports.useState({fontSize:{sm:Number(localStorage.getItem("font_sm"))||15,md:Number(localStorage.getItem("font_md"))||25},colors:"pink"}),s=()=>{r.fontSize.md<60&&(o(x(h({},r),{fontSize:{sm:r.fontSize.sm+1,md:r.fontSize.md+1}})),l())},i=()=>{r.fontSize.sm>2&&(o(x(h({},r),{fontSize:{sm:r.fontSize.sm-1,md:r.fontSize.md-1}})),l())};function l(){localStorage.setItem("font_md",r.fontSize.md),localStorage.setItem("font_sm",r.fontSize.sm)}function a(){localStorage.setItem("colors_mode",r.colors)}function n(u){o(x(h({},r),{colors:u})),a()}const p={reduceFontSize:i,increaseFontSize:s,setColors:n};return t(q.Provider,{value:h(h({},r),p),children:e.children})}function Ge({className:e}){const r=c.exports.useContext(q);return t("div",{id:"",className:e,children:g(oe,{className:"button-group",children:[t(A,{"aria-label":"reduce",onClick:()=>{r.reduceFontSize()},children:t(se,{fontSize:"small"})}),t(A,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8"}),t(A,{"aria-label":"increase",onClick:()=>{r.increaseFontSize()},children:t(ie,{fontSize:"small"})})]})})}const qe=D(Ge)`
  text-align: end;
  margin-inline-end: 25px;
  height: 30px;
  flex-grow: 2;

  .MuiButtonGroup-root{
    height: 30px;
  }

  button{
    background-color: #eeeded94;
    color: #5b91ff;
    padding: unset;
  }

  .font-size-disabled{
    color: white !important;
    font-size: 12px;
    padding: 0 10px;
    background: #ffffff47;
  }

`,Je=[];function Ue(){return t(ae,{children:Je.map((e,r)=>t(j,{to:e.url,children:g(le,{button:!0,children:[t(ce,{primary:e.name}),t(ue,{children:t(de,{})})]},e.name)},r))})}const We=D(Ue)`
  
`,v=k.createContext(void 0);function Ve(e){const r=c.exports.useContext(H),[o,s]=c.exports.useState(sessionStorage.getItem("currLines")||!1),[i,l]=c.exports.useState([]),[a,n]=c.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[p,u]=c.exports.useState(0),[C,E]=c.exports.useState(!1),T="https://musicline-backend-basssites.vercel.app",F=d=>{E(!0),r.openLoader("main"),fetch(`${T}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:d})}).then(m=>m.json()).then(m=>{if(r.closeLoader("main"),sessionStorage.removeItem("currLines"),m==null?void 0:m.lyrics){let f=m.lyrics,y=[];f.split(/(?:\r\n|\r|\n)/g).map(b=>{b.length>=2&&y.push({src:b,trans:""})}),n(y),s(f),l(f.split(" "));let w=document.querySelector(".gsst_a");w&&w.dispatchEvent(new Event("click")),E(!0)}}).catch(m=>{r.closeLoader("main"),E(!0)})},O=()=>{let d=!1;for(let m=0;m<a.length;m++){let f=a[m];if(d===!0)break;if(f.trans.length<=1||f.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."){d=!0,M(f.src,m);break}else continue}},M=(d,m)=>{fetch(`${T}/line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:a})}).then(f=>f.json()).then(f=>{var w,b;let y=a;(f==null?void 0:f.trans.length)?(f.trans.map((R,J)=>{y[J]={src:y[J].src,trans:R}}),n(y),sessionStorage.setItem("currLines",JSON.stringify(a)),u(p+1)):(f==null?void 0:f.trans)?(y[m]={src:d,trans:f==null?void 0:f.trans},n(y),((w=a[a.length-1])==null?void 0:w.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(a)),u(p+1)):(a[m].trans===void 0&&(y[m]={src:d,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),a[m].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(y[m]={src:d,trans:"[missing]"}),n(y),((b=a[a.length-1])==null?void 0:b.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(a)),u(p+1))}).catch(f=>{var b;let y=a;a[m].trans===""&&(y[m]={src:d,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),a[m].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(y[m]={src:d,trans:"[missing]"}),n(y),((b=a[a.length-1])==null?void 0:b.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(a)),u(p+1),console.log(f)})},L={getLines:F,getLinesTrans:M,checkNextTrans:O};return t(v.Provider,{value:h({proccess:C,currLyrics:o,singles:i,lines:a,cou:p},L),children:e.children})}function Ke({className:e}){return c.exports.useContext(v),t(B,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(o=>t(j,{to:o.url,children:t(A,{sx:{my:2},children:o.name})},o.name))})}D(Ke)`
  
`;function Qe({className:e}){return t("div",{id:"",className:e,children:t(pe,{children:t(he,{className:"mui-rounded-icon"})})})}const Xe=D(Qe)`
  .mui-rounded-icon{
    background-color: white;
    color: ${e=>"#595959"};
    border-radius: 12px;
  }
`,Ye=o=>{var s=o,{className:e}=s,r=S(s,["className"]);const i=c.exports.useContext(I),l=c.exports.useContext(v),a=()=>{i.openDrawer(!0,"left","temporary",We)};return t(me,{position:"sticky",className:e,children:t(fe,{maxWidth:"xl",children:g(ge,{disableGutters:!0,children:[t(j,{to:"/",children:t(N,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),l.lines[0]&&t(qe,{}),t(B,{sx:{display:{xs:"flex",md:"flex"},flexGrow:1},children:t(Xe,{onClick:a})})]})})})},Ze=D(Ye)`
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
`;function et(o){var s=o,{className:e}=s,r=S(s,["className"]);return t("div",{className:e,children:r.children})}const tt=D(et)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  padding: 25px;
  background-color: ${e=>e.theme.palette.primary.light};
`;function rt({className:e}){return t("div",{id:"FOOTER",className:e})}D(rt)`
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

`;function nt(o){var s=o,{className:e}=s,r=S(s,["className"]);const i=c.exports.useContext(I);return t(De,{className:e,anchor:i.anchor,open:i.open,variant:i.permanent,onClose:()=>{i.closeDrawer(!1)},children:t(B,{className:"drawer-layout",sx:{width:i.anchor==="top"||i.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{i.closeDrawer(!1)},children:t(i.child,{})})})}const ot=D(nt)`
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
`;function st({className:e}){const[r,o]=c.exports.useState(!0),s=()=>{o(!1)};return g(xe,{id:"main-modal-root",className:e,open:r,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(ye,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(Ee,{children:t(Ce,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(be,{children:t(A,{onClick:s,children:"Close"})})]})}D(st)`
  
`;function it(o){var s=o,{className:e}=s,r=S(s,["className"]);const[i,l]=c.exports.useState(!0);return t(Se,{className:e,open:i,onClose:()=>{l(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}D(it)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function at({className:e}){return t("div",{id:"",className:e})}const lt=D(at)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function ct({className:e}){const r=c.exports.useContext(v),o=c.exports.useContext(G);c.exports.useEffect(()=>{window.onload=()=>{const l=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],a={childList:!1,attributes:!0,subtree:!1};function n(){s()}new MutationObserver(n).observe(l,a)}},[]);let s=()=>{setTimeout(()=>{let l=document.querySelectorAll(".gs-title");document.querySelectorAll(".gsc-adBlock").forEach(n=>{n.parentNode.appendChild(n)}),l&&l.forEach((n,p)=>{if(n.innerText.includes("Lyrics")){let u=n.innerText.replace("Lyrics | Musixmatch"," ");n.innerText=u;const C={artistName:encodeURI(u.split("-")[0]),songName:encodeURI(u.split("-")[1])};n.addEventListener("click",E=>{r.proccess||r.getLines(C)})}else n.innerText.includes("Lyrics")||n.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&n.parentElement.parentElement.parentElement.remove()})},50)};function i(l){let a=document.querySelector("#gsc-i-id1");if(a)if(l.target.value.length<=1){let n=document.querySelector(".gsst_a");n&&n.dispatchEvent(new Event("click"))}else{a.value=l.target.value;let n=document.querySelectorAll(".gsc-search-box button")[0];n?setTimeout(()=>{n.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(o.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else o.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}return g("div",{id:"",className:e,children:[t(ve,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:i,autoFocus:!1,autoComplete:"off"}),t("div",{className:"gcse-search"})]})}const ut=D(ct)`
  *,::before,::after{
      background-color: '#ffffff0';
  }

  input, fieldset, label{
   color: white !important;
   border-color: white !important;
  }

`;function dt(o){var s=o,{className:e}=s,r=S(s,["className"]);const i=c.exports.useContext(v),[l,a]=c.exports.useState(!1),[n,p]=c.exports.useState(5e4),[u,C]=c.exports.useState([]);c.exports.useEffect(()=>{var d;((d=i.lines[i.lines.length-1])==null?void 0:d.trans).length>=1&&p(0)},[i.lines]);const E=()=>{var d;((d=i.lines[i.lines.length-1])==null?void 0:d.trans).length>=1&&(a(!0),F())},T=()=>{a(!1)},F=c.exports.useCallback(()=>{O()},[]);function O(){fetch("https://musicline-backend-basssites.vercel.app/single-trans",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(r.lyric)})}).then(d=>d.json()).then(d=>{(d==null?void 0:d.results[0])?C(d.results):C(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"])}).catch(d=>{console.log(d)})}const M=()=>u[1]?u.map((L,d)=>g(z,{children:[d>0&&t("hr",{}),t("p",{className:"tt-p",children:L})]})):t("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"});return t(Le,{onClickAway:T,children:t(we,{className:e,title:g(z,{children:[t(N,{color:"inherit",children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD:"}),t("div",{className:"tt-body",style:{textAlign:"center",maxHeight:"110px",overflowY:"auto",direction:"ltr"},children:u[0]?t(M,{}):t(X,{sx:{margin:"8px"},color:"primary"})})]}),arrow:!0,enterDelay:n,enterTouchDelay:n,leaveTouchDelay:60*1e3,leaveDelay:0,onOpen:()=>{F()},PopperProps:{disablePortal:!1},onClose:T,open:l,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:t("p",{className:"single-lyric",onClick:E,children:r.lyric})})})}const pt=D(dt)`

`;function ht(o){var s=o,{className:e}=s,r=S(s,["className"]);const i=c.exports.useContext(v);return c.exports.useEffect(()=>{i.checkNextTrans()},[i,i.cou]),t(B,{children:t($,{container:!0,spacing:2,children:i.lines&&t("div",{id:"lyrics_body",className:e,children:i.lines.map((l,a)=>{var n;return l.src.includes("[")&&(l.trans="   "),g("div",{children:[l.src.includes("[")&&g(z,{children:[t("br",{}),t("br",{})]}),t($,{className:"lyrics-line en-line",item:!0,children:l.src.split(" ").map((p,u)=>t(pt,{lyric:p},u))},a.toString()+Math.floor(Math.random()*3e4)),t($,{item:!0,className:"lyrics-line he-line",children:t(z,{children:((n=l.trans)==null?void 0:n.length)>2?l.trans.split(" ").map((p,u)=>{if(l.trans!=="   ")return t("small",{onLoad:()=>{i.checkNextTrans()},className:"single-trans",children:p},u)}):t("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})},a.toString()+Math.floor(Math.random()*3e4))]})})})})})}const mt=D(ht)`
  font-family: 'Assistant','Roboto', 'sans-serif';
  /* text-align: center; */
  /* padding: 10px; */
  /* max-width: 90%; */
  font-size: 20px;
  padding: 15px 0;
  padding-inline-start: 50px;
  margin-top: 50px;

  background-color: #EBECF0;
  color: #172B4D;
  border-radius: 10px;

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

`;function ft({className:e}){const r=c.exports.useContext(v),o=c.exports.useContext(q);c.exports.useEffect(()=>{},[o]);function s(i){i.preventDefault()}return g("div",{className:e,children:[!r.currLyrics&&g("div",{children:[g(N,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",t("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D1\u05E9\u05D5\u05E8\u05D4"]}),g(N,{variant:"h3",className:"page-h3",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA",t("br",{}),t("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})]})]}),t(B,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:s,children:t(ut,{})}),r.currLyrics&&t(mt,{className:"lyrics-body",fontSize:o.fontSize})]})}const gt=D(ft)`

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
    
`;function Dt({className:e}){return g("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(N,{variant:"h2",className:"page-h2",children:"404"}),t(N,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const xt=D(Dt)`

`;function yt({className:e}){var p,u,C;const r=c.exports.useContext(I),o=c.exports.useContext(H),s=c.exports.useContext(G);c.exports.useRef(null);const i=Ne({key:"muirtl",stylisPlugins:[Fe,Me]});function l(){a()}const a=()=>{const E=document.createElement("script");E.type="text/javascript",E.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",E.defer=!0,document.body.appendChild(E)};c.exports.useEffect(()=>{l()},[]);const n=E=>{s.closeBanner(E)};return g("div",{className:e,children:[t(ke,{value:i,children:g(Te,{children:[t(je,{}),t(Ze,{className:"header"}),s.main.open&&g(_,{severity:"warning",className:"main-alert",children:[t(K,{children:s.main.title}),s.main.message]}),((p=s.error)==null?void 0:p.open)&&g(_,{severity:"error",className:"error-alert",onClose:()=>{s.closeBanner("error")},children:[t(K,{children:(u=s.error)==null?void 0:u.title}),(C=s.error)==null?void 0:C.message]}),t(tt,{children:g(Ae,{children:[t(Q,{path:"/",element:t(gt,{className:"page"})}),t(Q,{path:"*",element:t(xt,{className:"page"})})]})}),r.open&&r.child&&t(ot,{className:"drawer"}),o.main.open&&t(X,{color:o.main.color||"primary"}),o.circular.open&&t(ze,{color:o.main.color||"primary"}),s.snackbar.open&&t(Be,{open:s.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(_,{onClose:()=>{n("snackbar")},severity:s.snackbar.severity,sx:{width:"100%"},children:s.snackbar.message})})]})}),t(lt,{})]})}const Et=D(yt)`
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
    font-size: 38px; // 29
    font-weight: 500;
    color: ${e=>e.theme.palette.secondary.main};

    small{
      letter-spacing: 1.4px;
    }

    @media (max-width: 600px) {
      font-size: 22px;

      small{
      letter-spacing: 0.7px;
    }
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
    z-index: 3000;
  }

  .main-alert{
    color: #fff;
    background-color: #2D4260;
    border-radius: unset;
  }

  /* .toolTip-title{
    direction: rtl;
    text-align: center;
  }

  .tt-body *{
    /* text-align: center; */
    /* overflow-y: scroll;
    max-height: 110px; */
  /* } */ 

  .loader{
      padding: 20px;
  }
`,Ct=[He,Re,_e,$e,Ve];function bt(e){return t(z,{children:Ct.reduceRight((r,o)=>t(o,{children:r}),e.children)})}Pe.render(t(k.StrictMode,{children:t(bt,{children:t(Ie,{theme:Y,children:t(Et,{className:"app"})})})}),document.getElementById("root"));
