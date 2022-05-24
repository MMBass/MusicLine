var Y=Object.defineProperty,X=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var q=(e,n,r)=>n in e?Y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,u=(e,n)=>{for(var r in n||(n={}))G.call(n,r)&&q(e,r,n[r]);if(B)for(var r of B(n))U.call(n,r)&&q(e,r,n[r]);return e},D=(e,n)=>X(e,Z(n));var C=(e,n)=>{var r={};for(var s in e)G.call(e,s)&&n.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&B)for(var s of B(e))n.indexOf(s)<0&&U.call(e,s)&&(r[s]=e[s]);return r};import{R as k,r as c,j as t,c as ee,M as te,a as x,B as ne,b as z,d as re,A as oe,s as f,L as se,N as O,e as ie,f as ae,g as le,h as ce,i as A,k as ue,C as de,T as pe,I as he,l as me,m as E,n as fe,o as ge,D as xe,p as ye,q as De,t as be,u as ve,v as Se,w as Ce,F as P,x as W,G as I,y as Ee,z as we,H as Le,E as J,J as Ne,K as ke,O as R,P as Te,S as ze,Q as Ae,U as Me,V as Be,W as Pe}from"./vendor.49f63279.js";const Fe=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=r(o);fetch(o.href,l)}};Fe();const F=k.createContext(void 0);function Ie(e){const[n,r]=c.exports.useState({}),l={openDrawer:(i,a,d="temporary",h)=>{r({open:i,anchor:a,permanent:d,child:h})},closeDrawer:(i,a,d="temporary",h)=>{r({open:i,anchor:a,permanent:d,child:h})}};return t(F.Provider,{value:u(u({},n),l),children:e.children})}const _=k.createContext(void 0);function Re(e){const[n,r]=c.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),i={createLoader:(a,d)=>{n[a]&&r(D(u({},n),{[a]:void 0})),r(D(u({},n),{[a]:{open:!1,color:d||"primary"}}))},openLoader:a=>{n[a]?r(D(u({},n),{[a]:D(u({},n[a]),{open:!0})})):console.error("Loader does'nt exist. Name: "+a)},closeLoader:a=>{n[a]?r(D(u({},n),{[a]:D(u({},n[a]),{open:!1})})):console.error("Loader does'nt exist. Name: "+a)}};return t(_.Provider,{value:u(u({},n),i),children:e.children})}const V=k.createContext(void 0);function Oe(e){const[n,r]=c.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),i={createBanner:(a,d,h,y)=>{n[a]&&r(D(u({},n),{[a]:void 0})),r(D(u({},n),{[a]:{open:!1,severity:d||"success",title:h||"",mesaage:y||""}}))},openBanner:a=>{n[a]?r(D(u({},n),{[a]:D(u({},n[a]),{open:!0})})):console.error("Banner does'nt exist. Name: "+a)},closeBanner:a=>{n[a]?r(D(u({},n),{[a]:D(u({},n[a]),{open:!1})})):console.error("Banner does'nt exist. Name: "+a)}};return t(V.Provider,{value:u(u({},n),i),children:e.children})}const K=ee({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function _e(){const[e,n]=c.exports.useState(K.palette.primary.light);return t("div",{className:"wrapper",children:t(te,{children:t("meta",{name:"theme-color",content:e})})})}const $=k.createContext(void 0);function $e(e){const[n,r]=c.exports.useState({fontSize:{sm:localStorage.getItem("font_sm")||15,md:localStorage.getItem("font_md")||25}}),s=()=>{n.fontSize.md<60&&(r(D(u({},n),{fontSize:{sm:n.fontSize.sm+.5,md:n.fontSize.md+.5}})),l())},o=()=>{n.fontSize.sm>2&&(r(D(u({},n),{fontSize:{sm:n.fontSize.sm-.5,md:n.fontSize.md-.5}})),l())};function l(){localStorage.setItem("font_md",n.fontSize.md),localStorage.setItem("font_sm",n.fontSize.sm)}const i={reduceFontSize:o,increaseFontSize:s};return t($.Provider,{value:u(u({},n),i),children:e.children})}function je({className:e}){const n=c.exports.useContext($);return t("div",{id:"",className:e,children:x(ne,{className:"button-group",children:[t(z,{"aria-label":"reduce",onClick:()=>{n.reduceFontSize()},children:t(re,{fontSize:"small"})}),t(z,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D8\u05E7\u05E1\u05D8"}),t(z,{"aria-label":"increase",onClick:()=>{n.increaseFontSize()},children:t(oe,{fontSize:"small"})})]})})}const He=f(je)`
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

`,qe=[];function Ge(){return t(se,{children:qe.map((e,n)=>t(O,{to:e.url,children:x(ie,{button:!0,children:[t(ae,{primary:e.name}),t(le,{children:t(ce,{})})]},e.name)},n))})}const Ue=f(Ge)`
  
`,w=k.createContext(void 0);function Je(e){const n=c.exports.useContext(_),[r,s]=c.exports.useState(sessionStorage.getItem("currLines")||!1),[o,l]=c.exports.useState([]),[i,a]=c.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[d,h]=c.exports.useState(0),y="https://musicline-backend-basssites.vercel.app",L=S=>{n.openLoader("main"),fetch(`${y}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:S})}).then(p=>p.json()).then(p=>{var m,b,N;if(n.closeLoader("main"),(N=(b=(m=p==null?void 0:p.message)==null?void 0:m.body)==null?void 0:b.lyrics)==null?void 0:N.lyrics_body){let v=p.message.body.lyrics.lyrics_body;v=v.substring(0,v.indexOf("..."));let M=[];v.split(/(?:\r\n|\r|\n)/g).map(H=>{H.length>=2&&M.push({src:H,trans:""})}),a(M),s(v),l(v.split(" "));let j=document.querySelector(".gsst_a");j&&j.dispatchEvent(new Event("click"))}})},T=()=>{let S=!1;for(let p=0;p<i.length;p++){let m=i[p];if(S===!0)break;if(m.trans.length<=1||m.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."){S=!0,g(m.src,p);break}else continue}},g=(S,p)=>{fetch(`${y}/line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(S)})}).then(m=>m.json()).then(m=>{var N,v;let b=i;(m==null?void 0:m.trans)?(b[p]={src:S,trans:m==null?void 0:m.trans},a(b),((N=i[i.length-1])==null?void 0:N.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(i)),h(d+1)):(i[p].trans===void 0&&(b[p]={src:S,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),i[p].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(b[p]={src:S,trans:"[missing]"}),a(b),((v=i[i.length-1])==null?void 0:v.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(i)),h(d+1))}).catch(m=>{var v;let b=i;i[p].trans===""&&(b[p]={src:S,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),i[p].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(b[p]={src:S,trans:"[missing]"}),a(b),((v=i[i.length-1])==null?void 0:v.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(i)),h(d+1),console.log(m)})},Q={getLines:L,getLinesTrans:g,checkNextTrans:T};return t(w.Provider,{value:u({currLyrics:r,singles:o,lines:i,cou:d},Q),children:e.children})}function We({className:e}){return c.exports.useContext(w),t(A,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(r=>t(O,{to:r.url,children:t(z,{sx:{my:2},children:r.name})},r.name))})}const Ve=f(We)`
  
`,Ke=r=>{var s=r,{className:e}=s,n=C(s,["className"]);const o=c.exports.useContext(F),l=c.exports.useContext(w);return t(ue,{position:"static",className:e,children:t(de,{maxWidth:"xl",children:x(pe,{disableGutters:!0,children:[t(A,{sx:{display:{xs:"flex",md:"none"}},children:t(he,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{o.openDrawer(!0,"left","temporary",Ue)},color:"inherit",children:t(me,{})})}),t(O,{to:"/",children:t(E,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),l.lines[0]&&t(He,{}),t(Ve,{className:"nav-bar"})]})})})},Qe=f(Ke)`
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
`;function Ye(r){var s=r,{className:e}=s,n=C(s,["className"]);return t("div",{className:e,children:n.children})}const Xe=f(Ye)`
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

`;function tt(r){var s=r,{className:e}=s,n=C(s,["className"]);const o=c.exports.useContext(F);return t(fe,{className:e,anchor:o.anchor,open:o.open,variant:o.permanent,onClose:()=>{o.closeDrawer(!1)},children:t(A,{className:"drawer-layout",sx:{width:o.anchor==="top"||o.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{o.closeDrawer(!1)},children:t(o.child,{})})})}const nt=f(tt)`
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
`;function rt({className:e}){const[n,r]=c.exports.useState(!0),s=()=>{r(!1)};return x(ge,{id:"main-modal-root",className:e,open:n,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(xe,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(ye,{children:t(De,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(be,{children:t(z,{onClick:s,children:"Close"})})]})}f(rt)`
  
`;function ot(r){var s=r,{className:e}=s,n=C(s,["className"]);const[o,l]=c.exports.useState(!0);return t(ve,{className:e,open:o,onClose:()=>{l(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:n.children})}f(ot)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function st({className:e}){return t("div",{id:"",className:e})}const it=f(st)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function at({className:e}){const n=c.exports.useContext(w);c.exports.useEffect(()=>{window.onload=()=>{const o=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],l={childList:!1,attributes:!0,subtree:!1};function i(){r()}new MutationObserver(i).observe(o,l)}},[]);let r=()=>{setTimeout(()=>{let o=document.querySelectorAll(".gs-title");o&&o.forEach((l,i)=>{if(l.innerText.includes("Lyrics")){let a=l.innerText.replace("Lyrics | Musixmatch"," ");l.innerText=a;const d={artistName:encodeURI(a.split("-")[0]),songName:encodeURI(a.split("-")[1])};l.addEventListener("click",h=>{n.getLines(d)})}else l.innerText.includes("Lyrics")||l.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&l.parentElement.parentElement.parentElement.remove()})},50)};function s(o){let l=document.querySelector("#gsc-i-id1");if(l)if(o.target.value.length<=1){let i=document.querySelector(".gsst_a");i&&i.dispatchEvent(new Event("click"))}else{l.value=o.target.value;let i=document.querySelectorAll(".gsc-search-box button")[0];i?setTimeout(()=>{i.dispatchEvent(new Event("click"))},100*Math.floor(Math.random()*4)):console.error("no gsc loaded, try reload the page")}else console.error("no gsc loaded, try reload the page")}return x("div",{id:"",className:e,children:[t(Se,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:s,autoFocus:!1,autoComplete:"off"}),t("div",{className:"gcse-search"})]})}const lt=f(at)`
  *,::before,::after{
      background-color: '#ffffff0';
  }
`;function ct(r){var s=r,{className:e}=s,n=C(s,["className"]);const o=c.exports.useContext(w),[l,i]=c.exports.useState(5e4),[a,d]=c.exports.useState([]);c.exports.useEffect(()=>{var g;((g=o.lines[o.lines.length-1])==null?void 0:g.trans).length>=1&&i(0)},[o.lines]);const h=c.exports.useCallback(()=>{y()},[]);function y(){fetch("https://musicline-backend-basssites.vercel.app/single-trans",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(n.lyric)})}).then(g=>g.json()).then(g=>{(g==null?void 0:g.results[0])?d(g.results):d(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"])}).catch(g=>{console.log(g)})}const L=()=>a[1]?a.map((T,g)=>x(P,{children:[g>0&&t("hr",{}),t("p",{className:"tt-p",children:T})]})):t("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"});return t(Ce,{className:e,title:x(P,{children:[t(E,{color:"inherit",children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD:"}),t("div",{className:"tt-body",style:{textAlign:"center",maxHeight:"110px",overflowY:"auto",direction:"ltr"},children:a[0]?t(L,{}):t(W,{sx:{margin:"8px"},color:"primary"})})]}),arrow:!0,enterDelay:l,enterTouchDelay:l,leaveTouchDelay:60*1e3,leaveDelay:0,onOpen:()=>{h()},children:t("p",{className:"single-lyric",children:n.lyric})})}const ut=f(ct)`

`;function dt(r){var s=r,{className:e}=s,n=C(s,["className"]);const o=c.exports.useContext(w);return c.exports.useEffect(()=>{o.checkNextTrans()},[o,o.cou]),t(A,{children:t(I,{container:!0,spacing:2,children:o.lines&&t("div",{id:"lyrics_body",className:e,children:o.lines.map((l,i)=>{var a;return x("div",{children:[t(I,{className:"lyrics-line en-line",item:!0,children:l.src.split(" ").map((d,h)=>t(ut,{lyric:d},h))},i.toString()+Math.floor(Math.random()*3e4)),t(I,{item:!0,className:"lyrics-line he-line",children:t(P,{children:((a=l.trans)==null?void 0:a.length)>2?l.trans.split(" ").map((d,h)=>t("small",{onLoad:()=>{o.checkNextTrans()},className:"single-trans",children:d},h)):t("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})},i.toString()+Math.floor(Math.random()*3e4))]})})})})})}const pt=f(dt)`
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

`;function ht({className:e}){const n=c.exports.useContext(w),r=c.exports.useContext($);c.exports.useEffect(()=>{},[r]);function s(o){o.preventDefault();let l=document.querySelectorAll(".gsc-search-box button")[0];l?l.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return x("div",{className:e,children:[!n.currLyrics&&x("div",{children:[x(E,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",t("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D1\u05E9\u05D5\u05E8\u05D4"]}),t(E,{variant:"h3",className:"page-h3",children:"\u05DC\u05D9\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DE\u05D5\u05D6\u05D9\u05E7\u05D4"})]}),t(A,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:s,children:t(lt,{})}),n.currLyrics&&t(pt,{className:"lyrics-body",fontSize:r.fontSize})]})}const mt=f(ht)`

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

`;function xt({className:e}){return x("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(E,{variant:"h2",className:"page-h2",children:"404"}),t(E,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const yt=f(xt)`

`;function Dt({className:e}){const n=c.exports.useContext(F),r=c.exports.useContext(_),s=c.exports.useContext(V),o=c.exports.useRef(null),l=Ee({key:"muirtl",stylisPlugins:[Ae,Me]});function i(){a()}const a=()=>{const y=document.createElement("script");y.type="text/javascript",y.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",y.defer=!0,document.body.appendChild(y)};c.exports.useEffect(()=>{i()},[]);const d=y=>{s.closeBanner(y)};function h(y){y.preventDefault();let L=document.querySelectorAll(".gsc-search-box button")[0];L?L.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return x("div",{className:e,ref:o,children:[t(we,{value:l,children:x(Le,{children:[t(_e,{}),t(Qe,{className:"header",HandleSubmit:h}),s.main.open&&x(J,{severity:"warning",className:"main-alert",children:[t(Ne,{children:s.main.title}),s.main.message]}),t(Xe,{children:x(ke,{children:[t(R,{path:"/",element:t(mt,{className:"page"})}),t(R,{path:"/about",element:t(gt,{className:"page"})}),t(R,{path:"*",element:t(yt,{className:"page"})})]})}),n.open&&n.child&&t(nt,{className:"drawer"}),r.main.open&&t(W,{color:r.main.color||"primary"}),r.circular.open&&t(Te,{color:r.main.color||"primary"}),s.snackbar.open&&t(ze,{open:s.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(J,{onClose:()=>{d("snackbar")},severity:s.snackbar.severity,sx:{width:"100%"},children:s.snackbar.message})}),t(et,{})]})}),t(it,{})]})}const bt=f(Dt)`
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
`,vt=[$e,Ie,Oe,Re,Je];function St(e){return t(P,{children:vt.reduceRight((n,r)=>t(r,{children:n}),e.children)})}Be.render(t(k.StrictMode,{children:t(St,{children:t(Pe,{theme:K,children:t(bt,{className:"app"})})})}),document.getElementById("root"));
