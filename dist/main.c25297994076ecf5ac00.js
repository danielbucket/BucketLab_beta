(()=>{"use strict";var e,t,r,n={296:(e,t,r)=>{var n=r(540),l=r(338),a=r(767),o=r(581);const i=o.Ay.div`
  height: 8rem;
  background-color: rgb(88 167 235);
`;function c({loggedIn:e}){return n.createElement(n.Fragment,null,n.createElement(i,null,n.createElement("h1",null,"Header"),e?n.createElement("p",null,"Welcome, ",e):n.createElement("p",null,"Please log in")))}const u=o.Ay.div`
  flex-grow: 1;
  display: flex;
  background-color: var(--banana-candy-yellow);

  .profile-select {
    display: flex;
    flex-direction: column;
    width: 30rem;
    justify-content: center;
    align-items: center;

    button {
      width: 100%;
      padding: .5rem;
      margin: .5rem;
      font-size: 2.5rem;
      border: .25rem solid var(--dark-blue);
      border-radius: 5px;
      cursor: pointer;
    }
  }

  .profile-view {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      margin: 10px;
    }

    p {
      font-size: 2rem;
      color: var(--dark-blue);
    }
}
`,d=[{name:"Robototron",image:r.p+"5bc7a549ccb9e7288f69.jpeg",id:1},{name:"Squirrelchongbot",image:r.p+"99afa933a542d0c2d7b0.jpg",id:2},{name:"LlamaJaws",image:r.p+"d313c5965bf6768096a6.jpeg",id:3}];function m(){const[e,t]=(0,n.useState)({});return n.createElement(n.Fragment,null,n.createElement(u,null,n.createElement("div",{className:"profile-select"},d.map((e=>n.createElement("button",{key:e.id,onClick:()=>(e=>{const r=d.find((t=>t.id===e));t(r)})(e.id)},e.name)))),n.createElement("div",{className:"profile-view"},n.createElement("img",{src:e.image,alt:"profile"}),n.createElement("p",null,e.name))))}const f=o.Ay.div`
  height: 8rem;
  background-color: rgb(251 84 84);
`;function s(){return n.createElement(n.Fragment,null,n.createElement(f,null,n.createElement("p",null,"Footer")))}const p=o.Ay.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 1rem;
`;function g(){const[e,t]=(0,n.useState)(),[r,l]=(0,n.useState)({}),o=(0,a.LG)();return console.log("userData: ",o),(0,n.useEffect)((()=>{o.loggedIn?(t(o.user),l(!0)):(t((()=>{})),l((()=>!1)))}),[]),n.createElement(n.Fragment,null,n.createElement(p,null,n.createElement(c,{loggedin:r}),n.createElement(m,null),n.createElement(s,null)))}var b=r(976);const v=(0,b.Ys)([{path:"/",element:n.createElement(g,null),errorElement:n.createElement(Error,null),loader:async()=>await fetch("/api/auth/login")}]);(0,l.H)(document.getElementById("root")).render(n.createElement(n.StrictMode,null,n.createElement(b.pg,{router:v,future:{v7_startTransition:!0}},n.createElement(g,null))))}},l={};function a(e){var t=l[e];if(void 0!==t)return t.exports;var r=l[e]={exports:{}};return n[e](r,r.exports,a),r.exports}a.m=n,e=[],a.O=(t,r,n,l)=>{if(!r){var o=1/0;for(d=0;d<e.length;d++){for(var[r,n,l]=e[d],i=!0,c=0;c<r.length;c++)(!1&l||o>=l)&&Object.keys(a.O).every((e=>a.O[e](r[c])))?r.splice(c--,1):(i=!1,l<o&&(o=l));if(i){e.splice(d--,1);var u=n();void 0!==u&&(t=u)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[r,n,l]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var l=Object.create(null);a.r(l);var o={};t=t||[null,r({}),r([]),r(r)];for(var i=2&n&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,a.d(l,o),l},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="/",(()=>{var e={792:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var n,l,[o,i,c]=r,u=0;if(o.some((t=>0!==e[t]))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(c)var d=c(a)}for(t&&t(r);u<o.length;u++)l=o[u],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(d)},r=self.webpackChunkbucketlab_beta=self.webpackChunkbucketlab_beta||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a.nc=void 0;var o=a.O(void 0,[563],(()=>a(296)));o=a.O(o)})();
//# sourceMappingURL=main.c25297994076ecf5ac00.js.map