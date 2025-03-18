var M=Object.defineProperty,S=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var j=(t,e,a)=>e in t?M(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,f=(t,e)=>{for(var a in e||(e={}))k.call(e,a)&&j(t,a,e[a]);if(h)for(var a of h(e))E.call(e,a)&&j(t,a,e[a]);return t},g=(t,e)=>S(t,U(e));import{aZ as L,c as F,u as y,j as r,ae as W,a as p,E as A,p as B,aT as P,d as T,au as V,o as C,e as $,r as x,as as v,$ as w}from"./index-81db420b.js";import{u as N}from"./WorkspaceMemberManagement-60867905.js";import{M as R}from"./MultipleUserCombobox-3792d0b5.js";import"./index-a6c096df.js";import"./TableLoader-47d8c4ae.js";import"./Skeleton-9de30e70.js";import"./useGetUserRecords-beb6efeb.js";const O=({workspaceID:t,onClose:e})=>{var o;const{mutate:a}=L(),{call:b,error:i,loading:n}=F("raven.api.workspaces.add_workspace_members"),l=y({defaultValues:{add_members:null}}),{handleSubmit:u,control:m}=l,c=s=>{s.add_members&&s.add_members.length>0&&b({workspace:t,members:s.add_members.map(d=>d.name)}).then(()=>{w.success("Members added"),a(["workspace_members",t]),e()}).catch(d=>{w.error(d.message)})};return r.jsx(W,g(f({},l),{children:r.jsxs("form",{onSubmit:u(c),children:[r.jsxs(p,{gap:"2",direction:"column",width:"100%",children:[r.jsx(A,{error:i}),r.jsx(B,{width:"100%",children:r.jsx(p,{direction:"column",gap:"2",children:r.jsxs(p,{direction:"column",gap:"2",children:[r.jsx(P,{control:m,name:"add_members",rules:{validate:s=>s&&s.length>0?!0:"Please select at least one member"},render:({field:{onChange:s,value:d}})=>r.jsx(Z,{setSelectedUsers:s,selectedUsers:d!=null?d:[],workspaceID:t,label:""})}),r.jsx(T,{children:(o=l.formState.errors.add_members)==null?void 0:o.message})]})})})]}),r.jsxs(p,{gap:"3",mt:"6",justify:"end",align:"center",children:[r.jsx(V,{disabled:n,children:r.jsx(C,{variant:"soft",color:"gray",children:"Cancel"})}),r.jsxs(C,{type:"button",disabled:n,onClick:u(c),children:[n&&r.jsx($,{className:"text-white"}),n?"Saving":"Save"]})]})]})}))},Z=({workspaceID:t,selectedUsers:e,setSelectedUsers:a,label:b})=>{const i=x.useContext(v),{data:n}=N(t),l=x.useMemo(()=>{var c,o;const m=n==null?void 0:n.message.map(s=>s.user);return(o=(c=i.enabledUsers)==null?void 0:c.filter(s=>!(m!=null&&m.includes(s.name))))!=null?o:[]},[i.enabledUsers,n]),u=x.useCallback((m,c)=>{const o=c.toLowerCase();return l.filter(s=>!m.find(_=>_.name===s.name)&&(s.full_name.toLowerCase().includes(o)||s.name.toLowerCase().includes(o)))},[l]);return r.jsx(R,{selectedUsers:e,setSelectedUsers:a,getFilteredUsers:u,label:b})};export{O as default};
