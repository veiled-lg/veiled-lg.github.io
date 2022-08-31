"use strict";(self.webpackChunk_veiled_lg_veiled_lg_github_io=self.webpackChunk_veiled_lg_veiled_lg_github_io||[]).push([[8970],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(v,o(o({ref:t},c),{},{components:r})):n.createElement(v,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2254:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:4,sidebar_label:"i32"},o="write_i32",l={unversionedId:"lua/memory/process/write/i32",id:"lua/memory/process/write/i32",title:"write_i32",description:"Writes the value as signed 32 bit integer (four bytes) to the given address.",source:"@site/docs/lua/memory/process/write/i32.md",sourceDirName:"lua/memory/process/write",slug:"/lua/memory/process/write/i32",permalink:"/docs/lua/memory/process/write/i32",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"i32"},sidebar:"tutorialSidebar",previous:{title:"i16",permalink:"/docs/lua/memory/process/write/i16"},next:{title:"i64",permalink:"/docs/lua/memory/process/write/i64"}},s={},u=[{value:"Declaration",id:"declaration",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameter",id:"parameter",level:2},{value:"<code>address</code>",id:"address",level:3},{value:"<code>value</code>",id:"value",level:3},{value:"Return value",id:"return-value",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"write_i32"},"write_i32"),(0,i.kt)("p",null,"Writes the ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," as signed 32 bit integer (four bytes) to the given ",(0,i.kt)("inlineCode",{parentName:"p"},"address"),"."),(0,i.kt)("h2",{id:"declaration"},"Declaration"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".write_i116(address, value)")),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Process.write_i32(0xDEADBEEF, 1337)\n")),(0,i.kt)("h2",{id:"parameter"},"Parameter"),(0,i.kt)("h3",{id:"address"},(0,i.kt)("inlineCode",{parentName:"h3"},"address")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"address")," in the target process space as number (32/64 bit integer)."),(0,i.kt)("h3",{id:"value"},(0,i.kt)("inlineCode",{parentName:"h3"},"value")),(0,i.kt)("p",null,"The signed 32 bit integer ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," to write."),(0,i.kt)("h2",{id:"return-value"},"Return value"),(0,i.kt)("p",null,"The function returns no value."))}p.isMDXComponent=!0}}]);