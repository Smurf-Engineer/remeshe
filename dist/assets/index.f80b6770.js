var $=Object.defineProperty,H=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var z=(t,e,n)=>e in t?$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,g=(t,e)=>{for(var n in e||(e={}))Y.call(e,n)&&z(t,n,e[n]);if(R)for(var n of R(e))I.call(e,n)&&z(t,n,e[n]);return t},k=(t,e)=>H(t,Q(e));import"./modulepreload-polyfill.b7f2da20.js";import{R as f,r as E,l as L,n as O,e as _,c as T}from"./vendor.c9d1239b.js";import{R as D,u as X,a as j,e as A,b as J,c as K,d as N}from"./remesh-logger.0a0f746f.js";const w=f.createContext({left:0,top:0,gridSize:60,chessSize:40}),U=t=>{const{left:e,top:n,gridSize:o}=t,r=e+o/2,l=n+o/2,a=(i,s,c,v)=>`M${r+i*o},${l+s*o} L${r+c*o},${l+v*o}`,d=(i,s)=>{const c=[];let p,x,S,m;return i!=0&&(p=i-.1,x=s-.1-.25,S=i-.1-.25,m=s-.1,c.push(a(p,x,p,m)),c.push(a(p,m,S,m)),x=s+.1+.25,m=s+.1,c.push(a(p,x,p,m)),c.push(a(p,m,S,m))),i!=8&&(p=i+.1,x=s-.1-.25,S=i+.1+.25,m=s-.1,c.push(a(p,x,p,m)),c.push(a(p,m,S,m)),x=s+.1+.25,m=s+.1,c.push(a(p,x,p,m)),c.push(a(p,m,S,m))),c};return[[1,2],[7,2],[1,7],[7,7],[0,3],[2,3],[4,3],[6,3],[8,3],[0,6],[2,6],[4,6],[6,6],[8,6]].map(([i,s])=>d(i,s)).reduce((i,s)=>i.concat(s),[]).concat(new Array(8).fill(0).map((i,s)=>a(0,s+1,8,s+1))).concat(new Array(7).fill(0).map((i,s)=>a(s+1,0,s+1,4))).concat(new Array(7).fill(0).map((i,s)=>a(s+1,5,s+1,9))).concat([a(3,0,5,2),a(5,0,3,2),a(3,7,5,9),a(3,9,5,7)])},Z=()=>{const t=E.exports.useContext(w),{left:e,top:n,gridSize:o,chessSize:r}=t,l=e+o/2,a=n+o/2,d=o*8,u=o*9,i=U(t),s={position:"absolute",left:0,top:0,width:d+r,height:u+r};return f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:s},f.createElement("g",null,f.createElement("rect",{x:l,y:a,width:d,height:u,fill:"none",stroke:"#000000",strokeWidth:"3"}),i.map((c,v)=>f.createElement("path",{key:v,fill:"none",stroke:"#000000",d:c}))))};var y=(t=>(t[t.General=100]="General",t[t.Chariot=50]="Chariot",t[t.Cannon=30]="Cannon",t[t.Horse=29]="Horse",t[t.Elephant=16]="Elephant",t[t.Guard=10]="Guard",t[t.Soldier=1]="Soldier",t))(y||{}),C=(t=>(t[t.Red=1]="Red",t[t.Black=-1]="Black",t))(C||{});const V=(t,e)=>t.x===e.x&&t.y===e.y,tt=(t,{x:e,y:n})=>{switch(t){case-1:return!(e<3||e>5||n>2&&n<7);case 1:return!(e<3||e>5||n>2&&n<7)}},et=(t,{x:e,y:n})=>{switch(t){case-1:return[[3,0],[3,2],[5,0],[5,2],[4,1]].find(([o,r])=>o===e&&r===n);case 1:return[[3,7],[3,9],[5,7],[5,9],[4,8]].find(([o,r])=>o===e&&r===n)}},nt=(t,{x:e,y:n})=>{switch(t){case-1:return[[0,2],[2,0],[2,4],[4,2],[6,0],[6,4],[8,2]].find(([o,r])=>o===e&&r===n);case 1:return[[0,7],[2,5],[2,9],[4,7],[6,5],[6,9],[8,7]].find(([o,r])=>o===e&&r===n)}},ot=(t,{x:e,y:n})=>{switch(t){case-1:return!(n<3||n<5&&e%2===1);case 1:return!(n>6||n>4&&e%2===1)}},rt=t=>({position:e},{x:n,y:o})=>{if(e.x!==n&&e.y!==o)return!1;if(t.situation.find(r=>r.position.x===n&&r.position.y===o)){if(e.y===o)return t.situation.filter(r=>r.position.y===o&&(r.position.x-n)*(r.position.x-e.x)<0).length===1;if(e.x===n)return t.situation.filter(r=>r.position.x===n&&(r.position.y-o)*(r.position.y-e.y)<0).length===1}return!1},it=()=>({position:t},{x:e,y:n})=>Math.abs(t.y-n)+Math.abs(t.x-e)===1,at=()=>({position:t},{x:e,y:n})=>{const o=r=>r*r;return o(t.x-e)+o(t.y-n)===2},st=t=>({position:e},{x:n,y:o})=>Math.abs(e.x-n)!==2||Math.abs(e.y-o)!==2?!1:!t.situation.find(r=>r.position.x===(e.x+n)/2&&r.position.y===(e.y+o)/2),lt=t=>({position:e},{x:n,y:o})=>{const r=e.x-n,l=e.y-o;return r*r+l*l===5&&!t.situation.find(a=>a.position.x===Math.round((2*e.x+n)/3)&&a.position.y===Math.round((2*e.y+o)/3))},F=t=>({position:e},{x:n,y:o})=>e.x!==n&&e.y!==o?!1:e.y===o?!t.situation.find(r=>r.position.y===o&&(r.position.x-n)*(r.position.x-e.x)<0):e.x===n?!t.situation.find(r=>r.position.x===n&&(r.position.y-o)*(r.position.y-e.y)<0):!1,ct=()=>({position:t,color:e},{x:n,y:o})=>{switch(e){case-1:return o>=t.y&&Math.abs(n-t.x)+Math.abs(o-t.y)===1;case 1:return o<=t.y&&Math.abs(n-t.x)+Math.abs(o-t.y)===1}},b=t=>(e,n)=>{const{color:o,value:r}=e;switch(r){case 100:return tt(o,n)&&it()(e,n);case 10:return et(o,n)&&at()(e,n);case 16:return nt(o,n)&&st(t)(e,n);case 29:return lt(t)(e,n);case 50:return F(t)(e,n);case 30:return F(t)(e,n);case 1:return ot(o,n)&&ct()(e,n)}},W=t=>(e,n)=>e.color===n.color?!1:e.value===30?rt(t)(e,n.position):t.situation.find(o=>V(o.position,n.position))&&b(t)(e,n.position),ut=t=>k(g({},t),{selected:!0}),G=t=>k(g({},t),{selected:!1}),dt=t=>k(g({},t),{marked:!0}),M=t=>k(g({},t),{marked:!1}),q=t=>e=>k(g({},e),{position:t}),pt=t=>e=>{const{currentPlayer:n,situation:o}=e,{x:r,y:l}=t;let a;const d=o.map(i=>M(G(i))).map(i=>i.position.x===r&&i.position.y===l?(a=ut(i),a):i).map(i=>W(e)(a,i)?dt(i):i),u=new Array(90).fill(null).map((i,s)=>{const c=s%9,v=(s-c)/9;return{x:c,y:v}}).filter(i=>b(e)(a,i));return{currentPlayer:n,selectedChess:a,situation:d,markers:u}},mt=t=>e=>{const{currentPlayer:n,situation:o,selectedChess:r}=e;if(r&&b(e)(r,t)){const{x:l,y:a}=r.position,d=o.map(u=>u.position.x===l&&u.position.y===a?q(t)(u):u).map(u=>M(G(u)));return{currentPlayer:-n,selectedChess:void 0,situation:d,markers:[]}}return e},yt=t=>e=>{const{currentPlayer:n,situation:o,selectedChess:r}=e,l=o.find(a=>a.position.x===t.x&&a.position.y===t.y);if(r&&l&&W(e)(r,l)){const{x:a,y:d}=r.position,u=o.map(i=>i.position.x===a&&i.position.y===d?q(t)(i):i.position.x===t.x&&i.position.y===t.y?null:i).filter(i=>!!i).map(i=>M(G(i)));return{currentPlayer:-n,selectedChess:void 0,situation:u,markers:[]}}return e},ft=t=>t.some(o=>o.color===1&&o.value===100)?t.some(o=>o.color===-1&&o.value===100)?"playing":"red-win":"black-win",vt=[{color:-1,value:50,position:{x:0,y:0}},{color:-1,value:29,position:{x:1,y:0}},{color:-1,value:16,position:{x:2,y:0}},{color:-1,value:10,position:{x:3,y:0}},{color:-1,value:100,position:{x:4,y:0}},{color:-1,value:10,position:{x:5,y:0}},{color:-1,value:16,position:{x:6,y:0}},{color:-1,value:29,position:{x:7,y:0}},{color:-1,value:50,position:{x:8,y:0}},{color:-1,value:30,position:{x:1,y:2}},{color:-1,value:30,position:{x:7,y:2}},{color:-1,value:1,position:{x:0,y:3}},{color:-1,value:1,position:{x:2,y:3}},{color:-1,value:1,position:{x:4,y:3}},{color:-1,value:1,position:{x:6,y:3}},{color:-1,value:1,position:{x:8,y:3}},{color:1,value:1,position:{x:0,y:6}},{color:1,value:1,position:{x:2,y:6}},{color:1,value:1,position:{x:4,y:6}},{color:1,value:1,position:{x:6,y:6}},{color:1,value:1,position:{x:8,y:6}},{color:1,value:30,position:{x:1,y:7}},{color:1,value:30,position:{x:7,y:7}},{color:1,value:50,position:{x:0,y:9}},{color:1,value:29,position:{x:1,y:9}},{color:1,value:16,position:{x:2,y:9}},{color:1,value:10,position:{x:3,y:9}},{color:1,value:100,position:{x:4,y:9}},{color:1,value:10,position:{x:5,y:9}},{color:1,value:16,position:{x:6,y:9}},{color:1,value:29,position:{x:7,y:9}},{color:1,value:50,position:{x:8,y:9}}],xt=D.domain({name:"GameDomain",impl:t=>{const e={currentPlayer:1,selectedChess:void 0,situation:vt,markers:[]},n=t.state({name:"Game",default:e}),o=n.Query,r=t.query({name:"gameStatus",impl:({get:s})=>{const{situation:c}=s(o());return ft(c)}}),l=t.event({name:"gameOverEvent"}),a=t.event({name:"notYourMoveEvent"}),d=t.command({name:"resetGameState",impl:()=>n().new(e)}),u=t.command({name:"selectChess",impl({get:s},c){if(s(r())!=="playing")return l();const h=s(n()),{currentPlayer:p,selectedChess:x}=h;return c.color===p?[n().new(pt(c.position)(h))]:x?[n().new(yt(c.position)(h))]:[a()]}}),i=t.command({name:"moveChess",impl({get:s},c){if(s(r())!=="playing")return l();const h=s(n()),{selectedChess:p}=h;return p?[n().new(mt(c)(h))]:[a()]}});return t.command$({name:"checkGameStatus",impl:({fromQuery:s})=>s(r()).pipe(L(c=>c!=="playing"),O(100),_(()=>l()))}),{query:{gameQuery:o,gameStatusQuery:r},command:{selectChess:u,moveChess:i,resetGameState:d},event:{notYourMoveEvent:a,gameOverEvent:l}}}}),B=t=>({[C.Red]:"red",[C.Black]:"black"})[t],ht=(t,e)=>({[C.Red]:{[y.General]:"\u5E05",[y.Guard]:"\u4ED5",[y.Elephant]:"\u76F8",[y.Horse]:"\u99AC",[y.Chariot]:"\u8ECA",[y.Cannon]:"\u70AE",[y.Soldier]:"\u5175"},[C.Black]:{[y.General]:"\u5C06",[y.Guard]:"\u58EB",[y.Elephant]:"\u8C61",[y.Horse]:"\u9A6C",[y.Chariot]:"\u8F66",[y.Cannon]:"\u7832",[y.Soldier]:"\u5352"}})[t][e],St=t=>{const{chess:e,onClick:n}=t,{color:o,value:r,position:{x:l,y:a},selected:d,marked:u}=e,{chessSize:i,gridSize:s,left:c,top:v}=E.exports.useContext(w),h={position:"absolute",zIndex:10,backgroundColor:"white",fontSize:26,textAlign:"center",borderWidth:2,width:i,height:i,left:c+l*s+(s-i)/2-2,top:v+a*s+(s-i)/2-2,borderStyle:d?"dashed":"solid",borderColor:u?"aqua":B(o),borderRadius:i/2+1,color:B(o)};return f.createElement("div",{onClick:()=>n(e),style:h},ht(o,r))},gt=t=>{const{marker:e,onClick:n}=t,{x:o,y:r}=e,{chessSize:l,gridSize:a,left:d,top:u}=E.exports.useContext(w),i={position:"absolute",borderWidth:2,borderStyle:"dashed",borderColor:"green",backgroundColor:"white",width:l/2,height:l/2,left:d+o*a+l/4+(a-l)/2-2,top:u+r*a+l/4+(a-l)/2-2};return f.createElement("div",{onClick:()=>n(e),style:i})},kt=()=>{const{left:t,top:e,gridSize:n}=E.exports.useContext(w),o=X(xt()),r=j(o.query.gameQuery());A(o.event.notYourMoveEvent,()=>{alert("\u4E0D\u8BE5\u4F60\u8D70")}),A(o.event.gameOverEvent,()=>{window.confirm("\u6E38\u620F\u7ED3\u675F\uFF0C\u662F\u5426\u91CD\u65B0\u5F00\u59CB\uFF1F")&&o.command.resetGameState()});const l={width:t+9*n,height:e+10*n},{situation:a,markers:d}=r;return f.createElement("div",{style:l},f.createElement(Z,null),a.map((u,i)=>f.createElement(St,{key:i,chess:u,onClick:()=>o.command.selectChess(u)})),d.map((u,i)=>f.createElement(gt,{key:i,marker:u,onClick:()=>o.command.moveChess(u)})))},P=document.getElementById("root");if(P){const t=T(P),e=D.store({inspectors:[J(),K({include:["command","query","event","domain","command$","state"]})]});t.render(f.createElement(E.exports.StrictMode,null,f.createElement(N,{store:e},f.createElement(w.Provider,{value:{left:0,top:0,gridSize:60,chessSize:40}},f.createElement(kt,null)))))}
//# sourceMappingURL=index.f80b6770.js.map
