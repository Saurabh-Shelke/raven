var _e=Object.defineProperty,ye=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var ee=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var ie=(a,n,i)=>n in a?_e(a,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[n]=i,x=(a,n)=>{for(var i in n||(n={}))we.call(n,i)&&ie(a,i,n[i]);if(ee)for(var i of ee(n))Ce.call(n,i)&&ie(a,i,n[i]);return a},W=(a,n)=>ye(a,be(n));import{aN as I,aO as te,r as _,j as e,p as m,a as d,at as E,x as de,i as k,a2 as ae,a4 as ne,o as H,cz as ke,a6 as le,a7 as se,cA as re,aw as oe,ax as ce,az as Q,aA as A,ay as he,aB as D,aT as C,aI as M,aJ as R,aK as S,bO as N,bP as q,aL as j,b as F,q as Z,bD as Te,cB as me,aq as ue,ar as fe,aC as pe,L as v,au as ge,S as b,bi as Ae,bj as De,bk as B,cC as Me,bS as Re,cD as Se,cE as Ne,bn as G,d as w,aM as T,aW as xe,as as qe,cF as Fe,bd as Ie,bG as We,cG as Ue,a0 as Oe,b7 as ze,z as Le}from"./index-81db420b.js";const O=[{key:"message_sent",label:"Message Sent",doctype:"Raven Message",event:"after_insert",trigger_on:["Channel","User","Channel Type"]},{key:"message_edited",label:"Message Edited",doctype:"Raven Message",event:"on_update",trigger_on:["Channel","User","Channel Type"]},{key:"message_deleted",label:"Message Deleted",doctype:"Raven Message",event:"on_trash",trigger_on:["Channel","User","Channel Type"]},{key:"emoji_reaction",label:"Message Reacted On",doctype:"Raven Message Reaction",event:"after_insert",trigger_on:["Channel","User","Channel Type"]},{key:"channel_created",label:"Channel Created",doctype:"Raven Channel",event:"after_insert",trigger_on:["User","Channel_Type"]},{key:"channel_deleted",label:"Channel Deleted",doctype:"Raven Channel",event:"on_trash",trigger_on:["User","Channel_Type"]},{key:"channel_member_added",label:"Channel Member Added",doctype:"Raven Channel Member",event:"after_insert",trigger_on:["Channel","User","Channel Type"]},{key:"channel_member_deleted",label:"Channel Member Deleted",doctype:"Raven Channel Member",event:"on_trash",trigger_on:["Channel","User","Channel Type"]},{key:"raven_user_added",label:"User Added",doctype:"Raven User",event:"after_insert",trigger_on:["User"]},{key:"raven_user_deleted",label:"User Deleted",doctype:"Raven User",event:"on_trash",trigger_on:["User"]}],$=[{fieldname:"name",label:"ID",fieldtype:"Data",description:"ID of the document"},{fieldname:"creation",label:"Creation Time",fieldtype:"DateTime",description:"Time when the document was created in string format.",example:"2021-08-12 12:00:00"},{fieldname:"modified",label:"Last Updated Time",fieldtype:"DateTime",description:"Time when the document was last updated in string format.",example:"2021-08-12 12:00:00"},{fieldname:"modified_by",label:"Last Updated By",fieldtype:"Data",description:"User ID of the person who last updated the document.",example:"Administrator"},{fieldname:"owner",label:"Document Created By",fieldtype:"Data",description:"User ID of the person who created the document.",example:"Administrator"}],z=[{doctype:"Raven Message",events:["Message Sent","Message Edited","Message Deleted"],fields:[{fieldname:"channel_id",label:"Channel ID",fieldtype:"Link",description:"ID of the channel where the message was sent.",example:"general"},{fieldname:"text",label:"Text",fieldtype:"Long Text",description:"Text of the message, in pure html format.",example:"<p>Hello, World!</p>"},{fieldname:"json",label:"JSON",fieldtype:"JSON",description:"JSON data of the message.",example:`{
                        content: [
                            {
                                content: [
                                    {
                                        text: "Hello, World!",
                                        type: "text"
                                    }
                                ],
                                type: "paragraph"
                            }
                        ],
                        type: "doc"
                    }`},{fieldname:"message_type",label:"Message Type",fieldtype:"Select",description:"Type of the message.",example:"Text or Image or File"},{fieldname:"file",label:"File",fieldtype:"Attach",description:"File attached with the message.",example:"https://example.com/file.pdf"},{fieldname:"message_reactions",label:"Message Reactions",fieldtype:"JSON",description:"Reactions on the message.",example:`{
                        'unicode_string 1':{
                            'count': 1,
                            'users':['user1'],
                            'reaction': 'unicode_string 1'

                        },
                        'unicode_string 2':{
                            'count': 2,
                            'users':['user1', 'user2'],
                            'reaction': 'unicode_string 2'
                        }
                    }`},{fieldname:"is_reply",label:"Is Reply",fieldtype:"Check",description:"Whether the message is a reply to another message.",example:"1 or 0"},{fieldname:"linked_message",label:"Linked Message",fieldtype:"Link",description:"ID of the message to which this message is a reply.",example:"message-id"},{fieldname:"content",label:"Content",fieldtype:"Long Text",description:"Content of the message in plain text.",example:"Hello, World!"},...$]},{doctype:"Raven Channel",events:["Channel Created","Channel Deleted"],fields:[{fieldname:"channel_name",label:"Channel Name",fieldtype:"Data",description:"Name of the channel.",example:"general"},{fieldname:"channel_description",label:"Channel Description",fieldtype:"Data",description:"Description of the channel.",example:"General discussion"},{fieldname:"type",label:"Type",fieldtype:"Select",description:"Type of the channel.",example:"Public or Private or Open"},{fieldname:"is_direct_message",label:"Is Direct Message",fieldtype:"Check",description:"Whether the channel is a direct message channel.",example:"1 or 0"},{fieldname:"is_self_message",label:"Is Self Message",fieldtype:"Check",description:"Whether the channel is a self message channel.",example:"1 or 0"},{fieldname:"is_archived",label:"Is Archived",fieldtype:"Check",description:"Whether the channel is archived.",example:"1 or 0"},...$]},{doctype:"Raven Channel Member",events:["Channel Member Added","Channel Member Deleted"],fields:[{fieldname:"channel_id",label:"Channel ID",fieldtype:"Link",description:"ID of the channel.",example:"general"},{fieldname:"user_id",label:"User ID",fieldtype:"Link",description:"ID of the user.",example:"user1"},{fieldname:"is_admin",label:"Is Admin",fieldtype:"Check",description:"Whether the user is an admin of the channel.",example:"1 or 0"},{fieldname:"last_visit",label:"Last Visit",fieldtype:"Datetime",description:"Time when the user last visited the channel.",example:"2021-08-12 12:00:00"},...$]},{doctype:"Raven User",events:["User Added","User Deleted"],fields:[{fieldname:"user",label:"User",fieldtype:"Link",description:"User ID.",example:"user1"},{fieldname:"full_name",label:"Full Name",fieldtype:"Data",description:"Full name of the user.",example:"John Doe"},{fieldname:"first_name",label:"First Name",fieldtype:"Data",description:"First name of the user.",example:"John"},{fieldname:"user_image",label:"User Image",fieldtype:"Attach Image",description:"Image of the user.",example:"https://example.com/image.jpg"},{fieldname:"enabled",label:"Enabled",fieldtype:"Check",description:"Whether the user is enabled.",example:"1 or 0"},...$]},{doctype:"Raven Message Reaction",events:["Message Reacted On"],fields:[{fieldname:"reaction",label:"Reaction",fieldtype:"Data",description:"Reaction emoji.",example:"👍"},{fieldname:"reaction_escaped",label:"Reaction Escaped",fieldtype:"Data",description:"Escaped reaction emoji.",example:"\\ud83d\\udc4d"},{fieldname:"message",label:"Message",fieldtype:"Link",description:"ID of the message.",example:"message-id"},...$]}],U=[{trigger_event:["Channel Created","Channel Deleted"],examples:[{name:"general",fields:[{field:"channel_name",value:"general"},{field:"channel_description",value:"General discussion"},{field:"type",value:"Public"},{field:"is_direct_message",value:"0"},{field:"is_self_message",value:"0"},{field:"is_archived",value:"0"}]},{name:"kings-landing",fields:[{field:"channel_name",value:"kings-landing"},{field:"channel_description",value:"The capital of Westeros and the Seven Kingdoms."},{field:"type",value:"Public"},{field:"is_direct_message",value:"0"},{field:"is_self_message",value:"0"},{field:"is_archived",value:"0"}]},{name:"winterfell",fields:[{field:"channel_name",value:"winterfell"},{field:"channel_description",value:"The ancestral home of House Stark."},{field:"type",value:"Public"},{field:"is_direct_message",value:"0"},{field:"is_self_message",value:"0"},{field:"is_archived",value:"0"}]},{name:"dragons-bay",fields:[{field:"channel_name",value:"dragons-bay"},{field:"channel_description",value:"The place where dragons are born."},{field:"type",value:"Public"},{field:"is_direct_message",value:"0"},{field:"is_self_message",value:"0"},{field:"is_archived",value:"0"}]},{name:"white-walkers",fields:[{field:"channel_name",value:"white-walkers"},{field:"channel_description",value:"The army of the dead."},{field:"type",value:"Private"},{field:"is_direct_message",value:"0"},{field:"is_self_message",value:"0"},{field:"is_archived",value:"0"}]}]},{trigger_event:["Message Sent","Message Edited","Message Deleted"],examples:[{name:"Hello, World!",fields:[{field:"channel_id",value:"general"},{field:"text",value:"Hello, World!"},{field:"json",value:`{
                            content: [
                                {
                                    content: [
                                        {
                                            text: "Hello, World!",
                                            type: "text"
                                        }
                                    ],
                                    type: "paragraph"
                                }
                            ],
                            type: "doc"
                        }`},{field:"message_type",value:"Text"},{field:"file",value:"https://ravenapp.info/_astro/app-screenshot.e5f6e34e.png"},{field:"message_reactions",value:`{
                            'unicode_string 1':{
                                'count': 1,
                                'users':['user1'],
                                'reaction': 'unicode_string 1'
                            }
                        }`},{field:"is_reply",value:"0"},{field:"linked_message",value:"message-id"},{field:"content",value:"Hello, World!"},{field:"name",value:"message-id"},{field:"creation",value:"2021-08-12 12:00:00"},{field:"modified",value:"2021-08-12 12:00:00"},{field:"modified_by",value:"Administrator"},{field:"owner",value:"Administrator"}]},{name:"The Iron Throne is mine!",fields:[{field:"channel_id",value:"kings-landing"},{field:"text",value:"The Iron Throne is mine!"},{field:"message_type",value:"Text"},{field:"is_reply",value:"0"},{field:"linked_message",value:"message-id"},{field:"content",value:"The Iron Throne is mine!"},{field:"message_reactions",value:`{
                            'unicode_string 1':{
                                'count': 1,
                                'users':['user1'],
                                'reaction': 'unicode_string 1'
                            }
                        }`},{field:"file",value:"https://ravenapp.info/_astro/app-screenshot.e5f6e34e.png"},{field:"json",value:`{
                            content: [
                                {
                                    content: [
                                        {
                                            text: "The Iron Throne is mine!",
                                            type: "text"
                                        }
                                    ],
                                    type: "paragraph"
                                }
                            ],
                            type: "doc"
                        }`},{field:"name",value:"message-id"},{field:"creation",value:"2021-08-12 12:00:00"},{field:"modified",value:"2021-08-12 12:00:00"},{field:"modified_by",value:"Administrator"},{field:"owner",value:"Administrator"}]},{name:"Winter is coming.",fields:[{field:"channel_id",value:"winterfell"},{field:"text",value:"Winter is coming."},{field:"message_type",value:"Text"},{field:"is_reply",value:"0"},{field:"linked_message",value:"message-id"},{field:"content",value:"Winter is coming."},{field:"message_reactions",value:`{
                            'unicode_string 1':{
                                'count': 1,
                                'users':['user1'],
                                'reaction': 'unicode_string 1'
                            }
                        }`},{field:"file",value:"https://ravenapp.info/_astro/app-screenshot.e5f6e34e.png"},{field:"json",value:`{
                            content: [
                                {
                                    content: [
                                        {
                                            text: "Winter is coming.",
                                            type: "text"
                                        }
                                    ],
                                    type: "paragraph"
                                }
                            ],
                            type: "doc"
                        }`},{field:"name",value:"message-id"},{field:"creation",value:"2021-08-12 12:00:00"},{field:"modified",value:"2021-08-12 12:00:00"},{field:"modified_by",value:"Administrator"},{field:"owner",value:"Administrator"}]},{name:"Dracarys!",fields:[{field:"channel_id",value:"dragons-bay"},{field:"text",value:"Dracarys!"},{field:"message_type",value:"Text"},{field:"is_reply",value:"0"},{field:"linked_message",value:"message-id"},{field:"content",value:"Dracarys!"},{field:"message_reactions",value:`{
                            'unicode_string 1':{
                                'count': 1,
                                'users':['user1'],
                                'reaction': 'unicode_string 1'
                            }
                        }`},{field:"file",value:"https://ravenapp.info/_astro/app-screenshot.e5f6e34e.png"},{field:"json",value:`{
                            content: [
                                {
                                    content: [
                                        {
                                            text: "Dracarys!",
                                            type: "text"
                                        }
                                    ],
                                    type: "paragraph"
                                }
                            ],
                            type: "doc"
                        }`},{field:"name",value:"message-id"},{field:"creation",value:"2021-08-12 12:00:00"},{field:"modified",value:"2021-08-12 12:00:00"},{field:"modified_by",value:"Administrator"},{field:"owner",value:"Administrator"}]},{name:"The Night King is coming.",fields:[{field:"channel_id",value:"white-walkers"},{field:"text",value:"The Night King is coming."},{field:"message_type",value:"Text"},{field:"is_reply",value:"0"},{field:"linked_message",value:"message-id"},{field:"content",value:"The Night King is coming."},{field:"message_reactions",value:`{
                            'unicode_string 1':{
                                'count': 1,
                                'users':['user1'],
                                'reaction': 'unicode_string 1'
                            }
                        }`},{field:"file",value:"https://ravenapp.info/_astro/app-screenshot.e5f6e34e.png"},{field:"json",value:`{
                            content: [
                                {
                                    content: [
                                        {
                                            text: "The Night King is coming.",
                                            type: "text"
                                        }
                                    ],
                                    type: "paragraph"
                                }
                            ],
                            type: "doc"
                        }`},{field:"name",value:"message-id"},{field:"creation",value:"2021-08-12 12:00:00"},{field:"modified",value:"2021-08-12 12:00:00"},{field:"modified_by",value:"Administrator"},{field:"owner",value:"Administrator"}]}]},{trigger_event:["Channel Member Added","Channel Member Deleted"],examples:[{name:"Jon snow",fields:[{field:"channel_id",value:"general"},{field:"user_id",value:"jon-snow"},{field:"is_admin",value:"1"},{field:"last_visit",value:"2021-08-12 12:00:00"},{field:"name",value:"channel-member-id"},{field:"creation",value:"2021-08-12 12:00:00"},{field:"modified",value:"2021-08-12 12:00:00"},{field:"modified_by",value:"Administrator"},{field:"owner",value:"Administrator"}]},{name:"Daenerys Targaryen",fields:[{field:"channel_id",value:"kings-landing"},{field:"user_id",value:"daenerys-targaryen"},{field:"is_admin",value:"1"},{field:"last_visit",value:"2021-08-12 12:00:00"},{field:"name",value:"channel-member-id"},{field:"creation",value:"2021-08-12 12:00:00"},{field:"modified",value:"2021-08-12 12:00:00"},{field:"modified_by",value:"Administrator"},{field:"owner",value:"Administrator"}]},{name:"Arya Stark",fields:[{field:"channel_id",value:"winterfell"},{field:"user_id",value:"arya-stark"},{field:"is_admin",value:"1"},{field:"last_visit",value:"2021-08-12 12:00:00"},{field:"name",value:"channel-member-id"},{field:"creation",value:"2021-08-12 12:00:00"},{field:"modified",value:"2021-08-12 12:00:00"},{field:"modified_by",value:"Administrator"},{field:"owner",value:"Administrator"}]}]},{trigger_event:["User Added","User Deleted"],examples:[{name:"Jon Snow",fields:[{field:"user",value:"jon-snow"},{field:"full_name",value:"Jon Snow"},{field:"first_name",value:"Jon"},{field:"enabled",value:"1"},{field:"user_image",value:"https://example.com/image.jpg"},{field:"name",value:"user-id"},{field:"creation",value:"2021-08-12 12:00:00"},{field:"modified",value:"2021-08-12 12:00:00"},{field:"modified_by",value:"Administrator"},{field:"owner",value:"Administrator"}]},{name:"Daenerys Targaryen",fields:[{field:"user",value:"daenerys-targaryen"},{field:"full_name",value:"Daenerys Targaryen"},{field:"first_name",value:"Daenerys"},{field:"enabled",value:"1"},{field:"user_image",value:"https://example.com/image.jpg"},{field:"name",value:"user-id"},{field:"creation",value:"2021-08-12 12:00:00"},{field:"modified",value:"2021-08-12 12:00:00"},{field:"modified_by",value:"Administrator"},{field:"owner",value:"Administrator"}]}]},{trigger_event:["Message Reacted On"],examples:[{name:"👍",fields:[{field:"reaction",value:"👍"},{field:"message",value:"message-id"},{field:"reaction_escaped",value:"\\ud83d\\udc4d"},{field:"name",value:"reaction-id"},{field:"creation",value:"2021-08-12 12:00:00"},{field:"modified",value:"2021-08-12 12:00:00"},{field:"modified_by",value:"Administrator"},{field:"owner",value:"Administrator"}]},{name:"👎",fields:[{field:"reaction",value:"👎"},{field:"message",value:"message-id"},{field:"reaction_escaped",value:"\\ud83d\\udc4e"},{field:"name",value:"reaction-id"},{field:"creation",value:"2021-08-12 12:00:00"},{field:"modified",value:"2021-08-12 12:00:00"},{field:"modified_by",value:"Administrator"},{field:"owner",value:"Administrator"}]}]}],Pe=()=>{const{register:a,control:n,watch:i,setValue:t}=I(),{fields:l,append:p,remove:f}=te({name:"webhook_data"}),o=i("webhook_trigger"),r=_.useMemo(()=>{var J;return((J=z==null?void 0:z.find(y=>y.events.includes(o)))==null?void 0:J.fields)||[]},[o]),[h,g]=_.useState(null),[s,c]=_.useState(!1),u=()=>{c(!1),g(null)},[V,L]=_.useState(!1),Y=()=>{L(!1)};return e.jsx(m,{children:e.jsxs(d,{direction:"column",gap:"2",width:"100%",children:[e.jsxs(E,{align:"center",justify:"between",children:[e.jsxs(d,{direction:"column",gap:"1",children:[e.jsx(de,{size:"4",className:"not-cal",children:"Webhook Data"}),e.jsx(k,{size:"2",color:"gray",children:"Select the fields you want in the webhook payload."})]}),e.jsxs(E,{align:"center",children:[e.jsxs(ae,{open:V,onOpenChange:L,children:[e.jsx(ne,{children:e.jsxs(H,{type:"button",variant:"surface",color:"gray",disabled:l.length===0,className:"not-cal",children:[e.jsx(ke,{}),"Preview"]})}),e.jsx(le,{className:se,size:"3",children:e.jsx(Ee,{onClose:Y})})]}),e.jsxs(H,{size:"2",type:"button",onClick:()=>p({fieldname:"",key:""}),variant:"soft",className:"not-cal",children:[e.jsx(re,{}),"Add"]})]})]}),e.jsxs(oe,{variant:"surface",children:[e.jsx(ce,{children:e.jsxs(Q,{children:[e.jsxs(A,{children:["Fieldname ",e.jsx("span",{className:"text-red-500",children:"*"})," "]}),e.jsx(A,{children:"Key"}),e.jsx(A,{width:"8%"}),e.jsx(A,{width:"8%"})]})}),e.jsx(he,{children:l.map((J,y)=>{const ve=i(`webhook_data.${y}.fieldname`);return e.jsxs(Q,{children:[e.jsx(D,{children:e.jsx(C,{name:`webhook_data.${y}.fieldname`,control:n,rules:{required:"Fieldname is required",onChange:K=>t(`webhook_data.${y}.key`,K.target.value)},render:({field:K})=>e.jsxs(M,{value:K.value,onValueChange:P=>K.onChange(P),children:[e.jsx(R,{placeholder:"Fieldname",style:{width:"100%"}}),e.jsx(S,{children:e.jsxs(N,{children:[e.jsx(q,{children:"Fieldname"}),r.map((P,je)=>e.jsx(j,{value:P.fieldname,children:`${P.label} (${P.fieldtype})`},je))]})})]})})}),e.jsx(D,{children:e.jsx(F,W(x({},a(`webhook_data.${y}.key`)),{placeholder:"Key",readOnly:!0}))}),e.jsx(D,{width:"8%",children:e.jsxs(ae,{open:s,onOpenChange:c,children:[e.jsx(ne,{children:e.jsx(Z,{size:"2",variant:"ghost",color:"gray",disabled:!ve,onClick:()=>g(y),style:{"--icon-button-ghost-padding":"0",height:"var(--base-button-height)",width:"var(--base-button-height)"},"aria-label":"Click to see field info",title:"See field info",children:e.jsx(Te,{size:"18"})})}),e.jsx(le,{className:se,children:h!==null&&e.jsx($e,{fieldIndex:h,triggerEvent:o,onClose:u},y)})]})}),e.jsx(D,{width:"8%",children:e.jsx(Z,{size:"2",variant:"ghost",color:"gray",style:{"--icon-button-ghost-padding":"0",height:"var(--base-button-height)",width:"var(--base-button-height)"},"aria-label":"Click to remove field",title:"Remove field",onClick:()=>f(y),children:e.jsx(me,{size:"18"})})})]},J.id)})})]})]})})},$e=({fieldIndex:a,triggerEvent:n,onClose:i})=>{const{watch:t}=I(),l=_.useMemo(()=>{var f;const p=t(`webhook_data.${a}.fieldname`);return(f=z==null?void 0:z.find(o=>o.events.includes(n)))==null?void 0:f.fields.find(o=>o.fieldname===p)},[a,n]);return e.jsxs(d,{direction:"column",gap:"4",width:"100%",children:[e.jsxs(m,{children:[e.jsx(ue,{children:l==null?void 0:l.label}),e.jsxs(fe,{children:[l==null?void 0:l.description," ",e.jsx(pe,{color:"gray",children:l==null?void 0:l.fieldtype})]})]}),(l==null?void 0:l.example)&&e.jsxs(m,{children:[e.jsx(v,{children:"Example"}),e.jsx(m,{children:e.jsx("pre",{className:"rounded-md bg-slate-3 p-2 m-0",style:{minHeight:"200px"},children:e.jsx("code",{children:JSON.stringify(l==null?void 0:l.example,null,2)})})})]}),e.jsx(d,{gap:"3",mt:"4",justify:"end",align:"center",children:e.jsx(ge,{children:e.jsx(H,{variant:"soft",color:"gray",children:"Close"})})})]})},Ee=({onClose:a})=>{const{watch:n}=I(),i=n("webhook_trigger"),t=n("webhook_data"),[l,p]=_.useState(""),f=_.useMemo(()=>{var r,h;return((h=(r=U==null?void 0:U.find(g=>g.trigger_event.includes(i)))==null?void 0:r.examples)==null?void 0:h.map(g=>g.name))||[]},[i]),o=_.useMemo(()=>{var s,c;const r=(c=(s=U==null?void 0:U.find(u=>u.trigger_event.includes(i)))==null?void 0:s.examples)==null?void 0:c.find(u=>u.name===l),h=t==null?void 0:t.map(u=>u.key),g={};return r&&(h==null||h.forEach(u=>{var V,L;g[u]=(L=(V=r==null?void 0:r.fields)==null?void 0:V.find(Y=>Y.field===u))==null?void 0:L.value})),JSON.stringify(g,null,2)},[l,t,i]);return e.jsxs(b,{children:[e.jsxs(m,{children:[e.jsx(ue,{children:"Preview"}),e.jsx(fe,{children:"Preview the webhook payload for the selected example."})]}),e.jsxs(d,{direction:"column",gap:"4",width:"100%",children:[e.jsxs(d,{direction:"column",gap:"2",width:"100%",children:[e.jsx(m,{children:e.jsxs(d,{direction:"column",children:[e.jsx(v,{children:"Example"}),e.jsxs(M,{value:l,onValueChange:r=>p(r),children:[e.jsx(R,{placeholder:"Select example"}),e.jsx(S,{children:e.jsxs(N,{children:[e.jsx(q,{children:"Examples"}),f.map((r,h)=>e.jsx(j,{value:r,children:r},h))]})})]})]})}),e.jsxs(m,{children:[e.jsx(v,{children:"Response Data"}),e.jsx(m,{children:e.jsx("pre",{className:"rounded-md bg-slate-3 p-2 m-0",style:{minHeight:"200px",whiteSpace:"pre-wrap"},children:e.jsx("code",{children:o})})})]})]}),e.jsx(d,{gap:"3",mt:"4",justify:"end",align:"center",children:e.jsx(ge,{children:e.jsx(H,{variant:"soft",color:"gray",children:"Close"})})})]})]})},He=()=>{const{register:a}=I(),{fields:n,append:i,remove:t}=te({name:"webhook_headers"});return e.jsx(m,{children:e.jsxs(d,{direction:"column",gap:"2",width:"100%",children:[e.jsxs(E,{align:"center",justify:"between",children:[e.jsxs(d,{direction:"column",gap:"1",children:[e.jsx(de,{size:"4",className:"not-cal",children:"Headers"}),e.jsx(k,{size:"2",color:"gray",children:"Add the headers that you want to send with the request."})]}),e.jsxs(H,{size:"2",type:"button",onClick:()=>i({fieldname:"",key:""}),variant:"soft",className:"not-cal",children:[e.jsx(re,{}),"Add"]})]}),e.jsxs(oe,{variant:"surface",children:[e.jsx(ce,{children:e.jsxs(Q,{children:[e.jsxs(A,{children:["Key ",e.jsx("span",{className:"text-red-500",children:"*"})," "]}),e.jsx(A,{children:"Value"}),e.jsx(A,{width:"8%"})]})}),e.jsx(he,{children:n.map((l,p)=>e.jsxs(Q,{children:[e.jsx(D,{children:e.jsx(F,W(x({},a(`webhook_headers.${p}.key`,{required:"Key is required"})),{placeholder:"Key"}))}),e.jsx(D,{children:e.jsx(F,W(x({},a(`webhook_headers.${p}.value`)),{placeholder:"Value"}))}),e.jsx(D,{width:"8%",children:e.jsx(Z,{size:"2",variant:"ghost",color:"gray",style:{"--icon-button-ghost-padding":"0",height:"var(--base-button-height)",width:"var(--base-button-height)"},"aria-label":"Click to remove field",title:"Remove field",onClick:()=>t(p),children:e.jsx(me,{size:"18"})})})]},l.id))})]})]})})},X={size:18,className:"mr-1.5"},Qe=({isEdit:a=!1})=>(I(),e.jsxs(Ae,{defaultValue:"general",children:[e.jsxs(De,{children:[e.jsxs(B,{value:"general",children:[e.jsx(Me,x({},X))," General"]}),e.jsxs(B,{value:"condition",children:[e.jsx(Re,x({},X))," Conditions"]}),e.jsxs(B,{value:"data",children:[e.jsx(Se,x({},X))," Data"]}),e.jsxs(B,{value:"headers",children:[e.jsx(Ne,x({},X))," Headers"]})]}),e.jsxs(m,{pt:"4",children:[e.jsx(G,{value:"general",children:e.jsx(Ve,{isEdit:a})}),e.jsx(G,{value:"condition",children:e.jsx(Je,{})}),e.jsx(G,{value:"data",children:e.jsx(Pe,{})}),e.jsx(G,{value:"headers",children:e.jsx(He,{})})]})]})),Ve=({isEdit:a=!1})=>{const{register:n,formState:{errors:i},control:t,setValue:l,watch:p}=I(),f=p("enable_security");return e.jsxs(b,{gap:"4",children:[a===!1?e.jsxs(b,{children:[e.jsxs(m,{children:[e.jsx(v,{htmlFor:"name",isRequired:!0,children:"Name"}),e.jsx(F,x({id:"name",autoFocus:!0},n("name",{required:"Name is required",maxLength:{value:140,message:"Name should not exceed 140 characters"}})))]}),(i==null?void 0:i.name)&&e.jsx(w,{children:i.name.message})]}):null,e.jsxs(b,{children:[e.jsxs(m,{children:[e.jsx(v,{htmlFor:"request_url",isRequired:!0,children:"Request URL"}),e.jsx(F,W(x({},n("request_url",{required:"Request URL is required",maxLength:{value:140,message:"Request URL should not exceed 140 characters"}})),{id:"request_url"}))]}),(i==null?void 0:i.request_url)&&e.jsx(w,{children:i.request_url.message})]}),e.jsxs(b,{children:[e.jsxs(m,{maxWidth:"360px",children:[e.jsx(v,{htmlFor:"timeout",children:"Request Timeout"}),e.jsx(F,x({type:"number"},n("timeout",{valueAsNumber:!0}))),e.jsx(T,{children:"The number of seconds until the request expires."})]}),(i==null?void 0:i.timeout)&&e.jsx(w,{children:i.timeout.message})]}),e.jsxs(b,{maxWidth:"360px",children:[e.jsx(m,{children:e.jsxs(d,{direction:"column",children:[e.jsx(v,{isRequired:!0,htmlFor:"webhook_trigger",children:"Trigger Event"}),e.jsx(C,{control:t,name:"webhook_trigger",rules:{onChange:o=>{o.target.value&&l("webhook_data",[])}},render:({field:o})=>e.jsxs(M,{value:o.value,onValueChange:o.onChange,required:!0,disabled:a,children:[e.jsx(R,{id:"webhook_trigger",placeholder:"Trigger Events"}),e.jsx(S,{children:e.jsxs(N,{children:[e.jsx(q,{children:"Trigger Events"}),O==null?void 0:O.map((r,h)=>e.jsx(j,{value:r.label,children:r.label},h))]})})]})})]})}),(i==null?void 0:i.webhook_trigger)&&e.jsx(w,{children:i.webhook_trigger.message})]}),e.jsxs(b,{pt:"2",children:[e.jsx(k,{as:"label",size:"2",children:e.jsxs(d,{gap:"2",children:[e.jsx(C,{control:t,name:"enable_security",render:({field:o})=>e.jsx(xe,{checked:!!o.value,onCheckedChange:r=>o.onChange(r?1:0)})}),"Enable Security? ",e.jsx(pe,{color:"gray",children:"Recommended"})]})}),e.jsxs(T,{size:"2",children:['To optionally add security to your webhook requests and ensure that the webhook is being sent from Raven, you can set up a "Webhook Secret" along with the request. Do not share the secret publicly.',e.jsx("br",{}),e.jsx("br",{}),"If enabled, an additional header (X-Frappe-Webhook-Signature) will be added to the request before it's sent out, with its value being generated from the secret as a base64-encoded HMAC-SHA256 hash of the payload."]}),(i==null?void 0:i.enable_security)&&e.jsx(w,{children:i.enable_security.message})]}),f?e.jsxs(m,{children:[e.jsx(v,{htmlFor:"webhook_secret",isRequired:!0,children:"Webhook Secret"}),e.jsx(F,x({type:"password"},n("webhook_secret",{required:f?"Webhook secret is required":!1,maxLength:{value:140,message:"Webhook secret should not exceed 140 characters"}}))),(i==null?void 0:i.webhook_secret)&&e.jsx(w,{children:i.webhook_secret.message})]}):null]})},Je=()=>{const{watch:a,formState:{errors:n},control:i,setValue:t,register:l}=I(),p=a("trigger_webhook_on_condition"),f=a("conditions_on"),{users:o}=_.useContext(qe),{channels:r}=_.useContext(Fe),h=a("webhook_trigger"),g=_.useMemo(()=>{var s;return h?(s=O==null?void 0:O.find(c=>c.label===h))==null?void 0:s.trigger_on:[]},[h]);return e.jsxs(b,{gap:"4",children:[e.jsxs(b,{children:[e.jsx(k,{as:"label",size:"2",children:e.jsxs(d,{gap:"2",children:[e.jsx(C,{control:i,name:"trigger_webhook_on_condition",rules:{onChange:s=>{s.target.value||(t("conditions_on",""),t("condition",""),t("channel_id",""),t("user",""),t("channel_type",""))}},render:({field:s})=>e.jsx(xe,{checked:!!s.value,onCheckedChange:c=>s.onChange(c?1:0)})}),"Trigger this webhook based on a condition"]})}),(n==null?void 0:n.trigger_webhook_on_condition)&&e.jsx(w,{children:n.trigger_webhook_on_condition.message})]}),p?e.jsxs(d,{direction:"column",children:[e.jsx(v,{htmlFor:"condition",children:"Trigger On"}),e.jsx(C,{control:i,name:"conditions_on",rules:{required:"Field is required",onChange:s=>{s.target.value&&(t("condition",""),t("channel_id",""),t("user",""),t("channel_type",""))}},render:({field:s})=>e.jsxs(M,{value:s.value,onValueChange:s.onChange,required:!0,children:[e.jsx(R,{placeholder:"Select Field"}),e.jsx(S,{children:e.jsxs(N,{children:[e.jsx(q,{children:"Trigger On"}),g==null?void 0:g.map((c,u)=>e.jsx(j,{value:c,children:c},u)),e.jsx(j,{value:"Custom",children:"Custom"})]})})]})}),e.jsx(T,{style:{paddingTop:"0.25rem"},children:"Field on which the condition will be applied"})]}):null,f==="Custom"?e.jsx(m,{children:e.jsxs(d,{direction:"row",gap:"4",align:"start",children:[e.jsxs(d,{direction:"column",style:{width:"60%"},children:[e.jsx(v,{htmlFor:"condition",isRequired:!0,children:"Condition"}),e.jsx(Ie,W(x({id:"condition"},l("condition",{required:f==="Custom"?"Condition is required":!1})),{rows:10})),(n==null?void 0:n.condition)&&e.jsx(w,{className:"pt-1",children:n.condition.message}),e.jsx(T,{style:{paddingTop:"0.25rem"},children:"The webhook will be triggered if this expression is true."})]}),e.jsxs(We,{color:"gray",size:"2",className:"mt-7 p-4",children:[e.jsx(k,{weight:"bold",size:"2",className:"block",children:"Try something like:"}),"doc.channel_id == 'general'",e.jsx("br",{}),"doc.is_direct_message == 1 ",e.jsx("br",{}),"doc.owner == 'Administrator'"]})]})}):f==="Channel"?e.jsx(m,{children:e.jsxs(d,{direction:"column",children:[e.jsx(v,{htmlFor:"channel_id",children:"Channel"}),e.jsx(C,{control:i,name:"channel_id",render:({field:s})=>e.jsxs(M,{value:s.value,onValueChange:s.onChange,required:!0,children:[e.jsx(R,{placeholder:"Select Field"}),e.jsx(S,{children:e.jsxs(N,{children:[e.jsx(q,{children:"Channel"}),r.map((c,u)=>e.jsx(j,{value:c.name,children:e.jsx(Be,{channel:c})},u))]})})]})}),e.jsx(T,{style:{paddingTop:"0.25rem"},children:"Webhook will trigger only if the message is sent on this channel."})]})}):f==="User"?e.jsxs(d,{direction:"column",children:[e.jsx(v,{htmlFor:"user_id",children:"User"}),e.jsx(C,{control:i,name:"user",render:({field:s})=>e.jsxs(M,{value:s.value,onValueChange:s.onChange,required:!0,children:[e.jsx(R,{placeholder:"Select Field"}),e.jsx(S,{children:e.jsxs(N,{children:[e.jsx(q,{children:"User"}),o.map((c,u)=>e.jsx(j,{value:c.name,children:e.jsx(Ke,{user:c})},u))]})})]})}),e.jsx(T,{style:{paddingTop:"0.25rem"},children:"Webhook will trigger only if the message is sent by this user."})]}):f==="Channel Type"?e.jsxs(d,{direction:"column",children:[e.jsx(v,{htmlFor:"channel_type",children:"Channel Type"}),e.jsx(C,{control:i,name:"channel_type",render:({field:s})=>e.jsxs(M,{value:s.value,onValueChange:s.onChange,required:!0,children:[e.jsx(R,{placeholder:"Select Field"}),e.jsx(S,{children:e.jsxs(N,{children:[e.jsx(q,{children:"Channel Type"}),e.jsx(j,{value:"Public",children:"Public"}),e.jsx(j,{value:"Private",children:"Private"}),e.jsx(j,{value:"Open",children:"Open"}),e.jsx(j,{value:"DM",children:"Direct Message"}),e.jsx(j,{value:"Self Message",children:"Self Message"})]})})]})}),e.jsx(T,{style:{paddingTop:"0.25rem"},children:"The webhook will trigger if the channel type is equal to the value selected here."})]}):null]})},Ke=({user:a})=>{var n;return e.jsxs(d,{direction:"row",gap:"2",align:"center",children:[e.jsx(Ue,{children:e.jsx(Oe,{src:a==null?void 0:a.user_image,alt:a==null?void 0:a.full_name,size:"1"})}),e.jsx(d,{justify:"between",children:e.jsx(k,{size:"2",className:"text-ellipsis line-clamp-1",children:(n=a==null?void 0:a.full_name)!=null?n:a==null?void 0:a.name})})]})},Be=({channel:a})=>e.jsxs(E,{justify:"between",width:"100%",children:[e.jsxs(d,{direction:"row",gap:"1",align:"center",children:[e.jsx(ze,{type:a.type,size:"18"}),e.jsx(d,{justify:"between",align:"center",width:"100%",children:e.jsx(k,{size:"2",className:"text-ellipsis line-clamp-1",as:"span",children:a.channel_name})})]}),e.jsxs(E,{gap:"1",align:"center",children:[e.jsx(Le,{className:"opacity-75"}),e.jsx(k,{size:"1",className:"opacity-75",children:a.workspace})]})]});export{Be as C,Qe as W};
