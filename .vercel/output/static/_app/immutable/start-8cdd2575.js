import{S as st,i as it,s as lt,a as ct,e as F,c as ft,b as M,g as pe,t as V,d as me,f as B,h as J,j as ut,o as Pe,k as dt,l as ht,m as pt,n as ke,p as C,q as mt,r as gt,u as _t,v as H,w as W,x as Ue,y as Y,z as X,A as ce}from"./chunks/index-846b5d79.js";import{S as at,I as q,g as Ye,f as Xe,a as Se,b as fe,s as K,i as Ze,c as he,P as Qe,d as wt,e as yt,h as bt}from"./chunks/singletons-0abf66f8.js";function vt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function Et(r){return r.split("%25").map(decodeURI).join("%25")}function kt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const St=["href","pathname","search","searchParams","toString","toJSON"];function Rt(r,e){const n=new URL(r);for(const i of St){let s=n[i];Object.defineProperty(n,i,{get(){return e(),s},enumerable:!0,configurable:!0})}return Ot(n),n}function Ot(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const It="/__data.json";function Lt(r){return r.replace(/\/$/,"")+It}function $t(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ge=window.fetch;window.fetch=(r,e)=>((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"&&te.delete(Te(r)),ge(r,e));const te=new Map;function Pt(r,e){const n=Te(r,e),i=document.querySelector(n);if(i!=null&&i.textContent){const{body:s,...d}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&te.set(n,{body:s,init:d,ttl:1e3*Number(t)}),Promise.resolve(new Response(s,d))}return ge(r,e)}function jt(r,e,n){if(te.size>0){const i=Te(r,n),s=te.get(i);if(s){if(performance.now()<s.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(s.body,s.init);te.delete(i)}}return ge(e,n)}function Te(r,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${$t(e.body)}"]`),i}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Nt(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${Tt(r).map(i=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(d)return e.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/);return"/"+t.map((g,m)=>{if(m%2){if(g.startsWith("x+"))return Re(String.fromCharCode(parseInt(g.slice(2),16)));if(g.startsWith("u+"))return Re(String.fromCharCode(...g.slice(2).split("-").map(P=>parseInt(P,16))));const _=At.exec(g);if(!_)throw new Error(`Invalid param: ${g}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,b,S,U,D]=_;return e.push({name:U,matcher:D,optional:!!b,rest:!!S,chained:S?m===1&&t[0]==="":!1}),S?"(.*?)":b?"([^/]*)?":"([^/]+?)"}return Re(g)}).join("")}).join("")}/?$`),params:e}}function Ut(r){return!/^\([^)]+\)$/.test(r)}function Tt(r){return r.slice(1).split("/").filter(Ut)}function Dt(r,e,n){const i={},s=r.slice(1);let d="";for(let t=0;t<e.length;t+=1){const f=e[t];let g=s[t];if(f.chained&&f.rest&&d&&(g=g?d+"/"+g:d),d="",g===void 0)f.rest&&(i[f.name]="");else{if(f.matcher&&!n[f.matcher](g)){if(f.optional&&f.chained){let m=s.indexOf(void 0,t);if(m===-1){const _=e[t+1];if((_==null?void 0:_.rest)&&_.chained)d=g;else return}for(;m>=t;)s[m]=s[m-1],m-=1;continue}return}i[f.name]=g}}if(!d)return i}function Re(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ct(r,e,n,i){const s=new Set(e);return Object.entries(n).map(([f,[g,m,_]])=>{const{pattern:b,params:S}=Nt(f),U={id:f,exec:D=>{const P=b.exec(D);if(P)return Dt(P,S,i)},errors:[1,..._||[]].map(D=>r[D]),layouts:[0,...m||[]].map(t),leaf:d(g)};return U.errors.length=U.layouts.length=Math.max(U.errors.length,U.layouts.length),U});function d(f){const g=f<0;return g&&(f=~f),[g,r[f]]}function t(f){return f===void 0?f:[s.has(f),r[f]]}}function qt(r){let e,n,i;var s=r[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return s&&(e=H(s,d(r))),{c(){e&&W(e.$$.fragment),n=F()},l(t){e&&Ue(e.$$.fragment,t),n=F()},m(t,f){e&&Y(e,t,f),M(t,n,f),i=!0},p(t,f){const g={};if(f&4&&(g.data=t[2]),f&2&&(g.form=t[1]),s!==(s=t[0][0])){if(e){pe();const m=e;V(m.$$.fragment,1,0,()=>{X(m,1)}),me()}s?(e=H(s,d(t)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else s&&e.$set(g)},i(t){i||(e&&B(e.$$.fragment,t),i=!0)},o(t){e&&V(e.$$.fragment,t),i=!1},d(t){t&&J(n),e&&X(e,t)}}}function Ft(r){let e,n,i;var s=r[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[Vt]},$$scope:{ctx:t}}}}return s&&(e=H(s,d(r))),{c(){e&&W(e.$$.fragment),n=F()},l(t){e&&Ue(e.$$.fragment,t),n=F()},m(t,f){e&&Y(e,t,f),M(t,n,f),i=!0},p(t,f){const g={};if(f&4&&(g.data=t[2]),f&523&&(g.$$scope={dirty:f,ctx:t}),s!==(s=t[0][0])){if(e){pe();const m=e;V(m.$$.fragment,1,0,()=>{X(m,1)}),me()}s?(e=H(s,d(t)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else s&&e.$set(g)},i(t){i||(e&&B(e.$$.fragment,t),i=!0)},o(t){e&&V(e.$$.fragment,t),i=!1},d(t){t&&J(n),e&&X(e,t)}}}function Vt(r){let e,n,i;var s=r[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return s&&(e=H(s,d(r))),{c(){e&&W(e.$$.fragment),n=F()},l(t){e&&Ue(e.$$.fragment,t),n=F()},m(t,f){e&&Y(e,t,f),M(t,n,f),i=!0},p(t,f){const g={};if(f&8&&(g.data=t[3]),f&2&&(g.form=t[1]),s!==(s=t[0][1])){if(e){pe();const m=e;V(m.$$.fragment,1,0,()=>{X(m,1)}),me()}s?(e=H(s,d(t)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else s&&e.$set(g)},i(t){i||(e&&B(e.$$.fragment,t),i=!0)},o(t){e&&V(e.$$.fragment,t),i=!1},d(t){t&&J(n),e&&X(e,t)}}}function xe(r){let e,n=r[5]&&et(r);return{c(){e=dt("div"),n&&n.c(),this.h()},l(i){e=ht(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=pt(e);n&&n.l(s),s.forEach(J),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(i,s){M(i,e,s),n&&n.m(e,null)},p(i,s){i[5]?n?n.p(i,s):(n=et(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&J(e),n&&n.d()}}}function et(r){let e;return{c(){e=mt(r[6])},l(n){e=gt(n,r[6])},m(n,i){M(n,e,i)},p(n,i){i&64&&_t(e,n[6])},d(n){n&&J(e)}}}function Bt(r){let e,n,i,s,d;const t=[Ft,qt],f=[];function g(_,b){return _[0][1]?0:1}e=g(r),n=f[e]=t[e](r);let m=r[4]&&xe(r);return{c(){n.c(),i=ct(),m&&m.c(),s=F()},l(_){n.l(_),i=ft(_),m&&m.l(_),s=F()},m(_,b){f[e].m(_,b),M(_,i,b),m&&m.m(_,b),M(_,s,b),d=!0},p(_,[b]){let S=e;e=g(_),e===S?f[e].p(_,b):(pe(),V(f[S],1,1,()=>{f[S]=null}),me(),n=f[e],n?n.p(_,b):(n=f[e]=t[e](_),n.c()),B(n,1),n.m(i.parentNode,i)),_[4]?m?m.p(_,b):(m=xe(_),m.c(),m.m(s.parentNode,s)):m&&(m.d(1),m=null)},i(_){d||(B(n),d=!0)},o(_){V(n),d=!1},d(_){f[e].d(_),_&&J(i),m&&m.d(_),_&&J(s)}}}function Jt(r,e,n){let{stores:i}=e,{page:s}=e,{components:d}=e,{form:t}=e,{data_0:f=null}=e,{data_1:g=null}=e;ut(i.page.notify);let m=!1,_=!1,b=null;return Pe(()=>{const S=i.page.subscribe(()=>{m&&(n(5,_=!0),n(6,b=document.title||"untitled page"))});return n(4,m=!0),S}),r.$$set=S=>{"stores"in S&&n(7,i=S.stores),"page"in S&&n(8,s=S.page),"components"in S&&n(0,d=S.components),"form"in S&&n(1,t=S.form),"data_0"in S&&n(2,f=S.data_0),"data_1"in S&&n(3,g=S.data_1)},r.$$.update=()=>{r.$$.dirty&384&&i.page.set(s)},[d,t,f,g,m,_,b,i,s]}class Gt extends st{constructor(e){super(),it(this,e,Jt,Bt,lt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Kt="modulepreload",Mt=function(r,e){return new URL(r,e).href},tt={},Oe=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(d=>{if(d=Mt(d,i),d in tt)return;tt[d]=!0;const t=d.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!i)for(let _=s.length-1;_>=0;_--){const b=s[_];if(b.href===d&&(!t||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${f}`))return;const m=document.createElement("link");if(m.rel=t?"stylesheet":Kt,t||(m.as="script",m.crossOrigin=""),m.href=d,document.head.appendChild(m),t)return new Promise((_,b)=>{m.addEventListener("load",_),m.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${d}`)))})})).then(()=>e())},zt={},_e=[()=>Oe(()=>import("./chunks/0-40f8e0c4.js"),["./chunks\\0-40f8e0c4.js","./components\\pages\\_layout.svelte-1ed3784c.js","./chunks\\index-846b5d79.js","./assets\\_layout-38e6842f.css"],import.meta.url),()=>Oe(()=>import("./chunks/1-f6fe4b34.js"),["./chunks\\1-f6fe4b34.js","./components\\error.svelte-02d713cc.js","./chunks\\index-846b5d79.js","./chunks\\singletons-0abf66f8.js","./chunks\\index-2879e7ce.js"],import.meta.url),()=>Oe(()=>import("./chunks/2-a1fc45ab.js"),["./chunks\\2-a1fc45ab.js","./components\\pages\\_page.svelte-b900a9af.js","./chunks\\index-846b5d79.js","./chunks\\index-2879e7ce.js","./assets\\_page-e8c3ac02.css"],import.meta.url)],Ht=[],Wt={"/":[2]},Yt={handleError:({error:r})=>{console.error(r)}};class je{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class nt{constructor(e,n){this.status=e,this.location=n}}async function Xt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([i,s])=>[i,await s])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Zt=-1,Qt=-2,xt=-3,en=-4,tn=-5,nn=-6;function rn(r){if(typeof r=="number")return i(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function i(s,d=!1){if(s===Zt)return;if(s===xt)return NaN;if(s===en)return 1/0;if(s===tn)return-1/0;if(s===nn)return-0;if(d)throw new Error("Invalid input");if(s in n)return n[s];const t=e[s];if(!t||typeof t!="object")n[s]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[s]=new Date(t[1]);break;case"Set":const g=new Set;n[s]=g;for(let b=1;b<t.length;b+=1)g.add(i(t[b]));break;case"Map":const m=new Map;n[s]=m;for(let b=1;b<t.length;b+=2)m.set(i(t[b]),i(t[b+1]));break;case"RegExp":n[s]=new RegExp(t[1],t[2]);break;case"Object":n[s]=Object(t[1]);break;case"BigInt":n[s]=BigInt(t[1]);break;case"null":const _=Object.create(null);n[s]=_;for(let b=1;b<t.length;b+=2)_[t[b]]=i(t[b+1]);break}else{const f=new Array(t.length);n[s]=f;for(let g=0;g<t.length;g+=1){const m=t[g];m!==Qt&&(f[g]=i(m))}}else{const f={};n[s]=f;for(const g in t){const m=t[g];f[g]=i(m)}}return n[s]}return i(0)}const Ie=Ct(_e,Ht,Wt,zt),Ae=_e[0],Ne=_e[1];Ae();Ne();let ne={};try{ne=JSON.parse(sessionStorage[at])}catch{}function Le(r){ne[r]=he()}function an({target:r,base:e}){var ze;const n=document.documentElement,i=[];let s=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,g=!1,m=!0,_=!1,b=!1,S=!1,U=!1,D,P=(ze=history.state)==null?void 0:ze[q];P||(P=Date.now(),history.replaceState({...history.state,[q]:P},"",location.href));const we=ne[P];we&&(history.scrollRestoration="manual",scrollTo(we.x,we.y));let G,De,re;async function Ce(){re=re||Promise.resolve(),await re,re=null;const a=new URL(location.href),o=se(a,!0);s=null,await Fe(o,a,[])}async function ye(a,{noScroll:o=!1,replaceState:c=!1,keepFocus:l=!1,state:p={},invalidateAll:h=!1},u,k){return typeof a=="string"&&(a=new URL(a,Ye(document))),ie({url:a,scroll:o?he():null,keepfocus:l,redirect_chain:u,details:{state:p,replaceState:c},nav_token:k,accepted:()=>{h&&(U=!0)},blocked:()=>{},type:"goto"})}async function qe(a){const o=se(a,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return s={id:o.id,promise:Je(o).then(c=>(c.type==="loaded"&&c.state.error&&(s=null),c))},s.promise}async function ae(...a){const c=Ie.filter(l=>a.some(p=>l.exec(p))).map(l=>Promise.all([...l.layouts,l.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(c)}async function Fe(a,o,c,l,p={},h){var k,v;De=p;let u=a&&await Je(a);if(u||(u=await Me(o,{id:null},await ee(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(a==null?void 0:a.url)||o,De!==p)return!1;if(u.type==="redirect")if(c.length>10||c.includes(o.pathname))u=await oe({status:500,error:await ee(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return ye(new URL(u.location,o).href,{},[...c,o.pathname],p),!1;else((v=(k=u.props)==null?void 0:k.page)==null?void 0:v.status)>=400&&await K.updated.check()&&await le(o);if(i.length=0,U=!1,_=!0,l&&l.details){const{details:y}=l,E=y.replaceState?0:1;y.state[q]=P+=E,history[y.replaceState?"replaceState":"pushState"](y.state,"",o)}if(s=null,g){t=u.state,u.props.page&&(u.props.page.url=o);const y=de();D.$set(u.props),y()}else Ve(u);if(l){const{scroll:y,keepfocus:E}=l;if(E||$e(),await ce(),m){const O=o.hash&&document.getElementById(o.hash.slice(1));y?scrollTo(y.x,y.y):O?O.scrollIntoView():scrollTo(0,0)}}else await ce();m=!0,u.props.page&&(G=u.props.page),h&&h(),_=!1}function Ve(a){var p,h;t=a.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),G=a.props.page;const c=de();D=new Gt({target:r,props:{...a.props,stores:K},hydrate:!0}),c();const l={from:null,to:ue("to",{params:t.params,route:{id:(h=(p=t.route)==null?void 0:p.id)!=null?h:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};d.after_navigate.forEach(u=>u(l)),g=!0}async function Z({url:a,params:o,branch:c,status:l,error:p,route:h,form:u}){var A;const k=c.filter(Boolean);let v="never";for(const I of c)(I==null?void 0:I.slash)!==void 0&&(v=I.slash);a.pathname=vt(a.pathname,v),a.search=a.search;const y={type:"loaded",state:{url:a,params:o,branch:c,error:p,route:h},props:{components:k.map(I=>I.node.component)}};u!==void 0&&(y.props.form=u);let E={},O=!G;for(let I=0;I<k.length;I+=1){const j=k[I];E={...E,...j.data},(O||!t.branch.some(T=>T===j))&&(y.props[`data_${I}`]=E,O=O||Object.keys((A=j.data)!=null?A:{}).length>0)}if(O||(O=Object.keys(G.data).length!==Object.keys(E).length),!t.url||a.href!==t.url.href||t.error!==p||u!==void 0||O){y.props.page={error:p,params:o,route:h,status:l,url:new URL(a),form:u!=null?u:null,data:O?E:G.data},Object.defineProperty(y.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const I=(j,T)=>{Object.defineProperty(y.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${T}`)}})};I("origin","origin"),I("path","pathname"),I("query","searchParams")}return y}async function be({loader:a,parent:o,url:c,params:l,route:p,server_data_node:h}){var y,E,O,N,A,I,j;let u=null;const k={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await a();if((y=v.shared)!=null&&y.load){let T=function(...w){for(const R of w){const{href:L}=new URL(R,c);k.dependencies.add(L)}};const Q={route:{get id(){return k.route=!0,p.id}},params:new Proxy(l,{get:(w,R)=>(k.params.add(R),w[R])}),data:(E=h==null?void 0:h.data)!=null?E:null,url:Rt(c,()=>{k.url=!0}),async fetch(w,R){let L;w instanceof Request?(L=w.url,R={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...R}):L=w;const $=new URL(L,c).href;return T($),g?jt(L,$,R):Pt(L,R)},setHeaders:()=>{},depends:T,parent(){return k.parent=!0,o()}};Object.defineProperties(Q,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),u=(O=await v.shared.load.call(null,Q))!=null?O:null,u=u?await Xt(u):null}return{node:v,loader:a,server:h,shared:(N=v.shared)!=null&&N.load?{type:"data",data:u,uses:k}:null,data:(A=u!=null?u:h==null?void 0:h.data)!=null?A:null,slash:(j=(I=v.shared)==null?void 0:I.trailingSlash)!=null?j:h==null?void 0:h.slash}}function Be(a,o,c,l,p){if(U)return!0;if(!l)return!1;if(l.parent&&a||l.route&&o||l.url&&c)return!0;for(const h of l.params)if(p[h]!==t.params[h])return!0;for(const h of l.dependencies)if(i.some(u=>u(new URL(h))))return!0;return!1}function ve(a,o){var c,l;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((c=a.uses.dependencies)!=null?c:[]),params:new Set((l=a.uses.params)!=null?l:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"&&o!=null?o:null}async function Je({id:a,invalidating:o,url:c,params:l,route:p}){var Q;if((s==null?void 0:s.id)===a)return s.promise;const{errors:h,layouts:u,leaf:k}=p,v=[...u,k];h.forEach(w=>w==null?void 0:w().catch(()=>{})),v.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let y=null;const E=t.url?a!==t.url.pathname+t.url.search:!1,O=t.route?a!==t.route.id:!1,N=v.reduce((w,R,L)=>{var x;const $=t.branch[L],z=!!(R!=null&&R[0])&&(($==null?void 0:$.loader)!==R[1]||Be(w.some(Boolean),O,E,(x=$.server)==null?void 0:x.uses,l));return w.push(z),w},[]);if(N.some(Boolean)){try{y=await rt(c,N)}catch(w){return oe({status:500,error:await ee(w,{url:c,params:l,route:{id:p.id}}),url:c,route:p})}if(y.type==="redirect")return y}const A=y==null?void 0:y.nodes;let I=!1;const j=v.map(async(w,R)=>{var x;if(!w)return;const L=t.branch[R],$=A==null?void 0:A[R];if((!$||$.type==="skip")&&w[1]===(L==null?void 0:L.loader)&&!Be(I,O,E,(x=L.shared)==null?void 0:x.uses,l))return L;if(I=!0,($==null?void 0:$.type)==="error")throw $;return be({loader:w[1],url:c,params:l,route:p,parent:async()=>{var We;const He={};for(let Ee=0;Ee<R;Ee+=1)Object.assign(He,(We=await j[Ee])==null?void 0:We.data);return He},server_data_node:ve($===void 0&&w[0]?{type:"skip"}:$!=null?$:null,L==null?void 0:L.server)})});for(const w of j)w.catch(()=>{});const T=[];for(let w=0;w<v.length;w+=1)if(v[w])try{T.push(await j[w])}catch(R){if(R instanceof nt)return{type:"redirect",location:R.location};let L=500,$;A!=null&&A.includes(R)?(L=(Q=R.status)!=null?Q:L,$=R.error):R instanceof je?(L=R.status,$=R.body):$=await ee(R,{params:l,url:c,route:{id:p.id}});const z=await Ge(w,T,h);return z?await Z({url:c,params:l,branch:T.slice(0,z.idx).concat(z.node),status:L,error:$,route:p}):await Me(c,{id:p.id},$,L)}else T.push(void 0);return await Z({url:c,params:l,branch:T,status:200,error:null,route:p,form:o?void 0:null})}async function Ge(a,o,c){for(;a--;)if(c[a]){let l=a;for(;!o[l];)l-=1;try{return{idx:l+1,node:{node:await c[a](),loader:c[a],data:{},server:null,shared:null}}}catch{continue}}}async function oe({status:a,error:o,url:c,route:l}){var y;const p={},h=await Ae();let u=null;if(h.server)try{const E=await rt(c,[!0]);if(E.type!=="data"||E.nodes[0]&&E.nodes[0].type!=="data")throw 0;u=(y=E.nodes[0])!=null?y:null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await le(c)}const k=await be({loader:Ae,url:c,params:p,route:l,parent:()=>Promise.resolve({}),server_data_node:ve(u)}),v={node:await Ne(),loader:Ne,shared:null,server:null,data:null};return await Z({url:c,params:p,branch:[k,v],status:a,error:o,route:null})}function se(a,o){if(Ze(a,e))return;const c=Et(a.pathname.slice(e.length)||"/");for(const l of Ie){const p=l.exec(c);if(p)return{id:a.pathname+a.search,invalidating:o,route:l,params:kt(p),url:a}}}function Ke({url:a,type:o,intent:c,delta:l}){var k,v,y,E,O;let p=!1;const h={from:ue("from",{params:t.params,route:{id:(v=(k=t.route)==null?void 0:k.id)!=null?v:null},url:t.url}),to:ue("to",{params:(y=c==null?void 0:c.params)!=null?y:null,route:{id:(O=(E=c==null?void 0:c.route)==null?void 0:E.id)!=null?O:null},url:a}),willUnload:!c,type:o};l!==void 0&&(h.delta=l);const u={...h,cancel:()=>{p=!0}};return b||d.before_navigate.forEach(N=>N(u)),p?null:h}async function ie({url:a,scroll:o,keepfocus:c,redirect_chain:l,details:p,type:h,delta:u,nav_token:k,accepted:v,blocked:y}){const E=se(a,!1),O=Ke({url:a,type:h,delta:u,intent:E});if(!O){y();return}Le(P),v(),b=!0,g&&K.navigating.set(O),await Fe(E,a,l,{scroll:o,keepfocus:c,details:p},k,()=>{b=!1,d.after_navigate.forEach(N=>N(O)),K.navigating.set(null)})}async function Me(a,o,c,l){return a.origin===location.origin&&a.pathname===location.pathname&&!f?await oe({status:l,error:c,url:a,route:o}):await le(a)}function le(a){return location.href=a.href,new Promise(()=>{})}function ot(){let a;n.addEventListener("mousemove",h=>{const u=h.target;clearTimeout(a),a=setTimeout(()=>{l(u,2)},20)});function o(h){l(h.composedPath()[0],1)}n.addEventListener("mousedown",o),n.addEventListener("touchstart",o,{passive:!0});const c=new IntersectionObserver(h=>{for(const u of h)u.isIntersecting&&(ae(new URL(u.target.href).pathname),c.unobserve(u.target))},{threshold:0});function l(h,u){const k=Xe(h,n);if(!k)return;const{url:v,external:y}=Se(k,e);if(y)return;const E=fe(k);E.reload||(u<=E.preload_data?qe(v):u<=E.preload_code&&ae(v.pathname))}function p(){c.disconnect();for(const h of n.querySelectorAll("a")){const{url:u,external:k}=Se(h,e);if(k)continue;const v=fe(h);v.reload||(v.preload_code===Qe.viewport&&c.observe(h),v.preload_code===Qe.eager&&ae(u.pathname))}}d.after_navigate.push(p),p()}return{after_navigate:a=>{Pe(()=>(d.after_navigate.push(a),()=>{const o=d.after_navigate.indexOf(a);d.after_navigate.splice(o,1)}))},before_navigate:a=>{Pe(()=>(d.before_navigate.push(a),()=>{const o=d.before_navigate.indexOf(a);d.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(_||!g)&&(m=!1)},goto:(a,o={})=>{if("keepfocus"in o&&!("keepFocus"in o))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in o&&!("noScroll"in o))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return ye(a,o,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")i.push(a);else{const{href:o}=new URL(a,location.href);i.push(c=>c.href===o)}return Ce()},invalidateAll:()=>(U=!0,Ce()),preload_data:async a=>{const o=new URL(a,Ye(document));await qe(o)},preload_code:ae,apply_action:async a=>{if(a.type==="error"){const o=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const p=await Ge(t.branch.length,c,l.errors);if(p){const h=await Z({url:o,params:t.params,branch:c.slice(0,p.idx).concat(p.node),status:500,error:a.error,route:l});t=h.state;const u=de();D.$set(h.props),u(),ce().then($e)}}else if(a.type==="redirect")ye(a.location,{invalidateAll:!0},[]);else{const o={form:a.data,page:{...G,form:a.data,status:a.status}},c=de();D.$set(o),c(),a.type==="success"&&ce().then($e)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var l,p;let c=!1;if(!b){const h={from:ue("from",{params:t.params,route:{id:(p=(l=t.route)==null?void 0:l.id)!=null?p:null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};d.before_navigate.forEach(u=>u(h))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Le(P);try{sessionStorage[at]=JSON.stringify(ne)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||ot(),n.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=Xe(o.composedPath()[0],n);if(!c)return;const{url:l,external:p,has:h}=Se(c,e),u=fe(c);if(!l||!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||h.download)return;if(p||u.reload){Ke({url:l,type:"link"})||o.preventDefault(),b=!0;return}const[v,y]=l.href.split("#");if(y!==void 0&&v===location.href.split("#")[0]){S=!0,Le(P),t.url=l,K.page.set({...G,url:l}),K.page.notify();return}ie({url:l,scroll:u.noscroll?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),n.addEventListener("submit",o=>{var v;if(o.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(o.target),l=o.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const h=new URL(((v=o.submitter)==null?void 0:v.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(Ze(h,e))return;const{noscroll:u,reload:k}=fe(o.target);k||(o.preventDefault(),o.stopPropagation(),h.search=new URLSearchParams(new FormData(o.target)).toString(),ie({url:h,scroll:u?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var c;if((c=o.state)!=null&&c[q]){if(o.state[q]===P)return;const l=o.state[q]-P;ie({url:new URL(location.href),scroll:ne[o.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=o.state[q]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{S&&(S=!1,history.replaceState({...history.state,[q]:++P},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&K.navigating.set(null)})},_hydrate:async({status:a=200,error:o,node_ids:c,params:l,route:p,data:h,form:u})=>{var y;f=!0;const k=new URL(location.href);({params:l={},route:p={id:null}}=se(k,!1)||{});let v;try{const E=c.map(async(O,N)=>{const A=h[N];return be({loader:_e[O],url:k,params:l,route:p,parent:async()=>{const I={};for(let j=0;j<N;j+=1)Object.assign(I,(await E[j]).data);return I},server_data_node:ve(A)})});v=await Z({url:k,params:l,branch:await Promise.all(E),status:a,error:o,form:u,route:(y=Ie.find(({id:O})=>O===p.id))!=null?y:null})}catch(E){if(E instanceof nt){await le(new URL(E.location,location.href));return}v=await oe({status:E instanceof je?E.status:500,error:await ee(E,{url:k,params:l,route:p}),url:k,route:p})}Ve(v)}}}async function rt(r,e){var d;const n=new URL(r);n.pathname=Lt(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await ge(n.href),s=await i.json();if(!i.ok)throw new Error(s);return(d=s.nodes)==null||d.forEach(t=>{var f,g;(t==null?void 0:t.type)==="data"&&(t.data=rn(t.data),t.uses={dependencies:new Set((f=t.uses.dependencies)!=null?f:[]),params:new Set((g=t.uses.params)!=null?g:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),s}function ee(r,e){var n;return r instanceof je?r.body:(n=Yt.handleError({error:r,event:e}))!=null?n:{message:e.route.id!=null?"Internal Error":"Not Found"}}const on=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ue(r,e){for(const n of on)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function de(){return()=>{}}function $e(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var i;(i=getSelection())==null||i.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function cn({env:r,hydrate:e,paths:n,target:i,version:s}){wt(n),bt(s);const d=an({target:i,base:n.base});yt({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{cn as start};
