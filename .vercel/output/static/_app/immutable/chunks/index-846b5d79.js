function x(){}const Q=t=>t;function wt(t,e){for(const n in e)t[n]=e[n];return t}function lt(t){return t()}function nt(){return Object.create(null)}function T(t){t.forEach(lt)}function R(t){return typeof t=="function"}function Qt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let L;function Vt(t,e){return L||(L=document.createElement("a")),L.href=e,t===L.href}function $t(t){return Object.keys(t).length===0}function bt(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Xt(t,e,n){t.$$.on_destroy.push(bt(e,n))}function Yt(t,e,n,s){if(t){const i=ct(t,e,n,s);return t[0](i)}}function ct(t,e,n,s){return t[1]&&s?wt(n.ctx.slice(),t[1](s(e))):n.ctx}function Zt(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],r=Math.max(e.dirty.length,i.length);for(let a=0;a<r;a+=1)o[a]=e.dirty[a]|i[a];return o}return e.dirty|i}return e.dirty}function te(t,e,n,s,i,o){if(i){const r=ct(e,n,s,o);t.p(r,i)}}function ee(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function ne(t){return t&&R(t.destroy)?t.destroy:x}const at=typeof window<"u";let V=at?()=>window.performance.now():()=>Date.now(),X=at?t=>requestAnimationFrame(t):x;const N=new Set;function ut(t){N.forEach(e=>{e.c(t)||(N.delete(e),e.f())}),N.size!==0&&X(ut)}function Y(t){let e;return N.size===0&&X(ut),{promise:new Promise(n=>{N.add(e={c:t,f:n})}),abort(){N.delete(e)}}}let W=!1;function vt(){W=!0}function Et(){W=!1}function Nt(t,e,n,s){for(;t<e;){const i=t+(e-t>>1);n(i)<=s?t=i+1:e=i}return t}function Tt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let i=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,f=(i>0&&e[n[i]].claim_order<=c?i+1:Nt(1,i,_=>e[n[_]].claim_order,c))-1;s[l]=n[f]+1;const u=f+1;n[u]=l,i=Math.max(u,i)}const o=[],r=[];let a=e.length-1;for(let l=n[i]+1;l!=0;l=s[l-1]){for(o.push(e[l-1]);a>=l;a--)r.push(e[a]);a--}for(;a>=0;a--)r.push(e[a]);o.reverse(),r.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<r.length;l++){for(;c<o.length&&r[l].claim_order>=o[c].claim_order;)c++;const f=c<o.length?o[c]:null;t.insertBefore(r[l],f)}}function kt(t,e){t.appendChild(e)}function ft(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function At(t){const e=Z("style");return Ct(ft(t),e),e.sheet}function Ct(t,e){return kt(t.head||t,e),e.sheet}function St(t,e){if(W){for(Tt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Mt(t,e,n){t.insertBefore(e,n||null)}function Dt(t,e,n){W&&!n?St(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function M(t){t.parentNode&&t.parentNode.removeChild(t)}function Z(t){return document.createElement(t)}function Ht(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function tt(t){return document.createTextNode(t)}function ie(){return tt(" ")}function se(){return tt("")}function re(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function oe(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Rt(t){return Array.from(t.childNodes)}function _t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function dt(t,e,n,s,i=!1){_t(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const a=t[r];if(e(a)){const l=n(a);return l===void 0?t.splice(r,1):t[r]=l,i||(t.claim_info.last_index=r),a}}for(let r=t.claim_info.last_index-1;r>=0;r--){const a=t[r];if(e(a)){const l=n(a);return l===void 0?t.splice(r,1):t[r]=l,i?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,a}}return s()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function jt(t,e,n,s){return dt(t,i=>i.nodeName===e,i=>{const o=[];for(let r=0;r<i.attributes.length;r++){const a=i.attributes[r];n[a.name]||o.push(a.name)}o.forEach(r=>i.removeAttribute(r))},()=>s(e))}function le(t,e,n){return jt(t,e,n,Z)}function Bt(t,e){return dt(t,n=>n.nodeType===3,n=>{const s=""+e;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>tt(e),!0)}function ce(t){return Bt(t," ")}function it(t,e,n){for(let s=n;s<t.length;s+=1){const i=t[s];if(i.nodeType===8&&i.textContent.trim()===e)return s}return t.length}function ae(t,e){const n=it(t,"HTML_TAG_START",0),s=it(t,"HTML_TAG_END",n);if(n===s)return new st(void 0,e);_t(t);const i=t.splice(n,s-n+1);M(i[0]),M(i[i.length-1]);const o=i.slice(1,i.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new st(o,e)}function ue(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function fe(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function Lt(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}function _e(t,e){const n=[];let s=0;for(const i of e.childNodes)if(i.nodeType===8){const o=i.textContent.trim();o===`HEAD_${t}_END`?(s-=1,n.push(i)):o===`HEAD_${t}_START`&&(s+=1,n.push(i))}else s>0&&n.push(i);return n}class Ot{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,s=null){this.e||(this.is_svg?this.e=Ht(n.nodeName):this.e=Z(n.nodeName),this.t=n,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Mt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(M)}}class st extends Ot{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Dt(this.t,this.n[n],e)}}function de(t,e){return new t(e)}const z=new Map;let F=0;function Pt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function qt(t,e){const n={stylesheet:At(e),rules:{}};return z.set(t,n),n}function et(t,e,n,s,i,o,r,a=0){const l=16.666/s;let c=`{
`;for(let m=0;m<=1;m+=l){const y=e+(n-e)*o(m);c+=m*100+`%{${r(y,1-y)}}
`}const f=c+`100% {${r(n,1-n)}}
}`,u=`__svelte_${Pt(f)}_${a}`,_=ft(t),{stylesheet:d,rules:h}=z.get(_)||qt(_,t);h[u]||(h[u]=!0,d.insertRule(`@keyframes ${u} ${f}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${u} ${s}ms linear ${i}ms 1 both`,F+=1,u}function G(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),F-=i,F||zt())}function zt(){X(()=>{F||(z.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&M(e)}),z.clear())})}function he(t,e,n,s){if(!e)return x;const i=t.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return x;const{delay:o=0,duration:r=300,easing:a=Q,start:l=V()+o,end:c=l+r,tick:f=x,css:u}=n(t,{from:e,to:i},s);let _=!0,d=!1,h;function g(){u&&(h=et(t,0,1,r,o,a,u)),o||(d=!0)}function m(){u&&G(t,h),_=!1}return Y(y=>{if(!d&&y>=l&&(d=!0),d&&y>=c&&(f(1,0),m()),!_)return!1;if(d){const E=y-l,b=0+1*a(E/r);f(b,1-b)}return!0}),g(),f(0,1),m}function me(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:s}=e,i=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=s,Ft(t,i)}}function Ft(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const s=getComputedStyle(t),i=s.transform==="none"?"":s.transform;t.style.transform=`${i} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let D;function S(t){D=t}function j(){if(!D)throw new Error("Function called outside component initialization");return D}function pe(t){j().$$.before_update.push(t)}function ye(t){j().$$.on_mount.push(t)}function ge(t){j().$$.after_update.push(t)}function xe(t){j().$$.on_destroy.push(t)}function we(t,e){return j().$$.context.set(t,e),e}const C=[],rt=[],P=[],ot=[],ht=Promise.resolve();let K=!1;function mt(){K||(K=!0,ht.then(pt))}function $e(){return mt(),ht}function H(t){P.push(t)}const J=new Set;let O=0;function pt(){const t=D;do{for(;O<C.length;){const e=C[O];O++,S(e),Gt(e.$$)}for(S(null),C.length=0,O=0;rt.length;)rt.pop()();for(let e=0;e<P.length;e+=1){const n=P[e];J.has(n)||(J.add(n),n())}P.length=0}while(C.length);for(;ot.length;)ot.pop()();K=!1,J.clear(),S(t)}function Gt(t){if(t.fragment!==null){t.update(),T(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}let A;function yt(){return A||(A=Promise.resolve(),A.then(()=>{A=null})),A}function U(t,e,n){t.dispatchEvent(Lt(`${e?"intro":"outro"}${n}`))}const q=new Set;let v;function be(){v={r:0,c:[],p:v}}function ve(){v.r||T(v.c),v=v.p}function gt(t,e){t&&t.i&&(q.delete(t),t.i(e))}function Ut(t,e,n,s){if(t&&t.o){if(q.has(t))return;q.add(t),v.c.push(()=>{q.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const xt={duration:0};function Ee(t,e,n){const s={direction:"in"};let i=e(t,n,s),o=!1,r,a,l=0;function c(){r&&G(t,r)}function f(){const{delay:_=0,duration:d=300,easing:h=Q,tick:g=x,css:m}=i||xt;m&&(r=et(t,0,1,d,_,h,m,l++)),g(0,1);const y=V()+_,E=y+d;a&&a.abort(),o=!0,H(()=>U(t,!0,"start")),a=Y(b=>{if(o){if(b>=E)return g(1,0),U(t,!0,"end"),c(),o=!1;if(b>=y){const k=h((b-y)/d);g(k,1-k)}}return o})}let u=!1;return{start(){u||(u=!0,G(t),R(i)?(i=i(s),yt().then(f)):f())},invalidate(){u=!1},end(){o&&(c(),o=!1)}}}function Ne(t,e,n){const s={direction:"out"};let i=e(t,n,s),o=!0,r;const a=v;a.r+=1;function l(){const{delay:c=0,duration:f=300,easing:u=Q,tick:_=x,css:d}=i||xt;d&&(r=et(t,1,0,f,c,u,d));const h=V()+c,g=h+f;H(()=>U(t,!1,"start")),Y(m=>{if(o){if(m>=g)return _(0,1),U(t,!1,"end"),--a.r||T(a.c),!1;if(m>=h){const y=u((m-h)/f);_(1-y,y)}}return o})}return R(i)?yt().then(()=>{i=i(s),l()}):l(),{end(c){c&&i.tick&&i.tick(1,0),o&&(r&&G(t,r),o=!1)}}}const Te=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ke(t,e){t.d(1),e.delete(t.key)}function Wt(t,e){Ut(t,1,1,()=>{e.delete(t.key)})}function Ae(t,e){t.f(),Wt(t,e)}function Ce(t,e,n,s,i,o,r,a,l,c,f,u){let _=t.length,d=o.length,h=_;const g={};for(;h--;)g[t[h].key]=h;const m=[],y=new Map,E=new Map;for(h=d;h--;){const p=u(i,o,h),w=n(p);let $=r.get(w);$?s&&$.p(p,e):($=c(w,p),$.c()),y.set(w,m[h]=$),w in g&&E.set(w,Math.abs(h-g[w]))}const b=new Set,k=new Set;function I(p){gt(p,1),p.m(a,f),r.set(p.key,p),f=p.first,d--}for(;_&&d;){const p=m[d-1],w=t[_-1],$=p.key,B=w.key;p===w?(f=p.first,_--,d--):y.has(B)?!r.has($)||b.has($)?I(p):k.has(B)?_--:E.get($)>E.get(B)?(k.add($),I(p)):(b.add(B),_--):(l(w,r),_--)}for(;_--;){const p=t[_];y.has(p.key)||l(p,r)}for(;d;)I(m[d-1]);return m}function Se(t){t&&t.c()}function Me(t,e){t&&t.l(e)}function It(t,e,n,s){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),s||H(()=>{const r=t.$$.on_mount.map(lt).filter(R);t.$$.on_destroy?t.$$.on_destroy.push(...r):T(r),t.$$.on_mount=[]}),o.forEach(H)}function Jt(t,e){const n=t.$$;n.fragment!==null&&(T(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Kt(t,e){t.$$.dirty[0]===-1&&(C.push(t),mt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function De(t,e,n,s,i,o,r,a=[-1]){const l=D;S(t);const c=t.$$={fragment:null,ctx:[],props:o,update:x,not_equal:i,bound:nt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:nt(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};r&&r(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(u,_,...d)=>{const h=d.length?d[0]:_;return c.ctx&&i(c.ctx[u],c.ctx[u]=h)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](h),f&&Kt(t,u)),_}):[],c.update(),f=!0,T(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){vt();const u=Rt(e.target);c.fragment&&c.fragment.l(u),u.forEach(M)}else c.fragment&&c.fragment.c();e.intro&&gt(t.$$.fragment),It(t,e.target,e.anchor,e.customElement),Et(),pt()}S(l)}class He{$destroy(){Jt(this,1),this.$destroy=x}$on(e,n){if(!R(n))return x;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!$t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{rt as $,$e as A,x as B,Yt as C,te as D,ee as E,Zt as F,St as G,Xt as H,H as I,Ee as J,R as K,wt as L,_e as M,re as N,Ce as O,pe as P,xe as Q,Te as R,He as S,Vt as T,Ne as U,T as V,ke as W,me as X,he as Y,ne as Z,Ae as _,ie as a,st as a0,ae as a1,we as a2,Dt as b,ce as c,ve as d,se as e,gt as f,be as g,M as h,De as i,ge as j,Z as k,le as l,Rt as m,oe as n,ye as o,fe as p,tt as q,Bt as r,Qt as s,Ut as t,ue as u,de as v,Se as w,Me as x,It as y,Jt as z};