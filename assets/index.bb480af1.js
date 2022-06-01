var ae=Object.defineProperty,le=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var W=(t,r,n)=>r in t?ae(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,m=(t,r)=>{for(var n in r||(r={}))K.call(r,n)&&W(t,n,r[n]);if(_)for(var n of _(r))Y.call(r,n)&&W(t,n,r[n]);return t},y=(t,r)=>le(t,ue(r));var L=(t,r)=>{var n={};for(var o in t)K.call(t,o)&&r.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&_)for(var o of _(t))r.indexOf(o)<0&&Y.call(t,o)&&(n[o]=t[o]);return n};import{R as F,r as l,j as e,c as Z,M as ce,a as D,B as de,b as M,d as pe,A as he,s as g,L as ee,N as G,e as te,f as re,g as me,h as De,i as R,I as fe,k as ge,l as xe,C as Ee,T as ye,m as w,n as H,o as ne,G as P,p as Ce,q as Se,t as be,D as ve,u as Le,v as we,w as ke,x as Ne,y as Te,z as Ae,E as ze,F as O,H as oe,J as Be,K as Fe,O as Ie,P as Me,Q,S as Pe,U as Oe,V as Re,W as $e,X as _e,Y as je}from"./vendor.8da0d692.js";const He=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const p of s)if(p.type==="childList")for(const u of p.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const p={};return s.integrity&&(p.integrity=s.integrity),s.referrerpolicy&&(p.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?p.credentials="include":s.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function o(s){if(s.ep)return;s.ep=!0;const p=n(s);fetch(s.href,p)}};He();const j=F.createContext(void 0);function Ge(t){const[r,n]=l.exports.useState({}),p={openDrawer:(u,i,c="temporary",a)=>{n({open:u,anchor:i,permanent:c,child:a})},closeDrawer:(u,i,c="temporary",a)=>{n({open:u,anchor:i,permanent:c,child:a})}};return e(j.Provider,{value:m(m({},r),p),children:t.children})}const q=F.createContext(void 0);function qe(t){const[r,n]=l.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),u={createLoader:(i,c)=>{r[i]&&n(y(m({},r),{[i]:void 0})),n(y(m({},r),{[i]:{open:!1,color:c||"primary"}}))},openLoader:i=>{r[i]?n(y(m({},r),{[i]:y(m({},r[i]),{open:!0})})):console.error("Loader does'nt exist. Name: "+i)},closeLoader:i=>{r[i]?n(y(m({},r),{[i]:y(m({},r[i]),{open:!1})})):console.error("Loader does'nt exist. Name: "+i)}};return e(q.Provider,{value:m(m({},r),u),children:t.children})}const I=F.createContext(void 0);function Je(t){const[r,n]=l.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),u={createBanner:(i,c,a,d)=>{r[i]&&n(y(m({},r),{[i]:void 0})),n(y(m({},r),{[i]:{open:!0,severity:c||"success",title:a||"",message:d||""}}))},openBanner:i=>{r[i]?n(y(m({},r),{[i]:y(m({},r[i]),{open:!0})})):console.error("Banner does'nt exist. Name: "+i)},closeBanner:i=>{r[i]?n(y(m({},r),{[i]:y(m({},r[i]),{open:!1})})):console.error("Banner does'nt exist. Name: "+i)}};return e(I.Provider,{value:m(m({},r),u),children:t.children})}const se=Z({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function Ue(){const[t,r]=l.exports.useState(se.palette.primary.light);return e("div",{className:"wrapper",children:e(ce,{children:e("meta",{name:"theme-color",content:t})})})}const J=F.createContext(void 0);function Ve(t){const[r,n]=l.exports.useState({fontSize:{sm:Number(localStorage.getItem("font_sm"))||15,md:Number(localStorage.getItem("font_md"))||25},colors:"pink"}),o=()=>{r.fontSize.md<60&&(n(y(m({},r),{fontSize:{sm:r.fontSize.sm+1,md:r.fontSize.md+1}})),p())},s=()=>{r.fontSize.sm>2&&(n(y(m({},r),{fontSize:{sm:r.fontSize.sm-1,md:r.fontSize.md-1}})),p())};function p(){localStorage.setItem("font_md",r.fontSize.md),localStorage.setItem("font_sm",r.fontSize.sm)}function u(){localStorage.setItem("colors_mode",r.colors)}function i(a){n(y(m({},r),{colors:a})),u()}const c={reduceFontSize:s,increaseFontSize:o,setColors:i};return e(J.Provider,{value:m(m({},r),c),children:t.children})}function We({className:t}){const r=l.exports.useContext(J);return e("div",{id:"",className:t,children:D(de,{className:"button-group",children:[e(M,{"aria-label":"reduce",onClick:()=>{r.reduceFontSize()},children:e(pe,{fontSize:"small"})}),e(M,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8"}),e(M,{"aria-label":"increase",onClick:()=>{r.increaseFontSize()},children:e(he,{fontSize:"small"})})]})})}const Ke=g(We)`
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

`,Ye=[];function Qe(){return e(ee,{children:Ye.map((t,r)=>e(G,{to:t.url,children:D(te,{button:!0,children:[e(re,{primary:t.name}),e(me,{children:e(De,{})})]},t.name)},r))})}const Xe=g(Qe)`
  
`,k=F.createContext(void 0);function Ze(t){const r=l.exports.useContext(q),n=l.exports.useContext(I),[o,s]=l.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("cuurSongTitle")||""),[p,u]=l.exports.useState(sessionStorage.getItem("currLines")||!1),[i,c]=l.exports.useState([]),[a,d]=l.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[C,S]=l.exports.useState(0),[N,T]=l.exports.useState(!1),$="https://musicline-backend-basssites.vercel.app",A=(b,x)=>{T(!0),r.openLoader("main"),fetch(`${$}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:b})}).then(h=>h.json()).then(h=>{if(r.closeLoader("main"),sessionStorage.removeItem("currLines"),h==null?void 0:h.lyrics){s(x);let E=h.lyrics,z=[];E.split(/(?:\r\n|\r|\n)/g).map(B=>{B.length>=2&&z.push({src:B,trans:""})}),d(z),u(E),c(E.split(" "));let v=document.querySelector(".gsst_a");v&&v.dispatchEvent(new Event("click")),T(!0)}else n.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8","")}).catch(h=>{console.log(h),r.closeLoader("main"),n.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8",""),T(!0)})},f=()=>{let b=!1;for(let x=0;x<a.length;x++){let h=a[x];if(b===!0)break;if(h.trans.length<=1||h.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."){b=!0,U(h.src,x);break}else continue}},U=(b,x)=>{fetch(`${$}/line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:a})}).then(h=>h.json()).then(h=>{var z,v;let E=a;(h==null?void 0:h.trans.length)?(h.trans.map((B,V)=>{E[V]={src:E[V].src,trans:B}}),d(E),sessionStorage.setItem("currLines",JSON.stringify(a)),sessionStorage.setItem("cuurSongTitle",o),S(C+1)):(h==null?void 0:h.trans)?(E[x]={src:b,trans:h==null?void 0:h.trans},d(E),((z=a[a.length-1])==null?void 0:z.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(a)),sessionStorage.setItem("cuurSongTitle",o)),S(C+1)):(a[x].trans===void 0&&(E[x]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),a[x].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(E[x]={src:b,trans:"[missing]"}),d(E),((v=a[a.length-1])==null?void 0:v.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(a)),sessionStorage.setItem("cuurSongTitle",o)),S(C+1))}).catch(h=>{var v;let E=a;a[x].trans===""&&(E[x]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),a[x].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(E[x]={src:b,trans:"[missing]"}),d(E),((v=a[a.length-1])==null?void 0:v.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(a)),S(C+1),console.log(h)})},ie={getLines:A,getLinesTrans:U,checkNextTrans:f};return e(k.Provider,{value:m({title:o,proccess:N,currLyrics:p,singles:i,lines:a,cou:C},ie),children:t.children})}function et({className:t}){return l.exports.useContext(k),e(R,{className:t,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(n=>e(G,{to:n.url,children:e(M,{sx:{my:2},children:n.name})},n.name))})}g(et)`
  
`;function tt({className:t}){return e("div",{id:"",className:t,children:e(fe,{children:e(ge,{className:"mui-rounded-icon"})})})}const rt=g(tt)`
  .mui-rounded-icon{
    background-color: white;
    color: ${t=>"#595959"};
    border-radius: 12px;
  }
`,nt=n=>{var o=n,{className:t}=o,r=L(o,["className"]);var a,d,C;const s=l.exports.useContext(j),p=l.exports.useContext(k),u=l.exports.useContext(I),i=()=>{s.openDrawer(!0,"left","temporary",Xe)},c=function(){sessionStorage.removeItem("currLines")};return D(xe,{position:"sticky",className:t,children:[e(Ee,{maxWidth:"xl",children:D(ye,{disableGutters:!0,children:[e(G,{to:"/",onClick:()=>{c()},children:e(w,{variant:"h6",noWrap:!0,component:"h1",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),p.lines[0]&&e(Ke,{}),e(R,{sx:{display:{xs:"flex",md:"flex"},flexGrow:1},children:e(rt,{onClick:i})})]})}),((a=u.error)==null?void 0:a.open)&&D(H,{severity:"error",className:"error-alert",onClose:()=>{u.closeBanner("error")},children:[e(ne,{children:(d=u.error)==null?void 0:d.title}),(C=u.error)==null?void 0:C.message]})]})},ot=g(nt)`
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
`;function st(n){var o=n,{className:t}=o,r=L(o,["className"]);return e("div",{className:t,children:r.children})}const it=g(st)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  background-color: ${t=>t.theme.palette.primary.light};
`;function at({className:t}){return e("div",{id:"FOOTER",className:t,children:e(P,{container:!0,rowSpacing:6,columnSpacing:2,children:e(P,{item:!0,xs:12,sm:4,children:D(ee,{children:[e(Ce,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA:"}),e(te,{children:e(re,{primary:"musicline@mail.com"})})]})})})})}const lt=g(at)`
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

`;function ut(n){var o=n,{className:t}=o,r=L(o,["className"]);const s=l.exports.useContext(j);return e(Se,{className:t,anchor:s.anchor,open:s.open,variant:s.permanent,onClose:()=>{s.closeDrawer(!1)},children:e(R,{className:"drawer-layout",sx:{width:s.anchor==="top"||s.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{s.closeDrawer(!1)},children:e(s.child,{})})})}const ct=g(ut)`
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
`;function dt({className:t}){const[r,n]=l.exports.useState(!0),o=()=>{n(!1)};return D(be,{id:"main-modal-root",className:t,open:r,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[e(ve,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),e(Le,{children:e(we,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),e(ke,{children:e(M,{onClick:o,children:"Close"})})]})}g(dt)`
  
`;function pt(n){var o=n,{className:t}=o,r=L(o,["className"]);const[s,p]=l.exports.useState(!0);return e(Ne,{className:t,open:s,onClose:()=>{p(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}g(pt)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function ht({className:t}){return e("div",{id:"",className:t})}const mt=g(ht)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function Dt({className:t}){const[r,n]=l.exports.useState(""),o=l.exports.useContext(k),s=l.exports.useContext(I);l.exports.useEffect(()=>{window.onload=()=>{const c=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],a={childList:!1,attributes:!0,subtree:!1};function d(){u()}new MutationObserver(d).observe(c,a)}},[]),l.exports.useEffect(()=>{n(o.title)},[o.title]);function p(c){n(c.target.value),i(c)}const u=()=>{setTimeout(()=>{let c=document.querySelectorAll(".gs-title");document.querySelectorAll(".gsc-adBlock").forEach(d=>{d.parentNode.appendChild(d)}),c&&c.forEach((d,C)=>{if(d.innerText.includes("Lyrics")){let S=d.innerText.replace("Lyrics | Musixmatch"," ");d.innerText=S;const N={artistName:encodeURI(S.split("-")[0]),songName:encodeURI(S.split("-")[1])};d.addEventListener("click",T=>{o.proccess||o.getLines(N,S)})}else d.innerText.includes("Lyrics")||d.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&d.parentElement.parentElement.parentElement.remove()})},50)};function i(c){let a=document.querySelector("#gsc-i-id1");if(a)if(c.target.value.length<=1){let d=document.querySelector(".gsst_a");d&&d.dispatchEvent(new Event("click"))}else{a.value=c.target.value;let d=document.querySelectorAll(".gsc-search-box button")[0];d?setTimeout(()=>{d.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(s.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else s.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}return D("div",{id:"",className:t,children:[e(Te,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:p,autoFocus:!1,autoComplete:"off",value:r}),e("div",{className:"gcse-search"})]})}const ft=g(Dt)`
  *,::before,::after{
      background-color: '#ffffff0';
  }

  input, fieldset, label{
   color: white !important;
   border-color: white !important;
  }

`;function gt(n){var o=n,{className:t}=o,r=L(o,["className"]);const s=l.exports.useContext(k),[p,u]=l.exports.useState(!1),[i,c]=l.exports.useState(5e4),[a,d]=l.exports.useState([]);l.exports.useEffect(()=>{var f;((f=s.lines[s.lines.length-1])==null?void 0:f.trans).length>=1&&c(0)},[s.lines]);const C=()=>{var f;((f=s.lines[s.lines.length-1])==null?void 0:f.trans).length>=1&&(u(!0),N())},S=()=>{u(!1)},N=l.exports.useCallback(()=>{T()},[]);function T(){fetch("https://musicline-backend-basssites.vercel.app/single-trans",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(r.lyric)})}).then(f=>f.json()).then(f=>{(f==null?void 0:f.results[0])?d(f.results):d(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"])}).catch(f=>{console.log(f)})}const $=()=>a[1]?a.map((A,f)=>D(O,{children:[f>0&&e("hr",{}),e("p",{className:"tt-p",children:A})]})):e("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"});return e(Ae,{onClickAway:S,children:e(ze,{className:t,title:D(O,{children:[e(w,{color:"inherit",children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD:"}),e("div",{className:"tt-body",style:{textAlign:"center",maxHeight:"110px",overflowY:"auto",direction:"ltr"},children:a[0]?e($,{}):e(oe,{sx:{margin:"8px"},color:"primary"})})]}),arrow:!0,enterDelay:i,enterTouchDelay:i,leaveTouchDelay:60*1e3,leaveDelay:0,onOpen:()=>{N()},PopperProps:{disablePortal:!1},onClose:S,open:p,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:D("p",{className:"single-lyric",onClick:C,children:["\xA0 ",r.lyric," "]})})})}const X=g(gt)`

`;function xt(n){var o=n,{className:t}=o,r=L(o,["className"]);const s=l.exports.useContext(k),p=l.exports.useContext(I);return l.exports.useEffect(()=>{s.checkNextTrans()},[s,s.cou]),l.exports.useEffect(()=>{p.error&&p.closeBanner("error")},[]),e(R,{children:e(P,{container:!0,spacing:2,children:s.lines&&D("div",{id:"lyrics_body",className:t,children:[e(w,{variant:"h6",noWrap:!0,component:"h3",children:s.title&&s.title.split(" ").map((u,i)=>e(X,{lyric:u},i))}),s.lines.map((u,i)=>{var c;return u.src.includes("[")&&(u.trans="   "),D("div",{children:[i>0&&u.src.includes("[")&&D(O,{children:[e("br",{}),e("br",{})]}),e(P,{className:"lyrics-line en-line",item:!0,children:u.src.split(" ").map((a,d)=>e(X,{lyric:a},d))},i.toString()+Math.floor(Math.random()*3e4)),e(P,{item:!0,className:"lyrics-line he-line",children:e(O,{children:((c=u.trans)==null?void 0:c.length)>2?u.trans.split(" ").map((a,d)=>{if(u.trans!=="   ")return D("small",{onLoad:()=>{s.checkNextTrans()},className:"single-trans",children:[a," \xA0"]},d)}):e("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})},i.toString()+Math.floor(Math.random()*3e4))]})})]})})})}const Et=g(xt)`
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

`;function yt({className:t}){const r=l.exports.useContext(k),n=l.exports.useContext(J);l.exports.useEffect(()=>{},[n]);function o(s){s.preventDefault()}return D("div",{className:t,children:[D("div",{className:"home-top",children:[!r.currLyrics&&D("div",{children:[D(w,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",e("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D1\u05E9\u05D5\u05E8\u05D4"]}),D(w,{variant:"h3",className:"page-h3",children:["\u05D7\u05E4\u05E9 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA",e("br",{}),"\u05D5\u05E7\u05D1\u05DC \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA",e("br",{}),e("p",{className:"small-one",children:"\u05DC\u05D0 \u05DE\u05E6\u05D0\u05EA? \u05E0\u05E1\u05D4 \u05DC\u05D7\u05E4\u05E9 \u05E2\u05DD \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"}),e("div",{className:"small-two",children:e("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})})]})]}),e(R,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:o,children:e(ft,{})})]}),r.currLyrics&&e(Et,{className:"lyrics-body",fontSize:n.fontSize})]})}const Ct=g(yt)`
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
    
`;function St({className:t}){return D("div",{id:"NO_MATCH_WRAPPER",className:t,children:[e(w,{variant:"h2",className:"page-h2",children:"404"}),e(w,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const bt=g(St)`

`;function vt({className:t}){const r=l.exports.useContext(j),n=l.exports.useContext(q),o=l.exports.useContext(I);l.exports.useRef(null);const s=Be({key:"muirtl",stylisPlugins:[Re,$e]});function p(){u()}const u=()=>{const c=document.createElement("script");c.type="text/javascript",c.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",c.defer=!0,document.body.appendChild(c)};l.exports.useEffect(()=>{p()},[o]);const i=c=>{o.closeBanner(c)};return Z({palette:{mode:"dark"}}),D("div",{className:t,children:[e(Fe,{value:s,children:D(Ie,{children:[e(Ue,{}),e(ot,{className:"header"}),o.main.open&&D(H,{severity:"warning",className:"main-alert",children:[e(ne,{children:o.main.title}),o.main.message]}),e(it,{children:D(Me,{children:[e(Q,{path:"/",element:e(Ct,{className:"page"})}),e(Q,{path:"*",element:e(bt,{className:"page"})})]})}),r.open&&r.child&&e(ct,{className:"drawer"}),n.main.open&&e(oe,{color:n.main.color||"primary"}),n.circular.open&&e(Pe,{color:n.main.color||"primary"}),o.snackbar.open&&e(Oe,{open:o.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:e(H,{onClose:()=>{i("snackbar")},severity:o.snackbar.severity,sx:{width:"100%"},children:o.snackbar.message})}),e(lt,{})]})}),e(mt,{})]})}const Lt=g(vt)`
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
`,wt=[Ve,Ge,Je,qe,Ze];function kt(t){return e(O,{children:wt.reduceRight((r,n)=>e(n,{children:r}),t.children)})}_e.render(e(F.StrictMode,{children:e(kt,{children:e(je,{theme:se,children:e(Lt,{className:"app"})})})}),document.getElementById("root"));
