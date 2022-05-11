var z=Object.defineProperty,J=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var _=(e,t,o)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,D=(e,t)=>{for(var o in t||(t={}))Z.call(t,o)&&_(e,o,t[o]);if($)for(var o of $(t))ee.call(t,o)&&_(e,o,t[o]);return e},Q=(e,t)=>J(e,X(t));import{j as T,a as d,r as h,F as te,c as oe}from"./jsx-runtime.a8396eb8.js";import{l as w,t as ne,u as re,N as q,H as ae,R as me,a as K}from"./localforage.d6d60220.js";import{R as C,u as f,b as g,t as de,c as le,d as se,e as ce}from"./remesh-logger.ff43b83d.js";import{f as ue,m as F}from"./map.53d3c8f5.js";import{f as O}from"./filter.477d968b.js";import{L as ie}from"./list.03eecd11.js";const M=C.extern({name:"StorageExtern",default:{get:()=>{throw new Error("Not implemented")},set:()=>{throw new Error("Not implemented")},clear:()=>{throw new Error("Not implemented")}}}),pe=M.impl({get:e=>w.getItem(e),set:async(e,t)=>{await w.setItem(e,t)},clear:e=>w.removeItem(e)}),Te=(e,t)=>{var l;const o=e.state({name:`${t.name}.TextState`,default:(l=t.default)!=null?l:""}),r=e.query({name:`${t.name}.TextQuery`,impl:({get:u})=>u(o())}),m=e.command({name:`${t.name}.SetTextCommand`,impl:(u,p)=>o().new(p)}),n=e.command({name:`${t.name}.ClearTextCommand`,impl:()=>o().new("")}),a=e.command({name:`${t.name}.ResetCommand`,impl:()=>{var u;return o().new((u=t.default)!=null?u:"")}});return C.module({query:{TextQuery:r},command:{SetTextCommand:m,ClearTextCommand:n,ResetCommand:a}})},Ce=(e,t)=>({listenTo:o=>({saveData:r=>({readData:m=>t({storageKey:e,TriggerEvent:o,saveData:r,readData:m})}),readData:r=>t({storageKey:e,TriggerEvent:o,saveData:m=>m,readData:r})})}),ye=(e,t)=>{const o=e.getExtern(M),r=e.command$({name:"ReadStorageCommand$",impl:()=>ue(o.get(t.storageKey)).pipe(O(n=>!!n),F(n=>t.readData(n)))}),m=e.command$({name:"WriteStorageCommand$",impl:({fromEvent:n})=>n(t.TriggerEvent).pipe(ne(a=>o.set(t.storageKey,t.saveData(a))),F(()=>null))});e.ignite(()=>r()),e.ignite(()=>m())},R=(e,t)=>Ce(t,o=>ye(e,o)),he="remesh-example/todo-input",P=C.domain({name:"TodoInputDomain",impl:e=>{const t=Te(e,{name:"TodoInput"}),o=e.event({name:"TodoInputChangedEvent"}),r=t.query.TextQuery,m=e.command({name:"SetTodoInputCommand",impl:({},a)=>[t.command.SetTextCommand(a),o(a)]}),n=t.command.ClearTextCommand;return R(e,he).listenTo(o).readData(a=>m(a)),{query:{TodoInputQuery:r},command:{SetTodoInputCommand:m,ClearTodoInputCommand:n},event:{TodoInputChangedEvent:o}}}}),ge=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=Math.random()*16|0,o=e=="x"?t:t&3|8;return o.toString(16)}),fe="remesh-example/todo-list",E=e=>e.id,L=C.domain({name:"TodoListDomain",impl:e=>{const t=ie(e,{name:"TodoList",key:E}),o=t.query.ItemListQuery,r=t.query.ItemQuery,m=t.query.KeyListQuery,n=e.event({name:"TodoListChangedEvent",impl:({get:c})=>c(o())}),a=e.command({name:"SetTodoListCommand",impl:(c,s)=>[t.command.SetListCommand(s),n()]}),l=e.event({name:"FailedToAddTodoEvent"}),u=e.event({name:"TodoItemAddedEvent"}),p=e.command({name:"AddTodoCommand",impl:(c,s)=>{if(s==="")return l({reason:"Title cannot be empty"});const i={id:ge(),title:s,completed:!1};return[t.command.AddItemCommand(i),u(i),n()]}}),y=e.command({name:"UpdateTodoCommand",impl:(c,s)=>s.title===""?I(s.id):[t.command.UpdateItemCommand(s),n()]}),I=e.command({name:"DeleteTodoCommand",impl:(c,s)=>[t.command.DeleteItemCommand(s),n()]}),A=e.query({name:"ActiveTodoListQuery",impl:({get:c})=>c(o()).filter(i=>!i.completed)}),x=e.query({name:"CompletedTodoListQuery",impl:({get:c})=>c(o()).filter(i=>i.completed)}),v=e.query({name:"ActiveTodoCountQuery",impl:({get:c})=>c(A()).length}),N=e.query({name:"CompletedTodoCountQuery",impl:({get:c})=>c(x()).length}),j=e.query({name:"IsAllCompletedQuery",impl:({get:c})=>{const s=c(o());return s.length===0?!1:c(N())===s.length}}),B=e.command({name:"ToggleTodoCommand",impl:({get:c},s)=>{const i=c(r(s)),S=Q(D({},i),{completed:!i.completed});return y(S)}}),G=e.command({name:"ToggleAllCommand",impl:({get:c})=>{const s=c(o());if(s.length===0)return null;const S=c(v())>0,Y=s.map(V=>Q(D({},V),{completed:S}));return a(Y)}}),W=e.command({name:"ClearAllCompletedCommand",impl:({get:c})=>{const s=c(o());if(s.length===0)return null;const i=s.filter(S=>!S.completed);return a(i)}});return R(e,fe).listenTo(n).readData(c=>a(c)),{query:{TodoQuery:r,TodoKeyListQuery:m,TodoListQuery:o,ActiveTodoListQuery:A,CompletedTodoListQuery:x,ActiveTodoCountQuery:v,CompletedTodoCountQuery:N,IsAllCompletedQuery:j},command:{SetTodoListCommand:a,AddTodoCommand:p,UpdateTodoCommand:y,DeleteTodoCommand:I,ToggleTodoCommand:B,ToggleAllCommand:G,ClearAllCompletedCommand:W},event:{FailedToAddTodoEvent:l,TodoListChangedEvent:n,TodoItemAddedEvent:u}}}});function H(e,t){return r=>{const m=Array.isArray(e)?e:[e];for(const n of m)r.key.toLowerCase()===n.toLowerCase()&&(r.preventDefault(),t(r,n))}}const xe=()=>{const e=f(P()),t=f(L()),o=g(e.query.TodoInputQuery()),r=n=>{e.command.SetTodoInputCommand(n.target.value)},m=H("Enter",()=>{t.command.AddTodoCommand(o)});return de(t.event.FailedToAddTodoEvent,n=>{alert(n.reason)}),T("header",{className:"header",children:[d("h1",{children:"todos"}),d("input",{className:"new-todo",placeholder:"What needs to be done?",value:o,onChange:r,onKeyDown:m})]})},ve=(e,t)=>{const o=e.state({name:`${t.name}.SwitchState`,default:t.default}),r=e.query({name:`${t.name}.SwitchQuery`,impl:({get:a})=>a(o())}),m=e.command({name:`${t.name}.SwitchCommand`,impl:(a,l)=>o().new(l)}),n=e.command({name:`${t.name}.ResetCommand`,impl:(a,l)=>o().new(l)});return C.module({query:{SwitchQuery:r},command:{SwitchCommand:m,ResetCommand:n}})},Se="remesh-example/todo-filter",Le=e=>{if(e===void 0)return"all";switch(e){case"all":case"active":case"completed":return e;default:return"all"}},U=C.domain({name:"TodoFilterDomain",impl:e=>{const t=ve(e,{name:"TodoFilter",default:"all"}),o=e.event({name:"TodoFilterChangedEvent"}),r=t.query.SwitchQuery,m=e.command({name:"SetFilterCommand",impl:(n,a)=>{const l=Le(a);return[t.command.SwitchCommand(l),o(l)]}});return R(e,Se).listenTo(o).readData(n=>m(n)),{query:{TodoFilterQuery:r},command:{SetFilterCommand:m},event:{TodoFilterChangedEvent:o}}}}),Ie=C.domain({name:"TodoAppDomain",impl:e=>{const t=e.getDomain(P()),o=e.getDomain(L()),r=e.getDomain(U()),m=e.query({name:"FilteredTodoKeyListQuery",impl:({get:a})=>{const l=a(r.query.TodoFilterQuery());if(l==="all")return a(o.query.TodoListQuery()).map(E);if(l==="active")return a(o.query.ActiveTodoListQuery()).map(E);if(l==="completed")return a(o.query.CompletedTodoListQuery()).map(E);throw new Error(`Unknown filter: ${l}`)}}),n=e.command$({name:"ClearTodoInputCommand$",impl:({fromEvent:a,get:l})=>a(o.event.TodoItemAddedEvent).pipe(O(u=>l(t.query.TodoInputQuery())===u.title),F(()=>t.command.ClearTodoInputCommand()))});return e.ignite(()=>n()),{query:{FilteredTodoKeyListQuery:m}}}});function Ae(e){const[t,o]=h.exports.useState(e),r=h.exports.useCallback(m=>{o(m.target.value)},[]);return[t,r,o]}function De(e){const t=f(L()),o=g(t.query.TodoQuery(e.id)),[r,m]=h.exports.useState(!1),[n,a]=Ae(o.title),l=()=>{t.command.UpdateTodoCommand(Q(D({},o),{title:n})),m(!1)},u=H(["Enter","Escape"],()=>{l()}),p=()=>{m(!0)},y=()=>{t.command.ToggleTodoCommand(o.id)},I=()=>{t.command.DeleteTodoCommand(o.id)},A=()=>{l()},x=h.exports.useRef(null);return h.exports.useEffect(()=>{var v;r&&((v=x.current)==null||v.focus())},[r]),T("li",{className:`${r&&"editing"} ${o.completed&&"completed"}`,children:[T("div",{className:"view",children:[d("input",{type:"checkbox",className:"toggle",checked:o.completed,onChange:y}),d("label",{onDoubleClick:p,children:o.title}),d("button",{className:"destroy",onClick:I})]}),r&&d("input",{ref:x,className:"edit",value:n,onChange:a,onKeyDown:u,onBlur:A})]})}const Qe=()=>{const e=f(Ie()),t=g(e.query.FilteredTodoKeyListQuery());return console.log("render list"),T("section",{className:"main",children:[d(Ee,{}),d("ul",{className:"todo-list",children:t.map(o=>d(De,{id:o},o))})]})},Ee=()=>{const e=f(L()),t=g(e.query.IsAllCompletedQuery());return T(te,{children:[d("input",{id:"toggle-all",type:"checkbox",className:"toggle-all",checked:t,onChange:()=>{e.command.ToggleAllCommand()}}),d("label",{htmlFor:"toggle-all"})]})},we=()=>{const e=f(L()),t=f(U()),o=g(t.query.TodoFilterQuery()),r=g(e.query.ActiveTodoCountQuery()),n=g(e.query.CompletedTodoCountQuery())>0,a=()=>{e.command.ClearAllCompletedCommand()},l=p=>p.isActive?"selected":"",u=re();return h.exports.useEffect(()=>{var y;const p=(y=u.filter)!=null?y:"all";p!==o&&t.command.SetFilterCommand(p)},[u,o]),T("footer",{className:"footer",children:[T("span",{className:"todo-count",children:[d("strong",{children:r})," item",r!==1&&"s"," left"]}),T("ul",{className:"filters",children:[d("li",{children:d(q,{to:"/",className:l,children:"All"})}),d("li",{children:d(q,{to:"/active",className:l,children:"Active"})}),d("li",{children:d(q,{to:"/completed",className:l,children:"Completed"})})]}),n&&d("button",{className:"clear-completed",onClick:a,children:"Clear completed"})]})},b=()=>T("div",{className:"todoapp",children:[d(xe,{}),d(Qe,{}),d(we,{})]}),k=document.getElementById("root");if(k){const e=oe(k),t=C.store({externs:[pe],inspectors:[le(),se()]});e.render(d(h.exports.StrictMode,{children:d(ce,{store:t,children:d(ae,{basename:"/",children:T(me,{children:[d(K,{path:"/",element:d(b,{})}),d(K,{path:"/:filter",element:d(b,{})})]})})})}))}
//# sourceMappingURL=index.79a9166c.js.map
