var X=Object.defineProperty,Y=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var G=(e,n,r)=>n in e?X(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,u=(e,n)=>{for(var r in n||(n={}))U.call(n,r)&&G(e,r,n[r]);if(z)for(var r of z(n))W.call(n,r)&&G(e,r,n[r]);return e},f=(e,n)=>Y(e,Z(n));var v=(e,n)=>{var r={};for(var s in e)U.call(e,s)&&n.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&z)for(var s of z(e))n.indexOf(s)<0&&W.call(e,s)&&(r[s]=e[s]);return r};import{R as E,r as l,j as t,c as ee,M as te,a as h,B as ne,b as L,d as re,A as oe,s as p,L as se,N as P,e as ie,f as ae,g as ce,h as le,i as N,k as ue,C as de,T as pe,I as he,l as me,m as C,n as fe,o as xe,D as ge,p as ye,q as De,t as be,u as ve,v as Ce,w as Se,F as T,G as M,x as Ee,y as we,H as Le,z as V,E as Ne,J as ke,K as B,O as ze,P as Te,S as Ae,Q as Me,U as Be,V as Pe,W as Fe}from"./vendor.0d26e462.js";const Re=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}};Re();const A=E.createContext(void 0);function $e(e){const[n,r]=l.exports.useState({}),i={openDrawer:(c,a,d="temporary",m)=>{r({open:c,anchor:a,permanent:d,child:m})},closeDrawer:(c,a,d="temporary",m)=>{r({open:c,anchor:a,permanent:d,child:m})}};return t(A.Provider,{value:u(u({},n),i),children:e.children})}const F=E.createContext(void 0);function _e(e){const[n,r]=l.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),c={createLoader:(a,d)=>{n[a]&&r(f(u({},n),{[a]:void 0})),r(f(u({},n),{[a]:{open:!1,color:d||"primary"}}))},openLoader:a=>{n[a]?r(f(u({},n),{[a]:f(u({},n[a]),{open:!0})})):console.error("Loader does'nt exist. Name: "+a)},closeLoader:a=>{n[a]?r(f(u({},n),{[a]:f(u({},n[a]),{open:!1})})):console.error("Loader does'nt exist. Name: "+a)}};return t(F.Provider,{value:u(u({},n),c),children:e.children})}const J=E.createContext(void 0);function Oe(e){const[n,r]=l.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),c={createBanner:(a,d,m,g)=>{n[a]&&r(f(u({},n),{[a]:void 0})),r(f(u({},n),{[a]:{open:!1,severity:d||"success",title:m||"",mesaage:g||""}}))},openBanner:a=>{n[a]?r(f(u({},n),{[a]:f(u({},n[a]),{open:!0})})):console.error("Banner does'nt exist. Name: "+a)},closeBanner:a=>{n[a]?r(f(u({},n),{[a]:f(u({},n[a]),{open:!1})})):console.error("Banner does'nt exist. Name: "+a)}};return t(J.Provider,{value:u(u({},n),c),children:e.children})}const K=ee({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function Ie(){const[e,n]=l.exports.useState(K.palette.primary.light);return t("div",{className:"wrapper",children:t(te,{children:t("meta",{name:"theme-color",content:e})})})}const R=E.createContext(void 0);function He(e){const[n,r]=l.exports.useState({fontSize:{sm:15,md:25}}),i={reduceFontSize:()=>{n.fontSize.sm>2&&r(f(u({},n),{fontSize:{sm:n.fontSize.sm-.5,md:n.fontSize.md-.5}}))},increaseFontSize:()=>{n.fontSize.md<60&&r(f(u({},n),{fontSize:{sm:n.fontSize.sm+.5,md:n.fontSize.md+.5}}))}};return t(R.Provider,{value:u(u({},n),i),children:e.children})}function qe({className:e}){const n=l.exports.useContext(R);return t("div",{id:"",className:e,children:h(ne,{className:"button-group",children:[t(L,{"aria-label":"reduce",onClick:()=>{n.reduceFontSize()},children:t(re,{fontSize:"small"})}),t(L,{className:"font-size-disabled",disabled:!0,children:"Font Size"}),t(L,{"aria-label":"increase",onClick:()=>{n.increaseFontSize()},children:t(oe,{fontSize:"small"})})]})})}const je=p(qe)`
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

`,Ge=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}];function Ue(){return t(se,{children:Ge.map((e,n)=>t(P,{to:e.url,children:h(ie,{button:!0,children:[t(ae,{primary:e.name}),t(ce,{children:t(le,{})})]},e.name)},n))})}const We=p(Ue)`
  
`,w=E.createContext(void 0);function Ve(e){const n=l.exports.useContext(F),[r,s]=l.exports.useState(!1),[o,i]=l.exports.useState([]),[c,a]=l.exports.useState([]),[d,m]=l.exports.useState(0),g=D=>{n.openLoader("main"),fetch("https://cors-anywhere.herokuapp.com/"+"http://api.musixmatch.com/ws/1.1/"+`matcher.lyrics.get?apikey=d98598e033ac1e0ad0a3335990d12579&q_track=${encodeURI(D.songtName)}&q_artist=${encodeURI(D.artistName)}`).then(y=>y.json()).then(y=>{var _,O,I;if(n.closeLoader("main"),(I=(O=(_=y==null?void 0:y.message)==null?void 0:_.body)==null?void 0:O.lyrics)==null?void 0:I.lyrics_body){let S=y.message.body.lyrics.lyrics_body;S=S.substring(0,S.indexOf("..."));let H=[];S.split(/(?:\r\n|\r|\n)/g).map(j=>{j.length>=2&&H.push({src:j,trans:""})}),a(H),s(S),i(S.split(" "));let q=document.querySelector(".gsst_a");q&&q.dispatchEvent(new Event("click"))}})},k=()=>{console.log("check");let D=!1;for(let b=0;b<c.length;b++){let x=c[b];if(D===!0)break;if(x.trans.length<=1){D=!0,$(x.src,b);break}else continue}},$=(D,b)=>{fetch("http://localhost:5000/line-trans",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(D)})}).then(x=>x.json()).then(x=>{if(x==null?void 0:x.trans){let y=c;y[b]={src:D,trans:x==null?void 0:x.trans},a(y),m(d+1)}}).catch(x=>{let y=c;y[b]={src:D,trans:"[missing]"},a(y),m(d+1),console.log(x)})},Q={getLines:g,getLinesTrans:$,checkNextTrans:k};return t(w.Provider,{value:u({currLyrics:r,singles:o,lines:c,cou:d},Q),children:e.children})}function Je({className:e}){return l.exports.useContext(w),t(N,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",url:"/history"}].map(r=>t(P,{to:r.url,children:t(L,{sx:{my:2},children:r.name})},r.name))})}const Ke=p(Je)`
  
`,Qe=r=>{var s=r,{className:e}=s,n=v(s,["className"]);const o=l.exports.useContext(A),i=l.exports.useContext(w);return t(ue,{position:"static",className:e,children:t(de,{maxWidth:"xl",children:h(pe,{disableGutters:!0,children:[t(N,{sx:{display:{xs:"flex",md:"none"}},children:t(he,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{o.openDrawer(!0,"left","temporary",We)},color:"inherit",children:t(me,{})})}),t(P,{to:"/",children:t(C,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),i.lines[0]&&t(je,{}),t(Ke,{className:"nav-bar"})]})})})},Xe=p(Qe)`
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
`;function Ye(r){var s=r,{className:e}=s,n=v(s,["className"]);return t("div",{className:e,children:n.children})}const Ze=p(Ye)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  padding: 35px;
  background-color: ${e=>e.theme.palette.primary.light};
`;function et({className:e}){return t("div",{id:"FOOTER",className:e})}const tt=p(et)`
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

`;function nt(r){var s=r,{className:e}=s,n=v(s,["className"]);const o=l.exports.useContext(A);return t(fe,{className:e,anchor:o.anchor,open:o.open,variant:o.permanent,onClose:()=>{o.closeDrawer(!1)},children:t(N,{className:"drawer-layout",sx:{width:o.anchor==="top"||o.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{o.closeDrawer(!1)},children:t(o.child,{})})})}const rt=p(nt)`
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
`;function ot({className:e}){const[n,r]=l.exports.useState(!0),s=()=>{r(!1)};return h(xe,{id:"main-modal-root",className:e,open:n,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(ge,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(ye,{children:t(De,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(be,{children:t(L,{onClick:s,children:"Close"})})]})}p(ot)`
  
`;function st(r){var s=r,{className:e}=s,n=v(s,["className"]);const[o,i]=l.exports.useState(!0);return t(ve,{className:e,open:o,onClose:()=>{i(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:n.children})}p(st)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function it({className:e}){return t("div",{id:"",className:e})}const at=p(it)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function ct({className:e}){const n=l.exports.useContext(w);l.exports.useEffect(()=>{window.onload=()=>{const o=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],i={childList:!1,attributes:!0,subtree:!1};function c(){r()}new MutationObserver(c).observe(o,i)}},[]);let r=()=>{setTimeout(()=>{let o=document.querySelectorAll(".gs-title");o&&o.forEach((i,c)=>{if(i.innerText.includes("Lyrics")){let a=i.innerText.replace("Lyrics | Musixmatch"," ");i.innerText=a;const d={artistName:a.split("-")[0],songtName:a.split("-")[1]};i.addEventListener("click",m=>{n.getLines(d)})}else i.innerText.includes("Lyrics")||i.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&i.parentElement.parentElement.parentElement.remove()})},50)};function s(o){let i=document.querySelector("#gsc-i-id1");if(i)if(o.target.value.length<=1){let c=document.querySelector(".gsst_a");c&&c.dispatchEvent(new Event("click"))}else{i.value=o.target.value;let c=document.querySelectorAll(".gsc-search-box button")[0];c?setTimeout(()=>{c.dispatchEvent(new Event("click"))},100*Math.floor(Math.random()*4)):console.error("no gsc loaded, try reload the page")}else console.error("no gsc loaded, try reload the page")}return h("div",{id:"",className:e,children:[t(Ce,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:s,autoFocus:!1,autoComplete:"off"}),t("div",{className:"gcse-search"})]})}const lt=p(ct)`
  *,::before,::after{
      background-color: '#ffffff0';
  }
`;function ut(r){var s=r,{className:e}=s,n=v(s,["className"]);l.exports.useEffect(()=>{o()},[]);const o=()=>{};return t(Se,{className:e,title:h(T,{children:[t(C,{color:"inherit",children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD:"}),t("div",{className:"tt-body",style:{textAlign:"center"},children:["","",""].map(()=>h(T,{children:[t("p",{className:"tt-p",children:"\u05EA\u05E8\u05D2\u05D5\u05DD"}),t("hr",{})]}))})]}),arrow:!0,sx:{color:"white"},enterDelay:0,enterTouchDelay:5,leaveTouchDelay:60*1e3,leaveDelay:0,children:t("p",{className:"single-lyric",children:n.lyric})})}const dt=p(ut)`
  
`;function pt(r){var s=r,{className:e}=s,n=v(s,["className"]);const o=l.exports.useContext(w);return l.exports.useEffect(()=>{o.checkNextTrans()},[o,o.cou]),t(N,{children:t(M,{container:!0,spacing:2,children:o.lines&&t("div",{id:"lyrics_body",className:e,children:o.lines.map((i,c)=>{var a;return h("div",{children:[t(M,{className:"lyrics-line en-line",item:!0,children:i.src.split(" ").map((d,m)=>t(dt,{lyric:d},m))},c.toString()+Math.floor(Math.random()*3e4)),t(M,{item:!0,className:"lyrics-line he-line",children:t(T,{children:((a=i.trans)==null?void 0:a.length)>2?i.trans.split(" ").map((d,m)=>t("small",{onLoad:()=>{o.checkNextTrans()},className:"single-trans",children:d},m)):t("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})},c.toString()+Math.floor(Math.random()*3e4))]})})})})})}const ht=p(pt)`
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

`;function mt({className:e}){const n=l.exports.useContext(w),r=l.exports.useContext(R);l.exports.useEffect(()=>{},[r]);function s(o){o.preventDefault();let i=document.querySelectorAll(".gsc-search-box button")[0];i?i.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return h("div",{className:e,children:[!n.currLyrics&&h("div",{children:[h(C,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",t("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D1\u05E9\u05D5\u05E8\u05D4"]}),t(C,{variant:"h3",className:"page-h3",children:"\u05DC\u05D9\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DE\u05D5\u05D6\u05D9\u05E7\u05D4"})]}),t(N,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:s,children:t(lt,{})}),n.currLyrics&&t(ht,{className:"lyrics-body",fontSize:r.fontSize})]})}const ft=p(mt)`

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
    
`;function xt({className:e}){return t("div",{className:e,children:t(C,{variant:"h2",className:"page-h2",children:"About Page"})})}const gt=p(xt)`

`;function yt({className:e}){return h("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(C,{variant:"h2",className:"page-h2",children:"404"}),t(C,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const Dt=p(yt)`

`;function bt({className:e}){const n=l.exports.useContext(A),r=l.exports.useContext(F),s=l.exports.useContext(J),o=l.exports.useRef(null),i=Ee({key:"muirtl",stylisPlugins:[Me,Be]});function c(){a()}const a=()=>{const g=document.createElement("script");g.type="text/javascript",g.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",g.defer=!0,document.body.appendChild(g)};l.exports.useEffect(()=>{c()},[]);const d=g=>{s.closeBanner(g)};function m(g){g.preventDefault();let k=document.querySelectorAll(".gsc-search-box button")[0];k?k.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return h("div",{className:e,ref:o,children:[t(we,{value:i,children:h(Le,{children:[t(Ie,{}),t(Xe,{className:"header",HandleSubmit:m}),s.main.open&&h(V,{severity:"warning",className:"main-alert",children:[t(Ne,{children:s.main.title}),s.main.message]}),t(Ze,{children:h(ke,{children:[t(B,{path:"/",element:t(ft,{className:"page"})}),t(B,{path:"/about",element:t(gt,{className:"page"})}),t(B,{path:"*",element:t(Dt,{className:"page"})})]})}),n.open&&n.child&&t(rt,{className:"drawer"}),r.main.open&&t(ze,{color:r.main.color||"primary"}),r.circular.open&&t(Te,{color:r.main.color||"primary"}),s.snackbar.open&&t(Ae,{open:s.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(V,{onClose:()=>{d("snackbar")},severity:s.snackbar.severity,sx:{width:"100%"},children:s.snackbar.message})}),t(tt,{})]})}),t(at,{})]})}const vt=p(bt)`
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
`,Ct=[He,$e,Oe,_e,Ve];function St(e){return t(T,{children:Ct.reduceRight((n,r)=>t(r,{children:n}),e.children)})}Pe.render(t(E.StrictMode,{children:t(St,{children:t(Fe,{theme:K,children:t(vt,{className:"app"})})})}),document.getElementById("root"));
