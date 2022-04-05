var U=Object.defineProperty,W=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var _=(e,r,n)=>r in e?U(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,u=(e,r)=>{for(var n in r||(r={}))O.call(r,n)&&_(e,n,r[n]);if(w)for(var n of w(r))$.call(r,n)&&_(e,n,r[n]);return e},m=(e,r)=>W(e,K(r));var v=(e,r)=>{var n={};for(var o in e)O.call(e,o)&&r.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&w)for(var o of w(e))r.indexOf(o)<0&&$.call(e,o)&&(n[o]=e[o]);return n};import{R as b,r as l,j as t,c as V,M as J,L as Q,N as A,a as p,b as X,d as Y,e as Z,A as ee,s as d,B as E,f as z,g as te,C as re,T as ne,I as oe,h as ae,i as y,k as se,l as ie,D as ce,m as le,n as ue,o as de,p as pe,q as he,t as me,F as I,G as N,u as fe,v as xe,H as ye,w as H,x as ge,y as De,z as k,E as ve,J as be,S as Ee,K as Ce,O as we,P as Le,Q as Se}from"./vendor.d39f49f2.js";const Ne=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}};Ne();const L=b.createContext(void 0);function ke(e){const[r,n]=l.exports.useState({}),s={openDrawer:(c,i,f="temporary",x)=>{n({open:c,anchor:i,permanent:f,child:x})},closeDrawer:(c,i,f="temporary",x)=>{n({open:c,anchor:i,permanent:f,child:x})}};return t(L.Provider,{value:u(u({},r),s),children:e.children})}const M=b.createContext(void 0);function Ae(e){const[r,n]=l.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),c={createLoader:(i,f)=>{r[i]&&n(m(u({},r),{[i]:void 0})),n(m(u({},r),{[i]:{open:!1,color:f||"primary"}}))},openLoader:i=>{r[i]?n(m(u({},r),{[i]:m(u({},r[i]),{open:!0})})):console.error("Loader does'nt exist. Name: "+i)},closeLoader:i=>{r[i]?n(m(u({},r),{[i]:m(u({},r[i]),{open:!1})})):console.error("Loader does'nt exist. Name: "+i)}};return t(M.Provider,{value:u(u({},r),c),children:e.children})}const q=b.createContext(void 0);function Me(e){const[r,n]=l.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),c={createBanner:(i,f,x,h)=>{r[i]&&n(m(u({},r),{[i]:void 0})),n(m(u({},r),{[i]:{open:!1,severity:f||"success",title:x||"",mesaage:h||""}}))},openBanner:i=>{r[i]?n(m(u({},r),{[i]:m(u({},r[i]),{open:!0})})):console.error("Banner does'nt exist. Name: "+i)},closeBanner:i=>{r[i]?n(m(u({},r),{[i]:m(u({},r[i]),{open:!1})})):console.error("Banner does'nt exist. Name: "+i)}};return t(q.Provider,{value:u(u({},r),c),children:e.children})}const j=V({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function Te(){const[e,r]=l.exports.useState(j.palette.primary.light);return t("div",{className:"wrapper",children:t(J,{children:t("meta",{name:"theme-color",content:e})})})}const Be=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}];function Pe(){return t(Q,{children:Be.map((e,r)=>t(A,{to:e.url,children:p(X,{button:!0,children:[t(Y,{primary:e.name}),t(Z,{children:t(ee,{})})]},e.name)},r))})}const Fe=d(Pe)`
  
`,C=b.createContext(void 0);function Re(e){const r=l.exports.useContext(M),[n,o]=l.exports.useState(!1),[a,s]=l.exports.useState([]),[c,i]=l.exports.useState([]),x={handleSet:h=>{r.openLoader("main"),fetch("https://cors-anywhere.herokuapp.com/"+"http://api.musixmatch.com/ws/1.1/"+`matcher.lyrics.get?apikey=d98598e033ac1e0ad0a3335990d12579&q_track=${encodeURI(h.songtName)}&q_artist=${encodeURI(h.artistName)}`).then(g=>g.json()).then(g=>{var T,B,P;if(r.closeLoader("main"),(P=(B=(T=g==null?void 0:g.message)==null?void 0:T.body)==null?void 0:B.lyrics)==null?void 0:P.lyrics_body){let D=g.message.body.lyrics.lyrics_body;D=D.substring(0,D.indexOf("...")),o(D),s(D.split(" "));let F=[];D.split(/(?:\r\n|\r|\n)/g).map(G=>{F.push({src:G,trans:""})}),i(F);let R=document.querySelector(".gsst_a");R&&R.dispatchEvent(new Event("click"))}})}};return t(C.Provider,{value:u({currLyrics:n,singles:a,lines:c},x),children:e.children})}function _e({className:e}){return l.exports.useContext(C),t(E,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}].map(n=>t(A,{to:n.url,children:t(z,{sx:{my:2},children:n.name})},n.name))})}const Oe=d(_e)`
  
`,$e=n=>{var o=n,{className:e}=o,r=v(o,["className"]);const a=l.exports.useContext(L);return t(te,{position:"static",className:e,children:t(re,{maxWidth:"xl",children:p(ne,{disableGutters:!0,children:[t(E,{sx:{display:{xs:"flex",md:"none"}},children:t(oe,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{a.openDrawer(!0,"left","temporary",Fe)},color:"inherit",children:t(ae,{})})}),t(A,{to:"/",children:t(y,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),t(Oe,{className:"nav-bar"})]})})})},He=d($e)`
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
`;function ze(n){var o=n,{className:e}=o,r=v(o,["className"]);return t("div",{className:e,children:r.children})}const Ie=d(ze)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  padding: 35px;
  background-color: ${e=>e.theme.palette.primary.light};
`;function qe({className:e}){return t("div",{id:"FOOTER",className:e})}const je=d(qe)`
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

`;function Ge(n){var o=n,{className:e}=o,r=v(o,["className"]);const a=l.exports.useContext(L);return t(se,{className:e,anchor:a.anchor,open:a.open,variant:a.permanent,onClose:()=>{a.closeDrawer(!1)},children:t(E,{className:"drawer-layout",sx:{width:a.anchor==="top"||a.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{a.closeDrawer(!1)},children:t(a.child,{})})})}const Ue=d(Ge)`
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
`;function We({className:e}){const[r,n]=l.exports.useState(!0),o=()=>{n(!1)};return p(ie,{id:"main-modal-root",className:e,open:r,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(ce,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(le,{children:t(ue,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(de,{children:t(z,{onClick:o,children:"Close"})})]})}d(We)`
  
`;function Ke(n){var o=n,{className:e}=o,r=v(o,["className"]);const[a,s]=l.exports.useState(!0);return t(pe,{className:e,open:a,onClose:()=>{s(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}d(Ke)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function Ve({className:e}){return t("div",{id:"",className:e})}const Je=d(Ve)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function Qe({className:e}){const r=l.exports.useContext(C);l.exports.useEffect(()=>{window.onload=()=>{const a=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],s={childList:!1,attributes:!0,subtree:!1};function c(){n()}new MutationObserver(c).observe(a,s)}},[]);let n=()=>{setTimeout(()=>{let a=document.querySelectorAll(".gs-title");a&&a.forEach((s,c)=>{if(s.innerText.includes("Lyrics")){let i=s.innerText.replace("Lyrics | Musixmatch"," ");s.innerText=i;const f={artistName:i.split("-")[0],songtName:i.split("-")[1]};s.addEventListener("click",x=>{r.handleSet(f)})}else s.innerText.includes("Lyrics")||s.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&s.parentElement.parentElement.parentElement.remove()})},50)};function o(a){let s=document.querySelector("#gsc-i-id1");if(s)if(a.target.value.length<=1){let c=document.querySelector(".gsst_a");c&&c.dispatchEvent(new Event("click"))}else{s.value=a.target.value;let c=document.querySelectorAll(".gsc-search-box button")[0];c?setTimeout(()=>{c.dispatchEvent(new Event("click"))},100*Math.floor(Math.random()*4)):console.error("no gsc loaded, try reload the page")}else console.error("no gsc loaded, try reload the page")}return p("div",{id:"",className:e,children:[t(he,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:o,autoFocus:!1,autoComplete:"off"}),t("div",{className:"gcse-search"})]})}const Xe=d(Qe)`
  *,::before,::after{
      background-color: '#ffffff0';
  }
`;function Ye(n){var o=n,{className:e}=o,r=v(o,["className"]);l.exports.useEffect(()=>{a()},[]);const a=()=>{};return t(me,{className:e,title:p(I,{children:[t(y,{color:"inherit",children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD:"}),p("div",{className:"tt-body",children:[t("p",{className:"tt-p",children:"\u05EA\u05E8\u05D2\u05D5\u05DD"}),t("hr",{}),t("p",{className:"tt-p",children:"\u05EA\u05E8\u05D2\u05D5\u05DD"}),t("hr",{}),t("p",{className:"tt-p",children:"\u05EA\u05E8\u05D2\u05D5\u05DD"})]})]}),arrow:!0,sx:{color:"white"},enterDelay:0,enterTouchDelay:0,leaveTouchDelay:60*1e3,children:t("p",{className:"single-lyric",children:r.lyric})})}const Ze=d(Ye)`
  
`;function et({className:e}){const r=l.exports.useContext(C);return t(E,{children:t(N,{container:!0,spacing:2,children:r.lines&&t("div",{id:"lyrics_body",className:e,children:r.lines.map((n,o)=>p("div",{children:[t(N,{className:"lyrics-line en-line",item:!0,children:n.src.split(" ").map((a,s)=>t(Ze,{lyric:a},s))},o.toString()+Math.floor(Math.random()*3e4)),t(N,{item:!0,className:"lyrics-line he-line",children:n.src.split(" ").map((a,s)=>{if(s===0)return t("small",{className:"single-trans",children:a&&"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."},s)})},o.toString()+Math.floor(Math.random()*3e4))]},o))})})})}const tt=d(et)`
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
          font-size: 14px;
  }

  .single-lyric{
    cursor: pointer;
          font-size: 25px;
  }

