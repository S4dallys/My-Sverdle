import{s as S,n as O,o as V,r as Y}from"../chunks/scheduler.BvLojk_z.js";import{S as z,i as A,e as m,s as N,m as P,c as b,n as x,h as T,o as d,j as y,g as h,p as G,d as C,b as w,f as E,k as v,q as U,l as I,r as j}from"../chunks/index.BfiHQKo6.js";function q(f){return(f==null?void 0:f.length)!==void 0?f:Array.from(f)}function H(f,e,t){const o=f.slice();return o[8]=e[t],o}function R(f,e,t){const o=f.slice();return o[11]=e[t],o[13]=t,o}function F(f){let e,t=f[11]+"",o;return{c(){e=m("li"),o=w(t),this.h()},l(s){e=b(s,"LI",{class:!0});var l=C(e);o=E(l,t),l.forEach(h),this.h()},h(){d(e,"class","white svelte-1f0ybev")},m(s,l){y(s,e,l),v(e,o)},p(s,l){l&8&&t!==(t=s[11]+"")&&I(o,t)},d(s){s&&h(e)}}}function W(f){let e,t=f[11]+"",o;return{c(){e=m("li"),o=w(t),this.h()},l(s){e=b(s,"LI",{class:!0});var l=C(e);o=E(l,t),l.forEach(h),this.h()},h(){d(e,"class","yellow svelte-1f0ybev")},m(s,l){y(s,e,l),v(e,o)},p(s,l){l&8&&t!==(t=s[11]+"")&&I(o,t)},d(s){s&&h(e)}}}function J(f){let e,t=f[11]+"",o;return{c(){e=m("li"),o=w(t),this.h()},l(s){e=b(s,"LI",{class:!0});var l=C(e);o=E(l,t),l.forEach(h),this.h()},h(){d(e,"class","green svelte-1f0ybev")},m(s,l){y(s,e,l),v(e,o)},p(s,l){l&8&&t!==(t=s[11]+"")&&I(o,t)},d(s){s&&h(e)}}}function B(f){let e,t;function o(n,u){return u&9&&(e=null),n[11]===n[0][n[13]]?J:(e==null&&(e=n[0].indexOf(n[11])!=-1),e?W:F)}let s=o(f,-1),l=s(f);return{c(){l.c(),t=P()},l(n){l.l(n),t=P()},m(n,u){l.m(n,u),y(n,t,u)},p(n,u){s===(s=o(n,u))&&l?l.p(n,u):(l.d(1),l=s(n),l&&(l.c(),l.m(t.parentNode,t)))},d(n){n&&h(t),l.d(n)}}}function D(f){let e,t=q(f[8]),o=[];for(let s=0;s<t.length;s+=1)o[s]=B(R(f,t,s));return{c(){e=m("ul");for(let s=0;s<o.length;s+=1)o[s].c();this.h()},l(s){e=b(s,"UL",{class:!0});var l=C(e);for(let n=0;n<o.length;n+=1)o[n].l(l);l.forEach(h),this.h()},h(){d(e,"class","guess-row svelte-1f0ybev")},m(s,l){y(s,e,l);for(let n=0;n<o.length;n+=1)o[n]&&o[n].m(e,null)},p(s,l){if(l&9){t=q(s[8]);let n;for(n=0;n<t.length;n+=1){const u=R(s,t,n);o[n]?o[n].p(u,l):(o[n]=B(u),o[n].c(),o[n].m(e,null))}for(;n<o.length;n+=1)o[n].d(1);o.length=t.length}},d(s){s&&h(e),G(o,s)}}}function K(f){let e,t,o="You lose!",s,l,n,u,a,_,c,i="Retry",r,p;return{c(){e=m("div"),t=m("h1"),t.textContent=o,s=N(),l=m("p"),n=w("The words was "),u=w(f[0]),a=w("."),_=N(),c=m("button"),c.textContent=i,this.h()},l(g){e=b(g,"DIV",{class:!0});var k=C(e);t=b(k,"H1",{class:!0,"data-svelte-h":!0}),x(t)!=="svelte-1n9im0v"&&(t.textContent=o),s=T(k),l=b(k,"P",{class:!0});var L=C(l);n=E(L,"The words was "),u=E(L,f[0]),a=E(L,"."),L.forEach(h),_=T(k),c=b(k,"BUTTON",{class:!0,"data-svelte-h":!0}),x(c)!=="svelte-1dpocm6"&&(c.textContent=i),k.forEach(h),this.h()},h(){d(t,"class","svelte-1f0ybev"),d(l,"class","svelte-1f0ybev"),c.autofocus=!0,d(c,"class","svelte-1f0ybev"),d(e,"class","bottom-div svelte-1f0ybev")},m(g,k){y(g,e,k),v(e,t),v(e,s),v(e,l),v(l,n),v(l,u),v(l,a),v(e,_),v(e,c),c.focus(),r||(p=U(c,"click",M),r=!0)},p(g,k){k&1&&I(u,g[0])},d(g){g&&h(e),r=!1,p()}}}function Q(f){let e,t,o="You win!",s,l,n="Retry",u,a;return{c(){e=m("div"),t=m("h1"),t.textContent=o,s=N(),l=m("button"),l.textContent=n,this.h()},l(_){e=b(_,"DIV",{class:!0});var c=C(e);t=b(c,"H1",{class:!0,"data-svelte-h":!0}),x(t)!=="svelte-qllmm0"&&(t.textContent=o),s=T(c),l=b(c,"BUTTON",{class:!0,"data-svelte-h":!0}),x(l)!=="svelte-1dpocm6"&&(l.textContent=n),c.forEach(h),this.h()},h(){d(t,"class","svelte-1f0ybev"),l.autofocus=!0,d(l,"class","svelte-1f0ybev"),d(e,"class","bottom-div svelte-1f0ybev")},m(_,c){y(_,e,c),v(e,t),v(e,s),v(e,l),l.focus(),u||(a=U(l,"click",M),u=!0)},p:O,d(_){_&&h(e),u=!1,a()}}}function X(f){let e,t,o,s,l,n,u,a,_;return{c(){e=m("form"),t=m("input"),o=N(),s=m("input"),l=N(),n=m("p"),u=w(f[1]),this.h()},l(c){e=b(c,"FORM",{id:!0,class:!0});var i=C(e);t=b(i,"INPUT",{type:!0,maxlength:!0}),o=T(i),s=b(i,"INPUT",{type:!0}),i.forEach(h),l=T(c),n=b(c,"P",{id:!0,class:!0});var r=C(n);u=E(r,f[1]),r.forEach(h),this.h()},h(){d(t,"type","text"),d(t,"maxlength","5"),t.autofocus=!0,d(s,"type","submit"),s.value="guess",d(e,"id","input-box"),d(e,"class","svelte-1f0ybev"),d(n,"id","unused"),d(n,"class","svelte-1f0ybev")},m(c,i){y(c,e,i),v(e,t),j(t,f[4]),v(e,o),v(e,s),y(c,l,i),y(c,n,i),v(n,u),t.focus(),a||(_=[U(t,"input",f[6]),U(e,"submit",f[5])],a=!0)},p(c,i){i&16&&t.value!==c[4]&&j(t,c[4]),i&2&&I(u,c[1])},d(c){c&&(h(e),h(l),h(n)),a=!1,Y(_)}}}function Z(f){let e,t="Wordle",o,s,l,n=q(f[3]),u=[];for(let i=0;i<n.length;i+=1)u[i]=D(H(f,n,i));function a(i,r){return i[2]?i[4]===i[0]?Q:K:X}let _=a(f),c=_(f);return{c(){e=m("h1"),e.textContent=t,o=N();for(let i=0;i<u.length;i+=1)u[i].c();s=N(),c.c(),l=P(),this.h()},l(i){e=b(i,"H1",{class:!0,"data-svelte-h":!0}),x(e)!=="svelte-bear57"&&(e.textContent=t),o=T(i);for(let r=0;r<u.length;r+=1)u[r].l(i);s=T(i),c.l(i),l=P(),this.h()},h(){d(e,"class","svelte-1f0ybev")},m(i,r){y(i,e,r),y(i,o,r);for(let p=0;p<u.length;p+=1)u[p]&&u[p].m(i,r);y(i,s,r),c.m(i,r),y(i,l,r)},p(i,[r]){if(r&9){n=q(i[3]);let p;for(p=0;p<n.length;p+=1){const g=H(i,n,p);u[p]?u[p].p(g,r):(u[p]=D(g),u[p].c(),u[p].m(s.parentNode,s))}for(;p<u.length;p+=1)u[p].d(1);u.length=n.length}_===(_=a(i))&&c?c.p(i,r):(c.d(1),c=_(i),c&&(c.c(),c.m(l.parentNode,l)))},i:O,o:O,d(i){i&&(h(e),h(o),h(s),h(l)),G(u,i),c.d(i)}}}const $="https://random-word-api.vercel.app/api?words=1&length=5";function M(){location.reload()}function ee(f,e,t){let o="hello",s="abcdefghijklmnopqrstuvwxyz".split("");V(async()=>{const r=await(await fetch($)).json();t(0,o=r[0])});let l=!1,n=["     ","     ","     ","     ","     "],u=0,a="";function _(){if(a.length==5){if(u==4||a===o){t(3,n[u]=a,n),t(2,l=!0);return}t(1,s=s.filter(i=>!a.includes(i))),t(3,n[u]=a,n),u++,t(4,a="")}}function c(){a=this.value,t(4,a)}return[o,s,l,n,a,_,c]}class se extends z{constructor(e){super(),A(this,e,ee,Z,S,{})}}export{se as component};
