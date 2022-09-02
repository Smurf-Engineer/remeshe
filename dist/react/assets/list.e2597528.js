import{R as U}from"./remesh-react.c6a64ae5.js";const v=(c,e)=>{var C;const u=c.state({name:`${e.name}.ItemListState`,default:(C=e.default)!=null?C:[]}),o=c.query({name:`${e.name}.ItemListQuery`,impl:({get:t})=>t(u())}),L=c.query({name:`${e.name}.DerivedQuery`,impl:({get:t})=>{const n=t(u()),m=[],r={};for(let s=0;s<n.length;s++){const a=n[s],l=e.key(a);m.push(l),r[l]=a}return{record:r,keyList:m}}}),f=c.query({name:`${e.name}.KeyListQuery`,impl:({get:t})=>t(L()).keyList}),k=c.query({name:`${e.name}.ItemQuery`,impl:({get:t},n)=>{const m=t(L()).record;if(!(n in m))throw new Error(`${n} in not founded in ${e.name}`);return m[n]},onError:(t,n)=>n}),d=c.command({name:`${e.name}.SetListCommand`,impl:({},t)=>u().new(t)}),h=c.command({name:`${e.name}.AddItemCommand`,impl:({get:t},n)=>{const r=t(u()).concat(n);return d(r)}}),$=c.command({name:`${e.name}.AddItemListCommand`,impl:({get:t},n)=>{if(n.length===0)return null;const r=t(u()).concat(n);return d(r)}}),w=c.command({name:`${e.name}.DeleteItemCommand`,impl:({get:t},n)=>{const m=t(u()),r=m.filter(s=>e.key(s)!==n);return r.length===m.length?null:d(r)}}),A=c.command({name:`${e.name}.DeleteItemListCommand`,impl:({get:t},n)=>{const m=t(o()),r=m.filter(s=>!n.includes(e.key(s)));return r.length===m.length?null:d(r)}}),K=c.command({name:`${e.name}.DeleteAllCommand`,impl:({})=>d([])}),D=c.command({name:`${e.name}.UpdateItemCommand`,impl:({get:t},n)=>{const m=t(u()),r=e.key(n),s=[];let a=!1;for(const l of m)e.key(l)===r?(s.push(n),a=!0):s.push(l);return a?u().new(s):null}}),Q=c.command({name:`${e.name}.UpdateItemListCommand`,impl:({get:t},n)=>{const m=t(u()),r=[];let s=!1;for(const a of m){for(const l of n)if(e.key(a)===e.key(l)){r.push(l),s=!0;break}s||r.push(a)}return s?u().new(r):null}}),g=c.command({name:`${e.name}.InsertAtCommand`,impl:({get:t},{index:n,item:m})=>{if(t(f()).includes(e.key(m)))return null;const s=t(o()),a=s.slice(0,n).concat(m).concat(s.slice(n));return d(a)}}),q=c.command({name:`${e.name}.InsertBeforeCommand`,impl:({get:t},{before:n,item:m})=>{const r=t(f()),s=e.key(m),a=e.key(n);if(r.includes(s))return null;const l=t(o()),i=[];for(const y of l)e.key(y)===a&&i.push(m),i.push(y);return d(i)}}),R=c.command({name:`${e.name}.InsertAfterCommand`,impl:({get:t},{after:n,item:m})=>{const r=t(f()),s=e.key(m),a=e.key(n);if(r.includes(s))return null;const l=t(o()),i=[];for(const y of l){const I=e.key(y);i.push(y),I===a&&i.push(m)}return d(i)}}),S=c.command({name:`${e.name}.ResetCommand`,impl:({})=>{var t;return d((t=e.default)!=null?t:[])}});return U.module({command:{SetListCommand:d,AddItemCommand:h,AddItemListCommand:$,DeleteItemCommand:w,DeleteItemListCommand:A,DeleteAllCommand:K,UpdateItemCommand:D,UpdateItemListCommand:Q,InsertAtCommand:g,InsertBeforeCommand:q,InsertAfterCommand:R,ResetCommand:S},query:{KeyListQuery:f,ItemQuery:k,ItemListQuery:o}})};export{v as L};
//# sourceMappingURL=list.e2597528.js.map
