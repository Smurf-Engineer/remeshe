var _=Object.defineProperty,j=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var $=(e,t,o)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,p=(e,t)=>{for(var o in t||(t={}))J.call(t,o)&&$(e,o,t[o]);if(D)for(var o of D(t))X.call(t,o)&&$(e,o,t[o]);return e},C=(e,t)=>j(e,G(t));import"./modulepreload-polyfill.b7f2da20.js";/* empty css              */import{q as R,u as Y,e as S,v as A,m as Z,r as T,R as n,w as ee,x as I,c as te,H as oe,y as ne,z as H}from"./vendor.c9d1239b.js";import{R as k,u as K,a as b,e as ae,b as le,c as se,d as ce}from"./remesh-logger.0a0f746f.js";const re=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=Math.random()*16|0,o=e=="x"?t:t&3|8;return o.toString(16)}),N="todo-mvc-data",w=()=>R.getItem(N).then(e=>e!=null?e:[]),de=k.extern({name:"TodoRepoExtern",default:{async getTodoList(){return w()},async addTodo(e){let t=await w();await R.setItem(N,t.concat(e))},async removeTodoByIds(e){let t=await w();await R.setItem(N,t.filter(o=>!e.includes(o.id)))},async updateTodo(e){let t=await w();await R.setItem(N,t.map(o=>o.id===e.id?p(p({},o),e):o))},async toggleCompletedByIds(e,t){let o=await w();await R.setItem(N,o.map(r=>e.includes(r.id)?C(p({},r),{completed:t}):r))}}}),F=k.domain({name:"TodoDomain",impl:e=>{const t=e.getExtern(de),o=e.state({name:"TodoList",default:[]}),r=e.query({name:"TodoListQuery",impl({get:l},a){const m=l(o());return a==="active"?m.filter(s=>!s.completed):a==="completed"?m.filter(s=>s.completed):m}}),u=e.query({name:"HasCompletedQuery",impl({get:l}){return l(r("completed")).length>0}}),g=e.query({name:"ActiveTodoCountQuery",impl({get:l}){return l(r("active")).length}}),f=e.query({name:"AllCompletedQuery",impl({get:l}){return l(g())===0&&l(r()).length>0}}),x=e.event({name:"addTodoEvent"}),y=e.command({name:"setTodoList",impl(l,a){return o().new(a)}}),h=e.event({name:"AddTodoFailedEvent"}),L=e.command({name:"addTodo",impl({get:l},a){if(a.trim()==="")return[h("Cannot be empty, please enter the TODO name")];const m=l(o()),s={id:re(),name:a,completed:!1};return[o().new([s,...m]),x(s)]}}),E=e.event({name:"removeTodoEvent"}),i=e.command({name:"removeTodo",impl({get:l},a){const s=l(o()).filter(c=>c.id!==a);return[o().new(s),E([a])]}}),q=e.event({name:"TodoUpdatedEvent"}),U=e.command({name:"updateTodo",impl({get:l},a){const m=l(o());if(a.name&&a.name.trim()==="")return i(a.id);const s=m.map(d=>d.id===a.id?C(p(p({},d),a),{id:d.id}):d),c=s.find(d=>d.id===a.id);return c?[o().new(s),q(c)]:null}}),Q=e.event({name:"TodoCompletedChangedEvent"}),z=e.command({name:"toggleTodoCompleted",impl({get:l},a){const s=l(o()).map(v=>v.id===a?C(p({},v),{completed:!v.completed}):v),c=s.find(v=>v.id===a);if(!c)return null;const d={ids:[a],completed:c==null?void 0:c.completed};return[o().new(s),Q(d)]}}),V=e.command({name:"toggleAllTodoCompleted",impl({get:l},a){const m=l(o());if(m.length===0)return null;const s=m.map(c=>C(p({},c),{completed:a}));return[o().new(s),Q({ids:s.map(c=>c.id),completed:a})]}}),W=e.command({name:"clearCompleted",impl({get:l}){const a=l(o()),m=a.filter(c=>!c.completed),s=a.filter(c=>c.completed).map(c=>c.id);return[o().new(m),E(s)]}});return e.command$({name:"fromRepoToState",impl(){return Y(t.getTodoList()).pipe(S(l=>y(l)))}}),e.command$({name:"fromStateToRepo",impl:({fromEvent:l})=>{const a=l(x).pipe(A(d=>t.addTodo(d))),m=l(E).pipe(A(d=>t.removeTodoByIds(d))),s=l(q).pipe(A(d=>t.updateTodo(d))),c=l(Q).pipe(A(d=>t.toggleCompletedByIds(d.ids,d.completed)));return Z(a,m,s,c).pipe(S(()=>null))}}),{query:{TodoListQuery:r,ActiveTodoCountQuery:g,HasCompletedQuery:u,AllCompletedQuery:f},command:{addTodo:L,removeTodo:i,toggleTodoCompleted:z,toggleAllTodoCompleted:V,updateTodo:U,clearCompleted:W},event:{AddTodoFailedEvent:h}}}});function M(e){const[t,o]=T.exports.useState(e),r=T.exports.useCallback(u=>{o(u.target.value)},[]);return[t,r,o]}function O(e,t){const o=T.exports.useRef(t),r=T.exports.useCallback(u=>{u.key.toLocaleLowerCase()===e.toLocaleLowerCase()&&(u.preventDefault(),o.current(u))},[e]);return T.exports.useEffect(()=>{o.current=t}),r}function me({todo:e}){const t=K(F()),[o,r]=T.exports.useState(!1),u=T.exports.useRef(null),[g,f]=M(e.name),x=O("Enter",()=>{t.command.updateTodo(C(p({},e),{name:g})),r(!1)}),y=()=>{r(!0)},h=()=>{t.command.toggleTodoCompleted(e.id)},L=()=>{t.command.removeTodo(e.id)};return T.exports.useEffect(()=>{var E;o&&((E=u.current)==null||E.focus())},[o]),n.createElement("li",{onDoubleClick:y,className:`${o?"editing":""} ${e.completed?"completed":""}`},n.createElement("div",{className:"view"},n.createElement("input",{type:"checkbox",className:"toggle",checked:e.completed,onChange:h}),n.createElement("label",null,e.name),n.createElement("button",{className:"destroy",onClick:L})),o&&n.createElement("input",{ref:u,className:"edit",value:g,onChange:f,onKeyPress:x,onBlur:()=>{r(!1)}}))}const B=()=>{const{filter:e}=ee(),t=K(F()),o=b(t.query.TodoListQuery(e)),r=b(t.query.ActiveTodoCountQuery()),u=b(t.query.HasCompletedQuery()),g=b(t.query.AllCompletedQuery()),[f,x,y]=M(""),h=O("Enter",()=>{t.command.addTodo(f),y("")}),L=()=>{t.command.toggleAllTodoCompleted(!g)},E=()=>{t.command.clearCompleted()};return ae(t.event.AddTodoFailedEvent,i=>{alert(i)}),console.log("render list"),n.createElement("div",{className:"todoapp"},n.createElement("header",{className:"header"},n.createElement("h1",null,"todos"),n.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",value:f,onChange:x,onKeyDown:h})),n.createElement("section",{className:"main"},n.createElement("input",{id:"toggle-all",type:"checkbox",className:"toggle-all",checked:g,onChange:L}),n.createElement("label",{htmlFor:"toggle-all"}),n.createElement("ul",{className:"todo-list"},o.map(i=>n.createElement(me,{key:i.id,todo:i})))),n.createElement("footer",{className:"footer"},n.createElement("span",{className:"todo-count"},n.createElement("strong",null,r)," items left"),n.createElement("ul",{className:"filters"},n.createElement("li",null,n.createElement(I,{to:"/",className:i=>i.isActive?"selected":""},"All")),n.createElement("li",null,n.createElement(I,{to:"/active",className:i=>i.isActive?"selected":""},"Active")),n.createElement("li",null,n.createElement(I,{to:"/completed",className:i=>i.isActive?"selected":""},"Completed"))),u&&n.createElement("button",{className:"clear-completed",onClick:E},"Clear completed")))},P=document.getElementById("root");if(P){const e=te(P),t=k.store({inspectors:[le(),se({include:["command","query","event","domain","command$","state"]})]});e.render(n.createElement(T.exports.StrictMode,null,n.createElement(ce,{store:t},n.createElement(oe,{basename:"/"},n.createElement(ne,null,n.createElement(H,{path:"/",element:n.createElement(B,null)}),n.createElement(H,{path:"/:filter",element:n.createElement(B,null)}))))))}
//# sourceMappingURL=index.b2f8c8cc.js.map
