var h=(n,r,l)=>new Promise((d,m)=>{var o=e=>{try{t(l.next(e))}catch(a){m(a)}},i=e=>{try{t(l.throw(e))}catch(a){m(a)}},t=e=>e.done?d(e.value):Promise.resolve(e.value).then(o,i);t((l=l.apply(n,r)).next())});import{j as s,cW as $,r as p,o as b,a as f,p as g,b as v,m as E,a_ as T,b0 as R}from"./index-81db420b.js";import{u as S}from"./useDebounce-02f398f3.js";import{S as c}from"./Skeleton-9de30e70.js";const k=()=>s.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:min-w-[420px] min-w-full",children:[s.jsxs("div",{className:"grid gap-2",children:[s.jsx(c,{style:{height:"170px"},className:"rounded-sm"}),s.jsx(c,{style:{height:"220px"},className:"rounded-sm"}),s.jsx(c,{style:{height:"120px"},className:"rounded-sm"})]}),s.jsxs("div",{className:"grid gap-2",children:[s.jsx(c,{style:{height:"220px"},className:"rounded-sm"}),s.jsx(c,{style:{height:"120px"},className:"rounded-sm"}),s.jsx(c,{style:{height:"170px"},className:"rounded-sm"})]}),s.jsxs("div",{className:"grid gap-2",children:[s.jsx(c,{style:{height:"170px"},className:"rounded-sm"}),s.jsx(c,{style:{height:"220px"},className:"rounded-sm"}),s.jsx(c,{style:{height:"120px"},className:"rounded-sm"})]}),s.jsxs("div",{className:"grid gap-2",children:[s.jsx(c,{style:{height:"220px"},className:"rounded-sm"}),s.jsx(c,{style:{height:"170px"},className:"rounded-sm"}),s.jsx(c,{style:{height:"120px"},className:"rounded-sm"})]})]}),z=n=>h(void 0,null,function*(){return yield(yield fetch(n)).json()}),A=({query:n,onSelect:r})=>{var t;const{data:l,size:d,setSize:m,isLoading:o}=$((e,a)=>a&&a.next===null?null:e===0?`${N}?q=${n}&key=${u}&client_key=${x}`:`${N}?q=${n}&key=${u}&client_key=${x}&pos=${a.next}`,z,{initialSize:1,parallel:!1}),i=p.useMemo(()=>{let e={results:[],next:""};return l==null?void 0:l.reduce((a,j)=>(e.results=[...a.results,...j.results],e.next=j.next,e),e)},[l]);return s.jsxs("div",{className:"overflow-y-auto sm:h-[455px] w-full",children:[o?s.jsx(k,{}):s.jsx("div",{className:"w-full columns-2 gap-2",children:i&&((t=i==null?void 0:i.results)==null?void 0:t.map((e,a)=>s.jsx("div",{className:"animate-fadein",onClick:()=>r(e),children:s.jsx("img",{className:"h-full w-full rounded-sm bg-slate-6",src:e.media_formats.tinygif.url,alt:e.title})},a)))}),(i==null?void 0:i.next)&&s.jsx("div",{className:"flex justify-center py-2",children:s.jsx(b,{variant:"ghost",className:"w-full",onClick:()=>m(d+1),children:"Load more"})})]})},C=n=>h(void 0,null,function*(){return yield(yield fetch(n)).json()}),O=({onSelect:n})=>{var i;const{data:r,size:l,setSize:d,isLoading:m}=$((t,e)=>e&&e.next===null?null:t===0?`${y}?&key=${u}&client_key=${x}`:`${y}?&key=${u}&client_key=${x}&pos=${e.next}`,C,{initialSize:1,parallel:!1}),o=p.useMemo(()=>{let t={results:[],next:""};return r==null?void 0:r.reduce((e,a)=>(t.results=[...e.results,...a.results],t.next=a.next,t),t)},[r]);return s.jsxs("div",{className:"overflow-y-auto sm:h-[455px] w-full",children:[m?s.jsx(k,{}):s.jsx("div",{className:"w-full columns-2 gap-2",children:o&&((i=o==null?void 0:o.results)==null?void 0:i.map((t,e)=>s.jsx("div",{className:"animate-fadein",onClick:()=>n(t),children:s.jsx("img",{className:"h-full w-full rounded-sm bg-slate-6",src:t.media_formats.tinygif.url,alt:t.title})},e)))}),(o==null?void 0:o.next)&&s.jsx("div",{className:"flex justify-center py-2",children:s.jsx(b,{variant:"ghost",className:"w-full",onClick:()=>d(l+1),children:"Load more"})})]})},N="https://tenor.googleapis.com/v2/search",y="https://tenor.googleapis.com/v2/featured";var w;const u=(w=window.frappe)==null?void 0:w.boot.tenor_api_key;var _;const x=(_=window.frappe)==null?void 0:_.boot.sitename,K=({onSelect:n})=>{const[r,l]=p.useState(""),d=S(r,200);return s.jsx(f,{className:"w-full justify-center",children:s.jsxs(f,{direction:"column",gap:"2",align:"center",pt:"3",width:"100%",className:"px-0.5 sm:px-4",children:[s.jsx(g,{className:"w-full",children:s.jsx(v,{className:"w-full mb-1",onChange:m=>l(m.target.value),value:r,type:"text",placeholder:"Search GIFs",children:s.jsx(E,{side:"left",children:s.jsx(T,{})})})}),s.jsx(R,{className:"h-[74vh] sm:h-auto pb-6 sm:pb-10 ",children:d.length>=2?s.jsx(A,{query:d,onSelect:n}):s.jsx(O,{onSelect:n})}),s.jsx(g,{position:"fixed",className:"bottom-0 py-2 bg-background w-full text-center",children:s.jsx("img",{src:"https://www.gstatic.com/tenor/web/attribution/PB_tenor_logo_blue_horizontal.png",alt:"Powered by Tenor",width:"100"})})]})})};export{u as TENOR_API_KEY,x as TENOR_CLIENT_KEY,y as TENOR_FEATURED_API_ENDPOINT_BASE,N as TENOR_SEARCH_API_ENDPOINT_BASE,K as default};
