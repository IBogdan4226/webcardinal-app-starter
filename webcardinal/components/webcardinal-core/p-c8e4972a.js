import{W as o,O as t,X as r,a,U as s}from"./p-f5c9fd96.js";import"./p-e506992e.js";const{join:e}=s,n={getController:async s=>{const{controllers:n,basePath:l}=window.WebCardinal,i=o();if(n[s])return n[s];let c=await t(e(l,r(),a,"controllers",s).pathname);return c?(n[s]=c,c):"default"!==i?(c=await t(e(l,a,"controllers",s).pathname),c?(n[s]=c,c):void 0):void 0}};export{n as C}