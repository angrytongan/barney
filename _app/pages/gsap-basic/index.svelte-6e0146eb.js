import{S as j,i as q,s as A,e as v,t as k,k as $,j as w,c as x,a as y,g as E,d as u,n as S,m as D,b as L,f as _,D as m,o as M,h as N,x as h,u as b,v as B,l as T,w as C,M as F,A as G,W as H,r as U,$ as W,a0 as g}from"../../chunks/vendor-290f3b74.js";import{L as z}from"../../chunks/LoremIpsum-2c5c7f7e.js";function I(p,a,n){const l=p.slice();return l[2]=a[n],l[4]=n,l}function P(p){let a,n,l=p[2]+"",c,i,o,s,d,e;return o=new z({props:{num:p[4]+1}}),{c(){a=v("p"),n=v("span"),c=k(l),i=$(),w(o.$$.fragment),s=$(),this.h()},l(r){a=x(r,"P",{class:!0});var t=y(a);n=x(t,"SPAN",{class:!0});var f=y(n);c=E(f,l),f.forEach(u),i=S(t),D(o.$$.fragment,t),s=S(t),t.forEach(u),this.h()},h(){L(n,"class","counter svelte-ryq6v6"),L(a,"class",d="para-"+p[4]+" svelte-ryq6v6")},m(r,t){_(r,a,t),m(a,n),m(n,c),m(a,i),M(o,a,null),m(a,s),e=!0},p(r,t){(!e||t&1)&&l!==(l=r[2]+"")&&N(c,l)},i(r){e||(h(o.$$.fragment,r),e=!0)},o(r){b(o.$$.fragment,r),e=!1},d(r){r&&u(a),B(o)}}}function J(p){let a,n,l,c,i,o=p[0],s=[];for(let e=0;e<o.length;e+=1)s[e]=P(I(p,o,e));const d=e=>b(s[e],1,1,()=>{s[e]=null});return{c(){a=v("h2"),n=k("Lorem Ipsum"),l=$();for(let e=0;e<s.length;e+=1)s[e].c();c=T()},l(e){a=x(e,"H2",{});var r=y(a);n=E(r,"Lorem Ipsum"),r.forEach(u),l=S(e);for(let t=0;t<s.length;t+=1)s[t].l(e);c=T()},m(e,r){_(e,a,r),m(a,n),_(e,l,r);for(let t=0;t<s.length;t+=1)s[t].m(e,r);_(e,c,r),i=!0},p(e,[r]){if(r&1){o=e[0];let t;for(t=0;t<o.length;t+=1){const f=I(e,o,t);s[t]?(s[t].p(f,r),h(s[t],1)):(s[t]=P(f),s[t].c(),h(s[t],1),s[t].m(c.parentNode,c))}for(U(),t=o.length;t<s.length;t+=1)d(t);C()}},i(e){if(!i){for(let r=0;r<o.length;r+=1)h(s[r]);i=!0}},o(e){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)b(s[r]);i=!1},d(e){e&&u(a),e&&u(l),F(s,e),e&&u(c)}}}const K=10;function O(p,a,n){let l=Array(K).fill("0.0");const c=[];return G(()=>{W.exports.gsap.registerPlugin(g.exports.ScrollTrigger),g.exports.ScrollTrigger.defaults({start:"top 20%",end:"bottom +=10%",pin:!0,scrub:!0}),l.forEach((i,o)=>{c.push(g.exports.ScrollTrigger.create({trigger:`.para-${o}`,onUpdate:s=>n(0,l[o]=s.progress.toFixed(1),l)}))}),g.exports.ScrollTrigger.refresh()}),H(()=>{c.forEach(i=>{i.kill()})}),[l]}class V extends j{constructor(a){super();q(this,a,O,J,A,{})}}export{V as default};