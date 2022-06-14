var ue=Object.defineProperty,le=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var W=(t,r,n)=>r in t?ue(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,D=(t,r)=>{for(var n in r||(r={}))K.call(r,n)&&W(t,n,r[n]);if($)for(var n of $(r))Y.call(r,n)&&W(t,n,r[n]);return t},b=(t,r)=>le(t,ce(r));var N=(t,r)=>{var n={};for(var s in t)K.call(t,s)&&r.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&$)for(var s of $(t))r.indexOf(s)<0&&Y.call(t,s)&&(n[s]=t[s]);return n};import{R as F,r as u,j as e,c as X,M as de,a as f,B as pe,b as P,d as he,A as me,s as S,L as ee,N as G,e as te,f as re,g as De,h as fe,i as _,I as ge,k as xe,l as Ee,C as ye,T as Ce,m as k,n as Se,o as J,p as ne,G as O,q as be,t as ve,u as we,D as Le,v as Te,w as Ne,x as ke,y as Ae,z as ze,E as Be,F as Fe,H as R,J as se,K as Ie,O as Me,P as Pe,Q as Oe,S as Z,U as Re,V as $e,W as _e,X as je,Y as He,Z as Je}from"./vendor.47ea073b.js";const Ge=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}};Ge();const j=F.createContext(void 0);function qe(t){const[r,n]=u.exports.useState({}),l={openDrawer:(h,a,d="temporary",o)=>{n({open:h,anchor:a,permanent:d,child:o})},closeDrawer:(h,a,d="temporary",o)=>{n({open:h,anchor:a,permanent:d,child:o})}};return e(j.Provider,{value:D(D({},r),l),children:t.children})}const H=F.createContext(void 0);function Ue(t){const[r,n]=u.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),h={createLoader:(a,d)=>{r[a]&&n(b(D({},r),{[a]:void 0})),n(b(D({},r),{[a]:{open:!1,color:d||"primary"}}))},openLoader:a=>{r[a]?n(b(D({},r),{[a]:b(D({},r[a]),{open:!0})})):console.error("Loader does'nt exist. Name: "+a)},closeLoader:a=>{r[a]?n(b(D({},r),{[a]:b(D({},r[a]),{open:!1})})):console.error("Loader does'nt exist. Name: "+a)}};return e(H.Provider,{value:D(D({},r),h),children:t.children})}const I=F.createContext(void 0);function Ve(t){const[r,n]=u.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),h={createBanner:(a,d,o,p)=>{r[a]&&n(b(D({},r),{[a]:void 0})),n(b(D({},r),{[a]:{open:!0,severity:d||"success",title:o||"",message:p||""}}))},openBanner:a=>{r[a]?n(b(D({},r),{[a]:b(D({},r[a]),{open:!0})})):console.error("Banner does'nt exist. Name: "+a)},closeBanner:a=>{n({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),r[a]?n(b(D({},r),{[a]:b(D({},r[a]),{open:!1})})):console.error("Banner does'nt exist. Name: "+a)}};return e(I.Provider,{value:D(D({},r),h),children:t.children})}const oe=X({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function We(){const[t,r]=u.exports.useState(oe.palette.primary.light);return e("div",{className:"wrapper",children:e(de,{children:e("meta",{name:"theme-color",content:t})})})}const q=F.createContext(void 0);function Ke(t){const[r,n]=u.exports.useState({fontSize:{sm:Number(localStorage.getItem("font_sm"))||15,md:Number(localStorage.getItem("font_md"))||25},colors:"pink"}),s=()=>{r.fontSize.md<60&&(n(b(D({},r),{fontSize:{sm:r.fontSize.sm+1,md:r.fontSize.md+1}})),l())},i=()=>{r.fontSize.sm>2&&(n(b(D({},r),{fontSize:{sm:r.fontSize.sm-1,md:r.fontSize.md-1}})),l())};function l(){localStorage.setItem("font_md",r.fontSize.md),localStorage.setItem("font_sm",r.fontSize.sm)}function h(){localStorage.setItem("colors_mode",r.colors)}function a(o){n(b(D({},r),{colors:o})),h()}const d={reduceFontSize:i,increaseFontSize:s,setColors:a};return e(q.Provider,{value:D(D({},r),d),children:t.children})}function Ye({className:t}){const r=u.exports.useContext(q);return e("div",{id:"",className:t,children:f(pe,{className:"button-group",children:[e(P,{"aria-label":"reduce",onClick:()=>{r.reduceFontSize()},children:e(he,{fontSize:"small"})}),e(P,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8"}),e(P,{"aria-label":"increase",onClick:()=>{r.increaseFontSize()},children:e(me,{fontSize:"small"})})]})})}const Ze=S(Ye)`
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

`,Qe=[];function Xe(){return e(ee,{children:Qe.map((t,r)=>e(G,{to:t.url,children:f(te,{button:!0,children:[e(re,{primary:t.name}),e(De,{children:e(fe,{})})]},t.name)},r))})}S(Xe)`
  
`;const A=F.createContext(void 0);function et(t){const r=u.exports.useContext(H),n=u.exports.useContext(I),[s,i]=u.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("cuurSongTitle")||""),[l,h]=u.exports.useState(sessionStorage.getItem("currLines")||!1),[a,d]=u.exports.useState([]),[o,p]=u.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[x,E]=u.exports.useState(0),[L,z]=u.exports.useState(!1),M="https://musicline-backend-basssites.vercel.app",B=(C,m)=>{z(!0),r.openLoader("main"),fetch(`${M}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:C})}).then(c=>c.json()).then(c=>{if(r.closeLoader("main"),sessionStorage.removeItem("currLines"),c==null?void 0:c.lyrics){i(m);let g=c.lyrics,w=[];g.split(/(?:\r\n|\r|\n)/g).map(T=>{T.length>=2&&w.push({src:T,trans:""})}),p(w),h(g),d(g.split(" "));let v=document.querySelector(".gsst_a");v&&v.dispatchEvent(new Event("click")),z(!0)}else n.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8","")}).catch(c=>{console.log(c),r.closeLoader("main"),n.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8",""),z(!0)})},y=()=>{let C=!1;for(let m=0;m<o.length;m++){let c=o[m];if(C===!0)break;if(c.trans.length<=1||c.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."){C=!0,U(c.src,m);break}else continue}},ie=(C,m)=>{fetch(`${M}/single-line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(C)})}).then(c=>c.json()).then(c=>{var g,w;if(c==null?void 0:c.trans){let v=o;console.log(c),v[m]={src:C,trans:c==null?void 0:c.trans},p(v),((g=o[o.length-1])==null?void 0:g.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("cuurSongTitle",s)),E(x+1)}else o[m].trans===void 0&&(newLines[m]={src:C,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),o[m].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(newLines[m]={src:C,trans:"[missing]"}),p(newLines),((w=o[o.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("cuurSongTitle",s)),E(x+1)}).catch(c=>{var v;let g=o;o[m].trans===""&&(g[m]={src:C,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),o[m].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(g[m]={src:C,trans:"[missing]"}),p(g),((v=o[o.length-1])==null?void 0:v.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(o)),E(x+1),console.log(c)})},U=(C,m)=>{fetch(`${M}/line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:o})}).then(c=>c.json()).then(c=>{var w,v;let g=o;(c==null?void 0:c.trans.length)?(c.trans.map((T,V)=>{g[V]={src:g[V].src,trans:T}}),p(g),sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("cuurSongTitle",s),E(x+1)):(c==null?void 0:c.trans)?(g[m]={src:C,trans:c==null?void 0:c.trans},p(g),((w=o[o.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("cuurSongTitle",s)),E(x+1)):(o[m].trans===void 0&&(g[m]={src:C,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),o[m].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(g[m]={src:C,trans:"[missing]"}),p(g),((v=o[o.length-1])==null?void 0:v.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("cuurSongTitle",s)),E(x+1))}).catch(c=>{var v;let g=o;o[m].trans===""&&(g[m]={src:C,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),o[m].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(g[m]={src:C,trans:"[missing]"}),p(g),((v=o[o.length-1])==null?void 0:v.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(o)),E(x+1),console.log(c)})},ae={getLines:B,getLinesTrans:U,getLineTrans:ie,checkNextTrans:y};return e(A.Provider,{value:D({title:s,proccess:L,currLyrics:l,singles:a,lines:o,cou:x},ae),children:t.children})}function tt({className:t}){return u.exports.useContext(A),e(_,{className:t,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(n=>e(G,{to:n.url,children:e(P,{sx:{my:2},children:n.name})},n.name))})}S(tt)`
  
`;function rt({className:t}){return e("div",{id:"",className:t,children:e(ge,{children:e(xe,{className:"mui-rounded-icon"})})})}S(rt)`
  .mui-rounded-icon{
    background-color: white;
    color: ${t=>"#595959"};
    border-radius: 12px;
  }
`;const nt=n=>{var s=n,{className:t}=s,r=N(s,["className"]);var o,p,x,E;u.exports.useContext(j);const i=u.exports.useContext(A),l=u.exports.useContext(I),[h,a]=u.exports.useState(!1),d=function(){sessionStorage.removeItem("currLines")};return u.exports.useEffect(()=>{var L;a(((L=l.error)==null?void 0:L.open)&&!0)},[(o=l.error)==null?void 0:o.open]),f(Ee,{position:"sticky",className:t,children:[e(ye,{maxWidth:"xl",children:f(Ce,{disableGutters:!0,children:[e(G,{to:"/",onClick:()=>{d()},children:e(k,{variant:"h6",noWrap:!0,component:"h1",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),i.lines[0]&&e(Ze,{})]})}),e(Se,{in:(p=l.error)==null?void 0:p.open,children:f(J,{severity:"error",className:"error-alert",onClose:()=>{l.closeBanner("error")},children:[e(ne,{children:(x=l.error)==null?void 0:x.title}),(E=l.error)==null?void 0:E.message]})})]})},st=S(nt)`
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

  .error-alert{
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    border-radius: unset;

    button{
      color: rgb(95, 33, 32);
    }
  }
`;function ot(n){var s=n,{className:t}=s,r=N(s,["className"]);return e("div",{className:t,children:r.children})}const it=S(ot)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  background-color: ${t=>t.theme.palette.primary.light};
`;function at({className:t}){return e("div",{id:"FOOTER",className:t,children:e(O,{container:!0,rowSpacing:6,columnSpacing:2,children:e(O,{item:!0,xs:12,sm:4,children:f(ee,{children:[e(be,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA:"}),e(te,{children:e(re,{primary:"musicline@mail.com"})})]})})})})}const ut=S(at)`
  color: ${t=>t.theme.palette.secondary.dark};
  background-color: #f8f8f8;
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

`;function lt(n){var s=n,{className:t}=s,r=N(s,["className"]);const i=u.exports.useContext(j);return e(ve,{className:t,anchor:i.anchor,open:i.open,variant:i.permanent,onClose:()=>{i.closeDrawer(!1)},children:e(_,{className:"drawer-layout",sx:{width:i.anchor==="top"||i.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{i.closeDrawer(!1)},children:e(i.child,{})})})}const ct=S(lt)`
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
`;function dt({className:t}){const[r,n]=u.exports.useState(!0),s=()=>{n(!1)};return f(we,{id:"main-modal-root",className:t,open:r,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[e(Le,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),e(Te,{children:e(Ne,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),e(ke,{children:e(P,{onClick:s,children:"Close"})})]})}S(dt)`
  
`;function pt(n){var s=n,{className:t}=s,r=N(s,["className"]);const[i,l]=u.exports.useState(!0);return e(Ae,{className:t,open:i,onClose:()=>{l(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}S(pt)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function ht({className:t}){return e("div",{id:"",className:t})}const mt=S(ht)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function Dt({className:t}){const[r,n]=u.exports.useState(""),s=u.exports.useContext(A),i=u.exports.useContext(I);u.exports.useEffect(()=>{window.onload=()=>{const d=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],o={childList:!1,attributes:!0,subtree:!1};function p(){h()}new MutationObserver(p).observe(d,o)}},[]),u.exports.useEffect(()=>{n(s.title)},[s.title]);function l(d){n(d.target.value),a(d)}const h=()=>{setTimeout(()=>{let d=document.querySelectorAll(".gs-title");document.querySelectorAll(".gsc-adBlock").forEach(p=>{p.parentNode.appendChild(p)}),d&&d.forEach((p,x)=>{if(p.innerText.includes("Lyrics")){let E=p.innerText.replace("Lyrics | Musixmatch"," ");p.innerText=E;const L={artistName:encodeURI(E.split("-")[0]),songName:encodeURI(E.split("-")[1])};p.addEventListener("click",z=>{s.proccess||(i.closeBanner("error"),s.getLines(L,E))})}else p.innerText.includes("Lyrics")||p.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&p.parentElement.parentElement.parentElement.remove()})},50)};function a(d){let o=document.querySelector("#gsc-i-id1"),p=/^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9-]+$/;if(o)if(d.target.value.length<=1){let x=document.querySelector(".gsst_a");x&&x.dispatchEvent(new Event("click"))}else if(p.test(d.target.value)){o.value=d.target.value;let x=document.querySelectorAll(".gsc-search-box button")[0];x?setTimeout(()=>{x.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(i.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else{i.createBanner("error","error","\u05D4\u05D6\u05DF \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05DC\u05D1\u05D3","");return}else i.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}return f("div",{id:"",className:t,children:[e(ze,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:l,autoFocus:!1,autoComplete:"off",value:r}),e("div",{className:"gcse-search"})]})}const ft=S(Dt)`
  *,::before,::after{
      background-color: '#ffffff0';
  }

  input, fieldset, label{
   color: white !important;
   border-color: white !important;
  }

`;function gt(n){var s=n,{className:t}=s,r=N(s,["className"]);const i=u.exports.useContext(A),[l,h]=u.exports.useState(!1),[a,d]=u.exports.useState(5e4),[o,p]=u.exports.useState([]);u.exports.useEffect(()=>{var y;((y=i.lines[i.lines.length-1])==null?void 0:y.trans).length>=1&&d(0)},[i.lines]);const x=()=>{var y;((y=i.lines[i.lines.length-1])==null?void 0:y.trans).length>=1&&(h(!0),L())},E=()=>{h(!1)},L=u.exports.useCallback(()=>{z()},[]);function z(){fetch("https://musicline-backend-basssites.vercel.app/single-trans",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(r.lyric)})}).then(y=>y.json()).then(y=>{(y==null?void 0:y.results[0])?p(y.results):p(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"])}).catch(y=>{console.log(y)})}const M=()=>o[1]?o.map((B,y)=>f(R,{children:[y>0&&e("hr",{}),e("p",{className:"tt-p",children:B})]})):e("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"});return e(Be,{onClickAway:E,children:e(Fe,{className:t,title:f(R,{children:[e(k,{color:"inherit",children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD:"}),e("div",{className:"tt-body",style:{textAlign:"center",maxHeight:"110px",overflowY:"auto",direction:"ltr"},children:o[0]?e(M,{}):e(se,{sx:{margin:"8px"},color:"primary"})})]}),arrow:!0,enterDelay:a,enterTouchDelay:a,leaveTouchDelay:60*1e3,leaveDelay:0,onOpen:()=>{L()},PopperProps:{disablePortal:!1},onClose:E,open:l,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:f("p",{className:"single-lyric",onClick:x,children:["\xA0 ",r.lyric," "]})})})}const Q=S(gt)`

`;function xt(n){var s=n,{className:t}=s,r=N(s,["className"]);const i=u.exports.useContext(A);return u.exports.useContext(I),u.exports.useContext(H),u.exports.useEffect(()=>{i.checkNextTrans()},[i.cou]),e(_,{children:e(O,{container:!0,spacing:2,children:i.lines&&f("div",{id:"lyrics_body",className:t,children:[e(k,{variant:"h6",noWrap:!0,component:"h3",children:i.title&&i.title.split(" ").map((l,h)=>e(Q,{lyric:l},h))}),i.lines.map((l,h)=>{var a;return l.src.includes("[")&&(l.trans="   "),f("div",{children:[h>0&&l.src.includes("[")&&f(R,{children:[e("br",{}),e("br",{})]}),e(O,{className:"lyrics-line en-line",item:!0,children:l.src.split(" ").map((d,o)=>e(Q,{lyric:d},o))},h.toString()+Math.floor(Math.random()*3e4)),e(O,{item:!0,className:"lyrics-line he-line",children:e(R,{children:((a=l.trans)==null?void 0:a.length)>2?l.trans.split(" ").map((d,o)=>{if(l.trans!=="   ")return f("small",{onLoad:()=>{i.checkNextTrans()},className:"single-trans",children:[d," \xA0"]},o)}):e("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})},h.toString()+Math.floor(Math.random()*3e4))]})})]})})})}const Et=S(xt)`
  font-family: 'Assistant','Roboto', 'sans-serif';
  /* max-width: 90%; */
  font-size: 20px;
  margin: 25px;
  margin-inline-end: 10px;
  padding: 15px 50px;
  padding-bottom: 40px;
  padding-inline-start: 50px;
  margin-top: 55px;

  background-color: #f8f8f8;
  color: #172B4D;
  border-radius: 10px;

  @media (max-width: 600px) {
    padding-inline-start: 15px;
    padding-inline-end: 15px;
  }
  
  h3{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 40px;
    white-space: break-spaces;

    @media (max-width: 600px) {
      font-size: 19px;
    }
  }

  .en-line p, .he-line small{
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

`;function yt({className:t}){const r=u.exports.useContext(A),n=u.exports.useContext(q);u.exports.useEffect(()=>{},[n]);function s(i){i.preventDefault()}return f("div",{className:t,children:[f("div",{className:"home-top",children:[!r.currLyrics&&f("div",{children:[f(k,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",e("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D1\u05E9\u05D5\u05E8\u05D4"]}),f(k,{variant:"h3",className:"page-h3",children:[e("span",{className:"h3-start h3-s-one",children:"\u05D7\u05E4\u05E9 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"}),e("br",{}),e("span",{className:"h3-start h3-s-two",children:"\u05D5\u05E7\u05D1\u05DC \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA"}),e("br",{}),e("p",{className:"small-one",children:"\u05DC\u05D0 \u05DE\u05E6\u05D0\u05EA? \u05E0\u05E1\u05D4 \u05DC\u05D7\u05E4\u05E9 \u05E2\u05DD \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"}),e("div",{className:"small-two",children:e("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})})]})]}),e(_,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:s,children:e(ft,{})})]}),r.currLyrics&&e(Et,{className:"lyrics-body",fontSize:n.fontSize})]})}const Ct=S(yt)`
    .home-top{
       padding: 0 35px;

       @media (max-width: 600px) {
        padding: 0 25px;
       }
    }
    
    .h3-s-one{
        @media (min-width: 600px) {
            word-spacing: 9px;
            letter-spacing: 0.5px;
        }

        @media (max-width: 600px) {
            font-size: 24px;
            word-spacing: 1px;
        }
   
    }

    .h3-s-two{
        @media (min-width: 600px) {
            word-spacing: 9px;
            letter-spacing: 0.3px;
        }

        @media (max-width: 600px) {
            font-size: 24px;
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
    
`;function St({className:t}){return f("div",{id:"NO_MATCH_WRAPPER",className:t,children:[e(k,{variant:"h2",className:"page-h2",children:"404"}),e(k,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const bt=S(St)`

`;function vt({className:t}){const r=u.exports.useContext(j),n=u.exports.useContext(H),s=u.exports.useContext(I);u.exports.useRef(null);const i=Ie({key:"muirtl",stylisPlugins:[_e,je]});function l(){h()}const h=()=>{const d=document.createElement("script");d.type="text/javascript",d.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",d.defer=!0,document.body.appendChild(d)};u.exports.useEffect(()=>{l()},[s]);const a=d=>{s.closeBanner(d)};return X({palette:{mode:"dark"}}),f("div",{className:t,children:[e(Me,{value:i,children:f(Pe,{children:[e(We,{}),e(st,{className:"header"}),s.main.open&&f(J,{severity:"warning",className:"main-alert",children:[e(ne,{children:s.main.title}),s.main.message]}),e(it,{children:f(Oe,{children:[e(Z,{path:"/",element:e(Ct,{className:"page"})}),e(Z,{path:"*",element:e(bt,{className:"page"})})]})}),r.open&&r.child&&e(ct,{className:"drawer"}),n.main.open&&e(se,{color:n.main.color||"primary"}),n.circular.open&&e(Re,{color:n.main.color||"primary"}),s.snackbar.open&&e($e,{open:s.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:e(J,{onClose:()=>{a("snackbar")},severity:s.snackbar.severity,sx:{width:"100%"},children:s.snackbar.message})}),e(ut,{})]})}),e(mt,{})]})}const wt=S(vt)`
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

  .loader{
      padding: 20px;
  }
`,Lt=[Ke,qe,Ve,Ue,et];function Tt(t){return e(R,{children:Lt.reduceRight((r,n)=>e(n,{children:r}),t.children)})}He.render(e(F.StrictMode,{children:e(Tt,{children:e(Je,{theme:oe,children:e(wt,{className:"app"})})})}),document.getElementById("root"));