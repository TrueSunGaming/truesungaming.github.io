import{s as o,h as l,n as c}from"./scheduler.GJjAvMcU.js";import{S as f,i as h,g as u,h as m,k as n,a as g,f as _}from"./index.a2enI-e9.js";function v(r){let e,i,a;return{c(){e=u("img"),this.h()},l(t){e=m(t,"IMG",{src:!0,alt:!0,height:!0,class:!0}),this.h()},h(){l(e.src,i="/"+r[0]+".svg")||n(e,"src",i),n(e,"alt",a=r[0]+" icon"),n(e,"height",r[1]),n(e,"class","svelte-zli0uv")},m(t,s){g(t,e,s)},p(t,[s]){s&1&&!l(e.src,i="/"+t[0]+".svg")&&n(e,"src",i),s&1&&a!==(a=t[0]+" icon")&&n(e,"alt",a),s&2&&n(e,"height",t[1])},i:c,o:c,d(t){t&&_(e)}}}function S(r,e,i){let{src:a}=e,{fontSize:t}=e;return r.$$set=s=>{"src"in s&&i(0,a=s.src),"fontSize"in s&&i(1,t=s.fontSize)},[a,t]}class q extends f{constructor(e){super(),h(this,e,S,v,o,{src:0,fontSize:1})}}export{q as I};