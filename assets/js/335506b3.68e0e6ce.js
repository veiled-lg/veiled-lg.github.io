"use strict";(self.webpackChunk_veiled_lg_veiled_lg_github_io=self.webpackChunk_veiled_lg_veiled_lg_github_io||[]).push([[8311],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4512:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_position:8,sidebar_label:"u32"},i="read_u32",l={unversionedId:"lua/memory/process/read/u32",id:"lua/memory/process/read/u32",title:"read_u32",description:"Reads an unsigned 32 bit integer (four bytes) from given address.",source:"@site/docs/lua/memory/process/read/u32.md",sourceDirName:"lua/memory/process/read",slug:"/lua/memory/process/read/u32",permalink:"/docs/lua/memory/process/read/u32",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"u32"},sidebar:"tutorialSidebar",previous:{title:"u16",permalink:"/docs/lua/memory/process/read/u16"},next:{title:"u64",permalink:"/docs/lua/memory/process/read/u64"}},u={},s=[{value:"Declaration",id:"declaration",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameter",id:"parameter",level:2},{value:"<code>address</code>",id:"address",level:3},{value:"Return value",id:"return-value",level:2}],c={toc:s};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"read_u32"},"read_u32"),(0,a.kt)("p",null,"Reads an unsigned 32 bit integer (four bytes) from given ",(0,a.kt)("inlineCode",{parentName:"p"},"address"),"."),(0,a.kt)("h2",{id:"declaration"},"Declaration"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".read_u32(address)")),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local value = Process.read_u32(0xDEADBEEF)\n")),(0,a.kt)("h2",{id:"parameter"},"Parameter"),(0,a.kt)("h3",{id:"address"},(0,a.kt)("inlineCode",{parentName:"h3"},"address")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"address")," in the target process space as number (32/64 bit integer)."),(0,a.kt)("h2",{id:"return-value"},"Return value"),(0,a.kt)("p",null,"If the function succeeds, the return type is ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,a.kt)("p",null,"If the function fails, the return type is ",(0,a.kt)("inlineCode",{parentName:"p"},"nil"),"."))}d.isMDXComponent=!0}}]);