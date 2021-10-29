import{S as O,i as q,s as V,e as b,Y as $,k as C,c as y,a as k,Z as N,n as z,d as i,b as c,f as S,D as d,E as D,t as v,g as w,M as R,A as Z,W as K,_ as Y,$ as Q,a0 as P}from"../../chunks/vendor-290f3b74.js";function j(p,e,h){const s=p.slice();return s[4]=e[h],s}function I(p){let e,h,s=p[4].content+"",n,T;return{c(){e=b("div"),h=new $,n=C(),this.h()},l(l){e=y(l,"DIV",{id:!0,class:!0});var m=k(e);h=N(m),n=z(m),m.forEach(i),this.h()},h(){h.a=n,c(e,"id",T=p[4].id),c(e,"class","svelte-13w4bp8")},m(l,m){S(l,e,m),h.m(s,e),d(e,n)},p:D,d(l){l&&i(e)}}}function F(p){let e,h,s,n,T,l,m,M,g,H,E,x,u,A,f,_=p[0],r=[];for(let t=0;t<_.length;t+=1)r[t]=I(j(p,_,t));return{c(){e=b("p"),h=v("A quick hack combining "),s=b("a"),n=v(`GreenSock's
        ScrollTrigger`),T=v(" and "),l=b("a"),m=v("Mapbox"),M=v(`. The story, coordinate and camera
        data taken directly from the `),g=b("a"),H=v(`scroll
        / fly example`),E=v("."),x=C(),u=b("div"),A=C(),f=b("div");for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){e=y(t,"P",{});var o=k(e);h=w(o,"A quick hack combining "),s=y(o,"A",{target:!0,href:!0});var a=k(s);n=w(a,`GreenSock's
        ScrollTrigger`),a.forEach(i),T=w(o," and "),l=y(o,"A",{target:!0,href:!0});var W=k(l);m=w(W,"Mapbox"),W.forEach(i),M=w(o,`. The story, coordinate and camera
        data taken directly from the `),g=y(o,"A",{target:!0,href:!0});var B=k(g);H=w(B,`scroll
        / fly example`),B.forEach(i),E=w(o,"."),o.forEach(i),x=z(t),u=y(t,"DIV",{id:!0,class:!0});var J=k(u);J.forEach(i),A=z(t),f=y(t,"DIV",{id:!0,class:!0});var L=k(f);for(let G=0;G<r.length;G+=1)r[G].l(L);L.forEach(i),this.h()},h(){c(s,"target","_blank"),c(s,"href","https://greensock.com/docs/v3/Plugins/ScrollTrigger"),c(l,"target","_blank"),c(l,"href","https://mapbox.com"),c(g,"target","_blank"),c(g,"href","https://docs.mapbox.com/mapbox-gl-js/example/scroll-fly-to/"),c(u,"id","map"),c(u,"class","svelte-13w4bp8"),c(f,"id","stuff"),c(f,"class","svelte-13w4bp8")},m(t,o){S(t,e,o),d(e,h),d(e,s),d(s,n),d(e,T),d(e,l),d(l,m),d(e,M),d(e,g),d(g,H),d(e,E),S(t,x,o),S(t,u,o),S(t,A,o),S(t,f,o);for(let a=0;a<r.length;a+=1)r[a].m(f,null)},p(t,[o]){if(o&1){_=t[0];let a;for(a=0;a<_.length;a+=1){const W=j(t,_,a);r[a]?r[a].p(W,o):(r[a]=I(W),r[a].c(),r[a].m(f,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=_.length}},i:D,o:D,d(t){t&&i(e),t&&i(x),t&&i(u),t&&i(A),t&&i(f),R(r,t)}}}function U(p){let e;const h=[],s=[{id:"baker",bearing:27,center:[-.15591514,51.51830379],zoom:15.5,pitch:20,content:`<h3>221b Baker St.</h3>
                <p>
                November 1895. London is shrouded in fog and Sherlock Holmes and
                Watson pass time restlessly awaiting a new case. "The London
                criminal is certainly a dull fellow," Sherlock bemoans. "There have
                been numerous petty thefts," Watson offers in response. Just then a
                telegram arrives from Sherlock's brother Mycroft with a mysterious
                case.
                </p>
            `},{id:"aldgate",duration:6e3,center:[-.07571203,51.51424049],bearing:150,zoom:15,pitch:0,content:`
    <h3>Aldgate Station</h3>
<p>
Arthur Cadogan West was found dead, head crushed in on train tracks
at Aldgate Station at 6AM Tuesday morning. West worked at Woolwich
Arsenal on the Bruce-Partington submarine, a secret military
project. Plans for the submarine had been stolen and seven of the
ten missing papers were found in West's possession. Mycroft implores
Sherlock to take the case and recover the three missing papers.
</p>
            `},{id:"london",bearing:90,center:[-.08533793,51.50438536],zoom:13,speed:.6,pitch:40,content:`
    <h3>London Bridge</h3>
<p>
Holmes and Watson's investigations take them across London. Sherlock
deduces that West was murdered elsewhere, then moved to Aldgate
Station to create the illusion that he was crushed on the tracks by
a train. On their way to Woolwich Sherlock dispatches a telegram to
Mycroft at London Bridge: "Send list of all foreign spies known to
be in England, with full address."
</p>
            `},{id:"woolwich",bearing:90,center:[.05991101,51.48752939],zoom:12.3,content:`
    <h3>Woolwich Arsenal</h3>
<p>
While investigating at Woolwich Arsenal Sherlock learns that West
did not have the three keys&mdash;door, office, and
safe&mdash;necessary to steal the papers. The train station clerk
mentions seeing an agitated West boarding the 8:15 train to London
Bridge. Sherlock suspects West of following someone who had access
to the Woolwich chief's keyring with all three keys.
</p>
            `},{id:"gloucester",bearing:45,center:[-.18335806,51.49439521],zoom:15.3,pitch:20,speed:.5,content:`
    <h3>Gloucester Road</h3>
<p>
Mycroft responds to Sherlock's telegram and mentions several spies.
Hugo Oberstein of 13 Caulfield Gardens catches Sherlock's eye. He
heads to the nearby Gloucester Road station to investigate and
learns that the windows of Caulfield Gardens open over rail tracks
where trains stop frequently.
</p>
`},{id:"caulfield",bearing:180,center:[-.19684993,51.5033856],zoom:12.3,content:`
    <h3>13 Caulfield Gardens</h3>
<p>
Holmes deduces that the murderer placed West atop a stopped train at
Caulfield Gardens. The train traveled to Aldgate Station before
West's body finally toppled off. Backtracking to the criminal's
apartment, Holmes finds a series of classified ads from
<em>The Daily Telegraph</em> stashed away. All are under the name
Pierrot: "Monday night after nine. Two taps. Only ourselves. Do not
be so suspicious. Payment in hard cash when goods delivered."
</p>
            `},{id:"telegraph",bearing:90,center:[-.10669358,51.51433123],zoom:17.3,pitch:40,content:`
    <h3>The Daily Telegraph</h3>
<p>
Holmes and Watson head to The Daily Telegraph and place an ad to
draw out the criminal. It reads: "To-night. Same hour. Same place.
Two taps. Most vitally important. Your own safety at stake.
Pierrot." The trap works and Holmes catches the criminal: Colonel
Valentine Walter, the brother of Woolwich Arsenal's chief. He
confesses to working for Hugo Oberstein to obtain the submarine
plans in order to pay off his debts.
</p>
            `},{id:"charing",bearing:90,center:[-.12416858,51.50779757],zoom:14.3,pitch:20,content:`
    <h3>Charing Cross Hotel</h3>
<p>
Walter writes to Oberstein and convinces him to meet in the smoking
room of the Charing Cross Hotel where he promises additional plans
for the submarine in exchange for money. The plan works and Holmes
and Watson catch both criminals.
</p>
<small id="citation">
Adapted from
<a href="http://www.gutenberg.org/files/2346/2346-h/2346-h.htm">Project Gutenberg</a>
</small>
            `}];return Z(()=>{Y.accessToken="pk.eyJ1IjoiYW5ncnl0b25nYW4iLCJhIjoiY2t2YnMxZWdvMGc2bTJ2bnl3M3d0NGN3eSJ9.g4_hwrsAOY5KMJrb5fzM1Q",e=new Y.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[-.15591514,51.51830379],zoom:9}),Q.exports.gsap.registerPlugin(P.exports.ScrollTrigger),P.exports.ScrollTrigger.defaults({start:"top 30%",end:"bottom top",pin:!0,scrub:!0}),s.forEach(n=>{P.exports.ScrollTrigger.create({trigger:`#${n.id}`,onEnter:()=>{e.flyTo(n)},onEnterBack:()=>{e.flyTo(n)}})})}),K(()=>{h.forEach(n=>{n.kill()})}),[s]}class ee extends O{constructor(e){super();q(this,e,U,F,V,{})}}export{ee as default};
