var X=Object.defineProperty,T=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var I=(e,t,s)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,U=(e,t)=>{for(var s in t||(t={}))W.call(t,s)&&I(e,s,t[s]);if($)for(var s of $(t))Y.call(t,s)&&I(e,s,t[s]);return e},E=(e,t)=>T(e,O(t));import{f as B,R as A,u as x,b as z}from"./remesh-logger.82eef2ea.js";import{s as G}from"./switchMap.af31b466.js";import{m as H}from"./merge.2c1510c0.js";import{b as D}from"./mergeAll.4b1c5b5d.js";import{o as J,c as S,i as C,m as K}from"./map.4b85a765.js";import{j as L,a as l,F as Z}from"./jsx-runtime.a8396eb8.js";function ee(e,t){return B(t)?D(e,t,1):D(e,1)}function N(e,t){return t?function(s){return s.pipe(N(function(r,c){return C(e(r,c)).pipe(K(function(n,h){return t(r,n,c,h)}))}))}:J(function(s,r){var c=0,n=null,h=!1;s.subscribe(S(r,function(p){n||(n=S(r,void 0,function(){n=null,h&&r.complete()}),C(e(p,c++)).subscribe(n))},function(){h=!0,!n&&r.complete()}))})}const f={default:()=>({type:"default"}),loading:e=>({type:"loading",promise:e}),success:e=>({type:"success",promise:Promise.resolve(e),value:e}),failed:e=>({type:"failed",promise:Promise.reject(e),error:e}),isDefault:e=>e.type==="default",isLoading:e=>e.type==="loading",isSuccess:e=>e.type==="success",isFailed:e=>e.type==="failed",assertDefault:e=>{if(e.type!=="default")throw new Error(`Expected async data in default phase, but got '${e.type}'`)},assertLoading:e=>{if(e.type!=="loading")throw new Error(`Expected async data in loading phase, but got '${e.type}'`)},assertSuccess:e=>{if(e.type!=="success")throw new Error(`Expected async data in success phase, but got '${e.type}'`)},assertFailed:e=>{if(e.type!=="failed")throw new Error(`Expected async data in failed phase, but got '${e.type}'`)}},te=(e,t)=>{const s="default"in t&&t.default?t.default:f.default(),r=e.state({name:`${t.name}.AsyncDataState`,default:s}),c=e.query({name:`${t.name}.AsyncDataQuery`,impl:({get:i})=>i(r())}),n=e.query({name:`${t.name}.IsTypeQuery`,inspectable:!1,impl:({get:i},a)=>i(r()).type===a}),h=e.query({name:`${t.name}.IsDefaultQuery`,impl:({get:i})=>i(n("default"))}),p=e.query({name:`${t.name}.IsLoadingQuery`,impl:({get:i})=>i(n("loading"))}),w=e.query({name:`${t.name}.IsSuccessQuery`,impl:({get:i})=>i(n("success"))}),j=e.query({name:`${t.name}.IsFailedQuery`,impl:({get:i})=>i(n("failed"))}),u=e.event({name:`${t.name}.LoadingEvent`}),o=e.event({name:`${t.name}.SuccessEvent`}),g=e.event({name:`${t.name}.FailedEvent`}),y=(i,a)=>{var d,b,_;if(a.type==="loading")return[r().new(a),u(),(d=t.command)==null?void 0:d.call(t,i,a)];if(a.type==="success")return[r().new(a),o(a.value),(b=t.command)==null?void 0:b.call(t,i,a)];if(a.type==="failed")return[r().new(a),g(a.error),(_=t.command)==null?void 0:_.call(t,i,a)];throw new Error(`Unknown async data: ${a}`)},k=e.command$({name:`${t.name}.LoadCommand`,impl:({get:i,peek:a},d)=>{const b={get:i,peek:a},_=m=>{const q=t.query(b,m),V=q.then(v=>{const Q=f.success(v);return y(b,Q)},v=>{const Q=f.failed(v instanceof Error?v:new Error(`${v}`));return y(b,Q)}),R=y(b,f.loading(q));return H(R,V)};if(!t.mode||t.mode==="switch")return d.pipe(G(m=>_(m)));if(t.mode==="concat")return d.pipe(ee(m=>_(m)));if(t.mode==="merge")return d.pipe(D(m=>_(m)));if(t.mode==="exhaust")return d.pipe(N(m=>_(m)));throw new Error(`RemeshAsyncModule: invalid mode: ${t.mode}`)}});return A.module({query:{AsyncDataQuery:c,IsDefaultQuery:h,IsLoadingQuery:p,IsSuccessQuery:w,IsFailedQuery:j},command:{LoadCommand:k},event:{LoadingEvent:u,SuccessEvent:o,FailedEvent:g}})},se=e=>new Promise(t=>setTimeout(t,e)),re=[{login:"mojombo",id:1,node_id:"MDQ6VXNlcjE=",avatar_url:"https://avatars.githubusercontent.com/u/1?v=4",gravatar_id:"",url:"https://api.github.com/users/mojombo",html_url:"https://github.com/mojombo",followers_url:"https://api.github.com/users/mojombo/followers",following_url:"https://api.github.com/users/mojombo/following{/other_user}",gists_url:"https://api.github.com/users/mojombo/gists{/gist_id}",starred_url:"https://api.github.com/users/mojombo/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/mojombo/subscriptions",organizations_url:"https://api.github.com/users/mojombo/orgs",repos_url:"https://api.github.com/users/mojombo/repos",events_url:"https://api.github.com/users/mojombo/events{/privacy}",received_events_url:"https://api.github.com/users/mojombo/received_events",type:"User",site_admin:!1},{login:"defunkt",id:2,node_id:"MDQ6VXNlcjI=",avatar_url:"https://avatars.githubusercontent.com/u/2?v=4",gravatar_id:"",url:"https://api.github.com/users/defunkt",html_url:"https://github.com/defunkt",followers_url:"https://api.github.com/users/defunkt/followers",following_url:"https://api.github.com/users/defunkt/following{/other_user}",gists_url:"https://api.github.com/users/defunkt/gists{/gist_id}",starred_url:"https://api.github.com/users/defunkt/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/defunkt/subscriptions",organizations_url:"https://api.github.com/users/defunkt/orgs",repos_url:"https://api.github.com/users/defunkt/repos",events_url:"https://api.github.com/users/defunkt/events{/privacy}",received_events_url:"https://api.github.com/users/defunkt/received_events",type:"User",site_admin:!1},{login:"pjhyett",id:3,node_id:"MDQ6VXNlcjM=",avatar_url:"https://avatars.githubusercontent.com/u/3?v=4",gravatar_id:"",url:"https://api.github.com/users/pjhyett",html_url:"https://github.com/pjhyett",followers_url:"https://api.github.com/users/pjhyett/followers",following_url:"https://api.github.com/users/pjhyett/following{/other_user}",gists_url:"https://api.github.com/users/pjhyett/gists{/gist_id}",starred_url:"https://api.github.com/users/pjhyett/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/pjhyett/subscriptions",organizations_url:"https://api.github.com/users/pjhyett/orgs",repos_url:"https://api.github.com/users/pjhyett/repos",events_url:"https://api.github.com/users/pjhyett/events{/privacy}",received_events_url:"https://api.github.com/users/pjhyett/received_events",type:"User",site_admin:!1},{login:"wycats",id:4,node_id:"MDQ6VXNlcjQ=",avatar_url:"https://avatars.githubusercontent.com/u/4?v=4",gravatar_id:"",url:"https://api.github.com/users/wycats",html_url:"https://github.com/wycats",followers_url:"https://api.github.com/users/wycats/followers",following_url:"https://api.github.com/users/wycats/following{/other_user}",gists_url:"https://api.github.com/users/wycats/gists{/gist_id}",starred_url:"https://api.github.com/users/wycats/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/wycats/subscriptions",organizations_url:"https://api.github.com/users/wycats/orgs",repos_url:"https://api.github.com/users/wycats/repos",events_url:"https://api.github.com/users/wycats/events{/privacy}",received_events_url:"https://api.github.com/users/wycats/received_events",type:"User",site_admin:!1},{login:"ezmobius",id:5,node_id:"MDQ6VXNlcjU=",avatar_url:"https://avatars.githubusercontent.com/u/5?v=4",gravatar_id:"",url:"https://api.github.com/users/ezmobius",html_url:"https://github.com/ezmobius",followers_url:"https://api.github.com/users/ezmobius/followers",following_url:"https://api.github.com/users/ezmobius/following{/other_user}",gists_url:"https://api.github.com/users/ezmobius/gists{/gist_id}",starred_url:"https://api.github.com/users/ezmobius/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/ezmobius/subscriptions",organizations_url:"https://api.github.com/users/ezmobius/orgs",repos_url:"https://api.github.com/users/ezmobius/repos",events_url:"https://api.github.com/users/ezmobius/events{/privacy}",received_events_url:"https://api.github.com/users/ezmobius/received_events",type:"User",site_admin:!1},{login:"ivey",id:6,node_id:"MDQ6VXNlcjY=",avatar_url:"https://avatars.githubusercontent.com/u/6?v=4",gravatar_id:"",url:"https://api.github.com/users/ivey",html_url:"https://github.com/ivey",followers_url:"https://api.github.com/users/ivey/followers",following_url:"https://api.github.com/users/ivey/following{/other_user}",gists_url:"https://api.github.com/users/ivey/gists{/gist_id}",starred_url:"https://api.github.com/users/ivey/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/ivey/subscriptions",organizations_url:"https://api.github.com/users/ivey/orgs",repos_url:"https://api.github.com/users/ivey/repos",events_url:"https://api.github.com/users/ivey/events{/privacy}",received_events_url:"https://api.github.com/users/ivey/received_events",type:"User",site_admin:!1},{login:"evanphx",id:7,node_id:"MDQ6VXNlcjc=",avatar_url:"https://avatars.githubusercontent.com/u/7?v=4",gravatar_id:"",url:"https://api.github.com/users/evanphx",html_url:"https://github.com/evanphx",followers_url:"https://api.github.com/users/evanphx/followers",following_url:"https://api.github.com/users/evanphx/following{/other_user}",gists_url:"https://api.github.com/users/evanphx/gists{/gist_id}",starred_url:"https://api.github.com/users/evanphx/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/evanphx/subscriptions",organizations_url:"https://api.github.com/users/evanphx/orgs",repos_url:"https://api.github.com/users/evanphx/repos",events_url:"https://api.github.com/users/evanphx/events{/privacy}",received_events_url:"https://api.github.com/users/evanphx/received_events",type:"User",site_admin:!1},{login:"vanpelt",id:17,node_id:"MDQ6VXNlcjE3",avatar_url:"https://avatars.githubusercontent.com/u/17?v=4",gravatar_id:"",url:"https://api.github.com/users/vanpelt",html_url:"https://github.com/vanpelt",followers_url:"https://api.github.com/users/vanpelt/followers",following_url:"https://api.github.com/users/vanpelt/following{/other_user}",gists_url:"https://api.github.com/users/vanpelt/gists{/gist_id}",starred_url:"https://api.github.com/users/vanpelt/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/vanpelt/subscriptions",organizations_url:"https://api.github.com/users/vanpelt/orgs",repos_url:"https://api.github.com/users/vanpelt/repos",events_url:"https://api.github.com/users/vanpelt/events{/privacy}",received_events_url:"https://api.github.com/users/vanpelt/received_events",type:"User",site_admin:!1},{login:"wayneeseguin",id:18,node_id:"MDQ6VXNlcjE4",avatar_url:"https://avatars.githubusercontent.com/u/18?v=4",gravatar_id:"",url:"https://api.github.com/users/wayneeseguin",html_url:"https://github.com/wayneeseguin",followers_url:"https://api.github.com/users/wayneeseguin/followers",following_url:"https://api.github.com/users/wayneeseguin/following{/other_user}",gists_url:"https://api.github.com/users/wayneeseguin/gists{/gist_id}",starred_url:"https://api.github.com/users/wayneeseguin/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/wayneeseguin/subscriptions",organizations_url:"https://api.github.com/users/wayneeseguin/orgs",repos_url:"https://api.github.com/users/wayneeseguin/repos",events_url:"https://api.github.com/users/wayneeseguin/events{/privacy}",received_events_url:"https://api.github.com/users/wayneeseguin/received_events",type:"User",site_admin:!1},{login:"brynary",id:19,node_id:"MDQ6VXNlcjE5",avatar_url:"https://avatars.githubusercontent.com/u/19?v=4",gravatar_id:"",url:"https://api.github.com/users/brynary",html_url:"https://github.com/brynary",followers_url:"https://api.github.com/users/brynary/followers",following_url:"https://api.github.com/users/brynary/following{/other_user}",gists_url:"https://api.github.com/users/brynary/gists{/gist_id}",starred_url:"https://api.github.com/users/brynary/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/brynary/subscriptions",organizations_url:"https://api.github.com/users/brynary/orgs",repos_url:"https://api.github.com/users/brynary/repos",events_url:"https://api.github.com/users/brynary/events{/privacy}",received_events_url:"https://api.github.com/users/brynary/received_events",type:"User",site_admin:!1}];let ie=1e6;const F=async e=>(await se(500),re.map(t=>E(U({},t),{id:ie++})));let P=!1;const ue=async e=>{if(P)return F();try{const t=await fetch(`https://api.github.com/users?since=${e.offset}&per_page=${e.pageSize}`);if(!t.ok)throw new Error(t.statusText);return await t.json()}catch{return P=!0,F()}},M=A.domain({name:"PaginationDomain",impl:e=>{const t={offset:0,pageSize:10},s=e.state({name:"PaginationState",default:t}),r=e.state({name:"UserListState",default:[]}),c=e.query({name:"UserListQuery",impl:({get:u})=>u(r())}),n=e.query({name:"IsEmptyUserListQuery",impl:({get:u})=>u(c()).length===0}),h=e.query({name:"NextPaginationQuery",impl:({get:u})=>{const o=u(s()),g=u(c());if(g.length===0)return o;const y=g[g.length-1];return E(U({},o),{offset:y.id+1})}}),p=te(e,{name:"UserFetcher",query:async({},u)=>await ue(u),command:({get:u},o)=>{if(!f.isSuccess(o))return null;const g=u(h()),y=u(r());return[s().new(g),r().new(y.concat(o.value))]}});e.ignite(()=>p.command.LoadCommand(t));const w=e.command({name:"LoadMoreCommand",impl:({get:u})=>{const o=u(h());return p.command.LoadCommand(o)}}),j=e.command({name:"ResetCommand",impl:({})=>[s().new(t),r().new([]),w()]});return{query:{UserListQuery:c,IsEmptyUserListQuery:n,IsLoadingQuery:p.query.IsLoadingQuery,AsyncDataQuery:p.query.AsyncDataQuery},command:{LoadMoreCommand:w,ResetCommand:j},event:{LoadingUsersEvent:p.event.LoadingEvent,SuccessToLoadUsersEvent:p.event.SuccessEvent,FailedToLoadUsersEvent:p.event.FailedEvent}}}});var de=()=>{const e=x(M()),t=z(e.query.IsEmptyUserListQuery());return L("div",{children:[l("h2",{children:"Pagination"}),t?"loading...":l(ae,{})]})};const ae=()=>{const e=x(M()),t=z(e.query.IsLoadingQuery());return L(Z,{children:[l("div",{children:l("button",{onClick:()=>{e.command.ResetCommand()},children:"reset"})}),l(ne,{}),L("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"},children:[!t&&l("button",{onClick:()=>{e.command.LoadMoreCommand()},children:"load more"}),t&&"loading..."]})]})},ne=()=>{const e=x(M()),t=z(e.query.UserListQuery());return l("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"},children:t.map(s=>L("div",{style:{width:100,margin:10},children:[l("img",{style:{width:100,height:100},src:s.avatar_url,loading:"lazy"}),l("p",{children:l("a",{href:s.html_url,children:s.login})})]},s.id))})};export{de as default};
//# sourceMappingURL=pagination.f8bb7230.js.map
