var Q=Object.defineProperty,X=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var j=(e,n,r)=>n in e?Q(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,u=(e,n)=>{for(var r in n||(n={}))q.call(n,r)&&j(e,r,n[r]);if(z)for(var r of z(n))G.call(n,r)&&j(e,r,n[r]);return e},g=(e,n)=>X(e,Y(n));var v=(e,n)=>{var r={};for(var s in e)q.call(e,s)&&n.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&z)for(var s of z(e))n.indexOf(s)<0&&G.call(e,s)&&(r[s]=e[s]);return r};import{R as S,r as l,j as t,c as Z,M as ee,a as x,B as te,b as L,d as ne,A as re,s as m,L as oe,N as B,e as se,f as ie,g as ae,h as ce,i as N,k as le,C as ue,T as de,I as pe,l as he,m as C,n as me,o as fe,D as xe,p as ge,q as De,t as ye,u as be,v as ve,w as Ce,x as Ee,F as A,G as M,y as Se,z as we,H as Le,E as U,J as Ne,K as ke,O as P,P as ze,Q as Ae,S as Te,U as Me,V as Pe,W as Be,X as Fe}from"./vendor.6a640706.js";const Re=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}};Re();const T=S.createContext(void 0);function Oe(e){const[n,r]=l.exports.useState({}),a={openDrawer:(c,i,d="temporary",f)=>{r({open:c,anchor:i,permanent:d,child:f})},closeDrawer:(c,i,d="temporary",f)=>{r({open:c,anchor:i,permanent:d,child:f})}};return t(T.Provider,{value:u(u({},n),a),children:e.children})}const F=S.createContext(void 0);function $e(e){const[n,r]=l.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),c={createLoader:(i,d)=>{n[i]&&r(g(u({},n),{[i]:void 0})),r(g(u({},n),{[i]:{open:!1,color:d||"primary"}}))},openLoader:i=>{n[i]?r(g(u({},n),{[i]:g(u({},n[i]),{open:!0})})):console.error("Loader does'nt exist. Name: "+i)},closeLoader:i=>{n[i]?r(g(u({},n),{[i]:g(u({},n[i]),{open:!1})})):console.error("Loader does'nt exist. Name: "+i)}};return t(F.Provider,{value:u(u({},n),c),children:e.children})}const W=S.createContext(void 0);function _e(e){const[n,r]=l.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),c={createBanner:(i,d,f,D)=>{n[i]&&r(g(u({},n),{[i]:void 0})),r(g(u({},n),{[i]:{open:!1,severity:d||"success",title:f||"",mesaage:D||""}}))},openBanner:i=>{n[i]?r(g(u({},n),{[i]:g(u({},n[i]),{open:!0})})):console.error("Banner does'nt exist. Name: "+i)},closeBanner:i=>{n[i]?r(g(u({},n),{[i]:g(u({},n[i]),{open:!1})})):console.error("Banner does'nt exist. Name: "+i)}};return t(W.Provider,{value:u(u({},n),c),children:e.children})}const J=Z({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function Ie(){const[e,n]=l.exports.useState(J.palette.primary.light);return t("div",{className:"wrapper",children:t(ee,{children:t("meta",{name:"theme-color",content:e})})})}const R=S.createContext(void 0);function He(e){const[n,r]=l.exports.useState({fontSize:{sm:15,md:25}}),a={reduceFontSize:()=>{n.fontSize.sm>2&&r(g(u({},n),{fontSize:{sm:n.fontSize.sm-.5,md:n.fontSize.md-.5}}))},increaseFontSize:()=>{n.fontSize.md<60&&r(g(u({},n),{fontSize:{sm:n.fontSize.sm+.5,md:n.fontSize.md+.5}}))}};return t(R.Provider,{value:u(u({},n),a),children:e.children})}function je({className:e}){const n=l.exports.useContext(R);return t("div",{id:"",className:e,children:x(te,{className:"button-group",children:[t(L,{"aria-label":"reduce",onClick:()=>{n.reduceFontSize()},children:t(ne,{fontSize:"small"})}),t(L,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D8\u05E7\u05E1\u05D8"}),t(L,{"aria-label":"increase",onClick:()=>{n.increaseFontSize()},children:t(re,{fontSize:"small"})})]})})}const qe=m(je)`
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

`,Ge=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}];function Ue(){return t(oe,{children:Ge.map((e,n)=>t(B,{to:e.url,children:x(se,{button:!0,children:[t(ie,{primary:e.name}),t(ae,{children:t(ce,{})})]},e.name)},n))})}const We=m(Ue)`
  
`,w=S.createContext(void 0);function Je(e){const n=l.exports.useContext(F),[r,s]=l.exports.useState(!1),[o,a]=l.exports.useState([]),[c,i]=l.exports.useState([]),[d,f]=l.exports.useState(0),D="https://musicline-backend-basssites.vercel.app",k=b=>{n.openLoader("main"),fetch(`${D}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:b})}).then(p=>p.json()).then(p=>{var h,y,$;if(n.closeLoader("main"),($=(y=(h=p==null?void 0:p.message)==null?void 0:h.body)==null?void 0:y.lyrics)==null?void 0:$.lyrics_body){let E=p.message.body.lyrics.lyrics_body;E=E.substring(0,E.indexOf("..."));let _=[];E.split(/(?:\r\n|\r|\n)/g).map(H=>{H.length>=2&&_.push({src:H,trans:""})}),i(_),s(E),a(E.split(" "));let I=document.querySelector(".gsst_a");I&&I.dispatchEvent(new Event("click"))}})},V=()=>{let b=!1;for(let p=0;p<c.length;p++){let h=c[p];if(b===!0)break;if(h.trans.length<=1||h.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."){b=!0,O(h.src,p);break}else continue}},O=(b,p)=>{fetch(`${D}/line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(b)})}).then(h=>h.json()).then(h=>{let y=c;(h==null?void 0:h.trans)?(y[p]={src:b,trans:h==null?void 0:h.trans},i(y),f(d+1)):(c[p].trans===void 0&&(y[p]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),c[p].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(y[p]={src:b,trans:"[missing]"}),i(y),f(d+1))}).catch(h=>{let y=c;c[p].trans===""&&(y[p]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),c[p].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(y[p]={src:b,trans:"[missing]"}),i(y),f(d+1),console.log(h)})},K={getLines:k,getLinesTrans:O,checkNextTrans:V};return t(w.Provider,{value:u({currLyrics:r,singles:o,lines:c,cou:d},K),children:e.children})}function Ve({className:e}){return l.exports.useContext(w),t(N,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}].map(r=>t(B,{to:r.url,children:t(L,{sx:{my:2},children:r.name})},r.name))})}const Ke=m(Ve)`
  
`,Qe=r=>{var s=r,{className:e}=s,n=v(s,["className"]);const o=l.exports.useContext(T),a=l.exports.useContext(w);return t(le,{position:"static",className:e,children:t(ue,{maxWidth:"xl",children:x(de,{disableGutters:!0,children:[t(N,{sx:{display:{xs:"flex",md:"none"}},children:t(pe,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{o.openDrawer(!0,"left","temporary",We)},color:"inherit",children:t(he,{})})}),t(B,{to:"/",children:t(C,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),a.lines[0]&&t(qe,{}),t(Ke,{className:"nav-bar"})]})})})},Xe=m(Qe)`
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
`;function Ye(r){var s=r,{className:e}=s,n=v(s,["className"]);return t("div",{className:e,children:n.children})}const Ze=m(Ye)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  padding: 35px;
  background-color: ${e=>e.theme.palette.primary.light};
`;function et({className:e}){return t("div",{id:"FOOTER",className:e})}const tt=m(et)`
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

`;function nt(r){var s=r,{className:e}=s,n=v(s,["className"]);const o=l.exports.useContext(T);return t(me,{className:e,anchor:o.anchor,open:o.open,variant:o.permanent,onClose:()=>{o.closeDrawer(!1)},children:t(N,{className:"drawer-layout",sx:{width:o.anchor==="top"||o.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{o.closeDrawer(!1)},children:t(o.child,{})})})}const rt=m(nt)`
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
`;function ot({className:e}){const[n,r]=l.exports.useState(!0),s=()=>{r(!1)};return x(fe,{id:"main-modal-root",className:e,open:n,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(xe,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(ge,{children:t(De,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(ye,{children:t(L,{onClick:s,children:"Close"})})]})}m(ot)`
  
`;function st(r){var s=r,{className:e}=s,n=v(s,["className"]);const[o,a]=l.exports.useState(!0);return t(be,{className:e,open:o,onClose:()=>{a(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:n.children})}m(st)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function it({className:e}){return t("div",{id:"",className:e})}const at=m(it)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function ct({className:e}){const n=l.exports.useContext(w);l.exports.useEffect(()=>{window.onload=()=>{const o=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],a={childList:!1,attributes:!0,subtree:!1};function c(){r()}new MutationObserver(c).observe(o,a)}},[]);let r=()=>{setTimeout(()=>{let o=document.querySelectorAll(".gs-title");o&&o.forEach((a,c)=>{if(a.innerText.includes("Lyrics")){let i=a.innerText.replace("Lyrics | Musixmatch"," ");a.innerText=i;const d={artistName:encodeURI(i.split("-")[0]),songName:encodeURI(i.split("-")[1])};a.addEventListener("click",f=>{n.getLines(d)})}else a.innerText.includes("Lyrics")||a.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&a.parentElement.parentElement.parentElement.remove()})},50)};function s(o){let a=document.querySelector("#gsc-i-id1");if(a)if(o.target.value.length<=1){let c=document.querySelector(".gsst_a");c&&c.dispatchEvent(new Event("click"))}else{a.value=o.target.value;let c=document.querySelectorAll(".gsc-search-box button")[0];c?setTimeout(()=>{c.dispatchEvent(new Event("click"))},100*Math.floor(Math.random()*4)):console.error("no gsc loaded, try reload the page")}else console.error("no gsc loaded, try reload the page")}return x("div",{id:"",className:e,children:[t(ve,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:s,autoFocus:!1,autoComplete:"off"}),t("div",{className:"gcse-search"})]})}const lt=m(ct)`
  *,::before,::after{
      background-color: '#ffffff0';
  }
`;function ut(r){var s=r,{className:e}=s,n=v(s,["className"]);const[o,a]=l.exports.useState(!1),c=()=>{a(!0)},i=()=>{a(!1)};l.exports.useEffect(()=>{d()},[]);const d=()=>{};return t(Ce,{onClickAway:i,children:t(Ee,{className:e,title:x(A,{children:[t(C,{color:"inherit",children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD:"}),t("div",{className:"tt-body",style:{textAlign:"center"},children:["","",""].map(()=>x(A,{children:[t("p",{className:"tt-p",children:"\u05EA\u05E8\u05D2\u05D5\u05DD"}),t("hr",{})]}))})]}),arrow:!0,sx:{color:"white"},enterDelay:0,enterTouchDelay:200,leaveTouchDelay:60*1e3,leaveDelay:0,PopperProps:{disablePortal:!1},onClose:i,open:o,disableFocusListener:!0,disableTouchListener:!0,children:t("p",{className:"single-lyric",onClick:c,children:n.lyric})})})}const dt=m(ut)`

`;function pt(r){var s=r,{className:e}=s,n=v(s,["className"]);const o=l.exports.useContext(w);return l.exports.useEffect(()=>{o.checkNextTrans()},[o,o.cou]),t(N,{children:t(M,{container:!0,spacing:2,children:o.lines&&t("div",{id:"lyrics_body",className:e,children:o.lines.map((a,c)=>{var i;return x("div",{children:[t(M,{className:"lyrics-line en-line",item:!0,children:a.src.split(" ").map((d,f)=>t(dt,{lyric:d},f))},c.toString()+Math.floor(Math.random()*3e4)),t(M,{item:!0,className:"lyrics-line he-line",children:t(A,{children:((i=a.trans)==null?void 0:i.length)>2?a.trans.split(" ").map((d,f)=>t("small",{onLoad:()=>{o.checkNextTrans()},className:"single-trans",children:d},f)):t("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})},c.toString()+Math.floor(Math.random()*3e4))]})})})})})}const ht=m(pt)`
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

`;function mt({className:e}){const n=l.exports.useContext(w),r=l.exports.useContext(R);l.exports.useEffect(()=>{},[r]);function s(o){o.preventDefault();let a=document.querySelectorAll(".gsc-search-box button")[0];a?a.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return x("div",{className:e,children:[!n.currLyrics&&x("div",{children:[x(C,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",t("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D1\u05E9\u05D5\u05E8\u05D4"]}),t(C,{variant:"h3",className:"page-h3",children:"\u05DC\u05D9\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DE\u05D5\u05D6\u05D9\u05E7\u05D4"})]}),t(N,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:s,children:t(lt,{})}),n.currLyrics&&t(ht,{className:"lyrics-body",fontSize:r.fontSize})]})}const ft=m(mt)`

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
    
`;function xt({className:e}){return t("div",{className:e,children:t(C,{variant:"h2",className:"page-h2",children:"About Page"})})}const gt=m(xt)`

`;function Dt({className:e}){return x("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(C,{variant:"h2",className:"page-h2",children:"404"}),t(C,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const yt=m(Dt)`

`;function bt({className:e}){const n=l.exports.useContext(T),r=l.exports.useContext(F),s=l.exports.useContext(W),o=l.exports.useRef(null),a=Se({key:"muirtl",stylisPlugins:[Me,Pe]});function c(){i()}const i=()=>{const D=document.createElement("script");D.type="text/javascript",D.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",D.defer=!0,document.body.appendChild(D)};l.exports.useEffect(()=>{c()},[]);const d=D=>{s.closeBanner(D)};function f(D){D.preventDefault();let k=document.querySelectorAll(".gsc-search-box button")[0];k?k.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return x("div",{className:e,ref:o,children:[t(we,{value:a,children:x(Le,{children:[t(Ie,{}),t(Xe,{className:"header",HandleSubmit:f}),s.main.open&&x(U,{severity:"warning",className:"main-alert",children:[t(Ne,{children:s.main.title}),s.main.message]}),t(Ze,{children:x(ke,{children:[t(P,{path:"/",element:t(ft,{className:"page"})}),t(P,{path:"/about",element:t(gt,{className:"page"})}),t(P,{path:"*",element:t(yt,{className:"page"})})]})}),n.open&&n.child&&t(rt,{className:"drawer"}),r.main.open&&t(ze,{color:r.main.color||"primary"}),r.circular.open&&t(Ae,{color:r.main.color||"primary"}),s.snackbar.open&&t(Te,{open:s.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(U,{onClose:()=>{d("snackbar")},severity:s.snackbar.severity,sx:{width:"100%"},children:s.snackbar.message})}),t(tt,{})]})}),t(at,{})]})}const vt=m(bt)`
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
    direction: rtl;
    text-align: center;
  }

  .tt-body *{
    text-align: center;
  }
`,Ct=[He,Oe,_e,$e,Je];function Et(e){return t(A,{children:Ct.reduceRight((n,r)=>t(r,{children:n}),e.children)})}Be.render(t(S.StrictMode,{children:t(Et,{children:t(Fe,{theme:J,children:t(vt,{className:"app"})})})}),document.getElementById("root"));
