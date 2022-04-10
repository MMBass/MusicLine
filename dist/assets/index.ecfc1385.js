var Q=Object.defineProperty,X=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var j=(e,n,r)=>n in e?Q(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,u=(e,n)=>{for(var r in n||(n={}))q.call(n,r)&&j(e,r,n[r]);if(z)for(var r of z(n))G.call(n,r)&&j(e,r,n[r]);return e},g=(e,n)=>X(e,Y(n));var v=(e,n)=>{var r={};for(var s in e)q.call(e,s)&&n.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&z)for(var s of z(e))n.indexOf(s)<0&&G.call(e,s)&&(r[s]=e[s]);return r};import{R as S,r as l,j as t,c as Z,M as ee,a as x,B as te,b as L,d as ne,A as re,s as m,L as oe,N as F,e as se,f as ie,g as ae,h as ce,i as N,k as le,C as ue,T as de,I as pe,l as he,m as E,n as me,o as fe,D as xe,p as ge,q as De,t as ye,u as be,v as ve,w as Ee,F as A,G as M,x as Ce,y as Se,H as we,z as U,E as Le,J as Ne,K as B,O as ke,P as ze,S as Ae,Q as Te,U as Me,V as Be,W as Fe}from"./vendor.0d26e462.js";const Pe=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}};Pe();const T=S.createContext(void 0);function Re(e){const[n,r]=l.exports.useState({}),a={openDrawer:(c,i,p="temporary",f)=>{r({open:c,anchor:i,permanent:p,child:f})},closeDrawer:(c,i,p="temporary",f)=>{r({open:c,anchor:i,permanent:p,child:f})}};return t(T.Provider,{value:u(u({},n),a),children:e.children})}const P=S.createContext(void 0);function $e(e){const[n,r]=l.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),c={createLoader:(i,p)=>{n[i]&&r(g(u({},n),{[i]:void 0})),r(g(u({},n),{[i]:{open:!1,color:p||"primary"}}))},openLoader:i=>{n[i]?r(g(u({},n),{[i]:g(u({},n[i]),{open:!0})})):console.error("Loader does'nt exist. Name: "+i)},closeLoader:i=>{n[i]?r(g(u({},n),{[i]:g(u({},n[i]),{open:!1})})):console.error("Loader does'nt exist. Name: "+i)}};return t(P.Provider,{value:u(u({},n),c),children:e.children})}const W=S.createContext(void 0);function Oe(e){const[n,r]=l.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),c={createBanner:(i,p,f,D)=>{n[i]&&r(g(u({},n),{[i]:void 0})),r(g(u({},n),{[i]:{open:!1,severity:p||"success",title:f||"",mesaage:D||""}}))},openBanner:i=>{n[i]?r(g(u({},n),{[i]:g(u({},n[i]),{open:!0})})):console.error("Banner does'nt exist. Name: "+i)},closeBanner:i=>{n[i]?r(g(u({},n),{[i]:g(u({},n[i]),{open:!1})})):console.error("Banner does'nt exist. Name: "+i)}};return t(W.Provider,{value:u(u({},n),c),children:e.children})}const J=Z({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function _e(){const[e,n]=l.exports.useState(J.palette.primary.light);return t("div",{className:"wrapper",children:t(ee,{children:t("meta",{name:"theme-color",content:e})})})}const R=S.createContext(void 0);function Ie(e){const[n,r]=l.exports.useState({fontSize:{sm:15,md:25}}),a={reduceFontSize:()=>{n.fontSize.sm>2&&r(g(u({},n),{fontSize:{sm:n.fontSize.sm-.5,md:n.fontSize.md-.5}}))},increaseFontSize:()=>{n.fontSize.md<60&&r(g(u({},n),{fontSize:{sm:n.fontSize.sm+.5,md:n.fontSize.md+.5}}))}};return t(R.Provider,{value:u(u({},n),a),children:e.children})}function He({className:e}){const n=l.exports.useContext(R);return t("div",{id:"",className:e,children:x(te,{className:"button-group",children:[t(L,{"aria-label":"reduce",onClick:()=>{n.reduceFontSize()},children:t(ne,{fontSize:"small"})}),t(L,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D8\u05E7\u05E1\u05D8"}),t(L,{"aria-label":"increase",onClick:()=>{n.increaseFontSize()},children:t(re,{fontSize:"small"})})]})})}const je=m(He)`
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

`,qe=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}];function Ge(){return t(oe,{children:qe.map((e,n)=>t(F,{to:e.url,children:x(se,{button:!0,children:[t(ie,{primary:e.name}),t(ae,{children:t(ce,{})})]},e.name)},n))})}const Ue=m(Ge)`
  
`,w=S.createContext(void 0);function We(e){const n=l.exports.useContext(P),[r,s]=l.exports.useState(!1),[o,a]=l.exports.useState([]),[c,i]=l.exports.useState([]),[p,f]=l.exports.useState(0),D="http://localhost:5000",k=b=>{n.openLoader("main"),fetch(`${D}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:b})}).then(d=>d.json()).then(d=>{var h,y,O;if(n.closeLoader("main"),(O=(y=(h=d==null?void 0:d.message)==null?void 0:h.body)==null?void 0:y.lyrics)==null?void 0:O.lyrics_body){let C=d.message.body.lyrics.lyrics_body;C=C.substring(0,C.indexOf("..."));let _=[];C.split(/(?:\r\n|\r|\n)/g).map(H=>{H.length>=2&&_.push({src:H,trans:""})}),i(_),s(C),a(C.split(" "));let I=document.querySelector(".gsst_a");I&&I.dispatchEvent(new Event("click"))}})},V=()=>{let b=!1;for(let d=0;d<c.length;d++){let h=c[d];if(b===!0)break;if(h.trans.length<=1||h.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."){b=!0,$(h.src,d);break}else continue}},$=(b,d)=>{fetch(`${D}/line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(b)})}).then(h=>h.json()).then(h=>{let y=c;(h==null?void 0:h.trans)?(y[d]={src:b,trans:h==null?void 0:h.trans},i(y),f(p+1)):(c[d].trans===void 0&&(y[d]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),c[d].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(y[d]={src:b,trans:"[missing]"}),i(y),f(p+1))}).catch(h=>{let y=c;c[d].trans===""&&(y[d]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),c[d].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(y[d]={src:b,trans:"[missing]"}),i(y),f(p+1),console.log(h)})},K={getLines:k,getLinesTrans:$,checkNextTrans:V};return t(w.Provider,{value:u({currLyrics:r,singles:o,lines:c,cou:p},K),children:e.children})}function Je({className:e}){return l.exports.useContext(w),t(N,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}].map(r=>t(F,{to:r.url,children:t(L,{sx:{my:2},children:r.name})},r.name))})}const Ve=m(Je)`
  
`,Ke=r=>{var s=r,{className:e}=s,n=v(s,["className"]);const o=l.exports.useContext(T),a=l.exports.useContext(w);return t(le,{position:"static",className:e,children:t(ue,{maxWidth:"xl",children:x(de,{disableGutters:!0,children:[t(N,{sx:{display:{xs:"flex",md:"none"}},children:t(pe,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{o.openDrawer(!0,"left","temporary",Ue)},color:"inherit",children:t(he,{})})}),t(F,{to:"/",children:t(E,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),a.lines[0]&&t(je,{}),t(Ve,{className:"nav-bar"})]})})})},Qe=m(Ke)`
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
`;function Xe(r){var s=r,{className:e}=s,n=v(s,["className"]);return t("div",{className:e,children:n.children})}const Ye=m(Xe)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  padding: 35px;
  background-color: ${e=>e.theme.palette.primary.light};
`;function Ze({className:e}){return t("div",{id:"FOOTER",className:e})}const et=m(Ze)`
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

`;function tt(r){var s=r,{className:e}=s,n=v(s,["className"]);const o=l.exports.useContext(T);return t(me,{className:e,anchor:o.anchor,open:o.open,variant:o.permanent,onClose:()=>{o.closeDrawer(!1)},children:t(N,{className:"drawer-layout",sx:{width:o.anchor==="top"||o.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{o.closeDrawer(!1)},children:t(o.child,{})})})}const nt=m(tt)`
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
`;function rt({className:e}){const[n,r]=l.exports.useState(!0),s=()=>{r(!1)};return x(fe,{id:"main-modal-root",className:e,open:n,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(xe,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(ge,{children:t(De,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(ye,{children:t(L,{onClick:s,children:"Close"})})]})}m(rt)`
  
`;function ot(r){var s=r,{className:e}=s,n=v(s,["className"]);const[o,a]=l.exports.useState(!0);return t(be,{className:e,open:o,onClose:()=>{a(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:n.children})}m(ot)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function st({className:e}){return t("div",{id:"",className:e})}const it=m(st)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function at({className:e}){const n=l.exports.useContext(w);l.exports.useEffect(()=>{window.onload=()=>{const o=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],a={childList:!1,attributes:!0,subtree:!1};function c(){r()}new MutationObserver(c).observe(o,a)}},[]);let r=()=>{setTimeout(()=>{let o=document.querySelectorAll(".gs-title");o&&o.forEach((a,c)=>{if(a.innerText.includes("Lyrics")){let i=a.innerText.replace("Lyrics | Musixmatch"," ");a.innerText=i;const p={artistName:encodeURI(i.split("-")[0]),songName:encodeURI(i.split("-")[1])};a.addEventListener("click",f=>{n.getLines(p)})}else a.innerText.includes("Lyrics")||a.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&a.parentElement.parentElement.parentElement.remove()})},50)};function s(o){let a=document.querySelector("#gsc-i-id1");if(a)if(o.target.value.length<=1){let c=document.querySelector(".gsst_a");c&&c.dispatchEvent(new Event("click"))}else{a.value=o.target.value;let c=document.querySelectorAll(".gsc-search-box button")[0];c?setTimeout(()=>{c.dispatchEvent(new Event("click"))},100*Math.floor(Math.random()*4)):console.error("no gsc loaded, try reload the page")}else console.error("no gsc loaded, try reload the page")}return x("div",{id:"",className:e,children:[t(ve,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:s,autoFocus:!1,autoComplete:"off"}),t("div",{className:"gcse-search"})]})}const ct=m(at)`
  *,::before,::after{
      background-color: '#ffffff0';
  }
`;function lt(r){var s=r,{className:e}=s,n=v(s,["className"]);l.exports.useEffect(()=>{o()},[]);const o=()=>{};return t(Ee,{className:e,title:x(A,{children:[t(E,{color:"inherit",children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD:"}),t("div",{className:"tt-body",style:{textAlign:"center"},children:["","",""].map(()=>x(A,{children:[t("p",{className:"tt-p",children:"\u05EA\u05E8\u05D2\u05D5\u05DD"}),t("hr",{})]}))})]}),arrow:!0,sx:{color:"white"},enterDelay:0,enterTouchDelay:5,leaveTouchDelay:60*1e3,leaveDelay:0,children:t("p",{className:"single-lyric",children:n.lyric})})}const ut=m(lt)`
  
`;function dt(r){var s=r,{className:e}=s,n=v(s,["className"]);const o=l.exports.useContext(w);return l.exports.useEffect(()=>{o.checkNextTrans()},[o,o.cou]),t(N,{children:t(M,{container:!0,spacing:2,children:o.lines&&t("div",{id:"lyrics_body",className:e,children:o.lines.map((a,c)=>{var i;return x("div",{children:[t(M,{className:"lyrics-line en-line",item:!0,children:a.src.split(" ").map((p,f)=>t(ut,{lyric:p},f))},c.toString()+Math.floor(Math.random()*3e4)),t(M,{item:!0,className:"lyrics-line he-line",children:t(A,{children:((i=a.trans)==null?void 0:i.length)>2?a.trans.split(" ").map((p,f)=>t("small",{onLoad:()=>{o.checkNextTrans()},className:"single-trans",children:p},f)):t("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})},c.toString()+Math.floor(Math.random()*3e4))]})})})})})}const pt=m(dt)`
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

`;function ht({className:e}){const n=l.exports.useContext(w),r=l.exports.useContext(R);l.exports.useEffect(()=>{},[r]);function s(o){o.preventDefault();let a=document.querySelectorAll(".gsc-search-box button")[0];a?a.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return x("div",{className:e,children:[!n.currLyrics&&x("div",{children:[x(E,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",t("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D1\u05E9\u05D5\u05E8\u05D4"]}),t(E,{variant:"h3",className:"page-h3",children:"\u05DC\u05D9\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DE\u05D5\u05D6\u05D9\u05E7\u05D4"})]}),t(N,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:s,children:t(ct,{})}),n.currLyrics&&t(pt,{className:"lyrics-body",fontSize:r.fontSize})]})}const mt=m(ht)`

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
    
`;function ft({className:e}){return t("div",{className:e,children:t(E,{variant:"h2",className:"page-h2",children:"About Page"})})}const xt=m(ft)`

`;function gt({className:e}){return x("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(E,{variant:"h2",className:"page-h2",children:"404"}),t(E,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const Dt=m(gt)`

`;function yt({className:e}){const n=l.exports.useContext(T),r=l.exports.useContext(P),s=l.exports.useContext(W),o=l.exports.useRef(null),a=Ce({key:"muirtl",stylisPlugins:[Te,Me]});function c(){i()}const i=()=>{const D=document.createElement("script");D.type="text/javascript",D.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",D.defer=!0,document.body.appendChild(D)};l.exports.useEffect(()=>{c()},[]);const p=D=>{s.closeBanner(D)};function f(D){D.preventDefault();let k=document.querySelectorAll(".gsc-search-box button")[0];k?k.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return x("div",{className:e,ref:o,children:[t(Se,{value:a,children:x(we,{children:[t(_e,{}),t(Qe,{className:"header",HandleSubmit:f}),s.main.open&&x(U,{severity:"warning",className:"main-alert",children:[t(Le,{children:s.main.title}),s.main.message]}),t(Ye,{children:x(Ne,{children:[t(B,{path:"/",element:t(mt,{className:"page"})}),t(B,{path:"/about",element:t(xt,{className:"page"})}),t(B,{path:"*",element:t(Dt,{className:"page"})})]})}),n.open&&n.child&&t(nt,{className:"drawer"}),r.main.open&&t(ke,{color:r.main.color||"primary"}),r.circular.open&&t(ze,{color:r.main.color||"primary"}),s.snackbar.open&&t(Ae,{open:s.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(U,{onClose:()=>{p("snackbar")},severity:s.snackbar.severity,sx:{width:"100%"},children:s.snackbar.message})}),t(et,{})]})}),t(it,{})]})}const bt=m(yt)`
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


  .toolTip-title{
    text-align: center;
  }

  .tt-body *{
    color: blue;
    text-align: center;
  }
`,vt=[Ie,Re,Oe,$e,We];function Et(e){return t(A,{children:vt.reduceRight((n,r)=>t(r,{children:n}),e.children)})}Be.render(t(S.StrictMode,{children:t(Et,{children:t(Fe,{theme:J,children:t(bt,{className:"app"})})})}),document.getElementById("root"));
