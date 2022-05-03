var V=Object.defineProperty,N=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var $=(t,e,s)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,L=(t,e)=>{for(var s in e||(e={}))A.call(e,s)&&$(t,s,e[s]);if(S)for(var s of S(e))R.call(e,s)&&$(t,s,e[s]);return t},E=(t,e)=>N(t,X(e));import{s as T,u as U,d as x,R as C}from"./remesh-logger.7aafe251.js";import{m as W}from"./merge.520e78a2.js";import{j as f,a as o,F as I}from"./jsx-runtime.cbb87597.js";import"./mergeAll.0f775926.js";import"./from.2d9119b3.js";const b={default:()=>({type:"default"}),loading:t=>({type:"loading",promise:t}),success:t=>({type:"success",promise:Promise.resolve(t),value:t}),failed:t=>({type:"failed",promise:Promise.reject(t),error:t}),isDefault:t=>t.type==="default",isLoading:t=>t.type==="loading",isSuccess:t=>t.type==="success",isFailed:t=>t.type==="failed",assertDefault:t=>{if(t.type!=="default")throw new Error(`Expected async data in default phase, but got '${t.type}'`)},assertLoading:t=>{if(t.type!=="loading")throw new Error(`Expected async data in loading phase, but got '${t.type}'`)},assertSuccess:t=>{if(t.type!=="success")throw new Error(`Expected async data in success phase, but got '${t.type}'`)},assertFailed:t=>{if(t.type!=="failed")throw new Error(`Expected async data in failed phase, but got '${t.type}'`)}},O=(t,e)=>{const s="default"in e&&e.default?e.default:b.default(),a=t.state({name:`${e.name}.AsyncState`,default:s}),g=t.query({name:`${e.name}.isType`,inspectable:!1,impl:({get:i},r)=>i(a()).type===r}),_=t.query({name:`${e.name}.isDefault`,impl:({get:i})=>i(g("default"))}),p=t.query({name:`${e.name}.isLoading`,impl:({get:i})=>i(g("loading"))}),v=t.query({name:`${e.name}.isSuccess`,impl:({get:i})=>i(g("success"))}),w=t.query({name:`${e.name}.isFailed`,impl:({get:i})=>i(g("failed"))}),u=t.event({name:`${e.name}.LoadingEvent`}),n=t.event({name:`${e.name}.SuccessEvent`}),l=t.event({name:`${e.name}.FailedEvent`}),c=(i,r)=>{var m,y,h;if(r.type==="loading")return[a().new(r),u(),(m=e.command)==null?void 0:m.call(e,i,r)];if(r.type==="success")return[a().new(r),n(r.value),(y=e.command)==null?void 0:y.call(e,i,r)];if(r.type==="failed")return[a().new(r),l(r.error),(h=e.command)==null?void 0:h.call(e,i,r)];throw new Error(`Unknown async data: ${r}`)},z=t.command$({name:`${e.name}.load`,impl:({get:i,peek:r,hasNoValue:m},y)=>{const h={get:i,peek:r,hasNoValue:m};return y.pipe(T(F=>{const k=e.query(h,F),P=k.then(d=>{const j=b.success(d);return c(h,j)},d=>{const j=b.failed(d instanceof Error?d:new Error(`${d}`));return c(h,j)}),Q=c(h,b.loading(k));return W(Q,P)}))}});return{query:{asyncState:a.query,isDefault:_,isLoading:p,isSuccess:v,isFailed:w},command:{load:z},event:{LoadingEvent:u,SuccessEvent:n,FailedEvent:l}}},Y=t=>new Promise(e=>setTimeout(e,t)),B=[{login:"mojombo",id:1,node_id:"MDQ6VXNlcjE=",avatar_url:"https://avatars.githubusercontent.com/u/1?v=4",gravatar_id:"",url:"https://api.github.com/users/mojombo",html_url:"https://github.com/mojombo",followers_url:"https://api.github.com/users/mojombo/followers",following_url:"https://api.github.com/users/mojombo/following{/other_user}",gists_url:"https://api.github.com/users/mojombo/gists{/gist_id}",starred_url:"https://api.github.com/users/mojombo/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/mojombo/subscriptions",organizations_url:"https://api.github.com/users/mojombo/orgs",repos_url:"https://api.github.com/users/mojombo/repos",events_url:"https://api.github.com/users/mojombo/events{/privacy}",received_events_url:"https://api.github.com/users/mojombo/received_events",type:"User",site_admin:!1},{login:"defunkt",id:2,node_id:"MDQ6VXNlcjI=",avatar_url:"https://avatars.githubusercontent.com/u/2?v=4",gravatar_id:"",url:"https://api.github.com/users/defunkt",html_url:"https://github.com/defunkt",followers_url:"https://api.github.com/users/defunkt/followers",following_url:"https://api.github.com/users/defunkt/following{/other_user}",gists_url:"https://api.github.com/users/defunkt/gists{/gist_id}",starred_url:"https://api.github.com/users/defunkt/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/defunkt/subscriptions",organizations_url:"https://api.github.com/users/defunkt/orgs",repos_url:"https://api.github.com/users/defunkt/repos",events_url:"https://api.github.com/users/defunkt/events{/privacy}",received_events_url:"https://api.github.com/users/defunkt/received_events",type:"User",site_admin:!1},{login:"pjhyett",id:3,node_id:"MDQ6VXNlcjM=",avatar_url:"https://avatars.githubusercontent.com/u/3?v=4",gravatar_id:"",url:"https://api.github.com/users/pjhyett",html_url:"https://github.com/pjhyett",followers_url:"https://api.github.com/users/pjhyett/followers",following_url:"https://api.github.com/users/pjhyett/following{/other_user}",gists_url:"https://api.github.com/users/pjhyett/gists{/gist_id}",starred_url:"https://api.github.com/users/pjhyett/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/pjhyett/subscriptions",organizations_url:"https://api.github.com/users/pjhyett/orgs",repos_url:"https://api.github.com/users/pjhyett/repos",events_url:"https://api.github.com/users/pjhyett/events{/privacy}",received_events_url:"https://api.github.com/users/pjhyett/received_events",type:"User",site_admin:!1},{login:"wycats",id:4,node_id:"MDQ6VXNlcjQ=",avatar_url:"https://avatars.githubusercontent.com/u/4?v=4",gravatar_id:"",url:"https://api.github.com/users/wycats",html_url:"https://github.com/wycats",followers_url:"https://api.github.com/users/wycats/followers",following_url:"https://api.github.com/users/wycats/following{/other_user}",gists_url:"https://api.github.com/users/wycats/gists{/gist_id}",starred_url:"https://api.github.com/users/wycats/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/wycats/subscriptions",organizations_url:"https://api.github.com/users/wycats/orgs",repos_url:"https://api.github.com/users/wycats/repos",events_url:"https://api.github.com/users/wycats/events{/privacy}",received_events_url:"https://api.github.com/users/wycats/received_events",type:"User",site_admin:!1},{login:"ezmobius",id:5,node_id:"MDQ6VXNlcjU=",avatar_url:"https://avatars.githubusercontent.com/u/5?v=4",gravatar_id:"",url:"https://api.github.com/users/ezmobius",html_url:"https://github.com/ezmobius",followers_url:"https://api.github.com/users/ezmobius/followers",following_url:"https://api.github.com/users/ezmobius/following{/other_user}",gists_url:"https://api.github.com/users/ezmobius/gists{/gist_id}",starred_url:"https://api.github.com/users/ezmobius/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/ezmobius/subscriptions",organizations_url:"https://api.github.com/users/ezmobius/orgs",repos_url:"https://api.github.com/users/ezmobius/repos",events_url:"https://api.github.com/users/ezmobius/events{/privacy}",received_events_url:"https://api.github.com/users/ezmobius/received_events",type:"User",site_admin:!1},{login:"ivey",id:6,node_id:"MDQ6VXNlcjY=",avatar_url:"https://avatars.githubusercontent.com/u/6?v=4",gravatar_id:"",url:"https://api.github.com/users/ivey",html_url:"https://github.com/ivey",followers_url:"https://api.github.com/users/ivey/followers",following_url:"https://api.github.com/users/ivey/following{/other_user}",gists_url:"https://api.github.com/users/ivey/gists{/gist_id}",starred_url:"https://api.github.com/users/ivey/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/ivey/subscriptions",organizations_url:"https://api.github.com/users/ivey/orgs",repos_url:"https://api.github.com/users/ivey/repos",events_url:"https://api.github.com/users/ivey/events{/privacy}",received_events_url:"https://api.github.com/users/ivey/received_events",type:"User",site_admin:!1},{login:"evanphx",id:7,node_id:"MDQ6VXNlcjc=",avatar_url:"https://avatars.githubusercontent.com/u/7?v=4",gravatar_id:"",url:"https://api.github.com/users/evanphx",html_url:"https://github.com/evanphx",followers_url:"https://api.github.com/users/evanphx/followers",following_url:"https://api.github.com/users/evanphx/following{/other_user}",gists_url:"https://api.github.com/users/evanphx/gists{/gist_id}",starred_url:"https://api.github.com/users/evanphx/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/evanphx/subscriptions",organizations_url:"https://api.github.com/users/evanphx/orgs",repos_url:"https://api.github.com/users/evanphx/repos",events_url:"https://api.github.com/users/evanphx/events{/privacy}",received_events_url:"https://api.github.com/users/evanphx/received_events",type:"User",site_admin:!1},{login:"vanpelt",id:17,node_id:"MDQ6VXNlcjE3",avatar_url:"https://avatars.githubusercontent.com/u/17?v=4",gravatar_id:"",url:"https://api.github.com/users/vanpelt",html_url:"https://github.com/vanpelt",followers_url:"https://api.github.com/users/vanpelt/followers",following_url:"https://api.github.com/users/vanpelt/following{/other_user}",gists_url:"https://api.github.com/users/vanpelt/gists{/gist_id}",starred_url:"https://api.github.com/users/vanpelt/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/vanpelt/subscriptions",organizations_url:"https://api.github.com/users/vanpelt/orgs",repos_url:"https://api.github.com/users/vanpelt/repos",events_url:"https://api.github.com/users/vanpelt/events{/privacy}",received_events_url:"https://api.github.com/users/vanpelt/received_events",type:"User",site_admin:!1},{login:"wayneeseguin",id:18,node_id:"MDQ6VXNlcjE4",avatar_url:"https://avatars.githubusercontent.com/u/18?v=4",gravatar_id:"",url:"https://api.github.com/users/wayneeseguin",html_url:"https://github.com/wayneeseguin",followers_url:"https://api.github.com/users/wayneeseguin/followers",following_url:"https://api.github.com/users/wayneeseguin/following{/other_user}",gists_url:"https://api.github.com/users/wayneeseguin/gists{/gist_id}",starred_url:"https://api.github.com/users/wayneeseguin/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/wayneeseguin/subscriptions",organizations_url:"https://api.github.com/users/wayneeseguin/orgs",repos_url:"https://api.github.com/users/wayneeseguin/repos",events_url:"https://api.github.com/users/wayneeseguin/events{/privacy}",received_events_url:"https://api.github.com/users/wayneeseguin/received_events",type:"User",site_admin:!1},{login:"brynary",id:19,node_id:"MDQ6VXNlcjE5",avatar_url:"https://avatars.githubusercontent.com/u/19?v=4",gravatar_id:"",url:"https://api.github.com/users/brynary",html_url:"https://github.com/brynary",followers_url:"https://api.github.com/users/brynary/followers",following_url:"https://api.github.com/users/brynary/following{/other_user}",gists_url:"https://api.github.com/users/brynary/gists{/gist_id}",starred_url:"https://api.github.com/users/brynary/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/brynary/subscriptions",organizations_url:"https://api.github.com/users/brynary/orgs",repos_url:"https://api.github.com/users/brynary/repos",events_url:"https://api.github.com/users/brynary/events{/privacy}",received_events_url:"https://api.github.com/users/brynary/received_events",type:"User",site_admin:!1}];let G=1e6;const q=async t=>(await Y(500),B.map(e=>E(L({},e),{id:G++})));let M=!1;const H=async t=>{if(M)return q();try{const e=await fetch(`https://api.github.com/users?since=${t.offset}&per_page=${t.pageSize}`);if(!e.ok)throw new Error(e.statusText);return await e.json()}catch{return M=!0,q()}},D=C.domain({name:"pagination",impl:t=>{const e={offset:0,pageSize:10},s=t.state({name:"Pagination",default:e}),a=t.state({name:"UserListState",default:[]}),g=t.query({name:"isEmptyUserList",impl:({get:u})=>u(a()).length===0}),_=t.query({name:"NextPaginationQuery",impl:({get:u})=>{const n=u(s()),l=u(a());if(l.length===0)return n;const c=l[l.length-1];return E(L({},n),{offset:c.id+1})}}),p=O(t,{name:"userFetcher",query:async({},u)=>await H(u),command:({get:u},n)=>{if(!b.isSuccess(n))return null;const l=u(_()),c=u(a());return[s().new(l),a().new(c.concat(n.value))]}});t.ignite(()=>p.command.load(e));const v=t.command({name:"loadMore",impl:({get:u})=>{const n=u(_());return p.command.load(n)}}),w=t.command({name:"reset",impl:({})=>[s().new(e),a().new([]),v()]});return{query:{userList:a.query,isEmptyUserList:g,isLoading:p.query.isLoading,asyncState:p.query.asyncState},command:{loadMore:v,reset:w},event:{LoadingUsersEvent:p.event.LoadingEvent,SuccessToLoadUsersEvent:p.event.SuccessEvent,FailedToLoadUsersEvent:p.event.FailedEvent}}}});var ut=()=>{const t=U(D()),e=x(t.query.isEmptyUserList());return f("div",{children:[o("h2",{children:"Pagination"}),e?"loading...":o(J,{})]})};const J=()=>{const t=U(D()),e=x(t.query.isLoading());return f(I,{children:[o("div",{children:o("button",{onClick:()=>{t.command.reset()},children:"reset"})}),o(K,{}),f("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"},children:[!e&&o("button",{onClick:()=>{t.command.loadMore()},children:"load more"}),e&&"loading..."]})]})},K=()=>{const t=U(D()),e=x(t.query.userList());return o("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"},children:e.map(s=>f("div",{style:{width:100,margin:10},children:[o("img",{style:{width:100,height:100},src:s.avatar_url,loading:"lazy"}),o("p",{children:o("a",{href:s.html_url,children:s.login})})]},s.id))})};export{ut as default};
//# sourceMappingURL=pagination.c59e30a0.js.map
