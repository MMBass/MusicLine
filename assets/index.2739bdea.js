var re=Object.defineProperty,ne=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var V=(e,r,n)=>r in e?re(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,m=(e,r)=>{for(var n in r||(r={}))W.call(r,n)&&V(e,n,r[n]);if(O)for(var n of O(r))K.call(r,n)&&V(e,n,r[n]);return e},E=(e,r)=>ne(e,oe(r));var w=(e,r)=>{var n={};for(var o in e)W.call(e,o)&&r.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&O)for(var o of O(e))r.indexOf(o)<0&&K.call(e,o)&&(n[o]=e[o]);return n};import{R as B,r as l,j as t,c as Y,M as se,a as f,B as ie,b as M,d as ae,A as le,s as x,L as ce,N as H,e as ue,f as de,g as pe,h as he,i as I,I as me,k as fe,l as ge,C as xe,T as De,m as N,n as ye,o as Ee,D as Ce,p as Se,q as be,t as ve,u as Le,v as we,w as Ne,x as ke,F as P,y as Z,G as _,z as Te,E as Ae,H as ze,J as j,K as Q,O as Be,P as X,Q as Fe,S as Me,U as Pe,V as Ie,W as Oe,X as Re}from"./vendor.4d62d666.js";const $e=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}};$e();const R=B.createContext(void 0);function _e(e){const[r,n]=l.exports.useState({}),c={openDrawer:(p,a,i="temporary",d)=>{n({open:p,anchor:a,permanent:i,child:d})},closeDrawer:(p,a,i="temporary",d)=>{n({open:p,anchor:a,permanent:i,child:d})}};return t(R.Provider,{value:m(m({},r),c),children:e.children})}const G=B.createContext(void 0);function je(e){const[r,n]=l.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),p={createLoader:(a,i)=>{r[a]&&n(E(m({},r),{[a]:void 0})),n(E(m({},r),{[a]:{open:!1,color:i||"primary"}}))},openLoader:a=>{r[a]?n(E(m({},r),{[a]:E(m({},r[a]),{open:!0})})):console.error("Loader does'nt exist. Name: "+a)},closeLoader:a=>{r[a]?n(E(m({},r),{[a]:E(m({},r[a]),{open:!1})})):console.error("Loader does'nt exist. Name: "+a)}};return t(G.Provider,{value:m(m({},r),p),children:e.children})}const q=B.createContext(void 0);function He(e){const[r,n]=l.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),p={createBanner:(a,i,d,u)=>{console.log(u),r[a]&&n(E(m({},r),{[a]:void 0})),n(E(m({},r),{[a]:{open:!0,severity:i||"success",title:d||"",message:u||""}}))},openBanner:a=>{r[a]?n(E(m({},r),{[a]:E(m({},r[a]),{open:!0})})):console.error("Banner does'nt exist. Name: "+a)},closeBanner:a=>{r[a]?n(E(m({},r),{[a]:E(m({},r[a]),{open:!1})})):console.error("Banner does'nt exist. Name: "+a)}};return t(q.Provider,{value:m(m({},r),p),children:e.children})}const ee=Y({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function Ge(){const[e,r]=l.exports.useState(ee.palette.primary.light);return t("div",{className:"wrapper",children:t(se,{children:t("meta",{name:"theme-color",content:e})})})}const J=B.createContext(void 0);function qe(e){const[r,n]=l.exports.useState({fontSize:{sm:Number(localStorage.getItem("font_sm"))||15,md:Number(localStorage.getItem("font_md"))||25},colors:"pink"}),o=()=>{r.fontSize.md<60&&(n(E(m({},r),{fontSize:{sm:r.fontSize.sm+1,md:r.fontSize.md+1}})),c())},s=()=>{r.fontSize.sm>2&&(n(E(m({},r),{fontSize:{sm:r.fontSize.sm-1,md:r.fontSize.md-1}})),c())};function c(){localStorage.setItem("font_md",r.fontSize.md),localStorage.setItem("font_sm",r.fontSize.sm)}function p(){localStorage.setItem("colors_mode",r.colors)}function a(d){n(E(m({},r),{colors:d})),p()}const i={reduceFontSize:s,increaseFontSize:o,setColors:a};return t(J.Provider,{value:m(m({},r),i),children:e.children})}function Je({className:e}){const r=l.exports.useContext(J);return t("div",{id:"",className:e,children:f(ie,{className:"button-group",children:[t(M,{"aria-label":"reduce",onClick:()=>{r.reduceFontSize()},children:t(ae,{fontSize:"small"})}),t(M,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8"}),t(M,{"aria-label":"increase",onClick:()=>{r.increaseFontSize()},children:t(le,{fontSize:"small"})})]})})}const Ue=x(Je)`
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

`,Ve=[];function We(){return t(ce,{children:Ve.map((e,r)=>t(H,{to:e.url,children:f(ue,{button:!0,children:[t(de,{primary:e.name}),t(pe,{children:t(he,{})})]},e.name)},r))})}const Ke=x(We)`
  
`,k=B.createContext(void 0);function Qe(e){const r=l.exports.useContext(G),[n,o]=l.exports.useState(sessionStorage.getItem("cuurSongTitle")||""),[s,c]=l.exports.useState(sessionStorage.getItem("currLines")||!1),[p,a]=l.exports.useState([]),[i,d]=l.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[u,C]=l.exports.useState(0),[b,v]=l.exports.useState(!1),F="http://localhost:5000",$=(S,D)=>{o(D),v(!0),r.openLoader("main"),fetch(`${F}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:S})}).then(h=>h.json()).then(h=>{if(r.closeLoader("main"),h==null?void 0:h.lyrics){let y=h.lyrics,A=[];y.split(/(?:\r\n|\r|\n)/g).map(z=>{z.length>=2&&A.push({src:z,trans:""})}),d(A),c(y),a(y.split(" "));let L=document.querySelector(".gsst_a");L&&L.dispatchEvent(new Event("click")),v(!0)}}).catch(h=>{r.closeLoader("main"),v(!0)})},T=()=>{let S=!1;for(let D=0;D<i.length;D++){let h=i[D];if(S===!0)break;if(h.trans.length<=1||h.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."){S=!0,g(h.src,D);break}else continue}},g=(S,D)=>{fetch(`${F}/line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:i})}).then(h=>h.json()).then(h=>{var A,L;let y=i;(h==null?void 0:h.trans.length)?(h.trans.map((z,U)=>{y[U]={src:y[U].src,trans:z}}),d(y),sessionStorage.setItem("currLines",JSON.stringify(i)),sessionStorage.setItem("cuurSongTitle",n),C(u+1)):(h==null?void 0:h.trans)?(y[D]={src:S,trans:h==null?void 0:h.trans},d(y),((A=i[i.length-1])==null?void 0:A.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(i)),sessionStorage.setItem("cuurSongTitle",n)),C(u+1)):(i[D].trans===void 0&&(y[D]={src:S,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),i[D].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(y[D]={src:S,trans:"[missing]"}),d(y),((L=i[i.length-1])==null?void 0:L.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(i)),sessionStorage.setItem("cuurSongTitle",n)),C(u+1))}).catch(h=>{var L;let y=i;i[D].trans===""&&(y[D]={src:S,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),i[D].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(y[D]={src:S,trans:"[missing]"}),d(y),((L=i[i.length-1])==null?void 0:L.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(i)),C(u+1),console.log(h)})},te={getLines:$,getLinesTrans:g,checkNextTrans:T};return t(k.Provider,{value:m({title:n,proccess:b,currLyrics:s,singles:p,lines:i,cou:u},te),children:e.children})}function Xe({className:e}){return l.exports.useContext(k),t(I,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(n=>t(H,{to:n.url,children:t(M,{sx:{my:2},children:n.name})},n.name))})}x(Xe)`
  
`;function Ye({className:e}){return t("div",{id:"",className:e,children:t(me,{children:t(fe,{className:"mui-rounded-icon"})})})}const Ze=x(Ye)`
  .mui-rounded-icon{
    background-color: white;
    color: ${e=>"#595959"};
    border-radius: 12px;
  }
`,et=n=>{var o=n,{className:e}=o,r=w(o,["className"]);const s=l.exports.useContext(R),c=l.exports.useContext(k),p=()=>{s.openDrawer(!0,"left","temporary",Ke)},a=function(){sessionStorage.removeItem("currLines")};return t(ge,{position:"sticky",className:e,children:t(xe,{maxWidth:"xl",children:f(De,{disableGutters:!0,children:[t(H,{to:"/",onClick:()=>{a()},children:t(N,{variant:"h6",noWrap:!0,component:"h1",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),c.lines[0]&&t(Ue,{}),t(I,{sx:{display:{xs:"flex",md:"flex"},flexGrow:1},children:t(Ze,{onClick:p})})]})})})},tt=x(et)`
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
`;function rt(n){var o=n,{className:e}=o,r=w(o,["className"]);return t("div",{className:e,children:r.children})}const nt=x(rt)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  background-color: ${e=>e.theme.palette.primary.light};
`;function ot({className:e}){return t("div",{id:"FOOTER",className:e})}x(ot)`
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

`;function st(n){var o=n,{className:e}=o,r=w(o,["className"]);const s=l.exports.useContext(R);return t(ye,{className:e,anchor:s.anchor,open:s.open,variant:s.permanent,onClose:()=>{s.closeDrawer(!1)},children:t(I,{className:"drawer-layout",sx:{width:s.anchor==="top"||s.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{s.closeDrawer(!1)},children:t(s.child,{})})})}const it=x(st)`
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
`;function at({className:e}){const[r,n]=l.exports.useState(!0),o=()=>{n(!1)};return f(Ee,{id:"main-modal-root",className:e,open:r,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(Ce,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(Se,{children:t(be,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(ve,{children:t(M,{onClick:o,children:"Close"})})]})}x(at)`
  
`;function lt(n){var o=n,{className:e}=o,r=w(o,["className"]);const[s,c]=l.exports.useState(!0);return t(Le,{className:e,open:s,onClose:()=>{c(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}x(lt)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function ct({className:e}){return t("div",{id:"",className:e})}const ut=x(ct)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function dt({className:e}){const[r,n]=l.exports.useState(""),o=l.exports.useContext(k),s=l.exports.useContext(q);l.exports.useEffect(()=>{window.onload=()=>{const i=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],d={childList:!1,attributes:!0,subtree:!1};function u(){p()}new MutationObserver(u).observe(i,d)}},[]),l.exports.useEffect(()=>{n(o.title)},[o.title]);function c(i){n(i.target.value),a(i)}const p=()=>{setTimeout(()=>{let i=document.querySelectorAll(".gs-title");document.querySelectorAll(".gsc-adBlock").forEach(u=>{u.parentNode.appendChild(u)}),i&&i.forEach((u,C)=>{if(u.innerText.includes("Lyrics")){let b=u.innerText.replace("Lyrics | Musixmatch"," ");u.innerText=b;const v={artistName:encodeURI(b.split("-")[0]),songName:encodeURI(b.split("-")[1])};u.addEventListener("click",F=>{o.proccess||o.getLines(v,b)})}else u.innerText.includes("Lyrics")||u.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&u.parentElement.parentElement.parentElement.remove()})},50)};function a(i){let d=document.querySelector("#gsc-i-id1");if(d)if(i.target.value.length<=1){let u=document.querySelector(".gsst_a");u&&u.dispatchEvent(new Event("click"))}else{d.value=i.target.value;let u=document.querySelectorAll(".gsc-search-box button")[0];u?setTimeout(()=>{u.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(s.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else s.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}return f("div",{id:"",className:e,children:[t(we,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:c,autoFocus:!1,autoComplete:"off",value:r}),t("div",{className:"gcse-search"})]})}const pt=x(dt)`
  *,::before,::after{
      background-color: '#ffffff0';
  }

  input, fieldset, label{
   color: white !important;
   border-color: white !important;
  }

`;function ht(n){var o=n,{className:e}=o,r=w(o,["className"]);const s=l.exports.useContext(k),[c,p]=l.exports.useState(!1),[a,i]=l.exports.useState(5e4),[d,u]=l.exports.useState([]);l.exports.useEffect(()=>{var g;((g=s.lines[s.lines.length-1])==null?void 0:g.trans).length>=1&&i(0)},[s.lines]);const C=()=>{var g;((g=s.lines[s.lines.length-1])==null?void 0:g.trans).length>=1&&(p(!0),v())},b=()=>{p(!1)},v=l.exports.useCallback(()=>{F()},[]);function F(){fetch("https://musicline-backend-basssites.vercel.app/single-trans",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(r.lyric)})}).then(g=>g.json()).then(g=>{(g==null?void 0:g.results[0])?u(g.results):u(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"])}).catch(g=>{console.log(g)})}const $=()=>d[1]?d.map((T,g)=>f(P,{children:[g>0&&t("hr",{}),t("p",{className:"tt-p",children:T})]})):t("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"});return t(Ne,{onClickAway:b,children:t(ke,{className:e,title:f(P,{children:[t(N,{color:"inherit",children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD:"}),t("div",{className:"tt-body",style:{textAlign:"center",maxHeight:"110px",overflowY:"auto",direction:"ltr"},children:d[0]?t($,{}):t(Z,{sx:{margin:"8px"},color:"primary"})})]}),arrow:!0,enterDelay:a,enterTouchDelay:a,leaveTouchDelay:60*1e3,leaveDelay:0,onOpen:()=>{v()},PopperProps:{disablePortal:!1},onClose:b,open:c,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:f("p",{className:"single-lyric",onClick:C,children:["\xA0 ",r.lyric," "]})})})}const mt=x(ht)`

`;function ft(n){var o=n,{className:e}=o,r=w(o,["className"]);const s=l.exports.useContext(k);return l.exports.useEffect(()=>{s.checkNextTrans()},[s,s.cou]),t(I,{children:t(_,{container:!0,spacing:2,children:s.lines&&f("div",{id:"lyrics_body",className:e,children:[t(N,{variant:"h6",noWrap:!0,component:"h3",children:s.title&&s.title}),s.lines.map((c,p)=>{var a;return c.src.includes("[")&&(c.trans="   "),f("div",{children:[p>0&&c.src.includes("[")&&f(P,{children:[t("br",{}),t("br",{})]}),t(_,{className:"lyrics-line en-line",item:!0,children:c.src.split(" ").map((i,d)=>t(mt,{lyric:i},d))},p.toString()+Math.floor(Math.random()*3e4)),t(_,{item:!0,className:"lyrics-line he-line",children:t(P,{children:((a=c.trans)==null?void 0:a.length)>2?c.trans.split(" ").map((i,d)=>{if(c.trans!=="   ")return f("small",{onLoad:()=>{s.checkNextTrans()},className:"single-trans",children:[i," \xA0"]},d)}):t("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})},p.toString()+Math.floor(Math.random()*3e4))]})})]})})})}const gt=x(ft)`
  font-family: 'Assistant','Roboto', 'sans-serif';
  /* max-width: 90%; */
  font-size: 20px;
  margin: 25px;
  margin-inline-end: 10px;
  padding: 15px 50px;
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

`;function xt({className:e}){const r=l.exports.useContext(k),n=l.exports.useContext(J);l.exports.useEffect(()=>{},[n]);function o(s){s.preventDefault()}return f("div",{className:e,children:[f("div",{className:"home-top",children:[!r.currLyrics&&f("div",{children:[f(N,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",t("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D1\u05E9\u05D5\u05E8\u05D4"]}),f(N,{variant:"h3",className:"page-h3",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA",t("br",{}),t("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})]})]}),t(I,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:o,children:t(pt,{})})]}),r.currLyrics&&t(gt,{className:"lyrics-body",fontSize:n.fontSize})]})}const Dt=x(xt)`
    .home-top{
       padding: 0 35px;

       @media (max-width: 600px) {
        padding: 0 25px;
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
    
`;function yt({className:e}){return f("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(N,{variant:"h2",className:"page-h2",children:"404"}),t(N,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const Et=x(yt)`

`;function Ct({className:e}){var i,d,u;const r=l.exports.useContext(R),n=l.exports.useContext(G),o=l.exports.useContext(q);l.exports.useRef(null);const s=Te({key:"muirtl",stylisPlugins:[Pe,Ie]});function c(){p()}const p=()=>{const C=document.createElement("script");C.type="text/javascript",C.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",C.defer=!0,document.body.appendChild(C)};l.exports.useEffect(()=>{c()},[]);const a=C=>{o.closeBanner(C)};return Y({palette:{mode:"dark"}}),f("div",{className:e,children:[t(Ae,{value:s,children:f(ze,{children:[t(Ge,{}),t(tt,{className:"header"}),o.main.open&&f(j,{severity:"warning",className:"main-alert",children:[t(Q,{children:o.main.title}),o.main.message]}),((i=o.error)==null?void 0:i.open)&&f(j,{severity:"error",className:"error-alert",onClose:()=>{o.closeBanner("error")},children:[t(Q,{children:(d=o.error)==null?void 0:d.title}),(u=o.error)==null?void 0:u.message]}),t(nt,{children:f(Be,{children:[t(X,{path:"/",element:t(Dt,{className:"page"})}),t(X,{path:"*",element:t(Et,{className:"page"})})]})}),r.open&&r.child&&t(it,{className:"drawer"}),n.main.open&&t(Z,{color:n.main.color||"primary"}),n.circular.open&&t(Fe,{color:n.main.color||"primary"}),o.snackbar.open&&t(Me,{open:o.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(j,{onClose:()=>{a("snackbar")},severity:o.snackbar.severity,sx:{width:"100%"},children:o.snackbar.message})})]})}),t(ut,{})]})}const St=x(Ct)`
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
`,bt=[qe,_e,He,je,Qe];function vt(e){return t(P,{children:bt.reduceRight((r,n)=>t(n,{children:r}),e.children)})}Oe.render(t(B.StrictMode,{children:t(vt,{children:t(Re,{theme:ee,children:t(St,{className:"app"})})})}),document.getElementById("root"));
