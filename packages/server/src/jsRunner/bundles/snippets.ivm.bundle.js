"use strict";var snippets=(()=>{var u=Object.create;var i=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var m=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var l=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports),W=(e,n)=>{for(var r in n)i(e,r,{get:n[r],enumerable:!0})},o=(e,n,r,p)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of d(n))!x.call(e,t)&&t!==r&&i(e,t,{get:()=>n[t],enumerable:!(p=c(n,t))||p.enumerable});return e};var g=(e,n,r)=>(r=e!=null?u(m(e)):{},o(n||!e||!e.__esModule?i(r,"default",{value:e,enumerable:!0}):r,e)),v=e=>o(i({},"__esModule",{value:!0}),e);var a=l((_,f)=>{f.exports.iifeWrapper=e=>`(function(){
${e}
})();`});var y={};W(y,{default:()=>w});var s=g(a()),w=new Proxy({},{get:function(e,n){let r=($("snippets")||[]).find(p=>p.name===n);return[eval][0]((0,s.iifeWrapper)(r.code))}});return v(y);})();
