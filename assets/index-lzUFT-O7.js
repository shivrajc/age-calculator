var Oe=Object.defineProperty;var ke=(e,t,n)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var se=(e,t,n)=>(ke(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();function T(){}function Se(e,t){for(const n in t)e[n]=t[n];return e}function ye(e){return e()}function me(){return Object.create(null)}function ne(e){e.forEach(ye)}function ve(e){return typeof e=="function"}function B(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function je(e){return Object.keys(e).length===0}function qe(e,t,n,r){if(e){const l=we(e,t,n,r);return e[0](l)}}function we(e,t,n,r){return e[1]&&r?Se(n.ctx.slice(),e[1](r(t))):n.ctx}function Ie(e,t,n,r){if(e[2]&&r){const l=e[2](r(n));if(t.dirty===void 0)return l;if(typeof l=="object"){const s=[],u=Math.max(t.dirty.length,l.length);for(let o=0;o<u;o+=1)s[o]=t.dirty[o]|l[o];return s}return t.dirty|l}return t.dirty}function Te(e,t,n,r,l,s){if(l){const u=we(t,n,r,s);e.p(u,l)}}function Fe(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let r=0;r<n;r++)t[r]=-1;return t}return-1}function f(e,t){e.appendChild(t)}function V(e,t,n){e.insertBefore(t,n||null)}function U(e){e.parentNode&&e.parentNode.removeChild(e)}function $(e){return document.createElement(e)}function F(e){return document.createTextNode(e)}function E(){return F(" ")}function Me(){return F("")}function le(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function De(e){return function(t){return t.preventDefault(),e.call(this,t)}}function p(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ue(e){return Array.from(e.childNodes)}function z(e,t){t=""+t,e.data!==t&&(e.data=t)}function S(e,t,n){e.classList.toggle(t,!!n)}function He(e,t,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:r})}let te;function ee(e){te=e}function Ne(){if(!te)throw new Error("Function called outside component initialization");return te}function Pe(e){Ne().$$.on_mount.push(e)}function Ye(){const e=Ne();return(t,n,{cancelable:r=!1}={})=>{const l=e.$$.callbacks[t];if(l){const s=He(t,n,{cancelable:r});return l.slice().forEach(u=>{u.call(e,s)}),!s.defaultPrevented}return!0}}const Z=[],pe=[];let x=[];const ge=[],Re=Promise.resolve();let ce=!1;function Ve(){ce||(ce=!0,Re.then(Ae))}function de(e){x.push(e)}const ue=new Set;let X=0;function Ae(){if(X!==0)return;const e=te;do{try{for(;X<Z.length;){const t=Z[X];X++,ee(t),ze(t.$$)}}catch(t){throw Z.length=0,X=0,t}for(ee(null),Z.length=0,X=0;pe.length;)pe.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];ue.has(n)||(ue.add(n),n())}x.length=0}while(Z.length);for(;ge.length;)ge.pop()();ce=!1,ue.clear(),ee(e)}function ze(e){if(e.fragment!==null){e.update(),ne(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(de)}}function Be(e){const t=[],n=[];x.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),x=t}const re=new Set;let W;function Ce(){W={r:0,c:[],p:W}}function Ee(){W.r||ne(W.c),W=W.p}function A(e,t){e&&e.i&&(re.delete(e),e.i(t))}function L(e,t,n,r){if(e&&e.o){if(re.has(e))return;re.add(e),W.c.push(()=>{re.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function j(e){e&&e.c()}function O(e,t,n){const{fragment:r,after_update:l}=e.$$;r&&r.m(t,n),de(()=>{const s=e.$$.on_mount.map(ye).filter(ve);e.$$.on_destroy?e.$$.on_destroy.push(...s):ne(s),e.$$.on_mount=[]}),l.forEach(de)}function k(e,t){const n=e.$$;n.fragment!==null&&(Be(n.after_update),ne(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ke(e,t){e.$$.dirty[0]===-1&&(Z.push(e),Ve(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function K(e,t,n,r,l,s,u=null,o=[-1]){const c=te;ee(e);const d=e.$$={fragment:null,ctx:[],props:s,update:T,not_equal:l,bound:me(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:me(),dirty:o,skip_bound:!1,root:t.target||c.$$.root};u&&u(d.root);let a=!1;if(d.ctx=n?n(e,t.props||{},(D,M,...g)=>{const m=g.length?g[0]:M;return d.ctx&&l(d.ctx[D],d.ctx[D]=m)&&(!d.skip_bound&&d.bound[D]&&d.bound[D](m),a&&Ke(e,D)),M}):[],d.update(),a=!0,ne(d.before_update),d.fragment=r?r(d.ctx):!1,t.target){if(t.hydrate){const D=Ue(t.target);d.fragment&&d.fragment.l(D),D.forEach(U)}else d.fragment&&d.fragment.c();t.intro&&A(e.$$.fragment),O(e,t.target,t.anchor),Ae()}ee(c)}class Q{constructor(){se(this,"$$");se(this,"$$set")}$destroy(){k(this,1),this.$destroy=T}$on(t,n){if(!ve(n))return T;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(t){this.$$set&&!je(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Qe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Qe);function Ge(e){let t,n,r,l,s,u;return{c(){t=$("div"),n=$("span"),r=F(e[1]),l=E(),s=$("span"),u=F(e[0]),p(n,"class","output-number svelte-sn0p7e"),p(s,"class","output-text svelte-sn0p7e"),p(t,"class","container svelte-sn0p7e")},m(o,c){V(o,t,c),f(t,n),f(n,r),f(t,l),f(t,s),f(s,u)},p(o,[c]){c&2&&z(r,o[1]),c&1&&z(u,o[0])},i:T,o:T,d(o){o&&U(t)}}}function Je(e,t,n){let{text:r=""}=t,{number:l="--"}=t;return e.$$set=s=>{"text"in s&&n(0,r=s.text),"number"in s&&n(1,l=s.number)},[r,l]}class oe extends Q{constructor(t){super(),K(this,t,Je,Ge,B,{text:0,number:1})}}function We(e){let t,n,r=e[0].toUpperCase()+"",l,s,u,o,c,d,a,D,M,g;return{c(){t=$("div"),n=$("label"),l=F(r),s=E(),u=$("input"),c=E(),d=$("div"),a=$("p"),D=F(e[2]),p(n,"for",e[0]),p(n,"class","svelte-1ujrsfb"),S(n,"label-error",e[2]!==null),p(u,"id",e[0]),p(u,"type","number"),p(u,"placeholder",o=e[1].toUpperCase()),p(u,"class","svelte-1ujrsfb"),S(u,"input-error",e[2]!==null),p(a,"class","error-label svelte-1ujrsfb"),S(a,"error",e[2]!==null),p(d,"class","error-container svelte-1ujrsfb"),p(t,"class","container svelte-1ujrsfb")},m(m,y){V(m,t,y),f(t,n),f(n,l),f(t,s),f(t,u),f(t,c),f(t,d),f(d,a),f(a,D),M||(g=le(u,"input",e[4]),M=!0)},p(m,[y]){y&1&&r!==(r=m[0].toUpperCase()+"")&&z(l,r),y&1&&p(n,"for",m[0]),y&4&&S(n,"label-error",m[2]!==null),y&1&&p(u,"id",m[0]),y&2&&o!==(o=m[1].toUpperCase())&&p(u,"placeholder",o),y&4&&S(u,"input-error",m[2]!==null),y&4&&z(D,m[2]),y&4&&S(a,"error",m[2]!==null)},i:T,o:T,d(m){m&&U(t),M=!1,g()}}}function Xe(e,t,n){let{label:r="Label"}=t,{placeholder:l="Number"}=t,s="",u=null;const o=Ye();function c(a){s=a,s===""&&n(2,u="This field is required"),r==="DAY"&&(s<1||s>31?(n(2,u="Must be a valid day"),s=""):n(2,u=null)),r==="MONTH"&&(s<1||s>12?(n(2,u="Must be a valid month"),s=""):n(2,u=null)),r==="YEAR"&&(s>new Date().getFullYear()?(n(2,u="Must be in the past"),s=""):s<1?(n(2,u="Must be a valid year"),s=""):n(2,u=null)),o("input-change",{label:r,error:u,value:s})}const d=a=>c(a.target.value);return e.$$set=a=>{"label"in a&&n(0,r=a.label),"placeholder"in a&&n(1,l=a.placeholder)},[r,l,u,c,d]}class ae extends Q{constructor(t){super(),K(this,t,Xe,We,B,{label:0,placeholder:1})}}const Le="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='46'%20height='44'%20viewBox='0%200%2046%2044'%3e%3cg%20fill='none'%20stroke='%23FFF'%20stroke-width='2'%3e%3cpath%20d='M1%2022.019C8.333%2021.686%2023%2025.616%2023%2044M23%2044V0M45%2022.019C37.667%2021.686%2023%2025.616%2023%2044'/%3e%3c/g%3e%3c/svg%3e";function Ze(e){let t,n,r,l,s,u,o,c,d,a,D,M,g,m,y,q,H,N,v,b,h,Y,_,w,I,P;return u=new ae({props:{label:"DAY",placeholder:"DD"}}),u.$on("input-change",e[4]),c=new ae({props:{label:"MONTH",placeholder:"MM"}}),c.$on("input-change",e[4]),a=new ae({props:{label:"YEAR",placeholder:"YYYY"}}),a.$on("input-change",e[4]),v=new oe({props:{number:e[0],text:e[0]==="1"?"year":"years"}}),h=new oe({props:{number:e[1],text:e[1]==="1"?"month":"months"}}),_=new oe({props:{number:e[2],text:e[2]==="1"?"day":"days"}}),{c(){t=$("main"),n=$("div"),r=$("div"),l=$("form"),s=$("div"),j(u.$$.fragment),o=E(),j(c.$$.fragment),d=E(),j(a.$$.fragment),D=E(),M=$("div"),g=$("div"),m=$("p"),m.textContent="Must be a valid date",y=E(),q=$("button"),q.innerHTML=`<img src="${Le}" alt="" class="svelte-32o7s0"/>`,H=E(),N=$("div"),j(v.$$.fragment),b=E(),j(h.$$.fragment),Y=E(),j(_.$$.fragment),p(s,"class","input-controls svelte-32o7s0"),p(m,"class","invalid-date-label svelte-32o7s0"),S(m,"invalid-date",e[3]),p(q,"type","submit"),p(q,"class","svelte-32o7s0"),p(g,"class","hr svelte-32o7s0"),p(M,"class","button-group"),p(N,"class","output"),p(r,"class","form"),p(n,"class","container svelte-32o7s0"),p(t,"class","svelte-32o7s0")},m(i,C){V(i,t,C),f(t,n),f(n,r),f(r,l),f(l,s),O(u,s,null),f(s,o),O(c,s,null),f(s,d),O(a,s,null),f(l,D),f(l,M),f(M,g),f(g,m),f(g,y),f(g,q),f(l,H),f(l,N),O(v,N,null),f(N,b),O(h,N,null),f(N,Y),O(_,N,null),w=!0,I||(P=le(l,"submit",De(e[5])),I=!0)},p(i,[C]){(!w||C&8)&&S(m,"invalid-date",i[3]);const R={};C&1&&(R.number=i[0]),C&1&&(R.text=i[0]==="1"?"year":"years"),v.$set(R);const G={};C&2&&(G.number=i[1]),C&2&&(G.text=i[1]==="1"?"month":"months"),h.$set(G);const J={};C&4&&(J.number=i[2]),C&4&&(J.text=i[2]==="1"?"day":"days"),_.$set(J)},i(i){w||(A(u.$$.fragment,i),A(c.$$.fragment,i),A(a.$$.fragment,i),A(v.$$.fragment,i),A(h.$$.fragment,i),A(_.$$.fragment,i),w=!0)},o(i){L(u.$$.fragment,i),L(c.$$.fragment,i),L(a.$$.fragment,i),L(v.$$.fragment,i),L(h.$$.fragment,i),L(_.$$.fragment,i),w=!1},d(i){i&&U(t),k(u),k(c),k(a),k(v),k(h),k(_),I=!1,P()}}}function xe(e){return!isNaN(new Date(e))}function et(e,t,n){let r="",l="",s="",u="--",o="--",c="--",d=!1;function a(){n(3,d=!1),n(0,u="--"),n(1,o="--"),n(2,c="--")}function D(g){g.detail.label==="DAY"&&(r=g.detail.value,a()),g.detail.label==="MONTH"&&(l=g.detail.value,a()),g.detail.label==="YEAR"&&(s=g.detail.value,a())}function M(){if(r===""||l===""||s==="")return;const g=`${s}/${l}/${r}`;if(!xe(g)){n(3,d=!0);return}const m=new Date(g);if(m.getDate()!==Number(r)||m.getMonth()+1!==Number(l)||m.getFullYear()!==Number(s)){n(3,d=!0);return}const y=new Date,q=y.getUTCFullYear(),H=y.getMonth()+1,N=y.getDate();let v=q-Number(s),b=H-Number(l),h=N-Number(r),Y,_,w;function I(P,i){return[31,i%4===0&&(i%100!=0||i%400===0)?29:28,31,30,31,30,31,31,30,31,30,31][P-1]}b===0&&h<0?(Y=v-1,_=11,w=I(l,s)-r+N):b===0&&h===0?(Y=v,_=0,w=0):b===0&&h>0?(Y=v,_=0,w=h):b<0&&h<0?(Y=v-1,_=11+b,w=I(l,s)-r+N):b<0&&h===0?(Y=v-1,_=12+b,w=0):b<0&&h>0?(Y=v-1,_=12+b,w=h):b>0&&h<0?(Y=v,_=b-1,w=I(l,s)-r+N):b>0&&h===0?(Y=v,_=b,w=0):b>0&&h>0&&(Y=v,_=b,w=h),n(0,u=String(Y)),n(1,o=String(_)),n(2,c=String(w))}return[u,o,c,d,D,M]}class tt extends Q{constructor(t){super(),K(this,t,et,Ze,B,{})}}function nt(e){let t,n,r,l,s,u;return{c(){t=$("div"),n=$("span"),r=F(e[1]),l=E(),s=$("span"),u=F(e[0]),p(n,"class","output-number svelte-z1eb1j"),p(s,"class","output-text svelte-z1eb1j"),p(t,"class","container svelte-z1eb1j")},m(o,c){V(o,t,c),f(t,n),f(n,r),f(t,l),f(t,s),f(s,u)},p(o,[c]){c&2&&z(r,o[1]),c&1&&z(u,o[0])},i:T,o:T,d(o){o&&U(t)}}}function rt(e,t,n){let{text:r=""}=t,{number:l="--"}=t;return e.$$set=s=>{"text"in s&&n(0,r=s.text),"number"in s&&n(1,l=s.number)},[r,l]}class ie extends Q{constructor(t){super(),K(this,t,rt,nt,B,{text:0,number:1})}}function lt(e){let t,n,r=e[0].toUpperCase()+"",l,s,u,o,c,d,a,D,M,g;return{c(){t=$("div"),n=$("label"),l=F(r),s=E(),u=$("input"),c=E(),d=$("div"),a=$("p"),D=F(e[2]),p(n,"for",e[0]),p(n,"class","svelte-a5gog4"),S(n,"label-error",e[2]!==null),p(u,"id",e[0]),p(u,"type","number"),p(u,"placeholder",o=e[1].toUpperCase()),p(u,"class","svelte-a5gog4"),S(u,"input-error",e[2]!==null),p(a,"class","error-label svelte-a5gog4"),S(a,"error",e[2]!==null),p(d,"class","error-container svelte-a5gog4"),p(t,"class","container svelte-a5gog4")},m(m,y){V(m,t,y),f(t,n),f(n,l),f(t,s),f(t,u),f(t,c),f(t,d),f(d,a),f(a,D),M||(g=le(u,"input",e[4]),M=!0)},p(m,[y]){y&1&&r!==(r=m[0].toUpperCase()+"")&&z(l,r),y&1&&p(n,"for",m[0]),y&4&&S(n,"label-error",m[2]!==null),y&1&&p(u,"id",m[0]),y&2&&o!==(o=m[1].toUpperCase())&&p(u,"placeholder",o),y&4&&S(u,"input-error",m[2]!==null),y&4&&z(D,m[2]),y&4&&S(a,"error",m[2]!==null)},i:T,o:T,d(m){m&&U(t),M=!1,g()}}}function st(e,t,n){let{label:r="Label"}=t,{placeholder:l="Number"}=t,s="",u=null;const o=Ye();function c(a){s=a,s===""&&n(2,u="This field is required"),r==="DAY"&&(s<1||s>31?(n(2,u="Must be a valid day"),s=""):n(2,u=null)),r==="MONTH"&&(s<1||s>12?(n(2,u="Must be a valid month"),s=""):n(2,u=null)),r==="YEAR"&&(s>new Date().getFullYear()?(n(2,u="Must be in the past"),s=""):s<1?(n(2,u="Must be a valid year"),s=""):n(2,u=null)),o("input-change",{label:r,error:u,value:s})}const d=a=>c(a.target.value);return e.$$set=a=>{"label"in a&&n(0,r=a.label),"placeholder"in a&&n(1,l=a.placeholder)},[r,l,u,c,d]}class fe extends Q{constructor(t){super(),K(this,t,st,lt,B,{label:0,placeholder:1})}}function ut(e){let t,n,r,l,s,u,o,c,d,a,D,M,g,m,y,q,H,N,v,b,h,Y,_,w,I,P;return u=new fe({props:{label:"DAY",placeholder:"DD"}}),u.$on("input-change",e[4]),c=new fe({props:{label:"MONTH",placeholder:"MM"}}),c.$on("input-change",e[4]),a=new fe({props:{label:"YEAR",placeholder:"YYYY"}}),a.$on("input-change",e[4]),v=new ie({props:{number:e[0],text:e[0]==="1"?"year":"years"}}),h=new ie({props:{number:e[1],text:e[1]==="1"?"month":"months"}}),_=new ie({props:{number:e[2],text:e[2]==="1"?"day":"days"}}),{c(){t=$("main"),n=$("div"),r=$("div"),l=$("form"),s=$("div"),j(u.$$.fragment),o=E(),j(c.$$.fragment),d=E(),j(a.$$.fragment),D=E(),M=$("div"),g=$("div"),m=$("p"),m.textContent="Must be a valid date",y=E(),q=$("button"),q.innerHTML=`<img src="${Le}" alt="" class="svelte-kwoycp"/>`,H=E(),N=$("div"),j(v.$$.fragment),b=E(),j(h.$$.fragment),Y=E(),j(_.$$.fragment),p(s,"class","input-controls svelte-kwoycp"),p(m,"class","invalid-date-label svelte-kwoycp"),S(m,"invalid-date",e[3]),p(q,"type","submit"),p(q,"class","svelte-kwoycp"),p(g,"class","hr svelte-kwoycp"),p(M,"class","button-group"),p(N,"class","output"),p(r,"class","form"),p(n,"class","container svelte-kwoycp"),p(t,"class","svelte-kwoycp")},m(i,C){V(i,t,C),f(t,n),f(n,r),f(r,l),f(l,s),O(u,s,null),f(s,o),O(c,s,null),f(s,d),O(a,s,null),f(l,D),f(l,M),f(M,g),f(g,m),f(g,y),f(g,q),f(l,H),f(l,N),O(v,N,null),f(N,b),O(h,N,null),f(N,Y),O(_,N,null),w=!0,I||(P=le(l,"submit",De(e[5])),I=!0)},p(i,[C]){(!w||C&8)&&S(m,"invalid-date",i[3]);const R={};C&1&&(R.number=i[0]),C&1&&(R.text=i[0]==="1"?"year":"years"),v.$set(R);const G={};C&2&&(G.number=i[1]),C&2&&(G.text=i[1]==="1"?"month":"months"),h.$set(G);const J={};C&4&&(J.number=i[2]),C&4&&(J.text=i[2]==="1"?"day":"days"),_.$set(J)},i(i){w||(A(u.$$.fragment,i),A(c.$$.fragment,i),A(a.$$.fragment,i),A(v.$$.fragment,i),A(h.$$.fragment,i),A(_.$$.fragment,i),w=!0)},o(i){L(u.$$.fragment,i),L(c.$$.fragment,i),L(a.$$.fragment,i),L(v.$$.fragment,i),L(h.$$.fragment,i),L(_.$$.fragment,i),w=!1},d(i){i&&U(t),k(u),k(c),k(a),k(v),k(h),k(_),I=!1,P()}}}function ot(e){return!isNaN(new Date(e))}function at(e,t,n){let r="",l="",s="",u="--",o="--",c="--",d=!1;function a(){n(3,d=!1),n(0,u="--"),n(1,o="--"),n(2,c="--")}function D(g){g.detail.label==="DAY"&&(r=g.detail.value,a()),g.detail.label==="MONTH"&&(l=g.detail.value,a()),g.detail.label==="YEAR"&&(s=g.detail.value,a())}function M(){if(r===""||l===""||s==="")return;const g=`${s}/${l}/${r}`;if(!ot(g)){n(3,d=!0);return}const m=new Date(g);if(m.getDate()!==Number(r)||m.getMonth()+1!==Number(l)||m.getFullYear()!==Number(s)){n(3,d=!0);return}const y=new Date,q=y.getUTCFullYear(),H=y.getMonth()+1,N=y.getDate();let v=q-Number(s),b=H-Number(l),h=N-Number(r),Y,_,w;function I(P,i){return[31,i%4===0&&(i%100!=0||i%400===0)?29:28,31,30,31,30,31,31,30,31,30,31][P-1]}b===0&&h<0?(Y=v-1,_=11,w=I(l,s)-r+N):b===0&&h===0?(Y=v,_=0,w=0):b===0&&h>0?(Y=v,_=0,w=h):b<0&&h<0?(Y=v-1,_=11+b,w=I(l,s)-r+N):b<0&&h===0?(Y=v-1,_=12+b,w=0):b<0&&h>0?(Y=v-1,_=12+b,w=h):b>0&&h<0?(Y=v,_=b-1,w=I(l,s)-r+N):b>0&&h===0?(Y=v,_=b,w=0):b>0&&h>0&&(Y=v,_=b,w=h),n(0,u=String(Y)),n(1,o=String(_)),n(2,c=String(w))}return[u,o,c,d,D,M]}class it extends Q{constructor(t){super(),K(this,t,at,ut,B,{})}}const ft=e=>({matches:e&1}),he=e=>({matches:e[0]});function ct(e){let t;const n=e[4].default,r=qe(n,e,e[3],he);return{c(){r&&r.c()},m(l,s){r&&r.m(l,s),t=!0},p(l,[s]){r&&r.p&&(!t||s&9)&&Te(r,n,l,l[3],t?Ie(n,l[3],s,ft):Fe(l[3]),he)},i(l){t||(A(r,l),t=!0)},o(l){L(r,l),t=!1},d(l){r&&r.d(l)}}}function dt(e,t,n){let{$$slots:r={},$$scope:l}=t,{query:s}=t,u,o,c=!1,d=!1;Pe(()=>(n(2,c=!0),()=>{D()}));function a(M){u=window.matchMedia(M),o=g=>n(0,d=g.matches),u.addEventListener("change",o),n(0,d=u.matches)}function D(){u&&o&&u.removeListener(o)}return e.$$set=M=>{"query"in M&&n(1,s=M.query),"$$scope"in M&&n(3,l=M.$$scope)},e.$$.update=()=>{e.$$.dirty&6&&c&&(D(),a(s))},[d,s,c,l,r]}class be extends Q{constructor(t){super(),K(this,t,dt,ct,B,{query:1})}}function _e(e){let t,n;return t=new tt({}),{c(){j(t.$$.fragment)},m(r,l){O(t,r,l),n=!0},i(r){n||(A(t.$$.fragment,r),n=!0)},o(r){L(t.$$.fragment,r),n=!1},d(r){k(t,r)}}}function mt(e){let t,n,r=e[0]&&_e();return{c(){r&&r.c(),t=Me()},m(l,s){r&&r.m(l,s),V(l,t,s),n=!0},p(l,s){l[0]?r?s&1&&A(r,1):(r=_e(),r.c(),A(r,1),r.m(t.parentNode,t)):r&&(Ce(),L(r,1,1,()=>{r=null}),Ee())},i(l){n||(A(r),n=!0)},o(l){L(r),n=!1},d(l){l&&U(t),r&&r.d(l)}}}function $e(e){let t,n;return t=new it({}),{c(){j(t.$$.fragment)},m(r,l){O(t,r,l),n=!0},i(r){n||(A(t.$$.fragment,r),n=!0)},o(r){L(t.$$.fragment,r),n=!1},d(r){k(t,r)}}}function pt(e){let t,n,r=e[0]&&$e();return{c(){r&&r.c(),t=Me()},m(l,s){r&&r.m(l,s),V(l,t,s),n=!0},p(l,s){l[0]?r?s&1&&A(r,1):(r=$e(),r.c(),A(r,1),r.m(t.parentNode,t)):r&&(Ce(),L(r,1,1,()=>{r=null}),Ee())},i(l){n||(A(r),n=!0)},o(l){L(r),n=!1},d(l){l&&U(t),r&&r.d(l)}}}function gt(e){let t,n,r,l,s;return n=new be({props:{query:"(min-width: 500px)",$$slots:{default:[mt,({matches:u})=>({0:u}),({matches:u})=>u?1:0]},$$scope:{ctx:e}}}),l=new be({props:{query:"(max-width: 500px)",$$slots:{default:[pt,({matches:u})=>({0:u}),({matches:u})=>u?1:0]},$$scope:{ctx:e}}}),{c(){t=$("main"),j(n.$$.fragment),r=E(),j(l.$$.fragment)},m(u,o){V(u,t,o),O(n,t,null),f(t,r),O(l,t,null),s=!0},p(u,[o]){const c={};o&3&&(c.$$scope={dirty:o,ctx:u}),n.$set(c);const d={};o&3&&(d.$$scope={dirty:o,ctx:u}),l.$set(d)},i(u){s||(A(n.$$.fragment,u),A(l.$$.fragment,u),s=!0)},o(u){L(n.$$.fragment,u),L(l.$$.fragment,u),s=!1},d(u){u&&U(t),k(n),k(l)}}}class ht extends Q{constructor(t){super(),K(this,t,null,gt,B,{})}}new ht({target:document.getElementById("app")});
