import{R as h,c as g,a as e,r as a,j as d}from"./jsx-runtime.cbb87597.js";import{g as E,e as _,f as v}from"./remesh-logger.7aafe251.js";const R="modulepreload",c={},w="/remesh/dist/react/",u=function(n,r){return!r||r.length===0?n():Promise.all(r.map(t=>{if(t=`${w}${t}`,t in c)return;c[t]=!0;const i=t.endsWith(".css"),m=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${m}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":R,i||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),i)return new Promise((p,f)=>{o.addEventListener("load",p),o.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>n())},C=()=>{const[s,n]=a.exports.useState(window.location.hash.substring(1));return a.exports.useEffect(()=>{const r=()=>{n(window.location.hash.substring(1))};return window.addEventListener("hashchange",r),()=>{window.removeEventListener("hashchange",r)}}),s},x=h.lazy(()=>u(()=>import("./counter.d0a6ce06.js"),["assets/counter.d0a6ce06.js","assets/remesh-logger.7aafe251.js","assets/jsx-runtime.cbb87597.js"])),y=h.lazy(()=>u(()=>import("./pagination.c59e30a0.js"),["assets/pagination.c59e30a0.js","assets/remesh-logger.7aafe251.js","assets/jsx-runtime.cbb87597.js","assets/merge.520e78a2.js","assets/mergeAll.0f775926.js","assets/from.2d9119b3.js"])),L={counter:x,pagination:y},P=()=>d("ul",{children:[e("li",{children:e("a",{href:"/remesh/dist/react/",children:"Home"})}),e("li",{children:e("a",{href:"#counter",children:"Counter"})}),e("li",{children:e("a",{href:"#pagination",children:"Pagination"})})]}),S=()=>{const s=C(),n=L[s||"pagination"];return d("div",{children:[e(P,{}),e(a.exports.Suspense,{fallback:"loading...",children:n?e(n,{}):"Not Found"})]})},$={inspectors:[_(),v({include:["command","query","event","domain","command$","state"]})]},l=document.getElementById("root");l&&g(l).render(e(a.exports.StrictMode,{children:e(E,{options:$,children:e(S,{})})}));
//# sourceMappingURL=index.82804fd5.js.map
