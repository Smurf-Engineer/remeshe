var Z=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var _=(e,t,o)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,w=(e,t)=>{for(var o in t||(t={}))oe.call(t,o)&&_(e,o,t[o]);if(k)for(var o of k(t))ne.call(t,o)&&_(e,o,t[o]);return e},S=(e,t)=>ee(e,te(t));import{j as h,a,r as g,F as re,c as se}from"./jsx-runtime.cbb87597.js";import{l as q,t as ae,u as de,N as F,H as le,R as ce,a as O}from"./localforage.dae84f5a.js";import{R as C,m as N,u as f,d as y,B as me,e as ie,f as ue,g as pe}from"./remesh-logger.7aafe251.js";import{f as Te}from"./from.2d9119b3.js";import{f as H}from"./filter.3bf134b6.js";import{L as he}from"./list.dcb6ad7a.js";const U=C.extern({name:"Storage",default:{get:()=>{throw new Error("Not implemented")},set:()=>{throw new Error("Not implemented")},clear:()=>{throw new Error("Not implemented")}}}),ve=U({get:e=>q.getItem(e),set:async(e,t)=>{await q.setItem(e,t)},clear:e=>q.removeItem(e)}),ge=(e,t)=>{var i;const o=e.state({name:`${t.name}.TextState`,default:(i=t.default)!=null?i:""}),n=e.query({name:`${t.name}.TextQuery`,impl:({get:u})=>u(o())}),s=e.event({name:`${t.name}.TextChangedEvent`}),r=e.command({name:`${t.name}.setText`,impl:({get:u},T)=>{const v=u(o()),x=[o().new(T),s({previous:v,current:T})];return T===""?[...x,d({previous:v})]:x}}),d=e.event({name:`${t.name}.InputClearedEvent`}),l=e.command({name:`${t.name}.clearText`,impl:()=>r("")});return{query:{text:n},command:{setText:r,clearText:l},event:{TextChangedEvent:s,TextClearedEvent:d}}},ye=(e,t)=>({listenTo:o=>({saveData:n=>({readData:s=>t({storageKey:e,TriggerEvent:o,saveData:n,readData:s})}),readData:n=>t({storageKey:e,TriggerEvent:o,saveData:s=>s,readData:n})})}),fe=(e,t)=>{const o=e.getExtern(U),n=e.command$({name:"readStorage",impl:()=>Te(o.get(t.storageKey)).pipe(H(r=>!!r),N(r=>t.readData(r)))}),s=e.command$({name:"writeStorage",impl:({fromEvent:r})=>r(t.TriggerEvent).pipe(ae(d=>o.set(t.storageKey,t.saveData(d))),N(()=>null))});e.ignite(()=>n()),e.ignite(()=>s())},R=(e,t)=>ye(t,o=>fe(e,o)),xe="remesh-example/todo-input",B=C.domain({name:"TodoInput",impl:e=>{const t=ge(e,{name:"TodoInput"}),o=t.query.text,n=t.event.TextChangedEvent,s=t.event.TextClearedEvent,r=t.command.setText,d=t.command.clearText;return R(e,xe).listenTo(n).saveData(l=>l.current).readData(l=>r(l)),{query:{todoInput:o},command:{setTodoInput:r,clearTodoInput:d},event:{TodoInputChangedEvent:n,TodoInputClearedEvent:s}}}}),Ce=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=Math.random()*16|0,o=e=="x"?t:t&3|8;return o.toString(16)}),Ee="remesh-example/todo-list",A=e=>e.id,L=C.domain({name:"TodoList",impl:e=>{const t=he(e,{name:"TodoList",key:A}),o=t.query.itemList,n=t.query.item,s=t.query.keyList,r=t.event.ListChangedEvent,d=t.event.ItemAddedEvent,l=t.event.ItemUpdatedEvent,i=t.event.ItemDeletedEvent,u=t.event.FailedToAddItemEvent,T=t.event.FailedToUpdateItemEvent,v=t.command.setList,x=e.command({name:"TodoList.addTodo",impl:(c,m)=>{if(m==="")return u({reason:"Title cannot be empty"});const p={id:Ce(),title:m,completed:!1};return t.command.addItem(p)}}),D=e.command({name:"TodoList.updateTodo",impl:(c,m)=>m.title===""?E(m.id):t.command.updateItem(m)}),E=t.command.deleteItem,$=e.query({name:"ActiveTodoListQuery",impl:({get:c})=>c(o()).filter(p=>!p.completed)}),K=e.query({name:"CompletedTodoListQuery",impl:({get:c})=>c(o()).filter(p=>p.completed)}),Q=e.query({name:"ActiveTodoCountQuery",impl:({get:c})=>c($()).length}),b=e.query({name:"CompletedTodoCountQuery",impl:({get:c})=>c(K()).length}),W=e.query({name:"IsAllCompletedQuery",impl:({get:c})=>{const m=c(o());return m.length===0?!1:c(b())===m.length}}),Y=e.command({name:"toggleTodo",impl:({get:c},m)=>{const p=c(n(m)),I=S(w({},p),{completed:!p.completed});return t.command.updateItem(I)}}),V=e.command({name:"toggleAllTodos",impl:({get:c})=>{const m=c(o());if(m.length===0)return null;const I=c(Q())>0,J=m.map(X=>S(w({},X),{completed:I}));return v(J)}}),z=e.command({name:"clearAllCompletedTodos",impl:({get:c})=>{const m=c(o());if(m.length===0)return null;const p=m.filter(I=>!I.completed);return v(p)}});return R(e,Ee).listenTo(r).saveData(c=>c.current).readData(c=>v(c)),{query:{todoState:n,todoKeyList:s,todoList:o,activeTodoList:$,completedTodoList:K,activeTodoCount:Q,completedTodoCount:b,isAllCompleted:W},command:{setTodoList:v,addTodo:x,updateTodo:D,deleteTodo:E,toggleTodo:Y,toggleAllTodos:V,clearAllCompletedTodos:z},event:{TodoItemAddedEvent:d,TodoItemUpdatedEvent:l,TodoItemDeletedEvent:i,FailedToAddTodoEvent:u,FailedToUpdateTodoEvent:T,TodoListChangedEvent:r}}}});function j(e,t){return n=>{const s=Array.isArray(e)?e:[e];for(const r of s)n.key.toLowerCase()===r.toLowerCase()&&(n.preventDefault(),t(n,r))}}const Ie=()=>{const e=f(B()),t=f(L()),o=y(e.query.todoInput()),n=r=>{e.command.setTodoInput(r.target.value)},s=j("Enter",()=>{t.command.addTodo(o)});return me(t.event.FailedToAddTodoEvent,r=>{alert(r.reason)}),h("header",{className:"header",children:[a("h1",{children:"todos"}),a("input",{className:"new-todo",placeholder:"What needs to be done?",value:o,onChange:n,onKeyDown:s})]})},Le=(e,t)=>{const o=e.state({name:`${t.name}.SwitchState`,default:t.default}),n=e.query({name:`${t.name}.SwitchStateQuery`,impl:({get:d})=>d(o())}),s=e.event({name:`${t.name}.SwitchedEvent`}),r=e.command({name:`${t.name}.switchTo`,impl:({get:d},l)=>{const i=d(o());return[o().new(l),s({previous:i,current:l})]}});return{query:{switchState:n},command:{switchTo:r},event:{SwitchedEvent:s}}},De="remesh-example/todo-filter",we=e=>{if(e===void 0)return"all";switch(e){case"all":case"active":case"completed":return e;default:return"all"}},G=C.domain({name:"TodoFilter",impl:e=>{const t=Le(e,{name:"TodoFilter",default:"all"}),o=t.query.switchState,n=t.event.SwitchedEvent,s=t.command.switchTo,r=e.command({name:"TodoFilter.setFilter",impl:(d,l)=>{const i=we(l);return s(i)}});return R(e,De).listenTo(n).saveData(d=>d.current).readData(d=>r(d)),{query:{todoFilter:o},command:{setFilter:r,switchFilter:s},event:{TodoFilterChangedEvent:n}}}}),Se=C.domain({name:"TodoApp",impl:e=>{const t=e.getDomain(B()),o=e.getDomain(L()),n=e.getDomain(G()),s=e.query({name:"FilteredTodoList",impl:({get:d})=>{const l=d(n.query.todoFilter());if(l==="all")return d(o.query.todoList()).map(A);if(l==="active")return d(o.query.activeTodoList()).map(A);if(l==="completed")return d(o.query.completedTodoList()).map(A);throw new Error(`Unknown filter: ${l}`)}}),r=e.command$({name:"clearTodoInputWhenSubmit",impl:({fromEvent:d,get:l})=>d(o.event.TodoItemAddedEvent).pipe(H(i=>l(t.query.todoInput())===i.item.title),N(()=>t.command.clearTodoInput()))});return e.ignite(()=>r()),{query:{FilteredTodoKeyListQuery:s},command:{},event:{}}}});function Ae(e){const[t,o]=g.exports.useState(e),n=g.exports.useCallback(s=>{o(s.target.value)},[]);return[t,n,o]}function qe(e){const t=f(L()),o=y(t.query.todoState(e.id)),[n,s]=g.exports.useState(!1),[r,d]=Ae(o.title),l=()=>{t.command.updateTodo(S(w({},o),{title:r})),s(!1)},i=j(["Enter","Escape"],()=>{l()}),u=()=>{s(!0)},T=()=>{t.command.toggleTodo(o.id)},v=()=>{t.command.deleteTodo(o.id)},x=()=>{l()},D=g.exports.useRef(null);return g.exports.useEffect(()=>{var E;n&&((E=D.current)==null||E.focus())},[n]),h("li",{className:`${n&&"editing"} ${o.completed&&"completed"}`,children:[h("div",{className:"view",children:[a("input",{type:"checkbox",className:"toggle",checked:o.completed,onChange:T}),a("label",{onDoubleClick:u,children:o.title}),a("button",{className:"destroy",onClick:v})]}),n&&a("input",{ref:D,className:"edit",value:r,onChange:d,onKeyDown:i,onBlur:x})]})}const Fe=()=>{const e=f(Se()),t=y(e.query.FilteredTodoKeyListQuery());return console.log("render list"),h("section",{className:"main",children:[a(Ne,{}),a("ul",{className:"todo-list",children:t.map(o=>a(qe,{id:o},o))})]})},Ne=()=>{const e=f(L()),t=y(e.query.isAllCompleted());return h(re,{children:[a("input",{id:"toggle-all",type:"checkbox",className:"toggle-all",checked:t,onChange:()=>{e.command.toggleAllTodos()}}),a("label",{htmlFor:"toggle-all"})]})},Re=()=>{const e=f(L()),t=f(G()),o=y(t.query.todoFilter()),n=y(e.query.activeTodoCount()),r=y(e.query.completedTodoCount())>0,d=()=>{e.command.clearAllCompletedTodos()},l=u=>u.isActive?"selected":"",i=de();return g.exports.useEffect(()=>{var T;const u=(T=i.filter)!=null?T:"all";u!==o&&t.command.setFilter(u)},[i,o]),h("footer",{className:"footer",children:[h("span",{className:"todo-count",children:[a("strong",{children:n})," item",n!==1&&"s"," left"]}),h("ul",{className:"filters",children:[a("li",{children:a(F,{to:"/",className:l,children:"All"})}),a("li",{children:a(F,{to:"/active",className:l,children:"Active"})}),a("li",{children:a(F,{to:"/completed",className:l,children:"Completed"})})]}),r&&a("button",{className:"clear-completed",onClick:d,children:"Clear completed"})]})},M=()=>h("div",{className:"todoapp",children:[a(Ie,{}),a(Fe,{}),a(Re,{})]}),P=document.getElementById("root");if(P){const e=se(P),t=C.store({externs:[ve],inspectors:[ie(),ue()]});e.render(a(g.exports.StrictMode,{children:a(pe,{store:t,children:a(le,{basename:"/",children:h(ce,{children:[a(O,{path:"/",element:a(M,{})}),a(O,{path:"/:filter",element:a(M,{})})]})})})}))}
//# sourceMappingURL=index.5215e7d9.js.map
