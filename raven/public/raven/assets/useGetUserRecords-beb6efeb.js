import{r as n,as as r}from"./index-81db420b.js";const l=()=>{const{users:s}=n.useContext(r);return n.useMemo(()=>{const a={};return s.forEach(e=>{var t;a[e.name]={name:e.name,full_name:e.full_name,user_image:(t=e.user_image)!=null?t:"",first_name:e.first_name,enabled:e.enabled,type:e.type}}),a},[s])};export{l as u};
