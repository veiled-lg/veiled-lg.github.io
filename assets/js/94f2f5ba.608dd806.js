"use strict";(self.webpackChunk_veiled_lg_veiled_lg_github_io=self.webpackChunk_veiled_lg_veiled_lg_github_io||[]).push([[611],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,v=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return r?n.createElement(v,l(l({ref:t},d),{},{components:r})):n.createElement(v,l({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2398:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:12,sidebar_label:"string"},l="write_string",o={unversionedId:"lua/memory/process/write/string",id:"lua/memory/process/write/string",title:"write_string",description:"Writes the string value to the given address.",source:"@site/docs/lua/memory/process/write/string.md",sourceDirName:"lua/memory/process/write",slug:"/lua/memory/process/write/string",permalink:"/docs/lua/memory/process/write/string",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,sidebar_label:"string"},sidebar:"tutorialSidebar",previous:{title:"f64",permalink:"/docs/lua/memory/process/write/f64"},next:{title:"get_module",permalink:"/docs/lua/memory/process/get_module"}},s={},u=[{value:"Declaration",id:"declaration",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>address</code>",id:"address",level:3},{value:"<code>value</code>",id:"value",level:3},{value:"<code>length</code>",id:"length",level:3},{value:"<code>unicode</code>",id:"unicode",level:3},{value:"Return value",id:"return-value",level:2}],d={toc:u};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"write_string"},"write_string"),(0,i.kt)("p",null,"Writes the ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," to the given ",(0,i.kt)("inlineCode",{parentName:"p"},"address"),"."),(0,i.kt)("h2",{id:"declaration"},"Declaration"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".write_string(address, value[, length, unicode])")),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'Process.write_string(0xDEADBEEF, "Hello, World")\n')),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("h3",{id:"address"},(0,i.kt)("inlineCode",{parentName:"h3"},"address")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"address")," in the target process space as number (32/64 bit integer)."),(0,i.kt)("h3",{id:"value"},(0,i.kt)("inlineCode",{parentName:"h3"},"value")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," to write."),(0,i.kt)("h3",{id:"length"},(0,i.kt)("inlineCode",{parentName:"h3"},"length")),(0,i.kt)("p",null,"By default the length of ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," is evaluated, with this you can limit the length."),(0,i.kt)("h3",{id:"unicode"},(0,i.kt)("inlineCode",{parentName:"h3"},"unicode")),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"unicode")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", then ",(0,i.kt)("inlineCode",{parentName:"p"},"wchar_t")," is used under the hood."),(0,i.kt)("h2",{id:"return-value"},"Return value"),(0,i.kt)("p",null,"The function returns no value."))}c.isMDXComponent=!0}}]);