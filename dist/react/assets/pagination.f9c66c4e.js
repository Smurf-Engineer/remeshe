var C=Object.defineProperty,T=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var F=(e,t,s)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,x=(e,t)=>{for(var s in t||(t={}))W.call(t,s)&&F(e,s,t[s]);if($)for(var s of $(t))I.call(t,s)&&F(e,s,t[s]);return e},U=(e,t)=>T(e,O(t));import{f as Y,u as z,b as M,R as B}from"./remesh-logger.a646541e.js";import{s as G}from"./switchMap.b45732ed.js";import{m as H}from"./merge.36b4efe6.js";import{b as D}from"./mergeAll.0f7c8167.js";import{o as J,c as P,i as Q,m as K}from"./map.03340756.js";import{j,a as l,F as Z}from"./jsx-runtime.a8396eb8.js";function ee(e,t){return Y(t)?D(e,t,1):D(e,1)}function X(e,t){return t?function(s){return s.pipe(X(function(r,c){return Q(e(r,c)).pipe(K(function(o,a){return t(r,o,c,a)}))}))}:J(function(s,r){var c=0,o=null,a=!1;s.subscribe(P(r,function(_){o||(o=P(r,void 0,function(){o=null,a&&r.complete()}),Q(e(_,c++)).subscribe(o))},function(){a=!0,!o&&r.complete()}))})}const f={default:()=>({type:"default"}),loading:e=>({type:"loading",promise:e}),success:e=>({type:"success",promise:Promise.resolve(e),value:e}),failed:e=>({type:"failed",promise:Promise.reject(e),error:e}),isDefault:e=>e.type==="default",isLoading:e=>e.type==="loading",isSuccess:e=>e.type==="success",isFailed:e=>e.type==="failed",assertDefault:e=>{if(e.type!=="default")throw new Error(`Expected async data in default phase, but got '${e.type}'`)},assertLoading:e=>{if(e.type!=="loading")throw new Error(`Expected async data in loading phase, but got '${e.type}'`)},assertSuccess:e=>{if(e.type!=="success")throw new Error(`Expected async data in success phase, but got '${e.type}'`)},assertFailed:e=>{if(e.type!=="failed")throw new Error(`Expected async data in failed phase, but got '${e.type}'`)}},te=(e,t)=>{const s="default"in t&&t.default?t.default:f.default(),r=e.state({name:`${t.name}.AsyncState`,default:s}),c=e.query({name:`${t.name}.isType`,inspectable:!1,impl:({get:u},i)=>u(r()).type===i}),o=e.query({name:`${t.name}.isDefault`,impl:({get:u})=>u(c("default"))}),a=e.query({name:`${t.name}.isLoading`,impl:({get:u})=>u(c("loading"))}),_=e.query({name:`${t.name}.isSuccess`,impl:({get:u})=>u(c("success"))}),L=e.query({name:`${t.name}.isFailed`,impl:({get:u})=>u(c("failed"))}),n=e.event({name:`${t.name}.LoadingEvent`}),p=e.event({name:`${t.name}.SuccessEvent`}),m=e.event({name:`${t.name}.FailedEvent`}),g=(u,i)=>{var v,d,b;if(i.type==="loading")return[r().new(i),n(),(v=t.command)==null?void 0:v.call(t,u,i)];if(i.type==="success")return[r().new(i),p(i.value),(d=t.command)==null?void 0:d.call(t,u,i)];if(i.type==="failed")return[r().new(i),m(i.error),(b=t.command)==null?void 0:b.call(t,u,i)];throw new Error(`Unknown async data: ${i}`)},S=e.command$({name:`${t.name}.load`,impl:({get:u,peek:i,hasNoValue:v},d)=>{const b={get:u,peek:i,hasNoValue:v},w=h=>{const q=t.query(b,h),A=q.then(y=>{const E=f.success(y);return g(b,E)},y=>{const E=f.failed(y instanceof Error?y:new Error(`${y}`));return g(b,E)}),R=g(b,f.loading(q));return H(R,A)};if(!t.mode||t.mode==="switch")return d.pipe(G(h=>w(h)));if(t.mode==="concat")return d.pipe(ee(h=>w(h)));if(t.mode==="merge")return d.pipe(D(h=>w(h)));if(t.mode==="exhaust")return d.pipe(X(h=>w(h)));throw new Error(`RemeshAsyncModule: invalid mode: ${t.mode}`)}});return{query:{asyncState:r.query,isDefault:o,isLoading:a,isSuccess:_,isFailed:L},command:{load:S},event:{LoadingEvent:n,SuccessEvent:p,FailedEvent:m}}},se=e=>new Promise(t=>setTimeout(t,e)),re=[{login:"mojombo",id:1,node_id:"MDQ6VXNlcjE=",avatar_url:"https://avatars.githubusercontent.com/u/1?v=4",gravatar_id:"",url:"https://api.github.com/users/mojombo",html_url:"https://github.com/mojombo",followers_url:"https://api.github.com/users/mojombo/followers",following_url:"https://api.github.com/users/mojombo/following{/other_user}",gists_url:"https://api.github.com/users/mojombo/gists{/gist_id}",starred_url:"https://api.github.com/users/mojombo/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/mojombo/subscriptions",organizations_url:"https://api.github.com/users/mojombo/orgs",repos_url:"https://api.github.com/users/mojombo/repos",events_url:"https://api.github.com/users/mojombo/events{/privacy}",received_events_url:"https://api.github.com/users/mojombo/received_events",type:"User",site_admin:!1},{login:"defunkt",id:2,node_id:"MDQ6VXNlcjI=",avatar_url:"https://avatars.githubusercontent.com/u/2?v=4",gravatar_id:"",url:"https://api.github.com/users/defunkt",html_url:"https://github.com/defunkt",followers_url:"https://api.github.com/users/defunkt/followers",following_url:"https://api.github.com/users/defunkt/following{/other_user}",gists_url:"https://api.github.com/users/defunkt/gists{/gist_id}",starred_url:"https://api.github.com/users/defunkt/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/defunkt/subscriptions",organizations_url:"https://api.github.com/users/defunkt/orgs",repos_url:"https://api.github.com/users/defunkt/repos",events_url:"https://api.github.com/users/defunkt/events{/privacy}",received_events_url:"https://api.github.com/users/defunkt/received_events",type:"User",site_admin:!1},{login:"pjhyett",id:3,node_id:"MDQ6VXNlcjM=",avatar_url:"https://avatars.githubusercontent.com/u/3?v=4",gravatar_id:"",url:"https://api.github.com/users/pjhyett",html_url:"https://github.com/pjhyett",followers_url:"https://api.github.com/users/pjhyett/followers",following_url:"https://api.github.com/users/pjhyett/following{/other_user}",gists_url:"https://api.github.com/users/pjhyett/gists{/gist_id}",starred_url:"https://api.github.com/users/pjhyett/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/pjhyett/subscriptions",organizations_url:"https://api.github.com/users/pjhyett/orgs",repos_url:"https://api.github.com/users/pjhyett/repos",events_url:"https://api.github.com/users/pjhyett/events{/privacy}",received_events_url:"https://api.github.com/users/pjhyett/received_events",type:"User",site_admin:!1},{login:"wycats",id:4,node_id:"MDQ6VXNlcjQ=",avatar_url:"https://avatars.githubusercontent.com/u/4?v=4",gravatar_id:"",url:"https://api.github.com/users/wycats",html_url:"https://github.com/wycats",followers_url:"https://api.github.com/users/wycats/followers",following_url:"https://api.github.com/users/wycats/following{/other_user}",gists_url:"https://api.github.com/users/wycats/gists{/gist_id}",starred_url:"https://api.github.com/users/wycats/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/wycats/subscriptions",organizations_url:"https://api.github.com/users/wycats/orgs",repos_url:"https://api.github.com/users/wycats/repos",events_url:"https://api.github.com/users/wycats/events{/privacy}",received_events_url:"https://api.github.com/users/wycats/received_events",type:"User",site_admin:!1},{login:"ezmobius",id:5,node_id:"MDQ6VXNlcjU=",avatar_url:"https://avatars.githubusercontent.com/u/5?v=4",gravatar_id:"",url:"https://api.github.com/users/ezmobius",html_url:"https://github.com/ezmobius",followers_url:"https://api.github.com/users/ezmobius/followers",following_url:"https://api.github.com/users/ezmobius/following{/other_user}",gists_url:"https://api.github.com/users/ezmobius/gists{/gist_id}",starred_url:"https://api.github.com/users/ezmobius/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/ezmobius/subscriptions",organizations_url:"https://api.github.com/users/ezmobius/orgs",repos_url:"https://api.github.com/users/ezmobius/repos",events_url:"https://api.github.com/users/ezmobius/events{/privacy}",received_events_url:"https://api.github.com/users/ezmobius/received_events",type:"User",site_admin:!1},{login:"ivey",id:6,node_id:"MDQ6VXNlcjY=",avatar_url:"https://avatars.githubusercontent.com/u/6?v=4",gravatar_id:"",url:"https://api.github.com/users/ivey",html_url:"https://github.com/ivey",followers_url:"https://api.github.com/users/ivey/followers",following_url:"https://api.github.com/users/ivey/following{/other_user}",gists_url:"https://api.github.com/users/ivey/gists{/gist_id}",starred_url:"https://api.github.com/users/ivey/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/ivey/subscriptions",organizations_url:"https://api.github.com/users/ivey/orgs",repos_url:"https://api.github.com/users/ivey/repos",events_url:"https://api.github.com/users/ivey/events{/privacy}",received_events_url:"https://api.github.com/users/ivey/received_events",type:"User",site_admin:!1},{login:"evanphx",id:7,node_id:"MDQ6VXNlcjc=",avatar_url:"https://avatars.githubusercontent.com/u/7?v=4",gravatar_id:"",url:"https://api.github.com/users/evanphx",html_url:"https://github.com/evanphx",followers_url:"https://api.github.com/users/evanphx/followers",following_url:"https://api.github.com/users/evanphx/following{/other_user}",gists_url:"https://api.github.com/users/evanphx/gists{/gist_id}",starred_url:"https://api.github.com/users/evanphx/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/evanphx/subscriptions",organizations_url:"https://api.github.com/users/evanphx/orgs",repos_url:"https://api.github.com/users/evanphx/repos",events_url:"https://api.github.com/users/evanphx/events{/privacy}",received_events_url:"https://api.github.com/users/evanphx/received_events",type:"User",site_admin:!1},{login:"vanpelt",id:17,node_id:"MDQ6VXNlcjE3",avatar_url:"https://avatars.githubusercontent.com/u/17?v=4",gravatar_id:"",url:"https://api.github.com/users/vanpelt",html_url:"https://github.com/vanpelt",followers_url:"https://api.github.com/users/vanpelt/followers",following_url:"https://api.github.com/users/vanpelt/following{/other_user}",gists_url:"https://api.github.com/users/vanpelt/gists{/gist_id}",starred_url:"https://api.github.com/users/vanpelt/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/vanpelt/subscriptions",organizations_url:"https://api.github.com/users/vanpelt/orgs",repos_url:"https://api.github.com/users/vanpelt/repos",events_url:"https://api.github.com/users/vanpelt/events{/privacy}",received_events_url:"https://api.github.com/users/vanpelt/received_events",type:"User",site_admin:!1},{login:"wayneeseguin",id:18,node_id:"MDQ6VXNlcjE4",avatar_url:"https://avatars.githubusercontent.com/u/18?v=4",gravatar_id:"",url:"https://api.github.com/users/wayneeseguin",html_url:"https://github.com/wayneeseguin",followers_url:"https://api.github.com/users/wayneeseguin/followers",following_url:"https://api.github.com/users/wayneeseguin/following{/other_user}",gists_url:"https://api.github.com/users/wayneeseguin/gists{/gist_id}",starred_url:"https://api.github.com/users/wayneeseguin/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/wayneeseguin/subscriptions",organizations_url:"https://api.github.com/users/wayneeseguin/orgs",repos_url:"https://api.github.com/users/wayneeseguin/repos",events_url:"https://api.github.com/users/wayneeseguin/events{/privacy}",received_events_url:"https://api.github.com/users/wayneeseguin/received_events",type:"User",site_admin:!1},{login:"brynary",id:19,node_id:"MDQ6VXNlcjE5",avatar_url:"https://avatars.githubusercontent.com/u/19?v=4",gravatar_id:"",url:"https://api.github.com/users/brynary",html_url:"https://github.com/brynary",followers_url:"https://api.github.com/users/brynary/followers",following_url:"https://api.github.com/users/brynary/following{/other_user}",gists_url:"https://api.github.com/users/brynary/gists{/gist_id}",starred_url:"https://api.github.com/users/brynary/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/brynary/subscriptions",organizations_url:"https://api.github.com/users/brynary/orgs",repos_url:"https://api.github.com/users/brynary/repos",events_url:"https://api.github.com/users/brynary/events{/privacy}",received_events_url:"https://api.github.com/users/brynary/received_events",type:"User",site_admin:!1}];let ie=1e6;const V=async e=>(await se(500),re.map(t=>U(x({},t),{id:ie++})));let N=!1;const ue=async e=>{if(N)return V();try{const t=await fetch(`https://api.github.com/users?since=${e.offset}&per_page=${e.pageSize}`);if(!t.ok)throw new Error(t.statusText);return await t.json()}catch{return N=!0,V()}},k=B.domain({name:"pagination",impl:e=>{const t={offset:0,pageSize:10},s=e.state({name:"Pagination",default:t}),r=e.state({name:"UserListState",default:[]}),c=e.query({name:"isEmptyUserList",impl:({get:n})=>n(r()).length===0}),o=e.query({name:"NextPaginationQuery",impl:({get:n})=>{const p=n(s()),m=n(r());if(m.length===0)return p;const g=m[m.length-1];return U(x({},p),{offset:g.id+1})}}),a=te(e,{name:"userFetcher",query:async({},n)=>await ue(n),command:({get:n},p)=>{if(!f.isSuccess(p))return null;const m=n(o()),g=n(r());return[s().new(m),r().new(g.concat(p.value))]}});e.ignite(()=>a.command.load(t));const _=e.command({name:"loadMore",impl:({get:n})=>{const p=n(o());return a.command.load(p)}}),L=e.command({name:"reset",impl:({})=>[s().new(t),r().new([]),_()]});return{query:{userList:r.query,isEmptyUserList:c,isLoading:a.query.isLoading,asyncState:a.query.asyncState},command:{loadMore:_,reset:L},event:{LoadingUsersEvent:a.event.LoadingEvent,SuccessToLoadUsersEvent:a.event.SuccessEvent,FailedToLoadUsersEvent:a.event.FailedEvent}}}});var de=()=>{const e=z(k()),t=M(e.query.isEmptyUserList());return j("div",{children:[l("h2",{children:"Pagination"}),t?"loading...":l(ae,{})]})};const ae=()=>{const e=z(k()),t=M(e.query.isLoading());return j(Z,{children:[l("div",{children:l("button",{onClick:()=>{e.command.reset()},children:"reset"})}),l(ne,{}),j("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"},children:[!t&&l("button",{onClick:()=>{e.command.loadMore()},children:"load more"}),t&&"loading..."]})]})},ne=()=>{const e=z(k()),t=M(e.query.userList());return l("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"},children:t.map(s=>j("div",{style:{width:100,margin:10},children:[l("img",{style:{width:100,height:100},src:s.avatar_url,loading:"lazy"}),l("p",{children:l("a",{href:s.html_url,children:s.login})})]},s.id))})};export{de as default};
//# sourceMappingURL=pagination.f9c66c4e.js.map
