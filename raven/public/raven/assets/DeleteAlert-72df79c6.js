import{j as e,a8 as D,ab as m,bq as b,b9 as f,r as v,V as A,a as i,E as C,cv as E,cy as $,aV as w,cw as y,i as k,aW as z,Y as F,o,Z as N,e as S,$ as T}from"./index-81db420b.js";const Y=({isOpen:a,onClose:n,doctype:t,docname:s,path:r})=>e.jsx(D,{open:a,onOpenChange:n,children:e.jsx(m,{style:{maxWidth:450},children:e.jsx(V,{onClose:n,doctype:t,docname:s,path:r})})}),V=({onClose:a,onUpdate:n,doctype:t,docname:s,path:r})=>{const{deleteDoc:d,error:x,loading:l,reset:j}=b(),h=()=>{a(),j()},g=f(),u=()=>{s&&d(t,s).then(()=>{a(),n&&n(),r&&g(r),T(`Event ${s} deleted.`)})},[c,p]=v.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:["Delete ",s,"?"]}),e.jsxs(i,{direction:"column",gap:"4",children:[e.jsx(C,{error:x}),e.jsxs(E,{color:"red",size:"1",children:[e.jsx($,{children:e.jsx(w,{size:"18"})}),e.jsx(y,{children:"This action is permanent and cannot be undone."})]}),e.jsx(k,{size:"2",as:"label",children:e.jsxs(i,{gap:"2",align:"center",children:[e.jsx(z,{onClick:()=>p(!c),color:"red"}),"Yes, I understand, permanently delete this ",t,"."]})})]}),e.jsxs(i,{gap:"3",mt:"4",justify:"end",children:[e.jsx(F,{children:e.jsx(o,{variant:"soft",color:"gray",onClick:h,children:"Cancel"})}),e.jsx(N,{children:e.jsxs(o,{variant:"solid",color:"red",onClick:u,disabled:!c||l,children:[l&&e.jsx(S,{className:"text-white"}),l?"Deleting":"Delete"]})})]})]})};export{V as A,Y as D};
