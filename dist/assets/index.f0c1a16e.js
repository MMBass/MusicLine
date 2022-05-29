var ie=Object.defineProperty,ae=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var W=(e,r,o)=>r in e?ie(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,m=(e,r)=>{for(var o in r||(r={}))K.call(r,o)&&W(e,o,r[o]);if($)for(var o of $(r))Y.call(r,o)&&W(e,o,r[o]);return e},C=(e,r)=>ae(e,le(r));var L=(e,r)=>{var o={};for(var n in e)K.call(e,n)&&r.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&$)for(var n of $(e))r.indexOf(n)<0&&Y.call(e,n)&&(o[n]=e[n]);return o};import{R as F,r as l,j as t,c as Z,M as ue,a as D,B as ce,b as I,d as de,A as pe,s as g,L as ee,N as G,e as te,f as re,g as he,h as me,i as O,I as De,k as fe,l as ge,C as xe,T as Ee,m as w,G as M,n as ye,o as Ce,p as Se,D as be,q as ve,t as Le,u as we,v as Ne,w as ke,x as Te,y as Ae,F as P,z as ne,E as ze,H as Be,J as Fe,K as H,O as Q,P as Ie,Q as X,S as Me,U as Pe,V as Oe,W as Re,X as $e,Y as _e}from"./vendor.3651ae8b.js";const je=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const p of u.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function o(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerpolicy&&(u.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?u.credentials="include":s.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function n(s){if(s.ep)return;s.ep=!0;const u=o(s);fetch(s.href,u)}};je();const _=F.createContext(void 0);function He(e){const[r,o]=l.exports.useState({}),u={openDrawer:(p,i,d="temporary",a)=>{o({open:p,anchor:i,permanent:d,child:a})},closeDrawer:(p,i,d="temporary",a)=>{o({open:p,anchor:i,permanent:d,child:a})}};return t(_.Provider,{value:m(m({},r),u),children:e.children})}const q=F.createContext(void 0);function Ge(e){const[r,o]=l.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),p={createLoader:(i,d)=>{r[i]&&o(C(m({},r),{[i]:void 0})),o(C(m({},r),{[i]:{open:!1,color:d||"primary"}}))},openLoader:i=>{r[i]?o(C(m({},r),{[i]:C(m({},r[i]),{open:!0})})):console.error("Loader does'nt exist. Name: "+i)},closeLoader:i=>{r[i]?o(C(m({},r),{[i]:C(m({},r[i]),{open:!1})})):console.error("Loader does'nt exist. Name: "+i)}};return t(q.Provider,{value:m(m({},r),p),children:e.children})}const j=F.createContext(void 0);function qe(e){const[r,o]=l.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),p={createBanner:(i,d,a,c)=>{r[i]&&o(C(m({},r),{[i]:void 0})),o(C(m({},r),{[i]:{open:!0,severity:d||"success",title:a||"",message:c||""}}))},openBanner:i=>{r[i]?o(C(m({},r),{[i]:C(m({},r[i]),{open:!0})})):console.error("Banner does'nt exist. Name: "+i)},closeBanner:i=>{r[i]?o(C(m({},r),{[i]:C(m({},r[i]),{open:!1})})):console.error("Banner does'nt exist. Name: "+i)}};return t(j.Provider,{value:m(m({},r),p),children:e.children})}const oe=Z({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function Je(){const[e,r]=l.exports.useState(oe.palette.primary.light);return t("div",{className:"wrapper",children:t(ue,{children:t("meta",{name:"theme-color",content:e})})})}const J=F.createContext(void 0);function Ue(e){const[r,o]=l.exports.useState({fontSize:{sm:Number(localStorage.getItem("font_sm"))||15,md:Number(localStorage.getItem("font_md"))||25},colors:"pink"}),n=()=>{r.fontSize.md<60&&(o(C(m({},r),{fontSize:{sm:r.fontSize.sm+1,md:r.fontSize.md+1}})),u())},s=()=>{r.fontSize.sm>2&&(o(C(m({},r),{fontSize:{sm:r.fontSize.sm-1,md:r.fontSize.md-1}})),u())};function u(){localStorage.setItem("font_md",r.fontSize.md),localStorage.setItem("font_sm",r.fontSize.sm)}function p(){localStorage.setItem("colors_mode",r.colors)}function i(a){o(C(m({},r),{colors:a})),p()}const d={reduceFontSize:s,increaseFontSize:n,setColors:i};return t(J.Provider,{value:m(m({},r),d),children:e.children})}function Ve({className:e}){const r=l.exports.useContext(J);return t("div",{id:"",className:e,children:D(ce,{className:"button-group",children:[t(I,{"aria-label":"reduce",onClick:()=>{r.reduceFontSize()},children:t(de,{fontSize:"small"})}),t(I,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8"}),t(I,{"aria-label":"increase",onClick:()=>{r.increaseFontSize()},children:t(pe,{fontSize:"small"})})]})})}const We=g(Ve)`
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

`,Ke=[];function Ye(){return t(ee,{children:Ke.map((e,r)=>t(G,{to:e.url,children:D(te,{button:!0,children:[t(re,{primary:e.name}),t(he,{children:t(me,{})})]},e.name)},r))})}const Qe=g(Ye)`
  
`,N=F.createContext(void 0);function Xe(e){const r=l.exports.useContext(q),o=l.exports.useContext(j),[n,s]=l.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("cuurSongTitle")||""),[u,p]=l.exports.useState(sessionStorage.getItem("currLines")||!1),[i,d]=l.exports.useState([]),[a,c]=l.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[x,S]=l.exports.useState(0),[k,T]=l.exports.useState(!1),R="http://localhost:5000",A=(b,E)=>{T(!0),r.openLoader("main"),o.closeBanner("error"),fetch(`${R}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:b})}).then(h=>h.json()).then(h=>{if(console.log(h),r.closeLoader("main"),h==null?void 0:h.lyrics){s(E);let y=h.lyrics,z=[];y.split(/(?:\r\n|\r|\n)/g).map(B=>{B.length>=2&&z.push({src:B,trans:""})}),c(z),p(y),d(y.split(" "));let v=document.querySelector(".gsst_a");v&&v.dispatchEvent(new Event("click")),T(!0)}else o.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8","")}).catch(h=>{console.log(h),r.closeLoader("main"),o.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8",""),T(!0)})},f=()=>{let b=!1;for(let E=0;E<a.length;E++){let h=a[E];if(b===!0)break;if(h.trans.length<=1||h.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."){b=!0,U(h.src,E);break}else continue}},U=(b,E)=>{fetch(`${R}/line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:a})}).then(h=>h.json()).then(h=>{var z,v;let y=a;(h==null?void 0:h.trans.length)?(h.trans.map((B,V)=>{y[V]={src:y[V].src,trans:B}}),c(y),sessionStorage.setItem("currLines",JSON.stringify(a)),sessionStorage.setItem("cuurSongTitle",n),S(x+1)):(h==null?void 0:h.trans)?(y[E]={src:b,trans:h==null?void 0:h.trans},c(y),((z=a[a.length-1])==null?void 0:z.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(a)),sessionStorage.setItem("cuurSongTitle",n)),S(x+1)):(a[E].trans===void 0&&(y[E]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),a[E].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(y[E]={src:b,trans:"[missing]"}),c(y),((v=a[a.length-1])==null?void 0:v.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(a)),sessionStorage.setItem("cuurSongTitle",n)),S(x+1))}).catch(h=>{var v;let y=a;a[E].trans===""&&(y[E]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),a[E].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(y[E]={src:b,trans:"[missing]"}),c(y),((v=a[a.length-1])==null?void 0:v.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(a)),S(x+1),console.log(h)})},se={getLines:A,getLinesTrans:U,checkNextTrans:f};return t(N.Provider,{value:m({title:n,proccess:k,currLyrics:u,singles:i,lines:a,cou:x},se),children:e.children})}function Ze({className:e}){return l.exports.useContext(N),t(O,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(o=>t(G,{to:o.url,children:t(I,{sx:{my:2},children:o.name})},o.name))})}g(Ze)`
  
`;function et({className:e}){return t("div",{id:"",className:e,children:t(De,{children:t(fe,{className:"mui-rounded-icon"})})})}const tt=g(et)`
  .mui-rounded-icon{
    background-color: white;
    color: ${e=>"#595959"};
    border-radius: 12px;
  }
`,rt=o=>{var n=o,{className:e}=n,r=L(n,["className"]);const s=l.exports.useContext(_),u=l.exports.useContext(N),p=()=>{s.openDrawer(!0,"left","temporary",Qe)},i=function(){sessionStorage.removeItem("currLines")};return t(ge,{position:"sticky",className:e,children:t(xe,{maxWidth:"xl",children:D(Ee,{disableGutters:!0,children:[t(G,{to:"/",onClick:()=>{i()},children:t(w,{variant:"h6",noWrap:!0,component:"h1",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),u.lines[0]&&t(We,{}),t(O,{sx:{display:{xs:"flex",md:"flex"},flexGrow:1},children:t(tt,{onClick:p})})]})})})},nt=g(rt)`
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
`;function ot(o){var n=o,{className:e}=n,r=L(n,["className"]);return t("div",{className:e,children:r.children})}const st=g(ot)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  background-color: ${e=>e.theme.palette.primary.light};
`;function it({className:e}){return t("div",{id:"FOOTER",className:e,children:t(M,{container:!0,rowSpacing:6,columnSpacing:2,children:t(M,{item:!0,xs:12,sm:4,children:D(ee,{children:[t(ye,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA:"}),t(te,{children:t(re,{primary:"musicline@mail.com"})})]})})})})}const at=g(it)`
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

`;function lt(o){var n=o,{className:e}=n,r=L(n,["className"]);const s=l.exports.useContext(_);return t(Ce,{className:e,anchor:s.anchor,open:s.open,variant:s.permanent,onClose:()=>{s.closeDrawer(!1)},children:t(O,{className:"drawer-layout",sx:{width:s.anchor==="top"||s.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{s.closeDrawer(!1)},children:t(s.child,{})})})}const ut=g(lt)`
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
`;function ct({className:e}){const[r,o]=l.exports.useState(!0),n=()=>{o(!1)};return D(Se,{id:"main-modal-root",className:e,open:r,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(be,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(ve,{children:t(Le,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(we,{children:t(I,{onClick:n,children:"Close"})})]})}g(ct)`
  
`;function dt(o){var n=o,{className:e}=n,r=L(n,["className"]);const[s,u]=l.exports.useState(!0);return t(Ne,{className:e,open:s,onClose:()=>{u(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}g(dt)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function pt({className:e}){return t("div",{id:"",className:e})}const ht=g(pt)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function mt({className:e}){const[r,o]=l.exports.useState(""),n=l.exports.useContext(N),s=l.exports.useContext(j);l.exports.useEffect(()=>{window.onload=()=>{const d=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],a={childList:!1,attributes:!0,subtree:!1};function c(){p()}new MutationObserver(c).observe(d,a)}},[]),l.exports.useEffect(()=>{o(n.title)},[n.title]);function u(d){o(d.target.value),i(d)}const p=()=>{setTimeout(()=>{let d=document.querySelectorAll(".gs-title");document.querySelectorAll(".gsc-adBlock").forEach(c=>{c.parentNode.appendChild(c)}),d&&d.forEach((c,x)=>{if(c.innerText.includes("Lyrics")){let S=c.innerText.replace("Lyrics | Musixmatch"," ");c.innerText=S;const k={artistName:encodeURI(S.split("-")[0]),songName:encodeURI(S.split("-")[1])};c.addEventListener("click",T=>{n.proccess||n.getLines(k,S)})}else c.innerText.includes("Lyrics")||c.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&c.parentElement.parentElement.parentElement.remove()})},50)};function i(d){let a=document.querySelector("#gsc-i-id1");if(a)if(d.target.value.length<=1){let c=document.querySelector(".gsst_a");c&&c.dispatchEvent(new Event("click"))}else{a.value=d.target.value;let c=document.querySelectorAll(".gsc-search-box button")[0];c?setTimeout(()=>{c.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(s.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else s.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}return D("div",{id:"",className:e,children:[t(ke,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:u,autoFocus:!1,autoComplete:"off",value:r}),t("div",{className:"gcse-search"})]})}const Dt=g(mt)`
  *,::before,::after{
      background-color: '#ffffff0';
  }

  input, fieldset, label{
   color: white !important;
   border-color: white !important;
  }

`;function ft(o){var n=o,{className:e}=n,r=L(n,["className"]);const s=l.exports.useContext(N),[u,p]=l.exports.useState(!1),[i,d]=l.exports.useState(5e4),[a,c]=l.exports.useState([]);l.exports.useEffect(()=>{var f;((f=s.lines[s.lines.length-1])==null?void 0:f.trans).length>=1&&d(0)},[s.lines]);const x=()=>{var f;((f=s.lines[s.lines.length-1])==null?void 0:f.trans).length>=1&&(p(!0),k())},S=()=>{p(!1)},k=l.exports.useCallback(()=>{T()},[]);function T(){fetch("https://musicline-backend-basssites.vercel.app/single-trans",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(r.lyric)})}).then(f=>f.json()).then(f=>{(f==null?void 0:f.results[0])?c(f.results):c(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"])}).catch(f=>{console.log(f)})}const R=()=>a[1]?a.map((A,f)=>D(P,{children:[f>0&&t("hr",{}),t("p",{className:"tt-p",children:A})]})):t("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"});return t(Te,{onClickAway:S,children:t(Ae,{className:e,title:D(P,{children:[t(w,{color:"inherit",children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD:"}),t("div",{className:"tt-body",style:{textAlign:"center",maxHeight:"110px",overflowY:"auto",direction:"ltr"},children:a[0]?t(R,{}):t(ne,{sx:{margin:"8px"},color:"primary"})})]}),arrow:!0,enterDelay:i,enterTouchDelay:i,leaveTouchDelay:60*1e3,leaveDelay:0,onOpen:()=>{k()},PopperProps:{disablePortal:!1},onClose:S,open:u,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:D("p",{className:"single-lyric",onClick:x,children:["\xA0 ",r.lyric," "]})})})}const gt=g(ft)`

`;function xt(o){var n=o,{className:e}=n,r=L(n,["className"]);const s=l.exports.useContext(N);return l.exports.useEffect(()=>{s.checkNextTrans()},[s,s.cou]),t(O,{children:t(M,{container:!0,spacing:2,children:s.lines&&D("div",{id:"lyrics_body",className:e,children:[t(w,{variant:"h6",noWrap:!0,component:"h3",children:s.title&&s.title}),s.lines.map((u,p)=>{var i;return u.src.includes("[")&&(u.trans="   "),D("div",{children:[p>0&&u.src.includes("[")&&D(P,{children:[t("br",{}),t("br",{})]}),t(M,{className:"lyrics-line en-line",item:!0,children:u.src.split(" ").map((d,a)=>t(gt,{lyric:d},a))},p.toString()+Math.floor(Math.random()*3e4)),t(M,{item:!0,className:"lyrics-line he-line",children:t(P,{children:((i=u.trans)==null?void 0:i.length)>2?u.trans.split(" ").map((d,a)=>{if(u.trans!=="   ")return D("small",{onLoad:()=>{s.checkNextTrans()},className:"single-trans",children:[d," \xA0"]},a)}):t("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})},p.toString()+Math.floor(Math.random()*3e4))]})})]})})})}const Et=g(xt)`
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
    padding: 0px 2px;
    text-transform: none;
  }

  .single-lyric{
    cursor: pointer;
  }

  .he-line{
      font-size: ${e=>e.fontSize.md-5+"px"};
  }

  .en-line{
      margin-top: 8px;
      direction: rtl;
      text-align: left;
      font-size: ${e=>e.fontSize.md+"px"};
  }

  @media (max-width: 600px) {
      .he-line{
        font-size: ${e=>e.fontSize.md-5+"px"};
      }

      .en-line{
        font-size: ${e=>e.fontSize.md+"px"};
      }
  }

`;function yt({className:e}){const r=l.exports.useContext(N),o=l.exports.useContext(J);l.exports.useEffect(()=>{},[o]);function n(s){s.preventDefault()}return D("div",{className:e,children:[D("div",{className:"home-top",children:[!r.currLyrics&&D("div",{children:[D(w,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",t("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D1\u05E9\u05D5\u05E8\u05D4"]}),D(w,{variant:"h3",className:"page-h3",children:["\u05D7\u05E4\u05E9 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA",t("br",{}),"\u05D5\u05E7\u05D1\u05DC \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA",t("br",{}),t("p",{className:"small-one",children:"\u05DC\u05D0 \u05DE\u05E6\u05D0\u05EA? \u05E0\u05E1\u05D4 \u05DC\u05DB\u05EA\u05D5\u05D1 \u05D2\u05DD \u05D0\u05EA \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"}),t("div",{className:"small-two",children:t("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})})]})]}),t(O,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:n,children:t(Dt,{})})]}),r.currLyrics&&t(Et,{className:"lyrics-body",fontSize:o.fontSize})]})}const Ct=g(yt)`
    .home-top{
       padding: 0 35px;

       @media (max-width: 600px) {
        padding: 0 25px;

            .small-one{
                font-size: 16px;
                margin-bottom: 15px;
            }
        }

        .small-one{
            /* font-size: 25px; */
            margin-bottom: 15px;
        }
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
    
`;function St({className:e}){return D("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(w,{variant:"h2",className:"page-h2",children:"404"}),t(w,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const bt=g(St)`

`;function vt({className:e}){var d,a,c;const r=l.exports.useContext(_),o=l.exports.useContext(q),n=l.exports.useContext(j);l.exports.useRef(null);const s=ze({key:"muirtl",stylisPlugins:[Oe,Re]});function u(){p()}const p=()=>{const x=document.createElement("script");x.type="text/javascript",x.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",x.defer=!0,document.body.appendChild(x)};l.exports.useEffect(()=>{u()},[]);const i=x=>{n.closeBanner(x)};return Z({palette:{mode:"dark"}}),D("div",{className:e,children:[t(Be,{value:s,children:D(Fe,{children:[t(Je,{}),t(nt,{className:"header"}),n.main.open&&D(H,{severity:"warning",className:"main-alert",children:[t(Q,{children:n.main.title}),n.main.message]}),((d=n.error)==null?void 0:d.open)&&D(H,{severity:"error",className:"error-alert",onClose:()=>{n.closeBanner("error")},children:[t(Q,{children:(a=n.error)==null?void 0:a.title}),(c=n.error)==null?void 0:c.message]}),t(st,{children:D(Ie,{children:[t(X,{path:"/",element:t(Ct,{className:"page"})}),t(X,{path:"*",element:t(bt,{className:"page"})})]})}),r.open&&r.child&&t(ut,{className:"drawer"}),o.main.open&&t(ne,{color:o.main.color||"primary"}),o.circular.open&&t(Me,{color:o.main.color||"primary"}),n.snackbar.open&&t(Pe,{open:n.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(H,{onClose:()=>{i("snackbar")},severity:n.snackbar.severity,sx:{width:"100%"},children:n.snackbar.message})}),t(at,{})]})}),t(ht,{})]})}const Lt=g(vt)`
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
`,wt=[Ue,He,qe,Ge,Xe];function Nt(e){return t(P,{children:wt.reduceRight((r,o)=>t(o,{children:r}),e.children)})}$e.render(t(F.StrictMode,{children:t(Nt,{children:t(_e,{theme:oe,children:t(Lt,{className:"app"})})})}),document.getElementById("root"));
