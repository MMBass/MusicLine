var Z=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var W=(e,r,o)=>r in e?Z(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,p=(e,r)=>{for(var o in r||(r={}))V.call(r,o)&&W(e,o,r[o]);if(F)for(var o of F(r))K.call(r,o)&&W(e,o,r[o]);return e},y=(e,r)=>ee(e,te(r));var S=(e,r)=>{var o={};for(var s in e)V.call(e,s)&&r.indexOf(s)<0&&(o[s]=e[s]);if(e!=null&&F)for(var s of F(e))r.indexOf(s)<0&&K.call(e,s)&&(o[s]=e[s]);return o};import{R as T,r as c,j as t,c as re,M as ne,a as g,B as oe,b as A,d as se,A as ie,s as D,L as ae,N as H,e as le,f as ce,g as ue,h as de,i as B,k as pe,C as he,T as me,I as fe,l as ge,m as L,n as De,o as xe,D as ye,p as Ee,q as Ce,t as be,u as ve,v as Se,w as Le,x as we,F as z,y as X,G as $,z as Ne,E as ke,H as Te,J as _,K as Q,O as Ae,P as j,Q as ze,S as Be,U as Pe,V as Me,W as Fe,X as Ie}from"./vendor.568dfea1.js";const Oe=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=o(i);fetch(i.href,l)}};Oe();const I=T.createContext(void 0);function Re(e){const[r,o]=c.exports.useState({}),l={openDrawer:(a,n,h="temporary",d)=>{o({open:a,anchor:n,permanent:h,child:d})},closeDrawer:(a,n,h="temporary",d)=>{o({open:a,anchor:n,permanent:h,child:d})}};return t(I.Provider,{value:p(p({},r),l),children:e.children})}const G=T.createContext(void 0);function $e(e){const[r,o]=c.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),a={createLoader:(n,h)=>{r[n]&&o(y(p({},r),{[n]:void 0})),o(y(p({},r),{[n]:{open:!1,color:h||"primary"}}))},openLoader:n=>{r[n]?o(y(p({},r),{[n]:y(p({},r[n]),{open:!0})})):console.error("Loader does'nt exist. Name: "+n)},closeLoader:n=>{r[n]?o(y(p({},r),{[n]:y(p({},r[n]),{open:!1})})):console.error("Loader does'nt exist. Name: "+n)}};return t(G.Provider,{value:p(p({},r),a),children:e.children})}const q=T.createContext(void 0);function _e(e){const[r,o]=c.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),a={createBanner:(n,h,d,E)=>{console.log(E),r[n]&&o(y(p({},r),{[n]:void 0})),o(y(p({},r),{[n]:{open:!0,severity:h||"success",title:d||"",message:E||""}}))},openBanner:n=>{r[n]?o(y(p({},r),{[n]:y(p({},r[n]),{open:!0})})):console.error("Banner does'nt exist. Name: "+n)},closeBanner:n=>{r[n]?o(y(p({},r),{[n]:y(p({},r[n]),{open:!1})})):console.error("Banner does'nt exist. Name: "+n)}};return t(q.Provider,{value:p(p({},r),a),children:e.children})}const Y=re({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function je(){const[e,r]=c.exports.useState(Y.palette.primary.light);return t("div",{className:"wrapper",children:t(ne,{children:t("meta",{name:"theme-color",content:e})})})}const J=T.createContext(void 0);function He(e){const[r,o]=c.exports.useState({fontSize:{sm:Number(localStorage.getItem("font_sm"))||15,md:Number(localStorage.getItem("font_md"))||25}}),s=()=>{r.fontSize.md<60&&(o(y(p({},r),{fontSize:{sm:r.fontSize.sm+1,md:r.fontSize.md+1}})),l())},i=()=>{r.fontSize.sm>2&&(o(y(p({},r),{fontSize:{sm:r.fontSize.sm-1,md:r.fontSize.md-1}})),l())};function l(){localStorage.setItem("font_md",r.fontSize.md),localStorage.setItem("font_sm",r.fontSize.sm)}const a={reduceFontSize:i,increaseFontSize:s};return t(J.Provider,{value:p(p({},r),a),children:e.children})}function Ge({className:e}){const r=c.exports.useContext(J);return t("div",{id:"",className:e,children:g(oe,{className:"button-group",children:[t(A,{"aria-label":"reduce",onClick:()=>{r.reduceFontSize()},children:t(se,{fontSize:"small"})}),t(A,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8"}),t(A,{"aria-label":"increase",onClick:()=>{r.increaseFontSize()},children:t(ie,{fontSize:"small"})})]})})}const qe=D(Ge)`
  text-align: center;
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

`,Je=[];function Ue(){return t(ae,{children:Je.map((e,r)=>t(H,{to:e.url,children:g(le,{button:!0,children:[t(ce,{primary:e.name}),t(ue,{children:t(de,{})})]},e.name)},r))})}const We=D(Ue)`
  
`,w=T.createContext(void 0);function Ve(e){const r=c.exports.useContext(G),[o,s]=c.exports.useState(sessionStorage.getItem("currLines")||!1),[i,l]=c.exports.useState([]),[a,n]=c.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[h,d]=c.exports.useState(0),[E,b]=c.exports.useState(!1),C="https://musicline-backend-basssites.vercel.app",P=u=>{b(!0),r.openLoader("main"),fetch(`${C}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:u})}).then(m=>m.json()).then(m=>{if(r.closeLoader("main"),sessionStorage.removeItem("currLines"),m==null?void 0:m.lyrics){let f=m.lyrics,x=[];f.split(/(?:\r\n|\r|\n)/g).map(v=>{v.length>=2&&x.push({src:v,trans:""})}),n(x),s(f),l(f.split(" "));let k=document.querySelector(".gsst_a");k&&k.dispatchEvent(new Event("click")),b(!0)}}).catch(m=>{r.closeLoader("main"),b(!0)})},O=()=>{let u=!1;for(let m=0;m<a.length;m++){let f=a[m];if(u===!0)break;if(f.trans.length<=1||f.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."){u=!0,M(f.src,m);break}else continue}},M=(u,m)=>{fetch(`${C}/line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:a})}).then(f=>f.json()).then(f=>{var k,v;let x=a;(f==null?void 0:f.trans.length)?(f.trans.map((R,U)=>{x[U]={src:x[U].src,trans:R}}),n(x),sessionStorage.setItem("currLines",JSON.stringify(a)),d(h+1)):(f==null?void 0:f.trans)?(x[m]={src:u,trans:f==null?void 0:f.trans},n(x),((k=a[a.length-1])==null?void 0:k.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(a)),d(h+1)):(a[m].trans===void 0&&(x[m]={src:u,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),a[m].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(x[m]={src:u,trans:"[missing]"}),n(x),((v=a[a.length-1])==null?void 0:v.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(a)),d(h+1))}).catch(f=>{var v;let x=a;a[m].trans===""&&(x[m]={src:u,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),a[m].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(x[m]={src:u,trans:"[missing]"}),n(x),((v=a[a.length-1])==null?void 0:v.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(a)),d(h+1),console.log(f)})},N={getLines:P,getLinesTrans:M,checkNextTrans:O};return t(w.Provider,{value:p({proccess:E,currLyrics:o,singles:i,lines:a,cou:h},N),children:e.children})}function Ke({className:e}){return c.exports.useContext(w),t(B,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(o=>t(H,{to:o.url,children:t(A,{sx:{my:2},children:o.name})},o.name))})}const Qe=D(Ke)`
  
`,Xe=o=>{var s=o,{className:e}=s,r=S(s,["className"]);const i=c.exports.useContext(I),l=c.exports.useContext(w);return t(pe,{position:"static",className:e,children:t(he,{maxWidth:"xl",children:g(me,{disableGutters:!0,children:[t(B,{sx:{display:{xs:"flex",md:"none"}},children:t(fe,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{i.openDrawer(!0,"left","temporary",We)},color:"inherit",children:t(ge,{})})}),t(H,{to:"/",children:t(L,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),l.lines[0]&&t(qe,{}),t(Qe,{className:"nav-bar"})]})})})},Ye=D(Xe)`
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
`;function Ze(o){var s=o,{className:e}=s,r=S(s,["className"]);return t("div",{className:e,children:r.children})}const et=D(Ze)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  padding: 25px;
  background-color: ${e=>e.theme.palette.primary.light};
`;function tt({className:e}){return t("div",{id:"FOOTER",className:e})}D(tt)`
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

`;function rt(o){var s=o,{className:e}=s,r=S(s,["className"]);const i=c.exports.useContext(I);return t(De,{className:e,anchor:i.anchor,open:i.open,variant:i.permanent,onClose:()=>{i.closeDrawer(!1)},children:t(B,{className:"drawer-layout",sx:{width:i.anchor==="top"||i.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{i.closeDrawer(!1)},children:t(i.child,{})})})}const nt=D(rt)`
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
`;function ot({className:e}){const[r,o]=c.exports.useState(!0),s=()=>{o(!1)};return g(xe,{id:"main-modal-root",className:e,open:r,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(ye,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(Ee,{children:t(Ce,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(be,{children:t(A,{onClick:s,children:"Close"})})]})}D(ot)`
  
`;function st(o){var s=o,{className:e}=s,r=S(s,["className"]);const[i,l]=c.exports.useState(!0);return t(ve,{className:e,open:i,onClose:()=>{l(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}D(st)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function it({className:e}){return t("div",{id:"",className:e})}const at=D(it)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function lt({className:e}){const r=c.exports.useContext(w),o=c.exports.useContext(q);c.exports.useEffect(()=>{window.onload=()=>{const l=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],a={childList:!1,attributes:!0,subtree:!1};function n(){s()}new MutationObserver(n).observe(l,a)}},[]);let s=()=>{setTimeout(()=>{let l=document.querySelectorAll(".gs-title");document.querySelectorAll(".gsc-adBlock").forEach(n=>{n.parentNode.appendChild(n)}),l&&l.forEach((n,h)=>{if(n.innerText.includes("Lyrics")){let d=n.innerText.replace("Lyrics | Musixmatch"," ");n.innerText=d;const E={artistName:encodeURI(d.split("-")[0]),songName:encodeURI(d.split("-")[1])};n.addEventListener("click",b=>{r.proccess||r.getLines(E)})}else n.innerText.includes("Lyrics")||n.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&n.parentElement.parentElement.parentElement.remove()})},50)};function i(l){let a=document.querySelector("#gsc-i-id1");if(a)if(l.target.value.length<=1){let n=document.querySelector(".gsst_a");n&&n.dispatchEvent(new Event("click"))}else{a.value=l.target.value;let n=document.querySelectorAll(".gsc-search-box button")[0];n?setTimeout(()=>{n.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(o.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else o.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}return g("div",{id:"",className:e,children:[t(Se,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:i,autoFocus:!1,autoComplete:"off"}),t("div",{className:"gcse-search"})]})}const ct=D(lt)`
  *,::before,::after{
      background-color: '#ffffff0';
  }
`;function ut(o){var s=o,{className:e}=s,r=S(s,["className"]);const i=c.exports.useContext(w),[l,a]=c.exports.useState(!1),[n,h]=c.exports.useState(5e4),[d,E]=c.exports.useState([]);c.exports.useEffect(()=>{var u;((u=i.lines[i.lines.length-1])==null?void 0:u.trans).length>=1&&h(0)},[i.lines]);const b=()=>{var u;((u=i.lines[i.lines.length-1])==null?void 0:u.trans).length>=1&&(a(!0),P())},C=()=>{a(!1)},P=c.exports.useCallback(()=>{O()},[]);function O(){fetch("https://musicline-backend-basssites.vercel.app/single-trans",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(r.lyric)})}).then(u=>u.json()).then(u=>{(u==null?void 0:u.results[0])?E(u.results):E(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"])}).catch(u=>{console.log(u)})}const M=()=>d[1]?d.map((N,u)=>g(z,{children:[u>0&&t("hr",{}),t("p",{className:"tt-p",children:N})]})):t("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"});return t(Le,{onClickAway:C,children:t(we,{className:e,title:g(z,{children:[t(L,{color:"inherit",children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD:"}),t("div",{className:"tt-body",style:{textAlign:"center",maxHeight:"110px",overflowY:"auto",direction:"ltr"},children:d[0]?t(M,{}):t(X,{sx:{margin:"8px"},color:"primary"})})]}),arrow:!0,enterDelay:n,enterTouchDelay:n,leaveTouchDelay:60*1e3,leaveDelay:0,onOpen:()=>{P()},PopperProps:{disablePortal:!1},onClose:C,open:l,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:t("p",{className:"single-lyric",onClick:b,children:r.lyric})})})}const dt=D(ut)`

`;function pt(o){var s=o,{className:e}=s,r=S(s,["className"]);const i=c.exports.useContext(w);return c.exports.useEffect(()=>{i.checkNextTrans()},[i,i.cou]),t(B,{children:t($,{container:!0,spacing:2,children:i.lines&&t("div",{id:"lyrics_body",className:e,children:i.lines.map((l,a)=>{var n;return l.src.includes("[")&&(l.trans="   "),g("div",{children:[l.src.includes("[")&&g(z,{children:[t("br",{}),t("br",{})]}),t($,{className:"lyrics-line en-line",item:!0,children:l.src.split(" ").map((h,d)=>t(dt,{lyric:h},d))},a.toString()+Math.floor(Math.random()*3e4)),t($,{item:!0,className:"lyrics-line he-line",children:t(z,{children:((n=l.trans)==null?void 0:n.length)>2?l.trans.split(" ").map((h,d)=>{if(l.trans!=="   ")return t("small",{onLoad:()=>{i.checkNextTrans()},className:"single-trans",children:h},d)}):t("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})},a.toString()+Math.floor(Math.random()*3e4))]})})})})})}const ht=D(pt)`
  font-family: 'Assistant','Roboto', 'sans-serif';
  /* text-align: center; */
  /* padding: 10px; */
  /* max-width: 90%; */
  font-size: 20px;
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

`;function mt({className:e}){const r=c.exports.useContext(w),o=c.exports.useContext(J);c.exports.useEffect(()=>{},[o]);function s(i){i.preventDefault()}return g("div",{className:e,children:[!r.currLyrics&&g("div",{children:[g(L,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",t("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D1\u05E9\u05D5\u05E8\u05D4"]}),g(L,{variant:"h3",className:"page-h3",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA",t("br",{}),t("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})]})]}),t(B,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:s,children:t(ct,{})}),r.currLyrics&&t(ht,{className:"lyrics-body",fontSize:o.fontSize})]})}const ft=D(mt)`

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
    
`;function gt({className:e}){return t("div",{className:e,children:t(L,{variant:"h2",className:"page-h2",children:"About Page"})})}const Dt=D(gt)`

`;function xt({className:e}){return g("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(L,{variant:"h2",className:"page-h2",children:"404"}),t(L,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const yt=D(xt)`

`;function Et({className:e}){var d,E,b;const r=c.exports.useContext(I),o=c.exports.useContext(G),s=c.exports.useContext(q),i=c.exports.useRef(null),l=Ne({key:"muirtl",stylisPlugins:[Pe,Me]});function a(){n()}const n=()=>{const C=document.createElement("script");C.type="text/javascript",C.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",C.defer=!0,document.body.appendChild(C)};c.exports.useEffect(()=>{a()},[]);const h=C=>{s.closeBanner(C)};return g("div",{className:e,ref:i,children:[t(ke,{value:l,children:g(Te,{children:[t(je,{}),t(Ye,{className:"header"}),s.main.open&&g(_,{severity:"warning",className:"main-alert",children:[t(Q,{children:s.main.title}),s.main.message]}),((d=s.error)==null?void 0:d.open)&&g(_,{severity:"error",className:"error-alert",onClose:()=>{s.closeBanner("error")},children:[t(Q,{children:(E=s.error)==null?void 0:E.title}),(b=s.error)==null?void 0:b.message]}),t(et,{children:g(Ae,{children:[t(j,{path:"/",element:t(ft,{className:"page"})}),t(j,{path:"/about",element:t(Dt,{className:"page"})}),t(j,{path:"*",element:t(yt,{className:"page"})})]})}),r.open&&r.child&&t(nt,{className:"drawer"}),o.main.open&&t(X,{color:o.main.color||"primary"}),o.circular.open&&t(ze,{color:o.main.color||"primary"}),s.snackbar.open&&t(Be,{open:s.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(_,{onClose:()=>{h("snackbar")},severity:s.snackbar.severity,sx:{width:"100%"},children:s.snackbar.message})})]})}),t(at,{})]})}const Ct=D(Et)`
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
`,bt=[He,Re,_e,$e,Ve];function vt(e){return t(z,{children:bt.reduceRight((r,o)=>t(o,{children:r}),e.children)})}Fe.render(t(T.StrictMode,{children:t(vt,{children:t(Ie,{theme:Y,children:t(Ct,{className:"app"})})})}),document.getElementById("root"));
