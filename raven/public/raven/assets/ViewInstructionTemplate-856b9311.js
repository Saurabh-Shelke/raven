var f=Object.defineProperty,j=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var l=(t,e,s)=>e in t?f(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,u=(t,e)=>{for(var s in e||(e={}))S.call(e,s)&&l(t,s,e[s]);if(c)for(var s of c(e))g.call(e,s)&&l(t,s,e[s]);return t},p=(t,e)=>j(t,v(e));import{bg as y,bh as E,j as r,E as x,F as I,ad as w,u as C,r as F,ae as P,o as T,e as B,$ as L}from"./index-81db420b.js";import{I as D}from"./InstructionTemplateForm-c2b72e6e.js";import{P as k,S as N,a as R}from"./SettingsContentContainer-c8f50a15.js";import{a as V}from"./validations-18aa1769.js";import"./InstructionField-5664444b.js";import"./AINotEnabledCallout-6cdcef2f.js";import"./useRavenSettings-a6b6461e.js";const K=()=>{const{ID:t}=y(),{data:e,isLoading:s,error:o,mutate:m}=E("Raven Bot Instruction Template",t);return r.jsxs(k,{children:[r.jsx(x,{error:o}),s&&r.jsx(I,{className:"h-64"}),e&&r.jsx(H,{data:e,mutate:m})]})},H=({data:t,mutate:e})=>{const{updateDoc:s,loading:o,error:m}=w(),n=C({disabled:o,defaultValues:t}),{formState:{dirtyFields:b}}=n,h=!V(b),d=i=>{s("Raven Bot Instruction Template",i.name,i).then(a=>{L.success("Saved"),n.reset(a),e(a,{revalidate:!1})})};return F.useEffect(()=>{const i=a=>{a.key==="s"&&(a.metaKey||a.ctrlKey)&&(a.preventDefault(),n.handleSubmit(d)())};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[]),r.jsx("form",{onSubmit:n.handleSubmit(d),children:r.jsx(P,p(u({},n),{children:r.jsxs(N,{children:[r.jsx(R,{title:t.name,headerBadges:h?[{label:"Not Saved",color:"red"}]:void 0,actions:r.jsxs(T,{type:"submit",disabled:o,children:[o&&r.jsx(B,{className:"text-white"}),o?"Saving":"Save"]}),breadcrumbs:[{label:"Instruction Templates",href:"../"},{label:t.name,href:"",copyToClipboard:!0}]}),r.jsx(x,{error:m}),r.jsx(D,{isEdit:!0})]})}))})},O=K;export{O as Component};
