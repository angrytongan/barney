import{S as B,i as C,s as F,e as b,t as L,k as d,j as T,c as k,a as S,g as I,d as _,n as v,m as P,b as j,f as h,D as g,o as w,h as G,x as $,u as x,v as A,l as D,w as H,M as U,A as W,W as z,r as J,a2 as K,a3 as y}from"../../chunks/vendor-656fd6d9.js";import{L as M}from"../../chunks/LoremIpsum-c37d5197.js";function N(u,a,n){const l=u.slice();return l[2]=a[n],l[4]=n,l}function q(u){let a,n,l=u[2]+"",c,i,o,f,m,t;return o=new M({props:{num:u[4]+1}}),{c(){a=b("p"),n=b("span"),c=L(l),i=d(),T(o.$$.fragment),f=d(),this.h()},l(p){a=k(p,"P",{class:!0});var e=S(a);n=k(e,"SPAN",{class:!0});var r=S(n);c=I(r,l),r.forEach(_),i=v(e),P(o.$$.fragment,e),f=v(e),e.forEach(_),this.h()},h(){j(n,"class","counter svelte-b5y31v"),j(a,"class",m="para para-"+u[4]+" svelte-b5y31v")},m(p,e){h(p,a,e),g(a,n),g(n,c),g(a,i),w(o,a,null),g(a,f),t=!0},p(p,e){(!t||e&1)&&l!==(l=p[2]+"")&&G(c,l)},i(p){t||($(o.$$.fragment,p),t=!0)},o(p){x(o.$$.fragment,p),t=!1},d(p){p&&_(a),A(o)}}}function O(u){let a,n,l,c,i,o,f;c=new M({props:{num:3}});let m=u[0],t=[];for(let e=0;e<m.length;e+=1)t[e]=q(N(u,m,e));const p=e=>x(t[e],1,1,()=>{t[e]=null});return{c(){a=b("h2"),n=L("Lorem Ipsum"),l=d(),T(c.$$.fragment),i=d();for(let e=0;e<t.length;e+=1)t[e].c();o=D()},l(e){a=k(e,"H2",{});var r=S(a);n=I(r,"Lorem Ipsum"),r.forEach(_),l=v(e),P(c.$$.fragment,e),i=v(e);for(let s=0;s<t.length;s+=1)t[s].l(e);o=D()},m(e,r){h(e,a,r),g(a,n),h(e,l,r),w(c,e,r),h(e,i,r);for(let s=0;s<t.length;s+=1)t[s].m(e,r);h(e,o,r),f=!0},p(e,[r]){if(r&1){m=e[0];let s;for(s=0;s<m.length;s+=1){const E=N(e,m,s);t[s]?(t[s].p(E,r),$(t[s],1)):(t[s]=q(E),t[s].c(),$(t[s],1),t[s].m(o.parentNode,o))}for(J(),s=m.length;s<t.length;s+=1)p(s);H()}},i(e){if(!f){$(c.$$.fragment,e);for(let r=0;r<m.length;r+=1)$(t[r]);f=!0}},o(e){x(c.$$.fragment,e),t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)x(t[r]);f=!1},d(e){e&&_(a),e&&_(l),A(c,e),e&&_(i),U(t,e),e&&_(o)}}}const Q=10;function R(u,a,n){let l=Array(Q).fill("0.0");const c=[];return W(()=>{K.exports.gsap.registerPlugin(y.exports.ScrollTrigger),y.exports.ScrollTrigger.defaults({start:"top top+=20%",end:"bottom top+=20%",pin:!0,scrub:!0,markers:!0}),l.forEach((i,o)=>{c.push(y.exports.ScrollTrigger.create({trigger:`.para-${o}`,onUpdate:f=>n(0,l[o]=f.progress.toFixed(1),l)}))}),y.exports.ScrollTrigger.refresh()}),z(()=>{c.forEach(i=>{i.kill()})}),[l]}class Y extends B{constructor(a){super();C(this,a,R,O,F,{})}}export{Y as default};
