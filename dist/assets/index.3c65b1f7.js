var Y=Object.defineProperty,Z=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var J=(e,n,o)=>n in e?Y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,h=(e,n)=>{for(var o in n||(n={}))U.call(n,o)&&J(e,o,n[o]);if(F)for(var o of F(n))W.call(n,o)&&J(e,o,n[o]);return e},y=(e,n)=>Z(e,ee(n));var b=(e,n)=>{var o={};for(var i in e)U.call(e,i)&&n.indexOf(i)<0&&(o[i]=e[i]);if(e!=null&&F)for(var i of F(e))n.indexOf(i)<0&&W.call(e,i)&&(o[i]=e[i]);return o};import{R as N,r as c,j as t,c as te,M as ne,a as g,B as re,b as A,d as oe,A as se,s as x,L as ie,N as j,e as ae,f as le,g as ce,h as ue,i as B,k as de,C as pe,T as he,I as me,l as fe,m as v,n as ge,o as xe,D as De,p as ye,q as Ce,t as Ee,u as be,v as ve,w as Se,x as Le,F as z,y as K,G as $,z as we,E as Ne,H as ke,J as V,K as Te,O as Ae,P as _,Q as ze,S as Be,U as Pe,V as Me,W as Fe,X as Ie}from"./vendor.568dfea1.js";const Oe=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=o(s);fetch(s.href,l)}};Oe();const I=N.createContext(void 0);function Re(e){const[n,o]=c.exports.useState({}),l={openDrawer:(r,a,p="temporary",u)=>{o({open:r,anchor:a,permanent:p,child:u})},closeDrawer:(r,a,p="temporary",u)=>{o({open:r,anchor:a,permanent:p,child:u})}};return t(I.Provider,{value:h(h({},n),l),children:e.children})}const H=N.createContext(void 0);function $e(e){const[n,o]=c.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),r={createLoader:(a,p)=>{n[a]&&o(y(h({},n),{[a]:void 0})),o(y(h({},n),{[a]:{open:!1,color:p||"primary"}}))},openLoader:a=>{n[a]?o(y(h({},n),{[a]:y(h({},n[a]),{open:!0})})):console.error("Loader does'nt exist. Name: "+a)},closeLoader:a=>{n[a]?o(y(h({},n),{[a]:y(h({},n[a]),{open:!1})})):console.error("Loader does'nt exist. Name: "+a)}};return t(H.Provider,{value:h(h({},n),r),children:e.children})}const Q=N.createContext(void 0);function _e(e){const[n,o]=c.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),r={createBanner:(a,p,u,E)=>{n[a]&&o(y(h({},n),{[a]:void 0})),o(y(h({},n),{[a]:{open:!1,severity:p||"success",title:u||"",mesaage:E||""}}))},openBanner:a=>{n[a]?o(y(h({},n),{[a]:y(h({},n[a]),{open:!0})})):console.error("Banner does'nt exist. Name: "+a)},closeBanner:a=>{n[a]?o(y(h({},n),{[a]:y(h({},n[a]),{open:!1})})):console.error("Banner does'nt exist. Name: "+a)}};return t(Q.Provider,{value:h(h({},n),r),children:e.children})}const X=te({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function je(){const[e,n]=c.exports.useState(X.palette.primary.light);return t("div",{className:"wrapper",children:t(ne,{children:t("meta",{name:"theme-color",content:e})})})}const G=N.createContext(void 0);function He(e){const[n,o]=c.exports.useState({fontSize:{sm:Number(localStorage.getItem("font_sm"))||15,md:Number(localStorage.getItem("font_md"))||25}}),i=()=>{n.fontSize.md<60&&(o(y(h({},n),{fontSize:{sm:n.fontSize.sm+1,md:n.fontSize.md+1}})),l())},s=()=>{n.fontSize.sm>2&&(o(y(h({},n),{fontSize:{sm:n.fontSize.sm-1,md:n.fontSize.md-1}})),l())};function l(){localStorage.setItem("font_md",n.fontSize.md),localStorage.setItem("font_sm",n.fontSize.sm)}const r={reduceFontSize:s,increaseFontSize:i};return t(G.Provider,{value:h(h({},n),r),children:e.children})}function Ge({className:e}){const n=c.exports.useContext(G);return t("div",{id:"",className:e,children:g(re,{className:"button-group",children:[t(A,{"aria-label":"reduce",onClick:()=>{n.reduceFontSize()},children:t(oe,{fontSize:"small"})}),t(A,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8"}),t(A,{"aria-label":"increase",onClick:()=>{n.increaseFontSize()},children:t(se,{fontSize:"small"})})]})})}const qe=x(Ge)`
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

`,Je=[];function Ue(){return t(ie,{children:Je.map((e,n)=>t(j,{to:e.url,children:g(ae,{button:!0,children:[t(le,{primary:e.name}),t(ce,{children:t(ue,{})})]},e.name)},n))})}const We=x(Ue)`
  
`,S=N.createContext(void 0);function Ve(e){const n=c.exports.useContext(H),[o,i]=c.exports.useState(sessionStorage.getItem("currLines")||!1),[s,l]=c.exports.useState([]),[r,a]=c.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[p,u]=c.exports.useState(0),[E,k]=c.exports.useState(!1),T="https://musicline-backend-basssites.vercel.app",P=d=>{k(!0),n.openLoader("main"),fetch(`${T}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:d})}).then(m=>m.json()).then(m=>{if(n.closeLoader("main"),m==null?void 0:m.lyrics){let f=m.lyrics,D=[];f.split(/(?:\r\n|\r|\n)/g).map(C=>{C.length>=2&&D.push({src:C,trans:""})}),a(D),i(f),l(f.split(" "));let w=document.querySelector(".gsst_a");w&&w.dispatchEvent(new Event("click")),k(!0)}}).catch(m=>{n.closeLoader("main"),k(!0)})},O=()=>{let d=!1;for(let m=0;m<r.length;m++){let f=r[m];if(d===!0)break;if(f.trans.length<=1||f.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."){d=!0,M(f.src,m);break}else continue}},M=(d,m)=>{fetch(`${T}/line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:r})}).then(f=>f.json()).then(f=>{var w,C;let D=r;(f==null?void 0:f.trans.length)?(f.trans.map((R,q)=>{D[q]={src:D[q].src,trans:R}}),a(D),u(p+1)):(f==null?void 0:f.trans)?(D[m]={src:d,trans:f==null?void 0:f.trans},a(D),((w=r[r.length-1])==null?void 0:w.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(r)),u(p+1)):(r[m].trans===void 0&&(D[m]={src:d,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),r[m].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(D[m]={src:d,trans:"[missing]"}),a(D),((C=r[r.length-1])==null?void 0:C.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(r)),u(p+1))}).catch(f=>{var C;let D=r;r[m].trans===""&&(D[m]={src:d,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),r[m].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(D[m]={src:d,trans:"[missing]"}),a(D),((C=r[r.length-1])==null?void 0:C.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(r)),u(p+1),console.log(f)})},L={getLines:P,getLinesTrans:M,checkNextTrans:O};return t(S.Provider,{value:h({proccess:E,currLyrics:o,singles:s,lines:r,cou:p},L),children:e.children})}function Ke({className:e}){return c.exports.useContext(S),t(B,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(o=>t(j,{to:o.url,children:t(A,{sx:{my:2},children:o.name})},o.name))})}const Qe=x(Ke)`
  
`,Xe=o=>{var i=o,{className:e}=i,n=b(i,["className"]);const s=c.exports.useContext(I),l=c.exports.useContext(S);return t(de,{position:"static",className:e,children:t(pe,{maxWidth:"xl",children:g(he,{disableGutters:!0,children:[t(B,{sx:{display:{xs:"flex",md:"none"}},children:t(me,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{s.openDrawer(!0,"left","temporary",We)},color:"inherit",children:t(fe,{})})}),t(j,{to:"/",children:t(v,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),l.lines[0]&&t(qe,{}),t(Qe,{className:"nav-bar"})]})})})},Ye=x(Xe)`
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
`;function Ze(o){var i=o,{className:e}=i,n=b(i,["className"]);return t("div",{className:e,children:n.children})}const et=x(Ze)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  padding: 25px;
  background-color: ${e=>e.theme.palette.primary.light};
`;function tt({className:e}){return t("div",{id:"FOOTER",className:e})}x(tt)`
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

`;function nt(o){var i=o,{className:e}=i,n=b(i,["className"]);const s=c.exports.useContext(I);return t(ge,{className:e,anchor:s.anchor,open:s.open,variant:s.permanent,onClose:()=>{s.closeDrawer(!1)},children:t(B,{className:"drawer-layout",sx:{width:s.anchor==="top"||s.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{s.closeDrawer(!1)},children:t(s.child,{})})})}const rt=x(nt)`
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
`;function ot({className:e}){const[n,o]=c.exports.useState(!0),i=()=>{o(!1)};return g(xe,{id:"main-modal-root",className:e,open:n,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(De,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(ye,{children:t(Ce,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(Ee,{children:t(A,{onClick:i,children:"Close"})})]})}x(ot)`
  
`;function st(o){var i=o,{className:e}=i,n=b(i,["className"]);const[s,l]=c.exports.useState(!0);return t(be,{className:e,open:s,onClose:()=>{l(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:n.children})}x(st)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function it({className:e}){return t("div",{id:"",className:e})}const at=x(it)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function lt({className:e}){const n=c.exports.useContext(S);c.exports.useEffect(()=>{window.onload=()=>{const s=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],l={childList:!1,attributes:!0,subtree:!1};function r(){o()}new MutationObserver(r).observe(s,l)}},[]);let o=()=>{setTimeout(()=>{let s=document.querySelectorAll(".gs-title");document.querySelectorAll(".gsc-adBlock").forEach(r=>{r.parentNode.appendChild(r)}),s&&s.forEach((r,a)=>{if(r.innerText.includes("Lyrics")){let p=r.innerText.replace("Lyrics | Musixmatch"," ");r.innerText=p;const u={artistName:encodeURI(p.split("-")[0]),songName:encodeURI(p.split("-")[1])};r.addEventListener("click",E=>{n.proccess||n.getLines(u)})}else r.innerText.includes("Lyrics")||r.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&r.parentElement.parentElement.parentElement.remove()})},50)};function i(s){let l=document.querySelector("#gsc-i-id1");if(l)if(s.target.value.length<=1){let r=document.querySelector(".gsst_a");r&&r.dispatchEvent(new Event("click"))}else{l.value=s.target.value;let r=document.querySelectorAll(".gsc-search-box button")[0];r?setTimeout(()=>{r.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):console.error("no gsc loaded, try reload the page")}else console.error("no gsc loaded, try reload the page")}return g("div",{id:"",className:e,children:[t(ve,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:i,autoFocus:!1,autoComplete:"off"}),t("div",{className:"gcse-search"})]})}const ct=x(lt)`
  *,::before,::after{
      background-color: '#ffffff0';
  }
`;function ut(o){var i=o,{className:e}=i,n=b(i,["className"]);const s=c.exports.useContext(S),[l,r]=c.exports.useState(!1),[a,p]=c.exports.useState(5e4),[u,E]=c.exports.useState([]);c.exports.useEffect(()=>{var d;((d=s.lines[s.lines.length-1])==null?void 0:d.trans).length>=1&&p(0)},[s.lines]);const k=()=>{var d;((d=s.lines[s.lines.length-1])==null?void 0:d.trans).length>=1&&(r(!0),P())},T=()=>{r(!1)},P=c.exports.useCallback(()=>{O()},[]);function O(){fetch("https://musicline-backend-basssites.vercel.app/single-trans",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(n.lyric)})}).then(d=>d.json()).then(d=>{(d==null?void 0:d.results[0])?E(d.results):E(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"])}).catch(d=>{console.log(d)})}const M=()=>u[1]?u.map((L,d)=>g(z,{children:[d>0&&t("hr",{}),t("p",{className:"tt-p",children:L})]})):t("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"});return t(Se,{onClickAway:T,children:t(Le,{className:e,title:g(z,{children:[t(v,{color:"inherit",children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD:"}),t("div",{className:"tt-body",style:{textAlign:"center",maxHeight:"110px",overflowY:"auto",direction:"ltr"},children:u[0]?t(M,{}):t(K,{sx:{margin:"8px"},color:"primary"})})]}),arrow:!0,enterDelay:a,enterTouchDelay:a,leaveTouchDelay:60*1e3,leaveDelay:0,onOpen:()=>{P()},PopperProps:{disablePortal:!1},onClose:T,open:l,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:t("p",{className:"single-lyric",onClick:k,children:n.lyric})})})}const dt=x(ut)`

`;function pt(o){var i=o,{className:e}=i,n=b(i,["className"]);const s=c.exports.useContext(S);return c.exports.useEffect(()=>{s.checkNextTrans()},[s,s.cou]),t(B,{children:t($,{container:!0,spacing:2,children:s.lines&&t("div",{id:"lyrics_body",className:e,children:s.lines.map((l,r)=>{var a;return l.src.includes("[")&&(l.trans="   "),g("div",{children:[l.src.includes("[")&&g(z,{children:[t("br",{}),t("br",{})]}),t($,{className:"lyrics-line en-line",item:!0,children:l.src.split(" ").map((p,u)=>t(dt,{lyric:p},u))},r.toString()+Math.floor(Math.random()*3e4)),t($,{item:!0,className:"lyrics-line he-line",children:t(z,{children:((a=l.trans)==null?void 0:a.length)>2?l.trans.split(" ").map((p,u)=>{if(l.trans!=="   ")return t("small",{onLoad:()=>{s.checkNextTrans()},className:"single-trans",children:p},u)}):t("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})},r.toString()+Math.floor(Math.random()*3e4))]})})})})})}const ht=x(pt)`
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

`;function mt({className:e}){const n=c.exports.useContext(S),o=c.exports.useContext(G);return c.exports.useEffect(()=>{},[o]),g("div",{className:e,children:[!n.currLyrics&&g("div",{children:[g(v,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",t("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D1\u05E9\u05D5\u05E8\u05D4"]}),g(v,{variant:"h3",className:"page-h3",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA",t("br",{}),t("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})]})]}),t(B,{component:"form",noValidate:!0,autoComplete:"off",children:t(ct,{})}),n.currLyrics&&t(ht,{className:"lyrics-body",fontSize:o.fontSize})]})}const ft=x(mt)`

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
    
`;function gt({className:e}){return t("div",{className:e,children:t(v,{variant:"h2",className:"page-h2",children:"About Page"})})}const xt=x(gt)`

`;function Dt({className:e}){return g("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(v,{variant:"h2",className:"page-h2",children:"404"}),t(v,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const yt=x(Dt)`

`;function Ct({className:e}){const n=c.exports.useContext(I),o=c.exports.useContext(H),i=c.exports.useContext(Q),s=c.exports.useRef(null),l=we({key:"muirtl",stylisPlugins:[Pe,Me]});function r(){a()}const a=()=>{const u=document.createElement("script");u.type="text/javascript",u.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",u.defer=!0,document.body.appendChild(u)};c.exports.useEffect(()=>{r()},[]);const p=u=>{i.closeBanner(u)};return g("div",{className:e,ref:s,children:[t(Ne,{value:l,children:g(ke,{children:[t(je,{}),t(Ye,{className:"header"}),i.main.open&&g(V,{severity:"warning",className:"main-alert",children:[t(Te,{children:i.main.title}),i.main.message]}),t(et,{children:g(Ae,{children:[t(_,{path:"/",element:t(ft,{className:"page"})}),t(_,{path:"/about",element:t(xt,{className:"page"})}),t(_,{path:"*",element:t(yt,{className:"page"})})]})}),n.open&&n.child&&t(rt,{className:"drawer"}),o.main.open&&t(K,{color:o.main.color||"primary"}),o.circular.open&&t(ze,{color:o.main.color||"primary"}),i.snackbar.open&&t(Be,{open:i.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(V,{onClose:()=>{p("snackbar")},severity:i.snackbar.severity,sx:{width:"100%"},children:i.snackbar.message})})]})}),t(at,{})]})}const Et=x(Ct)`
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
`,bt=[He,Re,_e,$e,Ve];function vt(e){return t(z,{children:bt.reduceRight((n,o)=>t(o,{children:n}),e.children)})}Fe.render(t(N.StrictMode,{children:t(vt,{children:t(Ie,{theme:X,children:t(Et,{className:"app"})})})}),document.getElementById("root"));
