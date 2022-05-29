var ne=Object.defineProperty,oe=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var V=(e,r,n)=>r in e?ne(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,m=(e,r)=>{for(var n in r||(r={}))W.call(r,n)&&V(e,n,r[n]);if(O)for(var n of O(r))K.call(r,n)&&V(e,n,r[n]);return e},E=(e,r)=>oe(e,se(r));var w=(e,r)=>{var n={};for(var o in e)W.call(e,o)&&r.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&O)for(var o of O(e))r.indexOf(o)<0&&K.call(e,o)&&(n[o]=e[o]);return n};import{R as B,r as c,j as t,c as Z,M as ie,a as f,B as ae,b as F,d as le,A as ce,s as x,L as ue,N as H,e as de,f as pe,g as he,h as me,i as I,I as fe,k as ge,l as xe,C as De,T as ye,m as N,n as Ee,o as Ce,D as Se,p as be,q as ve,t as Le,u as we,v as Ne,w as ke,x as Te,F as P,y as ee,G as R,z as Ae,E as ze,H as Be,J as j,K as Q,O as Me,P as X,Q as Fe,S as Pe,U as Ie,V as Oe,W as Re,X as $e}from"./vendor.4d62d666.js";const _e=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}};_e();const $=B.createContext(void 0);function je(e){const[r,n]=c.exports.useState({}),l={openDrawer:(d,a,i="temporary",p)=>{n({open:d,anchor:a,permanent:i,child:p})},closeDrawer:(d,a,i="temporary",p)=>{n({open:d,anchor:a,permanent:i,child:p})}};return t($.Provider,{value:m(m({},r),l),children:e.children})}const G=B.createContext(void 0);function He(e){const[r,n]=c.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),d={createLoader:(a,i)=>{r[a]&&n(E(m({},r),{[a]:void 0})),n(E(m({},r),{[a]:{open:!1,color:i||"primary"}}))},openLoader:a=>{r[a]?n(E(m({},r),{[a]:E(m({},r[a]),{open:!0})})):console.error("Loader does'nt exist. Name: "+a)},closeLoader:a=>{r[a]?n(E(m({},r),{[a]:E(m({},r[a]),{open:!1})})):console.error("Loader does'nt exist. Name: "+a)}};return t(G.Provider,{value:m(m({},r),d),children:e.children})}const q=B.createContext(void 0);function Ge(e){const[r,n]=c.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),d={createBanner:(a,i,p,u)=>{console.log(u),r[a]&&n(E(m({},r),{[a]:void 0})),n(E(m({},r),{[a]:{open:!0,severity:i||"success",title:p||"",message:u||""}}))},openBanner:a=>{r[a]?n(E(m({},r),{[a]:E(m({},r[a]),{open:!0})})):console.error("Banner does'nt exist. Name: "+a)},closeBanner:a=>{r[a]?n(E(m({},r),{[a]:E(m({},r[a]),{open:!1})})):console.error("Banner does'nt exist. Name: "+a)}};return t(q.Provider,{value:m(m({},r),d),children:e.children})}const te=Z({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function qe(){const[e,r]=c.exports.useState(te.palette.primary.light);return t("div",{className:"wrapper",children:t(ie,{children:t("meta",{name:"theme-color",content:e})})})}const J=B.createContext(void 0);function Je(e){const[r,n]=c.exports.useState({fontSize:{sm:Number(localStorage.getItem("font_sm"))||15,md:Number(localStorage.getItem("font_md"))||25},colors:"pink"}),o=()=>{r.fontSize.md<60&&(n(E(m({},r),{fontSize:{sm:r.fontSize.sm+1,md:r.fontSize.md+1}})),l())},s=()=>{r.fontSize.sm>2&&(n(E(m({},r),{fontSize:{sm:r.fontSize.sm-1,md:r.fontSize.md-1}})),l())};function l(){localStorage.setItem("font_md",r.fontSize.md),localStorage.setItem("font_sm",r.fontSize.sm)}function d(){localStorage.setItem("colors_mode",r.colors)}function a(p){n(E(m({},r),{colors:p})),d()}const i={reduceFontSize:s,increaseFontSize:o,setColors:a};return t(J.Provider,{value:m(m({},r),i),children:e.children})}function Ue({className:e}){const r=c.exports.useContext(J);return t("div",{id:"",className:e,children:f(ae,{className:"button-group",children:[t(F,{"aria-label":"reduce",onClick:()=>{r.reduceFontSize()},children:t(le,{fontSize:"small"})}),t(F,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8"}),t(F,{"aria-label":"increase",onClick:()=>{r.increaseFontSize()},children:t(ce,{fontSize:"small"})})]})})}const Ve=x(Ue)`
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

`,We=[];function Ke(){return t(ue,{children:We.map((e,r)=>t(H,{to:e.url,children:f(de,{button:!0,children:[t(pe,{primary:e.name}),t(he,{children:t(me,{})})]},e.name)},r))})}const Qe=x(Ke)`
  
`,k=B.createContext(void 0);function Xe(e){const r=c.exports.useContext(G),[n,o]=c.exports.useState(sessionStorage.getItem("cuurSongTitle")||""),[s,l]=c.exports.useState(sessionStorage.getItem("currLines")||!1),[d,a]=c.exports.useState([]),[i,p]=c.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[u,C]=c.exports.useState(0),[b,v]=c.exports.useState(!1),M="https://musicline-backend-basssites.vercel.app",_=(S,D)=>{o(D),v(!0),r.openLoader("main"),fetch(`${M}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:S})}).then(h=>h.json()).then(h=>{if(r.closeLoader("main"),h==null?void 0:h.lyrics){let y=h.lyrics,A=[];y.split(/(?:\r\n|\r|\n)/g).map(z=>{z.length>=2&&A.push({src:z,trans:""})}),p(A),l(y),a(y.split(" "));let L=document.querySelector(".gsst_a");L&&L.dispatchEvent(new Event("click")),v(!0)}}).catch(h=>{r.closeLoader("main"),v(!0)})},T=()=>{let S=!1;for(let D=0;D<i.length;D++){let h=i[D];if(S===!0)break;if(h.trans.length<=1||h.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."){S=!0,g(h.src,D);break}else continue}},g=(S,D)=>{fetch(`${M}/line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:i})}).then(h=>h.json()).then(h=>{var A,L;let y=i;(h==null?void 0:h.trans.length)?(h.trans.map((z,U)=>{y[U]={src:y[U].src,trans:z}}),p(y),sessionStorage.setItem("currLines",JSON.stringify(i)),sessionStorage.setItem("cuurSongTitle",n),C(u+1)):(h==null?void 0:h.trans)?(y[D]={src:S,trans:h==null?void 0:h.trans},p(y),((A=i[i.length-1])==null?void 0:A.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(i)),sessionStorage.setItem("cuurSongTitle",n)),C(u+1)):(i[D].trans===void 0&&(y[D]={src:S,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),i[D].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(y[D]={src:S,trans:"[missing]"}),p(y),((L=i[i.length-1])==null?void 0:L.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(i)),sessionStorage.setItem("cuurSongTitle",n)),C(u+1))}).catch(h=>{var L;let y=i;i[D].trans===""&&(y[D]={src:S,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),i[D].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(y[D]={src:S,trans:"[missing]"}),p(y),((L=i[i.length-1])==null?void 0:L.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(i)),C(u+1),console.log(h)})},re={getLines:_,getLinesTrans:g,checkNextTrans:T};return t(k.Provider,{value:m({title:n,proccess:b,currLyrics:s,singles:d,lines:i,cou:u},re),children:e.children})}function Ye({className:e}){return c.exports.useContext(k),t(I,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(n=>t(H,{to:n.url,children:t(F,{sx:{my:2},children:n.name})},n.name))})}x(Ye)`
  
`;function Ze({className:e}){return t("div",{id:"",className:e,children:t(fe,{children:t(ge,{className:"mui-rounded-icon"})})})}const et=x(Ze)`
  .mui-rounded-icon{
    background-color: white;
    color: ${e=>"#595959"};
    border-radius: 12px;
  }
`,tt=n=>{var o=n,{className:e}=o,r=w(o,["className"]);const s=c.exports.useContext($),l=c.exports.useContext(k),d=()=>{s.openDrawer(!0,"left","temporary",Qe)},a=function(){sessionStorage.removeItem("currLines")};return t(xe,{position:"sticky",className:e,children:t(De,{maxWidth:"xl",children:f(ye,{disableGutters:!0,children:[t(H,{to:"/",onClick:()=>{a()},children:t(N,{variant:"h6",noWrap:!0,component:"h1",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),l.lines[0]&&t(Ve,{}),t(I,{sx:{display:{xs:"flex",md:"flex"},flexGrow:1},children:t(et,{onClick:d})})]})})})},rt=x(tt)`
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
`;function nt(n){var o=n,{className:e}=o,r=w(o,["className"]);return t("div",{className:e,children:r.children})}const ot=x(nt)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  background-color: ${e=>e.theme.palette.primary.light};
`;function st({className:e}){return t("div",{id:"FOOTER",className:e})}x(st)`
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

`;function it(n){var o=n,{className:e}=o,r=w(o,["className"]);const s=c.exports.useContext($);return t(Ee,{className:e,anchor:s.anchor,open:s.open,variant:s.permanent,onClose:()=>{s.closeDrawer(!1)},children:t(I,{className:"drawer-layout",sx:{width:s.anchor==="top"||s.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{s.closeDrawer(!1)},children:t(s.child,{})})})}const at=x(it)`
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
`;function lt({className:e}){const[r,n]=c.exports.useState(!0),o=()=>{n(!1)};return f(Ce,{id:"main-modal-root",className:e,open:r,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(Se,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(be,{children:t(ve,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(Le,{children:t(F,{onClick:o,children:"Close"})})]})}x(lt)`
  
`;function ct(n){var o=n,{className:e}=o,r=w(o,["className"]);const[s,l]=c.exports.useState(!0);return t(we,{className:e,open:s,onClose:()=>{l(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}x(ct)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function ut({className:e}){return t("div",{id:"",className:e})}const dt=x(ut)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function pt({className:e}){const[r,n]=c.exports.useState(""),o=c.exports.useContext(k),s=c.exports.useContext(q);c.exports.useEffect(()=>{window.onload=()=>{const i=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],p={childList:!1,attributes:!0,subtree:!1};function u(){d()}new MutationObserver(u).observe(i,p)}},[]),c.exports.useEffect(()=>{n(o.title)},[o.title]);function l(i){n(i.target.value),a(i)}const d=()=>{setTimeout(()=>{let i=document.querySelectorAll(".gs-title");document.querySelectorAll(".gsc-adBlock").forEach(u=>{u.parentNode.appendChild(u)}),i&&i.forEach((u,C)=>{if(u.innerText.includes("Lyrics")){let b=u.innerText.replace("Lyrics | Musixmatch"," ");u.innerText=b;const v={artistName:encodeURI(b.split("-")[0]),songName:encodeURI(b.split("-")[1])};u.addEventListener("click",M=>{o.proccess||o.getLines(v,b)})}else u.innerText.includes("Lyrics")||u.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&u.parentElement.parentElement.parentElement.remove()})},50)};function a(i){let p=document.querySelector("#gsc-i-id1");if(p)if(i.target.value.length<=1){let u=document.querySelector(".gsst_a");u&&u.dispatchEvent(new Event("click"))}else{p.value=i.target.value;let u=document.querySelectorAll(".gsc-search-box button")[0];u?setTimeout(()=>{u.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(s.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else s.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}return f("div",{id:"",className:e,children:[t(Ne,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:l,autoFocus:!1,autoComplete:"off",value:r}),t("div",{className:"gcse-search"})]})}const ht=x(pt)`
  *,::before,::after{
      background-color: '#ffffff0';
  }

  input, fieldset, label{
   color: white !important;
   border-color: white !important;
  }

`;function mt(n){var o=n,{className:e}=o,r=w(o,["className"]);const s=c.exports.useContext(k),[l,d]=c.exports.useState(!1),[a,i]=c.exports.useState(5e4),[p,u]=c.exports.useState([]);c.exports.useEffect(()=>{var g;((g=s.lines[s.lines.length-1])==null?void 0:g.trans).length>=1&&i(0)},[s.lines]);const C=()=>{var g;((g=s.lines[s.lines.length-1])==null?void 0:g.trans).length>=1&&(d(!0),v())},b=()=>{d(!1)},v=c.exports.useCallback(()=>{M()},[]);function M(){fetch("https://musicline-backend-basssites.vercel.app/single-trans",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(r.lyric)})}).then(g=>g.json()).then(g=>{(g==null?void 0:g.results[0])?u(g.results):u(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"])}).catch(g=>{console.log(g)})}const _=()=>p[1]?p.map((T,g)=>f(P,{children:[g>0&&t("hr",{}),t("p",{className:"tt-p",children:T})]})):t("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"});return t(ke,{onClickAway:b,children:t(Te,{className:e,title:f(P,{children:[t(N,{color:"inherit",children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD:"}),t("div",{className:"tt-body",style:{textAlign:"center",maxHeight:"110px",overflowY:"auto",direction:"ltr"},children:p[0]?t(_,{}):t(ee,{sx:{margin:"8px"},color:"primary"})})]}),arrow:!0,enterDelay:a,enterTouchDelay:a,leaveTouchDelay:60*1e3,leaveDelay:0,onOpen:()=>{v()},PopperProps:{disablePortal:!1},onClose:b,open:l,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:f("p",{className:"single-lyric",onClick:C,children:["\xA0 ",r.lyric," "]})})})}const Y=x(mt)`

`;function ft(n){var o=n,{className:e}=o,r=w(o,["className"]);const s=c.exports.useContext(k);return c.exports.useEffect(()=>{s.checkNextTrans()},[s,s.cou]),t(I,{children:t(R,{container:!0,spacing:2,children:s.lines&&f("div",{id:"lyrics_body",className:e,children:[t(N,{variant:"h6",noWrap:!0,component:"h3",children:s.title&&t(R,{className:"",item:!0,children:s.title.split(" ").map((l,d)=>t(Y,{lyric:l},d))},"a"+Math.floor(Math.random()*3e4))}),s.lines.map((l,d)=>{var a;return l.src.includes("[")&&(l.trans="   "),f("div",{children:[d>0&&l.src.includes("[")&&f(P,{children:[t("br",{}),t("br",{})]}),t(R,{className:"lyrics-line en-line",item:!0,children:l.src.split(" ").map((i,p)=>t(Y,{lyric:i},p))},d.toString()+Math.floor(Math.random()*3e4)),t(R,{item:!0,className:"lyrics-line he-line",children:t(P,{children:((a=l.trans)==null?void 0:a.length)>2?l.trans.split(" ").map((i,p)=>{if(l.trans!=="   ")return f("small",{onLoad:()=>{s.checkNextTrans()},className:"single-trans",children:[i," \xA0"]},p)}):t("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})},d.toString()+Math.floor(Math.random()*3e4))]})})]})})})}const gt=x(ft)`
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

    .single-lyric{
      padding: 0;
    }
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

`;function xt({className:e}){const r=c.exports.useContext(k),n=c.exports.useContext(J);c.exports.useEffect(()=>{},[n]);function o(s){s.preventDefault()}return f("div",{className:e,children:[f("div",{className:"home-top",children:[!r.currLyrics&&f("div",{children:[f(N,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",t("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D1\u05E9\u05D5\u05E8\u05D4"]}),f(N,{variant:"h3",className:"page-h3",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA",t("br",{}),t("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})]})]}),t(I,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:o,children:t(ht,{})})]}),r.currLyrics&&t(gt,{className:"lyrics-body",fontSize:n.fontSize})]})}const Dt=x(xt)`
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

`;function Ct({className:e}){var i,p,u;const r=c.exports.useContext($),n=c.exports.useContext(G),o=c.exports.useContext(q);c.exports.useRef(null);const s=Ae({key:"muirtl",stylisPlugins:[Ie,Oe]});function l(){d()}const d=()=>{const C=document.createElement("script");C.type="text/javascript",C.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",C.defer=!0,document.body.appendChild(C)};c.exports.useEffect(()=>{l()},[]);const a=C=>{o.closeBanner(C)};return Z({palette:{mode:"dark"}}),f("div",{className:e,children:[t(ze,{value:s,children:f(Be,{children:[t(qe,{}),t(rt,{className:"header"}),o.main.open&&f(j,{severity:"warning",className:"main-alert",children:[t(Q,{children:o.main.title}),o.main.message]}),((i=o.error)==null?void 0:i.open)&&f(j,{severity:"error",className:"error-alert",onClose:()=>{o.closeBanner("error")},children:[t(Q,{children:(p=o.error)==null?void 0:p.title}),(u=o.error)==null?void 0:u.message]}),t(ot,{children:f(Me,{children:[t(X,{path:"/",element:t(Dt,{className:"page"})}),t(X,{path:"*",element:t(Et,{className:"page"})})]})}),r.open&&r.child&&t(at,{className:"drawer"}),n.main.open&&t(ee,{color:n.main.color||"primary"}),n.circular.open&&t(Fe,{color:n.main.color||"primary"}),o.snackbar.open&&t(Pe,{open:o.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(j,{onClose:()=>{a("snackbar")},severity:o.snackbar.severity,sx:{width:"100%"},children:o.snackbar.message})})]})}),t(dt,{})]})}const St=x(Ct)`
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
`,bt=[Je,je,Ge,He,Xe];function vt(e){return t(P,{children:bt.reduceRight((r,n)=>t(n,{children:r}),e.children)})}Re.render(t(B.StrictMode,{children:t(vt,{children:t($e,{theme:te,children:t(St,{className:"app"})})})}),document.getElementById("root"));
