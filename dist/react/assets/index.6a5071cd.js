var z=Object.defineProperty,J=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var b=(e,t,o)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,S=(e,t)=>{for(var o in t||(t={}))Z.call(t,o)&&b(e,o,t[o]);if($)for(var o of $(t))ee.call(t,o)&&b(e,o,t[o]);return e},A=(e,t)=>J(e,X(t));import{j as T,a as l,r as h,F as te,c as oe}from"./jsx-runtime.a8396eb8.js";import{l as q,t as ne,u as re,N as F,H as se,R as ae,a as K}from"./localforage.8e419457.js";import{R as x,u as y,b as g,t as le,c as de,d as ce,e as me}from"./remesh-logger.2c0a612e.js";import{f as ie,m as N}from"./map.105726f2.js";import{f as O}from"./filter.44240442.js";import{L as ue}from"./list.7d7eb13d.js";const M=x.extern({name:"Storage",default:{get:()=>{throw new Error("Not implemented")},set:()=>{throw new Error("Not implemented")},clear:()=>{throw new Error("Not implemented")}}}),pe=M.impl({get:e=>q.getItem(e),set:async(e,t)=>{await q.setItem(e,t)},clear:e=>q.removeItem(e)}),Te=(e,t)=>{var d;const o=e.state({name:`${t.name}.TextState`,default:(d=t.default)!=null?d:""}),n=e.query({name:`${t.name}.TextQuery`,impl:({get:u})=>u(o())}),s=e.command({name:`${t.name}.setText`,impl:(u,i)=>o().new(i)}),r=e.command({name:`${t.name}.clearText`,impl:()=>s("")}),a=e.command({name:`${t.name}.reset`,impl:u=>{var i;return o().new((i=t.default)!=null?i:"")}});return{query:{text:n},command:{setText:s,clearText:r,reset:a}}},he=(e,t)=>({listenTo:o=>({saveData:n=>({readData:s=>t({storageKey:e,TriggerEvent:o,saveData:n,readData:s})}),readData:n=>t({storageKey:e,TriggerEvent:o,saveData:s=>s,readData:n})})}),ge=(e,t)=>{const o=e.getExtern(M),n=e.command$({name:"readStorage",impl:()=>ie(o.get(t.storageKey)).pipe(O(r=>!!r),N(r=>t.readData(r)))}),s=e.command$({name:"writeStorage",impl:({fromEvent:r})=>r(t.TriggerEvent).pipe(ne(a=>o.set(t.storageKey,t.saveData(a))),N(()=>null))});e.ignite(()=>n()),e.ignite(()=>s())},R=(e,t)=>he(t,o=>ge(e,o)),ye="remesh-example/todo-input",P=x.domain({name:"TodoInput",impl:e=>{const t=Te(e,{name:"TodoInput"}),o=e.event({name:"TodoInputChangedEvent"}),n=t.query.text,s=e.command({name:"setTodoInput",impl:({},a)=>[t.command.setText(a),o(a)]}),r=t.command.clearText;return R(e,ye).listenTo(o).readData(a=>s(a)),{query:{todoInput:n},command:{setTodoInput:s,clearTodoInput:r},event:{TodoInputChangedEvent:o}}}}),fe=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=Math.random()*16|0,o=e=="x"?t:t&3|8;return o.toString(16)}),xe="remesh-example/todo-list",D=e=>e.id,I=x.domain({name:"TodoList",impl:e=>{const t=ue(e,{name:"TodoList",key:D}),o=t.query.itemList,n=t.query.item,s=t.query.keyList,r=e.event({name:"TodoListChangedEvent"}),a=e.command({name:"setTodoList",impl:(m,c)=>[t.command.setList(c),r(c)]}),d=e.event({name:"FailedToAddTodoEvent"}),u=e.event({name:"TodoItemAddedEvent"}),i=e.command({name:"TodoList.addTodo",impl:(m,c)=>{if(c==="")return d({reason:"Title cannot be empty"});const p={id:fe(),title:c,completed:!1};return[t.command.addItem(p),u(p)]}}),f=e.command({name:"TodoList.updateTodo",impl:(m,c)=>c.title===""?E(c.id):t.command.updateItem(c)}),E=t.command.deleteItem,w=e.query({name:"ActiveTodoListQuery",impl:({get:m})=>m(o()).filter(p=>!p.completed)}),v=e.query({name:"CompletedTodoListQuery",impl:({get:m})=>m(o()).filter(p=>p.completed)}),C=e.query({name:"ActiveTodoCountQuery",impl:({get:m})=>m(w()).length}),_=e.query({name:"CompletedTodoCountQuery",impl:({get:m})=>m(v()).length}),B=e.query({name:"IsAllCompletedQuery",impl:({get:m})=>{const c=m(o());return c.length===0?!1:m(_())===c.length}}),G=e.command({name:"toggleTodo",impl:({get:m},c)=>{const p=m(n(c)),L=A(S({},p),{completed:!p.completed});return t.command.updateItem(L)}}),W=e.command({name:"toggleAllTodos",impl:({get:m})=>{const c=m(o());if(c.length===0)return null;const L=m(C())>0,U=c.map(V=>A(S({},V),{completed:L}));return a(U)}}),Y=e.command({name:"clearAllCompletedTodos",impl:({get:m})=>{const c=m(o());if(c.length===0)return null;const p=c.filter(L=>!L.completed);return a(p)}});return R(e,xe).listenTo(r).readData(m=>a(m)),{query:{todoState:n,todoKeyList:s,todoList:o,activeTodoList:w,completedTodoList:v,activeTodoCount:C,completedTodoCount:_,isAllCompleted:B},command:{setTodoList:a,addTodo:i,updateTodo:f,deleteTodo:E,toggleTodo:G,toggleAllTodos:W,clearAllCompletedTodos:Y},event:{FailedToAddTodoEvent:d,TodoListChangedEvent:r,TodoItemAddedEvent:u}}}});function H(e,t){return n=>{const s=Array.isArray(e)?e:[e];for(const r of s)n.key.toLowerCase()===r.toLowerCase()&&(n.preventDefault(),t(n,r))}}const ve=()=>{const e=y(P()),t=y(I()),o=g(e.query.todoInput()),n=r=>{e.command.setTodoInput(r.target.value)},s=H("Enter",()=>{t.command.addTodo(o)});return le(t.event.FailedToAddTodoEvent,r=>{alert(r.reason)}),T("header",{className:"header",children:[l("h1",{children:"todos"}),l("input",{className:"new-todo",placeholder:"What needs to be done?",value:o,onChange:n,onKeyDown:s})]})},Ce=(e,t)=>{const o=e.state({name:`${t.name}.SwitchState`,default:t.default}),n=e.query({name:`${t.name}.SwitchStateQuery`,impl:({get:a})=>a(o())}),s=e.command({name:`${t.name}.switchTo`,impl:(a,d)=>o().new(d)}),r=e.command({name:`${t.name}.reset`,impl:(a,d)=>o().new(d)});return{query:{switchState:n},command:{switchTo:s,reset:r}}},Le="remesh-example/todo-filter",Ie=e=>{if(e===void 0)return"all";switch(e){case"all":case"active":case"completed":return e;default:return"all"}},j=x.domain({name:"TodoFilter",impl:e=>{const t=Ce(e,{name:"TodoFilter",default:"all"}),o=e.event({name:"TodoFilterChangedEvent"}),n=t.query.switchState,s=e.command({name:"TodoFilter.setFilter",impl:(r,a)=>{const d=Ie(a);return[t.command.switchTo(d),o(d)]}});return R(e,Le).listenTo(o).readData(r=>s(r)),{query:{todoFilter:n},command:{setFilter:s},event:{TodoFilterChangedEvent:o}}}}),Ee=x.domain({name:"TodoApp",impl:e=>{const t=e.getDomain(P()),o=e.getDomain(I()),n=e.getDomain(j()),s=e.query({name:"FilteredTodoList",impl:({get:a})=>{const d=a(n.query.todoFilter());if(d==="all")return a(o.query.todoList()).map(D);if(d==="active")return a(o.query.activeTodoList()).map(D);if(d==="completed")return a(o.query.completedTodoList()).map(D);throw new Error(`Unknown filter: ${d}`)}}),r=e.command$({name:"clearTodoInputWhenSubmit",impl:({fromEvent:a,get:d})=>a(o.event.TodoItemAddedEvent).pipe(O(u=>d(t.query.todoInput())===u.title),N(()=>t.command.clearTodoInput()))});return e.ignite(()=>r()),{query:{FilteredTodoKeyListQuery:s},command:{},event:{}}}});function we(e){const[t,o]=h.exports.useState(e),n=h.exports.useCallback(s=>{o(s.target.value)},[]);return[t,n,o]}function Se(e){const t=y(I()),o=g(t.query.todoState(e.id)),[n,s]=h.exports.useState(!1),[r,a]=we(o.title),d=()=>{t.command.updateTodo(A(S({},o),{title:r})),s(!1)},u=H(["Enter","Escape"],()=>{d()}),i=()=>{s(!0)},f=()=>{t.command.toggleTodo(o.id)},E=()=>{t.command.deleteTodo(o.id)},w=()=>{d()},v=h.exports.useRef(null);return h.exports.useEffect(()=>{var C;n&&((C=v.current)==null||C.focus())},[n]),T("li",{className:`${n&&"editing"} ${o.completed&&"completed"}`,children:[T("div",{className:"view",children:[l("input",{type:"checkbox",className:"toggle",checked:o.completed,onChange:f}),l("label",{onDoubleClick:i,children:o.title}),l("button",{className:"destroy",onClick:E})]}),n&&l("input",{ref:v,className:"edit",value:r,onChange:a,onKeyDown:u,onBlur:w})]})}const Ae=()=>{const e=y(Ee()),t=g(e.query.FilteredTodoKeyListQuery());return console.log("render list"),T("section",{className:"main",children:[l(De,{}),l("ul",{className:"todo-list",children:t.map(o=>l(Se,{id:o},o))})]})},De=()=>{const e=y(I()),t=g(e.query.isAllCompleted());return T(te,{children:[l("input",{id:"toggle-all",type:"checkbox",className:"toggle-all",checked:t,onChange:()=>{e.command.toggleAllTodos()}}),l("label",{htmlFor:"toggle-all"})]})},qe=()=>{const e=y(I()),t=y(j()),o=g(t.query.todoFilter()),n=g(e.query.activeTodoCount()),r=g(e.query.completedTodoCount())>0,a=()=>{e.command.clearAllCompletedTodos()},d=i=>i.isActive?"selected":"",u=re();return h.exports.useEffect(()=>{var f;const i=(f=u.filter)!=null?f:"all";i!==o&&t.command.setFilter(i)},[u,o]),T("footer",{className:"footer",children:[T("span",{className:"todo-count",children:[l("strong",{children:n})," item",n!==1&&"s"," left"]}),T("ul",{className:"filters",children:[l("li",{children:l(F,{to:"/",className:d,children:"All"})}),l("li",{children:l(F,{to:"/active",className:d,children:"Active"})}),l("li",{children:l(F,{to:"/completed",className:d,children:"Completed"})})]}),r&&l("button",{className:"clear-completed",onClick:a,children:"Clear completed"})]})},Q=()=>T("div",{className:"todoapp",children:[l(ve,{}),l(Ae,{}),l(qe,{})]}),k=document.getElementById("root");if(k){const e=oe(k),t=x.store({externs:[pe],inspectors:[de(),ce()]});e.render(l(h.exports.StrictMode,{children:l(me,{store:t,children:l(se,{basename:"/",children:T(ae,{children:[l(K,{path:"/",element:l(Q,{})}),l(K,{path:"/:filter",element:l(Q,{})})]})})})}))}
//# sourceMappingURL=index.6a5071cd.js.map
