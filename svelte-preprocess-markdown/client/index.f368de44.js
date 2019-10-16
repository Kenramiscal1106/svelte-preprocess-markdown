import{S as n,i as e,s as a,e as r,b as o,d as s,g as t,h as l,j as c,k as p,v as m,n as i,o as f,x as d,K as h,C as u,t as v,a as g,f as $,r as E,z as w,A as y,q as k,N as x}from"./index.3cd0a8cf.js";import{R as b}from"./Repl.b303377f.js";import"./_commonjsHelpers.cffaff9d.js";function S(n){var e,a,h;let u={orientation:"rows",readonly:n.readonly,embedded:!0};var v=new b({props:u});return n.repl_1_binding(v),{c(){e=r("div"),a=r("div"),v.$$.fragment.c(),this.h()},l(n){e=o(n,"DIV",{class:!0},!1);var r=s(e);a=o(r,"DIV",{class:!0},!1);var l=s(a);v.$$.fragment.l(l),l.forEach(t),r.forEach(t),this.h()},h(){l(a,"class","repl svelte-cgg22k"),l(e,"class","container svelte-cgg22k")},m(n,r){c(n,e,r),p(e,a),m(v,a,null),h=!0},p(n,e){var a={};n.readonly&&(a.readonly=e.readonly),v.$set(a)},i(n){h||(i(v.$$.fragment,n),h=!0)},o(n){f(v.$$.fragment,n),h=!1},d(a){a&&t(e),n.repl_1_binding(null),d(v)}}}function A(n,e,a){let r,{code:o="# Hello World!",readonly:s=!1,components:t=[{type:"md",name:"App",source:"# Hello World!"}]}=e;return a("components",t=t.map(n=>(n.source=n.source.trim(),n))),h(()=>{r.set({components:t})}),n.$set=(n=>{"code"in n&&a("code",o=n.code),"readonly"in n&&a("readonly",s=n.readonly),"components"in n&&a("components",t=n.components)}),{repl:r,code:o,readonly:s,components:t,repl_1_binding:function(n){u[n?"unshift":"push"](()=>{a("repl",r=n)})}}}class I extends n{constructor(n){super(),e(this,n,A,S,a,["code","readonly","components"])}}let j={type:"svelte",name:"Counter",source:'\n<script>\nlet count = 0;\n<\/script>\n\n<span class="counter">\n<span class="minus" on:click={e => count--}>-</span>\n<span class="value">{count}</span>\n<span class="plus" on:click={e => count++}>+</span>\n</span>\n\n<style>\n.counter{\nbackground-color: #f9ac00;\npadding: 2px;\nborder-radius:5px;\n}\n\n.value{\ndisplay: inline-block;\nbackground-color: white;\ntext-align: center;\npadding:0 5px;\nborder-radius:5px;\ncolor: black;\n}\n\n.minus,.plus{\ndisplay: inline-block;\ncolor: white;\nwidth:15px;\ntext-align: center;\nfont-weight: bold;\ncursor:pointer;\n}\n</style>\n'},D={type:"svelte",name:"Box",source:'\n<script>\nexport let color = "black";\n<\/script>\n\n<div style="background-color:{color}"><slot /></div>\n\n<style>\ndiv{\n  color: white;\n  border-radius:5px;\n  padding: 20px;\n  text-align: center;\n}\n</style>\n'};const P=[{type:"md",name:"App",source:"\n<script>\nlet name = 'World'\n<\/script>\n# Hello {name}!"}],C=[{type:"md",name:"App",source:"\n## Simplest component\n\nYou can write **any** `markdown` you want.\n\n|ID|Name|\n|--|----|\n|1 |John|\n"}],H=[{type:"md",name:"App",source:"\n<script>\n  let list = ['item0','item1'];\n  function add() { list = [...list,'item'+list.length] }\n  function del() { list = list.slice(0,-1) }\n<\/script>\n\n### My items\n\n{#each list as item}\n* {item}\n{/each}\n\n<button on:click={add}>Add Item</button>\n<button on:click={del}>Del Item</button>\n"}],M=[{type:"md",name:"App",source:"\n<script>\n  import Counter from './Counter.svelte'\n  import Box from './Box.svelte'\n<\/script>\n\n<Box color=\"orange\">\n   Hello, I'm **orange** box\n</Box>\n\nYou could inline <Counter /> components as well.\n"},j,D],B=[{type:"md",name:"App",source:"\n<script>\n  import Box from './Box.svelte';\n  import Submarkup from './Submarkup.md';\n<\/script>\n\n<Box color=\"slateblue\">\n   <Submarkup />\n</Box>\n"},{type:"md",name:"Submarkup",source:"\n# Hello\n\nI'm **blue** box\n"},D],N=[{type:"md",name:"App",source:"\nimport Counter from './Counter.svelte'\nimport Box from './Box.svelte'\n\n<Box color=\"silver\">\n   Hello, I'm **grey** box. Counter: <Counter />\n</Box>\n"},j,D];function O(n){var e,a,h,u,E,w,y,k,x,b,S,A,j,D,C,H,M,B,N,O,T,Y,L,_,q,R,V,U,W,F,K,X,z,J,Q,G,Z,nn,en,an,rn,on,sn,tn,ln,cn,pn,mn,fn,dn=new I({props:{components:P}});return{c(){e=r("h1"),a=v("Introducing"),h=g(),u=r("p"),E=v("The "),w=r("a"),y=v("svelte-preprocess-markdown"),k=v(" is a way to use "),x=r("a"),b=v("Svelte"),S=v(" components written in Markdown syntax. You can import any "),A=r("code"),j=v("*.md"),D=v(" file as a component, which will be handeled by Svelte's compiler. You can import any other component in your "),C=r("code"),H=v("*.md"),M=v(" file and use it right inside a markup. All "),B=r("a"),N=v("HTMLx"),O=v(" logic and interpolations are also supported."),T=g(),Y=r("p"),L=v("The format of the "),_=r("em"),q=v("MarkDown"),R=v(" and "),V=r("em"),U=v("Svelte"),W=v(" combination is called "),F=r("code"),K=v("MDSv"),X=v(". It is like React's "),z=r("a"),J=v("MDX"),Q=v(" format, but for "),G=r("a"),Z=v("Svelte"),nn=v("."),en=g(),dn.$$.fragment.c(),an=g(),rn=r("blockquote"),on=r("p"),sn=v("You can try "),tn=r("code"),ln=v("svelte-preprocess-markdown"),cn=v(" in the fullpage "),pn=r("a"),mn=v("Playground"),this.h()},l(n){e=o(n,"H1",{},!1);var r=s(e);a=$(r,"Introducing"),r.forEach(t),h=$(n,"\n"),u=o(n,"P",{},!1);var l=s(u);E=$(l,"The "),w=o(l,"A",{href:!0},!1);var c=s(w);y=$(c,"svelte-preprocess-markdown"),c.forEach(t),k=$(l," is a way to use "),x=o(l,"A",{href:!0},!1);var p=s(x);b=$(p,"Svelte"),p.forEach(t),S=$(l," components written in Markdown syntax. You can import any "),A=o(l,"CODE",{},!1);var m=s(A);j=$(m,"*.md"),m.forEach(t),D=$(l," file as a component, which will be handeled by Svelte's compiler. You can import any other component in your "),C=o(l,"CODE",{},!1);var i=s(C);H=$(i,"*.md"),i.forEach(t),M=$(l," file and use it right inside a markup. All "),B=o(l,"A",{href:!0},!1);var f=s(B);N=$(f,"HTMLx"),f.forEach(t),O=$(l," logic and interpolations are also supported."),l.forEach(t),T=$(n,"\n"),Y=o(n,"P",{},!1);var d=s(Y);L=$(d,"The format of the "),_=o(d,"EM",{},!1);var v=s(_);q=$(v,"MarkDown"),v.forEach(t),R=$(d," and "),V=o(d,"EM",{},!1);var g=s(V);U=$(g,"Svelte"),g.forEach(t),W=$(d," combination is called "),F=o(d,"CODE",{},!1);var I=s(F);K=$(I,"MDSv"),I.forEach(t),X=$(d,". It is like React's "),z=o(d,"A",{href:!0},!1);var P=s(z);J=$(P,"MDX"),P.forEach(t),Q=$(d," format, but for "),G=o(d,"A",{href:!0},!1);var fn=s(G);Z=$(fn,"Svelte"),fn.forEach(t),nn=$(d,"."),d.forEach(t),en=$(n,"\n"),dn.$$.fragment.l(n),an=$(n,"\n"),rn=o(n,"BLOCKQUOTE",{},!1);var hn=s(rn);on=o(hn,"P",{},!1);var un=s(on);sn=$(un,"You can try "),tn=o(un,"CODE",{},!1);var vn=s(tn);ln=$(vn,"svelte-preprocess-markdown"),vn.forEach(t),cn=$(un," in the fullpage "),pn=o(un,"A",{href:!0},!1);var gn=s(pn);mn=$(gn,"Playground"),gn.forEach(t),un.forEach(t),hn.forEach(t),this.h()},h(){l(w,"href","https://www.npmjs.com/package/svelte-preprocess-markdown"),l(x,"href","https://svelte.dev"),l(B,"href","https://github.com/htmlx-org/HTMLx"),l(z,"href","https://mdxjs.com/"),l(G,"href","https://svelte.dev"),l(pn,"href","/playground")},m(n,r){c(n,e,r),p(e,a),c(n,h,r),c(n,u,r),p(u,E),p(u,w),p(w,y),p(u,k),p(u,x),p(x,b),p(u,S),p(u,A),p(A,j),p(u,D),p(u,C),p(C,H),p(u,M),p(u,B),p(B,N),p(u,O),c(n,T,r),c(n,Y,r),p(Y,L),p(Y,_),p(_,q),p(Y,R),p(Y,V),p(V,U),p(Y,W),p(Y,F),p(F,K),p(Y,X),p(Y,z),p(z,J),p(Y,Q),p(Y,G),p(G,Z),p(Y,nn),c(n,en,r),m(dn,n,r),c(n,an,r),c(n,rn,r),p(rn,on),p(on,sn),p(on,tn),p(tn,ln),p(on,cn),p(on,pn),p(pn,mn),fn=!0},p(n,e){var a={};n.Example1&&(a.components=P),dn.$set(a)},i(n){fn||(i(dn.$$.fragment,n),fn=!0)},o(n){f(dn.$$.fragment,n),fn=!1},d(n){n&&(t(e),t(h),t(u),t(T),t(Y),t(en)),d(dn,n),n&&(t(an),t(rn))}}}function T(n){var e,a,m,i,f,d,h,u,w,y,k,x,b,S,A,I,j,D,P,C,H,M,B,N,O,T,Y,L,_,q,R,V,U,W,F,K,X,z,J,Q,G,Z,nn,en,an,rn,on,sn,tn,ln,cn,pn,mn;return{c(){e=r("h1"),a=v("Install"),m=g(),i=r("ol"),f=r("li"),d=v("Install the package:"),h=g(),u=r("pre"),w=r("code"),y=v("npm i -D svelte-preprocess-markdown"),k=g(),x=r("ol"),b=r("li"),S=v("Then, edit "),A=r("code"),I=v("rollup.config.js"),j=v(" file:"),D=g(),P=r("pre"),C=r("code"),H=r("span"),M=v("// 1. import package"),B=v("\n"),N=r("span"),O=v("const"),T=v(" {markdown} = "),Y=r("span"),L=v("require"),_=v("("),q=r("span"),R=v("'svelte-preprocess-markdown'"),V=v(");\n\n"),U=r("span"),W=v("export"),F=v(" "),K=r("span"),X=v("default"),z=v(" {\n  "),J=r("span"),Q=v("// ..."),G=v("\n  plugins: [\n    svelte({\n      "),Z=r("span"),nn=v("// 2. add '.md', to the extensions"),en=v("\n      extensions: ["),an=r("span"),rn=v("'.svelte'"),on=v(","),sn=r("span"),tn=v("'.md'"),ln=v("],\n      "),cn=r("span"),pn=v("// 3. add markdown preprocessor"),mn=v("\n      preprocess: markdown()\n    })\n  ]\n}"),this.h()},l(n){e=o(n,"H1",{},!1);var r=s(e);a=$(r,"Install"),r.forEach(t),m=$(n,"\n"),i=o(n,"OL",{},!1);var l=s(i);f=o(l,"LI",{},!1);var c=s(f);d=$(c,"Install the package:"),c.forEach(t),l.forEach(t),h=$(n,"\n"),u=o(n,"PRE",{},!1);var p=s(u);w=o(p,"CODE",{class:!0},!1);var v=s(w);y=$(v,"npm i -D svelte-preprocess-markdown"),v.forEach(t),p.forEach(t),k=$(n,"\n\n"),x=o(n,"OL",{start:!0},!1);var g=s(x);b=o(g,"LI",{},!1);var E=s(b);S=$(E,"Then, edit "),A=o(E,"CODE",{},!1);var fn=s(A);I=$(fn,"rollup.config.js"),fn.forEach(t),j=$(E," file:"),E.forEach(t),g.forEach(t),D=$(n,"\n"),P=o(n,"PRE",{},!1);var dn=s(P);C=o(dn,"CODE",{class:!0},!1);var hn=s(C);H=o(hn,"SPAN",{class:!0},!1);var un=s(H);M=$(un,"// 1. import package"),un.forEach(t),B=$(hn,"\n"),N=o(hn,"SPAN",{class:!0},!1);var vn=s(N);O=$(vn,"const"),vn.forEach(t),T=$(hn," {markdown} = "),Y=o(hn,"SPAN",{class:!0},!1);var gn=s(Y);L=$(gn,"require"),gn.forEach(t),_=$(hn,"("),q=o(hn,"SPAN",{class:!0},!1);var $n=s(q);R=$($n,"'svelte-preprocess-markdown'"),$n.forEach(t),V=$(hn,");\n\n"),U=o(hn,"SPAN",{class:!0},!1);var En=s(U);W=$(En,"export"),En.forEach(t),F=$(hn," "),K=o(hn,"SPAN",{class:!0},!1);var wn=s(K);X=$(wn,"default"),wn.forEach(t),z=$(hn," {\n  "),J=o(hn,"SPAN",{class:!0},!1);var yn=s(J);Q=$(yn,"// ..."),yn.forEach(t),G=$(hn,"\n  plugins: [\n    svelte({\n      "),Z=o(hn,"SPAN",{class:!0},!1);var kn=s(Z);nn=$(kn,"// 2. add '.md', to the extensions"),kn.forEach(t),en=$(hn,"\n      extensions: ["),an=o(hn,"SPAN",{class:!0},!1);var xn=s(an);rn=$(xn,"'.svelte'"),xn.forEach(t),on=$(hn,","),sn=o(hn,"SPAN",{class:!0},!1);var bn=s(sn);tn=$(bn,"'.md'"),bn.forEach(t),ln=$(hn,"],\n      "),cn=o(hn,"SPAN",{class:!0},!1);var Sn=s(cn);pn=$(Sn,"// 3. add markdown preprocessor"),Sn.forEach(t),mn=$(hn,"\n      preprocess: markdown()\n    })\n  ]\n}"),hn.forEach(t),dn.forEach(t),this.h()},h(){l(w,"class","hljs language-bash"),l(x,"start","2"),l(H,"class","hljs-comment"),l(N,"class","hljs-keyword"),l(Y,"class","hljs-built_in"),l(q,"class","hljs-string"),l(U,"class","hljs-keyword"),l(K,"class","hljs-keyword"),l(J,"class","hljs-comment"),l(Z,"class","hljs-comment"),l(an,"class","hljs-string"),l(sn,"class","hljs-string"),l(cn,"class","hljs-comment"),l(C,"class","hljs language-js")},m(n,r){c(n,e,r),p(e,a),c(n,m,r),c(n,i,r),p(i,f),p(f,d),c(n,h,r),c(n,u,r),p(u,w),p(w,y),c(n,k,r),c(n,x,r),p(x,b),p(b,S),p(b,A),p(A,I),p(b,j),c(n,D,r),c(n,P,r),p(P,C),p(C,H),p(H,M),p(C,B),p(C,N),p(N,O),p(C,T),p(C,Y),p(Y,L),p(C,_),p(C,q),p(q,R),p(C,V),p(C,U),p(U,W),p(C,F),p(C,K),p(K,X),p(C,z),p(C,J),p(J,Q),p(C,G),p(C,Z),p(Z,nn),p(C,en),p(C,an),p(an,rn),p(C,on),p(C,sn),p(sn,tn),p(C,ln),p(C,cn),p(cn,pn),p(C,mn)},p:E,i:E,o:E,d(n){n&&(t(e),t(m),t(i),t(h),t(u),t(k),t(x),t(D),t(P))}}}function Y(n){var e,a,l,h,u,E,w,y,k,x,b,S,A,j,D,P,O,T,Y,L,_,q,R,V,U,W,F,K,X,z,J,Q,G,Z,nn,en,an,rn,on,sn,tn,ln=new I({props:{components:C}}),cn=new I({props:{components:H}}),pn=new I({props:{components:M}}),mn=new I({props:{components:B}}),fn=new I({props:{components:N}});return{c(){e=r("h1"),a=v("Usage"),l=g(),h=r("h3"),u=v("Simple markup"),E=g(),w=r("p"),y=v("First of all "),k=r("code"),x=v("MDSv"),b=v(" is markdown format. The simplest component is just a markdown synatax without any Svelte's magic."),S=g(),ln.$$.fragment.c(),A=g(),j=r("h3"),D=v("Components"),P=g(),O=r("p"),T=v("You can mix svelte and markdown as you want:"),Y=g(),cn.$$.fragment.c(),L=g(),_=r("h3"),q=v("Imports"),R=g(),V=r("p"),U=v("Import components and use it as usual:"),W=g(),pn.$$.fragment.c(),F=g(),K=r("p"),X=v("Import other "),z=r("code"),J=v("*.md"),Q=v(" files as well:"),G=g(),mn.$$.fragment.c(),Z=g(),nn=r("p"),en=v("If there are only imports in the "),an=r("code"),rn=v("<script>"),on=v(" tag, you may use simplified imports:"),sn=g(),fn.$$.fragment.c()},l(n){e=o(n,"H1",{},!1);var r=s(e);a=$(r,"Usage"),r.forEach(t),l=$(n,"\n"),h=o(n,"H3",{},!1);var c=s(h);u=$(c,"Simple markup"),c.forEach(t),E=$(n,"\n"),w=o(n,"P",{},!1);var p=s(w);y=$(p,"First of all "),k=o(p,"CODE",{},!1);var m=s(k);x=$(m,"MDSv"),m.forEach(t),b=$(p," is markdown format. The simplest component is just a markdown synatax without any Svelte's magic."),p.forEach(t),S=$(n,"\n"),ln.$$.fragment.l(n),A=$(n,"\n"),j=o(n,"H3",{},!1);var i=s(j);D=$(i,"Components"),i.forEach(t),P=$(n,"\n"),O=o(n,"P",{},!1);var f=s(O);T=$(f,"You can mix svelte and markdown as you want:"),f.forEach(t),Y=$(n,"\n"),cn.$$.fragment.l(n),L=$(n,"\n"),_=o(n,"H3",{},!1);var d=s(_);q=$(d,"Imports"),d.forEach(t),R=$(n,"\n"),V=o(n,"P",{},!1);var v=s(V);U=$(v,"Import components and use it as usual:"),v.forEach(t),W=$(n,"\n"),pn.$$.fragment.l(n),F=$(n,"\n"),K=o(n,"P",{},!1);var g=s(K);X=$(g,"Import other "),z=o(g,"CODE",{},!1);var I=s(z);J=$(I,"*.md"),I.forEach(t),Q=$(g," files as well:"),g.forEach(t),G=$(n,"\n"),mn.$$.fragment.l(n),Z=$(n,"\n"),nn=o(n,"P",{},!1);var C=s(nn);en=$(C,"If there are only imports in the "),an=o(C,"CODE",{},!1);var H=s(an);rn=$(H,"<script>"),H.forEach(t),on=$(C," tag, you may use simplified imports:"),C.forEach(t),sn=$(n,"\n"),fn.$$.fragment.l(n)},m(n,r){c(n,e,r),p(e,a),c(n,l,r),c(n,h,r),p(h,u),c(n,E,r),c(n,w,r),p(w,y),p(w,k),p(k,x),p(w,b),c(n,S,r),m(ln,n,r),c(n,A,r),c(n,j,r),p(j,D),c(n,P,r),c(n,O,r),p(O,T),c(n,Y,r),m(cn,n,r),c(n,L,r),c(n,_,r),p(_,q),c(n,R,r),c(n,V,r),p(V,U),c(n,W,r),m(pn,n,r),c(n,F,r),c(n,K,r),p(K,X),p(K,z),p(z,J),p(K,Q),c(n,G,r),m(mn,n,r),c(n,Z,r),c(n,nn,r),p(nn,en),p(nn,an),p(an,rn),p(nn,on),c(n,sn,r),m(fn,n,r),tn=!0},p(n,e){var a={};n.Example2&&(a.components=C),ln.$set(a);var r={};n.Example3&&(r.components=H),cn.$set(r);var o={};n.Example4&&(o.components=M),pn.$set(o);var s={};n.Example5&&(s.components=B),mn.$set(s);var t={};n.Example6&&(t.components=N),fn.$set(t)},i(n){tn||(i(ln.$$.fragment,n),i(cn.$$.fragment,n),i(pn.$$.fragment,n),i(mn.$$.fragment,n),i(fn.$$.fragment,n),tn=!0)},o(n){f(ln.$$.fragment,n),f(cn.$$.fragment,n),f(pn.$$.fragment,n),f(mn.$$.fragment,n),f(fn.$$.fragment,n),tn=!1},d(n){n&&(t(e),t(l),t(h),t(E),t(w),t(S)),d(ln,n),n&&(t(A),t(j),t(P),t(O),t(Y)),d(cn,n),n&&(t(L),t(_),t(R),t(V),t(W)),d(pn,n),n&&(t(F),t(K),t(G)),d(mn,n),n&&(t(Z),t(nn),t(sn)),d(fn,n)}}}var L=[class extends n{constructor(n){super(),e(this,n,null,O,a,[])}},class extends n{constructor(n){super(),e(this,n,null,T,a,[])}},class extends n{constructor(n){super(),e(this,n,null,Y,a,[])}}];function _(n,e,a){const r=Object.create(n);return r.page=e[a],r}function q(n){var e,a,p,h=n.page;if(h)var u=new h({});return{c(){u&&u.$$.fragment.c(),e=g(),a=r("div"),this.h()},l(n){u&&u.$$.fragment.l(n),e=$(n,"\n    "),a=o(n,"DIV",{class:!0},!1),s(a).forEach(t),this.h()},h(){l(a,"class","svelte-mvq4nw")},m(n,r){u&&m(u,n,r),c(n,e,r),c(n,a,r),p=!0},p(n,a){if(h!==(h=a.page)){if(u){w();const n=u;f(n.$$.fragment,1,0,()=>{d(n,1)}),y()}h?((u=new h({})).$$.fragment.c(),i(u.$$.fragment,1),m(u,e.parentNode,e)):u=null}},i(n){p||(u&&i(u.$$.fragment,n),p=!0)},o(n){u&&f(u.$$.fragment,n),p=!1},d(n){u&&d(u,n),n&&(t(e),t(a))}}}function R(n){for(var e,a,r=L,o=[],s=0;s<r.length;s+=1)o[s]=q(_(n,r,s));const l=n=>f(o[n],1,1,()=>{o[n]=null});return{c(){for(var n=0;n<o.length;n+=1)o[n].c();e=k()},l(n){for(var a=0;a<o.length;a+=1)o[a].l(n);e=k()},m(n,r){for(var s=0;s<o.length;s+=1)o[s].m(n,r);c(n,e,r),a=!0},p(n,a){if(n.pages){r=L;for(var s=0;s<r.length;s+=1){const t=_(a,r,s);o[s]?(o[s].p(n,t),i(o[s],1)):(o[s]=q(t),o[s].c(),i(o[s],1),o[s].m(e.parentNode,e))}for(w(),s=r.length;s<o.length;s+=1)l(s);y()}},i(n){if(!a){for(var e=0;e<r.length;e+=1)i(o[e]);a=!0}},o(n){o=o.filter(Boolean);for(let n=0;n<o.length;n+=1)f(o[n]);a=!1},d(n){x(o,n),n&&t(e)}}}class V extends n{constructor(n){super(),e(this,n,null,R,a,[])}}function U(n){var e,a,p=new V({});return{c(){e=r("div"),p.$$.fragment.c(),this.h()},l(n){e=o(n,"DIV",{class:!0},!1);var a=s(e);p.$$.fragment.l(a),a.forEach(t),this.h()},h(){l(e,"class","svelte-qau3fm")},m(n,r){c(n,e,r),m(p,e,null),a=!0},p:E,i(n){a||(i(p.$$.fragment,n),a=!0)},o(n){f(p.$$.fragment,n),a=!1},d(n){n&&t(e),d(p)}}}export default class extends n{constructor(n){super(),e(this,n,null,U,a,[])}}
