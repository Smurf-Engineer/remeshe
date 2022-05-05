const b=(m,t)=>{const y=m.state({name:`${t.name}.KeyListState`,default:[]}),L=m.state({name:`${t.name}.ItemState`}),i=m.query({name:`${t.name}.itemList`,impl:({get:e})=>e(y()).map(n=>e(L(n)))}),u=m.command({name:`${t.name}.setList`,impl:({},e)=>{const n=e.map(t.key);return[e.map((s,r)=>L(n[r]).new(s)),y().new(n)]}}),I=m.command({name:`${t.name}.addItem`,impl:({get:e},n)=>{const s=e(y()),r=e(i()),c=t.key(n);return s.includes(c)?null:u(r.concat(n))}}),$=m.command({name:`${t.name}.addItems`,impl:({get:e},n)=>{const s=e(y()),r=e(i()),c=[];for(const l of n){const a=t.key(l);s.includes(a)||c.push(l)}return c.length===0?null:u(r.concat(c))}}),K=m.command({name:`${t.name}.deleteItem`,impl:({get:e},n)=>{const r=e(i()).filter(c=>t.key(c)!==n);return u(r)}}),o=m.command({name:`${t.name}.deleteItems`,impl:({get:e},n)=>{const r=e(i()).filter(c=>!n.includes(t.key(c)));return u(r)}}),w=m.command({name:`${t.name}.deleteAll`,impl:({})=>u([])}),h=m.command({name:`${t.name}.updateItem`,impl:({get:e},n)=>{const s=t.key(n);if(!e(y()).includes(s))return null;const l=e(i()).map(a=>t.key(a)===s?n:a);return u(l)}}),A=m.command({name:`${t.name}.updateItems`,impl:({get:e},n)=>{const s=e(y()),r=e(i()),c=n.map(a=>t.key(a)),l=[];for(const[a,d]of s.entries()){const f=c.indexOf(d);if(f!==-1){const k=n[f];l.push(k)}else l.push(r[a])}return u(l)}}),q=m.command({name:`${t.name}.insertAt`,impl:({get:e},{index:n,item:s})=>{if(e(y()).includes(t.key(s)))return null;const c=e(i()),l=c.slice(0,n).concat(s).concat(c.slice(n));return u(l)}}),S=m.command({name:`${t.name}.insertBefore`,impl:({get:e},{before:n,item:s})=>{const r=e(y()),c=t.key(s),l=t.key(n);if(r.includes(c))return null;const a=e(i()),d=[];for(const f of a)t.key(f)===l&&d.push(s),d.push(f);return u(d)}}),x=m.command({name:`${t.name}.insertAfter`,impl:({get:e},{after:n,item:s})=>{const r=e(y()),c=t.key(s),l=t.key(n);if(r.includes(c))return null;const a=e(i()),d=[];for(const f of a){const k=t.key(f);d.push(f),k===l&&d.push(s)}return u(d)}}),B=m.command({name:`${t.name}.reset`,impl:()=>{var e;return u((e=t.default)!=null?e:[])}});return m.ignite(()=>{var e;return u((e=t.default)!=null?e:[])}),{command:{setList:u,addItem:I,addItems:$,deleteItem:K,deleteItems:o,deleteAll:w,updateItem:h,updateItems:A,insertAt:q,insertBefore:S,insertAfter:x,reset:B},query:{keyList:y.query,item:L.query,itemList:i}}};export{b as L};
//# sourceMappingURL=list.ccef92b0.js.map
