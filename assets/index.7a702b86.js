var Q=Object.defineProperty,X=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var q=(e,n,o)=>n in e?Q(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,p=(e,n)=>{for(var o in n||(n={}))G.call(n,o)&&q(e,o,n[o]);if(P)for(var o of P(n))J.call(n,o)&&q(e,o,n[o]);return e},y=(e,n)=>X(e,Y(n));var C=(e,n)=>{var o={};for(var s in e)G.call(e,s)&&n.indexOf(s)<0&&(o[s]=e[s]);if(e!=null&&P)for(var s of P(e))n.indexOf(s)<0&&J.call(e,s)&&(o[s]=e[s]);return o};import{R as N,r as u,j as t,c as Z,M as ee,a as f,B as te,b as T,d as ne,A as re,s as g,L as oe,N as $,e as se,f as ie,g as ae,h as le,i as A,k as ce,C as ue,T as de,I as pe,l as he,m as S,n as me,o as fe,D as ge,p as xe,q as De,t as ye,u as be,v as ve,w as Ce,x as Se,F as z,y as W,G as O,z as Ee,E as Le,H as we,J as U,K as Ne,O as ke,P as R,Q as Te,S as ze,U as Ae,V as Me,W as Pe,X as Be}from"./vendor.c22934ca.js";const Fe=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}};Fe();const B=N.createContext(void 0);function Ie(e){const[n,o]=u.exports.useState({}),i={openDrawer:(a,l,h="temporary",m)=>{o({open:a,anchor:l,permanent:h,child:m})},closeDrawer:(a,l,h="temporary",m)=>{o({open:a,anchor:l,permanent:h,child:m})}};return t(B.Provider,{value:p(p({},n),i),children:e.children})}const _=N.createContext(void 0);function Oe(e){const[n,o]=u.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),a={createLoader:(l,h)=>{n[l]&&o(y(p({},n),{[l]:void 0})),o(y(p({},n),{[l]:{open:!1,color:h||"primary"}}))},openLoader:l=>{n[l]?o(y(p({},n),{[l]:y(p({},n[l]),{open:!0})})):console.error("Loader does'nt exist. Name: "+l)},closeLoader:l=>{n[l]?o(y(p({},n),{[l]:y(p({},n[l]),{open:!1})})):console.error("Loader does'nt exist. Name: "+l)}};return t(_.Provider,{value:p(p({},n),a),children:e.children})}const V=N.createContext(void 0);function Re(e){const[n,o]=u.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),a={createBanner:(l,h,m,x)=>{n[l]&&o(y(p({},n),{[l]:void 0})),o(y(p({},n),{[l]:{open:!1,severity:h||"success",title:m||"",mesaage:x||""}}))},openBanner:l=>{n[l]?o(y(p({},n),{[l]:y(p({},n[l]),{open:!0})})):console.error("Banner does'nt exist. Name: "+l)},closeBanner:l=>{n[l]?o(y(p({},n),{[l]:y(p({},n[l]),{open:!1})})):console.error("Banner does'nt exist. Name: "+l)}};return t(V.Provider,{value:p(p({},n),a),children:e.children})}const K=Z({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function $e(){const[e,n]=u.exports.useState(K.palette.primary.light);return t("div",{className:"wrapper",children:t(ee,{children:t("meta",{name:"theme-color",content:e})})})}const H=N.createContext(void 0);function _e(e){const[n,o]=u.exports.useState({fontSize:{sm:Number(localStorage.getItem("font_sm"))||15,md:Number(localStorage.getItem("font_md"))||25}}),s=()=>{n.fontSize.md<60&&(o(y(p({},n),{fontSize:{sm:n.fontSize.sm+1,md:n.fontSize.md+1}})),i())},r=()=>{n.fontSize.sm>2&&(o(y(p({},n),{fontSize:{sm:n.fontSize.sm-1,md:n.fontSize.md-1}})),i())};function i(){localStorage.setItem("font_md",n.fontSize.md),localStorage.setItem("font_sm",n.fontSize.sm)}const a={reduceFontSize:r,increaseFontSize:s};return t(H.Provider,{value:p(p({},n),a),children:e.children})}function He({className:e}){const n=u.exports.useContext(H);return t("div",{id:"",className:e,children:f(te,{className:"button-group",children:[t(T,{"aria-label":"reduce",onClick:()=>{n.reduceFontSize()},children:t(ne,{fontSize:"small"})}),t(T,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D8\u05E7\u05E1\u05D8"}),t(T,{"aria-label":"increase",onClick:()=>{n.increaseFontSize()},children:t(re,{fontSize:"small"})})]})})}const je=g(He)`
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

`,qe=[];function Ge(){return t(oe,{children:qe.map((e,n)=>t($,{to:e.url,children:f(se,{button:!0,children:[t(ie,{primary:e.name}),t(ae,{children:t(le,{})})]},e.name)},n))})}const Je=g(Ge)`
  
`,E=N.createContext(void 0);function Ue(e){const n=u.exports.useContext(_),[o,s]=u.exports.useState(sessionStorage.getItem("currLines")||!1),[r,i]=u.exports.useState([]),[a,l]=u.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[h,m]=u.exports.useState(0),x="https://musicline-backend-basssites.vercel.app",L=b=>{n.openLoader("main"),fetch(`${x}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:b})}).then(d=>d.json()).then(d=>{if(n.closeLoader("main"),d==null?void 0:d.lyrics){let c=d.lyrics,D=[];c.split(/(?:\r\n|\r|\n)/g).map(v=>{v.length>=2&&D.push({src:v,trans:""})}),l(D),s(c),i(c.split(" "));let w=document.querySelector(".gsst_a");w&&w.dispatchEvent(new Event("click"))}})},M=()=>{let b=!1;for(let d=0;d<a.length;d++){let c=a[d];if(b===!0)break;if(c.trans.length<=1||c.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."){b=!0,k(c.src,d);break}else continue}},k=(b,d)=>{fetch(`${x}/line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:a})}).then(c=>c.json()).then(c=>{var w,v;let D=a;(c==null?void 0:c.trans.length)?(c.trans.map((I,j)=>{D[j]={src:D[j].src,trans:I}}),l(D),m(h+1)):(c==null?void 0:c.trans)?(D[d]={src:b,trans:c==null?void 0:c.trans},l(D),((w=a[a.length-1])==null?void 0:w.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(a)),m(h+1)):(a[d].trans===void 0&&(D[d]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),a[d].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(D[d]={src:b,trans:"[missing]"}),l(D),((v=a[a.length-1])==null?void 0:v.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(a)),m(h+1))}).catch(c=>{var v;let D=a;a[d].trans===""&&(D[d]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),a[d].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(D[d]={src:b,trans:"[missing]"}),l(D),((v=a[a.length-1])==null?void 0:v.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(a)),m(h+1),console.log(c)})},F={getLines:L,getLinesTrans:k,checkNextTrans:M};return t(E.Provider,{value:p({currLyrics:o,singles:r,lines:a,cou:h},F),children:e.children})}function We({className:e}){return u.exports.useContext(E),t(A,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(o=>t($,{to:o.url,children:t(T,{sx:{my:2},children:o.name})},o.name))})}const Ve=g(We)`
  
`,Ke=o=>{var s=o,{className:e}=s,n=C(s,["className"]);const r=u.exports.useContext(B),i=u.exports.useContext(E);return t(ce,{position:"static",className:e,children:t(ue,{maxWidth:"xl",children:f(de,{disableGutters:!0,children:[t(A,{sx:{display:{xs:"flex",md:"none"}},children:t(pe,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{r.openDrawer(!0,"left","temporary",Je)},color:"inherit",children:t(he,{})})}),t($,{to:"/",children:t(S,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),i.lines[0]&&t(je,{}),t(Ve,{className:"nav-bar"})]})})})},Qe=g(Ke)`
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
`;function Xe(o){var s=o,{className:e}=s,n=C(s,["className"]);return t("div",{className:e,children:n.children})}const Ye=g(Xe)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  padding: 25px;
  background-color: ${e=>e.theme.palette.primary.light};
`;function Ze({className:e}){return t("div",{id:"FOOTER",className:e})}g(Ze)`
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

`;function et(o){var s=o,{className:e}=s,n=C(s,["className"]);const r=u.exports.useContext(B);return t(me,{className:e,anchor:r.anchor,open:r.open,variant:r.permanent,onClose:()=>{r.closeDrawer(!1)},children:t(A,{className:"drawer-layout",sx:{width:r.anchor==="top"||r.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{r.closeDrawer(!1)},children:t(r.child,{})})})}const tt=g(et)`
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
`;function nt({className:e}){const[n,o]=u.exports.useState(!0),s=()=>{o(!1)};return f(fe,{id:"main-modal-root",className:e,open:n,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(ge,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(xe,{children:t(De,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(ye,{children:t(T,{onClick:s,children:"Close"})})]})}g(nt)`
  
`;function rt(o){var s=o,{className:e}=s,n=C(s,["className"]);const[r,i]=u.exports.useState(!0);return t(be,{className:e,open:r,onClose:()=>{i(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:n.children})}g(rt)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function ot({className:e}){return t("div",{id:"",className:e})}const st=g(ot)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function it({className:e}){const n=u.exports.useContext(E);u.exports.useEffect(()=>{window.onload=()=>{const r=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],i={childList:!1,attributes:!0,subtree:!1};function a(){o()}new MutationObserver(a).observe(r,i)}},[]);let o=()=>{setTimeout(()=>{let r=document.querySelectorAll(".gs-title");r&&r.forEach((i,a)=>{if(i.innerText.includes("Lyrics")){let l=i.innerText.replace("Lyrics | Musixmatch"," ");i.innerText=l;const h={artistName:encodeURI(l.split("-")[0]),songName:encodeURI(l.split("-")[1])};i.addEventListener("click",m=>{n.getLines(h)})}else i.innerText.includes("Lyrics")||i.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&i.parentElement.parentElement.parentElement.remove()})},50)};function s(r){let i=document.querySelector("#gsc-i-id1");if(i)if(r.target.value.length<=1){let a=document.querySelector(".gsst_a");a&&a.dispatchEvent(new Event("click"))}else{i.value=r.target.value;let a=document.querySelectorAll(".gsc-search-box button")[0];a?setTimeout(()=>{a.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):console.error("no gsc loaded, try reload the page")}else console.error("no gsc loaded, try reload the page")}return f("div",{id:"",className:e,children:[t(ve,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:s,autoFocus:!1,autoComplete:"off"}),t("div",{className:"gcse-search"})]})}const at=g(it)`
  *,::before,::after{
      background-color: '#ffffff0';
  }
`;function lt(o){var s=o,{className:e}=s,n=C(s,["className"]);const r=u.exports.useContext(E),[i,a]=u.exports.useState(!1),[l,h]=u.exports.useState(5e4),[m,x]=u.exports.useState([]);u.exports.useEffect(()=>{var c;((c=r.lines[r.lines.length-1])==null?void 0:c.trans).length>=1&&h(0)},[r.lines]);const L=()=>{var c;((c=r.lines[r.lines.length-1])==null?void 0:c.trans).length>=1&&(a(!0),k())},M=()=>{a(!1)},k=u.exports.useCallback(()=>{F()},[]);function F(){fetch("https://musicline-backend-basssites.vercel.app/single-trans",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(n.lyric)})}).then(c=>c.json()).then(c=>{(c==null?void 0:c.results[0])?x(c.results):x(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"])}).catch(c=>{console.log(c)})}const b=()=>m[1]?m.map((d,c)=>f(z,{children:[c>0&&t("hr",{}),t("p",{className:"tt-p",children:d})]})):t("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"});return t(Ce,{onClickAway:M,children:t(Se,{className:e,title:f(z,{children:[t(S,{color:"inherit",children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD:"}),t("div",{className:"tt-body",style:{textAlign:"center",maxHeight:"110px",overflowY:"auto",direction:"ltr"},children:m[0]?t(b,{}):t(W,{sx:{margin:"8px"},color:"primary"})})]}),arrow:!0,enterDelay:l,enterTouchDelay:l,leaveTouchDelay:60*1e3,leaveDelay:0,onOpen:()=>{k()},PopperProps:{disablePortal:!1},onClose:M,open:i,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:t("p",{className:"single-lyric",onClick:L,children:n.lyric})})})}const ct=g(lt)`

`;function ut(o){var s=o,{className:e}=s,n=C(s,["className"]);const r=u.exports.useContext(E);return u.exports.useEffect(()=>{r.checkNextTrans()},[r,r.cou]),t(A,{children:t(O,{container:!0,spacing:2,children:r.lines&&t("div",{id:"lyrics_body",className:e,children:r.lines.map((i,a)=>{var l;return i.src.includes("[")&&(i.trans="   "),f("div",{children:[i.src.includes("[")&&f(z,{children:[t("br",{}),t("br",{})]}),t(O,{className:"lyrics-line en-line",item:!0,children:i.src.split(" ").map((h,m)=>t(ct,{lyric:h},m))},a.toString()+Math.floor(Math.random()*3e4)),t(O,{item:!0,className:"lyrics-line he-line",children:t(z,{children:((l=i.trans)==null?void 0:l.length)>2?i.trans.split(" ").map((h,m)=>{if(i.trans!=="   ")return t("small",{onLoad:()=>{r.checkNextTrans()},className:"single-trans",children:h},m)}):t("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})},a.toString()+Math.floor(Math.random()*3e4))]})})})})})}const dt=g(ut)`
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

`;function pt({className:e}){const n=u.exports.useContext(E),o=u.exports.useContext(H);u.exports.useEffect(()=>{},[o]);function s(r){r.preventDefault();let i=document.querySelectorAll(".gsc-search-box button")[0];i?i.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return f("div",{className:e,children:[!n.currLyrics&&f("div",{children:[f(S,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",t("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D1\u05E9\u05D5\u05E8\u05D4"]}),t(S,{variant:"h3",className:"page-h3",children:"\u05DC\u05D9\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DE\u05D5\u05D6\u05D9\u05E7\u05D4"})]}),t(A,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:s,children:t(at,{})}),n.currLyrics&&t(dt,{className:"lyrics-body",fontSize:o.fontSize})]})}const ht=g(pt)`

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
    
`;function mt({className:e}){return t("div",{className:e,children:t(S,{variant:"h2",className:"page-h2",children:"About Page"})})}const ft=g(mt)`

`;function gt({className:e}){return f("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(S,{variant:"h2",className:"page-h2",children:"404"}),t(S,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const xt=g(gt)`

`;function Dt({className:e}){const n=u.exports.useContext(B),o=u.exports.useContext(_),s=u.exports.useContext(V),r=u.exports.useRef(null),i=Ee({key:"muirtl",stylisPlugins:[Ae,Me]});function a(){l()}const l=()=>{const x=document.createElement("script");x.type="text/javascript",x.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",x.defer=!0,document.body.appendChild(x)};u.exports.useEffect(()=>{a()},[]);const h=x=>{s.closeBanner(x)};function m(x){x.preventDefault();let L=document.querySelectorAll(".gsc-search-box button")[0];L?L.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return f("div",{className:e,ref:r,children:[t(Le,{value:i,children:f(we,{children:[t($e,{}),t(Qe,{className:"header",HandleSubmit:m}),s.main.open&&f(U,{severity:"warning",className:"main-alert",children:[t(Ne,{children:s.main.title}),s.main.message]}),t(Ye,{children:f(ke,{children:[t(R,{path:"/",element:t(ht,{className:"page"})}),t(R,{path:"/about",element:t(ft,{className:"page"})}),t(R,{path:"*",element:t(xt,{className:"page"})})]})}),n.open&&n.child&&t(tt,{className:"drawer"}),o.main.open&&t(W,{color:o.main.color||"primary"}),o.circular.open&&t(Te,{color:o.main.color||"primary"}),s.snackbar.open&&t(ze,{open:s.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(U,{onClose:()=>{h("snackbar")},severity:s.snackbar.severity,sx:{width:"100%"},children:s.snackbar.message})})]})}),t(st,{})]})}const yt=g(Dt)`
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
`,bt=[_e,Ie,Re,Oe,Ue];function vt(e){return t(z,{children:bt.reduceRight((n,o)=>t(o,{children:n}),e.children)})}Pe.render(t(N.StrictMode,{children:t(vt,{children:t(Be,{theme:K,children:t(yt,{className:"app"})})})}),document.getElementById("root"));
