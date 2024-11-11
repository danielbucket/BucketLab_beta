(()=>{"use strict";var e,t,r,n={609:(e,t,r)=>{var n=r(540),l=r(338),o=r(767),a=r(581);const c=a.Ay.div`
  height: 8rem;
  background-color: rgb(88 167 235);
`;function u(){return n.createElement(n.Fragment,null,n.createElement(c,null,n.createElement("h1",null,"Header")))}const i=a.Ay.div`
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  display: flex;
  background-color: var(--banana-candy-yellow);

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 10px;
  }
  
  p {
    font-size: 4rem;
  }
}

`,f=r.p+"5bc7a549ccb9e7288f69.jpeg",m=r.p+"99afa933a542d0c2d7b0.jpg";function d(){const[e,t]=(0,n.useState)(f),[r,l]=(0,n.useState)(m);return n.createElement(n.Fragment,null,n.createElement(i,null,n.createElement("p",null,"Robototron"),n.createElement("img",{src:e,alt:"robot"}),n.createElement("p",null,"Squirrelchongbot"),n.createElement("img",{src:r,alt:"squirrel"})))}const s=a.Ay.div`
  height: 8rem;
  background-color: rgb(251 84 84);
`;function p(){return n.createElement(n.Fragment,null,n.createElement(s,null,n.createElement("p",null,"Footer")))}const g=a.Ay.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 1rem;
`;function b(){const[e,t]=(0,n.useState)(),[r,l]=(0,n.useState)(!1),a=(0,o.LG)();return(0,n.useEffect)((()=>{a.loggedIn?(t(a.user),l(!0)):(t((()=>{})),l((()=>!1)))}),[]),n.createElement(n.Fragment,null,n.createElement(g,null,n.createElement(u,null),n.createElement(d,null),n.createElement(p,null)))}var v=r(976);const h=(0,v.Ys)([{path:"/",element:n.createElement(b,null),errorElement:n.createElement(Error,null),loader:async()=>await fetch("/api/auth/login").then((e=>e.json())).then((e=>e)).catch((e=>console.error(e)))}],{future:{v7_normalizeFormMethod:!0}});(0,l.H)(document.getElementById("root")).render(n.createElement(n.StrictMode,null,n.createElement(v.pg,{router:h},n.createElement(b,null))))}},l={};function o(e){var t=l[e];if(void 0!==t)return t.exports;var r=l[e]={exports:{}};return n[e](r,r.exports,o),r.exports}o.m=n,e=[],o.O=(t,r,n,l)=>{if(!r){var a=1/0;for(f=0;f<e.length;f++){for(var[r,n,l]=e[f],c=!0,u=0;u<r.length;u++)(!1&l||a>=l)&&Object.keys(o.O).every((e=>o.O[e](r[u])))?r.splice(u--,1):(c=!1,l<a&&(a=l));if(c){e.splice(f--,1);var i=n();void 0!==i&&(t=i)}}return t}l=l||0;for(var f=e.length;f>0&&e[f-1][2]>l;f--)e[f]=e[f-1];e[f]=[r,n,l]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var l=Object.create(null);o.r(l);var a={};t=t||[null,r({}),r([]),r(r)];for(var c=2&n&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,o.d(l,a),l},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/",(()=>{var e={792:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,l,[a,c,u]=r,i=0;if(a.some((t=>0!==e[t]))){for(n in c)o.o(c,n)&&(o.m[n]=c[n]);if(u)var f=u(o)}for(t&&t(r);i<a.length;i++)l=a[i],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(f)},r=self.webpackChunkwp_react_express_boilerplate=self.webpackChunkwp_react_express_boilerplate||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),o.nc=void 0;var a=o.O(void 0,[563],(()=>o(609)));a=o.O(a)})();
//# sourceMappingURL=main.e56a8e5536631ba99839.js.map