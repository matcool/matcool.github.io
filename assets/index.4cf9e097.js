import{d as e,c as r,o as t,r as n,a as o,b as s,e as d}from"./vendor.e22d4117.js";let i;const a={},c=function(e,r){if(!r)return e();if(void 0===i){const e=document.createElement("link").relList;i=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(r.map((e=>{if(e in a)return;a[e]=!0;const r=e.endsWith(".css"),t=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const n=document.createElement("link");return n.rel=r?"stylesheet":i,r||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),r?new Promise(((e,r)=>{n.addEventListener("load",e),n.addEventListener("error",r)})):void 0}))).then((()=>e()))};var l=e({});l.render=function(e,o,s,d,i,a){const c=n("router-view");return t(),r(c)};const u=o(l),m=s({history:d(),routes:[{path:"/mods",component:()=>c((()=>import("./mods.fdc7ba60.js")),["/assets/mods.fdc7ba60.js","/assets/mods.c491d8cb.css","/assets/vendor.e22d4117.js"])},{path:"/",component:()=>c((()=>import("./index.434ce9f5.js")),["/assets/index.434ce9f5.js","/assets/index.b37dc917.css","/assets/vendor.e22d4117.js"])}]});u.use(m),u.mount("#app");
