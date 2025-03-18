var $=Object.defineProperty,M=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var R=(s,r,a)=>r in s?$(s,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[r]=a,t=(s,r)=>{for(var a in r||(r={}))G.call(r,a)&&R(s,a,r[a]);if(L)for(var a of L(r))W.call(r,a)&&R(s,a,r[a]);return s},A=(s,r)=>M(s,V(r));import{r as n,j as e,a2 as J,a4 as K,o as S,a6 as Q,a7 as X,aq as Y,ar as Z,u as ee,as as B,n as se,c as ae,S as m,E as re,p as f,L as g,b as p,m as ne,e as N,d as x,i as D,at as H,au as te,av as ie,aw as le,ax as ce,ay as de,az as q,aA as v,aB as b,a0 as oe,aC as w}from"./index-81db420b.js";import{P as me,S as xe,a as ue}from"./SettingsContentContainer-c8f50a15.js";import{T as he}from"./index-a6c096df.js";const je=()=>{const[s,r]=n.useState(!1);return e.jsxs(J,{open:s,onOpenChange:r,children:[e.jsx(K,{children:e.jsx(S,{children:"Add User"})}),e.jsxs(Q,{width:"480px",className:X,children:[e.jsx(Y,{mb:"1",children:"Add User"}),e.jsx(Z,{size:"2",children:"Invite a new user to Raven."}),e.jsx(fe,{onClose:()=>r(!1)})]})]})},fe=({onClose:s})=>{var F,T,y;const{register:r,formState:{errors:a},getValues:u,handleSubmit:_}=ee(),[O,c]=n.useState(!1),[i,d]=n.useState(!1),[U,h]=n.useState(!1),{users:P}=n.useContext(B),{call:k}=n.useContext(se),{loading:j,call:z,error:C}=ae("raven.api.raven_users.invite_user"),I=()=>{const l=u("email");if(!l){d(!1),h(!1),c(!1);return}P.find(o=>o.name===l)?h(!0):(h(!1),c(!0),k.get("frappe.client.get_value",{doctype:"User",filters:[["email","=",l]],fieldname:"name"}).then(o=>{c(!1),o.message.name?d(!0):d(!1)}).catch(o=>{d(!1),c(!1)}))},E=l=>{z(l).then(()=>{s()})};return e.jsx("form",{onSubmit:_(E),children:e.jsxs(m,{gap:"2",pt:"2",children:[C&&e.jsx(re,{error:C}),e.jsxs(m,{children:[e.jsxs(f,{children:[e.jsx(g,{htmlFor:"email",isRequired:!0,children:"Email"}),e.jsx(p,A(t({id:"email"},r("email",{required:"Email is required",onBlur:I})),{autoFocus:!0,placeholder:"email@example.com","aria-invalid":a.email?"true":"false",children:O&&e.jsx(ne,{side:"right",children:e.jsx(N,{})})}))]}),a.email&&e.jsx(x,{children:(F=a.email)==null?void 0:F.message}),U&&e.jsx(x,{children:"This user is already on Raven."})]}),!i&&e.jsxs(e.Fragment,{children:[e.jsxs(m,{children:[e.jsxs(f,{children:[e.jsx(g,{htmlFor:"first_name",isRequired:!0,children:"First Name"}),e.jsx(p,t({id:"first_name"},r("first_name",{required:i?!1:"First Name is required",maxLength:{value:140,message:"First name must be less than 140 characters"}})))]}),a.first_name&&e.jsx(x,{children:(T=a.first_name)==null?void 0:T.message})]}),e.jsxs(m,{children:[e.jsxs(f,{children:[e.jsx(g,{htmlFor:"last_name",isRequired:!0,children:"Last Name"}),e.jsx(p,t({id:"last_name"},r("last_name",{required:i?!1:"Last Name is required",maxLength:{value:140,message:"Last name must be less than 140 characters"}})))]}),a.last_name&&e.jsx(x,{children:(y=a.last_name)==null?void 0:y.message})]})]}),e.jsx(D,{size:"2",color:"gray",children:i?"This user already exists in Frappe. Add them to Raven?":"An invite will be sent on their email."}),e.jsxs(H,{justify:"end",pt:"4",children:[e.jsx(te,{children:e.jsx(S,{color:"gray",variant:"soft",disabled:j,children:"Cancel"})}),e.jsxs(S,{disabled:U||j,onClick:_(E),children:[j?e.jsx(N,{className:"text-white"}):null,i?"Add":"Send Invite"]})]})]})})},ge=()=>{const s=ie();return e.jsx(me,{children:e.jsxs(xe,{children:[e.jsx(ue,{title:"Users",description:"Manage users added to Raven.",actions:s?e.jsx(je,{}):null}),e.jsx(pe,{})]})})},pe=()=>{const{users:s}=n.useContext(B),r=s.filter(a=>a.type==="User");return e.jsx(he,{useWindowScroll:!0,data:r,components:{Table:a=>e.jsx(le,t({variant:"surface",className:"rounded-sm"},a)),TableHead:ce,TableBody:de,TableRow:a=>e.jsx(q,t({className:"hover:bg-gray-2"},a))},fixedHeaderContent:()=>e.jsxs(q,{children:[e.jsx(v,{children:"Name"}),e.jsx(v,{children:"Email"}),e.jsx(v,{children:"Status"})]}),itemContent:(a,u)=>e.jsx(ve,{user:u})})},ve=({user:s})=>e.jsxs(e.Fragment,{children:[e.jsx(b,{children:e.jsxs(H,{align:"center",children:[e.jsx(oe,{src:s.user_image,alt:s.full_name}),e.jsx(D,{weight:"medium",children:s.full_name}),s.enabled?null:e.jsx(w,{color:"red",children:"Disabled"})]})}),e.jsx(b,{children:s.name}),e.jsx(b,{children:s.custom_status?e.jsx(w,{color:"gray",children:s.custom_status}):null})]}),Ee=ge;export{Ee as Component};
