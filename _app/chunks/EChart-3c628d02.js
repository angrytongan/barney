import{S as I,i as x,s as V,e as D,c as M,a as b,d as g,b as E,P as k,G as O,f as S,D as W,U as j,E as C,V as q,A as v,W as A,X as B}from"./vendor-656fd6d9.js";function G(s){let t,i,h;return{c(){t=D("div"),i=D("div"),this.h()},l(a){t=M(a,"DIV",{});var d=b(t);i=M(d,"DIV",{id:!0,style:!0}),b(i).forEach(g),d.forEach(g),this.h()},h(){E(i,"id",s[1]),k(i,"height",s[2]+"px"),O(()=>s[9].call(t))},m(a,d){S(a,t,d),W(t,i),h=j(t,s[9].bind(t))},p(a,[d]){d&2&&E(i,"id",a[1]),d&4&&k(i,"height",a[2]+"px")},i:C,o:C,d(a){a&&g(t),h()}}}function P(s,t,i){let{id:h}=t,{theme:a="light"}=t,{width:d=200}=t,{height:u=200}=t;const m=q();let{option:o={backgroundColor:"rgba(0, 0, 0, 0)",title:{text:"Default chart placeholder"}}}=t,{notMerge:r=!1}=t,{replaceMerge:l=void 0}=t,{lazyUpdate:c=!1}=t,n;const _=()=>{n&&!n.isDisposed()&&(i(3,o.backgroundColor="rgba(0, 0, 0, 0)",o),n.setOption(o,r,l,c))},y=()=>{n&&!n.isDisposed()&&n.dispose()},z=()=>{y(),i(8,n=B(document.getElementById(h),a)),n.on("datazoom",e=>{m("datazoom",{start:e.start,end:e.end})}),n.on("click",e=>{m("click",{x:e.data.x,y:e.data.y})})};v(()=>{z()}),A(()=>{y()});let f;const U=()=>{f==null&&(f=setTimeout(()=>{n&&!n.isDisposed()&&n.resize(),f=void 0},500))};function w(){d=this.clientWidth,i(0,d)}return s.$$set=e=>{"id"in e&&i(1,h=e.id),"theme"in e&&i(4,a=e.theme),"width"in e&&i(0,d=e.width),"height"in e&&i(2,u=e.height),"option"in e&&i(3,o=e.option),"notMerge"in e&&i(5,r=e.notMerge),"replaceMerge"in e&&i(6,l=e.replaceMerge),"lazyUpdate"in e&&i(7,c=e.lazyUpdate)},s.$$.update=()=>{s.$$.dirty&1&&d&&U(),s.$$.dirty&8&&o&&_(),s.$$.dirty&272&&n&&a&&(z(),_())},[d,h,u,o,a,r,l,c,n,w]}class T extends I{constructor(t){super();x(this,t,P,G,V,{id:1,theme:4,width:0,height:2,option:3,notMerge:5,replaceMerge:6,lazyUpdate:7})}}export{T as E};
