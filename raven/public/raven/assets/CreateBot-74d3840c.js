var b=Object.defineProperty,p=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var d=(r,e,t)=>e in r?b(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,c=(r,e)=>{for(var t in e||(e={}))f.call(e,t)&&d(r,t,e[t]);if(m)for(var t of m(e))h.call(e,t)&&d(r,t,e[t]);return r},l=(r,e)=>p(r,x(e));import{bB as g,u as j,b9 as v,r as C,j as n,ae as E,o as S,e as y,E as B}from"./index-81db420b.js";import{B as _}from"./BotForm-744234b1.js";import{P as w,S as P,a as k}from"./SettingsContentContainer-c8f50a15.js";import"./InstructionField-5664444b.js";import"./useRavenSettings-a6b6461e.js";import"./AINotEnabledCallout-6cdcef2f.js";import"./CodeBlock-5fc83e57.js";import"./index-a9edd0f4.js";/* empty css                      */const A=()=>{const{createDoc:r,loading:e,error:t}=g(),o=j({disabled:e,defaultValues:{is_ai_bot:0,enable_file_search:1,enable_code_interpreter:1}}),u=v(),i=s=>{r("Raven Bot",s).then(a=>{u(`../${a.name}`)})};return C.useEffect(()=>{const s=a=>{a.key==="s"&&(a.metaKey||a.ctrlKey)&&(a.preventDefault(),o.handleSubmit(i)())};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[]),n.jsx(w,{children:n.jsx("form",{onSubmit:o.handleSubmit(i),children:n.jsx(E,l(c({},o),{children:n.jsxs(P,{children:[n.jsx(k,{title:"Create an Agent",actions:n.jsxs(S,{type:"submit",disabled:e,children:[e&&n.jsx(y,{className:"text-white"}),e?"Creating":"Create"]}),breadcrumbs:[{label:"Agents",href:"../"},{label:"New Agent",href:""}]}),n.jsx(B,{error:t}),n.jsx(_,{isEdit:!1})]})}))})})},z=A;export{z as Component};
