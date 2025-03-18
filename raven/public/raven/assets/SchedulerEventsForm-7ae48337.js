var I=Object.defineProperty,W=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var H=(a,i,l)=>i in a?I(a,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[i]=l,o=(a,i)=>{for(var l in i||(i={}))E.call(i,l)&&H(a,l,i[l]);if(M)for(var l of M(i))k.call(i,l)&&H(a,l,i[l]);return a},u=(a,i)=>W(a,z(i));var V=(a,i)=>{var l={};for(var c in a)E.call(a,c)&&i.indexOf(c)<0&&(l[c]=a[c]);if(a!=null&&M)for(var c of M(a))i.indexOf(c)<0&&k.call(a,c)&&(l[c]=a[c]);return l};import{aN as B,r as A,cF as J,bs as K,j as e,a as b,S,p as n,L as t,b as m,d as h,aX as L,aT as q,aI as F,aJ as w,aK as C,bO as D,bP as N,aL as d,aM as T,bd as O}from"./index-81db420b.js";import{C as P}from"./WebhookForm-4cfc7c6d.js";import{S as X}from"./ServerScriptNotEnabledForm-c4f27eef.js";const ee=({edit:a=!1})=>{var f,R,$;const{register:i,watch:l,control:c,formState:{errors:r}}=B(),{channels:g}=A.useContext(J),{data:p}=K("Raven Bot",{fields:["name"]}),s=l("event_frequency");return e.jsxs(b,{direction:"column",gap:"4",children:[e.jsx(X,{}),!a&&e.jsxs(S,{children:[e.jsxs(n,{children:[e.jsx(t,{htmlFor:"event_name",isRequired:!0,children:"Name"}),e.jsx(m,u(o({},i("event_name",{required:"Name is required.",maxLength:{value:140,message:"Name cannot be more than 140 characters."}})),{placeholder:"e.g. Sales Invoice - Daily Reminder",autoFocus:!0,id:"event_name","aria-describedby":r.event_name?"name-error":void 0,"aria-invalid":r.event_name?"true":"false",color:r.event_name?"red":"gray"}))]}),r.event_name&&e.jsx(h,{id:"name-error",children:r.event_name.message})]}),e.jsxs(L,{columns:"2",gap:"4",children:[e.jsxs(S,{children:[e.jsxs(n,{children:[e.jsx(t,{isRequired:!0,htmlFor:"channel",children:"Where do you want to send this?"}),e.jsx(q,{control:c,name:"channel",rules:{required:"Channel is required."},render:({field:{onChange:j,value:y,name:v}})=>e.jsxs(F,{onValueChange:x=>j(x),value:y,name:v,children:[e.jsx(w,{style:{width:"100%"},placeholder:"Select Channel","aria-describedby":r.channel?"channel-error":void 0,"aria-invalid":r.channel?"true":"false",autoFocus:a,id:v}),e.jsx(C,{children:e.jsxs(D,{children:[e.jsx(N,{children:"Channels"}),g.map((x,_)=>e.jsx(d,{value:x.name,children:e.jsx(P,{channel:x})},_))]})})]})})]}),r.channel&&e.jsx(h,{id:"channel-error",children:(f=r.channel)==null?void 0:f.message})]}),e.jsxs(S,{children:[e.jsxs(n,{children:[e.jsx(t,{isRequired:!0,htmlFor:"bot",children:"Which bot should trigger this event?"}),e.jsx(q,{control:c,name:"bot",rules:{required:"Bot is required."},render:({field:{onChange:j,value:y,name:v}})=>e.jsxs(F,{onValueChange:x=>j(x),value:y,name:v,children:[e.jsx(w,{style:{width:"100%"},placeholder:"Select Bot",id:v,"aria-describedby":r.bot?"bot-error":void 0,"aria-invalid":r.bot?"true":"false"}),e.jsx(C,{children:e.jsxs(D,{children:[e.jsx(N,{children:"Bots"}),p==null?void 0:p.map((x,_)=>e.jsx(d,{value:x.name,children:x.name},_))]})})]})})]}),r.bot&&e.jsx(h,{id:"bot-error",children:(R=r.bot)==null?void 0:R.message})]})]}),e.jsx(L,{columns:"2",gap:"4",children:e.jsxs(S,{children:[e.jsxs(n,{children:[e.jsx(t,{htmlFor:"event_frequency",isRequired:!0,children:"How often should this event be triggered?"}),e.jsx(q,{control:c,name:"event_frequency",rules:{required:"Frequency is required."},render:({field:{onChange:j,value:y,name:v}})=>e.jsxs(F,{onValueChange:x=>j(x),value:y,name:v,children:[e.jsx(w,{style:{width:"100%"},placeholder:"Select Frequency",id:v,"aria-describedby":r.event_frequency?"frequency-error":void 0,"aria-invalid":r.event_frequency?"true":"false"}),e.jsx(C,{children:e.jsxs(D,{children:[e.jsx(N,{children:"Frequency"}),e.jsx(d,{value:"Every Day",children:"Every Day"}),e.jsx(d,{value:"Every Day of the week",children:"Every Day of the week"}),e.jsx(d,{value:"Date of the month",children:"Date of the month"}),e.jsx(d,{value:"Cron",children:"Custom"})]})})]})})]}),r.event_frequency&&e.jsx(h,{id:"frequency-error",children:($=r.event_frequency)==null?void 0:$.message})]})}),s==="Every Day"&&e.jsxs(n,{className:"w-[350px]",children:[e.jsxs(b,{gap:"4",children:[e.jsxs(n,{children:[e.jsx(t,{isRequired:!0,htmlFor:"hour",children:"Hour"}),e.jsx(m,u(o({},i("hour",{required:"Hour is required.",pattern:{value:/^(0[0-9]|1[0-9]|2[0-3])$/,message:"Hour should be in 24 hour format."}})),{id:"hour",placeholder:"e.g. 10","aria-invalid":r.hour?"true":"false",color:r.hour?"red":"gray","aria-describedby":r.hour?"hour-error":void 0})),r.hour&&e.jsx(h,{className:"pt-1",id:"hour-error",children:r.hour.message})]}),e.jsxs(n,{children:[e.jsx(t,{isRequired:!0,htmlFor:"minute",children:"Minute"}),e.jsx(m,u(o({},i("minute",{required:"Minute is required.",pattern:{value:/^[0-5][0-9]$/,message:"Minute should be in 24 hour format."}})),{id:"minute",placeholder:"e.g. 30","aria-invalid":r.minute?"true":"false",color:r.minute?"red":"gray","aria-describedby":r.minute?"minute-error":void 0})),r.minute&&e.jsx(h,{className:"pt-1",id:"minute-error",children:r.minute.message})]})]}),e.jsx(T,{children:"This event will be triggered on the specified time every day"})]}),s==="Every Day of the week"&&e.jsxs(n,{children:[e.jsxs(b,{gap:"4",children:[e.jsxs(n,{width:"max-content",className:"w-[12rem]",children:[e.jsx(t,{isRequired:!0,htmlFor:"day",children:"Day"}),e.jsx(q,{control:c,name:"day",render:({field:j})=>e.jsxs(F,u(o({},j),{onValueChange:y=>j.onChange(y),defaultValue:"1",children:[e.jsx(w,{style:{width:"100%"},placeholder:"Select Day",autoFocus:a}),e.jsx(C,{children:e.jsxs(D,{children:[e.jsx(N,{children:"Day of the week"}),e.jsx(d,{value:"1",children:"Monday"}),e.jsx(d,{value:"2",children:"Tuesday"}),e.jsx(d,{value:"3",children:"Wednesday"}),e.jsx(d,{value:"4",children:"Thursday"}),e.jsx(d,{value:"5",children:"Friday"}),e.jsx(d,{value:"6",children:"Saturday"}),e.jsx(d,{value:"0",children:"Sunday"})]})})]}))})]}),e.jsxs(n,{children:[e.jsx(t,{isRequired:!0,htmlFor:"hour",children:"Hour"}),e.jsx(m,u(o({},i("hour",{required:"Time is required.",pattern:{value:/^(0[0-9]|1[0-9]|2[0-3])$/,message:"Hour should be in 24 hour format."}})),{id:"hour",placeholder:"e.g. 10","aria-invalid":r.hour?"true":"false",color:r.hour?"red":"gray","aria-describedby":r.hour?"hour-error":void 0})),r.hour&&e.jsx(h,{className:"pt-1",id:"hour-error",children:r.hour.message})]}),e.jsxs(n,{children:[e.jsx(t,{isRequired:!0,htmlFor:"minute",children:"Minute"}),e.jsx(m,u(o({},i("minute",{required:"Minute is required.",pattern:{value:/^[0-5][0-9]$/,message:"Minute should be in 24 hour format."}})),{id:"minute",placeholder:"e.g. 30","aria-invalid":r.minute?"true":"false",color:r.minute?"red":"gray","aria-describedby":r.minute?"minute-error":void 0})),r.minute&&e.jsx(h,{className:"pt-1",id:"minute-error",children:r.minute.message})]})]}),e.jsx(T,{children:"This event will be triggered on the specified day & time of every week"})]}),s==="Date of the month"&&e.jsxs(n,{children:[e.jsxs(b,{gap:"4",children:[e.jsxs(n,{children:[e.jsx(t,{isRequired:!0,htmlFor:"date",children:"Date"}),e.jsx(m,u(o({},i("date",{required:"Date is required.",pattern:{value:/^(0[1-9]|[12][0-9]|3[01])$/,message:"Date should be in 24 hour format."}})),{id:"date",placeholder:"e.g. 10","aria-invalid":r.date?"true":"false",color:r.date?"red":"gray","aria-describedby":r.date?"date-error":void 0})),r.date&&e.jsx(h,{className:"pt-1",id:"date-error",children:r.date.message})]}),e.jsxs(n,{children:[e.jsx(t,{isRequired:!0,htmlFor:"hour",children:"Hour"}),e.jsx(m,u(o({},i("hour",{required:"Time is required.",pattern:{value:/^(0[0-9]|1[0-9]|2[0-3])$/,message:"Hour should be in 24 hour format."}})),{placeholder:"e.g. 10","aria-invalid":r.hour?"true":"false",color:r.hour?"red":"gray","aria-describedby":r.hour?"hour-error":void 0})),r.hour&&e.jsx(h,{className:"pt-1",id:"hour-error",children:r.hour.message})]}),e.jsxs(n,{children:[e.jsx(t,{isRequired:!0,htmlFor:"minute",children:"Minute"}),e.jsx(m,u(o({},i("minute",{required:"Minute is required.",pattern:{value:/^[0-5][0-9]$/,message:"Minute should be in 24 hour format."}})),{id:"minute",placeholder:"e.g. 30","aria-invalid":r.minute?"true":"false",color:r.minute?"red":"gray","aria-describedby":r.minute?"minute-error":void 0})),r.minute&&e.jsx(h,{className:"pt-1",id:"minute-error",children:r.minute.message})]})]}),e.jsx(T,{children:"This event will be triggered on the specified date & time of every month"})]}),s==="Cron"&&e.jsxs(n,{children:[e.jsx(t,{htmlFor:"cron_format",isRequired:!0,children:"Customize your event frequency"}),e.jsx(G,{name:"cron_format",label:"Cron Format"})]}),e.jsxs(n,{children:[e.jsx(t,{htmlFor:"content",isRequired:!0,children:"Message"}),e.jsx(O,u(o({},i("content",{required:"Message is required."})),{placeholder:"e.g. Hello, this is a reminder to pay your dues.",rows:10,"aria-describedby":r.content?"content-error":void 0,"aria-invalid":r.content?"true":"false",color:r.content?"red":"gray"})),r.content&&e.jsx(h,{className:"pt-1",id:"content-error",children:r.content.message})]})]})},G=c=>{var r=c,{name:a,label:i}=r,l=V(r,["name","label"]);const{register:g,control:p,formState:{errors:s}}=B();return e.jsxs(b,{gap:"4",width:"100%",children:[e.jsxs(n,{children:[e.jsx(t,{isRequired:!0,htmlFor:"minute",children:"Minute"}),e.jsx(m,u(o({},g("minute",{required:"Minute is required.",pattern:{value:/^[0-5][0-9]$/,message:"Minute should be in 24 hour format."}})),{id:"minute",placeholder:"e.g. 30","aria-invalid":s.minute?"true":"false",color:s.minute?"red":"gray","aria-describedby":s.minute?"minute-error":void 0})),s.minute&&e.jsx(h,{className:"pt-1",id:"minute-error",children:s.minute.message})]}),e.jsxs(n,{children:[e.jsx(t,{isRequired:!0,htmlFor:"hour",children:"Hour"}),e.jsx(m,u(o({},g("hour",{required:"Time is required.",pattern:{value:/^(0[0-9]|1[0-9]|2[0-3])$/,message:"Hour should be in 24 hour format."}})),{id:"hour",placeholder:"e.g. 10","aria-invalid":s.hour?"true":"false",color:s.hour?"red":"gray","aria-describedby":s.hour?"hour-error":void 0})),s.hour&&e.jsx(h,{className:"pt-1",id:"hour-error",children:s.hour.message})]}),e.jsxs(n,{children:[e.jsx(t,{isRequired:!0,htmlFor:"date",children:"Date"}),e.jsx(m,u(o({},g("date",{required:"Date is required.",pattern:{value:/^(0[1-9]|[12][0-9]|3[01])$/,message:"Date should be in 24 hour format."}})),{id:"date",placeholder:"e.g. 10","aria-invalid":s.date?"true":"false",color:s.date?"red":"gray","aria-describedby":s.date?"date-error":void 0})),s.date&&e.jsx(h,{className:"pt-1",id:"date-error",children:s.date.message})]}),e.jsxs(n,{className:"w-[20%]",children:[e.jsx(t,{isRequired:!0,htmlFor:"month",children:"Month"}),e.jsx(m,u(o(o({},l),g("month",{required:"Month is required.",pattern:{value:/^(0[1-9]|1[0-2])$/,message:"Month should be in 24 hour format."}})),{id:"month",placeholder:"e.g. 10","aria-invalid":s.month?"true":"false",color:s.month?"red":"gray","aria-describedby":s.month?"month-error":void 0})),s.month&&e.jsx(h,{className:"pt-1",id:"month-error",children:s.month.message})]}),e.jsxs(n,{className:"w-[20%]",children:[e.jsx(t,{children:"Day of week"}),e.jsx(q,{control:p,name:"day",render:({field:f})=>e.jsxs(F,u(o({},f),{onValueChange:R=>f.onChange(R),defaultValue:"1",children:[e.jsx(w,{style:{width:"100%"},placeholder:"Select Day"}),e.jsx(C,{children:e.jsxs(D,{children:[e.jsx(N,{children:"Day of the week"}),e.jsx(d,{value:"1",children:"Monday"}),e.jsx(d,{value:"2",children:"Tuesday"}),e.jsx(d,{value:"3",children:"Wednesday"}),e.jsx(d,{value:"4",children:"Thursday"}),e.jsx(d,{value:"5",children:"Friday"}),e.jsx(d,{value:"6",children:"Saturday"}),e.jsx(d,{value:"0",children:"Sunday"})]})})]}))})]})]})};export{ee as S};