`;function rt({className:e}){const r=l.exports.useContext(C);function n(o){o.preventDefault();let a=document.querySelectorAll(".gsc-search-box button")[0];a?a.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return p("div",{className:e,children:[!r.currLyrics&&p("div",{children:[p(y,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",t("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D0\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4"]}),t(y,{variant:"h3",className:"page-h3",children:"\u05DC\u05D9\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DE\u05D5\u05D6\u05D9\u05E7\u05D4"})]}),t(E,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:n,children:t(Xe,{})}),r.currLyrics&&t(tt,{className:"lyrics-body"})]})}const nt=d(rt)`

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
    
`;function ot({className:e}){return t("div",{className:e,children:t(y,{variant:"h2",className:"page-h2",children:"About Page"})})}const at=d(ot)`

`;function st({className:e}){return p("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(y,{variant:"h2",className:"page-h2",children:"404"}),t(y,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const it=d(st)`

`;function ct({className:e}){const r=l.exports.useContext(L),n=l.exports.useContext(M),o=l.exports.useContext(q),a=l.exports.useRef(null),s=fe({key:"muirtl",stylisPlugins:[Ce,we]});function c(){i()}const i=()=>{const h=document.createElement("script");h.type="text/javascript",h.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",h.defer=!0,document.body.appendChild(h)};l.exports.useEffect(()=>{c()},[]);const f=h=>{o.closeBanner(h)};function x(h){h.preventDefault();let S=document.querySelectorAll(".gsc-search-box button")[0];S?S.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return p("div",{className:e,ref:a,children:[t(xe,{value:s,children:p(ye,{children:[t(Te,{}),t(He,{className:"header",HandleSubmit:x}),o.main.open&&p(H,{severity:"warning",className:"main-alert",children:[t(ge,{children:o.main.title}),o.main.message]}),t(Ie,{children:p(De,{children:[t(k,{path:"/",element:t(nt,{className:"page"})}),t(k,{path:"/about",element:t(at,{className:"page"})}),t(k,{path:"*",element:t(it,{className:"page"})})]})}),r.open&&r.child&&t(Ue,{className:"drawer"}),n.main.open&&t(ve,{color:n.main.color||"primary"}),n.circular.open&&t(be,{color:n.main.color||"primary"}),o.snackbar.open&&t(Ee,{open:o.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(H,{onClose:()=>{f("snackbar")},severity:o.snackbar.severity,sx:{width:"100%"},children:o.snackbar.message})}),t(je,{})]})}),t(Je,{})]})}const lt=d(ct)`
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
`,ut=[ke,Me,Ae,Re];function dt(e){return t(I,{children:ut.reduceRight((r,n)=>t(n,{children:r}),e.children)})}Le.render(t(b.StrictMode,{children:t(dt,{children:t(Se,{theme:j,children:t(lt,{className:"app"})})})}),document.getElementById("root"));
