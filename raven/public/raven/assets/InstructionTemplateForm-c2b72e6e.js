var p=Object.defineProperty,u=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var o=(t,e,a)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,l=(t,e)=>{for(var a in e||(e={}))c.call(e,a)&&o(t,a,e[a]);if(m)for(var a of m(e))d.call(e,a)&&o(t,a,e[a]);return t},n=(t,e)=>u(t,x(e));import{aN as j,j as r,S as i,p as h,L as F,b as _,d as f}from"./index-81db420b.js";import{I}from"./InstructionField-5664444b.js";import{A as N}from"./AINotEnabledCallout-6cdcef2f.js";const C=({isEdit:t})=>{var s;const{register:e,formState:{errors:a}}=j();return r.jsxs(i,{gap:"4",children:[r.jsx(N,{}),r.jsxs(i,{maxWidth:"480px",children:[r.jsxs(h,{children:[r.jsx(F,{htmlFor:"template_name",isRequired:!0,children:"Template Name"}),r.jsx(_,n(l({readOnly:t,autoFocus:!t,id:"template_name"},e("template_name",{required:"Name is required"})),{placeholder:"Create Document Template","aria-invalid":a.template_name?"true":"false"}))]}),a.template_name&&r.jsx(f,{children:(s=a.template_name)==null?void 0:s.message})]}),r.jsx(I,{autoFocus:t})]})};export{C as I};
