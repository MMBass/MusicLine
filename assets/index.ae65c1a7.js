var ae=Object.defineProperty,le=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var W=(t,r,n)=>r in t?ae(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,m=(t,r)=>{for(var n in r||(r={}))K.call(r,n)&&W(t,n,r[n]);if($)for(var n of $(r))Y.call(r,n)&&W(t,n,r[n]);return t},C=(t,r)=>le(t,ue(r));var w=(t,r)=>{var n={};for(var o in t)K.call(t,o)&&r.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&$)for(var o of $(t))r.indexOf(o)<0&&Y.call(t,o)&&(n[o]=t[o]);return n};import{R as I,r as l,j as e,c as ee,M as ce,a as D,B as de,b as M,d as pe,A as he,s as g,L as te,N as G,e as re,f as ne,g as me,h as De,i as O,I as fe,k as ge,l as xe,C as Ee,T as ye,m as L,G as F,n as Ce,o as Se,p as be,D as ve,q as we,t as Le,u as Ne,v as ke,w as Te,x as Ae,y as ze,F as P,z as oe,E as Be,H as Fe,J as Ie,K as H,O as Q,P as Me,Q as X,S as Pe,U as Oe,V as Re,W as $e,X as _e,Y as je}from"./vendor.3651ae8b.js";const He=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerpolicy&&(u.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?u.credentials="include":s.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(s){if(s.ep)return;s.ep=!0;const u=n(s);fetch(s.href,u)}};He();const _=I.createContext(void 0);function Ge(t){const[r,n]=l.exports.useState({}),u={openDrawer:(d,i,p="temporary",a)=>{n({open:d,anchor:i,permanent:p,child:a})},closeDrawer:(d,i,p="temporary",a)=>{n({open:d,anchor:i,permanent:p,child:a})}};return e(_.Provider,{value:m(m({},r),u),children:t.children})}const q=I.createContext(void 0);function qe(t){const[r,n]=l.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),d={createLoader:(i,p)=>{r[i]&&n(C(m({},r),{[i]:void 0})),n(C(m({},r),{[i]:{open:!1,color:p||"primary"}}))},openLoader:i=>{r[i]?n(C(m({},r),{[i]:C(m({},r[i]),{open:!0})})):console.error("Loader does'nt exist. Name: "+i)},closeLoader:i=>{r[i]?n(C(m({},r),{[i]:C(m({},r[i]),{open:!1})})):console.error("Loader does'nt exist. Name: "+i)}};return e(q.Provider,{value:m(m({},r),d),children:t.children})}const j=I.createContext(void 0);function Je(t){const[r,n]=l.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),d={createBanner:(i,p,a,c)=>{r[i]&&n(C(m({},r),{[i]:void 0})),n(C(m({},r),{[i]:{open:!0,severity:p||"success",title:a||"",message:c||""}}))},openBanner:i=>{r[i]?n(C(m({},r),{[i]:C(m({},r[i]),{open:!0})})):console.error("Banner does'nt exist. Name: "+i)},closeBanner:i=>{r[i]?n(C(m({},r),{[i]:C(m({},r[i]),{open:!1})})):console.error("Banner does'nt exist. Name: "+i)}};return e(j.Provider,{value:m(m({},r),d),children:t.children})}const se=ee({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function Ue(){const[t,r]=l.exports.useState(se.palette.primary.light);return e("div",{className:"wrapper",children:e(ce,{children:e("meta",{name:"theme-color",content:t})})})}const J=I.createContext(void 0);function Ve(t){const[r,n]=l.exports.useState({fontSize:{sm:Number(localStorage.getItem("font_sm"))||15,md:Number(localStorage.getItem("font_md"))||25},colors:"pink"}),o=()=>{r.fontSize.md<60&&(n(C(m({},r),{fontSize:{sm:r.fontSize.sm+1,md:r.fontSize.md+1}})),u())},s=()=>{r.fontSize.sm>2&&(n(C(m({},r),{fontSize:{sm:r.fontSize.sm-1,md:r.fontSize.md-1}})),u())};function u(){localStorage.setItem("font_md",r.fontSize.md),localStorage.setItem("font_sm",r.fontSize.sm)}function d(){localStorage.setItem("colors_mode",r.colors)}function i(a){n(C(m({},r),{colors:a})),d()}const p={reduceFontSize:s,increaseFontSize:o,setColors:i};return e(J.Provider,{value:m(m({},r),p),children:t.children})}function We({className:t}){const r=l.exports.useContext(J);return e("div",{id:"",className:t,children:D(de,{className:"button-group",children:[e(M,{"aria-label":"reduce",onClick:()=>{r.reduceFontSize()},children:e(pe,{fontSize:"small"})}),e(M,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8"}),e(M,{"aria-label":"increase",onClick:()=>{r.increaseFontSize()},children:e(he,{fontSize:"small"})})]})})}const Ke=g(We)`
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

`,Ye=[];function Qe(){return e(te,{children:Ye.map((t,r)=>e(G,{to:t.url,children:D(re,{button:!0,children:[e(ne,{primary:t.name}),e(me,{children:e(De,{})})]},t.name)},r))})}const Xe=g(Qe)`
  
`,N=I.createContext(void 0);function Ze(t){const r=l.exports.useContext(q),n=l.exports.useContext(j),[o,s]=l.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("cuurSongTitle")||""),[u,d]=l.exports.useState(sessionStorage.getItem("currLines")||!1),[i,p]=l.exports.useState([]),[a,c]=l.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[x,S]=l.exports.useState(0),[k,T]=l.exports.useState(!1),R="http://localhost:5000",A=(b,E)=>{T(!0),r.openLoader("main"),n.error&&n.closeBanner("error"),fetch(`${R}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:b})}).then(h=>h.json()).then(h=>{if(console.log(h),r.closeLoader("main"),h==null?void 0:h.lyrics){s(E);let y=h.lyrics,z=[];y.split(/(?:\r\n|\r|\n)/g).map(B=>{B.length>=2&&z.push({src:B,trans:""})}),c(z),d(y),p(y.split(" "));let v=document.querySelector(".gsst_a");v&&v.dispatchEvent(new Event("click")),T(!0)}else n.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8","")}).catch(h=>{console.log(h),r.closeLoader("main"),n.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8",""),T(!0)})},f=()=>{let b=!1;for(let E=0;E<a.length;E++){let h=a[E];if(b===!0)break;if(h.trans.length<=1||h.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."){b=!0,U(h.src,E);break}else continue}},U=(b,E)=>{fetch(`${R}/line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:a})}).then(h=>h.json()).then(h=>{var z,v;let y=a;(h==null?void 0:h.trans.length)?(h.trans.map((B,V)=>{y[V]={src:y[V].src,trans:B}}),c(y),sessionStorage.setItem("currLines",JSON.stringify(a)),sessionStorage.setItem("cuurSongTitle",o),S(x+1)):(h==null?void 0:h.trans)?(y[E]={src:b,trans:h==null?void 0:h.trans},c(y),((z=a[a.length-1])==null?void 0:z.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(a)),sessionStorage.setItem("cuurSongTitle",o)),S(x+1)):(a[E].trans===void 0&&(y[E]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),a[E].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(y[E]={src:b,trans:"[missing]"}),c(y),((v=a[a.length-1])==null?void 0:v.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(a)),sessionStorage.setItem("cuurSongTitle",o)),S(x+1))}).catch(h=>{var v;let y=a;a[E].trans===""&&(y[E]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),a[E].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(y[E]={src:b,trans:"[missing]"}),c(y),((v=a[a.length-1])==null?void 0:v.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(a)),S(x+1),console.log(h)})},ie={getLines:A,getLinesTrans:U,checkNextTrans:f};return e(N.Provider,{value:m({title:o,proccess:k,currLyrics:u,singles:i,lines:a,cou:x},ie),children:t.children})}function et({className:t}){return l.exports.useContext(N),e(O,{className:t,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(n=>e(G,{to:n.url,children:e(M,{sx:{my:2},children:n.name})},n.name))})}g(et)`
  
`;function tt({className:t}){return e("div",{id:"",className:t,children:e(fe,{children:e(ge,{className:"mui-rounded-icon"})})})}const rt=g(tt)`
  .mui-rounded-icon{
    background-color: white;
    color: ${t=>"#595959"};
    border-radius: 12px;
  }
`,nt=n=>{var o=n,{className:t}=o,r=w(o,["className"]);const s=l.exports.useContext(_),u=l.exports.useContext(N),d=()=>{s.openDrawer(!0,"left","temporary",Xe)},i=function(){sessionStorage.removeItem("currLines")};return e(xe,{position:"sticky",className:t,children:e(Ee,{maxWidth:"xl",children:D(ye,{disableGutters:!0,children:[e(G,{to:"/",onClick:()=>{i()},children:e(L,{variant:"h6",noWrap:!0,component:"h1",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),u.lines[0]&&e(Ke,{}),e(O,{sx:{display:{xs:"flex",md:"flex"},flexGrow:1},children:e(rt,{onClick:d})})]})})})},ot=g(nt)`
  background-color: ${t=>t.theme.palette.primary.dark};
  color: ${t=>t.theme.palette.secondary.main};

  button{
    color: ${t=>t.theme.palette.secondary.main};
  }

  .MuiBox-root{
    justify-content: flex-end;
  }

  .MuiButtonBase-root{
    padding-inline-start: 0;
  }
`;function st(n){var o=n,{className:t}=o,r=w(o,["className"]);return e("div",{className:t,children:r.children})}const it=g(st)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  background-color: ${t=>t.theme.palette.primary.light};
`;function at({className:t}){return e("div",{id:"FOOTER",className:t,children:e(F,{container:!0,rowSpacing:6,columnSpacing:2,children:e(F,{item:!0,xs:12,sm:4,children:D(te,{children:[e(Ce,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA:"}),e(re,{children:e(ne,{primary:"musicline@mail.com"})})]})})})})}const lt=g(at)`
  color: ${t=>t.theme.palette.secondary.dark};
  background-color: ${t=>t.theme.palette.secondary.main};
  padding: 25px 30px 30px 25px;
  text-align: start;
  
  li span{
    color: ${t=>t.theme.palette.secondary.dark};
    font-size: 15px;
  }

  h5{
    background-color: unset;
    font-weight: 500;
    font-size: 17px;
    color: #303030;
    margin: unset;
  }

`;function ut(n){var o=n,{className:t}=o,r=w(o,["className"]);const s=l.exports.useContext(_);return e(Se,{className:t,anchor:s.anchor,open:s.open,variant:s.permanent,onClose:()=>{s.closeDrawer(!1)},children:e(O,{className:"drawer-layout",sx:{width:s.anchor==="top"||s.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{s.closeDrawer(!1)},children:e(s.child,{})})})}const ct=g(ut)`
  color: #F4F5F7;
  
  .MuiDrawer-paper {
    background-color: ${t=>t.theme.palette.primary.main};
    color: ${t=>t.theme.palette.secondary.main};
  }

  svg{
    color: ${t=>t.theme.palette.secondary.main};
  }

  a{
    color: ${t=>t.theme.palette.secondary.main};
    text-decoration: none;
  }
`;function dt({className:t}){const[r,n]=l.exports.useState(!0),o=()=>{n(!1)};return D(be,{id:"main-modal-root",className:t,open:r,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[e(ve,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),e(we,{children:e(Le,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),e(Ne,{children:e(M,{onClick:o,children:"Close"})})]})}g(dt)`
  
`;function pt(n){var o=n,{className:t}=o,r=w(o,["className"]);const[s,u]=l.exports.useState(!0);return e(ke,{className:t,open:s,onClose:()=>{u(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}g(pt)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function ht({className:t}){return e("div",{id:"",className:t})}const mt=g(ht)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function Dt({className:t}){const[r,n]=l.exports.useState(""),o=l.exports.useContext(N),s=l.exports.useContext(j);l.exports.useEffect(()=>{window.onload=()=>{const p=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],a={childList:!1,attributes:!0,subtree:!1};function c(){d()}new MutationObserver(c).observe(p,a)}},[]),l.exports.useEffect(()=>{n(o.title)},[o.title]);function u(p){n(p.target.value),i(p)}const d=()=>{setTimeout(()=>{let p=document.querySelectorAll(".gs-title");document.querySelectorAll(".gsc-adBlock").forEach(c=>{c.parentNode.appendChild(c)}),p&&p.forEach((c,x)=>{if(c.innerText.includes("Lyrics")){let S=c.innerText.replace("Lyrics | Musixmatch"," ");c.innerText=S;const k={artistName:encodeURI(S.split("-")[0]),songName:encodeURI(S.split("-")[1])};c.addEventListener("click",T=>{o.proccess||o.getLines(k,S)})}else c.innerText.includes("Lyrics")||c.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&c.parentElement.parentElement.parentElement.remove()})},50)};function i(p){let a=document.querySelector("#gsc-i-id1");if(a)if(p.target.value.length<=1){let c=document.querySelector(".gsst_a");c&&c.dispatchEvent(new Event("click"))}else{a.value=p.target.value;let c=document.querySelectorAll(".gsc-search-box button")[0];c?setTimeout(()=>{c.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(s.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else s.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}return D("div",{id:"",className:t,children:[e(Te,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:u,autoFocus:!1,autoComplete:"off",value:r}),e("div",{className:"gcse-search"})]})}const ft=g(Dt)`
  *,::before,::after{
      background-color: '#ffffff0';
  }

  input, fieldset, label{
   color: white !important;
   border-color: white !important;
  }

`;function gt(n){var o=n,{className:t}=o,r=w(o,["className"]);const s=l.exports.useContext(N),[u,d]=l.exports.useState(!1),[i,p]=l.exports.useState(5e4),[a,c]=l.exports.useState([]);l.exports.useEffect(()=>{var f;((f=s.lines[s.lines.length-1])==null?void 0:f.trans).length>=1&&p(0)},[s.lines]);const x=()=>{var f;((f=s.lines[s.lines.length-1])==null?void 0:f.trans).length>=1&&(d(!0),k())},S=()=>{d(!1)},k=l.exports.useCallback(()=>{T()},[]);function T(){fetch("https://musicline-backend-basssites.vercel.app/single-trans",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(r.lyric)})}).then(f=>f.json()).then(f=>{(f==null?void 0:f.results[0])?c(f.results):c(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"])}).catch(f=>{console.log(f)})}const R=()=>a[1]?a.map((A,f)=>D(P,{children:[f>0&&e("hr",{}),e("p",{className:"tt-p",children:A})]})):e("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"});return e(Ae,{onClickAway:S,children:e(ze,{className:t,title:D(P,{children:[e(L,{color:"inherit",children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD:"}),e("div",{className:"tt-body",style:{textAlign:"center",maxHeight:"110px",overflowY:"auto",direction:"ltr"},children:a[0]?e(R,{}):e(oe,{sx:{margin:"8px"},color:"primary"})})]}),arrow:!0,enterDelay:i,enterTouchDelay:i,leaveTouchDelay:60*1e3,leaveDelay:0,onOpen:()=>{k()},PopperProps:{disablePortal:!1},onClose:S,open:u,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:D("p",{className:"single-lyric",onClick:x,children:["\xA0 ",r.lyric," "]})})})}const Z=g(gt)`

`;function xt(n){var o=n,{className:t}=o,r=w(o,["className"]);const s=l.exports.useContext(N);return l.exports.useEffect(()=>{s.checkNextTrans()},[s,s.cou]),e(O,{children:e(F,{container:!0,spacing:2,children:s.lines&&D("div",{id:"lyrics_body",className:t,children:[e(F,{className:"lyrics-line en-line",item:!0,children:e(L,{variant:"h6",noWrap:!0,component:"h3",children:s.title&&s.title.split(" ").map((u,d)=>e(Z,{lyric:u},d))})}),s.lines.map((u,d)=>{var i;return u.src.includes("[")&&(u.trans="   "),D("div",{children:[d>0&&u.src.includes("[")&&D(P,{children:[e("br",{}),e("br",{})]}),e(F,{className:"lyrics-line en-line",item:!0,children:u.src.split(" ").map((p,a)=>e(Z,{lyric:p},a))},d.toString()+Math.floor(Math.random()*3e4)),e(F,{item:!0,className:"lyrics-line he-line",children:e(P,{children:((i=u.trans)==null?void 0:i.length)>2?u.trans.split(" ").map((p,a)=>{if(u.trans!=="   ")return D("small",{onLoad:()=>{s.checkNextTrans()},className:"single-trans",children:[p," \xA0"]},a)}):e("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})},d.toString()+Math.floor(Math.random()*3e4))]})})]})})})}const Et=g(xt)`
  font-family: 'Assistant','Roboto', 'sans-serif';
  /* max-width: 90%; */
  font-size: 20px;
  margin: 25px;
  margin-inline-end: 10px;
  padding: 15px 50px;
  padding-bottom: 40px;
  padding-inline-start: 50px;
  margin-top: 55px;

  background-color: #EBECF0;
  color: #172B4D;
  border-radius: 10px;

  @media (max-width: 600px) {
    padding-inline-start: 15px;
    padding-inline-end: 15px;
  }
  
  h3{
    text-align: center;
    margin-top: 15px;
    margin-bottom: 25px;
    white-space: break-spaces;

    @media (max-width: 600px) {
      font-size: 19px;
    }
  }

  .en-line{
    /* overflow: hidden; // todo remove after grid fixed? */
  }

  .en-line p, .he-line small, h3{
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
    padding: 0px 2px;
    text-transform: none;
  }

  .single-lyric{
    cursor: pointer;
  }

  .he-line{
      font-size: ${t=>t.fontSize.md-5+"px"};
  }

  .en-line{
      margin-top: 8px;
      direction: rtl;
      text-align: left;
      font-size: ${t=>t.fontSize.md+"px"};
  }

  @media (max-width: 600px) {
      .he-line{
        font-size: ${t=>t.fontSize.md-5+"px"};
      }

      .en-line{
        font-size: ${t=>t.fontSize.md+"px"};
      }
  }

`;function yt({className:t}){const r=l.exports.useContext(N),n=l.exports.useContext(J);l.exports.useEffect(()=>{},[n]);function o(s){s.preventDefault()}return D("div",{className:t,children:[D("div",{className:"home-top",children:[!r.currLyrics&&D("div",{children:[D(L,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",e("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D1\u05E9\u05D5\u05E8\u05D4"]}),D(L,{variant:"h3",className:"page-h3",children:["\u05D7\u05E4\u05E9 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA",e("br",{}),"\u05D5\u05E7\u05D1\u05DC \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA",e("br",{}),e("p",{className:"small-one",children:"\u05DC\u05D0 \u05DE\u05E6\u05D0\u05EA? \u05E0\u05E1\u05D4 \u05DC\u05D7\u05E4\u05E9 \u05E2\u05DD \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"}),e("div",{className:"small-two",children:e("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})})]})]}),e(O,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:o,children:e(ft,{})})]}),r.currLyrics&&e(Et,{className:"lyrics-body",fontSize:n.fontSize})]})}const Ct=g(yt)`
    .home-top{
       padding: 0 35px;

       @media (max-width: 600px) {
        padding: 0 25px;
        }
    }
    

    .small-one{
        @media (max-width: 600px) {
            font-size: 16px;
            }
        font-size: 25px;
        margin-bottom: 15px;
    }

    .small-two{
        word-spacing: -0.5px;
    }

    .MuiTextField-root { 
        margin-top: 35px;
        /* margin-inline-start: 10px; */
        width: 480px;
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
    
`;function St({className:t}){return D("div",{id:"NO_MATCH_WRAPPER",className:t,children:[e(L,{variant:"h2",className:"page-h2",children:"404"}),e(L,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const bt=g(St)`

`;function vt({className:t}){var p,a,c;const r=l.exports.useContext(_),n=l.exports.useContext(q),o=l.exports.useContext(j);l.exports.useRef(null);const s=Be({key:"muirtl",stylisPlugins:[Re,$e]});function u(){d()}const d=()=>{const x=document.createElement("script");x.type="text/javascript",x.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",x.defer=!0,document.body.appendChild(x)};l.exports.useEffect(()=>{u()},[]);const i=x=>{o.closeBanner(x)};return ee({palette:{mode:"dark"}}),D("div",{className:t,children:[e(Fe,{value:s,children:D(Ie,{children:[e(Ue,{}),e(ot,{className:"header"}),o.main.open&&D(H,{severity:"warning",className:"main-alert",children:[e(Q,{children:o.main.title}),o.main.message]}),((p=o.error)==null?void 0:p.open)&&D(H,{severity:"error",className:"error-alert",onClose:()=>{o.closeBanner("error")},children:[e(Q,{children:(a=o.error)==null?void 0:a.title}),(c=o.error)==null?void 0:c.message]}),e(it,{children:D(Me,{children:[e(X,{path:"/",element:e(Ct,{className:"page"})}),e(X,{path:"*",element:e(bt,{className:"page"})})]})}),r.open&&r.child&&e(ct,{className:"drawer"}),n.main.open&&e(oe,{color:n.main.color||"primary"}),n.circular.open&&e(Pe,{color:n.main.color||"primary"}),o.snackbar.open&&e(Oe,{open:o.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:e(H,{onClose:()=>{i("snackbar")},severity:o.snackbar.severity,sx:{width:"100%"},children:o.snackbar.message})}),e(lt,{})]})}),e(mt,{})]})}const wt=g(vt)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  color: ${t=>t.theme.palette.secondary.main};

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
    color: ${t=>t.theme.palette.secondary.main};
    @media (max-width: 600px) {
      font-size: 46px;
    }
  }

  .page-h3{
    margin: 15px 0px 0px  0px;
    font-size: 38px; // 29
    font-weight: 500;
    color: ${t=>t.theme.palette.secondary.main};

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
`,Lt=[Ve,Ge,Je,qe,Ze];function Nt(t){return e(P,{children:Lt.reduceRight((r,n)=>e(n,{children:r}),t.children)})}_e.render(e(I.StrictMode,{children:e(Nt,{children:e(je,{theme:se,children:e(wt,{className:"app"})})})}),document.getElementById("root"));
